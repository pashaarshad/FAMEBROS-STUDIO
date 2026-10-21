import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import PortfolioItem from '@/models/PortfolioItem';
import { isAuthenticated } from '@/lib/auth';
import { ALL_CODE_VIDEOS } from '@/lib/portfolioConstants';

const EMERGENCY_PIN = '6565';

export async function POST(request: Request) {
  try {
    const auth = await isAuthenticated();
    if (!auth) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { pin, videoUrl } = body;

    if (String(pin).trim() !== EMERGENCY_PIN) {
      return NextResponse.json({ success: false, message: 'Invalid Emergency PIN. Please enter 6565.' }, { status: 403 });
    }

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { success: false, message: 'MongoDB connection not configured' },
        { status: 503 }
      );
    }

    // Case 1: Reset a single video to default
    if (videoUrl) {
      const defaultItem = ALL_CODE_VIDEOS.find((v) => v.videoUrl === videoUrl);
      if (!defaultItem) {
        return NextResponse.json({ success: false, message: 'Default video item not found in catalog' }, { status: 404 });
      }

      // First delete any duplicate records with this videoUrl
      await PortfolioItem.deleteMany({ videoUrl });

      // Create pristine record
      const restored = await PortfolioItem.create(defaultItem);

      return NextResponse.json({
        success: true,
        message: `"${defaultItem.title}" restored to default content successfully!`,
        data: {
          ...restored.toObject(),
          id: restored._id.toString(),
          isLocked: false,
        },
      });
    }

    // Case 2: Reset ALL portfolio videos to default
    await PortfolioItem.deleteMany({});
    const inserted = await PortfolioItem.insertMany(ALL_CODE_VIDEOS);

    const mongoItems = inserted.map((doc) => ({
      ...doc.toObject(),
      id: doc._id.toString(),
      isLocked: false,
    }));

    return NextResponse.json({
      success: true,
      message: 'All 18 portfolio items have been cleanly restored to defaults!',
      data: mongoItems,
    });
  } catch (error) {
    console.error('Reset Portfolio Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to reset portfolio items' }, { status: 500 });
  }
}
