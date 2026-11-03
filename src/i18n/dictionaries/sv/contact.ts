const contact = {
  metaDescription: "Kontakta Aven Studio för att diskutera din nya webbplats. Vi återkommer inom en till två arbetsdagar.",
  hero: {
    eyebrow: "Kontakt",
    title: "Berätta om ditt projekt.",
    lead: "Fyll i formuläret så hör vi av oss. Det kostar ingenting och du förbinder dig inte till något.",
  },
  direct: {
    label: "Föredrar du mejl?",
  },
  next: {
    title: "Vad händer sen?",
    steps: [
      {
        title: "Vi läser din förfrågan",
        description: "Inom en till två arbetsdagar får du ett personligt svar – aldrig ett automatiskt utskick.",
      },
      {
        title: "Ett första samtal",
        description: "Ett kostnadsfritt samtal på cirka 30 minuter där vi går igenom dina mål, behov och förutsättningar.",
      },
      {
        title: "Förslag och offert",
        description: "Du får ett tydligt förslag med omfattning, tidsplan och fast pris. Inget är bindande förrän du godkänner.",
      },
    ],
  },
  form: {
    title: "Förfrågan",
    name: "Namn",
    email: "E-post",
    company: "Företag",
    phone: "Telefon",
    optional: "valfritt",
    projectType: "Vad gäller det?",
    projectTypes: {
      new: "Ny webbplats",
      redesign: "Ny design av befintlig",
      solutions: "Digitala lösningar",
      other: "Annat",
    },
    budget: "Ungefärlig budget",
    budgetPlaceholder: "Välj ett alternativ",
    budgets: {
      "under-20": "Under 20 000 kr",
      "20-40": "20 000–40 000 kr",
      "40-70": "40 000–70 000 kr",
      "over-70": "Över 70 000 kr",
      unsure: "Vet inte än",
    },
    message: "Berätta kort om projektet",
    messageHint: "Till exempel mål, önskad tidsplan eller adress till befintlig webbplats.",
    consent: "Jag godkänner att Aven Studio sparar mina uppgifter för att kunna besvara min förfrågan.",
    submit: "Skicka förfrågan",
    sending: "Skickar…",
    errors: {
      required: "Fyll i det här fältet.",
      email: "Ange en giltig e-postadress.",
      consent: "Du behöver godkänna för att vi ska kunna svara dig.",
      summary: "Något saknas. Kontrollera de markerade fälten.",
    },
    success: {
      title: "Tack! Vi har tagit emot din förfrågan.",
      body: "Vi återkommer inom en till två arbetsdagar med ett personligt svar och förslag på tid för ett första samtal.",
      again: "Skicka en ny förfrågan",
    },
  },
};

export default contact;
