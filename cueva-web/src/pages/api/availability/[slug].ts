import type { APIRoute } from 'astro';
import { client } from '../../../lib/sanity';
import { ROOM_ICAL_QUERY } from '@/lib/sanity/queries';
import { fetchBookedRanges, isAvailable } from '../../../lib/ical';

export const prerender = false;

/**
 * GET /api/availability/[slug]?from=YYYY-MM-DD&to=YYYY-MM-DD
 *
 * Returns { available: boolean, ranges: [{start, end}] }
 * The iCal URL is never returned — it stays server-side.
 */
export const GET: APIRoute = async ({ params, url }) => {
  const { slug } = params;
  const from = url.searchParams.get('from');
  const to   = url.searchParams.get('to');

  // Fetch the room's private iCal URL from Sanity
  const room = await client.fetch<{ icalUrl?: string } | null>(
    ROOM_ICAL_QUERY,
    { slug }
  );

  if (!room) {
    return new Response(JSON.stringify({ error: 'Room not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // If no iCal URL is set yet, return all-available
  if (!room.icalUrl) {
    return new Response(JSON.stringify({ available: true, ranges: [] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  }

  const ranges = await fetchBookedRanges(room.icalUrl);

  // If date range was provided, check availability
  let available: boolean | null = null;
  if (from && to) {
    const checkIn  = new Date(from);
    const checkOut = new Date(to);
    available = isAvailable(ranges, checkIn, checkOut);
  }

  return new Response(
    JSON.stringify({
      available,
      ranges: ranges.map(({ start, end }) => ({
        start: start.toISOString(),
        end:   end.toISOString(),
      })),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Cache 1 hour — iCal feeds don't update more often than this
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    }
  );
};
