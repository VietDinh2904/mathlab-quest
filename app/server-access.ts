import { env } from 'cloudflare:workers';
import { eq } from 'drizzle-orm';
import { getChatGPTUser } from './chatgpt-auth';
import { getDb } from '../db';
import { students } from '../db/schema';

export async function getAccess() {
  const user = await getChatGPTUser();
  if (!user) return { user: null, role: 'anonymous' as const, student: null };
  const adminEmail = String((env as unknown as { ADMIN_EMAIL?: string }).ADMIN_EMAIL || '').toLowerCase();
  if (adminEmail && user.email === adminEmail) return { user, role: 'admin' as const, student: null };
  const [student] = await getDb().select().from(students).where(eq(students.email, user.email)).limit(1);
  return { user, role: student?.status === 'active' ? 'student' as const : 'unapproved' as const, student: student || null };
}
