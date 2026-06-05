import { defineType, defineField } from 'sanity';

// Singleton — only one document of this type should exist.
// Enforced via structureTool in sanity.config.ts.
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site name',
      type: 'string',
      initialValue: 'La Cueva de Miravet',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'Short phrase used in the footer and meta tags.',
      type: 'string',
      initialValue: 'Where the mountain meets the Mediterranean.',
    }),
    defineField({
      name: 'email',
      title: 'Contact email',
      type: 'string',
      initialValue: 'hola@lacuevademiravet.com',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
      initialValue: 'Cabanes, Castellón, Spain',
    }),
    defineField({
      name: 'bookingScore',
      title: 'Booking.com score',
      description: 'e.g. "8.7"',
      type: 'string',
    }),
    defineField({
      name: 'bookingLabel',
      title: 'Booking.com label',
      description: 'e.g. \'Booking.com "Exceptional"\'',
      type: 'string',
    }),
    defineField({
      name: 'bookDirectNote',
      title: 'Book-direct guarantee note',
      description: 'Short line shown in the footer. e.g. "Best rate guaranteed — book direct."',
      type: 'string',
      initialValue: 'Best rate guaranteed — book direct.',
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright line',
      description: 'e.g. "© 2026 La Cueva de Miravet · All rights reserved"',
      type: 'string',
    }),
    defineField({
      name: 'social',
      title: 'Social links',
      type: 'object',
      fields: [
        defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'facebook',  title: 'Facebook URL',  type: 'url' }),
      ],
    }),
    defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'object',
      fields: [
        defineField({
          name: 'links',
          title: 'Nav links',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'navLink',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string', validation: (R) => R.required() }),
                defineField({ name: 'href',  title: 'Href',  type: 'string', validation: (R) => R.required() }),
              ],
              preview: { select: { title: 'label', subtitle: 'href' } },
            },
          ],
        }),
        defineField({
          name: 'ctaLabel',
          title: 'CTA button label',
          type: 'string',
          initialValue: 'Book Now',
        }),
        defineField({
          name: 'ctaHref',
          title: 'CTA button href',
          type: 'string',
          initialValue: '/book',
        }),
      ],
    }),
  ],
});
