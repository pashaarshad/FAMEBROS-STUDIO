import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import PortfolioItem from '@/models/PortfolioItem';
import { isAuthenticated } from '@/lib/auth';

const baselinePortfolio = [
  {
    id: 'locked-p1',
    title: 'Restaurant Sizzle Shoot',
    category: 'Restaurant & Hospitality',
    clientName: 'Gourmet Bistro Mulund',
    thumbnailUrl: '/vedios-hero/1st__poster.jpg',
    videoUrl: '/vedios-hero/1st_.mp4',
    description: 'High-energy 4K food sizzle reel highlighting chef signature dishes.',
    metricLabel: 'Revenue Boost',
    metricValue: '+240%',
    isLocked: true,
  },
  {
    id: 'locked-p2',
    title: 'Boutique Apparel Lookbook',
    category: 'Fashion & Retail',
    clientName: 'StyleStudio Mumbai',
    thumbnailUrl: '/vedios-hero/2nd_poster.jpg',
    videoUrl: '/vedios-hero/2nd.mp4',
    description: 'Model try-on reel featuring new seasonal festive collection.',
    metricLabel: 'Sales Inquiries',
    metricValue: '3.2X',
    isLocked: true,
  },
  {
    id: 'locked-p3',
    title: 'Fitness Transformation Campaign',
    category: 'Fitness & Gym',
    clientName: 'Pulse Gym Mumbai',
    thumbnailUrl: '/vedios-hero/3rd_poster.jpg',
    videoUrl: '/vedios-hero/3rd.mp4',
    description: 'Trainer tip video and member transformation story.',
    metricLabel: 'Memberships',
    metricValue: '+180%',
    isLocked: true,
  },
  {
    id: 'locked-p4',
    title: 'Resort Villa Aerial Walkthrough',
    category: 'Travel & Resort',
    clientName: 'Ocean Palms Resort',
    thumbnailUrl: '/vedios-hero/4th_poster.jpg',
    videoUrl: '/vedios-hero/4th.mp4',
    description: 'Cinematic drone walkthrough of private pool villas.',
    metricLabel: 'Direct Bookings',
    metricValue: '+3.7X',
    isLocked: true,
  },
];

export async function GET() {
  try {
    const conn = await connectToDatabase();
    let mongoItems: Array<Record<string, unknown>> = [];

    if (conn) {
      const docs = await PortfolioItem.find({}).sort({ createdAt: -1 }).lean();
      mongoItems = docs.map((doc) => ({
        ...doc,
        id: doc._id.toString(),
        isLocked: false,
      }));
    }

    const combined = [...baselinePortfolio, ...mongoItems];
    return NextResponse.json({ success: true, data: combined });
  } catch (error) {
    console.error('GET Portfolio Error:', error);
    return NextResponse.json({ success: true, data: baselinePortfolio });
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
    const { title, category, clientName, thumbnailUrl, videoUrl, description, metricLabel, metricValue, sections } = body;

    if (!title || !category || !clientName || !thumbnailUrl) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const newItem = await PortfolioItem.create({
      title,
      category,
      clientName,
      thumbnailUrl,
      videoUrl: videoUrl || '',
      description: description || '',
      metricLabel: metricLabel || '',
      metricValue: metricValue || '',
      sections: Array.isArray(sections) && sections.length > 0 ? sections : ['what-our-clients-say', 'work'],
      isCustom: true,
    });

    return NextResponse.json({ success: true, data: newItem }, { status: 201 });
  } catch (error) {
    console.error('POST Portfolio Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to create portfolio item' }, { status: 500 });
  }
}
