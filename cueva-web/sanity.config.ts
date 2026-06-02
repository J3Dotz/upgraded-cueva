import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

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
            S.singleton('siteSettings', 'Site Settings').child(
              S.document().schemaType('siteSettings').documentId('siteSettings')
            ),
            S.divider(),
            S.documentTypeListItem('room').title('Rooms'),
            S.documentTypeListItem('experience').title('Experiences'),
            S.documentTypeListItem('journalPost').title('Journal Posts'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
