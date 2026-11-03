import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/page-metadata";
import { localizedHref, pagePaths } from "@/lib/routes";

export const generateMetadata = () => pageMetadata("services");

export default async function ServicesPage() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.services;

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead} />

      <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <nav aria-label={t.indexLabel} className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-32">
            <p className="text-xs font-medium tracking-[0.18em] text-silver-deep uppercase">{t.indexLabel}</p>
            <ol className="mt-6 space-y-3 text-sm">
              {t.items.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex gap-4 text-ink/60 transition-colors duration-300 hover:text-ink"
                  >
                    <span className="font-display text-silver-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="lg:col-span-9">
          {t.items.map((item, i) => (
            <article
              key={item.id}
              id={item.id}
              aria-labelledby={`${item.id}-title`}
              className="scroll-mt-28 border-t border-ink/10 py-14 first:border-t-0 first:pt-0 sm:py-20 lg:scroll-mt-32"
            >
              <Reveal>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="font-display text-sm text-sage-deep tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  {item.badge && (
                    <span className="rounded-[3px] border border-sage-deep/30 px-2 py-0.5 text-[0.6875rem] font-medium tracking-wide text-sage-deep">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h2 id={`${item.id}-title`} className="mt-6 text-display-lg">
                  {item.title}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">{item.lead}</p>

                <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8">
                  <div>
                    <h3 className="text-xs font-medium tracking-[0.18em] text-silver-deep uppercase font-sans">
                      {t.includesLabel}
                    </h3>
                    <ul className="mt-5 divide-y divide-ink/8 border-y border-ink/8">
                      {item.includes.map((line) => (
                        <li key={line} className="flex gap-3 py-3 text-[0.9375rem]">
                          <span aria-hidden className="text-sage-deep">
                            —
                          </span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sm:pl-8">
                    <h3 className="text-xs font-medium tracking-[0.18em] text-silver-deep uppercase font-sans">
                      {t.fitLabel}
                    </h3>
                    <p className="mt-5 font-display text-xl leading-snug font-medium text-balance">… {item.fit}</p>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}

          <Reveal className="mt-8 rounded-[3px] bg-paper-dim p-8 sm:p-12">
            <h2 className="text-display-md">{t.closing.title}</h2>
            <p className="mt-4 max-w-lg text-ink/70">{t.closing.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={localizedHref(locale, pagePaths.contact)} arrow>
                {t.closing.contactCta}
              </Button>
              <Button href={localizedHref(locale, pagePaths.pricing)} variant="secondary">
                {t.closing.pricingCta}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
