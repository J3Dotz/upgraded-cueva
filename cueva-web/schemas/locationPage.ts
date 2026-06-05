import { defineType, defineField } from 'sanity';

/**
 * Location Page singleton — all content for src/pages/location.astro.
 * Only one document of this type should exist.
 */
export const locationPage = defineType({
  name: 'locationPage',
  title: 'Location Page',
  type: 'document',
  groups: [
    { name: 'hero',      title: 'Hero',            default: true },
    { name: 'address',   title: 'Address & Routes'               },
    { name: 'transport', title: 'How to Arrive'                  },
    { name: 'nearby',    title: 'Nearby Places'                  },
    { name: 'seo',       title: 'SEO'                            },
  ],
  fields: [

    // ── Hero ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroLabel',
      title: 'Hero label',
      description: 'e.g. "The Lodge · Cabanes · Castellón"',
      type: 'localeString',
      group: 'hero',
    }),
    defineField({
      name: 'heroH1',
      title: 'Hero H1',
      description: 'e.g. "Find us."',
      type: 'localeString',
      group: 'hero',
    }),
    defineField({
      name: 'heroH1Italic',
      title: 'Hero H1 (italic second line)',
      description: 'e.g. "We\'ll wait."',
      type: 'localeString',
      group: 'hero',
    }),
    defineField({
      name: 'coordinates',
      title: 'GPS coordinates (display)',
      description: 'Shown verbatim. e.g. 40°07\'09.5"N  0°04\'47.8"E',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'elevation',
      title: 'Elevation',
      description: 'e.g. "412 m above the Mediterranean"',
      type: 'localeString',
      group: 'hero',
    }),

    // ── Address & Routes ──────────────────────────────────────────────────────
    defineField({
      name: 'addressLabel',
      title: 'Address section label',
      description: 'e.g. "The Address"',
      type: 'localeString',
      group: 'address',
    }),
    defineField({
      name: 'addressH2',
      title: 'Address heading',
      description: 'e.g. "End of the road."',
      type: 'localeString',
      group: 'address',
    }),
    defineField({
      name: 'addressH2Italic',
      title: 'Address heading (italic line)',
      description: 'e.g. "Then a little further."',
      type: 'localeString',
      group: 'address',
    }),
    defineField({
      name: 'addressLine1',
      title: 'Address line 1',
      description: 'e.g. "La Cueva de Miravet"',
      type: 'string',
      group: 'address',
    }),
    defineField({
      name: 'addressLine2',
      title: 'Address line 2',
      description: 'e.g. "La Ferradura, Cabanes"',
      type: 'string',
      group: 'address',
    }),
    defineField({
      name: 'addressLine3',
      title: 'Address line 3',
      description: 'e.g. "Castellón, Spain — 12595"',
      type: 'string',
      group: 'address',
    }),
    defineField({
      name: 'warningNotice',
      title: 'Google Maps warning notice',
      description: 'Body text inside the orange warning box.',
      type: 'localeText',
      group: 'address',
    }),
    defineField({
      name: 'distanceStats',
      title: 'Distance stats (shown in 2×2 grid)',
      type: 'array',
      group: 'address',
      of: [
        {
          type: 'object',
          name: 'distanceStat',
          fields: [
            defineField({ name: 'key',   title: 'Label',     type: 'localeString', validation: (R) => R.required() }),
            defineField({ name: 'value', title: 'Value',     type: 'string', description: 'e.g. "15 min"', validation: (R) => R.required() }),
            defineField({ name: 'sub',   title: 'Sub-label', type: 'localeString', description: 'e.g. "Desert de les Palmes"' }),
          ],
          preview: { select: { title: 'key.en', subtitle: 'value' } },
        },
      ],
    }),
    defineField({
      name: 'routes',
      title: 'Driving route links',
      description: 'Each link opens a trusted Google Maps route. Max 2.',
      type: 'array',
      group: 'address',
      of: [
        {
          type: 'object',
          name: 'route',
          fields: [
            defineField({ name: 'fromLabel',     title: 'Route identifier',  type: 'string',       description: 'e.g. "AP-7"',                     validation: (R) => R.required() }),
            defineField({ name: 'routeSubtitle', title: 'Route description', type: 'localeString', description: 'e.g. "Autopista del Mediterráneo"' }),
            defineField({ name: 'url',           title: 'Google Maps URL',   type: 'url',          validation: (R) => R.required()                  }),
          ],
          preview: { select: { title: 'fromLabel' } },
        },
      ],
      validation: (R) => R.max(2),
    }),

    // ── How to arrive ────────────────────────────────────────────────────────
    defineField({
      name: 'arriveLabel',
      title: '"How to arrive" section label',
      description: 'e.g. "How to arrive"',
      type: 'localeString',
      group: 'transport',
    }),
    defineField({
      name: 'arriveH2',
      title: '"How to arrive" heading',
      description: 'e.g. "Three ways to the mountain."',
      type: 'localeString',
      group: 'transport',
    }),
    defineField({
      name: 'arriveH2Italic',
      title: '"How to arrive" heading (italic)',
      description: 'e.g. "All of them quiet by the end."',
      type: 'localeString',
      group: 'transport',
    }),
    defineField({
      name: 'arriveNote',
      title: '"How to arrive" intro note',
      description: 'Short italic paragraph below the heading.',
      type: 'localeText',
      group: 'transport',
    }),
    defineField({
      name: 'transportModes',
      title: 'Transport modes (max 3)',
      type: 'array',
      group: 'transport',
      of: [
        {
          type: 'object',
          name: 'transportMode',
          fields: [
            defineField({
              name: 'numeral',
              title: 'Numeral',
              description: 'e.g. "I." — displayed above the icon',
              type: 'string',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'iconKey',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Car',   value: 'car'   },
                  { title: 'Train', value: 'train' },
                  { title: 'Plane', value: 'plane' },
                ],
                layout: 'radio',
              },
              validation: (R) => R.required(),
            }),
            defineField({ name: 'name',       title: 'Mode name',          type: 'localeString', description: 'e.g. "By car"'                     }),
            defineField({ name: 'nameItalic', title: 'Mode name (italic)', type: 'localeString', description: 'e.g. "En coche"'                    }),
            defineField({ name: 'sub',        title: 'Sub-label',          type: 'localeString', description: 'e.g. "The recommended way"'          }),
            defineField({ name: 'body',       title: 'Body paragraph',     type: 'localeText'                                                       }),
            defineField({
              name: 'details',
              title: 'Detail rows (key / value pairs)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'transportDetail',
                  fields: [
                    defineField({ name: 'label', title: 'Label', type: 'localeString' }),
                    defineField({ name: 'value', title: 'Value', type: 'localeString', description: 'e.g. "1 h 15"' }),
                  ],
                  preview: { select: { title: 'label.en', subtitle: 'value.en' } },
                },
              ],
            }),
          ],
          preview: { select: { title: 'name.en', subtitle: 'numeral' } },
        },
      ],
      validation: (R) => R.max(3),
    }),

    // ── Nearby places ────────────────────────────────────────────────────────
    defineField({
      name: 'nearbyLabel',
      title: '"Nearby" section label',
      description: 'e.g. "While you\'re here"',
      type: 'localeString',
      group: 'nearby',
    }),
    defineField({
      name: 'nearbyH2',
      title: '"Nearby" heading',
      description: 'e.g. "The neighbours."',
      type: 'localeString',
      group: 'nearby',
    }),
    defineField({
      name: 'nearbyH2Italic',
      title: '"Nearby" heading (italic)',
      description: 'e.g. "Worth a half-day each."',
      type: 'localeString',
      group: 'nearby',
    }),
    defineField({
      name: 'nearbyNote',
      title: '"Nearby" right-hand note',
      description: 'Italic paragraph to the right of the heading.',
      type: 'localeText',
      group: 'nearby',
    }),
    defineField({
      name: 'nearbyPlaces',
      title: 'Nearby places',
      type: 'array',
      group: 'nearby',
      of: [
        {
          type: 'object',
          name: 'nearbyPlace',
          fields: [
            defineField({ name: 'name',        title: 'Place name',            type: 'string',       validation: (R) => R.required()          }),
            defineField({ name: 'sub',         title: 'Subtitle',              type: 'localeString', description: 'e.g. "The walled town on the sea"' }),
            defineField({ name: 'chip',        title: 'Category chip',         type: 'localeString', description: 'e.g. "Coastal town"'               }),
            defineField({ name: 'distance',    title: 'Distance',              type: 'string',       description: 'e.g. "45 min"'                     }),
            defineField({ name: 'km',          title: 'Kilometres',            type: 'string',       description: 'e.g. "38 km"'                      }),
            defineField({ name: 'direction',   title: 'Direction',             type: 'localeString', description: 'e.g. "North"'                      }),
            defineField({ name: 'url',         title: 'External link (opt.)',  type: 'url',          description: 'Wikipedia, Google Maps, etc.'      }),
            defineField({ name: 'image',       title: 'Image',                 type: 'image', options: { hotspot: true }                              }),
            defineField({ name: 'swatchColor', title: 'Placeholder colour',    type: 'string',       description: 'Hex, e.g. "#7A8FA0"'               }),
          ],
          preview: { select: { title: 'name', subtitle: 'distance', media: 'image' } },
        },
      ],
    }),

    // ── Ready strip ──────────────────────────────────────────────────────────
    defineField({
      name: 'readyH2',
      title: 'Ready strip heading',
      description: 'e.g. "Now you know the way."',
      type: 'localeString',
      group: 'nearby',
    }),
    defineField({
      name: 'readyH2Italic',
      title: 'Ready strip heading (italic)',
      description: 'e.g. "Pick a room."',
      type: 'localeString',
      group: 'nearby',
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
      return { title: 'Location Page' };
    },
  },
});
