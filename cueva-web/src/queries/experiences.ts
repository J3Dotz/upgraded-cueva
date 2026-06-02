// GROQ queries for experience documents

export const experiencesQuery = `*[_type == "experience"] | order(sortOrder asc) {
  _id,
  title,
  slug,
  category,
  description,
  duration,
  image { ..., "alt": alt },
  featured
}`;

export const featuredExperiencesQuery = `*[_type == "experience" && featured == true] | order(sortOrder asc) [0..2] {
  _id,
  title,
  slug,
  category,
  description,
  image { ..., "alt": alt }
}`;
