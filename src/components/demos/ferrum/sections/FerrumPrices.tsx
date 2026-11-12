import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { formatPrice } from "@/content/pricing";
import { getFerrum } from "@/demos/ferrum/server";
import { FerrumHeading } from "../FerrumHeading";

export async function FerrumPrices() {
  const ferrum = await getFerrum();
  const ferrumPaths = ferrum.paths;
  const t = ferrum.prices;

  return (
    <section id="priser" aria-labelledby="priser-title" className="scroll-mt-20 bg-ferrum-paper text-ferrum-ink">
      <div className="mx-auto grid max-w-site gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <FerrumHeading eyebrow={t.eyebrow} title={t.title} id="priser-title" tone="light" />
          <p className="mt-8 max-w-sm text-lg leading-relaxed text-ferrum-ink/70">{t.lead}</p>
          <Link
            href={ferrumPaths.booking}
            className="mt-10 inline-flex items-center gap-3 bg-ferrum-ink px-7 py-4 font-ferrum text-xl font-bold tracking-wide text-ferrum-text uppercase transition-colors hover:bg-ferrum-accent hover:text-ferrum-ink"
          >
            {ferrum.hero.primaryCta} <span aria-hidden>→</span>
          </Link>
        </div>

        <Reveal className="lg:col-span-6 lg:col-start-7">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">{t.eyebrow}</caption>
            <thead className="sr-only">
              <tr>
                <th scope="col">{ferrum.ui.job}</th>
                <th scope="col">{ferrum.ui.price}</th>
              </tr>
            </thead>
            <tbody>
              {t.items.map((item) => (
                <tr key={item.job} className="border-b border-ferrum-ink/15 first:border-t">
                  <th scope="row" className="py-5 pr-6 text-base font-normal sm:text-lg">
                    {item.job}
                  </th>
                  <td className="py-5 text-right font-ferrum text-2xl font-bold whitespace-nowrap tabular-nums sm:text-3xl">
                    {formatPrice(item.price, ferrum.locale)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-ferrum-ink/55">{t.note}</p>
            <Link
              href={ferrumPaths.prices}
              className="font-ferrum text-lg font-bold tracking-wide text-ferrum-accent-deep uppercase underline-offset-4 hover:underline"
            >
              {t.allPrices} →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
