import { defineType, defineField } from 'sanity';

/**
 * Site Settings singleton — global data shared across every page.
 * Contact details, social links, footer copy, and fallback SEO.
 * Only one document of this type should ever exist.
 */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'contact', title: 'Contact',      default: true },
    { name: 'footer',  title: 'Footer'                      },
    { name: 'social',  title: 'Social'                      },
    { name: 'seo',     title: 'SEO Defaults'                },
  ],
  fields: [

    // ── Contact ───────────────────────────────────────────────────────────────
    defineField({
      name: 'email',
      title: 'Contact email',
      description: 'Used in the footer, booking page sidebar, and bespoke enquiry link.',
      type: 'string',
      initialValue: 'hola@lacuevademiravet.com',
      group: 'contact',
    }),
    defineField({
      name: 'phone',
      title: 'Phone number',
      description: 'e.g. "+34 641 33 09 42" — shown on the booking page sidebar.',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Full address (structured)',
      description: 'Used in the footer and location page.',
      type: 'localeText',
      group: 'contact',
    }),

    // ── Footer ────────────────────────────────────────────────────────────────
    defineField({
      name: 'footerTagline',
      title: 'Footer tagline',
      description: 'Italic quote shown in the footer brand column.',
      type: 'localeString',
      group: 'footer',
    }),
    defineField({
      name: 'footerGuarantee',
      title: 'Footer guarantee line',
      description: 'e.g. "Best rate guaranteed — book direct."',
      type: 'localeString',
      group: 'footer',
    }),

    // ── Social ────────────────────────────────────────────────────────────────
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'pinterest',
      title: 'Pinterest URL',
      type: 'url',
      group: 'social',
    }),

    // ── SEO Defaults ─────────────────────────────────────────────────────────
    defineField({
      name: 'seoDescription',
      title: 'Default meta description',
      description: 'Fallback used on any page that doesn\'t define its own description.',
      type: 'localeText',
      group: 'seo',
    }),

    // ── Legacy fields (kept for backward compatibility) ───────────────────────
    defineField({
      name: 'tagline',
      title: 'Tagline (legacy)',
      description: 'Superseded by footerTagline. Kept so existing queries don\'t break.',
      type: 'localeString',
      group: 'footer',
      hidden: true,
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero title (legacy)',
      description: 'Superseded by homePage.heroH1. Kept so existing queries don\'t break.',
      type: 'localeString',
      group: 'seo',
      hidden: true,
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero subtitle (legacy)',
      description: 'Superseded by homePage.heroBody. Kept so existing queries don\'t break.',
      type: 'localeText',
      group: 'seo',
      hidden: true,
    }),
  ],
});
