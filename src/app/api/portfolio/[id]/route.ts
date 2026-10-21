import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from '@/lib/mongodb';
import PortfolioItem from '@/models/PortfolioItem';
import { isAuthenticated } from '@/lib/auth';
import { ALL_CODE_VIDEOS } from '@/lib/portfolioConstants';

export async function PUT(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await isAuthenticated();
    if (!auth) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const params = await props.params;
    const { id } = params;

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { success: false, message: 'MongoDB connection not configured' },
        { status: 503 }
      );
    }

    const body = await request.json();
    // Exclude any incoming id or _id so Mongoose doesn't fail on cast or immutable _id
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, id: _clientId, ...updateData } = body;

    let updated = null;

    // 1. Try finding by MongoDB ObjectId if valid
    if (mongoose.Types.ObjectId.isValid(id)) {
      updated = await PortfolioItem.findByIdAndUpdate(id, { $set: updateData }, { new: true });
    }

    // 2. If not found by ObjectId, or if ID is a fallback index (e.g. 'p_0')
    if (!updated) {
      let defaultSeed = null;
      if (id.startsWith('p_')) {
        const idx = parseInt(id.replace('p_', ''), 10);
        if (!isNaN(idx) && ALL_CODE_VIDEOS[idx]) {
          defaultSeed = ALL_CODE_VIDEOS[idx];
        }
      }

      // Query by videoUrl or title
      const videoUrlToMatch = updateData.videoUrl || defaultSeed?.videoUrl;
      const titleToMatch = updateData.title || defaultSeed?.title;

      const queryFilter = videoUrlToMatch
        ? { videoUrl: videoUrlToMatch }
        : titleToMatch
        ? { title: titleToMatch }
        : null;

      if (queryFilter) {
        const mergedData = defaultSeed
          ? { ...defaultSeed, ...updateData }
          : updateData;

        updated = await PortfolioItem.findOneAndUpdate(
          queryFilter,
          { $set: mergedData },
          { new: true, upsert: true }
        );
      }
    }

    if (!updated) {
      return NextResponse.json({ success: false, message: 'Portfolio item not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: {
        ...(typeof updated.toObject === 'function' ? updated.toObject() : updated),
        id: updated._id ? updated._id.toString() : id,
      },
    });
  } catch (error) {
    console.error('PUT Portfolio Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to update item' }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  props: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await isAuthenticated();
    if (!auth) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const params = await props.params;
    const { id } = params;

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { success: false, message: 'MongoDB connection not configured' },
        { status: 503 }
      );
    }

    let deleted = null;
    if (mongoose.Types.ObjectId.isValid(id)) {
      deleted = await PortfolioItem.findByIdAndDelete(id);
    }

    if (!deleted && id.startsWith('p_')) {
      const idx = parseInt(id.replace('p_', ''), 10);
      if (!isNaN(idx) && ALL_CODE_VIDEOS[idx]) {
        deleted = await PortfolioItem.findOneAndDelete({
          $or: [
            { videoUrl: ALL_CODE_VIDEOS[idx].videoUrl },
            { title: ALL_CODE_VIDEOS[idx].title },
          ],
        });
      }
    }

    if (!deleted) {
      // If still not deleted, check if id matches videoUrl or title directly
      deleted = await PortfolioItem.findOneAndDelete({
        $or: [{ videoUrl: id }, { title: id }],
      });
    }

    return NextResponse.json({ success: true, message: 'Item deleted' });
  } catch (error) {
    console.error('DELETE Portfolio Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to delete item' }, { status: 500 });
  }
}
