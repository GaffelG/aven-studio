import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConceptPreview } from "@/components/work/ConceptPreview";
import { concepts } from "@/content/projects";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { localizedHref, pagePaths } from "@/lib/routes";

/** Homepage teaser for the concept projects; each card links to its section on the Work page. */
export async function ConceptsShowcase() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.home.concepts;
  const workHref = localizedHref(locale, pagePaths.work);

  return (
    <section className="border-t border-ink/8">
      <Container className="py-24 sm:py-32 lg:py-40">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          action={
            <Button href={workHref} variant="secondary" size="sm" arrow>
              {t.cta}
            </Button>
          }
        />

        <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-6 lg:mt-20 lg:gap-8">
          {concepts.map((concept, i) => {
            const project = dict.work.projects[concept.id];
            return (
              <li key={concept.id}>
                <Reveal delay={i * 100}>
                  <Link href={`${workHref}#${concept.id}`} className="group block">
                    <div className="transition-transform duration-700 ease-out-soft group-hover:-translate-y-1.5">
                      <ConceptPreview concept={concept} label={dict.work.previewLabel} />
                    </div>
                    <p className="mt-6 flex items-center gap-3 text-xs text-silver-deep">
                      <span className="font-display text-sm text-sage-deep tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {project.sector}
                    </p>
                    <h3 className="mt-3 flex items-center gap-2 text-2xl">
                      {concept.name}
                      <span
                        aria-hidden
                        className="text-lg text-ink/30 transition-all duration-500 ease-out-soft group-hover:translate-x-1 group-hover:text-ink"
                      >
                        →
                      </span>
                    </h3>
                    <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink/65">{project.summary}</p>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 text-xs text-silver-deep">{t.note}</p>
      </Container>
    </section>
  );
}
