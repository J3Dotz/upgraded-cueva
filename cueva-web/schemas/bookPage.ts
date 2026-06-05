import { defineType, defineField } from 'sanity';

/**
 * Book Page singleton — all owner-editable content for src/pages/book.astro.
 * Contact details (email, phone) live in siteSettings and are shared with the footer.
 * Only one document of this type should exist.
 */
export const bookPage = defineType({
  name: 'bookPage',
  title: 'Book Page',
  type: 'document',
  groups: [
    { name: 'sidebar',   title: 'Sidebar',            default: true },
    { name: 'steps',     title: 'What Happens Next'               },
    { name: 'guarantee', title: 'Guarantee'                        },
    { name: 'form',      title: 'Form Messages'                    },
    { name: 'seo',       title: 'SEO'                              },
  ],
  fields: [

    // ── Sidebar ──────────────────────────────────────────────────────────────
    defineField({
      name: 'sidebarLabel',
      title: 'Sidebar label',
      description: 'e.g. "Direct booking · No third parties"',
      type: 'localeString',
      group: 'sidebar',
    }),
    defineField({
      name: 'sidebarH1',
      title: 'Sidebar H1 (main)',
      description: 'e.g. "Request"',
      type: 'localeString',
      group: 'sidebar',
    }),
    defineField({
      name: 'sidebarH1Italic',
      title: 'Sidebar H1 (italic)',
      description: 'e.g. "to book."',
      type: 'localeString',
      group: 'sidebar',
    }),
    defineField({
      name: 'sidebarSub',
      title: 'Sidebar sub-line',
      description: 'e.g. "We\'ll confirm availability within a few hours."',
      type: 'localeString',
      group: 'sidebar',
    }),
    defineField({
      name: 'sidebarNote',
      title: 'Sidebar body note',
      description: 'Short paragraph about how bookings are handled. Mention the manager\'s name here.',
      type: 'localeText',
      group: 'sidebar',
    }),
    defineField({
      name: 'sidebarContactLabel',
      title: 'Contact section label',
      description: 'e.g. "Or write to us"',
      type: 'localeString',
      group: 'sidebar',
    }),

    // ── What happens next ────────────────────────────────────────────────────
    defineField({
      name: 'stepsLabel',
      title: 'Steps section label',
      description: 'e.g. "What happens next"',
      type: 'localeString',
      group: 'steps',
    }),
    defineField({
      name: 'stepsH2',
      title: 'Steps heading',
      type: 'localeString',
      group: 'steps',
    }),
    defineField({
      name: 'steps',
      title: 'Steps (max 3)',
      type: 'array',
      group: 'steps',
      of: [
        {
          type: 'object',
          name: 'bookingStep',
          fields: [
            defineField({ name: 'number', title: 'Number', type: 'string',       description: 'e.g. "01"', validation: (R) => R.required() }),
            defineField({ name: 'title',  title: 'Title',  type: 'localeString', validation: (R) => R.required()                           }),
            defineField({ name: 'body',   title: 'Body',   type: 'localeText'                                                              }),
          ],
          preview: { select: { title: 'title.en', subtitle: 'number' } },
        },
      ],
      validation: (R) => R.max(3),
    }),

    // ── Guarantee ────────────────────────────────────────────────────────────
    defineField({
      name: 'guaranteeLabel',
      title: 'Guarantee section label',
      description: 'e.g. "Best rate, guaranteed"',
      type: 'localeString',
      group: 'guarantee',
    }),
    defineField({
      name: 'guaranteeH2',
      title: 'Guarantee heading',
      description: 'e.g. "Booking direct is always the better price." — include the emphasis word.',
      type: 'localeString',
      group: 'guarantee',
    }),
    defineField({
      name: 'guaranteeBody',
      title: 'Guarantee body paragraph',
      type: 'localeText',
      group: 'guarantee',
    }),
    defineField({
      name: 'guaranteeBullets',
      title: 'Guarantee bullet points',
      type: 'array',
      group: 'guarantee',
      of: [{ type: 'localeString' }],
    }),

    // ── Form messages ────────────────────────────────────────────────────────
    defineField({
      name: 'formFinePrint',
      title: 'Form fine print',
      description: 'Text beneath the submit button. e.g. "No payment is taken at this stage…"',
      type: 'localeString',
      group: 'form',
    }),
    defineField({
      name: 'successH3',
      title: 'Success message heading',
      description: 'Shown after the form is submitted. e.g. "Thank you. We\'ll be in touch within a few hours."',
      type: 'localeString',
      group: 'form',
    }),
    defineField({
      name: 'successBody',
      title: 'Success message body',
      type: 'localeText',
      group: 'form',
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
      return { title: 'Book Page' };
    },
  },
});
