import { defineType, defineField } from 'sanity';

export const journalPost = defineType({
  name: 'journalPost',
  title: 'Journal Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Property',           value: 'Property'           },
          { title: 'Local Area',         value: 'Local Area'         },
          { title: 'Seasonal',           value: 'Seasonal'           },
          { title: 'Behind the Scenes',  value: 'Behind the Scenes'  },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Two to three sentence summary shown on listing cards.',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'Full article content.',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt',     title: 'Alt text', type: 'string' },
            { name: 'caption', title: 'Caption',  type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'La Cueva de Miravet',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'readingMinutes',
      title: 'Reading time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured image',
      description: 'Cover image shown on listing cards and the article hero.',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt text', type: 'string' },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured (hero on journal index)',
      description: 'If true, this post is shown as the large hero article at the top of the Journal page. Only one should be marked featured.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'locale',
      title: 'Language',
      description: 'Create separate documents for EN and ES content.',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Español', value: 'es' },
        ],
        layout: 'radio',
      },
      initialValue: 'en',
      validation: (R) => R.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'featuredImage',
      locale: 'locale',
    },
    prepare({ title, subtitle, media, locale }) {
      const date = subtitle
        ? new Date(subtitle).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
        : '';
      return {
        title: title ? `${title} (${locale ?? 'en'})` : 'Untitled',
        subtitle: date,
        media,
      };
    },
  },

  orderings: [
    {
      title: 'Published date, newest first',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
});
