import type { SoraImageKey } from "./images";

/*
 * Content for the Salong Sora concept demo.
 * Sora is a fictional salon: stylists, contact details and reviews are illustrative only.
 */

const basePath = "/demo/sora";
const path = (segment = "") => (segment ? `${basePath}/${segment}` : basePath);

export const soraPaths = {
  home: path(),
  treatments: path("behandlingar"),
  salon: path("salongen"),
  gallery: path("inspiration"),
  booking: path("boka"),
};

export type SoraTreatment = { id: string; name: string; price: number; from?: boolean; minutes: number; text?: string };

export const sora = {
  name: "Salong Sora",
  basePath,
  phone: { label: "070-000 00 00", href: "tel:+46700000000" },
  email: "hej@sora.example",
  address: ["Exempelgatan 8", "123 45 Exempelstad"],
  demoNotice: "Det här är en konceptdemo – inga tider bokas och inga uppgifter skickas.",

  nav: [
    { label: "Behandlingar", href: soraPaths.treatments },
    { label: "Salongen", href: soraPaths.salon },
    { label: "Inspiration", href: soraPaths.gallery },
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
    ] satisfies Array<{ id: string; title: string; image: SoraImageKey; items: SoraTreatment[] }>,
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
    backHref: "/sv/work#salon",
  },
};

export const allTreatments = sora.treatments.categories.flatMap((category) => category.items);
