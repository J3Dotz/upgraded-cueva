import type { APIRoute } from 'astro';

export const prerender = false;

/**
 * Verify a Sanity webhook signature using Web Crypto (no Node-specific imports).
 *
 * Sanity signs requests with HMAC-SHA256.
 * Header: sanity-webhook-signature
 * Format: t=<unix-seconds>,v1=<hex-digest>
 * Signed payload: "<t>.<rawBody>"
 */
async function verifySignature(
  rawBody: string,
  header: string | null,
  secret: string,
): Promise<boolean> {
  if (!header) return false;

  // Parse "t=<timestamp>,v1=<hex>" into a key/value map
  const parts: Record<string, string> = {};
  for (const segment of header.split(',')) {
    const eq = segment.indexOf('=');
    if (eq > 0) parts[segment.slice(0, eq)] = segment.slice(eq + 1);
  }
  const { t, v1 } = parts;
  if (!t || !v1) return false;

  // Reject payloads older than 5 minutes (replay attack prevention)
  if (Date.now() - parseInt(t, 10) * 1000 > 5 * 60 * 1000) return false;

  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );

  const signatureBytes = await crypto.subtle.sign(
    'HMAC',
    key,
    enc.encode(`${t}.${rawBody}`),
  );

  const expectedHex = Array.from(new Uint8Array(signatureBytes))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  // Constant-time comparison to prevent timing attacks
  if (expectedHex.length !== v1.length) return false;
  let diff = 0;
  for (let i = 0; i < expectedHex.length; i++) {
    diff |= expectedHex.charCodeAt(i) ^ v1.charCodeAt(i);
  }
  return diff === 0;
}

// Maps Sanity document type → the URL paths that will be rebuilt.
// A full Vercel rebuild regenerates all paths regardless — this map
// is informational and ready for path-level revalidation when the
// Astro Vercel adapter gains that capability.
const DOCUMENT_PATHS: Record<string, string[]> = {
  siteSettings: ['/'],
  homepage:     ['/'],
  locationPage: ['/location',    '/es/location'],
  bookPage:     ['/book',        '/es/book'],
  room:         ['/stay',        '/es/stay'],
  experience:   ['/experiences', '/es/experiences'],
  journalPost:  ['/journal',     '/es/journal', '/es/diario'],
};

export const POST: APIRoute = async ({ request }) => {
  const secret = import.meta.env.SANITY_WEBHOOK_SECRET;

  if (!secret) {
    console.error('[revalidate] SANITY_WEBHOOK_SECRET is not set');
    return new Response('Webhook secret not configured', { status: 500 });
  }

  const rawBody  = await request.text();
  const sigHeader = request.headers.get('sanity-webhook-signature');

  if (!(await verifySignature(rawBody, sigHeader, secret))) {
    return new Response('Invalid signature', { status: 401 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = JSON.parse(rawBody) as Record<string, unknown>;
  } catch {
    return new Response('Invalid JSON body', { status: 400 });
  }

  const documentType  = (payload._type as string) ?? 'unknown';
  const affectedPaths = DOCUMENT_PATHS[documentType] ?? ['/'];

  // Trigger a Vercel rebuild so all prerendered pages are regenerated with fresh content.
  // Configure VERCEL_DEPLOY_HOOK_URL in Vercel → Project → Settings → Git → Deploy Hooks.
  const deployHook = import.meta.env.VERCEL_DEPLOY_HOOK_URL;
  if (deployHook) {
    try {
      const res = await fetch(deployHook, { method: 'POST' });
      if (!res.ok) {
        console.error('[revalidate] Deploy hook returned', res.status);
        return new Response('Deploy hook failed', { status: 502 });
      }
    } catch (err) {
      console.error('[revalidate] Deploy hook error:', err);
      return new Response('Deploy hook error', { status: 502 });
    }
  } else {
    console.warn('[revalidate] VERCEL_DEPLOY_HOOK_URL not set — skipping rebuild trigger');
  }

  console.log(`[revalidate] ${documentType} changed — rebuild triggered for: ${affectedPaths.join(', ')}`);

  return new Response(
    JSON.stringify({ revalidated: true, documentType, affectedPaths }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
};
