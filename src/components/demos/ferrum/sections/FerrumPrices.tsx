import { Reveal } from "@/components/ui/Reveal";
import { formatPrice } from "@/content/pricing";
import { ferrum } from "@/demos/ferrum/content";
import { FerrumHeading } from "../FerrumHeading";

const t = ferrum.prices;

export function FerrumPrices() {
  return (
    <section id="priser" aria-labelledby="priser-title" className="scroll-mt-20 bg-ferrum-paper text-ferrum-ink">
      <div className="mx-auto grid max-w-site gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <FerrumHeading eyebrow={t.eyebrow} title={t.title} id="priser-title" tone="light" />
          <p className="mt-8 max-w-sm text-lg leading-relaxed text-ferrum-ink/70">{t.lead}</p>
          <a
            href="#boka"
            className="mt-10 inline-flex items-center gap-3 bg-ferrum-ink px-7 py-4 font-ferrum text-xl font-bold tracking-wide text-ferrum-text uppercase transition-colors hover:bg-ferrum-accent hover:text-ferrum-ink"
          >
            {ferrum.hero.primaryCta} <span aria-hidden>→</span>
          </a>
        </div>

        <Reveal className="lg:col-span-6 lg:col-start-7">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">{t.eyebrow}</caption>
            <thead className="sr-only">
              <tr>
                <th scope="col">Jobb</th>
                <th scope="col">Pris</th>
              </tr>
            </thead>
            <tbody>
              {t.items.map((item) => (
                <tr key={item.job} className="border-b border-ferrum-ink/15 first:border-t">
                  <th scope="row" className="py-5 pr-6 text-base font-normal sm:text-lg">
                    {item.job}
                  </th>
                  <td className="py-5 text-right font-ferrum text-2xl font-bold whitespace-nowrap tabular-nums sm:text-3xl">
                    {formatPrice(item.price, "sv")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 text-xs text-ferrum-ink/55">{t.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
