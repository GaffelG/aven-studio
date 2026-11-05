import type { BergstenImageKey } from "./images";

/*
 * Content for the Bergsten Bygg concept demo.
 * Bergsten is a fictional company: contact details are placeholder values,
 * and figures, projects and the review are illustrative only.
 */

const basePath = "/demo/bergsten";
const path = (segment = "") => (segment ? `${basePath}/${segment}` : basePath);

export const bergstenPaths = {
  home: path(),
  projects: path("projekt"),
  project: (slug: string) => path(`projekt/${slug}`),
  services: path("tjanster"),
  about: path("om-oss"),
  quote: path("offert"),
};

export type ProjectCategory = "Nybyggnation" | "Renovering" | "Tillbyggnad";

export type BergstenProject = {
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  year: string;
  size: string;
  duration: string;
  status: "Färdigställt" | "Pågående";
  image: BergstenImageKey;
  summary: string;
  body: string[];
  scope: string[];
  quote?: { text: string; name: string };
};

export const bergsten = {
  name: "Bergsten Bygg",
  basePath,
  phone: { label: "070-000 00 00", href: "tel:+46700000000" },
  email: "offert@bergsten.example",
  address: ["Exempelvägen 4", "123 45 Exempelstad"],
  orgNumber: "556000-0000 (exempel)",
  demoNotice: "Det här är en konceptdemo – inga förfrågningar skickas och inga uppgifter sparas.",

  nav: [
    { label: "Projekt", href: bergstenPaths.projects },
    { label: "Tjänster", href: bergstenPaths.services },
    { label: "Om oss", href: bergstenPaths.about },
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
      category: "Nybyggnation",
      location: "Exempelstad",
      year: "2025",
      size: "164 m²",
      duration: "8 månader",
      status: "Färdigställt",
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
      category: "Nybyggnation",
      location: "Exempelstad",
      year: "2024",
      size: "92 m²",
      duration: "5 månader",
      status: "Färdigställt",
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
      category: "Renovering",
      location: "Exempelstad",
      year: "2025",
      size: "28 m²",
      duration: "6 veckor",
      status: "Färdigställt",
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
      category: "Tillbyggnad",
      location: "Exempelstad",
      year: "2026",
      size: "420 m²",
      duration: "Pågår",
      status: "Pågående",
      image: "aerial",
      summary: "Påbyggnad med sex nya lägenheter ovanpå en befintlig fastighet.",
      body: [
        "Bostadsrättsföreningen ville skapa nya lägenheter utan att ta mark i anspråk. Vi bygger två nya våningar i lätt trästomme ovanpå det befintliga huset.",
        "Arbetet planeras så att de boende påverkas så lite som möjligt, med tydlig information inför varje etapp.",
      ],
      scope: ["Påbyggnad i trästomme", "Sex nya lägenheter", "Samordning med förening", "Löpande information till boende"],
    },
  ] satisfies BergstenProject[],

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
      budgets: ["Under 500 000 kr", "500 000 – 1,5 mkr", "1,5 – 4 mkr", "Över 4 mkr", "Vet inte än"],
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
    backHref: "/sv/work#construction",
  },
};

export const projectCategories: ProjectCategory[] = ["Nybyggnation", "Renovering", "Tillbyggnad"];
