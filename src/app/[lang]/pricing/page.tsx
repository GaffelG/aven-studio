import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CurrencyProvider, CurrencySwitcher, Price } from "@/components/pricing/Currency";
import { carePrice, packagePrices, recommendedPackage, type PackageId } from "@/content/pricing";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";
import { pageMetadata } from "@/lib/page-metadata";
import { localizedHref, pagePaths } from "@/lib/routes";

export const generateMetadata = () => pageMetadata("pricing");

export default async function PricingPage() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.pricing;
  const contactHref = localizedHref(locale, pagePaths.contact);
  const ids = Object.keys(packagePrices) as PackageId[];

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead} />

      <CurrencyProvider locale={locale}>
      <Container className="py-20 sm:py-24 lg:py-32">
        <CurrencySwitcher label={t.currency.label} note={t.currency.note} className="mb-8" />
        <ul className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          {ids.map((id, i) => {
            const pkg = t.packages[id];
            const featured = id === recommendedPackage;
            return (
              <li key={id}>
                <Reveal
                  delay={i * 100}
                  className={cn(
                    "flex h-full flex-col rounded-md p-8 sm:p-10",
                    featured ? "bg-ink text-paper" : "ring-1 ring-ink/12",
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl">{pkg.name}</h2>
                    {featured && (
                      <span className="rounded-[3px] bg-sage px-2 py-0.5 text-[0.6875rem] font-medium tracking-wide text-ink">
                        {t.recommended}
                      </span>
                    )}
                  </div>
                  <p className={cn("mt-4 min-h-[3lh] text-[0.9375rem] leading-relaxed", featured ? "text-paper/65" : "text-ink/65")}>
                    {pkg.summary}
                  </p>

                  <p className="mt-8">
                    <span className={cn("block text-xs tracking-[0.12em] uppercase", featured ? "text-silver" : "text-silver-deep")}>
                      {t.from}
                    </span>
                    <Price prices={packagePrices[id]} className="mt-1 block font-display text-display-md font-semibold tabular-nums" />
                    <span className={cn("text-xs", featured ? "text-paper/50" : "text-silver-deep")}>{t.vat}</span>
                  </p>

                  <ul className={cn("mt-8 flex-1 space-y-3 border-t pt-8 text-[0.9375rem]", featured ? "border-paper/12" : "border-ink/10")}>
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span aria-hidden className={featured ? "text-sage" : "text-sage-deep"}>
                          —
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <p className={cn("mt-8 text-sm", featured ? "text-paper/60" : "text-ink/60")}>
                    {t.timelineLabel}: <span className={featured ? "text-paper" : "text-ink"}>{pkg.timeline}</span>
                  </p>
                  <Button href={contactHref} variant={featured ? "inverse" : "secondary"} arrow className="mt-6 w-full">
                    {t.cta}
                  </Button>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 grid gap-4 lg:mt-6 lg:grid-cols-3 lg:gap-6">
          <Reveal className="grid gap-8 rounded-md bg-paper-dim p-8 sm:p-10 lg:col-span-2 lg:grid-cols-2">
            <div>
              <Eyebrow>{t.care.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-2xl">{t.care.name}</h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink/65">{t.care.summary}</p>
              <p className="mt-6">
                <span className="text-xs tracking-[0.12em] text-silver-deep uppercase">{t.from} </span>
                <Price prices={carePrice} className="font-display text-2xl font-semibold tabular-nums" />
                <span className="text-sm text-silver-deep"> {t.perMonth}</span>
              </p>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <ul className="space-y-3 text-[0.9375rem]">
                {t.care.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span aria-hidden className="text-sage-deep">
                      —
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href={contactHref} variant="secondary" size="sm" arrow className="self-start">
                {t.care.cta}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col rounded-md p-8 ring-1 ring-ink/12 sm:p-10">
            <Eyebrow>{t.custom.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-2xl">{t.custom.name}</h2>
            <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-ink/65">{t.custom.summary}</p>
            <Button href={contactHref} variant="secondary" size="sm" arrow className="mt-8 self-start">
              {t.custom.cta}
            </Button>
          </Reveal>
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-silver-deep">
          <span aria-hidden className="mr-2 text-sage-deep">
            *
          </span>
          {t.note}
        </p>
      </Container>
      </CurrencyProvider>

      <section className="border-t border-ink/8">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
          <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} className="lg:col-span-4 lg:items-start" />
          <div className="divide-y divide-ink/10 border-y border-ink/10 lg:col-span-7 lg:col-start-6">
            {t.faq.items.map((item) => (
              <details key={item.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-lg font-medium [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden
                    className="relative size-3 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-ink after:absolute after:inset-y-0 after:left-1/2 after:w-px after:bg-ink after:transition-transform after:duration-300 group-open:after:scale-y-0"
                  />
                </summary>
                <p className="max-w-xl pb-6 leading-relaxed text-ink/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
