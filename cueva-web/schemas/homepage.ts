import { defineType, defineField } from 'sanity';

// Singleton — only one document of this type should exist.
// Enforced via structureTool in sanity.config.ts.
export const homepage = defineType({
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [

    // ── Hero ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          description: 'Small label above the headline. e.g. "Cabanes · Castellón · Spain"',
          type: 'string',
        }),
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'array',
          of: [{
            type: 'block',
            styles: [],
            lists: [],
            marks: {
              decorators: [{ title: 'Italic', value: 'em' }],
              annotations: [],
            },
          }],
        }),
        defineField({
          name: 'subline',
          title: 'Subline',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'mediaType',
          title: 'Media type',
          description: 'Choose whether the hero shows a still image or a looping background video.',
          type: 'string',
          options: {
            list: [
              { title: 'Image', value: 'image' },
              { title: 'Video', value: 'video' },
            ],
            layout: 'radio',
          },
          initialValue: 'image',
        }),
        defineField({
          name: 'heroImage',
          title: 'Hero image',
          description: 'Used when mediaType is "image". Recommended: landscape, min 1920×1080px.',
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt text', type: 'string' },
          ],
        }),
        defineField({
          name: 'heroVideo',
          title: 'Hero video',
          description: 'Used when mediaType is "video". Keep under 8 MB — this loads on every visit. No audio needed; it will be muted and looping.',
          type: 'file',
          options: { accept: 'video/mp4,video/webm' },
        }),
        defineField({
          name: 'heroVideoPoster',
          title: 'Hero video poster',
          description: 'Still frame shown while the video loads. Required if using video — use the first frame or a representative shot.',
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt text', type: 'string' },
          ],
        }),
      ],
    }),

    // ── Lodge intro ───────────────────────────────────────────────────────────
    defineField({
      name: 'lodge',
      title: 'Lodge section',
      type: 'object',
      fields: [
        defineField({ name: 'sectionLabel', title: 'Section label', type: 'string', initialValue: 'The Lodge' }),
        defineField({ name: 'headline',     title: 'Headline',       type: 'string' }),
        defineField({ name: 'body',         title: 'Body',           type: 'text', rows: 5 }),
      ],
    }),

    // ── Property features ────────────────────────────────────────────────────
    defineField({
      name: 'propertyFeatures',
      title: 'Property features',
      type: 'object',
      fields: [
        defineField({ name: 'sectionLabel', title: 'Section label', type: 'string', initialValue: 'The Property' }),
        defineField({ name: 'headline',     title: 'Headline',       type: 'string' }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'feature',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon key',
                  description: 'e.g. "cave", "pool", "hot-tub", "solar", "rooms", "terrace"',
                  type: 'string',
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (R) => R.required(),
                }),
              ],
              preview: { select: { title: 'label', subtitle: 'icon' } },
            },
          ],
        }),
      ],
    }),

    // ── Testimonials ─────────────────────────────────────────────────────────
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      description: 'Guest quotes shown in the scrolling marquee strip.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          fields: [
            defineField({ name: 'quote',   title: 'Quote',   type: 'string', validation: (R) => R.required() }),
            defineField({ name: 'author',  title: 'Author',  type: 'string', description: 'e.g. "Maria K."' }),
            defineField({ name: 'country', title: 'Country', type: 'string', description: 'e.g. "Netherlands"' }),
          ],
          preview: { select: { title: 'author', subtitle: 'quote' } },
        },
      ],
    }),

    // ── Rooms teaser ─────────────────────────────────────────────────────────
    defineField({
      name: 'roomsTeaser',
      title: 'Rooms teaser section',
      type: 'object',
      fields: [
        defineField({ name: 'sectionLabel', title: 'Section label', type: 'string', initialValue: 'Where you sleep' }),
        defineField({ name: 'headline',     title: 'Headline',       type: 'string' }),
        defineField({ name: 'subline',      title: 'Subline',        type: 'text', rows: 3 }),
      ],
    }),

    // ── Experiences teaser ───────────────────────────────────────────────────
    defineField({
      name: 'experiencesTeaser',
      title: 'Experiences teaser section',
      type: 'object',
      fields: [
        defineField({ name: 'sectionLabel', title: 'Section label', type: 'string', initialValue: 'What you do' }),
        defineField({ name: 'headline',     title: 'Headline',       type: 'string' }),
        defineField({
          name: 'items',
          title: 'Items (max 3)',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'experienceTeaserItem',
              fields: [
                defineField({ name: 'title',       title: 'Title',       type: 'string', validation: (R) => R.required() }),
                defineField({ name: 'description', title: 'Description', type: 'string' }),
                defineField({ name: 'href',        title: 'Link href',   type: 'string', description: 'e.g. "/experiences"' }),
              ],
              preview: { select: { title: 'title', subtitle: 'description' } },
            },
          ],
          validation: (R) => R.max(3),
        }),
      ],
    }),

    // ── Closing quote ────────────────────────────────────────────────────────
    defineField({
      name: 'closingQuote',
      title: 'Closing quote',
      description: 'Pull-quote shown at the bottom of the page.',
      type: 'string',
    }),
  ],

  preview: {
    prepare() {
      return { title: 'Home Page' };
    },
  },
});
