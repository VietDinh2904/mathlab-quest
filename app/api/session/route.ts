import { NextResponse } from 'next/server';
import { getAccess } from '../../server-access';

export const dynamic = 'force-dynamic';
export async function GET() {
  const access = await getAccess();
  if (!access.user) return NextResponse.json({ role: 'anonymous' }, { status: 401 });
  return NextResponse.json({ role: access.role, email: access.user.email, displayName: access.user.displayName });
}
