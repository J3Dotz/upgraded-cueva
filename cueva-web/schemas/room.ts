import { defineType, defineField } from 'sanity';

/**
 * Room document — one per room per locale (7 rooms × 2 locales = 14 documents).
 *
 * Canonical rooms: Olivo · Lavanda · Laurel · Tomillo · Almendro · Roble · Hinojo
 */
export const room = defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Room name',
      description: 'e.g. "Olivo" — the Spanish proper noun used as the room identity.',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Suite type label shown above the name. e.g. "Olive Suite"',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'Short description for listing cards. One or two sentences.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Longer description for the room detail page. Two or three paragraphs.',
      type: 'text',
      rows: 8,
    }),
    defineField({
      name: 'pricePerNight',
      title: 'Price per night (€)',
      description: 'Enter the number only. Currency symbol is added automatically by the site.',
      type: 'number',
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: 'bedType',
      title: 'Bed type',
      description: 'e.g. "King bed" or "Double bed · undyed linen"',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Main image',
      description: 'Primary image shown on listing cards and the room hero.',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt text', type: 'string' },
      ],
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      description: 'Additional images shown in the room gallery strip.',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt text', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      description: 'List of included amenities. e.g. "Private terrace", "Rain shower", "Breakfast included"',
      type: 'array',
      of: [{ type: 'string' }],
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
      title: 'name',
      subtitle: 'pricePerNight',
      media: 'image',
      locale: 'locale',
    },
    prepare({ title, subtitle, media, locale }) {
      return {
        title: title ? `${title} (${locale ?? 'en'})` : 'Untitled room',
        subtitle: subtitle ? `€${subtitle} / night` : 'No price set',
        media,
      };
    },
  },

  orderings: [
    {
      title: 'Price (low to high)',
      name: 'priceAsc',
      by: [{ field: 'pricePerNight', direction: 'asc' }],
    },
    {
      title: 'Name A–Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
});
