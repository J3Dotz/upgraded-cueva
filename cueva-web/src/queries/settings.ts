// GROQ query for the site settings singleton

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  tagline,
  heroTitle,
  heroSubtitle,
  email,
  address,
  instagram,
  seoDescription
}`;
