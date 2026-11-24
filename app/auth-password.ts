export async function verifyPassword(password: string, salt: string | null, expected: string | null) {
  if (!salt || !expected) return false;
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name:'PBKDF2', salt:fromBase64Url(salt), iterations:100000, hash:'SHA-256' }, key, 256);
  const actual = toBase64Url(new Uint8Array(bits));
  if (actual.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < actual.length; i += 1) diff |= actual.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}

export async function tokenHash(value: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return toBase64Url(new Uint8Array(digest));
}

export function randomToken(bytes = 32) { return toBase64Url(crypto.getRandomValues(new Uint8Array(bytes))); }
function toBase64Url(bytes: Uint8Array) { return btoa(String.fromCharCode(...bytes)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/g,''); }
function fromBase64Url(value: string) { const normalized=value.replace(/-/g,'+').replace(/_/g,'/'); return Uint8Array.from(atob(normalized), c=>c.charCodeAt(0)); }
