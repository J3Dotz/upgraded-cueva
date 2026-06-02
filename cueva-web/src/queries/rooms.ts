// GROQ queries for room documents

/** Lightweight list — used on the Stay page and homepage */
export const roomsQuery = `*[_type == "room"] | order(sortOrder asc) {
  _id,
  name,
  slug,
  tagline,
  swatchColor,
  bedConfig,
  view,
  priceFrom,
  "coverImage": images[0] { ..., "alt": alt }
}`;

/** Full room — used on the room detail page */
export const roomBySlugQuery = `*[_type == "room" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  tagline,
  description,
  swatchColor,
  bedConfig,
  view,
  priceFrom,
  images[] { ..., "alt": alt },
  amenities[] { label },
  icalUrl
}`;

/** Slugs only — for getStaticPaths */
export const roomSlugsQuery = `*[_type == "room"] { "slug": slug.current }`;
