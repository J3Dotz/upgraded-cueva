// GROQ queries for journal post documents

export const journalPostsQuery = `*[_type == "journalPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  category,
  excerpt,
  coverImage { ..., "alt": alt },
  readingMinutes,
  author
}`;

export const journalPostBySlugQuery = `*[_type == "journalPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  category,
  excerpt,
  body,
  coverImage { ..., "alt": alt },
  readingMinutes,
  author
}`;

export const journalSlugQuery = `*[_type == "journalPost"] { "slug": slug.current }`;
