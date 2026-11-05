import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { legal } from "@/content/legal";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { buildMetadata } from "@/lib/page-metadata";
import { siteName } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.privacy;
  return {
    title: t.metaTitle,
    ...buildMetadata({ locale, path: "/privacy", title: `${t.metaTitle} — ${siteName}`, description: t.metaDescription }),
  };
}

/** Replaces {controller}, {months} and {email} in policy text; the email becomes a mailto link. */
function fill(text: string): ReactNode {
  const parts = text
    .replaceAll("{controller}", legal.controller)
    .replaceAll("{months}", String(legal.retentionMonths))
    .split("{email}");
  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <a key={i} href={`mailto:${legal.email}`} className="underline underline-offset-4 hover:text-sage-deep">
            {legal.email}
          </a>,
          part,
        ],
  );
}

export default async function PrivacyPage() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.privacy;
  const s = t.sections;
  const updated = new Intl.DateTimeFormat(locale === "sv" ? "sv-SE" : "en-GB", { dateStyle: "long" }).format(
    new Date(`${legal.updated}T12:00:00`),
  );

  const sections: Array<{ id: string; heading: string; body: string; items?: string[]; after?: string }> = [
    { id: "controller", ...s.controller },
    { id: "collected", ...s.collected },
    { id: "purpose", ...s.purpose },
    { id: "retention", ...s.retention },
    { id: "processors", ...s.processors },
    { id: "storage", ...s.storage },
    { id: "rights", ...s.rights, after: s.rights.complaint },
    { id: "changes", ...s.changes },
  ];

  return (
    <Container className="grid gap-12 pt-16 pb-24 sm:pt-24 lg:grid-cols-12 lg:gap-8 lg:pt-32 lg:pb-32">
      <header className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="mt-6 text-display-lg">{t.title}</h1>
          <p className="mt-6 max-w-sm leading-relaxed text-ink/70">{t.lead}</p>
          <p className="mt-6 text-sm text-silver-deep">
            {t.updatedLabel}: <time dateTime={legal.updated}>{updated}</time>
          </p>
        </div>
      </header>

      <div className="lg:col-span-7 lg:col-start-6">
        {sections.map((section, i) => (
          <section key={section.id} aria-labelledby={`privacy-${section.id}`} className="border-t border-ink/10 py-10 first:border-t-0 first:pt-0">
            <h2 id={`privacy-${section.id}`} className="flex gap-4 text-2xl">
              <span className="font-display text-sm text-sage-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              {section.heading}
            </h2>
            <div className="mt-5 space-y-4 pl-9 leading-relaxed text-ink/75">
              <p>{fill(section.body)}</p>
              {section.items && (
                <ul className="list-disc space-y-1.5 pl-5 marker:text-sage-deep">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.after && <p>{fill(section.after)}</p>}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
