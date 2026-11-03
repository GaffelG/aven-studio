import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { localizedHref, pagePaths } from "@/lib/routes";

export async function ServicesOverview() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.home.services;
  const href = localizedHref(locale, pagePaths.services);

  return (
    <section className="pb-24 sm:pb-32 lg:pb-40">
      <Container>
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          action={
            <Button href={href} variant="secondary" size="sm" arrow>
              {t.cta}
            </Button>
          }
        />

        <ol className="mt-14 border-b border-ink/10 lg:mt-20">
          {t.items.map((item, i) => (
            <li key={item.title} className="border-t border-ink/10">
              <Reveal delay={i * 80}>
                <Link
                  href={href}
                  className="group grid grid-cols-[2.5rem_1fr_auto] gap-x-4 gap-y-3 py-8 sm:py-10 lg:grid-cols-12 lg:gap-x-8"
                >
                  <span className="pt-1.5 font-display text-sm text-silver-deep tabular-nums lg:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:col-span-4">
                    <h3 className="text-2xl transition-colors duration-300 sm:text-3xl">{item.title}</h3>
                    {item.badge && (
                      <span className="rounded-[3px] border border-sage-deep/30 px-2 py-0.5 text-[0.6875rem] font-medium tracking-wide text-sage-deep">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="col-start-2 max-w-xl text-ink/65 lg:col-span-6 lg:col-start-6 lg:pt-1.5">
                    {item.description}
                  </p>
                  <span
                    aria-hidden
                    className="col-start-3 row-start-1 pt-1 text-xl text-ink/40 transition-all duration-500 ease-out-soft group-hover:translate-x-1 group-hover:text-ink lg:col-span-1 lg:col-start-12 lg:justify-self-end"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
