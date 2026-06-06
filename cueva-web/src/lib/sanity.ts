import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.SANITY_API_PROJECT_ID,
  dataset: import.meta.env.SANITY_API_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true, // CDN for public read; set to false for mutations
  perspective: 'published',
});

const builder = createImageUrlBuilder(client);

/** Returns a Sanity image URL builder for a given image source. */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
