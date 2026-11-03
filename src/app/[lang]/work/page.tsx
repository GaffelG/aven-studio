import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ConceptPreview } from "@/components/work/ConceptPreview";
import { concepts } from "@/content/projects";
import { getDictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";
import { pageMetadata } from "@/lib/page-metadata";

export const generateMetadata = () => pageMetadata("work");

const label = "text-xs font-medium tracking-[0.18em] text-silver-deep uppercase";

export default async function WorkPage() {
  const t = (await getDictionary()).work;

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead}>
        <aside className="mt-12 flex max-w-2xl gap-4 border-l-2 border-sage pl-5 text-sm leading-relaxed lg:mt-14">
          <p>
            <strong className="font-semibold">{t.disclaimer.label}.</strong>{" "}
            <span className="text-ink/70">{t.disclaimer.body}</span>
          </p>
        </aside>
      </PageHero>

      <div className="py-20 sm:py-28 lg:py-36">
        {concepts.map((concept, i) => {
          const project = t.projects[concept.id];
          const flipped = i % 2 === 1;

          return (
            <section
              key={concept.id}
              aria-labelledby={`${concept.id}-title`}
              className="not-first:mt-28 sm:not-first:mt-36 lg:not-first:mt-48"
            >
              <Container className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
                <Reveal className={cn("lg:col-span-7", flipped && "lg:order-2 lg:col-start-6")}>
                  <ConceptPreview concept={concept} mock={project.mock} label={t.previewLabel} />
                </Reveal>

                <Reveal delay={120} className={cn("lg:col-span-4", flipped ? "lg:order-1 lg:col-start-1" : "lg:col-start-9")}>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-display text-sm text-sage-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="rounded-[3px] border border-ink/15 px-2 py-0.5 font-medium tracking-wide text-ink/60">
                      {t.disclaimer.label}
                    </span>
                  </div>
                  <h2 id={`${concept.id}-title`} className="mt-6 text-display-md">
                    {concept.name}
                  </h2>
                  <p className="mt-2 text-sm text-silver-deep">
                    <span className="sr-only">{t.labels.sector}: </span>
                    {project.sector}
                  </p>
                  <p className="mt-6 font-display text-lg leading-snug font-medium text-balance">{project.summary}</p>

                  <dl className="mt-8 space-y-6 border-t border-ink/10 pt-8 text-[0.9375rem] leading-relaxed">
                    <div>
                      <dt className={label}>{t.labels.challenge}</dt>
                      <dd className="mt-2 text-ink/70">{project.challenge}</dd>
                    </div>
                    <div>
                      <dt className={label}>{t.labels.approach}</dt>
                      <dd className="mt-2 text-ink/70">{project.approach}</dd>
                    </div>
                    <div>
                      <dt className={label}>{t.labels.features}</dt>
                      <dd className="mt-3">
                        <ul className="flex flex-wrap gap-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="rounded-[3px] bg-paper-dim px-2.5 py-1 text-sm">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <dt className={label}>{t.labels.palette}</dt>
                        <dd className="mt-3 flex">
                          {Object.entries(concept.palette).map(([name, color]) => (
                            <span
                              key={name}
                              title={color}
                              className="-ml-1 size-6 rounded-full ring-2 ring-paper first:ml-0"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </dd>
                      </div>
                      <p className="flex items-center gap-2 text-xs text-silver-deep">
                        <span aria-hidden className="size-1.5 rounded-full bg-sage motion-safe:animate-pulse" />
                        {t.status}
                      </p>
                    </div>
                  </dl>
                </Reveal>
              </Container>
            </section>
          );
        })}
      </div>
    </>
  );
}
