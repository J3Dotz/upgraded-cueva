import { defineType, defineField } from 'sanity';

// Singleton — only one document of this type should ever exist
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'localeString',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Homepage hero title',
      type: 'localeString',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Homepage hero subtitle',
      type: 'localeText',
    }),
    defineField({
      name: 'email',
      title: 'Contact email',
      type: 'string',
      initialValue: 'hola@lacuevademiravet.com',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'localeText',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Default SEO description',
      type: 'localeText',
    }),
  ],
});
