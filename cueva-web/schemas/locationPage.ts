import { defineType, defineField } from 'sanity';

// Singleton — only one document of this type should exist.
// Enforced via structureTool in sanity.config.ts.
export const locationPage = defineType({
  name: 'locationPage',
  title: 'Location Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'subline',
      title: 'Subline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'Rich-text content for the main location description.',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Map embed URL',
      description: 'Paste a Google Maps embed URL. Find it via Google Maps → Share → Embed a map → Copy HTML, then extract the src value.',
      type: 'url',
    }),
  ],

  preview: {
    prepare() {
      return { title: 'Location Page' };
    },
  },
});
