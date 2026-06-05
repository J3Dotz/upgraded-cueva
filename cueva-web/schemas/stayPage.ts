import { defineType, defineField } from 'sanity';

/**
 * Stay Page singleton — owner-editable content for:
 *   - src/pages/stay/index.astro   (page hero + rooms header + prompt strip)
 *   - src/pages/stay/[slug].astro  (shared text across all 7 room detail pages)
 * Only one document of this type should exist.
 */
export const stayPage = defineType({
  name: 'stayPage',
  title: 'Stay Page',
  type: 'document',
  groups: [
    { name: 'hero',       title: 'Page Hero',            default: true },
    { name: 'rooms',      title: 'Rooms Header'                        },
    { name: 'prompt',     title: 'Prompt Strip'                        },
    { name: 'roomDetail', title: 'Room Detail (shared)'                },
    { name: 'seo',        title: 'SEO'                                 },
  ],
  fields: [

    // ── Page hero ─────────────────────────────────────────────────────────────
    defineField({
      name: 'heroLabel',
      title: 'Hero label',
      description: 'e.g. "Seven rooms · Cabanes, Castellón"',
      type: 'localeString',
      group: 'hero',
    }),
    defineField({
      name: 'heroH1',
      title: 'Hero H1 (main)',
      description: 'e.g. "Where"',
      type: 'localeString',
      group: 'hero',
    }),
    defineField({
      name: 'heroH1Italic',
      title: 'Hero H1 (italic part)',
      description: 'e.g. "you stay"',
      type: 'localeString',
      group: 'hero',
    }),
    defineField({
      name: 'heroBody',
      title: 'Hero body',
      type: 'localeText',
      group: 'hero',
    }),

    // ── Rooms section header (Stay index) ────────────────────────────────────
    defineField({
      name: 'roomsLabel',
      title: 'Rooms section label',
      description: 'e.g. "The Rooms"',
      type: 'localeString',
      group: 'rooms',
    }),
    defineField({
      name: 'roomsH2',
      title: 'Rooms heading',
      type: 'localeString',
      group: 'rooms',
    }),
    defineField({
      name: 'roomsMeta',
      title: 'Rooms meta line',
      description: 'e.g. "Rates are per room, per night. Breakfast and the mountain are included."',
      type: 'localeText',
      group: 'rooms',
    }),

    // ── Prompt strip (Stay index) ────────────────────────────────────────────
    defineField({
      name: 'promptLabel',
      title: 'Prompt strip label',
      description: 'e.g. "A small lodge, attentively staffed"',
      type: 'localeString',
      group: 'prompt',
    }),
    defineField({
      name: 'promptH2',
      title: 'Prompt heading (main)',
      description: 'e.g. "Not sure"',
      type: 'localeString',
      group: 'prompt',
    }),
    defineField({
      name: 'promptH2Italic',
      title: 'Prompt heading (italic part)',
      description: 'e.g. "which room?"',
      type: 'localeString',
      group: 'prompt',
    }),
    defineField({
      name: 'promptBody',
      title: 'Prompt body paragraph',
      type: 'localeText',
      group: 'prompt',
    }),

    // ── Room detail page — shared text across all 7 rooms ───────────────────
    defineField({
      name: 'includedH2',
      title: '"What\'s included" heading',
      description: 'e.g. "Everything you\'d hope for."',
      type: 'localeString',
      group: 'roomDetail',
    }),
    defineField({
      name: 'includedH2Italic',
      title: '"What\'s included" heading (italic second line)',
      description: 'e.g. "Nothing you wouldn\'t."',
      type: 'localeString',
      group: 'roomDetail',
    }),
    defineField({
      name: 'includedBody',
      title: '"What\'s included" body paragraph',
      type: 'localeText',
      group: 'roomDetail',
    }),
    defineField({
      name: 'bookingMinStay',
      title: 'Booking card — minimum stay note',
      description: 'e.g. "2-night minimum stay · Breakfast included"',
      type: 'localeString',
      group: 'roomDetail',
    }),
    defineField({
      name: 'bookingBullets',
      title: 'Booking card — bullet points',
      description: 'Short selling points shown on every room\'s booking card.',
      type: 'array',
      group: 'roomDetail',
      of: [{ type: 'localeString' }],
    }),
    defineField({
      name: 'bookingNote',
      title: 'Booking card — fine print note',
      description: 'e.g. "No payment until we confirm. Usually within a few hours."',
      type: 'localeString',
      group: 'roomDetail',
    }),
    defineField({
      name: 'adjacentLabel',
      title: 'Adjacent rooms — label',
      description: 'e.g. "Adjacent rooms"',
      type: 'localeString',
      group: 'roomDetail',
    }),
    defineField({
      name: 'adjacentH2',
      title: 'Adjacent rooms — heading',
      description: 'e.g. "Other corners of the masia."',
      type: 'localeString',
      group: 'roomDetail',
    }),
    defineField({
      name: 'adjacentH2Italic',
      title: 'Adjacent rooms — heading (italic)',
      description: 'e.g. "All seven, side by side."',
      type: 'localeString',
      group: 'roomDetail',
    }),

    // ── SEO ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page title (SEO)',
      type: 'localeString',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta description (SEO)',
      type: 'localeText',
      group: 'seo',
    }),
  ],

  preview: {
    prepare() {
      return { title: 'Stay Page' };
    },
  },
});
