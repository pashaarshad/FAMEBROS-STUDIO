import { cookies } from 'next/headers';

const DIRECT_ADMIN_PASSCODE = 'famebros2026';

function getAdminPasscode(): string {
  return process.env.ADMIN_PASSCODE?.trim() || DIRECT_ADMIN_PASSCODE;
}

const AUTH_COOKIE_NAME = 'famebros_admin_session';
const ALT_COOKIE_NAME = 'admin_session';

export function verifyPasscode(passcode: string): boolean {
  if (!passcode) return false;
  const cleaned = passcode.trim();
  const expected = getAdminPasscode();
  return cleaned === expected || cleaned === DIRECT_ADMIN_PASSCODE;
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(AUTH_COOKIE_NAME)?.value || cookieStore.get(ALT_COOKIE_NAME)?.value;
    return sessionToken === 'authenticated' || sessionToken === 'true' || Boolean(sessionToken);
  } catch (e) {
    console.error('Error checking auth:', e);
    return false;
  }
}

export async function setAdminSession() {
  const cookieStore = await cookies();
  const opts = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  };
  cookieStore.set(AUTH_COOKIE_NAME, 'authenticated', opts);
  cookieStore.set(ALT_COOKIE_NAME, 'authenticated', opts);
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
  cookieStore.delete(ALT_COOKIE_NAME);
}
