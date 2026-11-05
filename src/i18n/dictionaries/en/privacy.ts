import type { Dictionary } from "../../get-dictionary";

const privacy: Dictionary["privacy"] = {
  metaTitle: "Privacy policy",
  metaDescription: "How Aven Studio handles your personal data when you contact us through the website.",
  eyebrow: "Privacy",
  title: "Privacy policy",
  lead: "This page explains what information we collect when you contact us, why we do it and what rights you have.",
  updatedLabel: "Last updated",
  sections: {
    controller: {
      heading: "Who is responsible for your data?",
      body: "Aven Studio is run by {controller}, who is the data controller for the processing of your personal data. If you have questions about how your data is handled, contact us at {email}.",
    },
    collected: {
      heading: "What information do we collect?",
      body: "We only collect the information you provide yourself in the contact form:",
      items: [
        "name and email address",
        "company and phone number, if you fill them in",
        "what your enquiry is about and an approximate budget, if you provide them",
        "your message",
      ],
      after: "We use no tracking or analytics cookies and do not build profiles about you.",
    },
    purpose: {
      heading: "Why do we process the information?",
      body: "We use the information to respond to your enquiry, schedule a call if relevant and prepare a proposal or quote. The legal basis is your consent, which you give when you send the form, and steps prior to a possible contract when your enquiry concerns an assignment.",
    },
    retention: {
      heading: "How long is the information kept?",
      body: "If your enquiry does not lead to an assignment, we delete the information no later than {months} months after our last contact. If it does, we keep the information needed for as long as the law requires, for example under accounting rules.",
    },
    processors: {
      heading: "Who handles the information on our behalf?",
      body: "We never share your information for marketing. To make the website and form work, we use a few suppliers who process data on our behalf:",
      items: [
        "Resend – delivers the form message to us. Data is handled within the EU (Ireland).",
        "Google (Gmail) – the email service where we receive and reply to your enquiry.",
        "Vercel – hosts the website. Technical logs, such as IP addresses, are kept briefly for security reasons.",
      ],
      after: "Where a supplier processes data outside the EU/EEA, for example in the United States, this is done under the European Commission's standard contractual clauses or the EU–US Data Privacy Framework.",
    },
    storage: {
      heading: "Cookies and storage in your browser",
      body: "The website stores your language choice in a necessary cookie so you get the right language next time. While you fill in the form, a draft is saved in your browser so nothing is lost if you switch language. The draft never leaves your device and is deleted when you close the tab or send the form.",
    },
    rights: {
      heading: "Your rights",
      body: "You have the right to know what information we hold about you, to have it corrected or deleted, to restrict processing and to object to it. You can withdraw your consent at any time. Contact us at {email} and we will help you.",
      complaint: "If you are unhappy with how we handle your information, you can lodge a complaint with the Swedish Authority for Privacy Protection (IMY), imy.se.",
    },
    changes: {
      heading: "Changes",
      body: "We may update this policy. The date of the latest change is shown at the top of the page.",
    },
  },
  linkLabel: "Privacy policy",
  consentLink: "Read our privacy policy",
};

export default privacy;
