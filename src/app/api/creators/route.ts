import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Creator from '@/models/Creator';
import { isAuthenticated } from '@/lib/auth';

const baselineCreators = [
  {
    id: 'locked-c1',
    name: 'Aanya Shah',
    handle: '@aanyastyle',
    niche: 'Fashion & Lifestyle',
    followerCount: '240K',
    avatarUrl: '/professional photos for profile picture.jpg.jpeg',
    platform: 'Instagram',
    location: 'Mumbai',
    isLocked: true,
  },
  {
    id: 'locked-c2',
    name: 'Rohan Deshmukh',
    handle: '@rohanfoodie',
    niche: 'Food & Culinary',
    followerCount: '180K',
    avatarUrl: '/camera.jpg',
    platform: 'Instagram',
    location: 'Mumbai',
    isLocked: true,
  },
  {
    id: 'locked-c3',
    name: 'Priya Verma',
    handle: '@priyabeauty',
    niche: 'Beauty & Skincare',
    followerCount: '310K',
    avatarUrl: '/imp-doc/logo.png',
    platform: 'Instagram',
    location: 'Mumbai',
    isLocked: true,
  },
];

export async function GET() {
  try {
    const conn = await connectToDatabase();
    let mongoCreators: Array<Record<string, unknown>> = [];

    if (conn) {
      const docs = await Creator.find({}).sort({ createdAt: -1 }).lean();
      mongoCreators = docs.map((doc) => ({
        ...doc,
        id: doc._id.toString(),
        isLocked: false,
      }));
    }

    const combined = [...baselineCreators, ...mongoCreators];
    return NextResponse.json({ success: true, data: combined });
  } catch (error) {
    console.error('GET Creators Error:', error);
    return NextResponse.json({ success: true, data: baselineCreators });
  }
}

export async function POST(request: Request) {
  try {
    const auth = await isAuthenticated();
    if (!auth) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { success: false, message: 'MongoDB connection not configured' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, handle, niche, followerCount, avatarUrl, platform, contactEmail, location } = body;

    if (!name || !handle || !niche || !followerCount || !avatarUrl) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const newCreator = await Creator.create({
      name,
      handle,
      niche,
      followerCount,
      avatarUrl,
      platform: platform || 'Instagram',
      contactEmail: contactEmail || '',
      location: location || 'Mumbai',
      isCustom: true,
    });

    return NextResponse.json({ success: true, data: newCreator }, { status: 201 });
  } catch (error) {
    console.error('POST Creator Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to create creator profile' }, { status: 500 });
  }
}
