import { defineType } from 'sanity';

export const localeText = defineType({
  name: 'localeText',
  title: 'Locale Text (plain)',
  type: 'object',
  fields: [
    { name: 'en', title: 'English', type: 'text', rows: 4 },
    { name: 'es', title: 'Español', type: 'text', rows: 4 },
  ],
});
