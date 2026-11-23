import { env } from 'cloudflare:workers';
import { NextResponse } from 'next/server';
import { randomToken, tokenHash, verifyPassword } from '../../../auth-password';

export async function POST(request: Request) {
  const body = await request.json() as { email?:string; password?:string; next?:string };
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');
  const database = (env as unknown as { DB?:D1Database }).DB;
  if (!database) return NextResponse.json({ error:'database_unavailable' }, { status:503 });
  const account = await database.prepare("SELECT id,email,display_name AS displayName,password_hash AS passwordHash,password_salt AS passwordSalt,status FROM accounts WHERE email=?").bind(email).first<{id:string,email:string,displayName:string,passwordHash:string|null,passwordSalt:string|null,status:string}>();
  if (!account || account.status !== 'active' || !(await verifyPassword(password, account.passwordSalt, account.passwordHash))) return NextResponse.json({ error:'invalid_credentials' }, { status:401 });
  const token = randomToken();
  const expires = new Date(Date.now() + 14*86400000).toISOString();
  await database.prepare('INSERT INTO sessions (id,account_id,token_hash,expires_at) VALUES (?,?,?,?)').bind(crypto.randomUUID(), account.id, await tokenHash(token), expires).run();
  const next = body.next?.startsWith('/') && !body.next.startsWith('//') ? body.next : '/student';
  const response = NextResponse.json({ ok:true, next });
  response.cookies.set('math_quest_session', token, { httpOnly:true, secure:true, sameSite:'lax', path:'/', maxAge:14*86400 });
  return response;
}
