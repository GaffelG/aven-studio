/*
 * Content for the Ferrum Verkstad concept demo.
 * Ferrum is a fictional company: contact details are deliberately placeholder values
 * and reviews are labelled as examples on the page.
 */

const basePath = "/demo/ferrum";
const path = (segment = "") => (segment ? `${basePath}/${segment}` : basePath);

export const ferrumPaths = {
  home: path(),
  services: path("tjanster"),
  prices: path("priser"),
  about: path("om-oss"),
  contact: path("kontakt"),
  booking: path("boka"),
};

export type FerrumServiceId = "service" | "dack" | "diagnos" | "bromsar" | "ac" | "besiktning";

export const ferrum = {
  name: "Ferrum Verkstad",
  basePath,
  phone: { label: "070-000 00 00", href: "tel:+46700000000" },
  email: "kontakt@ferrum.example",
  address: ["Exempelgatan 12", "123 45 Exempelstad"],
  demoNotice: "Det här är en konceptdemo – inga tider bokas och inga uppgifter skickas.",

  nav: [
    { label: "Tjänster", href: ferrumPaths.services },
    { label: "Priser", href: ferrumPaths.prices },
    { label: "Om oss", href: ferrumPaths.about },
    { label: "Kontakt", href: ferrumPaths.contact },
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
    lead: "Från vanlig service till felsökning av moderna system. Du får alltid besked om pris och tid innan vi börjar.",
    includesLabel: "Det ingår",
    items: [
      {
        id: "service" as FerrumServiceId,
        title: "Service",
        description: "Komplett service enligt tillverkarens schema. Servicehistoriken behålls.",
        details:
          "Vi följer tillverkarens serviceprogram och stämplar den digitala serviceboken, så att nybilsgarantin gäller även när du inte väljer märkesverkstad.",
        includes: ["Byte av olja och filter", "Kontroll av vätskor, remmar och belysning", "Felkodsavläsning", "Digital servicebok"],
        from: 2495,
        duration: "ca 2 h",
      },
      {
        id: "dack" as FerrumServiceId,
        title: "Däck",
        description: "Skifte, balansering och förvaring. Vi hjälper dig välja rätt däck.",
        details: "Boka skifte inför säsongen eller låt oss förvara dina hjul – tvättade, kontrollerade och redo till nästa gång.",
        includes: ["Hjulskifte och åtdragning", "Balansering", "Kontroll av mönsterdjup", "Däckhotell"],
        from: 499,
        duration: "ca 30 min",
      },
      {
        id: "diagnos" as FerrumServiceId,
        title: "Diagnos",
        description: "Felsökning med modern utrustning – du får ett tydligt besked om vad som behövs.",
        details: "Varningslampa som lyser eller ett ljud du inte känner igen? Vi tar reda på orsaken och förklarar vad som är akut och vad som kan vänta.",
        includes: ["Avläsning av felkoder", "Provkörning", "Skriftligt besked", "Prisförslag innan åtgärd"],
        from: 695,
        duration: "ca 1 h",
      },
      {
        id: "bromsar" as FerrumServiceId,
        title: "Bromsar",
        description: "Kontroll och byte av klossar, skivor och bromsvätska.",
        details: "Bromsarna är bilens viktigaste säkerhetssystem. Vi kontrollerar slitage och byter med delar av originalkvalitet.",
        includes: ["Kontroll av klossar och skivor", "Byte av slitdelar", "Byte av bromsvätska", "Provkörning"],
        from: 1495,
        duration: "ca 1,5 h",
      },
      {
        id: "ac" as FerrumServiceId,
        title: "AC-service",
        description: "Kontroll, rengöring och påfyllning av klimatanläggningen.",
        details: "En välskött AC kyler bättre, luktar fräschare och håller rutorna fria från imma året runt.",
        includes: ["Läckagekontroll", "Påfyllning av köldmedium", "Byte av kupéfilter", "Rengöring av system"],
        from: 995,
        duration: "ca 1 h",
      },
      {
        id: "besiktning" as FerrumServiceId,
        title: "Inför besiktning",
        description: "Vi går igenom bilen och åtgärdar det som kan ge anmärkning.",
        details: "Slipp ombesiktning. Vi går igenom samma punkter som besiktningen och åtgärdar det som behövs – efter ditt godkännande.",
        includes: ["Kontroll enligt besiktningens punkter", "Belysning och torkare", "Bromsar och styrning", "Åtgärdsförslag"],
        from: 595,
        duration: "ca 45 min",
      },
    ],
  },

  prices: {
    eyebrow: "Prisguide",
    title: "Fasta priser. Inga överraskningar.",
    lead: "Vanliga jobb till fast pris. Exakt pris för din bil ser du direkt när du bokar.",
    note: "Exempelpriser inklusive moms för personbil i konceptdemo.",
    allPrices: "Se alla priser",
    items: [
      { job: "Oljebyte inkl. filter", price: 895 },
      { job: "Däckskifte, 4 hjul", price: 499 },
      { job: "Felsökning, första timmen", price: 695 },
      { job: "Byte av bromsklossar fram", price: 1495 },
      { job: "AC-service", price: 995 },
      { job: "Kontroll inför besiktning", price: 595 },
    ],
    page: {
      title: "Priser",
      lead: "Alla priser är fasta och inkluderar arbete, material och moms för en vanlig personbil. Behöver bilen mer än det du bokat får du besked innan vi gör något.",
      promiseTitle: "Vårt prislöfte",
      promise: [
        "Du får pris innan vi börjar – inga överraskningar på fakturan.",
        "Tilläggsarbeten görs bara efter ditt godkännande.",
        "12 månaders garanti på arbete och delar.",
      ],
      categories: [
        {
          title: "Service och underhåll",
          rows: [
            { job: "Oljebyte inkl. filter", price: 895 },
            { job: "Liten service", price: 2495 },
            { job: "Stor service", price: 4495 },
            { job: "Byte av torkarblad", price: 295 },
          ],
        },
        {
          title: "Däck och hjul",
          rows: [
            { job: "Däckskifte, 4 hjul", price: 499 },
            { job: "Balansering, 4 hjul", price: 595 },
            { job: "Däckhotell per säsong", price: 795 },
          ],
        },
        {
          title: "Bromsar",
          rows: [
            { job: "Byte av bromsklossar fram", price: 1495 },
            { job: "Byte av skivor och klossar fram", price: 3295 },
            { job: "Byte av bromsvätska", price: 795 },
          ],
        },
        {
          title: "Felsökning, klimat och besiktning",
          rows: [
            { job: "Felsökning, första timmen", price: 695 },
            { job: "AC-service", price: 995 },
            { job: "Kontroll inför besiktning", price: 595 },
          ],
        },
      ],
    },
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

  about: {
    eyebrow: "Om oss",
    title: "En verkstad byggd på förtroende",
    lead: "Vi tror att en bra verkstad känns igen på hur den kommunicerar. Därför får du alltid veta vad som behöver göras, vad det kostar och varför – innan vi börjar.",
    paragraphs: [
      "Ferrum är en fristående verkstad för alla bilmärken. Vi arbetar med modern diagnosutrustning och delar av originalkvalitet, och vi stämplar den digitala serviceboken så att din garanti gäller.",
      "Lika viktigt som tekniken är bemötandet. Vi förklarar på ett sätt som går att förstå, ger ärliga råd om vad som kan vänta och står för vårt arbete med tolv månaders garanti.",
    ],
    visitEyebrow: "Ditt besök",
    visitTitle: "Så går ett besök till",
    visit: [
      { title: "Boka", description: "Välj tjänst och tid online eller ring oss." },
      { title: "Lämna bilen", description: "Lämna nyckeln i receptionen eller i nyckelinkastet." },
      { title: "Få besked", description: "Upptäcker vi något mer hör vi av oss innan vi gör det." },
      { title: "Hämta bilen", description: "Betala smidigt och få en sammanfattning av utfört arbete." },
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
    page: {
      eyebrow: "Boka tid",
      title: "Boka din tid",
      lead: "Fyra snabba steg. Du får en bekräftelse direkt.",
    },
    steps: ["Tjänst", "Tid", "Uppgifter", "Bekräfta"],
    stepLabel: "Steg",
    chooseService: "Vad behöver bilen?",
    chooseTime: "Välj dag och tid",
    noSlots: "Inga lediga tider den här dagen.",
    taken: "Bokad",
    yourDetails: "Dina uppgifter",
    review: "Kontrollera och bekräfta",
    summary: "Sammanfattning",
    from: "från",
    next: "Fortsätt",
    back: "Tillbaka",
    confirm: "Bekräfta bokning",
    edit: "Ändra",
    fields: {
      name: "Namn",
      phone: "Telefon",
      email: "E-post",
      plate: "Registreringsnummer",
      platePlaceholder: "ABC 123",
      message: "Något vi bör veta?",
      optional: "valfritt",
    },
    errors: {
      service: "Välj en tjänst för att fortsätta.",
      slot: "Välj en dag och en tid.",
      required: "Fyll i det här fältet.",
      phone: "Ange ett giltigt telefonnummer.",
      email: "Ange en giltig e-postadress.",
      plate: "Ange ett registreringsnummer, t.ex. ABC 123.",
    },
    success: {
      title: "Klart! Din tid är bokad.",
      body: "I en riktig bokning skulle du nu få en bekräftelse via sms och e-post.",
      again: "Gör en ny bokning",
    },
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
    page: {
      title: "Kontakt",
      lead: "Ring, mejla eller skicka en fråga här. Vill du boka tid går det snabbast online.",
    },
    form: {
      title: "Skicka en fråga",
      name: "Namn",
      email: "E-post",
      message: "Din fråga",
      submit: "Skicka",
      required: "Fyll i det här fältet.",
      email_invalid: "Ange en giltig e-postadress.",
      success: "Tack för din fråga! I en riktig version skulle vi svara inom en arbetsdag.",
    },
  },

  footer: {
    tagline: "Bilverkstad med fasta priser och tydliga besked.",
    legal: "Ferrum Verkstad är ett fiktivt företag.",
  },

  notFound: {
    title: "Sidan finns inte",
    body: "Sidan du letar efter finns inte i den här demon.",
    back: "Till startsidan",
  },

  demo: {
    label: "Konceptdemo av Aven Studio",
    body: "Ferrum Verkstad är ett fiktivt företag.",
    back: "Tillbaka till Aven Studio",
    backHref: "/sv/work#automotive",
  },
};

export type FerrumService = (typeof ferrum.services.items)[number];
