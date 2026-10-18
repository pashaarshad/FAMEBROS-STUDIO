import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Brand } from '@/models/Brand';
import { isAuthenticated } from '@/lib/auth';

// Baseline locked brands (from Hero.tsx clientLogos)
const BASELINE_BRANDS = [
  { name: 'Audi',                      logoUrl: '/clients-logo/Audi.webp' },
  { name: 'Cadbury',                   logoUrl: '/clients-logo/Cadbury-logo.png' },
  { name: 'Cello Writing',             logoUrl: '/clients-logo/Cello Writing-logo.png' },
  { name: 'Filmfare',                  logoUrl: '/clients-logo/Filmfare-logo.png' },
  { name: 'Flipkart',                  logoUrl: '/clients-logo/Flipkart-logo.png' },
  { name: 'Hip-hop',                   logoUrl: '/clients-logo/Hip-hop-logo.jpg' },
  { name: 'Indian Idol',               logoUrl: '/clients-logo/Indian Idol-logo.png' },
  { name: 'JioMart',                   logoUrl: '/clients-logo/JioMart-logo.png' },
  { name: 'Laughter Chefs',            logoUrl: '/clients-logo/Laughter Chefs-logo.png' },
  { name: 'Launch Control',            logoUrl: '/clients-logo/Launch Control-logo.png' },
  { name: 'Meta',                      logoUrl: '/clients-logo/Meta-Logo.png' },
  { name: 'Netflix',                   logoUrl: '/clients-logo/Netflix-logo.webp' },
  { name: 'Pro Govinda India',         logoUrl: '/clients-logo/Pro Govinda India-logo.png' },
  { name: 'Red Chillies Entertainment',logoUrl: '/clients-logo/Red Chillies Entertainment-logo.webp' },
  { name: 'Samsung',                   logoUrl: '/clients-logo/Samsung-logo.png' },
  { name: 'Baskin Robbins',            logoUrl: '/clients-logo/baskin-robbins-logo.png' },
  { name: 'Realme',                    logoUrl: '/clients-logo/realme_logo.png' },
];

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

      return NextResponse.json({ success: true, data: allBrands });
    }

    // Fallback if no db connection
    const baselines = BASELINE_BRANDS.map((b, i) => ({
      ...b,
      id: `baseline_${i}`,
      isLocked: false,
      order: i,
    }));
    return NextResponse.json({ success: true, data: baselines });
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

    const brand = await Brand.findById(id);
    if (!brand) {
      return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    }

    await brand.deleteOne();
    return NextResponse.json({ success: true, message: 'Deleted' });
  } catch (err) {
    console.error('DELETE /api/brands error:', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
