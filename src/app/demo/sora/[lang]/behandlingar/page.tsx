import type { Metadata } from "next";
import Image from "next/image";
import { SoraBookBand, SoraButton, SoraPageHero, soraContainer } from "@/components/demos/sora/SoraUi";
import { Reveal } from "@/components/ui/Reveal";
import { formatPrice } from "@/content/pricing";
import { getSora } from "@/demos/sora/server";
import { soraImages } from "@/demos/sora/images";
import { cn } from "@/lib/cn";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getSora()).meta.pages.treatments };
}

export default async function SoraTreatmentsPage() {
  const sora = await getSora();
  const soraPaths = sora.paths;
  const t = sora.treatments;
  return (
    <>
      <SoraPageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
        <nav aria-label={sora.ui.categories} className="mt-10 flex flex-wrap justify-center gap-2">
          {t.categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-sora-line px-5 py-2 text-sm transition-colors hover:border-sora-espresso"
            >
              {category.title}
            </a>
          ))}
        </nav>
      </SoraPageHero>

      <div className={cn(soraContainer, "pb-24 lg:pb-32")}>
        {t.categories.map((category, i) => {
          const image = soraImages[category.image];
          return (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-title`}
              className="grid scroll-mt-28 gap-10 border-t border-sora-line py-16 lg:grid-cols-12 lg:gap-8 lg:py-20"
            >
              <div className={cn("lg:col-span-4", i % 2 === 1 && "lg:order-2 lg:col-start-9")}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] bg-sora-blush">
                  <Image src={image.src} alt={sora.imageAlt[category.image]} placeholder="blur" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                </div>
              </div>
              <Reveal className={cn("lg:col-span-7 lg:self-center", i % 2 === 1 ? "lg:order-1" : "lg:col-start-6")}>
                <h2 id={`${category.id}-title`} className="font-sora-serif text-5xl italic sm:text-6xl">
                  {category.title}
                </h2>
                <table className="mt-8 w-full border-collapse text-left">
                  <caption className="sr-only">{category.title}</caption>
                  <thead className="sr-only">
                    <tr>
                      <th scope="col">{sora.ui.treatment}</th>
                      <th scope="col">{sora.ui.time}</th>
                      <th scope="col">{sora.ui.price}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item) => (
                      <tr key={item.id} className="border-b border-sora-line">
                        <th scope="row" className="py-5 pr-4 font-normal">
                          <span className="block text-[1.0625rem]">{item.name}</span>
                          {"text" in item && item.text && <span className="mt-1 block text-sm text-sora-muted">{item.text}</span>}
                        </th>
                        <td className="py-5 pr-4 text-sm whitespace-nowrap text-sora-muted">
                          {item.minutes} {t.minutesLabel}
                        </td>
                        <td className="py-5 text-right font-sora-serif text-2xl whitespace-nowrap">
                          {item.from && <span className="font-sora text-xs text-sora-muted">{t.fromLabel} </span>}
                          {formatPrice(item.price, sora.locale)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <SoraButton href={soraPaths.booking} className="mt-10">
                  {sora.ui.book} {category.title.toLowerCase()}
                </SoraButton>
              </Reveal>
            </section>
          );
        })}
      </div>

      <SoraBookBand s={sora} />
    </>
  );
}
