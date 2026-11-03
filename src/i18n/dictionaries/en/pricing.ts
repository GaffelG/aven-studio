import type { Dictionary } from "../../get-dictionary";

const pricing: Dictionary["pricing"] = {
  metaDescription:
    "Clear packages for web design and development. See proposed starting prices for Start, Business and Premium, plus ongoing care.",
  hero: {
    eyebrow: "Pricing",
    title: "Clear packages. No surprises.",
    lead: "Choose a starting point that suits your business. Every project is tailored to your needs, and you always get a fixed price before we begin.",
  },
  from: "From",
  vat: "excl. VAT",
  perMonth: "/ month",
  recommended: "Recommended",
  timelineLabel: "Delivery",
  cta: "Get started",
  packages: {
    start: {
      name: "Start",
      summary: "For businesses that need a professional online presence – quickly and simply.",
      timeline: "2–3 weeks",
      features: [
        "Up to 3 pages",
        "Responsive design for every screen",
        "Essential search optimisation",
        "Contact form",
        "Two rounds of revisions",
      ],
    },
    business: {
      name: "Business",
      summary: "For companies that want a distinctive website that actively brings in new business.",
      timeline: "4–6 weeks",
      features: [
        "Up to 8 pages",
        "Custom design based on your brand",
        "Technical SEO and local visibility",
        "Editable content",
        "Visitor analytics",
        "Three rounds of revisions",
      ],
    },
    premium: {
      name: "Premium",
      summary: "For larger projects with features and integrations beyond the ordinary.",
      timeline: "6–10 weeks",
      features: [
        "Flexible scope and structure",
        "Advanced features, e.g. booking",
        "Integrations with existing systems",
        "Support with copy and content",
        "Performance optimisation and analysis",
        "Priority support at launch",
      ],
    },
  },
  care: {
    eyebrow: "Ongoing",
    name: "Care plan",
    summary: "We look after hosting, updates and small changes so your website always stays secure and up to date.",
    features: ["Hosting and backups", "Technical updates", "Small content changes", "Monthly performance check"],
    cta: "Add a care plan",
  },
  custom: {
    eyebrow: "Quote",
    name: "Digital solutions",
    summary: "Automations, integrations and custom tools are priced per project based on scope.",
    cta: "Request a quote",
  },
  note: "Prices are proposed starting prices excluding VAT. The final price depends on the scope of the project and is confirmed in a written quote before any work begins.",
  faq: {
    eyebrow: "Questions & answers",
    title: "Frequently asked questions",
    items: [
      {
        question: "What's included in the price?",
        answer:
          "Design, development, essential SEO and launch are included in every package. The exact scope is set out in the quote, so you know exactly what you get.",
      },
      {
        question: "How does payment work?",
        answer: "We normally split payment into two parts: one at the start of the project and one at launch.",
      },
      {
        question: "Can I update the website myself?",
        answer: "Yes. With the Business and Premium packages you can edit text and images yourself. We'll show you how at launch.",
      },
      {
        question: "What if I need something that isn't in a package?",
        answer: "The packages are starting points. We're happy to adjust the scope and put together a proposal that fits your needs.",
      },
      {
        question: "Do I need a care plan?",
        answer: "No, a care plan is optional. The website is yours, and you can choose to manage it yourself or with someone else.",
      },
    ],
  },
};

export default pricing;
