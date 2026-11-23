import { env } from 'cloudflare:workers';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export type ChatGPTUser = { userId: string; email: string; displayName: string };

export async function getChatGPTUser(): Promise<ChatGPTUser | null> {
  const token = (await cookies()).get('math_quest_session')?.value;
  const database = (env as unknown as { DB?: D1Database }).DB;
  if (!token || !database) return null;
  const tokenHash = await sha256(token);
  const account = await database.prepare(`SELECT a.id, a.email, a.display_name AS displayName
    FROM sessions s JOIN accounts a ON a.id=s.account_id
    WHERE s.token_hash=? AND s.expires_at > CURRENT_TIMESTAMP AND a.status='active'`).bind(tokenHash).first<{id:string,email:string,displayName:string}>();
  return account ? { userId: account.id, email: account.email.toLowerCase(), displayName: account.displayName } : null;
}

export async function requireChatGPTUser(returnTo: string) {
  const user = await getChatGPTUser();
  if (user) return user;
  redirect(chatGPTSignInPath(returnTo));
}

export function chatGPTSignInPath(returnTo: string) {
  const safe = returnTo.startsWith('/') && !returnTo.startsWith('//') ? returnTo : '/';
  return `/login?next=${encodeURIComponent(safe)}`;
}

export function chatGPTSignOutPath(returnTo = '/') {
  const safe = returnTo.startsWith('/') && !returnTo.startsWith('//') ? returnTo : '/';
  return `/api/auth/logout?next=${encodeURIComponent(safe)}`;
}

async function sha256(value: string) { const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value)); return toBase64Url(new Uint8Array(digest)); }
function toBase64Url(bytes: Uint8Array) { return btoa(String.fromCharCode(...bytes)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/g,''); }
