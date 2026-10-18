import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import CaseStudy from '@/models/CaseStudy';
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
      return NextResponse.json({ success: false, message: 'MongoDB not connected' }, { status: 503 });
    }

    const body = await request.json();

    let updatedDoc = null;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      updatedDoc = await CaseStudy.findByIdAndUpdate(id, body, { new: true });
    }
    if (!updatedDoc) {
      updatedDoc = await CaseStudy.findOneAndUpdate({ slug: id }, body, { new: true });
    }

    if (!updatedDoc) {
      return NextResponse.json({ success: false, message: 'Case study not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedDoc });
  } catch (error) {
    console.error('PUT CaseStudy Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to update case study' }, { status: 500 });
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
      return NextResponse.json({ success: false, message: 'MongoDB not connected' }, { status: 503 });
    }

    let deletedDoc = null;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      deletedDoc = await CaseStudy.findByIdAndDelete(id);
    }
    if (!deletedDoc) {
      deletedDoc = await CaseStudy.findOneAndDelete({ slug: id });
    }

    if (!deletedDoc) {
      return NextResponse.json({ success: false, message: 'Case study not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    console.error('DELETE CaseStudy Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to delete case study' }, { status: 500 });
  }
}
