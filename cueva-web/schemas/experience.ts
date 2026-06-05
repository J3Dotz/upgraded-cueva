import { defineType, defineField } from 'sanity';

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'details',  title: 'Details'                 },
    { name: 'media',    title: 'Media'                   },
    { name: 'display',  title: 'Display'                 },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      group: 'identity',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.en' },
      group: 'identity',
    }),
    defineField({
      name: 'tag',
      title: 'Category chip label',
      description: 'Short label shown on the image corner. e.g. "Tasting", "Outdoors", "Movement", "Table"',
      type: 'localeString',
      group: 'identity',
    }),
    defineField({
      name: 'category',
      title: 'Category (internal)',
      description: 'Used for filtering and admin. The "tag" field controls the public-facing label.',
      type: 'string',
      group: 'identity',
      options: {
        list: [
          { title: 'Guided',   value: 'guided'   },
          { title: 'Self-led', value: 'self-led' },
          { title: 'Bespoke',  value: 'bespoke'  },
          { title: 'Seasonal', value: 'seasonal' },
        ],
        layout: 'radio',
      },
    }),

    // ── Details ───────────────────────────────────────────────────────────────
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
      group: 'details',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      description: 'e.g. "90 min" / "2 hrs" / "Full day"',
      type: 'localeString',
      group: 'details',
    }),
    defineField({
      name: 'price',
      title: 'Price (€)',
      description: 'Numeric price. e.g. 45',
      type: 'number',
      group: 'details',
    }),
    defineField({
      name: 'priceUnit',
      title: 'Price unit',
      description: 'e.g. "pp" (per person) or "per group"',
      type: 'localeString',
      group: 'details',
    }),
    defineField({
      name: 'groupSize',
      title: 'Group size',
      description: 'e.g. "Up to 6"',
      type: 'localeString',
      group: 'details',
    }),

    // ── Media ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
      group: 'media',
    }),
    defineField({
      name: 'swatchColor',
      title: 'Placeholder colour (hex)',
      description: 'Shown before the real image is uploaded. e.g. "#7C5A3C"',
      type: 'string',
      group: 'media',
    }),

    // ── Display ───────────────────────────────────────────────────────────────
    defineField({
      name: 'isSignature',
      title: 'Signature experience',
      description: 'Mark this as the one experience shown in the large featured section at the top of /experiences. Only one should be marked.',
      type: 'boolean',
      initialValue: false,
      group: 'display',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on homepage teaser',
      description: 'Include this in the 3-item activities teaser on the homepage.',
      type: 'boolean',
      initialValue: false,
      group: 'display',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      description: 'Lower numbers appear first in the grid.',
      type: 'number',
      group: 'display',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'category',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Sort order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
});
