/*
 * Content for the Ferrum Verkstad concept demo.
 * Ferrum is a fictional company: contact details are deliberately placeholder values
 * and reviews are labelled as examples on the page.
 */

export const ferrum = {
  name: "Ferrum Verkstad",
  basePath: "/demo/ferrum",
  phone: { label: "070-000 00 00", href: "tel:+46700000000" },
  email: "kontakt@ferrum.example",
  address: ["Exempelgatan 12", "123 45 Exempelstad"],

  nav: [
    { label: "Tjänster", href: "#tjanster" },
    { label: "Priser", href: "#priser" },
    { label: "Om oss", href: "#varfor" },
    { label: "Kontakt", href: "#kontakt" },
  ],

  hero: {
    eyebrow: "Bilverkstad i Exempelstad · Alla bilmärken",
    headline: "Service du kan lita på",
    lead: "Fasta priser, tydliga besked och mekaniker som tar hand om din bil som om den vore deras egen.",
    primaryCta: "Boka tid",
    secondaryCta: "Se priser",
    trust: ["Fast pris innan vi börjar", "12 månaders garanti", "Lånebil vid större jobb"],
    nextSlot: { label: "Nästa lediga tid", value: "Imorgon kl. 08.00" },
    quick: ["Service", "Däckbyte", "Felsökning"],
  },

  services: {
    eyebrow: "Tjänster",
    title: "Det vi gör",
    items: [
      { title: "Service", description: "Komplett service enligt tillverkarens schema. Servicehistoriken behålls.", from: 2495, duration: "ca 2 h" },
      { title: "Däck", description: "Skifte, balansering och förvaring. Vi hjälper dig välja rätt däck.", from: 499, duration: "ca 30 min" },
      { title: "Diagnos", description: "Felsökning med modern utrustning – du får ett tydligt besked om vad som behövs.", from: 695, duration: "ca 1 h" },
      { title: "Bromsar", description: "Kontroll och byte av klossar, skivor och bromsvätska.", from: 1495, duration: "ca 1,5 h" },
      { title: "AC-service", description: "Kontroll, rengöring och påfyllning av klimatanläggningen.", from: 995, duration: "ca 1 h" },
      { title: "Inför besiktning", description: "Vi går igenom bilen och åtgärdar det som kan ge anmärkning.", from: 595, duration: "ca 45 min" },
    ],
  },

  prices: {
    eyebrow: "Prisguide",
    title: "Fasta priser. Inga överraskningar.",
    lead: "Vanliga jobb till fast pris. Exakt pris för din bil ser du direkt när du bokar.",
    note: "Exempelpriser inklusive moms för personbil i konceptdemo.",
    items: [
      { job: "Oljebyte inkl. filter", price: 895 },
      { job: "Däckskifte, 4 hjul", price: 499 },
      { job: "Felsökning, första timmen", price: 695 },
      { job: "Byte av bromsklossar fram", price: 1495 },
      { job: "AC-service", price: 995 },
      { job: "Kontroll inför besiktning", price: 595 },
    ],
  },

  reasons: {
    eyebrow: "Därför Ferrum",
    title: "Verkstad utan krångel",
    items: [
      { value: "Fast pris", label: "Du får besked om pris innan vi börjar – och det är det du betalar." },
      { value: "12 mån", label: "Garanti på allt utfört arbete och alla reservdelar vi monterar." },
      { value: "Lånebil", label: "Kostnadsfri lånebil när jobbet tar mer än en dag." },
      { value: "Alla märken", label: "Utbildade mekaniker och originaldelar eller motsvarande kvalitet." },
    ],
  },

  reviews: {
    eyebrow: "Omdömen",
    title: "Vad kunderna säger",
    badge: "Exempelomdöme",
    note: "Omdömena är exempel i en konceptdemo och kommer inte från verkliga kunder.",
    items: [
      { quote: "Fick ett fast pris direkt och bilen var klar samma dag. Precis så här ska det fungera.", name: "Anna L.", car: "Volvo V60" },
      { quote: "Tydliga besked om vad som behövde göras – och vad som kunde vänta. Känns ärligt.", name: "Jonas K.", car: "Volkswagen Golf" },
      { quote: "Smidig bokning på nätet och trevligt bemötande. Kommer tillbaka till vintern.", name: "Sara M.", car: "Toyota RAV4" },
    ],
  },

  booking: {
    title: "Boka tid på under en minut",
    lead: "Välj tjänst och tid online – eller ring oss så hjälper vi dig.",
    cta: "Boka online",
    call: "Ring oss",
  },

  contact: {
    eyebrow: "Hitta hit",
    title: "Kontakt och öppettider",
    hoursLabel: "Öppettider",
    hours: [
      { days: "Måndag–fredag", time: "07.00–17.00" },
      { days: "Lördag", time: "09.00–13.00" },
      { days: "Söndag", time: "Stängt" },
    ],
    addressLabel: "Adress",
    reachLabel: "Kontakt",
    mapLabel: "Karta (exempel)",
  },

  footer: {
    tagline: "Bilverkstad med fasta priser och tydliga besked.",
    legal: "Ferrum Verkstad är ett fiktivt företag.",
  },

  demo: {
    label: "Konceptdemo av Aven Studio",
    body: "Ferrum Verkstad är ett fiktivt företag.",
    back: "Tillbaka till Aven Studio",
    backHref: "/sv/work#automotive",
  },
};
