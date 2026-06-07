import type { APIRoute } from 'astro';
import { validatePreviewUrl } from '@sanity/preview-url-secret';
import { previewClient } from '@/lib/sanity';

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(previewClient, request.url);

  if (!isValid) {
    return new Response('Invalid secret', { status: 401 });
  }

  cookies.set('__prerender_bypass', 'true', {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    path: '/',
  });

  return redirect(redirectTo);
};
