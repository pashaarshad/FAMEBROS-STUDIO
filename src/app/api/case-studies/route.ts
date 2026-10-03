import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import CaseStudy from '@/models/CaseStudy';
import { baselineCaseStudies } from '@/lib/baselineData';
import { isAuthenticated } from '@/lib/auth';

export async function GET() {
  try {
    const conn = await connectToDatabase();
    let mongoCaseStudies: Array<Record<string, unknown>> = [];

    if (conn) {
      const docs = await CaseStudy.find({}).sort({ createdAt: -1 }).lean();
      mongoCaseStudies = docs.map((doc) => ({
        ...doc,
        id: doc._id.toString(),
        isLocked: false,
      }));
    }

    // Merge baseline locked case studies with dynamic MongoDB entries
    const combined = [...baselineCaseStudies, ...mongoCaseStudies];
    return NextResponse.json({ success: true, data: combined });
  } catch (error) {
    console.error('GET CaseStudies Error:', error);
    // Fallback to baseline data on error
    return NextResponse.json({ success: true, data: baselineCaseStudies });
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
    const {
      clientName,
      industry,
      headline,
      metric,
      problem,
      strategy,
      contentCreated,
      shoots,
      influencerMarketing,
      ads,
      results,
      testimonialQuote,
      testimonialAuthor,
      testimonialRole,
      imageUrl,
      videoUrl,
    } = body;

    if (!clientName || !industry || !headline || !metric || !problem || !strategy || !results) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const slug = body.slug || headline.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now();

    const newCaseStudy = await CaseStudy.create({
      slug,
      clientName,
      industry,
      headline,
      metric,
      problem,
      strategy,
      contentCreated: contentCreated || '',
      shoots: shoots || '',
      influencerMarketing: influencerMarketing || '',
      ads: ads || '',
      results,
      testimonialQuote: testimonialQuote || '',
      testimonialAuthor: testimonialAuthor || clientName,
      testimonialRole: testimonialRole || 'Owner',
      imageUrl: imageUrl || '',
      videoUrl: videoUrl || '',
      isCustom: true,
    });

    return NextResponse.json({ success: true, data: newCaseStudy }, { status: 201 });
  } catch (error) {
    console.error('POST CaseStudy Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to create case study' }, { status: 500 });
  }
}
