import { defineType, defineField } from 'sanity';

// Flora room names: Olivo · Lavanda · Laurel · Tomillo · Almendro · Roble · Hinojo
export const room = defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Room name',
      type: 'localeString',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name.en', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'One-line descriptor e.g. "King bed · Private terrace"',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeBlock',
    }),
    defineField({
      name: 'swatchColor',
      title: 'Swatch colour (hex)',
      description: 'e.g. #9BAA8D — used on cards and detail pages',
      type: 'string',
    }),
    defineField({
      name: 'bedConfig',
      title: 'Bed configuration',
      type: 'localeString',
    }),
    defineField({
      name: 'view',
      title: 'View description',
      type: 'localeString',
    }),
    defineField({
      name: 'priceFrom',
      title: 'Starting price (€/night)',
      type: 'number',
      validation: (R) => R.required().min(0),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            },
          ],
        },
      ],
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'localeString', title: 'Label' },
          ],
          preview: {
            select: { title: 'label.en' },
          },
        },
      ],
    }),
    defineField({
      name: 'icalUrl',
      title: 'iCal URL (Airbnb / Booking.com)',
      type: 'url',
      description:
        'Private iCal feed from your OTA listing. Stored securely, never exposed to the browser.',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'name.en',
      subtitle: 'priceFrom',
      media: 'images.0',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `From €${subtitle}/night` : '',
        media,
      };
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
