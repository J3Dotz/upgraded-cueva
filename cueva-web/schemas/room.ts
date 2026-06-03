import { defineType, defineField } from 'sanity';

/**
 * Room document — one per room (7 total).
 *
 * Room names are Spanish proper nouns (Olivo, Lavanda, Laurel, Tomillo,
 * Almendro, Roble, Hinojo). They do not translate — enter the same Spanish
 * name in both language fields.
 *
 * Canonical room list with suggested prices:
 *   Olivo €420 · Lavanda €380 · Laurel €340 · Tomillo €310
 *   Almendro €290 · Roble €260 · Hinojo €240
 */
export const room = defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  groups: [
    { name: 'identity', title: 'Identity', default: true },
    { name: 'copy', title: 'Copy' },
    { name: 'particulars', title: 'Particulars' },
    { name: 'media', title: 'Media' },
    { name: 'booking', title: 'Booking' },
  ],
  fields: [

    // ── Identity ──────────────────────────────────────────────────────────
    defineField({
      name: 'name',
      title: 'Room name (Spanish proper noun)',
      description: 'The Spanish name used everywhere. e.g. "Olivo" — same in both EN and ES.',
      type: 'localeString',
      group: 'identity',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'nameTranslation',
      title: 'English translation',
      description: 'Shown in italic after the name on the room page. e.g. "The Olive Tree"',
      type: 'string',
      group: 'identity',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name.en', maxLength: 96 },
      group: 'identity',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'suiteType',
      title: 'Suite type label',
      description: 'Shown above the room name as a category. e.g. "Olive Suite" / "Suite Olivo"',
      type: 'localeString',
      group: 'identity',
    }),
    defineField({
      name: 'swatchColor',
      title: 'Swatch colour (hex)',
      description: 'Placeholder colour shown on cards before real photos are uploaded. e.g. #5C4838',
      type: 'string',
      group: 'identity',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      description: 'Lower numbers appear first on the Stay page.',
      type: 'number',
      group: 'identity',
    }),

    // ── Copy ─────────────────────────────────────────────────────────────
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'One sentence shown on cards and the room hero. e.g. "Carved into the natural rock face. Constant 16°C."',
      type: 'localeString',
      group: 'copy',
    }),
    defineField({
      name: 'description',
      title: 'Room description',
      description: 'Two or three paragraphs for the room detail page. The first letter of the first paragraph gets a large drop-cap.',
      type: 'localeBlock',
      group: 'copy',
    }),

    // ── Particulars ───────────────────────────────────────────────────────
    defineField({
      name: 'bedConfig',
      title: 'Bed',
      description: 'e.g. "King · linen" or "Double · linen"',
      type: 'localeString',
      group: 'particulars',
    }),
    defineField({
      name: 'sleeps',
      title: 'Sleeps',
      description: 'e.g. 2',
      type: 'number',
      group: 'particulars',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      description: 'e.g. "28 m²" or "36 m² + balcony"',
      type: 'string',
      group: 'particulars',
    }),
    defineField({
      name: 'view',
      title: 'View',
      description: 'e.g. "South-facing balcony" or "Skylight only"',
      type: 'localeString',
      group: 'particulars',
    }),
    defineField({
      name: 'balcony',
      title: 'Balcony / terrace',
      description: 'e.g. "Private" or "Shared terrace" or "None"',
      type: 'localeString',
      group: 'particulars',
    }),
    defineField({
      name: 'bathroom',
      title: 'Bathroom',
      description: 'e.g. "Private ensuite" or "Freestanding tub"',
      type: 'localeString',
      group: 'particulars',
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      description: 'e.g. "Rock, limestone" or "Linen, tile, beams"',
      type: 'localeString',
      group: 'particulars',
    }),
    defineField({
      name: 'heating',
      title: 'Heating',
      description: 'e.g. "Underfloor" or "Wood stove"',
      type: 'localeString',
      group: 'particulars',
    }),

    // ── Media ─────────────────────────────────────────────────────────────
    defineField({
      name: 'images',
      title: 'Images',
      description: 'First image = hero + booking card. Images 2–4 = gallery row. Upload at least 4.',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alt text' },
            { name: 'caption', type: 'string', title: 'Caption (gallery)' },
          ],
        },
      ],
      group: 'media',
      validation: (R) => R.required().min(1),
    }),

    // ── Booking ───────────────────────────────────────────────────────────
    defineField({
      name: 'priceFrom',
      title: 'Starting price (€/night)',
      type: 'number',
      group: 'booking',
      validation: (R) => R.required().min(0),
    }),
    defineField({
      name: 'icalUrl',
      title: 'iCal URL (Airbnb / Booking.com)',
      description: 'Private iCal feed from your OTA listing. Stored securely, never exposed to the browser.',
      type: 'url',
      group: 'booking',
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
        title: title ?? 'Untitled room',
        subtitle: subtitle ? `From €${subtitle}/night` : 'No price set',
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
    {
      title: 'Price (low to high)',
      name: 'priceAsc',
      by: [{ field: 'priceFrom', direction: 'asc' }],
    },
  ],
});
