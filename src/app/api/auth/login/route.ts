import { NextResponse } from 'next/server';
import { verifyPasscode, setAdminSession } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { passcode } = body;

    if (!passcode || !verifyPasscode(passcode)) {
      return NextResponse.json(
        { success: false, message: 'Invalid admin passcode' },
        { status: 401 }
      );
    }

    await setAdminSession();
    return NextResponse.json({ success: true, message: 'Authenticated successfully' });
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
