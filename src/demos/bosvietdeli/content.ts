/*
 * Pitch mock-up for a real restaurant (bo´s viet deli, München).
 * Only facts from their public website are used: address, phone, opening hours and menu outline.
 * No prices, photos or logo of theirs. Not linked from the Aven site and never indexed.
 */

export const bo = {
  name: "bo´s viet deli",
  tagline: "Veganes Running Sushi",
  address: { street: "Martin-Luther-Str. 8", city: "81539 München-Giesing" },
  phone: "089 89 54 60 34",
  phoneHref: "tel:+498989546034",
  banner: {
    label: "Entwurf von Aven Studio",
    body: "Unverbindlicher Vorschlag für bo´s viet deli – keine offizielle Seite, Reservierungen werden nicht gespeichert.",
    back: "avenstudio.se",
    backHref: "/en",
  },
  hours: [
    { days: "Montag – Freitag", time: "17:00 – 22:00" },
    { days: "Samstag", time: "16:30 – 22:00" },
    { days: "Sonntag", time: "15:30 – 21:00" },
  ],
  menu: [
    { title: "Running Sushi", body: "All you can eat für 90 Minuten – direkt vom Band, mit warmen Häppchen auf pflanzlicher Basis." },
    { title: "Tempura Sushi Rolls", body: "Ura Maki mit veganem Lachs- und Thunfischersatz, Avocado und veganem Frischkäse." },
    { title: "Big Rolls", body: "Große Rollen mit wechselnden Füllungen." },
    { title: "Desserts", body: "Gebackene Bananen, Sesambällchen und mehr." },
  ],
  steps: [
    { title: "Slot wählen", body: "Tag, Uhrzeit und Personenzahl – freie Plätze sieht man sofort." },
    { title: "90 Minuten genießen", body: "Am Band oder am Tisch: Sushi und warme Häppchen, so viel ihr wollt." },
    { title: "Bestätigung erhalten", body: "Sofort per SMS oder E-Mail – ganz ohne Chat hin und her." },
  ],
  notice: "Dies ist ein Entwurf. Es wird keine echte Reservierung angelegt.",
};

/** Seatings: three 90-minute rounds per day, aligned with opening hours. */
export function seatingsFor(day: Date): string[] {
  const weekday = day.getDay();
  if (weekday === 0) return ["15:30", "17:15", "19:00"];
  if (weekday === 6) return ["16:30", "18:15", "20:00"];
  return ["17:00", "18:45", "20:30"];
}
