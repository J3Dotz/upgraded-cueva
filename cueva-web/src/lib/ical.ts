// Server-only — runs inside Vercel serverless functions, never in the browser.
// The private iCal URL is fetched server-side so it's never exposed to clients.

import ical from 'node-ical';

export type BookedRange = {
  start: Date;
  end: Date;
  summary?: string;
};

/**
 * Fetch and parse an iCal feed (e.g. from Airbnb or Booking.com).
 * Returns an array of booked date ranges.
 */
export async function fetchBookedRanges(icalUrl: string): Promise<BookedRange[]> {
  try {
    const events = await ical.fromURL(icalUrl);
    const ranges: BookedRange[] = [];

    for (const event of Object.values(events)) {
      if (!event || event.type !== 'VEVENT' || !event.start || !event.end) continue;
      ranges.push({
        start: new Date(event.start as Date),
        end: new Date(event.end as Date),
        summary: event.summary as string | undefined,
      });
    }

    return ranges;
  } catch (err) {
    console.error('[ical] Failed to fetch/parse iCal feed:', err);
    return [];
  }
}

/**
 * Returns true if the requested check-in/check-out span
 * doesn't overlap with any existing booked range.
 */
export function isAvailable(
  ranges: BookedRange[],
  checkIn: Date,
  checkOut: Date
): boolean {
  return !ranges.some(({ start, end }) => checkIn < end && checkOut > start);
}
