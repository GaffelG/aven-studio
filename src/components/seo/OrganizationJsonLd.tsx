import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { localizedHref } from "@/lib/routes";
import { siteName, siteUrl } from "@/lib/site";

/** schema.org description of the studio. Only facts we can stand behind — no address, ratings or reviews. */
export async function OrganizationJsonLd() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: `${siteUrl}${localizedHref(locale)}`,
    logo: `${siteUrl}/icon.svg`,
    description: dict.meta.description,
    email: dict.footer.email,
    areaServed: { "@type": "Country", name: "Sweden" },
    knowsLanguage: ["sv", "en"],
    serviceType: dict.services.items.map((item) => item.title),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; "<" is escaped to prevent closing the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
