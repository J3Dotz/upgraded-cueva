import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { presentationTool } from 'sanity/presentation';
import { schemaTypes } from './schemas';
import { resolve } from './lib/resolve';

export default defineConfig({
  name: 'la-cueva-de-miravet',
  title: 'La Cueva de Miravet',
  projectId: 'e4tsjl4a',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // ── Singletons ────────────────────────────────────────────────────
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.listItem()
              .title('Home Page')
              .id('homepage')
              .child(
                S.document()
                  .schemaType('homepage')
                  .documentId('homepage')
              ),
            S.listItem()
              .title('Location Page')
              .id('locationPage')
              .child(
                S.document()
                  .schemaType('locationPage')
                  .documentId('locationPage')
              ),
            S.listItem()
              .title('Book Page')
              .id('bookPage')
              .child(
                S.document()
                  .schemaType('bookPage')
                  .documentId('bookPage')
              ),
            S.divider(),
            // ── Content collections ───────────────────────────────────────────
            S.documentTypeListItem('room').title('Rooms'),
            S.documentTypeListItem('experience').title('Experiences'),
            S.documentTypeListItem('journalPost').title('Journal Posts'),
          ]),
    }),
    presentationTool({
      resolve,
      previewUrl: {
        initial: process.env.SANITY_STUDIO_PREVIEW_URL || 'https://upgraded-cueva.vercel.app',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
