import type { Dictionary } from "../../get-dictionary";

const about: Dictionary["about"] = {
  metaDescription:
    "Aven Studio is a modern digital studio creating websites and digital solutions for small and medium-sized businesses.",
  hero: {
    eyebrow: "About",
    title: "A digital studio for businesses that take their brand seriously.",
  },
  intro: {
    eyebrow: "Our idea",
    lead: "Small and medium-sized businesses deserve the same quality online as the biggest brands.",
    paragraphs: [
      "Aven Studio exists to make considered web design accessible to more businesses. Many companies deliver excellent work every day, yet have a website that doesn't reflect it. We want to change that.",
      "We work closely with our clients, with a clear process and a modern technical foundation. The result is websites that are easy to understand, fast to use and built to last.",
    ],
  },
  values: {
    eyebrow: "What we stand for",
    title: "Four principles in everything we do.",
    items: [
      { title: "Clarity", description: "We communicate simply and directly – in design, in copy and in how we work with you." },
      { title: "Care for detail", description: "Details are what separate the professional from the average." },
      { title: "Long-term thinking", description: "We build so your website keeps working and evolving for years to come." },
      { title: "Honesty", description: "We only promise what we can deliver, and we tell you when something isn't the right solution." },
    ],
  },
  approach: {
    eyebrow: "How we build",
    title: "Modern technology, without needless complexity.",
    body: "We choose tools that deliver fast, secure and accessible websites – and make it easy to keep building as your business grows.",
    stackLabel: "Technology we work with",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  audience: {
    eyebrow: "Who we work with",
    title: "Businesses that want to grow – and want it to show.",
    body: "We work with small and medium-sized businesses in services, trades, retail and care. What they share is the ambition to be the obvious choice in their field.",
    cta: "Get in touch",
  },
};

export default about;
