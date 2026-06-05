// TypeScript interfaces for all Sanity GROQ query return shapes.
// Every field matches the schema definitions in /schemas — no `any`.

/** Serialised Portable Text block (opaque to callers; consumed by the PT renderer). */
export type PortableTextBlock = Record<string, unknown> & { _type: string };

// ── siteSettings ─────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteSettingsNav {
  links: NavLink[];
  ctaLabel: string | null;
  ctaHref: string | null;
}

export interface SiteSettingsSocial {
  instagram: string | null;
  facebook: string | null;
}

export interface SiteSettings {
  siteName: string | null;
  tagline: string | null;
  email: string | null;
  address: string | null;
  bookingScore: string | null;
  bookingLabel: string | null;
  bookDirectNote: string | null;
  copyright: string | null;
  social: SiteSettingsSocial | null;
  nav: SiteSettingsNav | null;
}

// ── homepage ─────────────────────────────────────────────────────────────────

export interface HomepageHeroImage {
  alt: string | null;
  url: string | null;
}

export interface HomepageHero {
  eyebrow: string | null;
  headline: string | null;
  subline: string | null;
  mediaType: 'image' | 'video' | null;
  heroImage: HomepageHeroImage | null;
  heroVideoUrl: string | null;
  heroVideoPoster: HomepageHeroImage | null;
}

export interface HomepageLodge {
  sectionLabel: string | null;
  headline: string | null;
  body: string | null;
}

export interface PropertyFeature {
  icon: string | null;
  label: string;
}

export interface HomepagePropertyFeatures {
  sectionLabel: string | null;
  headline: string | null;
  features: PropertyFeature[] | null;
}

export interface Testimonial {
  quote: string;
  author: string | null;
  country: string | null;
}

export interface HomepageRoomsTeaser {
  sectionLabel: string | null;
  headline: string | null;
  subline: string | null;
}

export interface ExperienceTeaserItem {
  title: string;
  description: string | null;
  href: string | null;
}

export interface HomepageExperiencesTeaser {
  sectionLabel: string | null;
  headline: string | null;
  items: ExperienceTeaserItem[] | null;
}

export interface Homepage {
  hero: HomepageHero | null;
  lodge: HomepageLodge | null;
  propertyFeatures: HomepagePropertyFeatures | null;
  testimonials: Testimonial[] | null;
  roomsTeaser: HomepageRoomsTeaser | null;
  experiencesTeaser: HomepageExperiencesTeaser | null;
  closingQuote: string | null;
}

// ── locationPage ─────────────────────────────────────────────────────────────

export interface LocationPage {
  headline: string | null;
  subline: string | null;
  body: PortableTextBlock[] | null;
  mapEmbedUrl: string | null;
}

// ── bookPage ─────────────────────────────────────────────────────────────────

export interface BookPage {
  headline: string | null;
  subline: string | null;
  confirmationNote: string | null;
}

// ── room ─────────────────────────────────────────────────────────────────────

export interface SanitySlug {
  current: string;
}

export interface RoomListItem {
  _id: string;
  name: string | null;
  slug: SanitySlug;
  subtitle: string | null;
  tagline: string | null;
  pricePerNight: number | null;
  imageUrl: string | null;
  imageAlt: string | null;
}

export interface GalleryImage {
  url: string | null;
  alt: string | null;
}

export interface Room {
  name: string | null;
  slug: SanitySlug;
  nameTranslation: string | null;
  subtitle: string | null;
  tagline: string | null;
  description: string | null;
  pricePerNight: number | null;
  bedType: string | null;
  sleeps: number | null;
  size: string | null;
  view: string | null;
  balcony: string | null;
  bathroom: string | null;
  materials: string | null;
  heating: string | null;
  amenities: string[] | null;
  imageUrl: string | null;
  imageAlt: string | null;
  gallery: GalleryImage[] | null;
}

export interface RoomSlug {
  slug: string;
  locale: string;
}

// ── experience ───────────────────────────────────────────────────────────────

export interface ExperienceListItem {
  _id: string;
  title: string | null;
  slug: SanitySlug;
  category: string | null;
  tagline: string | null;
  duration: string | null;
  groupSize: string | null;
  price: string | null;
  imageUrl: string | null;
  imageAlt: string | null;
  featured: boolean;
}

// ── journalPost ──────────────────────────────────────────────────────────────

export interface JournalPostListItem {
  _id: string;
  title: string | null;
  slug: SanitySlug;
  category: string | null;
  excerpt: string | null;
  author: string | null;
  publishedAt: string;
  readingMinutes: number | null;
  featuredImageUrl: string | null;
  featured: boolean;
}

export interface JournalPost {
  title: string | null;
  category: string | null;
  excerpt: string | null;
  body: PortableTextBlock[] | null;
  author: string | null;
  publishedAt: string;
  readingMinutes: number | null;
  featuredImageUrl: string | null;
}

export interface JournalSlug {
  slug: string;
  locale: string;
}
