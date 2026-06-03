// GROQ queries for room documents

/** Lightweight list — used on Stay page, homepage, adjacent rooms */
export const roomsQuery = `*[_type == "room"] | order(sortOrder asc) {
  _id,
  name,
  slug,
  suiteType,
  tagline,
  swatchColor,
  bedConfig,
  view,
  priceFrom,
  sleeps,
  size,
  "images": images[0..1] { ..., "alt": alt }
}`;

/** Full room — used on the room detail page */
export const roomBySlugQuery = `*[_type == "room" && slug.current == $slug][0] {
  _id,
  name,
  nameTranslation,
  slug,
  suiteType,
  tagline,
  description,
  swatchColor,
  bedConfig,
  view,
  balcony,
  bathroom,
  materials,
  heating,
  sleeps,
  size,
  priceFrom,
  images[] { ..., "alt": alt, "caption": caption },
  icalUrl
}`;

/** Slugs only — for getStaticPaths */
export const roomSlugsQuery = `*[_type == "room"] { "slug": slug.current }`;
