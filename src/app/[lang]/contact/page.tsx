import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/page-metadata";

export const generateMetadata = () => pageMetadata("contact");

export default async function ContactPage() {
  const dict = await getDictionary();
  const t = dict.contact;

  return (
    <Container className="grid gap-16 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:grid-cols-12 lg:gap-8 lg:pt-32 lg:pb-40">
      <div className="lg:col-span-5">
        <Eyebrow>{t.hero.eyebrow}</Eyebrow>
        <h1 className="mt-8 text-display-xl">{t.hero.title}</h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/70">{t.hero.lead}</p>

        <section aria-labelledby="next-steps" className="mt-16 lg:mt-20">
          <h2 id="next-steps" className="text-xl">
            {t.next.title}
          </h2>
          <ol className="mt-6 border-t border-ink/10">
            {t.next.steps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[2.5rem_1fr] border-b border-ink/10 py-6">
                <span className="font-display text-sm text-sage-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-base">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <p className="mt-10 text-sm text-ink/65">
          {t.direct.label}{" "}
          <a href={`mailto:${dict.footer.email}`} className="text-ink underline underline-offset-4 hover:text-sage-deep">
            {dict.footer.email}
          </a>
        </p>
      </div>

      <section aria-label={t.form.title} className="lg:col-span-6 lg:col-start-7 lg:pt-4">
        <div className="rounded-md bg-paper-bright p-6 ring-1 ring-ink/8 sm:p-10">
          <ContactForm labels={t.form} />
        </div>
      </section>
    </Container>
  );
}
