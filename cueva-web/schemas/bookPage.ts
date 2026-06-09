import { defineType, defineField } from 'sanity';

// Singleton — only one document of this type should exist.
// Enforced via structureTool in sanity.config.ts.
export const bookPage = defineType({
  name: 'bookPage',
  title: 'Book Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'array',
      of: [{
        type: 'block',
        styles: [],
        lists: [],
        marks: {
          decorators: [{ title: 'Italic', value: 'em' }],
          annotations: [],
        },
      }],
    }),
    defineField({
      name: 'subline',
      title: 'Subline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'confirmationNote',
      title: 'Confirmation note',
      description: 'The "no bots, usually within a day" message shown below the booking form.',
      type: 'text',
      rows: 4,
    }),
  ],

  preview: {
    prepare() {
      return { title: 'Book Page' };
    },
  },
});
