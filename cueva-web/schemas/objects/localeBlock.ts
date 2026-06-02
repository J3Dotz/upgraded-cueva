import { defineType } from 'sanity';

// Rich text (Portable Text) in both languages
export const localeBlock = defineType({
  name: 'localeBlock',
  title: 'Locale Rich Text',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'es',
      title: 'Español',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
});
