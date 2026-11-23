import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getAccess } from '../../server-access';
import { getDb } from '../../../db';
import { progress } from '../../../db/schema';

export const dynamic = 'force-dynamic';
const ALLOWED = /^(math-quest-|smc-progress-v2$|international-math-review-flags-v1$)/;

export async function GET() {
  const access = await getAccess();
  if (!access.user || access.role !== 'student') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const [row] = await getDb().select().from(progress).where(eq(progress.studentEmail, access.user.email)).limit(1);
  return NextResponse.json({ snapshot: JSON.parse(row?.snapshotJson || '{}'), updatedAt: row?.updatedAt || null });
}

export async function PUT(request: Request) {
  const access = await getAccess();
  if (!access.user || access.role !== 'student') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const body = await request.json() as { snapshot?:Record<string,string> };
  const snapshot = Object.fromEntries(Object.entries(body.snapshot || {}).filter(([key,value]) => ALLOWED.test(key) && typeof value === 'string'));
  const encoded = JSON.stringify(snapshot);
  if (encoded.length > 1_500_000) return NextResponse.json({ error: 'Progress payload too large' }, { status: 413 });
  const now = new Date();
  await getDb().insert(progress).values({ studentEmail: access.user.email, snapshotJson: encoded, updatedAt: now })
    .onConflictDoUpdate({ target: progress.studentEmail, set: { snapshotJson: encoded, updatedAt: now } });
  return NextResponse.json({ ok: true, updatedAt: now });
}
