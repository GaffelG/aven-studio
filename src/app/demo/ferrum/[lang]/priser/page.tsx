import type { Metadata } from "next";
import { FerrumPageHero } from "@/components/demos/ferrum/FerrumPageHero";
import { FerrumBooking } from "@/components/demos/ferrum/sections/FerrumBooking";
import { Reveal } from "@/components/ui/Reveal";
import { DemoPrice } from "@/components/demos/DemoCurrency";
import { getFerrum } from "@/demos/ferrum/server";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getFerrum()).meta.pages.prices };
}

export default async function FerrumPricesPage() {
  const ferrum = await getFerrum();
  const t = ferrum.prices;

  return (
    <>
      <FerrumPageHero eyebrow={t.eyebrow} title={t.page.title} lead={t.page.lead} />

      <section aria-label={t.eyebrow} className="bg-ferrum-paper text-ferrum-ink">
        <div className="mx-auto grid max-w-site gap-16 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:col-span-8">
            {t.page.categories.map((category, i) => (
              <Reveal key={category.title} delay={i * 60}>
                <table className="w-full border-collapse text-left">
                  <caption className="mb-4 text-left font-ferrum text-3xl font-bold uppercase">{category.title}</caption>
                  <thead className="sr-only">
                    <tr>
                      <th scope="col">{ferrum.ui.job}</th>
                      <th scope="col">{ferrum.ui.price}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.rows.map((row) => (
                      <tr key={row.job} className="border-b border-ferrum-ink/15 first:border-t">
                        <th scope="row" className="py-4 pr-6 text-base font-normal sm:text-lg">
                          {row.job}
                        </th>
                        <td className="py-4 text-right font-ferrum text-2xl font-bold whitespace-nowrap tabular-nums">
                          <DemoPrice sek={row.price} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Reveal>
            ))}
            <p className="text-xs text-ferrum-ink/55">{t.note}</p>
          </div>

          <aside className="lg:col-span-4">
            <div className="bg-ferrum-ink p-8 text-ferrum-text lg:sticky lg:top-28">
              <h2 className="font-ferrum text-3xl font-bold uppercase">{t.page.promiseTitle}</h2>
              <ul className="mt-6 space-y-4 text-[0.9375rem] leading-relaxed">
                {t.page.promise.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span aria-hidden className="text-ferrum-accent">
                      ✓
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FerrumBooking />
    </>
  );
}
