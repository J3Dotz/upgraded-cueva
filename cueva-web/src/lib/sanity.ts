import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: 'e4tsjl4a',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // CDN for public read; set to false for mutations
  perspective: 'published',
});

const builder = createImageUrlBuilder(client);

/** Returns a Sanity image URL builder for a given image source. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
