import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';

export default defineConfig({
  site: 'https://lacuevademiravet.com',

  // Server mode: all routes are SSR by default.
  // Static pages opt out with:  export const prerender = true
  // API routes stay dynamic  — no prerender export needed.
  output: 'server',
  adapter: vercel(),

  integrations: [
    sanity({
      projectId: 'e4tsjl4a',
      dataset: 'production',
      useCdn: true,
      studioBasePath: '/studio', // Sanity Studio at lacuevademiravet.com/studio
    }),
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false, // /stay not /en/stay
    },
  },

  // Redirect old Spanish route names to the canonical EN-slug routes
  redirects: {
    '/es/experiencias':      '/es/experiences',
    '/es/ubicacion':         '/es/location',
    '/es/reservar':          '/es/book',
    '/es/diario':            '/es/journal',
    '/es/diario/[slug]':     '/es/journal/[slug]',
  },
});
