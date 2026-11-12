/*
 * Pitch mock-up for a real restaurant (bo´s viet deli, München), in German and English.
 * Only facts from their public website are used: address, phone, opening hours and menu outline.
 * No prices, photos or logo of theirs beyond the logo they shared. Not linked from the Aven site and never indexed.
 *
 * URLs: German /demo/bosvietdeli(/admin), English /demo/bosvietdeli/en(/admin).
 * Pages live in app/demo/bosvietdeli/[lang]; the proxy rewrites the German URLs onto /de.
 */

export const boLocales = ["de", "en"] as const;
export type BoLocale = (typeof boLocales)[number];
export const isBoLocale = (value: string): value is BoLocale => (boLocales as readonly string[]).includes(value);

const base = "/demo/bosvietdeli";
export const boHome = (locale: BoLocale) => (locale === "de" ? base : `${base}/${locale}`);
export const boAdmin = (locale: BoLocale) => `${boHome(locale)}/admin`;

const shared = {
  name: "bo´s viet deli",
  /** All-you-can-eat price per person, from their Tripadvisor listing. */
  price: 28.9,
  address: { street: "Martin-Luther-Str. 8", city: "81539 München-Giesing" },
  phone: "089 89 54 60 34",
  phoneHref: "tel:+498989546034",
};

const de = {
  ...shared,
  locale: "de" as BoLocale,
  intl: "de-DE",
  meta: {
    title: "Entwurf für bo´s viet deli — Aven Studio",
    description: "Unverbindlicher Website-Entwurf von Aven Studio.",
    adminTitle: "Team-Bereich — Entwurf",
  },
  banner: {
    label: "Entwurf von Aven Studio",
    body: "Unverbindlicher Vorschlag für bo´s viet deli – keine offizielle Seite, Reservierungen sind nur Demo-Daten.",
    back: "avenstudio.se",
    backHref: "/en",
  },
  language: "Sprache",
  nav: { menu: "Speisen", hours: "Öffnungszeiten", vouchers: "Gutscheine", reserve: "Tisch reservieren" },
  hero: {
    eyebrow: "100 % vegan · Japanese Fusion · München-Giesing",
    titleStart: "Sushi, das ",
    titleAccent: "vorbeirollt",
    lead: "Veganes Running Sushi – 90 Minuten all you can eat, direkt vom Band. Reserviere deinen Platz jetzt online, in unter einer Minute.",
    primary: "Platz reservieren →",
    secondary: "Was es gibt",
    stats: [
      ["90 min", "All you can eat"],
      ["30 Tage", "im Voraus buchbar"],
      ["28,90 €", "pro Person"],
      ["7 Tage", "geöffnet"],
    ] as [string, string][],
  },
  stepsEyebrow: "So einfach geht’s",
  steps: [
    { title: "Slot wählen", body: "Tag, Uhrzeit und Personenzahl – freie Plätze sieht man sofort." },
    { title: "90 Minuten genießen", body: "Am Band oder am Tisch: Sushi und warme Häppchen, so viel ihr wollt." },
    { title: "Bestätigung erhalten", body: "Sofort per SMS oder E-Mail – ganz ohne Chat hin und her." },
  ],
  bookingSection: {
    eyebrow: "Online reservieren",
    titleStart: "Dein Platz am Band – ",
    titleAccent: "sofort bestätigt",
    lead: "Kein Warten auf eine Antwort im Chat. Wähle deinen Slot, und du bekommst direkt eine Bestätigung.",
  },
  menuSection: { eyebrow: "Speisen", titleStart: "Frisch ", titleAccent: "gerollt", titleEnd: ", direkt vom Band." },
  menu: [
    { title: "Running Sushi", body: "All you can eat für 90 Minuten – 28,90 € pro Person. Direkt vom Band, mit warmen Häppchen auf pflanzlicher Basis." },
    { title: "Tempura Sushi Rolls", body: "Ura Maki mit veganem Lachs- und Thunfischersatz, Avocado und veganem Frischkäse." },
    { title: "Big Rolls", body: "Große Rollen mit wechselnden Füllungen." },
    { title: "Desserts", body: "Gebackene Bananen, Sesambällchen und mehr." },
  ],
  hoursTitle: "Öffnungszeiten",
  hours: [
    { days: "Montag – Freitag", time: "17:00 – 22:00" },
    { days: "Samstag", time: "16:30 – 22:00" },
    { days: "Sonntag", time: "15:30 – 21:00" },
  ],
  hoursNote: "Kein Ruhetag. Feiertage werden hier aktuell angezeigt.",
  findUs: "So findest du uns",
  vouchersSection: { eyebrow: "Gutscheine", titleStart: "Verschenke 90 Minuten ", titleAccent: "Sushi-Glück" },
  footer: { team: "Für das Team", credit: "Entwurf: Aven Studio" },
  notice: "Dies ist ein Entwurf – die Reservierung wird nur in deinem Browser gespeichert.",

  booking: {
    headings: ["1. Wann und wie viele?", "2. Deine Kontaktdaten"],
    guests: "Personen",
    moreThanSix: "Mehr als 6? Ruf uns kurz an:",
    day: "Tag",
    time: "Uhrzeit – ihr habt 90 Minuten",
    seat: "Wo möchtet ihr sitzen?",
    seats: [
      { id: "band", name: "Direkt am Sushi-Band", short: "Am Band", note: "Die Teller fahren direkt an dir vorbei." },
      { id: "tisch", name: "Am Tisch", short: "Am Tisch", note: "Gemütlicher und ideal für Gruppen – das Band ist in Reichweite." },
      { id: "egal", name: "Egal", short: "Egal", note: "Wir geben euch den besten freien Platz." },
    ],
    slot: { taken: "ausgebucht", plenty: "viele Plätze frei", free: "frei" },
    fields: { name: "Name", phone: "Handynummer (für die SMS)" },
    errors: { time: "Bitte wähle eine Uhrzeit.", name: "Bitte gib deinen Namen an.", phone: "Bitte gib eine gültige Telefonnummer an." },
    next: "Weiter →",
    submit: "Verbindlich reservieren",
    back: "← Zurück",
    summary: "Deine Auswahl",
    summaryRows: { day: "Tag", time: "Uhrzeit", guests: "Personen", seat: "Sitzplatz", price: "Preis" },
    priceNote: "All you can eat, zahlbar vor Ort.",
    timeSuffix: " Uhr",
    person: "Person",
    persons: "Personen",
    confirmed: "Reservierung bestätigt",
    seeYou: "Bis bald",
    smsNote: "Die Bestätigung kommt per SMS. Euer Slot dauert 90 Minuten.",
    teamBefore: "Im",
    teamLink: "Team-Bereich",
    teamAfter: "siehst du, wie die Reservierung beim Restaurant ankommt.",
    again: "Neue Reservierung",
    prevMonth: "Vorheriger Monat",
    nextMonth: "Nächster Monat",
    weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
  },

  voucher: {
    buy: "Gutschein kaufen →",
    amount: "Betrag",
    forWhom: "Für wen?",
    optional: "(optional)",
    pay: "Weiter zur Bezahlung →",
    done: (amount: number, recipient: string) => `Gutschein über ${amount} €${recipient ? ` für ${recipient}` : ""} – fertig!`,
    realShop: "Im echten Shop käme jetzt die Bezahlung und der Gutschein als PDF per E-Mail.",
    close: "Schließen",
  },

  admin: {
    area: "Team-Bereich",
    onlyFor: "Nur für das Team von",
    wrongPin: "Falscher PIN.",
    login: "Anmelden",
    demoPin: "Demo-PIN:",
    realLogin: "Im echten System gibt es ein persönliches Login pro Mitarbeiter.",
    title: "Reservierungen",
    toSite: "Zur Website",
    logout: "Abmelden",
    day: "Tag",
    today: "Heute",
    tomorrow: "Morgen",
    stats: { bookings: "Reservierungen", guests: "Gäste", online: "Davon online neu", cancelled: "Storniert" },
    seatsLabel: "Plätze",
    onlineNew: "Online · neu",
    person: "Person",
    persons: "Pers.",
    seat: { band: "Am Band", tisch: "Am Tisch", egal: "Egal" },
    arrived: "Erschienen",
    cancel: "Stornieren",
    arrivedDone: "✓ Erschienen",
    undo: "Storniert – rückgängig",
    empty: "Noch keine Reservierungen.",
    footnote:
      "Entwurf: Beispiel-Reservierungen plus die, die du auf der Website in diesem Browser gemacht hast. Im echten System kämen alle Online-Reservierungen live hier an – auch aufs Handy.",
    reset: "Demo zurücksetzen",
  },
};

export type Bo = typeof de;

const en: Bo = {
  ...shared,
  locale: "en",
  intl: "en-GB",
  meta: {
    title: "Draft for bo´s viet deli — Aven Studio",
    description: "Non-binding website draft by Aven Studio.",
    adminTitle: "Team area — Draft",
  },
  banner: {
    label: "Draft by Aven Studio",
    body: "A non-binding proposal for bo´s viet deli – not the official site, reservations are demo data only.",
    back: "avenstudio.se",
    backHref: "/en",
  },
  language: "Language",
  nav: { menu: "Menu", hours: "Opening hours", vouchers: "Vouchers", reserve: "Book a table" },
  hero: {
    eyebrow: "100 % vegan · Japanese fusion · Munich-Giesing",
    titleStart: "Sushi that ",
    titleAccent: "rolls by",
    lead: "Vegan running sushi – 90 minutes all you can eat, straight from the belt. Book your seat online now, in under a minute.",
    primary: "Book a seat →",
    secondary: "What's on",
    stats: [
      ["90 min", "All you can eat"],
      ["30 days", "bookable ahead"],
      ["€28.90", "per person"],
      ["7 days", "a week"],
    ],
  },
  stepsEyebrow: "It's that easy",
  steps: [
    { title: "Pick a slot", body: "Day, time and party size – you see free seats straight away." },
    { title: "Enjoy 90 minutes", body: "At the belt or at a table: sushi and warm bites, as much as you like." },
    { title: "Get confirmed", body: "Instantly by text or email – no back-and-forth in a chat." },
  ],
  bookingSection: {
    eyebrow: "Book online",
    titleStart: "Your seat at the belt – ",
    titleAccent: "confirmed instantly",
    lead: "No waiting for a reply in a chat. Choose your slot and you get a confirmation right away.",
  },
  menuSection: { eyebrow: "Menu", titleStart: "Freshly ", titleAccent: "rolled", titleEnd: ", straight off the belt." },
  menu: [
    { title: "Running Sushi", body: "All you can eat for 90 minutes – €28.90 per person. Straight from the belt, with warm plant-based bites." },
    { title: "Tempura Sushi Rolls", body: "Ura maki with vegan salmon and tuna alternatives, avocado and vegan cream cheese." },
    { title: "Big Rolls", body: "Large rolls with changing fillings." },
    { title: "Desserts", body: "Fried bananas, sesame balls and more." },
  ],
  hoursTitle: "Opening hours",
  hours: [
    { days: "Monday – Friday", time: "17:00 – 22:00" },
    { days: "Saturday", time: "16:30 – 22:00" },
    { days: "Sunday", time: "15:30 – 21:00" },
  ],
  hoursNote: "Open every day. Holiday hours are always shown here.",
  findUs: "How to find us",
  vouchersSection: { eyebrow: "Vouchers", titleStart: "Give 90 minutes of ", titleAccent: "sushi bliss" },
  footer: { team: "For the team", credit: "Draft: Aven Studio" },
  notice: "This is a draft – the reservation is only saved in your browser.",

  booking: {
    headings: ["1. When and how many?", "2. Your contact details"],
    guests: "Guests",
    moreThanSix: "More than 6? Give us a quick call:",
    day: "Day",
    time: "Time – you have 90 minutes",
    seat: "Where would you like to sit?",
    seats: [
      { id: "band", name: "Right at the sushi belt", short: "At the belt", note: "The plates pass right by you." },
      { id: "tisch", name: "At a table", short: "At a table", note: "More relaxed and great for groups – the belt is within reach." },
      { id: "egal", name: "Any seat", short: "Any seat", note: "We'll give you the best free seat." },
    ],
    slot: { taken: "fully booked", plenty: "plenty of seats", free: "free" },
    fields: { name: "Name", phone: "Mobile number (for the text)" },
    errors: { time: "Please choose a time.", name: "Please enter your name.", phone: "Please enter a valid phone number." },
    next: "Continue →",
    submit: "Confirm booking",
    back: "← Back",
    summary: "Your selection",
    summaryRows: { day: "Day", time: "Time", guests: "Guests", seat: "Seat", price: "Price" },
    priceNote: "All you can eat, paid at the restaurant.",
    timeSuffix: "",
    person: "guest",
    persons: "guests",
    confirmed: "Booking confirmed",
    seeYou: "See you soon",
    smsNote: "Your confirmation comes by text. Your slot lasts 90 minutes.",
    teamBefore: "In the",
    teamLink: "team area",
    teamAfter: "you can see how the booking reaches the restaurant.",
    again: "New booking",
    prevMonth: "Previous month",
    nextMonth: "Next month",
    weekdays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  },

  voucher: {
    buy: "Buy a voucher →",
    amount: "Amount",
    forWhom: "Who is it for?",
    optional: "(optional)",
    pay: "Continue to payment →",
    done: (amount: number, recipient: string) => `€${amount} voucher${recipient ? ` for ${recipient}` : ""} – done!`,
    realShop: "In the real shop, payment would come next and the voucher would arrive as a PDF by email.",
    close: "Close",
  },

  admin: {
    area: "Team area",
    onlyFor: "Only for the team at",
    wrongPin: "Wrong PIN.",
    login: "Log in",
    demoPin: "Demo PIN:",
    realLogin: "The real system has a personal login for each staff member.",
    title: "Reservations",
    toSite: "To the website",
    logout: "Log out",
    day: "Day",
    today: "Today",
    tomorrow: "Tomorrow",
    stats: { bookings: "Reservations", guests: "Guests", online: "New online", cancelled: "Cancelled" },
    seatsLabel: "seats",
    onlineNew: "Online · new",
    person: "guest",
    persons: "guests",
    seat: { band: "At the belt", tisch: "At a table", egal: "Any seat" },
    arrived: "Arrived",
    cancel: "Cancel",
    arrivedDone: "✓ Arrived",
    undo: "Cancelled – undo",
    empty: "No reservations yet.",
    footnote:
      "Draft: sample reservations plus the ones you made on the website in this browser. In the real system every online reservation would arrive here live – on your phone too.",
    reset: "Reset demo",
  },
};

export const boContent: Record<BoLocale, Bo> = { de, en };

/** Start times every 30 minutes, from opening until the last full 90-minute round before closing. */
export function seatingsFor(day: Date): string[] {
  const weekday = day.getDay();
  const [open, close] = weekday === 0 ? [15.5, 21] : weekday === 6 ? [16.5, 22] : [17, 22];
  const times: string[] = [];
  for (let t = open; t + 1.5 <= close; t += 0.5) {
    times.push(`${String(Math.floor(t)).padStart(2, "0")}:${t % 1 ? "30" : "00"}`);
  }
  return times;
}
