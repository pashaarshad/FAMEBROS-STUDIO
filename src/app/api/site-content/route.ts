import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { SiteContent } from '@/models/SiteContent';
import { SITE_CONTENT_DEFAULTS } from '@/lib/siteContentDefaults';

/**
 * GET /api/site-content?section=hero
 * Returns all key→value pairs for a section, merging DB overrides over defaults.
 *
 * GET /api/site-content  (no section param)
 * Returns all sections with all keys, merged.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get('section');

  await connectToDatabase();

  try {
    const query = section ? { section } : {};
    const dbRows = await SiteContent.find(query).lean();

    // Index DB rows
    const dbMap: Record<string, Record<string, string>> = {};
    for (const row of dbRows) {
      if (!dbMap[row.section]) dbMap[row.section] = {};
      dbMap[row.section][row.key] = row.value;
    }

    if (section) {
      // Merge defaults + DB overrides for this section
      const defaults = SITE_CONTENT_DEFAULTS[section] || {};
      const merged = { ...defaults, ...(dbMap[section] || {}) };
      return NextResponse.json({ success: true, section, data: merged });
    } else {
      // Return all sections merged
      const allSections: Record<string, Record<string, string>> = {};
      for (const [sec, keys] of Object.entries(SITE_CONTENT_DEFAULTS)) {
        allSections[sec] = { ...keys, ...(dbMap[sec] || {}) };
      }
      // Also include any DB sections not in defaults
      for (const [sec, keys] of Object.entries(dbMap)) {
        if (!allSections[sec]) allSections[sec] = keys;
      }
      return NextResponse.json({ success: true, data: allSections });
    }
  } catch (error) {
    console.error('GET /api/site-content error:', error);
    // Graceful fallback: return static defaults
    if (section) {
      return NextResponse.json({
        success: true,
        section,
        data: SITE_CONTENT_DEFAULTS[section] || {},
      });
    }
    return NextResponse.json({ success: true, data: SITE_CONTENT_DEFAULTS });
  }
}

/**
 * POST /api/site-content
 * Upsert a single key in a section.
 * Body: { section: string, key: string, value: string }
 *
 * Also supports bulk upsert:
 * Body: { section: string, updates: { [key: string]: string } }
 */
export async function POST(request: NextRequest) {
  // Admin auth check
  const { cookies } = request;
  const session = cookies.get('admin_session');
  if (!session?.value) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const conn = await connectToDatabase();
  if (!conn) {
    return NextResponse.json(
      { success: false, error: 'Database not connected' },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { section } = body;

    if (!section) {
      return NextResponse.json(
        { success: false, error: 'section is required' },
        { status: 400 }
      );
    }

    // Bulk upsert mode
    if (body.updates && typeof body.updates === 'object') {
      const ops = Object.entries(body.updates as Record<string, string>).map(
        ([key, value]) => ({
          updateOne: {
            filter: { section, key },
            update: { $set: { value } },
            upsert: true,
          },
        })
      );
      await SiteContent.bulkWrite(ops);
      return NextResponse.json({ success: true, message: `Saved ${ops.length} fields` });
    }

    // Single upsert mode
    const { key, value } = body;
    if (!key || value === undefined) {
      return NextResponse.json(
        { success: false, error: 'key and value are required' },
        { status: 400 }
      );
    }

    await SiteContent.findOneAndUpdate(
      { section, key },
      { $set: { value } },
      { upsert: true, new: true }
    );

    return NextResponse.json({ success: true, message: 'Saved' });
  } catch (error) {
    console.error('POST /api/site-content error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
