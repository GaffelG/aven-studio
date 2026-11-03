import type { Dictionary } from "../get-dictionary";

const en: Dictionary = {
  meta: {
    title: "Aven Studio — Web design for growing businesses",
    description:
      "Aven Studio designs modern, fast and considered websites for small and medium-sized businesses.",
  },
  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
  },
  header: {
    home: "Aven Studio – home",
    cta: "Book a call",
    menuOpen: "Menu",
    menuClose: "Close",
    skipToContent: "Skip to content",
  },
  footer: {
    statement: "Have a project in mind?",
    cta: "Start a project",
    navigation: "Navigation",
    contact: "Contact",
    email: "hello@avenstudio.se",
    location: "Sweden",
    tagline: "Web design and digital solutions for growing businesses.",
    rights: "All rights reserved.",
  },
  languageSwitcher: {
    label: "Language",
    sv: "Svenska",
    en: "English",
  },
  placeholder: {
    eyebrow: "In progress",
    body: "This page is launching soon.",
  },
  home: {
    hero: {
      eyebrow: "Web agency for small and medium-sized businesses",
      headline: "Websites that build trust",
      lead: "We design and develop considered, fast websites – made to look right, feel right and deliver results.",
      primaryCta: "Book a call",
      secondaryCta: "Explore our services",
      pillars: ["Web design", "Development", "Digital solutions"],
    },
    statement: {
      eyebrow: "Our focus",
      lead: "A first impression takes only seconds.",
      body: "We make sure yours is the right one – with clear design, fast technology and a structure that grows with your business.",
    },
    services: {
      eyebrow: "Services",
      title: "What we do, and do well.",
      cta: "All services",
      items: [
        {
          title: "Web design",
          description: "Distinctive websites shaped around your brand and your customers. No templates, no shortcuts.",
          badge: "Core service",
        },
        {
          title: "Development",
          description: "Modern websites built for speed, security and easy upkeep – on a technical foundation that lasts.",
        },
        {
          title: "SEO & performance",
          description: "Fast loading, clean structure and search optimisation from day one, so the right customers find you.",
        },
        {
          title: "Digital solutions",
          description: "Automations and integrations that save time every day and help your business grow smarter.",
          badge: "Growing area",
        },
      ],
    },
    principles: {
      eyebrow: "Why Aven",
      title: "Fewer compromises. Better results.",
      items: [
        {
          title: "Designed for your business",
          description: "Every project starts with your business, your customers and your goals – not with a template.",
        },
        {
          title: "Built to perform",
          description: "Speed, accessibility and technical quality are part of the work as standard, never an add-on.",
        },
        {
          title: "A partner over time",
          description: "We stay on after launch and help your website evolve as your business grows.",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A clear process, from first call to launch.",
      steps: [
        { title: "Conversation", description: "We get to know your business, your goals and what the website needs to achieve." },
        { title: "Strategy & design", description: "Structure, content and visual direction take shape together with you." },
        { title: "Development", description: "The design becomes a fast, responsive and easy-to-manage website." },
        { title: "Launch & follow-up", description: "We launch, measure and refine – and stay on as your support." },
      ],
    },
  },
  notFound: {
    heading: "Page not found",
    body: "The page you are looking for doesn’t exist or has moved.",
    back: "Back to home",
  },
};

export default en;
