import type { Dictionary } from "../../get-dictionary";

const contact: Dictionary["contact"] = {
  metaDescription: "Contact Aven Studio to discuss your new website. We reply within one to two working days.",
  hero: {
    eyebrow: "Contact",
    title: "Tell us about your project.",
    lead: "Fill in the form and we'll be in touch. It's free and you're not committing to anything.",
  },
  direct: {
    label: "Prefer email?",
  },
  next: {
    title: "What happens next?",
    steps: [
      {
        title: "We read your enquiry",
        description: "Within one to two working days you'll receive a personal reply – never an automated message.",
      },
      {
        title: "A first conversation",
        description: "A free call of about 30 minutes where we go through your goals, needs and circumstances.",
      },
      {
        title: "Proposal and quote",
        description: "You receive a clear proposal with scope, timeline and a fixed price. Nothing is binding until you approve.",
      },
    ],
  },
  form: {
    title: "Enquiry",
    name: "Name",
    email: "Email",
    company: "Company",
    phone: "Phone",
    optional: "optional",
    projectType: "What is it about?",
    projectTypes: {
      new: "New website",
      redesign: "Redesign of existing",
      solutions: "Digital solutions",
      other: "Other",
    },
    budget: "Approximate budget",
    budgetPlaceholder: "Choose an option",
    budgets: {
      "under-20": "Under SEK 20,000",
      "20-40": "SEK 20,000–40,000",
      "40-70": "SEK 40,000–70,000",
      "over-70": "Over SEK 70,000",
      unsure: "Not sure yet",
    },
    message: "Briefly describe the project",
    messageHint: "For example goals, preferred timeline or the address of your current website.",
    consent: "I agree that Aven Studio may store my details in order to respond to my enquiry.",
    submit: "Send enquiry",
    sending: "Sending…",
    errors: {
      required: "Please fill in this field.",
      email: "Please enter a valid email address.",
      consent: "We need your consent to be able to reply.",
      summary: "Something is missing. Please check the highlighted fields.",
    },
    success: {
      title: "Thank you! We've received your enquiry.",
      body: "We'll get back to you within one to two working days with a personal reply and a suggested time for a first call.",
      again: "Send another enquiry",
    },
  },
};

export default contact;
