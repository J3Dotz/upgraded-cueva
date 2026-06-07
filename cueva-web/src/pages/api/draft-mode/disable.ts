import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const { searchParams } = new URL(request.url);
  const redirectTo = searchParams.get('redirectTo') ?? '/';

  cookies.delete('__prerender_bypass', { path: '/' });

  return redirect(redirectTo);
};
