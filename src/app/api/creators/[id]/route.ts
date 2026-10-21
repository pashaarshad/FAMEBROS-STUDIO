import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from '@/lib/mongodb';
import Creator from '@/models/Creator';
import { isAuthenticated } from '@/lib/auth';

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
    if (mongoose.Types.ObjectId.isValid(id)) {
      updated = await Creator.findByIdAndUpdate(id, { $set: updateData }, { new: true });
    }

    if (!updated && (updateData.handle || updateData.name)) {
      const query = updateData.handle ? { handle: updateData.handle } : { name: updateData.name };
      updated = await Creator.findOneAndUpdate(query, { $set: updateData }, { new: true, upsert: true });
    }

    if (!updated) {
      return NextResponse.json({ success: false, message: 'Creator not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: {
        ...(typeof updated.toObject === 'function' ? updated.toObject() : updated),
        id: updated._id ? updated._id.toString() : id,
      },
    });
  } catch (error) {
    console.error('PUT Creator Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to update creator' }, { status: 500 });
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
      deleted = await Creator.findByIdAndDelete(id);
    }

    if (!deleted) {
      deleted = await Creator.findOneAndDelete({
        $or: [{ handle: id }, { name: id }],
      });
    }

    return NextResponse.json({ success: true, message: 'Creator deleted' });
  } catch (error) {
    console.error('DELETE Creator Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to delete creator' }, { status: 500 });
  }
}
