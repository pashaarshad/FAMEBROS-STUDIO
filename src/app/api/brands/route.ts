import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Brand } from '@/models/Brand';
import { isAuthenticated } from '@/lib/auth';
import { BASELINE_BRANDS } from '@/lib/brandsConstants';

/** GET /api/brands — returns all brands from MongoDB (auto-seeds baseline brands if empty) */
export async function GET() {
  const conn = await connectToDatabase();

  try {
    if (conn) {
      const count = await Brand.countDocuments();
      if (count === 0) {
        // Seed baseline brands as full DB records so they can be modified/deleted
        await Brand.insertMany(
          BASELINE_BRANDS.map((b, i) => ({
            name: b.name,
            logoUrl: b.logoUrl,
            isLocked: false,
            order: i,
          }))
        );
      }

      const dbBrands = await Brand.find({}).sort({ order: 1, createdAt: 1 }).lean();
      const allBrands = dbBrands.map((b) => ({
        id: String(b._id),
        name: b.name,
        logoUrl: b.logoUrl,
        isLocked: false,
        order: b.order ?? 0,
      }));

      return NextResponse.json(
        { success: true, data: allBrands },
        { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=1800' } }
      );
    }

    // Fallback if no db connection
    const baselines = BASELINE_BRANDS.map((b, i) => ({
      ...b,
      id: `baseline_${i}`,
      isLocked: false,
      order: i,
    }));
    return NextResponse.json(
      { success: true, data: baselines },
      { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=1800' } }
    );
  } catch (error) {
    console.error('GET /api/brands error:', error);
    const baselines = BASELINE_BRANDS.map((b, i) => ({
      ...b,
      id: `baseline_${i}`,
      isLocked: false,
      order: i,
    }));
    return NextResponse.json({ success: true, data: baselines });
  }
}

/** POST /api/brands  — add a new brand logo */
export async function POST(request: NextRequest) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const conn = await connectToDatabase();
  if (!conn) {
    return NextResponse.json({ success: false, error: 'Database not connected' }, { status: 503 });
  }

  try {
    const body = await request.json();
    const { name, logoUrl } = body;

    if (!name || !logoUrl) {
      return NextResponse.json(
        { success: false, error: 'name and logoUrl are required' },
        { status: 400 }
      );
    }

    const brand = await Brand.create({ name, logoUrl, isLocked: false });
    return NextResponse.json({ success: true, data: brand }, { status: 201 });
  } catch (err) {
    console.error('POST /api/brands error:', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

/** DELETE /api/brands?id=xxx  — delete a non-locked brand */
export async function DELETE(request: NextRequest) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const conn = await connectToDatabase();
  if (!conn) {
    return NextResponse.json({ success: false, error: 'Database not connected' }, { status: 503 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ success: false, error: 'id is required' }, { status: 400 });
    }

    let brand = null;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      brand = await Brand.findById(id);
    } else if (id.startsWith('baseline_') || id.startsWith('b_')) {
      const idx = parseInt(id.replace('baseline_', '').replace('b_', ''), 10);
      if (!isNaN(idx) && BASELINE_BRANDS[idx]) {
        brand = await Brand.findOne({
          $or: [{ name: BASELINE_BRANDS[idx].name }, { logoUrl: BASELINE_BRANDS[idx].logoUrl }],
        });
      }
    }

    if (!brand) {
      brand = await Brand.findOne({
        $or: [{ name: id }, { logoUrl: id }],
      });
    }

    if (!brand) {
      return NextResponse.json({ success: true, message: 'Deleted' });
    }

    await brand.deleteOne();
    return NextResponse.json({ success: true, message: 'Deleted' });
  } catch (err) {
    console.error('DELETE /api/brands error:', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
