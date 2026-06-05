import { defineType, defineField } from 'sanity';

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
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
      description: 'This is the URL for this page. Do not change it after the page has been published.',
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
          { title: 'Signature',  value: 'signature'  },
          { title: 'Tasting',    value: 'tasting'    },
          { title: 'Outdoors',   value: 'outdoors'   },
          { title: 'Movement',   value: 'movement'   },
          { title: 'Table',      value: 'table'      },
          { title: 'Bespoke',    value: 'bespoke'    },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'Short one-sentence description for listing cards.',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Full rich-text description for the experience detail view.',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      description: 'e.g. "90 min" or "Half day"',
      type: 'string',
    }),
    defineField({
      name: 'groupSize',
      title: 'Group size',
      description: 'e.g. "Up to 6" — leave empty if not applicable.',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      description: 'Full price string shown to guests. e.g. "€45 pp" or "€95 per group"',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt text', type: 'string' },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured (hero on experiences page)',
      description: 'Only one item should have this turned on at a time. Turn off the previous featured item first.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'locale',
      title: 'Language',
      description: 'en for English, es for Spanish. Must match between language versions of the same content.',
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
      subtitle: 'price',
      media: 'image',
      locale: 'locale',
    },
    prepare({ title, subtitle, media, locale }) {
      return {
        title: title ? `${title} (${locale ?? 'en'})` : 'Untitled',
        subtitle,
        media,
      };
    },
  },

  orderings: [
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
});
