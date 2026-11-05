/*
 * Calendar helpers shared by the demo booking flows. Everything runs in the browser
 * after the visitor interacts, so dates always match the visitor's day.
 */

export type Slot = { day: Date; time: string };

/** The next `count` days the business is open, starting tomorrow. `closed` lists weekday numbers (0 = Sunday). */
export function upcomingDays(count = 10, closed: number[] = [0]): Date[] {
  const days: Date[] = [];
  const day = new Date();
  day.setHours(12, 0, 0, 0);
  while (days.length < count) {
    day.setDate(day.getDate() + 1);
    if (!closed.includes(day.getDay())) days.push(new Date(day));
  }
  return days;
}

/** Formats whole hours as Swedish clock times ("09.00"). */
export function hoursToSlots(hours: number[]): string[] {
  return hours.map((h) => `${String(h).padStart(2, "0")}.00`);
}

/** Deterministic "already booked" pattern so calendars look realistic without a backend. */
export function isTaken(dayKey: string, slot: string, salt = ""): boolean {
  let hash = 0;
  for (const char of salt + dayKey + slot) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return hash % 3 === 0;
}

export const dayKey = (day: Date) => day.toISOString().slice(0, 10);

export const shortDate = new Intl.DateTimeFormat("sv-SE", { weekday: "short", day: "numeric", month: "short" });
export const longDate = new Intl.DateTimeFormat("sv-SE", { weekday: "long", day: "numeric", month: "long" });
