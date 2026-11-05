const privacy = {
  metaTitle: "Integritetspolicy",
  metaDescription: "Så hanterar Aven Studio dina personuppgifter när du kontaktar oss via webbplatsen.",
  eyebrow: "Integritet",
  title: "Integritetspolicy",
  lead: "Här beskriver vi vilka uppgifter vi samlar in när du kontaktar oss, varför vi gör det och vilka rättigheter du har.",
  updatedLabel: "Senast uppdaterad",
  sections: {
    controller: {
      heading: "Vem ansvarar för dina uppgifter?",
      body: "Aven Studio drivs av {controller}, som är personuppgiftsansvarig för behandlingen av dina personuppgifter. Har du frågor om hur dina uppgifter hanteras når du oss på {email}.",
    },
    collected: {
      heading: "Vilka uppgifter samlar vi in?",
      body: "Vi samlar bara in de uppgifter du själv lämnar i kontaktformuläret:",
      items: [
        "namn och e-postadress",
        "företag och telefonnummer, om du fyller i dem",
        "vad förfrågan gäller och ungefärlig budget, om du anger det",
        "ditt meddelande",
      ],
      after: "Vi använder inga spårnings- eller analyscookies och bygger inga profiler om dig.",
    },
    purpose: {
      heading: "Varför behandlar vi uppgifterna?",
      body: "Vi använder uppgifterna för att besvara din förfrågan, boka ett eventuellt samtal och ta fram ett förslag eller en offert. Den rättsliga grunden är ditt samtycke, som du lämnar när du skickar formuläret, samt åtgärder inför ett eventuellt avtal när din förfrågan gäller ett uppdrag.",
    },
    retention: {
      heading: "Hur länge sparas uppgifterna?",
      body: "Leder din förfrågan inte till ett uppdrag raderar vi uppgifterna senast {months} månader efter vår senaste kontakt. Blir det ett uppdrag sparas de uppgifter som behövs så länge lagen kräver, till exempel enligt bokföringsreglerna.",
    },
    processors: {
      heading: "Vilka hanterar uppgifterna åt oss?",
      body: "Vi delar aldrig dina uppgifter för marknadsföring. För att webbplatsen och formuläret ska fungera anlitar vi några leverantörer som behandlar uppgifter för vår räkning:",
      items: [
        "Resend – skickar formulärets meddelande till oss. Uppgifterna hanteras inom EU (Irland).",
        "Google (Gmail) – e-posttjänsten där vi tar emot och besvarar din förfrågan.",
        "Vercel – driftar webbplatsen. Tekniska loggar, till exempel IP-adress, sparas kortvarigt av säkerhetsskäl.",
      ],
      after: "Om en leverantör behandlar uppgifter utanför EU/EES, till exempel i USA, sker det med stöd av EU-kommissionens standardavtalsklausuler eller EU–US Data Privacy Framework.",
    },
    storage: {
      heading: "Cookies och lagring i din webbläsare",
      body: "Webbplatsen sparar ditt språkval i en nödvändig cookie så att du får rätt språk nästa gång. När du fyller i formuläret sparas ett utkast i din webbläsare så att inget försvinner om du byter språk. Utkastet lämnar aldrig din enhet och raderas när du stänger fliken eller skickar formuläret.",
    },
    rights: {
      heading: "Dina rättigheter",
      body: "Du har rätt att begära att få veta vilka uppgifter vi har om dig, att få dem rättade eller raderade, att begränsa behandlingen och att invända mot den. Du kan när som helst återkalla ditt samtycke. Kontakta oss på {email} så hjälper vi dig.",
      complaint: "Är du missnöjd med hur vi hanterar dina uppgifter kan du lämna klagomål till Integritetsskyddsmyndigheten (IMY), imy.se.",
    },
    changes: {
      heading: "Ändringar",
      body: "Vi kan komma att uppdatera den här policyn. Datumet för den senaste ändringen står överst på sidan.",
    },
  },
  linkLabel: "Integritetspolicy",
  consentLink: "Läs vår integritetspolicy",
};

export default privacy;
