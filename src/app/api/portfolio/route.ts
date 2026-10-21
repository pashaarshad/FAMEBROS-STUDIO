import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import PortfolioItem from '@/models/PortfolioItem';
import { isAuthenticated } from '@/lib/auth';
import { ALL_CODE_VIDEOS } from '@/lib/portfolioConstants';

export async function GET() {
  try {
    const conn = await connectToDatabase();

    if (conn) {
      // Find existing items in database
      const existingDocs = await PortfolioItem.find({}).lean();
      const existingUrls = new Set(existingDocs.map((d) => d.videoUrl));

      // Find any videos from ALL_CODE_VIDEOS that are not in DB yet
      const missing = ALL_CODE_VIDEOS.filter((v) => !existingUrls.has(v.videoUrl));
      if (missing.length > 0) {
        await PortfolioItem.insertMany(missing);
      }

      const docs = await PortfolioItem.find({}).sort({ createdAt: 1 }).lean();
      
      const seenUrls = new Set<string>();
      const mongoItems = [];
      const duplicateIds: string[] = [];

      for (const doc of docs) {
        const key = doc.videoUrl ? doc.videoUrl.trim() : doc._id.toString();
        if (seenUrls.has(key)) {
          duplicateIds.push(doc._id.toString());
          continue;
        }
        seenUrls.add(key);
        mongoItems.push({
          ...doc,
          id: doc._id.toString(),
          isLocked: false,
        });
      }

      // Automatically prune duplicate records from MongoDB Atlas in background
      if (duplicateIds.length > 0) {
        PortfolioItem.deleteMany({ _id: { $in: duplicateIds } }).catch((err) =>
          console.error('Failed to cleanup duplicate portfolio items:', err)
        );
      }

      return NextResponse.json({ success: true, data: mongoItems });
    }

    // Fallback if DB offline
    const fallback = ALL_CODE_VIDEOS.map((p, i) => ({
      ...p,
      id: `p_${i}`,
      isLocked: false,
    }));
    return NextResponse.json({ success: true, data: fallback });
  } catch (error) {
    console.error('GET Portfolio Error:', error);
    const fallback = ALL_CODE_VIDEOS.map((p, i) => ({
      ...p,
      id: `p_${i}`,
      isLocked: false,
    }));
    return NextResponse.json({ success: true, data: fallback });
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
