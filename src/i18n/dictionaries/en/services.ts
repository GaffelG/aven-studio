import type { Dictionary } from "../../get-dictionary";

const services: Dictionary["services"] = {
  metaDescription:
    "Web design, development, SEO and digital solutions for small and medium-sized businesses. See what each service includes.",
  hero: {
    eyebrow: "Services",
    title: "Everything a website needs to make a difference.",
    lead: "We combine design, technology and strategy in one team – so you get a website that looks professional, works flawlessly and supports your business.",
  },
  indexLabel: "Contents",
  includesLabel: "Included",
  fitLabel: "A good fit if you",
  items: [
    {
      id: "webbdesign",
      title: "Web design",
      badge: "Core service",
      lead: "A distinctive design shaped around your brand, your customers and what you want them to do. We start with structure and content – and let the visuals strengthen the message.",
      includes: [
        "Review of goals, audience and competitors",
        "Site structure and user journeys",
        "Visual identity adapted for the web",
        "Design for mobile, tablet and desktop",
        "Interactive prototypes for your feedback",
      ],
      fit: "want to stand out from competitors and make a first impression that matches the quality of your work.",
    },
    {
      id: "utveckling",
      title: "Development",
      lead: "We build the design with modern technology that makes your website fast, secure and easy to maintain. No heavy platform, no unnecessary plugins.",
      includes: [
        "Development in Next.js and TypeScript",
        "Responsive and accessible code",
        "Contact forms and essential integrations",
        "The ability to edit content yourself",
        "Deployment and domain setup",
      ],
      fit: "need a stable website that loads quickly and doesn't demand constant upkeep.",
    },
    {
      id: "seo",
      title: "SEO & performance",
      lead: "A beautiful website does little if no one finds it. We lay a technical foundation for visibility from day one and optimise for speed.",
      includes: [
        "Technical search engine optimisation",
        "Structure for headings, metadata and sharing",
        "Optimised images and load times",
        "Local visibility and Google Business Profile",
        "Visitor analytics setup",
      ],
      fit: "want more potential customers in your area to find you through search.",
    },
    {
      id: "digitala-losningar",
      title: "Digital solutions",
      badge: "Growing area",
      lead: "Beyond the website, we help with tools that simplify everyday work – from smart forms and booking flows to automations that connect your systems.",
      includes: [
        "Booking and enquiry flows",
        "Automation of recurring tasks",
        "Integrations between existing systems",
        "Simple internal tools",
      ],
      fit: "spend time on manual steps that could be handled automatically.",
    },
  ],
  closing: {
    title: "Not sure what you need?",
    body: "Tell us about your business and your goals, and we'll suggest a solution that fits – no technical knowledge required.",
    pricingCta: "See pricing",
    contactCta: "Book a call",
  },
};

export default services;
