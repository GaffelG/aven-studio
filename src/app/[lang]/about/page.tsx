import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/page-metadata";
import { localizedHref, pagePaths } from "@/lib/routes";

export const generateMetadata = () => pageMetadata("about");

export default async function AboutPage() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.about;

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} />

      {/* Idea */}
      <section>
        <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8 lg:py-36">
          <Eyebrow className="lg:col-span-3 lg:pt-2">{t.intro.eyebrow}</Eyebrow>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-display text-display-md font-medium text-balance">{t.intro.lead}</p>
            </Reveal>
            <Reveal delay={120} className="mt-12 grid gap-6 text-lg leading-relaxed text-ink/70 md:grid-cols-2 md:gap-10">
              {t.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-paper-dim">
        <Container className="py-20 sm:py-28 lg:py-36">
          <SectionHeading eyebrow={t.values.eyebrow} title={t.values.title} />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-md bg-ink/10 sm:grid-cols-2 lg:mt-20">
            {t.values.items.map((value, i) => (
              <li key={value.title} className="bg-paper-dim">
                <Reveal delay={i * 80} className="flex h-full flex-col p-8 sm:p-10 lg:min-h-72 lg:p-12">
                  <span className="font-display text-sm text-sage-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-auto pt-12 text-display-md">{value.title}</h3>
                  <p className="mt-4 max-w-sm leading-relaxed text-ink/65">{value.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Approach */}
      <section>
        <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8 lg:py-36">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={t.approach.eyebrow} title={t.approach.title} />
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="text-lg leading-relaxed text-ink/70">{t.approach.body}</p>
            <h3 className="mt-10 font-sans text-xs font-medium tracking-[0.18em] text-silver-deep uppercase">
              {t.approach.stackLabel}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.approach.stack.map((tool) => (
                <li key={tool} className="rounded-[3px] px-3 py-1.5 text-sm ring-1 ring-ink/15">
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Audience */}
      <section className="border-t border-ink/8">
        <Container className="py-20 sm:py-28 lg:py-36">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t.audience.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-display-lg">{t.audience.title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/70">{t.audience.body}</p>
            <Button href={localizedHref(locale, pagePaths.contact)} arrow className="mt-10">
              {t.audience.cta}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
