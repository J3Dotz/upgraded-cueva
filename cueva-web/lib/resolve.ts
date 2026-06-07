import { defineLocations } from 'sanity/presentation'

export const resolve = defineLocations({
  room: {
    select: { name: 'name', slug: 'slug.current', locale: 'locale' },
    resolve: (doc) => ({
      locations: [{ title: doc.name, href: `/${doc.locale}/stay/${doc.slug}` }],
    }),
  },
  experience: {
    select: { title: 'title', slug: 'slug.current', locale: 'locale' },
    resolve: (doc) => ({
      locations: [{ title: doc.title, href: `/${doc.locale}/experiences/${doc.slug}` }],
    }),
  },
  journalPost: {
    select: { title: 'title', slug: 'slug.current', locale: 'locale' },
    resolve: (doc) => ({
      locations: [{ title: doc.title, href: `/${doc.locale}/journal/${doc.slug}` }],
    }),
  },
  homepage: {
    resolve: () => ({
      locations: [
        { title: 'Homepage EN', href: '/en' },
        { title: 'Homepage ES', href: '/es' },
      ],
    }),
  },
})
