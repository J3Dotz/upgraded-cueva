import { defineType } from 'sanity';

export const localeString = defineType({
  name: 'localeString',
  title: 'Locale String',
  type: 'object',
  fields: [
    { name: 'en', title: 'English', type: 'string' },
    { name: 'es', title: 'Español', type: 'string' },
  ],
});
