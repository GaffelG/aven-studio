/*
 * Content for the Ferrum Verkstad concept demo, in Swedish and English.
 * Ferrum is a fictional company: contact details are deliberately placeholder values
 * and reviews are labelled as examples on the page. The business is Swedish in both
 * languages, so prices stay in SEK and the address stays Swedish.
 */

import type { Locale } from "@/i18n/config";
import { backToWork, demoPaths } from "@/demos/shared/routing";

export type FerrumServiceId = "service" | "dack" | "diagnos" | "bromsar" | "ac" | "besiktning";

const svPaths = demoPaths("ferrum", "sv");
const enPaths = demoPaths("ferrum", "en");

const sv = {
  locale: "sv" as Locale,
  paths: svPaths,
  name: "Ferrum Verkstad",
  phone: { label: "070-000 00 00", href: "tel:+46700000000" },
  email: "kontakt@ferrum.example",
  address: ["Exempelgatan 12", "123 45 Exempelstad"],
  demoNotice: "Det här är en konceptdemo – inga tider bokas och inga uppgifter skickas.",

  nav: [
    { label: "Tjänster", href: svPaths.services },
    { label: "Priser", href: svPaths.prices },
    { label: "Om oss", href: svPaths.about },
    { label: "Kontakt", href: svPaths.contact },
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
    backHref: backToWork("ferrum", "sv"),
  },

  meta: {
    title: "Konceptdemo av Aven Studio",
    description: "Konceptdemo av en webbplats för en bilverkstad, skapad av Aven Studio. Företaget är fiktivt.",
    pages: { services: "Tjänster", prices: "Priser", about: "Om oss", contact: "Kontakt", booking: "Boka tid" },
  },

  ui: {
    mainNav: "Huvudmeny",
    menu: "Meny",
    close: "Stäng",
    home: "startsida",
    language: "Språk",
    job: "Jobb",
    price: "Pris",
    servicesOnPage: "Tjänster på sidan",
    from: "från",
    book: "Boka",
    at: "kl.",
    day: "Dag",
    time: "Tid",
    stars: "5 av 5 stjärnor",
  },
};

export type Ferrum = typeof sv;
export type FerrumService = Ferrum["services"]["items"][number];

const en: Ferrum = {
  locale: "en",
  paths: enPaths,
  name: "Ferrum Verkstad",
  phone: { label: "070-000 00 00", href: "tel:+46700000000" },
  email: "kontakt@ferrum.example",
  address: ["Exempelgatan 12", "123 45 Exempelstad"],
  demoNotice: "This is a concept demo – no appointments are booked and no details are sent.",

  nav: [
    { label: "Services", href: enPaths.services },
    { label: "Prices", href: enPaths.prices },
    { label: "About", href: enPaths.about },
    { label: "Contact", href: enPaths.contact },
  ],

  hero: {
    eyebrow: "Car workshop in Exempelstad · All makes",
    headline: "Service you can trust",
    lead: "Fixed prices, clear answers and mechanics who look after your car as if it were their own.",
    primaryCta: "Book now",
    secondaryCta: "See prices",
    trust: ["Fixed price before we start", "12-month warranty", "Courtesy car for bigger jobs"],
    nextSlot: { label: "Next available slot", value: "Tomorrow 08:00" },
    quick: ["Service", "Tyre change", "Diagnostics"],
  },

  services: {
    eyebrow: "Services",
    title: "What we do",
    lead: "From routine servicing to diagnosing modern systems. You always get the price and time before we start.",
    includesLabel: "Included",
    items: [
      {
        id: "service",
        title: "Service",
        description: "Full service to the manufacturer's schedule. Your service history is kept intact.",
        details:
          "We follow the manufacturer's service programme and stamp the digital service book, so your new-car warranty stays valid even if you don't use a dealer workshop.",
        includes: ["Oil and filter change", "Check of fluids, belts and lights", "Fault code reading", "Digital service book"],
        from: 2495,
        duration: "approx. 2 h",
      },
      {
        id: "dack",
        title: "Tyres",
        description: "Changing, balancing and storage. We help you choose the right tyres.",
        details: "Book a seasonal change or let us store your wheels – washed, checked and ready for next time.",
        includes: ["Wheel change and torquing", "Balancing", "Tread depth check", "Tyre hotel"],
        from: 499,
        duration: "approx. 30 min",
      },
      {
        id: "diagnos",
        title: "Diagnostics",
        description: "Fault-finding with modern equipment – you get a clear answer on what's needed.",
        details: "A warning light on, or a noise you don't recognise? We find the cause and explain what's urgent and what can wait.",
        includes: ["Fault code reading", "Test drive", "Written report", "Quote before any work"],
        from: 695,
        duration: "approx. 1 h",
      },
      {
        id: "bromsar",
        title: "Brakes",
        description: "Inspection and replacement of pads, discs and brake fluid.",
        details: "Brakes are your car's most important safety system. We check wear and replace parts with original-quality components.",
        includes: ["Pad and disc inspection", "Replacement of worn parts", "Brake fluid change", "Test drive"],
        from: 1495,
        duration: "approx. 1.5 h",
      },
      {
        id: "ac",
        title: "AC service",
        description: "Inspection, cleaning and recharging of the air conditioning.",
        details: "A well-maintained AC cools better, smells fresher and keeps the windows clear of mist all year round.",
        includes: ["Leak check", "Refrigerant recharge", "Cabin filter change", "System cleaning"],
        from: 995,
        duration: "approx. 1 h",
      },
      {
        id: "besiktning",
        title: "Pre-MOT check",
        description: "We go over the car and fix anything that could fail the inspection.",
        details: "Avoid a re-inspection. We check the same points as the official inspection and fix what's needed – once you approve.",
        includes: ["Check against inspection points", "Lights and wipers", "Brakes and steering", "Repair suggestions"],
        from: 595,
        duration: "approx. 45 min",
      },
    ],
  },

  prices: {
    eyebrow: "Price guide",
    title: "Fixed prices. No surprises.",
    lead: "Common jobs at a fixed price. You see the exact price for your car as soon as you book.",
    note: "Example prices including VAT for a passenger car in a concept demo.",
    allPrices: "See all prices",
    items: [
      { job: "Oil change incl. filter", price: 895 },
      { job: "Tyre change, 4 wheels", price: 499 },
      { job: "Diagnostics, first hour", price: 695 },
      { job: "Front brake pad replacement", price: 1495 },
      { job: "AC service", price: 995 },
      { job: "Pre-MOT check", price: 595 },
    ],
    page: {
      title: "Prices",
      lead: "All prices are fixed and include labour, parts and VAT for a standard passenger car. If your car needs more than you booked, we'll tell you before doing anything.",
      promiseTitle: "Our price promise",
      promise: [
        "You get the price before we start – no surprises on the invoice.",
        "Extra work is only done with your approval.",
        "12-month warranty on labour and parts.",
      ],
      categories: [
        {
          title: "Service and maintenance",
          rows: [
            { job: "Oil change incl. filter", price: 895 },
            { job: "Minor service", price: 2495 },
            { job: "Major service", price: 4495 },
            { job: "Wiper blade replacement", price: 295 },
          ],
        },
        {
          title: "Tyres and wheels",
          rows: [
            { job: "Tyre change, 4 wheels", price: 499 },
            { job: "Balancing, 4 wheels", price: 595 },
            { job: "Tyre hotel per season", price: 795 },
          ],
        },
        {
          title: "Brakes",
          rows: [
            { job: "Front brake pad replacement", price: 1495 },
            { job: "Front discs and pads", price: 3295 },
            { job: "Brake fluid change", price: 795 },
          ],
        },
        {
          title: "Diagnostics, climate and inspection",
          rows: [
            { job: "Diagnostics, first hour", price: 695 },
            { job: "AC service", price: 995 },
            { job: "Pre-MOT check", price: 595 },
          ],
        },
      ],
    },
  },

  reasons: {
    eyebrow: "Why Ferrum",
    title: "A workshop without the hassle",
    items: [
      { value: "Fixed price", label: "You get the price before we start – and that's what you pay." },
      { value: "12 months", label: "Warranty on all work carried out and every part we fit." },
      { value: "Courtesy car", label: "A free courtesy car when the job takes more than a day." },
      { value: "All makes", label: "Trained mechanics and original or equivalent-quality parts." },
    ],
  },

  about: {
    eyebrow: "About us",
    title: "A workshop built on trust",
    lead: "We believe a good workshop shows in how it communicates. That's why you always know what needs doing, what it costs and why – before we start.",
    paragraphs: [
      "Ferrum is an independent workshop for all makes. We use modern diagnostic equipment and original-quality parts, and we stamp the digital service book so your warranty stays valid.",
      "How we treat people matters as much as the technology. We explain things in a way that makes sense, give honest advice about what can wait, and stand behind our work with a twelve-month warranty.",
    ],
    visitEyebrow: "Your visit",
    visitTitle: "How a visit works",
    visit: [
      { title: "Book", description: "Choose a service and time online, or give us a call." },
      { title: "Drop off", description: "Leave the key at reception or in the key drop box." },
      { title: "Get updates", description: "If we find anything else, we contact you before doing it." },
      { title: "Collect", description: "Pay easily and get a summary of the work carried out." },
    ],
  },

  reviews: {
    eyebrow: "Reviews",
    title: "What customers say",
    badge: "Example review",
    note: "These reviews are examples in a concept demo and do not come from real customers.",
    items: [
      { quote: "Got a fixed price straight away and the car was ready the same day. Exactly how it should work.", name: "Anna L.", car: "Volvo V60" },
      { quote: "Clear about what needed doing – and what could wait. Feels honest.", name: "Jonas K.", car: "Volkswagen Golf" },
      { quote: "Easy online booking and friendly service. I'll be back before winter.", name: "Sara M.", car: "Toyota RAV4" },
    ],
  },

  booking: {
    title: "Book in under a minute",
    lead: "Choose a service and time online – or call us and we'll help.",
    cta: "Book online",
    call: "Call us",
    page: {
      eyebrow: "Book now",
      title: "Book your appointment",
      lead: "Four quick steps. You get a confirmation straight away.",
    },
    steps: ["Service", "Time", "Details", "Confirm"],
    stepLabel: "Step",
    chooseService: "What does the car need?",
    chooseTime: "Choose a day and time",
    noSlots: "No free slots on this day.",
    taken: "Booked",
    yourDetails: "Your details",
    review: "Check and confirm",
    summary: "Summary",
    from: "from",
    next: "Continue",
    back: "Back",
    confirm: "Confirm booking",
    edit: "Change",
    fields: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      plate: "Registration number",
      platePlaceholder: "ABC 123",
      message: "Anything we should know?",
      optional: "optional",
    },
    errors: {
      service: "Choose a service to continue.",
      slot: "Choose a day and a time.",
      required: "Please fill in this field.",
      phone: "Enter a valid phone number.",
      email: "Enter a valid email address.",
      plate: "Enter a registration number, e.g. ABC 123.",
    },
    success: {
      title: "Done! Your appointment is booked.",
      body: "In a real booking you would now get a confirmation by text and email.",
      again: "Make another booking",
    },
  },

  contact: {
    eyebrow: "Find us",
    title: "Contact and opening hours",
    hoursLabel: "Opening hours",
    hours: [
      { days: "Monday–Friday", time: "07:00–17:00" },
      { days: "Saturday", time: "09:00–13:00" },
      { days: "Sunday", time: "Closed" },
    ],
    addressLabel: "Address",
    reachLabel: "Contact",
    mapLabel: "Map (example)",
    page: {
      title: "Contact",
      lead: "Call, email or send us a question here. Booking online is the quickest way to get an appointment.",
    },
    form: {
      title: "Send a question",
      name: "Name",
      email: "Email",
      message: "Your question",
      submit: "Send",
      required: "Please fill in this field.",
      email_invalid: "Enter a valid email address.",
      success: "Thanks for your question! In a real version we would reply within one working day.",
    },
  },

  footer: {
    tagline: "Car workshop with fixed prices and clear answers.",
    legal: "Ferrum Verkstad is a fictional company.",
  },

  notFound: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist in this demo.",
    back: "Back to the homepage",
  },

  demo: {
    label: "Concept demo by Aven Studio",
    body: "Ferrum Verkstad is a fictional company.",
    back: "Back to Aven Studio",
    backHref: backToWork("ferrum", "en"),
  },

  meta: {
    title: "Concept demo by Aven Studio",
    description: "Concept demo of a website for a car workshop, made by Aven Studio. The company is fictional.",
    pages: { services: "Services", prices: "Prices", about: "About", contact: "Contact", booking: "Book now" },
  },

  ui: {
    mainNav: "Main menu",
    menu: "Menu",
    close: "Close",
    home: "home",
    language: "Language",
    job: "Job",
    price: "Price",
    servicesOnPage: "Services on this page",
    from: "from",
    book: "Book",
    at: "at",
    day: "Day",
    time: "Time",
    stars: "5 out of 5 stars",
  },
};

export const ferrumContent: Record<Locale, Ferrum> = { sv, en };
