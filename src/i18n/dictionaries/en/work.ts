import type { Dictionary } from "../../get-dictionary";

const work: Dictionary["work"] = {
  metaDescription:
    "Concept projects by Aven Studio – fictional websites for an automotive workshop, a construction company and a hair salon.",
  hero: {
    eyebrow: "Work",
    title: "Concepts that show what we can create.",
    lead: "Three industries, three entirely different expressions. Each concept starts from the real needs of small and medium-sized businesses – and is available as a complete demo site to click through.",
  },
  disclaimer: {
    label: "Concept projects",
    body: "The companies below are fictional and these projects are not client work. They were created by Aven Studio to demonstrate how we work.",
  },
  previewLabel: "Preview of the concept",
  status: "Demo site in progress",
  demoCta: "Open the demo site",
  labels: {
    sector: "Industry",
    challenge: "The challenge",
    approach: "Our approach",
    features: "Planned features",
    palette: "Colour palette",
  },
  projects: {
    automotive: {
      sector: "Automotive workshop",
      summary: "A workshop that wants a calendar full of bookings instead of phone calls.",
      challenge:
        "Customers want to quickly understand which services are offered, roughly what they cost and when there's a free slot. Many workshop websites make exactly that hard to find.",
      approach:
        "A robust, dark expression with clear service cards and a booking button always within reach. The focus is on trust: clear prices, guarantees and opening hours.",
      features: ["Online booking per service", "Price guide for common jobs", "Opening hours and directions", "Customer reviews"],
      mock: {
        nav: ["Services", "Prices", "Contact"],
        headline: "Service you can trust.",
        cta: "Book now",
        items: ["Service", "Tyres", "Diagnostics"],
      },
    },
    construction: {
      sector: "Construction company",
      summary: "A builder that wants to win larger contracts by showing its quality.",
      challenge:
        "Clients compare several contractors and look for proof of quality, structure and experience. A website that looks home-made costs contracts.",
      approach:
        "A clean, architectural expression with large project imagery, a clear process and a quote request that gathers the right information from the start.",
      features: ["Filterable project portfolio", "Step-by-step process", "Quote request form", "Certifications and insurance"],
      mock: {
        nav: ["Projects", "Services", "About"],
        headline: "We build what lasts.",
        cta: "Request a quote",
        items: ["New builds", "Renovation", "Extensions"],
      },
    },
    salon: {
      sector: "Hair salon",
      summary: "A salon that wants to convey the feeling of a visit before the customer walks in.",
      challenge:
        "Customers choose a salon based on style and feel, but book wherever it's easiest. The website needs to inspire and make booking effortless.",
      approach:
        "A warm, elegant expression with soft shapes, generous typography and a clear path from treatment to booking.",
      features: ["Treatments and prices", "Booking directly on the site", "Stylist profiles", "Gallery and inspiration"],
      mock: {
        nav: ["Treatments", "The salon", "Book"],
        headline: "Time for you.",
        cta: "Book a treatment",
        items: ["Cuts", "Colour", "Styling"],
      },
    },
  },
};

export default work;
