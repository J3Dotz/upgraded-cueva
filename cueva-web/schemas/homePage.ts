import { defineType, defineField } from 'sanity';

/**
 * Home Page singleton — all owner-editable content for src/pages/index.astro.
 * Only one document of this type should exist.
 */
export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero',         title: 'Hero',              default: true },
    { name: 'intro',        title: 'Lodge Intro'                      },
    { name: 'amenities',    title: 'Amenities'                        },
    { name: 'testimonials', title: 'Testimonials'                     },
    { name: 'rooms',        title: 'Rooms Section'                    },
    { name: 'activities',   title: 'Activities Teaser'                },
    { name: 'seo',          title: 'SEO'                              },
  ],
  fields: [

    // ── Hero ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroLabel',
      title: 'Hero location label',
      description: 'e.g. "Cabanes · Castellón · Spain"',
      type: 'localeString',
      group: 'hero',
    }),
    defineField({
      name: 'heroH1',
      title: 'Hero headline (main line)',
      description: 'e.g. "Sustainable luxury"',
      type: 'localeString',
      group: 'hero',
    }),
    defineField({
      name: 'heroH1Italic',
      title: 'Hero headline (italic second line)',
      description: 'e.g. "in the Valencian mountains."',
      type: 'localeString',
      group: 'hero',
    }),
    defineField({
      name: 'heroBody',
      title: 'Hero body text',
      type: 'localeText',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero background image',
      description: 'Full-bleed hero background. Falls back to the dark stone colour if empty.',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),

    // ── Lodge intro ───────────────────────────────────────────────────────────
    defineField({
      name: 'introLabel',
      title: 'Intro section label',
      description: 'e.g. "The Lodge"',
      type: 'localeString',
      group: 'intro',
    }),
    defineField({
      name: 'introH2',
      title: 'Intro heading',
      type: 'localeString',
      group: 'intro',
    }),
    defineField({
      name: 'introBody',
      title: 'Intro body paragraph',
      type: 'localeText',
      group: 'intro',
    }),
    defineField({
      name: 'introImageLeft',
      title: 'Intro left arch image',
      description: 'Tall arch-shaped image on the left (e.g. the Masia at dusk).',
      type: 'image',
      options: { hotspot: true },
      group: 'intro',
    }),
    defineField({
      name: 'introImageRight',
      title: 'Intro right arch image',
      description: 'Shorter arch-shaped image on the right (e.g. the natural cave).',
      type: 'image',
      options: { hotspot: true },
      group: 'intro',
    }),
    defineField({
      name: 'badgeScore',
      title: 'Review badge — score',
      description: 'e.g. "8.7"',
      type: 'string',
      group: 'intro',
    }),
    defineField({
      name: 'badgeSource',
      title: 'Review badge — source',
      description: 'e.g. "Booking.com"',
      type: 'string',
      group: 'intro',
    }),
    defineField({
      name: 'badgeWord',
      title: 'Review badge — descriptor word',
      description: 'e.g. "Exceptional" / "Excepcional"',
      type: 'localeString',
      group: 'intro',
    }),

    // ── Amenities ────────────────────────────────────────────────────────────
    defineField({
      name: 'amenitiesLabel',
      title: 'Amenities section label',
      description: 'e.g. "The Property"',
      type: 'localeString',
      group: 'amenities',
    }),
    defineField({
      name: 'amenitiesH2',
      title: 'Amenities heading',
      type: 'localeString',
      group: 'amenities',
    }),
    defineField({
      name: 'amenities',
      title: 'Amenity items',
      description: 'Each item has a predefined icon key and an editable label.',
      type: 'array',
      group: 'amenities',
      of: [
        {
          type: 'object',
          name: 'amenityItem',
          fields: [
            defineField({
              name: 'iconKey',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Cave / arch',         value: 'cave'      },
                  { title: 'Swimming pool / waves',value: 'pool'      },
                  { title: 'Hot tub / bubbles',    value: 'hot-tub'  },
                  { title: 'Solar / sun',           value: 'solar'    },
                  { title: 'Building / rooms',      value: 'rooms'    },
                  { title: 'Mountain terrace',      value: 'terrace'  },
                  { title: 'Breakfast',             value: 'breakfast'},
                  { title: 'WiFi',                  value: 'wifi'     },
                ],
                layout: 'dropdown',
              },
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'localeString',
              validation: (R) => R.required(),
            }),
          ],
          preview: {
            select: { title: 'label.en', subtitle: 'iconKey' },
          },
        },
      ],
    }),

    // ── Testimonials ─────────────────────────────────────────────────────────
    defineField({
      name: 'testimonials',
      title: 'Testimonials (scrolling marquee)',
      description: 'Guest quotes shown in the dark scrolling band. Both EN and ES versions of each quote.',
      type: 'array',
      group: 'testimonials',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          fields: [
            defineField({
              name: 'quote',
              title: 'Quote',
              description: 'The full quote text including surrounding quotation marks.',
              type: 'localeString',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'attribution',
              title: 'Attribution',
              description: 'e.g. "Maria K. · Netherlands"  — same in EN and ES unless country names differ.',
              type: 'string',
              validation: (R) => R.required(),
            }),
          ],
          preview: {
            select: { title: 'quote.en', subtitle: 'attribution' },
          },
        },
      ],
    }),

    // ── Rooms section ─────────────────────────────────────────────────────────
    defineField({
      name: 'roomsLabel',
      title: 'Rooms section label',
      description: 'e.g. "Where you sleep"',
      type: 'localeString',
      group: 'rooms',
    }),
    defineField({
      name: 'roomsH2',
      title: 'Rooms section heading',
      type: 'localeString',
      group: 'rooms',
    }),
    defineField({
      name: 'roomsBody',
      title: 'Rooms section body',
      type: 'localeText',
      group: 'rooms',
    }),

    // ── Activities teaser ────────────────────────────────────────────────────
    defineField({
      name: 'activitiesLabel',
      title: 'Activities section label',
      description: 'e.g. "What you do"',
      type: 'localeString',
      group: 'activities',
    }),
    defineField({
      name: 'activitiesH2',
      title: 'Activities heading',
      type: 'localeString',
      group: 'activities',
    }),
    defineField({
      name: 'activitiesTeaser',
      title: 'Activity teasers (max 3)',
      description: 'Three cards linking to /experiences. Upload an image or set a placeholder colour.',
      type: 'array',
      group: 'activities',
      of: [
        {
          type: 'object',
          name: 'activityTeaser',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'localeString',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'localeText',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'swatchColor',
              title: 'Placeholder colour (hex)',
              description: 'Shown before the real image is uploaded. e.g. "#6B5B4A"',
              type: 'string',
            }),
          ],
          preview: {
            select: { title: 'title.en', media: 'image' },
          },
        },
      ],
      validation: (R) => R.max(3),
    }),

    // ── SEO ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page title (SEO)',
      description: 'Overrides the default <title> tag.',
      type: 'localeString',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta description (SEO)',
      description: 'Overrides the default meta description.',
      type: 'localeText',
      group: 'seo',
    }),
  ],

  preview: {
    prepare() {
      return { title: 'Home Page' };
    },
  },
});
