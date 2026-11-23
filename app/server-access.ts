import { env } from 'cloudflare:workers';
import { getChatGPTUser } from './chatgpt-auth';

export async function getAccess() {
  const user = await getChatGPTUser();
  if (!user) return { user: null, role: 'anonymous' as const, student: null };
  const database = (env as unknown as { DB?: D1Database }).DB;
  if (!database) return { user, role: 'unapproved' as const, student: null };
  const account = await database.prepare('SELECT id,email,display_name AS displayName,grade,status,role FROM accounts WHERE id=?').bind(user.userId).first<{id:string,email:string,displayName:string,grade:string,status:string,role:string}>();
  if (account?.role === 'admin') return { user, role: 'admin' as const, student: null };
  return { user, role: account?.role === 'student' && account.status === 'active' ? 'student' as const : 'unapproved' as const, student: account || null };
}
