import { defineType, defineField } from 'sanity';

/**
 * Room document — one per room per locale (7 rooms × 2 locales = 14 documents).
 *
 * Canonical rooms: Olivo · Lavanda · Laurel · Tomillo · Almendro · Roble · Hinojo
 *
 * ── Migration note ──────────────────────────────────────────────────────────
 * Existing documents contain fields from the pre-Phase-2 schema (suiteType,
 * bedConfig, priceFrom, images[], view, balcony, etc.). Those fields are
 * preserved below under "Legacy fields" so their data stays accessible.
 *
 * When filling a room document fresh, use ONLY the fields under the main
 * groups above the divider. The legacy fields will be removed once data has
 * been migrated to the new field names.
 * ────────────────────────────────────────────────────────────────────────────
 */
export const room = defineType({
  name: 'room',
  title: 'Room',
  type: 'document',

  groups: [
    { name: 'identity',    title: 'Identity',        default: true },
    { name: 'copy',        title: 'Copy'                            },
    { name: 'particulars', title: 'Particulars'                     },
    { name: 'media',       title: 'Media'                           },
    { name: 'legacy',      title: '⚠ Legacy data — do not edit'    },
  ],

  fields: [

    // ── Identity ─────────────────────────────────────────────────────────────
    defineField({
      name: 'name',
      title: 'Room name',
      description: 'e.g. "Olivo" — the Spanish proper noun used as the room identity.',
      type: 'string',
      group: 'identity',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'This is the URL for this page. Do not change it after the page has been published.',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      group: 'identity',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'Suite type label shown above the name. e.g. "Olive Suite"',
      type: 'string',
      group: 'identity',
    }),
    defineField({
      name: 'locale',
      title: 'Language',
      description: 'en for English, es for Spanish. Must match between language versions of the same content.',
      type: 'string',
      group: 'identity',
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

    // ── Copy ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'Short description for listing cards. One or two sentences.',
      type: 'text',
      rows: 3,
      group: 'copy',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Longer description for the room detail page. Two or three paragraphs.',
      type: 'text',
      rows: 8,
      group: 'copy',
    }),

    // ── Particulars ───────────────────────────────────────────────────────────
    defineField({
      name: 'pricePerNight',
      title: 'Price per night (€)',
      description: 'Enter the number only. Currency symbol is added automatically by the site.',
      type: 'number',
      group: 'particulars',
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: 'bedType',
      title: 'Bed type',
      description: 'e.g. "King bed" or "Double bed · undyed linen"',
      type: 'string',
      group: 'particulars',
    }),
    defineField({
      name: 'sleeps',
      title: 'Sleeps',
      description: 'Number of guests. e.g. 2',
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
      description: 'e.g. "East-facing balcony" or "Skylight only"',
      type: 'localeString',
      group: 'particulars',
    }),
    defineField({
      name: 'balcony',
      title: 'Balcony / terrace',
      description: 'e.g. "Private" or "None"',
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
      description: 'e.g. "Rock, limestone"',
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
    defineField({
      name: 'amenities',
      title: 'Amenities',
      description: 'List of included amenities. e.g. "Private terrace", "Rain shower", "Breakfast included"',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'particulars',
    }),

    // ── Media ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'image',
      title: 'Main image',
      description: 'Primary image shown on listing cards and the room hero.',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt text', type: 'string' },
      ],
      group: 'media',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      description: 'Additional images shown in the room gallery strip. Upload 2–3 after the main image.',
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
      group: 'media',
    }),

    // ── Legacy fields (pre-Phase-2 data) ─────────────────────────────────────
    // These fields exist in documents created before the schema was updated.
    // DO NOT enter new data here. Copy values to the fields above, then these
    // will be removed in a future migration.
    defineField({
      name: 'images',
      title: 'Images (legacy — copy to Main image + Gallery above)',
      description: 'Old images array. Copy images[0] to Main image and the rest to Gallery, then clear this field.',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt',     title: 'Alt text', type: 'string' },
            { name: 'caption', title: 'Caption',  type: 'string' },
          ],
        },
      ],
      group: 'legacy',
    }),
    defineField({
      name: 'priceFrom',
      title: 'Price from (legacy — copy to Price per night above)',
      type: 'number',
      group: 'legacy',
    }),
    defineField({
      name: 'suiteType',
      title: 'Suite type (legacy — copy to Subtitle above)',
      type: 'localeString',
      group: 'legacy',
    }),
    defineField({
      name: 'nameTranslation',
      title: 'Name translation (legacy)',
      description: 'English translation of the Spanish room name. e.g. "The Olive Tree"',
      type: 'string',
      group: 'legacy',
    }),
    defineField({
      name: 'bedConfig',
      title: 'Bed config (legacy — copy to Bed type above)',
      type: 'localeString',
      group: 'legacy',
    }),
    defineField({
      name: 'swatchColor',
      title: 'Swatch colour (legacy)',
      description: 'Placeholder colour from old schema. No longer used.',
      type: 'string',
      group: 'legacy',
    }),
    defineField({
      name: 'icalUrl',
      title: 'iCal URL (legacy)',
      type: 'url',
      group: 'legacy',
    }),
    // Note: view / balcony / bathroom / materials / heating / size / sleeps
    // have been promoted to first-class Particulars fields above.
    // Any localeString versions already in the database are handled
    // via coalesce() in the GROQ queries.
  ],

  preview: {
    select: {
      title:    'name',
      subtitle: 'pricePerNight',
      media:    'image',
      images:   'images',
      locale:   'locale',
    },
    prepare({ title, subtitle, media, images, locale }) {
      const img = media ?? images?.[0] ?? null;
      const price = subtitle;
      return {
        title:    title ? `${title} (${locale ?? 'en'})` : 'Untitled room',
        subtitle: price ? `€${price} / night` : 'No price set',
        media:    img,
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
