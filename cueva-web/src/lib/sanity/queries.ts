import groq from 'groq';

// ── Singletons ────────────────────────────────────────────────────────────────

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    siteName, tagline, email, address, bookingScore, bookingLabel,
    bookDirectNote, copyright, social, nav
  }
`;

export const HOMEPAGE_QUERY = groq`
  *[_type == "homepage"][0] {
    hero {
      eyebrow, headline, subline, mediaType,
      heroImage { alt, "url": asset->url },
      "heroVideoUrl": heroVideo.asset->url,
      heroVideoPoster { alt, "url": asset->url }
    },
    lodge,
    propertyFeatures,
    testimonials,
    roomsTeaser,
    experiencesTeaser,
    closingQuote
  }
`;

export const LOCATION_PAGE_QUERY = groq`
  *[_type == "locationPage"][0] {
    headline, subline, body, mapEmbedUrl
  }
`;

export const BOOK_PAGE_QUERY = groq`
  *[_type == "bookPage"][0] {
    headline, subline, confirmationNote
  }
`;

// ── Rooms ─────────────────────────────────────────────────────────────────────

export const ALL_ROOMS_QUERY = groq`
  *[_type == "room" && locale == $locale] | order(pricePerNight asc) {
    _id, name, slug, subtitle, tagline, pricePerNight,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }
`;

export const ROOM_BY_SLUG_QUERY = groq`
  *[_type == "room" && slug.current == $slug && locale == $locale][0] {
    name, slug, subtitle, description, pricePerNight, bedType,
    amenities,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    gallery[]{ "url": asset->url, alt }
  }
`;

export const ROOM_SLUGS_QUERY = groq`
  *[_type == "room"] { "slug": slug.current, locale }
`;

// ── Experiences ───────────────────────────────────────────────────────────────

export const ALL_EXPERIENCES_QUERY = groq`
  *[_type == "experience" && locale == $locale] | order(_createdAt asc) {
    _id, title, slug, category, tagline, duration, groupSize, price,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt,
    featured
  }
`;

// ── Journal ───────────────────────────────────────────────────────────────────

export const JOURNAL_POSTS_QUERY = groq`
  *[_type == "journalPost" && locale == $locale]
  | order(publishedAt desc) {
    _id, title, slug, category, excerpt, author, publishedAt,
    readingMinutes,
    "featuredImageUrl": featuredImage.asset->url,
    featured
  }
`;

export const JOURNAL_POST_BY_SLUG_QUERY = groq`
  *[_type == "journalPost" && slug.current == $slug
    && locale == $locale][0] {
    title, category, body, author, publishedAt, readingMinutes,
    "featuredImageUrl": featuredImage.asset->url
  }
`;

export const JOURNAL_SLUGS_QUERY = groq`
  *[_type == "journalPost"] { "slug": slug.current, locale }
`;
