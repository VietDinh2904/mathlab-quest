import { env } from 'cloudflare:workers';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { tokenHash } from '../../../auth-password';

export async function GET(request: Request) {
  const token = (await cookies()).get('math_quest_session')?.value;
  const database = (env as unknown as { DB?:D1Database }).DB;
  if (token && database) await database.prepare('DELETE FROM sessions WHERE token_hash=?').bind(await tokenHash(token)).run();
  const url = new URL(request.url);
  const nextValue = url.searchParams.get('next');
  const next = nextValue?.startsWith('/') && !nextValue.startsWith('//') ? nextValue : '/';
  const response = NextResponse.redirect(new URL(next, url.origin));
  response.cookies.set('math_quest_session', '', { httpOnly:true, secure:true, sameSite:'lax', path:'/', maxAge:0 });
  return response;
}
