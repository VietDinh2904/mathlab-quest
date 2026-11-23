import { NextResponse } from 'next/server';
import { desc, eq } from 'drizzle-orm';
import { randomUUID } from 'node:crypto';
import { getAccess } from '../../../server-access';
import { getDb } from '../../../../db';
import { progress, students } from '../../../../db/schema';

export const dynamic = 'force-dynamic';

async function requireAdmin() {
  const access = await getAccess();
  return access.role === 'admin' ? access : null;
}

export async function GET() {
  if (!await requireAdmin()) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const rows = await getDb().select().from(students).orderBy(desc(students.createdAt));
  const progressRows = await getDb().select().from(progress);
  const byEmail = new Map(progressRows.map(row => [row.studentEmail, row]));
  return NextResponse.json({ students: rows.map(student => {
    const saved = byEmail.get(student.email);
    let answered = 0, completed = 0, contest = 0;
    try {
      const snapshot = JSON.parse(saved?.snapshotJson || '{}') as Record<string,string>;
      for (const [key,value] of Object.entries(snapshot)) {
        const parsed = JSON.parse(value || '{}');
        if (key.startsWith('math-quest-')) { answered += Object.keys(parsed.answers || {}).length; completed += Object.keys(parsed.completed || {}).length; }
        if (key === 'smc-progress-v2') contest += Object.values(parsed || {}).filter((item: unknown) => Boolean((item as {answer?:unknown})?.answer)).length;
      }
    } catch {}
    return { ...student, answered, completed, contest, lastSync: saved?.updatedAt || null };
  }) });
}

export async function POST(request: Request) {
  const access = await requireAdmin();
  if (!access?.user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const body = await request.json() as { email?:string; displayName?:string; grade?:string };
  const email = String(body.email || '').trim().toLowerCase();
  const displayName = String(body.displayName || '').trim();
  if (!email.includes('@') || !displayName) return NextResponse.json({ error: 'Tên và email không hợp lệ.' }, { status: 400 });
  const now = new Date();
  try {
    await getDb().insert(students).values({ id: randomUUID(), email, displayName, grade: String(body.grade || '').trim(), status: 'active', createdBy: access.user.email, createdAt: now, updatedAt: now });
  } catch { return NextResponse.json({ error: 'Email học viên đã tồn tại.' }, { status: 409 }); }
  return NextResponse.json({ ok: true });
}

export async function PATCH(request: Request) {
  if (!await requireAdmin()) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const body = await request.json() as { id?:string; status?:string; displayName?:string; grade?:string };
  if (!body.id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  await getDb().update(students).set({
    ...(body.status ? { status: body.status === 'active' ? 'active' : 'paused' } : {}),
    ...(body.displayName ? { displayName: body.displayName.trim() } : {}),
    ...(body.grade !== undefined ? { grade: body.grade.trim() } : {}),
    updatedAt: new Date(),
  }).where(eq(students.id, body.id));
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  if (!await requireAdmin()) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const { id } = await request.json() as { id?:string };
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  const [student] = await getDb().select().from(students).where(eq(students.id, id)).limit(1);
  if (student) await getDb().delete(progress).where(eq(progress.studentEmail, student.email));
  await getDb().delete(students).where(eq(students.id, id));
  return NextResponse.json({ ok: true });
}
