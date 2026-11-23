import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export type ChatGPTUser = { userId: string; email: string; displayName: string };

export async function getChatGPTUser(): Promise<ChatGPTUser | null> {
  const h = await headers();
  const userId = h.get('oai-authenticated-user-id');
  const email = h.get('oai-authenticated-user-email');
  if (!userId || !email) return null;
  const encoded = h.get('oai-authenticated-user-full-name');
  const displayName = encoded ? safeDecode(encoded) : email;
  return { userId, email: email.toLowerCase(), displayName };
}

export async function requireChatGPTUser(returnTo: string) {
  const user = await getChatGPTUser();
  if (user) return user;
  redirect(chatGPTSignInPath(returnTo));
}

export function chatGPTSignInPath(returnTo: string) {
  const safe = returnTo.startsWith('/') && !returnTo.startsWith('//') ? returnTo : '/';
  return `/signin-with-chatgpt?return_to=${encodeURIComponent(safe)}`;
}

export function chatGPTSignOutPath(returnTo = '/') {
  const safe = returnTo.startsWith('/') && !returnTo.startsWith('//') ? returnTo : '/';
  return `/signout-with-chatgpt?return_to=${encodeURIComponent(safe)}`;
}

function safeDecode(value: string) {
  try { return decodeURIComponent(value); } catch { return value; }
}
