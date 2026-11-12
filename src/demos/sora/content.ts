import type { Locale } from "@/i18n/config";
import { backToWork, demoPaths } from "@/demos/shared/routing";
import type { SoraImageKey } from "./images";

/*
 * Content for the Salong Sora concept demo, in Swedish and English.
 * Sora is a fictional salon: stylists, contact details and reviews are illustrative only.
 * The salon is Swedish in both languages, so prices stay in SEK and the address stays Swedish.
 */

export type SoraTreatment = { id: string; name: string; price: number; from?: boolean; minutes: number; text?: string };

const svPaths = demoPaths("sora", "sv");
const enPaths = demoPaths("sora", "en");

const sv = {
  locale: "sv" as Locale,
  paths: svPaths,
  name: "Salong Sora",
  phone: { label: "070-000 00 00", href: "tel:+46700000000" },
  email: "hej@sora.example",
  address: ["Exempelgatan 8", "123 45 Exempelstad"],
  demoNotice: "Det här är en konceptdemo – inga tider bokas och inga uppgifter skickas.",

  nav: [
    { label: "Behandlingar", href: svPaths.treatments },
    { label: "Salongen", href: svPaths.salon },
    { label: "Inspiration", href: svPaths.inspiration },
  ],
  bookCta: "Boka tid",

  hero: {
    eyebrow: "Frisörsalong i Exempelstad",
    title: "Tid för dig.",
    lead: "Ett lugnt rum för klippning, färg och styling – med frisörer som tar sig tid att lyssna innan saxen kommer fram.",
    secondaryCta: "Se behandlingar",
  },

  intro: {
    eyebrow: "Välkommen till Sora",
    title: "Hår som känns som du – bara lite bättre.",
    body: "Vi tror att ett besök hos frisören ska vara en paus i vardagen. Därför har vi färre stolar, längre bokningar och en konsultation i början av varje behandling. Du får råd du kan använda hemma och ett resultat som håller mellan besöken.",
  },

  highlights: [
    { title: "Konsultation ingår", text: "Varje behandling börjar med ett samtal om ditt hår, din vardag och vad du vill uppnå." },
    { title: "Skonsamma produkter", text: "Vi arbetar med vegansk hårvård och ammoniakfria färger där det är möjligt." },
    { title: "Lugn miljö", text: "Fyra platser, dämpad musik och kaffe eller te medan du väntar." },
  ],

  treatments: {
    eyebrow: "Behandlingar",
    title: "Behandlingar och priser",
    lead: "Alla priser inkluderar konsultation, tvätt och styling. Pris för färgbehandlingar varierar med hårets längd och tjocklek – du får alltid besked innan vi börjar.",
    fromLabel: "från",
    minutesLabel: "min",
    categories: [
      {
        id: "klippning",
        title: "Klippning",
        image: "cut" as SoraImageKey,
        items: [
          { id: "klipp-kort", name: "Klippning, kort hår", price: 650, minutes: 45 },
          { id: "klipp-lang", name: "Klippning, långt hår", price: 795, minutes: 60 },
          { id: "klipp-herr", name: "Herrklippning", price: 495, minutes: 30 },
          { id: "klipp-barn", name: "Barnklippning (upp till 12 år)", price: 350, minutes: 30 },
          { id: "lugg", name: "Luggklippning", price: 195, minutes: 15 },
        ],
      },
      {
        id: "farg",
        title: "Färg",
        image: "colour" as SoraImageKey,
        items: [
          { id: "farg-utvaxt", name: "Färg, utväxt", price: 1095, minutes: 90 },
          { id: "helfarg", name: "Helfärg", price: 1395, from: true, minutes: 120 },
          { id: "slingor", name: "Slingor med folie", price: 1595, from: true, minutes: 150 },
          { id: "balayage", name: "Balayage", price: 2295, from: true, minutes: 180, text: "Handmålade, mjuka övergångar för ett naturligt resultat." },
          { id: "toning", name: "Toning och glans", price: 595, minutes: 45 },
        ],
      },
      {
        id: "styling",
        title: "Styling och vård",
        image: "brush" as SoraImageKey,
        items: [
          { id: "fon", name: "Tvätt och föning", price: 450, minutes: 40 },
          { id: "lockar", name: "Lockar och vågor", price: 550, minutes: 45 },
          { id: "uppsattning", name: "Uppsättning", price: 850, from: true, minutes: 60 },
          { id: "inpackning", name: "Inpackning och hårbottenvård", price: 395, minutes: 30 },
        ],
      },
    ] as Array<{ id: string; title: string; image: SoraImageKey; items: SoraTreatment[] }>,
  },

  stylists: {
    eyebrow: "Frisörerna",
    title: "Möt oss på Sora",
    noPreference: { id: "any", name: "Ingen preferens", role: "Första lediga frisör" },
    items: [
      { id: "sofia", name: "Sofia Lind", role: "Grundare och frisör", focus: "Färg och balayage" },
      { id: "elin", name: "Elin Berg", role: "Frisör", focus: "Klippning och lockigt hår" },
      { id: "noah", name: "Noah Ek", role: "Frisör", focus: "Herrklippning och korta frisyrer" },
    ],
  },

  salon: {
    eyebrow: "Salongen",
    title: "Ett ljust rum mitt i stan",
    lead: "Sora startades med en enkel idé: en salong där ingen behöver stressa – varken du eller vi.",
    body: [
      "Salongen ligger i ett ljust gatuplan med höga fönster och mjuka material. Här finns fyra frisörplatser, en tvättavdelning med massagestolar och en liten butik med produkterna vi själva använder.",
      "Vi bokar generöst med tid så att varje besök får ta den tid det behöver. Ofta blir det en stund att se fram emot – inte bara en punkt på att-göra-listan.",
    ],
  },

  gallery: {
    eyebrow: "Inspiration",
    title: "Från salongen",
    lead: "Ett urval av stämningar och arbeten. Ta gärna med en bild som inspiration till ditt besök.",
    items: ["interior", "curls", "products", "colour", "stations", "cut", "brush", "stylists"] as SoraImageKey[],
  },

  reviews: {
    eyebrow: "Omdömen",
    badge: "Exempelomdöme",
    note: "Omdömena är exempel i en konceptdemo och kommer inte från verkliga kunder.",
    items: [
      { text: "Första gången på länge som någon verkligen lyssnade. Färgen blev exakt som jag hoppats.", name: "Linnea" },
      { text: "En lugn och fin miljö. Det kändes mer som spa än frisör.", name: "Karin" },
      { text: "Snabb bokning online och en klippning som håller formen i veckor.", name: "Oscar" },
    ],
  },

  visit: {
    eyebrow: "Besök oss",
    title: "Öppettider och hitta hit",
    hours: [
      { days: "Tisdag–fredag", time: "10–19" },
      { days: "Lördag", time: "10–16" },
      { days: "Söndag–måndag", time: "Stängt" },
    ],
  },

  booking: {
    eyebrow: "Boka tid",
    title: "Boka din tid",
    lead: "Välj behandling, frisör och tid. Det tar mindre än en minut.",
    steps: ["Behandling", "Frisör", "Tid", "Uppgifter"],
    stepLabel: "Steg",
    headings: ["Vad vill du göra?", "Vem vill du träffa?", "Välj dag och tid", "Dina uppgifter"],
    summary: "Din bokning",
    next: "Fortsätt",
    back: "Tillbaka",
    confirm: "Bekräfta bokning",
    day: "Dag",
    time: "Tid",
    taken: "Bokad",
    fields: { name: "Namn", phone: "Telefon", email: "E-post", message: "Önskemål eller inspiration", optional: "valfritt" },
    errors: {
      treatment: "Välj en behandling för att fortsätta.",
      stylist: "Välj en frisör eller ”Ingen preferens”.",
      slot: "Välj en dag och en tid.",
      required: "Fyll i det här fältet.",
      phone: "Ange ett giltigt telefonnummer.",
      email: "Ange en giltig e-postadress.",
    },
    success: {
      title: "Välkommen till Sora.",
      body: "I en riktig bokning skulle du nu få en bekräftelse via sms, och en påminnelse dagen innan.",
      again: "Gör en ny bokning",
    },
  },

  footer: {
    tagline: "Frisörsalong för klippning, färg och styling.",
    legal: "Salong Sora är ett fiktivt företag.",
  },

  notFound: { title: "Sidan finns inte", body: "Sidan du letar efter finns inte i den här demon.", back: "Till startsidan" },

  demo: {
    label: "Konceptdemo av Aven Studio",
    body: "Salong Sora är ett fiktivt företag. Foton från Unsplash.",
    back: "Tillbaka till Aven Studio",
    backHref: backToWork("sora", "sv"),
  },

  imageAlt: {
    hero: "Kvinna vid salongens receptionsdisk i varma, ljusa toner",
    interior: "Ljus salong med välvd öppning och hyllor med hårprodukter",
    stations: "Frisörplatser med speglar och stolar i beige",
    products: "Pumpflaskor med schampo och balsam mot en vägg av träribbor",
    curls: "Frisör som formar lockar med locktång",
    stylists: "Två frisörer som arbetar med en kunds hår",
    cut: "Frisör som klipper vått hår med sax",
    colour: "Frisör som färgar hår med folieslingor",
    brush: "Rundborste som formar långt blont hår",
  } as Record<SoraImageKey, string>,

  meta: {
    title: "Konceptdemo av Aven Studio",
    description: "Konceptdemo av en webbplats för en frisörsalong, skapad av Aven Studio. Företaget är fiktivt.",
    pages: { treatments: "Behandlingar", salon: "Salongen", inspiration: "Inspiration", booking: "Boka tid" },
  },

  ui: {
    mainNav: "Huvudmeny",
    menu: "Meny",
    close: "Stäng",
    home: "startsida",
    language: "Språk",
    openDays: "Tisdag–fredag",
    seeTimes: "Se lediga tider",
    whatWeDo: "Det vi gör",
    fullPriceList: "Hela prislistan",
    aboutSalon: "Om salongen",
    stars: "5 av 5 stjärnor",
    categories: "Kategorier",
    treatment: "Behandling",
    time: "Tid",
    price: "Pris",
    book: "Boka",
    salonQuote: "Vi bokar generöst med tid, så att ingen behöver stressa – varken du eller vi.",
    howWeWorkEyebrow: "Så arbetar vi",
    howWeWorkTitle: "Små detaljer, stor skillnad",
    hours: "Öppettider",
    findUs: "Hitta hit",
    contact: "Kontakt",
    bookOnline: "Boka tid online",
    bookBandTitle: "Unna dig en stund för dig själv.",
    confirmation: "Bokningsbekräftelse",
    at: "kl.",
    with: "hos",
  },
};

export type Sora = typeof sv;

const en: Sora = {
  locale: "en",
  paths: enPaths,
  name: "Salong Sora",
  phone: { label: "070-000 00 00", href: "tel:+46700000000" },
  email: "hej@sora.example",
  address: ["Exempelgatan 8", "123 45 Exempelstad"],
  demoNotice: "This is a concept demo – no appointments are booked and no details are sent.",

  nav: [
    { label: "Treatments", href: enPaths.treatments },
    { label: "The salon", href: enPaths.salon },
    { label: "Inspiration", href: enPaths.inspiration },
  ],
  bookCta: "Book now",

  hero: {
    eyebrow: "Hair salon in Exempelstad",
    title: "Time for you.",
    lead: "A calm space for cuts, colour and styling – with stylists who take the time to listen before the scissors come out.",
    secondaryCta: "See treatments",
  },

  intro: {
    eyebrow: "Welcome to Sora",
    title: "Hair that feels like you – just a little better.",
    body: "We believe a visit to the hairdresser should be a pause from everyday life. That's why we have fewer chairs, longer appointments and a consultation at the start of every treatment. You get advice you can use at home and a result that lasts between visits.",
  },

  highlights: [
    { title: "Consultation included", text: "Every treatment starts with a conversation about your hair, your routine and what you want to achieve." },
    { title: "Gentle products", text: "We use vegan hair care and ammonia-free colours wherever possible." },
    { title: "A calm setting", text: "Four chairs, soft music and coffee or tea while you wait." },
  ],

  treatments: {
    eyebrow: "Treatments",
    title: "Treatments and prices",
    lead: "All prices include consultation, wash and styling. Prices for colour vary with the length and thickness of your hair – you always get the price before we start.",
    fromLabel: "from",
    minutesLabel: "min",
    categories: [
      {
        id: "klippning",
        title: "Cuts",
        image: "cut",
        items: [
          { id: "klipp-kort", name: "Cut, short hair", price: 650, minutes: 45 },
          { id: "klipp-lang", name: "Cut, long hair", price: 795, minutes: 60 },
          { id: "klipp-herr", name: "Men's cut", price: 495, minutes: 30 },
          { id: "klipp-barn", name: "Children's cut (up to 12)", price: 350, minutes: 30 },
          { id: "lugg", name: "Fringe trim", price: 195, minutes: 15 },
        ],
      },
      {
        id: "farg",
        title: "Colour",
        image: "colour",
        items: [
          { id: "farg-utvaxt", name: "Root colour", price: 1095, minutes: 90 },
          { id: "helfarg", name: "Full colour", price: 1395, from: true, minutes: 120 },
          { id: "slingor", name: "Foil highlights", price: 1595, from: true, minutes: 150 },
          { id: "balayage", name: "Balayage", price: 2295, from: true, minutes: 180, text: "Hand-painted, soft transitions for a natural result." },
          { id: "toning", name: "Toning and gloss", price: 595, minutes: 45 },
        ],
      },
      {
        id: "styling",
        title: "Styling and care",
        image: "brush",
        items: [
          { id: "fon", name: "Wash and blow-dry", price: 450, minutes: 40 },
          { id: "lockar", name: "Curls and waves", price: 550, minutes: 45 },
          { id: "uppsattning", name: "Updo", price: 850, from: true, minutes: 60 },
          { id: "inpackning", name: "Hair mask and scalp treatment", price: 395, minutes: 30 },
        ],
      },
    ],
  },

  stylists: {
    eyebrow: "The stylists",
    title: "Meet us at Sora",
    noPreference: { id: "any", name: "No preference", role: "First available stylist" },
    items: [
      { id: "sofia", name: "Sofia Lind", role: "Founder and stylist", focus: "Colour and balayage" },
      { id: "elin", name: "Elin Berg", role: "Stylist", focus: "Cuts and curly hair" },
      { id: "noah", name: "Noah Ek", role: "Stylist", focus: "Men's cuts and short styles" },
    ],
  },

  salon: {
    eyebrow: "The salon",
    title: "A bright space in the heart of town",
    lead: "Sora started with a simple idea: a salon where nobody needs to rush – not you, and not us.",
    body: [
      "The salon is on a bright ground floor with tall windows and soft materials. There are four styling chairs, a wash area with massage chairs and a small shop with the products we use ourselves.",
      "We book generous time so every visit can take the time it needs. It often becomes something to look forward to – not just another item on the to-do list.",
    ],
  },

  gallery: {
    eyebrow: "Inspiration",
    title: "From the salon",
    lead: "A selection of moods and work. Feel free to bring a picture as inspiration for your visit.",
    items: ["interior", "curls", "products", "colour", "stations", "cut", "brush", "stylists"],
  },

  reviews: {
    eyebrow: "Reviews",
    badge: "Example review",
    note: "These reviews are examples in a concept demo and do not come from real customers.",
    items: [
      { text: "The first time in ages that someone really listened. The colour came out exactly as I'd hoped.", name: "Linnea" },
      { text: "A calm, lovely setting. It felt more like a spa than a salon.", name: "Karin" },
      { text: "Quick online booking and a cut that keeps its shape for weeks.", name: "Oscar" },
    ],
  },

  visit: {
    eyebrow: "Visit us",
    title: "Opening hours and how to find us",
    hours: [
      { days: "Tuesday–Friday", time: "10–19" },
      { days: "Saturday", time: "10–16" },
      { days: "Sunday–Monday", time: "Closed" },
    ],
  },

  booking: {
    eyebrow: "Book now",
    title: "Book your appointment",
    lead: "Choose a treatment, stylist and time. It takes less than a minute.",
    steps: ["Treatment", "Stylist", "Time", "Details"],
    stepLabel: "Step",
    headings: ["What would you like?", "Who would you like to see?", "Choose a day and time", "Your details"],
    summary: "Your booking",
    next: "Continue",
    back: "Back",
    confirm: "Confirm booking",
    day: "Day",
    time: "Time",
    taken: "Booked",
    fields: { name: "Name", phone: "Phone", email: "Email", message: "Wishes or inspiration", optional: "optional" },
    errors: {
      treatment: "Choose a treatment to continue.",
      stylist: "Choose a stylist or “No preference”.",
      slot: "Choose a day and a time.",
      required: "Please fill in this field.",
      phone: "Enter a valid phone number.",
      email: "Enter a valid email address.",
    },
    success: {
      title: "Welcome to Sora.",
      body: "In a real booking you would now get a confirmation by text, and a reminder the day before.",
      again: "Make another booking",
    },
  },

  footer: {
    tagline: "Hair salon for cuts, colour and styling.",
    legal: "Salong Sora is a fictional company.",
  },

  notFound: { title: "Page not found", body: "The page you're looking for doesn't exist in this demo.", back: "Back to the homepage" },

  demo: {
    label: "Concept demo by Aven Studio",
    body: "Salong Sora is a fictional company. Photos from Unsplash.",
    back: "Back to Aven Studio",
    backHref: backToWork("sora", "en"),
  },

  imageAlt: {
    hero: "Woman at the salon's reception desk in warm, light tones",
    interior: "Bright salon with an arched opening and shelves of hair products",
    stations: "Styling stations with mirrors and beige chairs",
    products: "Pump bottles of shampoo and conditioner against a wall of wooden slats",
    curls: "Stylist shaping curls with a curling iron",
    stylists: "Two stylists working on a client's hair",
    cut: "Stylist cutting wet hair with scissors",
    colour: "Stylist colouring hair with foil highlights",
    brush: "Round brush styling long blonde hair",
  },

  meta: {
    title: "Concept demo by Aven Studio",
    description: "Concept demo of a website for a hair salon, made by Aven Studio. The company is fictional.",
    pages: { treatments: "Treatments", salon: "The salon", inspiration: "Inspiration", booking: "Book now" },
  },

  ui: {
    mainNav: "Main menu",
    menu: "Menu",
    close: "Close",
    home: "home",
    language: "Language",
    openDays: "Tuesday–Friday",
    seeTimes: "See available times",
    whatWeDo: "What we do",
    fullPriceList: "Full price list",
    aboutSalon: "About the salon",
    stars: "5 out of 5 stars",
    categories: "Categories",
    treatment: "Treatment",
    time: "Time",
    price: "Price",
    book: "Book",
    salonQuote: "We book generous time, so nobody needs to rush – not you, and not us.",
    howWeWorkEyebrow: "How we work",
    howWeWorkTitle: "Small details, big difference",
    hours: "Opening hours",
    findUs: "Find us",
    contact: "Contact",
    bookOnline: "Book online",
    bookBandTitle: "Treat yourself to a moment of your own.",
    confirmation: "Booking confirmation",
    at: "at",
    with: "with",
  },
};

export const soraContent: Record<Locale, Sora> = { sv, en };

/** Every treatment across categories, for the booking flow. */
export const allTreatments = (s: Sora) => s.treatments.categories.flatMap((category) => category.items);
