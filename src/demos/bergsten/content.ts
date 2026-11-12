import type { Locale } from "@/i18n/config";
import { backToWork, demoPaths } from "@/demos/shared/routing";
import type { BergstenImageKey } from "./images";

/*
 * Content for the Bergsten Bygg concept demo, in Swedish and English.
 * Bergsten is a fictional company: contact details are placeholder values,
 * and figures, projects and the review are illustrative only. The business is
 * Swedish in both languages, so the address stays Swedish; budget ranges are SEK amounts shown in the visitor's currency.
 */

/** Language-neutral keys; labels live in each locale's `labels`. */
export type ProjectCategory = "nybyggnation" | "renovering" | "tillbyggnad";
export type ProjectStatus = "done" | "ongoing";
export const projectCategories: ProjectCategory[] = ["nybyggnation", "renovering", "tillbyggnad"];

/** Budget band limits in SEK for the quote form: under 0.5 M, 0.5–1.5 M, 1.5–4 M, over 4 M. */
export const budgetLimits = [500_000, 1_500_000, 4_000_000];

export type BergstenProject = {
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  year: string;
  size: string;
  duration: string;
  status: ProjectStatus;
  image: BergstenImageKey;
  summary: string;
  body: string[];
  scope: string[];
  quote?: { text: string; name: string };
};

const svPaths = demoPaths("bergsten", "sv");
const enPaths = demoPaths("bergsten", "en");

const sv = {
  locale: "sv" as Locale,
  paths: svPaths,
  name: "Bergsten Bygg",
  phone: { label: "070-000 00 00", href: "tel:+46700000000" },
  email: "offert@bergsten.example",
  address: ["Exempelvägen 4", "123 45 Exempelstad"],
  orgNumber: "556000-0000 (exempel)",
  demoNotice: "Det här är en konceptdemo – inga förfrågningar skickas och inga uppgifter sparas.",

  nav: [
    { label: "Projekt", href: svPaths.projects },
    { label: "Tjänster", href: svPaths.services },
    { label: "Om oss", href: svPaths.about },
  ],
  quoteCta: "Begär offert",

  hero: {
    eyebrow: "Nybyggnation · Renovering · Tillbyggnad",
    title: "Vi bygger det som håller.",
    lead: "Bergsten Bygg uppför och förnyar hus för privatpersoner, bostadsrättsföreningar och företag. Med fast pris, tydlig tidsplan och ett hantverk vi står för i många år.",
    secondaryCta: "Se våra projekt",
  },

  stats: [
    { value: "20", unit: "år", label: "i branschen" },
    { value: "140", unit: "+", label: "genomförda projekt" },
    { value: "14", unit: "", label: "egna hantverkare" },
    { value: "10", unit: "år", label: "garanti på utfört arbete" },
  ],

  intro: {
    eyebrow: "Bergsten Bygg",
    title: "Ett byggföretag som tar ansvar från ritning till nyckelöverlämning.",
    body: "Vi är en mindre organisation med egna snickare, en fast projektledare per uppdrag och samarbetspartners vi har arbetat med i många år. Det gör oss snabba att fatta beslut och lätta att nå – och det märks i resultatet.",
  },

  services: {
    eyebrow: "Tjänster",
    title: "Hela byggprocessen, under ett tak",
    lead: "Från första skiss till slutbesiktning. Du har en kontaktperson genom hela projektet och vet alltid vad som händer härnäst.",
    items: [
      {
        id: "nybyggnation",
        title: "Nybyggnation",
        text: "Villor, fritidshus och mindre flerbostadshus – från grund till färdigt hus.",
        details: "Vi tar ansvar för hela byggprocessen: markarbeten, grund, stomme, klimatskal och invändig färdigställning. Du får en tidsplan med tydliga etapper och regelbundna avstämningar på plats.",
        includes: ["Bygglovshandlingar i samarbete med arkitekt", "Grund och stomme", "Tak, fasad och fönster", "Invändig färdigställning"],
      },
      {
        id: "renovering",
        title: "Renovering",
        text: "Kök, badrum och hela hus som förnyas med respekt för det som redan finns.",
        details: "Vi renoverar allt från enskilda rum till hela hus. Behöriga för våtrum och vana vid att arbeta i hem där man bor kvar under renoveringen.",
        includes: ["Kök och badrum", "Golv, väggar och snickerier", "Våtrum enligt branschregler", "Skydd och städning varje dag"],
      },
      {
        id: "tillbyggnad",
        title: "Tillbyggnad",
        text: "Mer plats i huset du redan älskar – utbyggnader, påbyggnader och uterum.",
        details: "En tillbyggnad ska se ut som att den alltid funnits där. Vi hjälper till med lösningen, bygglovet och anslutningen mot befintligt hus.",
        includes: ["Utbyggnad och påbyggnad", "Uterum och altaner", "Attefallshus", "Bygglovshjälp"],
      },
      {
        id: "fasad-tak",
        title: "Fasad och tak",
        text: "Byte av tak, ny fasad och tilläggsisolering som sänker energikostnaden.",
        details: "Ett nytt tak eller en ny fasad skyddar huset i decennier. Vi föreslår material efter husets stil och hjälper dig se över energibesparingen.",
        includes: ["Takbyte och takomläggning", "Träfasad och puts", "Tilläggsisolering", "Fönsterbyte"],
      },
      {
        id: "projektledning",
        title: "Projektledning",
        text: "För föreningar och företag som vill ha en erfaren part som håller ihop projektet.",
        details: "Vi leder och samordnar byggprojekt åt bostadsrättsföreningar och fastighetsägare – med ekonomisk uppföljning och tydlig rapportering.",
        includes: ["Upphandling och kalkyl", "Samordning av underentreprenörer", "Ekonomisk uppföljning", "Slutbesiktning"],
      },
    ],
  },

  projects: [
    {
      slug: "villa-granbacken",
      name: "Villa Granbacken",
      category: "nybyggnation",
      location: "Exempelstad",
      year: "2025",
      size: "164 m²",
      duration: "8 månader",
      status: "done",
      image: "villa",
      summary: "En svartlaserad trävilla i ett plan med stora glaspartier mot ängen.",
      body: [
        "Familjen ville ha ett enkelt och tidlöst hus som smälter in i landskapet. Vi byggde en villa i ett plan med stående panel i svartlaserad gran och vita fönster som ramar in utsikten.",
        "Huset är byggt med välisolerat klimatskal och bergvärme, vilket ger låga driftskostnader år efter år.",
      ],
      scope: ["Grund och platta på mark", "Stomme och klimatskal", "Stående träpanel", "Invändig färdigställning"],
      quote: { text: "De höll tidsplanen och priset från första dagen. Vi kunde inte vara nöjdare.", name: "Familjen L." },
    },
    {
      slug: "fritidshus-norrsjon",
      name: "Fritidshus Norrsjön",
      category: "nybyggnation",
      location: "Exempelstad",
      year: "2024",
      size: "92 m²",
      duration: "5 månader",
      status: "done",
      image: "cabin",
      summary: "Ett fritidshus med brant sadeltak och terrass bland tallarna.",
      body: [
        "Tomten var kuperad och full av gamla tallar som skulle bevaras. Huset placerades på plintar för att skona rötterna och få ett fritt läge mellan träden.",
        "Det branta taket ger en luftig sovloft och den stora glasgaveln öppnar upp mot skogen.",
      ],
      scope: ["Plintgrund", "Sadeltak med sovloft", "Glasgavel", "Terrass i värmebehandlat trä"],
    },
    {
      slug: "kok-eklunden",
      name: "Köksrenovering Eklunden",
      category: "renovering",
      location: "Exempelstad",
      year: "2025",
      size: "28 m²",
      duration: "6 veckor",
      status: "done",
      image: "kitchen",
      summary: "Ett mörkt och trångt kök som blev husets ljusa samlingspunkt.",
      body: [
        "Vi rev en bärande vägg och ersatte den med en limträbalk, så att kök och vardagsrum kunde öppnas upp mot varandra.",
        "Familjen bodde kvar under hela renoveringen. Vi tätade av arbetsområdet och städade varje dag.",
      ],
      scope: ["Ny planlösning", "Limträbalk", "El och VVS i samarbete med partners", "Kök och bänkskivor"],
      quote: { text: "Trots att vi bodde kvar fungerade vardagen. Ordning och reda varje dag.", name: "Anna och Erik S." },
    },
    {
      slug: "kv-larkan",
      name: "Kvarteret Lärkan",
      category: "tillbyggnad",
      location: "Exempelstad",
      year: "2026",
      size: "420 m²",
      duration: "Pågår",
      status: "ongoing",
      image: "aerial",
      summary: "Påbyggnad med sex nya lägenheter ovanpå en befintlig fastighet.",
      body: [
        "Bostadsrättsföreningen ville skapa nya lägenheter utan att ta mark i anspråk. Vi bygger två nya våningar i lätt trästomme ovanpå det befintliga huset.",
        "Arbetet planeras så att de boende påverkas så lite som möjligt, med tydlig information inför varje etapp.",
      ],
      scope: ["Påbyggnad i trästomme", "Sex nya lägenheter", "Samordning med förening", "Löpande information till boende"],
    },
  ] as BergstenProject[],

  projectsSection: {
    eyebrow: "Projekt",
    title: "Utvalda projekt",
    all: "Alla projekt",
    filterLabel: "Filtrera projekt",
    filterAll: "Alla",
  },

  process: {
    eyebrow: "Så arbetar vi",
    title: "Fem steg från idé till inflyttning",
    steps: [
      { title: "Första möte", text: "Vi träffas på plats, lyssnar på dina idéer och går igenom förutsättningarna." },
      { title: "Offert med fast pris", text: "Du får en skriftlig offert med fast pris, tidsplan och vad som ingår." },
      { title: "Planering", text: "Ritningar, bygglov och materialval förbereds tillsammans med dig." },
      { title: "Bygget", text: "En fast projektledare håller ihop arbetet och stämmer av med dig varje vecka." },
      { title: "Slutbesiktning", text: "Oberoende besiktning, överlämning och tio års garanti på utfört arbete." },
    ],
  },

  trust: {
    eyebrow: "Trygghet",
    title: "Ordning och reda, i varje led",
    items: [
      { title: "F-skatt och ansvarsförsäkring", text: "Godkända för F-skatt och fullt försäkrade för de projekt vi åtar oss." },
      { title: "Behörighet för våtrum", text: "Våra hantverkare arbetar enligt branschens regler för säkra våtrum." },
      { title: "Kollektivavtal", text: "Schyssta villkor för alla som arbetar på våra byggen." },
      { title: "ID06 på alla arbetsplatser", text: "Full kontroll över vem som vistas på bygget." },
    ],
  },

  review: {
    badge: "Exempelomdöme",
    text: "Bergsten byggde vårt hus från grunden. Vi visste alltid vad som skulle hända härnäst, och resultatet blev bättre än vi vågat hoppas.",
    name: "Maria och Johan, Villa Granbacken",
    note: "Omdömet är ett exempel i en konceptdemo.",
  },

  ctaBand: {
    title: "Har du ett projekt i tankarna?",
    text: "Berätta om det, så återkommer vi inom två arbetsdagar med förslag på nästa steg.",
  },

  about: {
    eyebrow: "Om oss",
    title: "Hantverk, ansvar och raka besked",
    lead: "Bergsten Bygg grundades av två snickare som ville bygga på ett annat sätt: med färre mellanhänder, tydliga avtal och full insyn för kunden.",
    body: [
      "I dag är vi fjorton hantverkare och två projektledare. Vi är fortfarande tillräckligt små för att du ska träffa samma personer genom hela projektet – och tillräckligt stora för att ta oss an flerbostadshus och kommersiella uppdrag.",
      "Vi tror på långsiktiga relationer. Många av våra uppdrag kommer från kunder som anlitat oss tidigare, eller från grannar som sett vad vi byggt.",
    ],
    values: [
      { title: "Fast pris", text: "Vi lämnar fast pris där det går och förklarar tydligt vad som påverkar kostnaden där det inte gör det." },
      { title: "En kontaktperson", text: "Du har en projektledare som känner ditt projekt utan och innan." },
      { title: "Hållbara val", text: "Trä som huvudmaterial, energieffektiva lösningar och omsorg om tomten." },
    ],
  },

  quote: {
    eyebrow: "Begär offert",
    title: "Berätta om ditt projekt",
    lead: "Ju mer vi vet, desto bättre förslag kan vi ge. Fyll i det du kan – vi hör av oss inom två arbetsdagar.",
    nextTitle: "Vad händer sen?",
    next: [
      "Vi ringer upp och ställer några kompletterande frågor.",
      "Vi bokar ett platsbesök, utan kostnad.",
      "Du får en skriftlig offert med fast pris och tidsplan.",
    ],
    fields: {
      type: "Typ av projekt",
      types: ["Nybyggnation", "Renovering", "Tillbyggnad", "Fasad och tak", "Annat"],
      location: "Ort",
      start: "Önskad start",
      starts: ["Så snart som möjligt", "Inom 3 månader", "Inom 6 månader", "Senare / vet inte"],
      budget: "Ungefärlig budget",
      budgetBands: { under: "Under", over: "Över", unknown: "Vet inte än" },
      description: "Beskriv projektet",
      descriptionHint: "Till exempel storlek, önskemål och om ritningar eller bygglov redan finns.",
      name: "Namn",
      phone: "Telefon",
      email: "E-post",
      optional: "valfritt",
      submit: "Skicka förfrågan",
    },
    errors: {
      type: "Välj typ av projekt.",
      required: "Fyll i det här fältet.",
      email: "Ange en giltig e-postadress.",
      phone: "Ange ett giltigt telefonnummer.",
    },
    success: {
      title: "Tack för din förfrågan.",
      body: "I en riktig version skulle vår projektledare nu höra av sig inom två arbetsdagar.",
      again: "Skicka en ny förfrågan",
    },
  },

  footer: {
    tagline: "Byggföretag för nybyggnation, renovering och tillbyggnad.",
    legal: "Bergsten Bygg är ett fiktivt företag.",
  },

  notFound: { title: "Sidan finns inte", body: "Sidan du letar efter finns inte i den här demon.", back: "Till startsidan" },

  demo: {
    label: "Konceptdemo av Aven Studio",
    body: "Bergsten Bygg är ett fiktivt företag. Foton från Unsplash.",
    back: "Tillbaka till Aven Studio",
    backHref: backToWork("bergsten", "sv"),
  },

  labels: {
    categories: { nybyggnation: "Nybyggnation", renovering: "Renovering", tillbyggnad: "Tillbyggnad" } as Record<ProjectCategory, string>,
    status: { done: "Färdigställt", ongoing: "Pågående" } as Record<ProjectStatus, string>,
  },

  imageAlt: {
    hero: "Trästomme med byggställning mot blå himmel",
    workerFrame: "Snickare i hjälm arbetar högt upp på en trästomme",
    craft: "Händer som märker upp en träbräda med blyerts",
    saw: "Byggarbetare i hjälm och skyddsutrustning vid en såg",
    kitchen: "Nyrenoverat kök med grå luckor och marmorbänk",
    aerial: "Husstomme i trä fotograferad ovanifrån",
    villa: "Svart trävilla med vita fönster på en äng",
    cabin: "Fritidshus med brant sadeltak omgivet av skog",
  } as Record<BergstenImageKey, string>,

  projectsPage: {
    eyebrow: "Projekt",
    title: "Hus vi har byggt, förnyat och byggt till",
    lead: "Ett urval av våra uppdrag – från villor och fritidshus till renoveringar och påbyggnader för bostadsrättsföreningar.",
  },

  projectPage: {
    allProjects: "Alla projekt",
    facts: { type: "Typ", location: "Ort", year: "År", size: "Storlek", duration: "Byggtid", status: "Status" },
    scopeTitle: "Vi utförde",
    more: "Fler projekt",
  },

  meta: {
    title: "Konceptdemo av Aven Studio",
    description: "Konceptdemo av en webbplats för ett byggföretag, skapad av Aven Studio. Företaget är fiktivt.",
    pages: { projects: "Projekt", services: "Tjänster", about: "Om oss", quote: "Begär offert" },
  },

  ui: {
    mainNav: "Huvudmeny",
    footerNav: "Sidfot",
    menu: "Meny",
    close: "Stäng",
    home: "startsida",
    language: "Språk",
    servicesOnPage: "Tjänster på sidan",
    moreAbout: "Mer om oss",
    talkDirectly: "Hellre prata direkt?",
    valuesEyebrow: "Värderingar",
    valuesTitle: "Det här kan du räkna med",
    visit: "Besök",
    contact: "Kontakt",
    orgNr: "Org.nr",
  },
};

export type Bergsten = typeof sv;

const en: Bergsten = {
  locale: "en",
  paths: enPaths,
  name: "Bergsten Bygg",
  phone: { label: "070-000 00 00", href: "tel:+46700000000" },
  email: "offert@bergsten.example",
  address: ["Exempelvägen 4", "123 45 Exempelstad"],
  orgNumber: "556000-0000 (example)",
  demoNotice: "This is a concept demo – no requests are sent and no details are stored.",

  nav: [
    { label: "Projects", href: enPaths.projects },
    { label: "Services", href: enPaths.services },
    { label: "About", href: enPaths.about },
  ],
  quoteCta: "Request a quote",

  hero: {
    eyebrow: "New builds · Renovation · Extensions",
    title: "We build things that last.",
    lead: "Bergsten Bygg builds and renews homes for homeowners, housing associations and businesses. With a fixed price, a clear schedule and craftsmanship we stand behind for years.",
    secondaryCta: "See our projects",
  },

  stats: [
    { value: "20", unit: "yrs", label: "in the industry" },
    { value: "140", unit: "+", label: "completed projects" },
    { value: "14", unit: "", label: "in-house craftspeople" },
    { value: "10", unit: "yrs", label: "warranty on our work" },
  ],

  intro: {
    eyebrow: "Bergsten Bygg",
    title: "A builder that takes responsibility from drawing to handing over the keys.",
    body: "We're a small organisation with our own carpenters, one dedicated project manager per job and partners we've worked with for years. That makes us quick to decide and easy to reach – and it shows in the result.",
  },

  services: {
    eyebrow: "Services",
    title: "The whole building process, under one roof",
    lead: "From the first sketch to the final inspection. You have one contact person throughout the project and always know what happens next.",
    items: [
      {
        id: "nybyggnation",
        title: "New builds",
        text: "Houses, holiday homes and small apartment buildings – from foundation to finished home.",
        details: "We take responsibility for the whole build: groundwork, foundation, frame, building envelope and interior finishing. You get a schedule with clear stages and regular on-site check-ins.",
        includes: ["Planning documents with an architect", "Foundation and frame", "Roof, facade and windows", "Interior finishing"],
      },
      {
        id: "renovering",
        title: "Renovation",
        text: "Kitchens, bathrooms and whole houses renewed with respect for what's already there.",
        details: "We renovate everything from single rooms to entire houses. Certified for wet rooms and used to working in homes where people live during the renovation.",
        includes: ["Kitchens and bathrooms", "Floors, walls and joinery", "Wet rooms to industry standards", "Protection and cleaning every day"],
      },
      {
        id: "tillbyggnad",
        title: "Extensions",
        text: "More space in the house you already love – extensions, added storeys and conservatories.",
        details: "An extension should look like it has always been there. We help with the design, the planning permission and the connection to the existing house.",
        includes: ["Extensions and added storeys", "Conservatories and decks", "Garden annexes", "Help with planning permission"],
      },
      {
        id: "fasad-tak",
        title: "Facade and roof",
        text: "New roofs, new facades and extra insulation that lowers your energy bills.",
        details: "A new roof or facade protects the house for decades. We suggest materials that suit the style of the house and help you assess the energy savings.",
        includes: ["Roof replacement and re-roofing", "Timber cladding and render", "Additional insulation", "Window replacement"],
      },
      {
        id: "projektledning",
        title: "Project management",
        text: "For associations and businesses that want an experienced partner to hold the project together.",
        details: "We lead and coordinate building projects for housing associations and property owners – with financial follow-up and clear reporting.",
        includes: ["Procurement and estimates", "Coordinating subcontractors", "Financial follow-up", "Final inspection"],
      },
    ],
  },

  projects: [
    {
      slug: "villa-granbacken",
      name: "Villa Granbacken",
      category: "nybyggnation",
      location: "Exempelstad",
      year: "2025",
      size: "164 m²",
      duration: "8 months",
      status: "done",
      image: "villa",
      summary: "A single-storey, black-stained timber house with large glazed sections facing the meadow.",
      body: [
        "The family wanted a simple, timeless house that blends into the landscape. We built a single-storey home with vertical cladding in black-stained spruce and white windows that frame the view.",
        "The house has a well-insulated envelope and a ground-source heat pump, keeping running costs low year after year.",
      ],
      scope: ["Slab-on-ground foundation", "Frame and building envelope", "Vertical timber cladding", "Interior finishing"],
      quote: { text: "They kept to the schedule and the price from day one. We couldn't be happier.", name: "The L. family" },
    },
    {
      slug: "fritidshus-norrsjon",
      name: "Holiday home Norrsjön",
      category: "nybyggnation",
      location: "Exempelstad",
      year: "2024",
      size: "92 m²",
      duration: "5 months",
      status: "done",
      image: "cabin",
      summary: "A holiday home with a steep gable roof and a deck among the pines.",
      body: [
        "The plot was hilly and full of old pines that had to be kept. We set the house on pad foundations to protect the roots and give it an open position between the trees.",
        "The steep roof creates an airy sleeping loft, and the large glazed gable opens up towards the forest.",
      ],
      scope: ["Pad foundations", "Gable roof with sleeping loft", "Glazed gable", "Deck in heat-treated timber"],
    },
    {
      slug: "kok-eklunden",
      name: "Kitchen renovation Eklunden",
      category: "renovering",
      location: "Exempelstad",
      year: "2025",
      size: "28 m²",
      duration: "6 weeks",
      status: "done",
      image: "kitchen",
      summary: "A dark, cramped kitchen that became the bright heart of the house.",
      body: [
        "We removed a load-bearing wall and replaced it with a glulam beam, so the kitchen and living room could open up to each other.",
        "The family lived at home throughout the renovation. We sealed off the work area and cleaned up every day.",
      ],
      scope: ["New floor plan", "Glulam beam", "Electrics and plumbing with partners", "Kitchen and worktops"],
      quote: { text: "Even though we lived there, everyday life worked. Neat and tidy every single day.", name: "Anna and Erik S." },
    },
    {
      slug: "kv-larkan",
      name: "Lärkan block",
      category: "tillbyggnad",
      location: "Exempelstad",
      year: "2026",
      size: "420 m²",
      duration: "In progress",
      status: "ongoing",
      image: "aerial",
      summary: "Two added storeys with six new apartments on top of an existing building.",
      body: [
        "The housing association wanted to create new apartments without using more land. We're building two new storeys with a lightweight timber frame on top of the existing building.",
        "The work is planned so residents are affected as little as possible, with clear information before every stage.",
      ],
      scope: ["Added storeys in timber frame", "Six new apartments", "Coordination with the association", "Ongoing updates for residents"],
    },
  ],

  projectsSection: {
    eyebrow: "Projects",
    title: "Selected projects",
    all: "All projects",
    filterLabel: "Filter projects",
    filterAll: "All",
  },

  process: {
    eyebrow: "How we work",
    title: "Five steps from idea to moving in",
    steps: [
      { title: "First meeting", text: "We meet on site, listen to your ideas and go through the conditions." },
      { title: "Fixed-price quote", text: "You get a written quote with a fixed price, a schedule and what's included." },
      { title: "Planning", text: "Drawings, planning permission and materials are prepared together with you." },
      { title: "The build", text: "A dedicated project manager keeps the work together and checks in with you every week." },
      { title: "Final inspection", text: "Independent inspection, handover and a ten-year warranty on the work." },
    ],
  },

  trust: {
    eyebrow: "Peace of mind",
    title: "Done properly, every step of the way",
    items: [
      { title: "Registered and insured", text: "Approved for business tax and fully insured for the projects we take on." },
      { title: "Wet-room certified", text: "Our craftspeople follow the industry rules for safe wet rooms." },
      { title: "Collective agreement", text: "Fair terms for everyone who works on our sites." },
      { title: "ID06 on every site", text: "Full control over who is on the building site." },
    ],
  },

  review: {
    badge: "Example review",
    text: "Bergsten built our house from the ground up. We always knew what would happen next, and the result was better than we dared hope.",
    name: "Maria and Johan, Villa Granbacken",
    note: "This review is an example in a concept demo.",
  },

  ctaBand: {
    title: "Have a project in mind?",
    text: "Tell us about it and we'll get back to you within two working days with suggestions for the next step.",
  },

  about: {
    eyebrow: "About us",
    title: "Craft, responsibility and straight answers",
    lead: "Bergsten Bygg was founded by two carpenters who wanted to build differently: with fewer middlemen, clear contracts and full transparency for the customer.",
    body: [
      "Today we're fourteen craftspeople and two project managers. We're still small enough for you to meet the same people throughout the project – and large enough to take on apartment buildings and commercial jobs.",
      "We believe in long-term relationships. Many of our jobs come from returning customers, or from neighbours who've seen what we built.",
    ],
    values: [
      { title: "Fixed price", text: "We give a fixed price wherever we can, and clearly explain what affects the cost where we can't." },
      { title: "One contact person", text: "You have a project manager who knows your project inside out." },
      { title: "Sustainable choices", text: "Timber as the main material, energy-efficient solutions and care for your plot." },
    ],
  },

  quote: {
    eyebrow: "Request a quote",
    title: "Tell us about your project",
    lead: "The more we know, the better our suggestion can be. Fill in what you can – we'll get back to you within two working days.",
    nextTitle: "What happens next?",
    next: [
      "We call you and ask a few follow-up questions.",
      "We book a site visit, free of charge.",
      "You get a written quote with a fixed price and a schedule.",
    ],
    fields: {
      type: "Type of project",
      types: ["New build", "Renovation", "Extension", "Facade and roof", "Other"],
      location: "Town",
      start: "Preferred start",
      starts: ["As soon as possible", "Within 3 months", "Within 6 months", "Later / not sure"],
      budget: "Approximate budget",
      budgetBands: { under: "Under", over: "Over", unknown: "Not sure yet" },
      description: "Describe the project",
      descriptionHint: "For example size, wishes and whether drawings or planning permission already exist.",
      name: "Name",
      phone: "Phone",
      email: "Email",
      optional: "optional",
      submit: "Send request",
    },
    errors: {
      type: "Choose a type of project.",
      required: "Please fill in this field.",
      email: "Enter a valid email address.",
      phone: "Enter a valid phone number.",
    },
    success: {
      title: "Thank you for your request.",
      body: "In a real version, our project manager would now get in touch within two working days.",
      again: "Send a new request",
    },
  },

  footer: {
    tagline: "Builder for new builds, renovations and extensions.",
    legal: "Bergsten Bygg is a fictional company.",
  },

  notFound: { title: "Page not found", body: "The page you're looking for doesn't exist in this demo.", back: "Back to the homepage" },

  demo: {
    label: "Concept demo by Aven Studio",
    body: "Bergsten Bygg is a fictional company. Photos from Unsplash.",
    back: "Back to Aven Studio",
    backHref: backToWork("bergsten", "en"),
  },

  labels: {
    categories: { nybyggnation: "New build", renovering: "Renovation", tillbyggnad: "Extension" },
    status: { done: "Completed", ongoing: "In progress" },
  },

  imageAlt: {
    hero: "Timber frame with scaffolding against a blue sky",
    workerFrame: "Carpenter in a helmet working high up on a timber frame",
    craft: "Hands marking a wooden board with a pencil",
    saw: "Builder in a helmet and safety gear at a saw",
    kitchen: "Newly renovated kitchen with grey cabinets and a marble worktop",
    aerial: "Timber house frame photographed from above",
    villa: "Black timber house with white windows in a meadow",
    cabin: "Holiday home with a steep gable roof surrounded by forest",
  },

  projectsPage: {
    eyebrow: "Projects",
    title: "Homes we've built, renewed and extended",
    lead: "A selection of our work – from houses and holiday homes to renovations and added storeys for housing associations.",
  },

  projectPage: {
    allProjects: "All projects",
    facts: { type: "Type", location: "Location", year: "Year", size: "Size", duration: "Build time", status: "Status" },
    scopeTitle: "What we did",
    more: "More projects",
  },

  meta: {
    title: "Concept demo by Aven Studio",
    description: "Concept demo of a website for a building company, made by Aven Studio. The company is fictional.",
    pages: { projects: "Projects", services: "Services", about: "About", quote: "Request a quote" },
  },

  ui: {
    mainNav: "Main menu",
    footerNav: "Footer",
    menu: "Menu",
    close: "Close",
    home: "home",
    language: "Language",
    servicesOnPage: "Services on this page",
    moreAbout: "More about us",
    talkDirectly: "Rather talk directly?",
    valuesEyebrow: "Values",
    valuesTitle: "What you can count on",
    visit: "Visit",
    contact: "Contact",
    orgNr: "Company reg. no.",
  },
};

export const bergstenContent: Record<Locale, Bergsten> = { sv, en };

/** Every project slug (identical in both languages), for the proxy's 404 check and static params. */
export const projectSlugs = sv.projects.map((p) => p.slug);

/** Public URL of a project page. */
export const projectHref = (b: Bergsten, slug: string) => `${b.paths.projects}/${slug}`;
