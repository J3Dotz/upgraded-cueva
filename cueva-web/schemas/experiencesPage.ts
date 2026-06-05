import { defineType, defineField } from 'sanity';

/**
 * Experiences Page singleton — page-level content for src/pages/experiences.astro.
 * The individual experience cards are managed through the `experience` document type.
 * Only one document of this type should exist.
 */
export const experiencesPage = defineType({
  name: 'experiencesPage',
  title: 'Experiences Page',
  type: 'document',
  groups: [
    { name: 'hero',     title: 'Hero',             default: true },
    { name: 'grid',     title: 'Grid Section'                   },
    { name: 'bespoke',  title: 'Bespoke Strip'                  },
    { name: 'seo',      title: 'SEO'                            },
  ],
  fields: [

    // ── Hero ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroH1',
      title: 'Hero H1 (main italic)',
      description: 'e.g. "What you do"',
      type: 'localeString',
      group: 'hero',
    }),
    defineField({
      name: 'heroH1Dim',
      title: 'Hero H1 (dim italic second part)',
      description: 'e.g. "here." — rendered at reduced opacity',
      type: 'localeString',
      group: 'hero',
    }),

    // ── Grid section ─────────────────────────────────────────────────────────
    defineField({
      name: 'gridLabel',
      title: 'Grid section label',
      description: 'e.g. "More to explore"',
      type: 'localeString',
      group: 'grid',
    }),
    defineField({
      name: 'gridH2',
      title: 'Grid section heading',
      description: 'e.g. "In and around"',
      type: 'localeString',
      group: 'grid',
    }),
    defineField({
      name: 'gridH2Italic',
      title: 'Grid heading (italic second line)',
      description: 'e.g. "the valley."',
      type: 'localeString',
      group: 'grid',
    }),
    defineField({
      name: 'gridNote',
      title: 'Grid section note (right side)',
      description: 'Italic text to the right of the heading.',
      type: 'localeText',
      group: 'grid',
    }),

    // ── Bespoke strip ────────────────────────────────────────────────────────
    defineField({
      name: 'bespokeQuote',
      title: 'Bespoke large quote',
      description: 'The large pull-quote shown in the dark bespoke section.',
      type: 'localeString',
      group: 'bespoke',
    }),
    defineField({
      name: 'bespokeBody',
      title: 'Bespoke body text',
      type: 'localeText',
      group: 'bespoke',
    }),
    defineField({
      name: 'bespokeEmail',
      title: 'Bespoke contact email',
      description: 'Shown as a clickable mailto link.',
      type: 'string',
      group: 'bespoke',
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
      return { title: 'Experiences Page' };
    },
  },
});
