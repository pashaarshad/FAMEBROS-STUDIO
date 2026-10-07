import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { isAuthenticated } from '@/lib/auth';

// Max sizes
const MAX_IMAGE_MB = 5;
const MAX_VIDEO_MB = 15;



export async function POST(request: NextRequest) {
  // Admin auth check
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const type = (formData.get('type') as string) || 'image'; // 'image' | 'video'

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const sizeMB = buffer.byteLength / (1024 * 1024);

    // Validate type and size
    const isVideo = type === 'video';
    const maxMB = isVideo ? MAX_VIDEO_MB : MAX_IMAGE_MB;

    if (sizeMB > maxMB) {
      return NextResponse.json(
        {
          success: false,
          error: `File too large. Maximum allowed is ${maxMB} MB. Your file is ${sizeMB.toFixed(1)} MB.`,
        },
        { status: 413 }
      );
    }

    // Validate MIME type
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
    const allowedVideoTypes = ['video/mp4', 'video/webm', 'video/quicktime'];
    const allowed = isVideo ? allowedVideoTypes : allowedImageTypes;

    if (!allowed.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: `Invalid file type: ${file.type}` },
        { status: 400 }
      );
    }

    // Build safe filename
    const ext = file.name.split('.').pop()?.toLowerCase() || (isVideo ? 'mp4' : 'jpg');
    const safeName = file.name
      .replace(/\.[^/.]+$/, '')
      .replace(/[^a-zA-Z0-9_-]/g, '_')
      .slice(0, 40);
    const filename = `${safeName}_${Date.now()}.${ext}`;

    // Determine upload folder
    const subFolder = isVideo ? 'videos' : 'brands';
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', subFolder);
    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    const publicUrl = `/uploads/${subFolder}/${filename}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename,
      sizeMB: sizeMB.toFixed(2),
    });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ success: false, error: 'Upload failed' }, { status: 500 });
  }
}
