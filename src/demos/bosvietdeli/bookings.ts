/*
 * Demo booking store for the bo´s viet deli mock-up.
 * Bookings made on the page live only in this browser's localStorage; the owner view
 * mixes them with generated sample bookings so the overview never looks empty.
 * A real version would store bookings on a server behind a proper login.
 */

export type Seat = "band" | "tisch" | "egal";

export type Booking = {
  id: string;
  day: string; // YYYY-MM-DD
  time: string; // HH:MM
  guests: number;
  seat: Seat;
  name: string;
  phone: string;
  source: "online" | "sample";
  status: "booked" | "arrived" | "cancelled";
};

/** Seats per 90-minute round (illustrative). */
export const capacity = 40;

const storeKey = "bo-demo-bookings";

export function loadStored(): Booking[] {
  try {
    const raw = localStorage.getItem(storeKey);
    return raw ? (JSON.parse(raw) as Booking[]) : [];
  } catch {
    return [];
  }
}

function saveAll(bookings: Booking[]) {
  try {
    localStorage.setItem(storeKey, JSON.stringify(bookings));
  } catch {
    // Private mode or blocked storage: the demo still works, it just forgets.
  }
}

export function addBooking(booking: Omit<Booking, "id" | "source" | "status">) {
  saveAll([...loadStored(), { ...booking, id: `o-${Date.now()}`, source: "online", status: "booked" }]);
}

/** Status changes from the owner view. Sample bookings are tracked by id as overrides. */
export function setStatus(id: string, status: Booking["status"]) {
  const stored = loadStored();
  const existing = stored.find((b) => b.id === id);
  saveAll(existing ? stored.map((b) => (b.id === id ? { ...b, status } : b)) : stored);
  try {
    const overrides = JSON.parse(localStorage.getItem(`${storeKey}-status`) ?? "{}") as Record<string, Booking["status"]>;
    overrides[id] = status;
    localStorage.setItem(`${storeKey}-status`, JSON.stringify(overrides));
  } catch {
    // Ignore: status simply resets on reload.
  }
}

function statusOverrides(): Record<string, Booking["status"]> {
  try {
    return JSON.parse(localStorage.getItem(`${storeKey}-status`) ?? "{}");
  } catch {
    return {};
  }
}

export function clearDemo() {
  try {
    localStorage.removeItem(storeKey);
    localStorage.removeItem(`${storeKey}-status`);
  } catch {
    // Nothing to clear.
  }
}

const firstNames = ["Lena", "Jonas", "Mia", "Felix", "Sara", "Tim", "Anna", "Ben", "Lea", "Paul", "Nora", "Emil", "Hanna", "Luca"];
const lastNames = ["M.", "K.", "S.", "W.", "B.", "H.", "F.", "R.", "L.", "T."];
const seatsCycle: Seat[] = ["band", "band", "tisch", "egal"];

/** Deterministic sample bookings for one day, so the overview looks like a real evening. */
function samples(day: string, times: string[]): Booking[] {
  let hash = 0;
  for (const c of day) hash = (hash * 31 + c.charCodeAt(0)) >>> 0;
  const out: Booking[] = [];
  times.forEach((time, t) => {
    const count = (hash >> (t * 2)) % 4 + (t === 2 || t === 3 ? 2 : 0);
    for (let i = 0; i < count; i++) {
      const n = (hash + t * 7 + i * 13) >>> 0;
      out.push({
        id: `s-${day}-${time}-${i}`,
        day,
        time,
        guests: (n % 5) + 1,
        seat: seatsCycle[n % seatsCycle.length],
        name: `${firstNames[n % firstNames.length]} ${lastNames[(n >> 3) % lastNames.length]}`,
        phone: `0151 ${String(1000000 + (n % 8999999)).slice(0, 7)}`,
        source: "sample",
        status: "booked",
      });
    }
  });
  return out;
}

/** Everything the owner sees for a day: sample bookings plus this browser's online bookings. */
export function bookingsFor(day: string, times: string[]): Booking[] {
  const overrides = statusOverrides();
  return [...samples(day, times), ...loadStored().filter((b) => b.day === day)]
    .map((b) => (overrides[b.id] ? { ...b, status: overrides[b.id] } : b))
    .sort((a, b) => a.time.localeCompare(b.time));
}
