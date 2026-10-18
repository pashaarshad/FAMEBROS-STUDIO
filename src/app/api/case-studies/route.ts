import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import CaseStudy from '@/models/CaseStudy';
import { baselineCaseStudies } from '@/lib/baselineData';
import { isAuthenticated } from '@/lib/auth';

export async function GET() {
  try {
    const conn = await connectToDatabase();

    if (conn) {
      const existingDocs = await CaseStudy.find({}).sort({ createdAt: -1 }).lean();
      const existingSlugs = new Set(existingDocs.map((d) => d.slug));

      // Seed baseline case studies into DB if they do not exist yet
      for (const b of baselineCaseStudies) {
        if (!existingSlugs.has(b.slug)) {
          try {
            await CaseStudy.create({
              slug: b.slug,
              clientName: b.clientName,
              industry: b.industry,
              headline: b.headline,
              metric: b.metric,
              problem: b.problem,
              strategy: b.strategy,
              contentCreated: b.contentCreated || '',
              shoots: b.shoots || '',
              influencerMarketing: b.influencerMarketing || '',
              ads: b.ads || '',
              results: b.results,
              testimonialQuote: b.testimonialQuote || '',
              testimonialAuthor: b.testimonialAuthor || b.clientName,
              testimonialRole: b.testimonialRole || 'Owner',
              imageUrl: b.imageUrl || '',
              videoUrl: b.videoUrl || '',
              isCustom: false,
            });
          } catch (seedErr) {
            console.error('Seed case study error:', seedErr);
          }
        }
      }

      // Re-fetch all documents from MongoDB so all have real IDs and are editable
      const allDocs = await CaseStudy.find({}).sort({ createdAt: 1 }).lean();
      const mongoCaseStudies = allDocs.map((doc) => ({
        ...doc,
        id: doc._id.toString(),
        isLocked: false,
      }));

      return NextResponse.json({ success: true, data: mongoCaseStudies });
    }

    // Fallback to baseline data on error or no connection
    const unlocked = baselineCaseStudies.map((b) => ({ ...b, isLocked: false }));
    return NextResponse.json({ success: true, data: unlocked });
  } catch (error) {
    console.error('GET CaseStudies Error:', error);
    const unlocked = baselineCaseStudies.map((b) => ({ ...b, isLocked: false }));
    return NextResponse.json({ success: true, data: unlocked });
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
