import Image from "next/image";
import Link from "next/link";
import { SoraBookBand, SoraButton, SoraEyebrow, SoraHeading, soraContainer } from "@/components/demos/sora/SoraUi";
import { Reveal } from "@/components/ui/Reveal";
import { formatPrice } from "@/content/pricing";
import { getSora } from "@/demos/sora/server";
import { soraImages } from "@/demos/sora/images";
import { cn } from "@/lib/cn";

export default async function SoraHome() {
  const sora = await getSora();
  const soraPaths = sora.paths;
  const { hero, intro, highlights, treatments, stylists, reviews, visit } = sora;
  const featured = treatments.categories.map((category) => ({ category, item: category.items[1] ?? category.items[0] }));

  return (
    <>
      {/* Hero: serif headline beside an arched photograph */}
      <section aria-labelledby="sora-hero" className={cn(soraContainer, "grid gap-12 pt-12 pb-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-16 lg:pb-28")}>
        <div className="lg:col-span-5">
          <SoraEyebrow>{hero.eyebrow}</SoraEyebrow>
          <h1 id="sora-hero" className="mt-8 font-sora-serif text-[clamp(4.5rem,10vw,9rem)] leading-[0.9] font-normal italic">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-sora-muted">{hero.lead}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <SoraButton href={soraPaths.booking}>{sora.bookCta}</SoraButton>
            <SoraButton href={soraPaths.treatments} variant="outline">
              {hero.secondaryCta}
            </SoraButton>
          </div>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-sora-blush">
            <Image
              src={soraImages.hero.src}
              alt={sora.imageAlt.hero}
              placeholder="blur"
              priority
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-4 hidden max-w-[15rem] bg-sora-shell p-6 shadow-[0_20px_50px_-25px_rgba(44,34,30,0.4)] sm:block lg:-left-16">
            <p className="font-sora text-[0.6875rem] tracking-[0.28em] text-sora-clay-deep uppercase">{sora.ui.openDays}</p>
            <p className="mt-2 font-sora-serif text-3xl">{visit.hours[0].time}</p>
            <Link href={soraPaths.booking} className="mt-3 inline-block text-sm underline underline-offset-4 hover:text-sora-clay-deep">
              {sora.ui.seeTimes}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section aria-labelledby="sora-intro" className="bg-sora-shell">
        <div className={cn(soraContainer, "py-24 text-center lg:py-32")}>
          <SoraEyebrow>{intro.eyebrow}</SoraEyebrow>
          <h2 id="sora-intro" className="mx-auto mt-6 max-w-3xl font-sora-serif text-4xl leading-[1.15] sm:text-5xl">
            {intro.title}
          </h2>
          <Reveal>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-sora-muted">{intro.body}</p>
          </Reveal>
          <ul className="mx-auto mt-16 grid max-w-5xl gap-10 text-left sm:grid-cols-3">
            {highlights.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 100} className="border-t border-sora-line pt-6">
                  <h3 className="font-sora-serif text-2xl italic">{item.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-sora-muted">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Treatments preview with arched images */}
      <section aria-labelledby="sora-treatments">
        <div className={cn(soraContainer, "py-24 lg:py-32")}>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SoraHeading eyebrow={treatments.eyebrow} title={sora.ui.whatWeDo} id="sora-treatments" />
            <SoraButton href={soraPaths.treatments} variant="outline">
              {sora.ui.fullPriceList}
            </SoraButton>
          </div>
          <ul className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
            {featured.map(({ category, item }, i) => {
              const image = soraImages[category.image];
              return (
                <li key={category.id}>
                  <Reveal delay={i * 100}>
                    <Link href={`${soraPaths.treatments}#${category.id}`} className="group block">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] bg-sora-blush">
                        <Image
                          src={image.src}
                          alt={sora.imageAlt[category.image]}
                          placeholder="blur"
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-105"
                        />
                      </div>
                      <h3 className="mt-6 font-sora-serif text-3xl">{category.title}</h3>
                      <p className="mt-1 text-sm text-sora-muted">
                        {item.name} · {item.from ? `${treatments.fromLabel} ` : ""}
                        {formatPrice(item.price, sora.locale)}
                      </p>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Salon atmosphere */}
      <section aria-labelledby="sora-salon" className="bg-sora-blush/60">
        <div className={cn(soraContainer, "grid gap-12 py-24 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-32")}>
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src={soraImages.interior.src} alt={sora.imageAlt.interior} placeholder="blur" fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-16 aspect-[3/4] overflow-hidden">
              <Image src={soraImages.products.src} alt={sora.imageAlt.products} placeholder="blur" fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <SoraHeading eyebrow={sora.salon.eyebrow} title={sora.salon.title} id="sora-salon" lead={sora.salon.lead} />
            <SoraButton href={soraPaths.salon} variant="outline" className="mt-10">
              {sora.ui.aboutSalon}
            </SoraButton>
          </div>
        </div>
      </section>

      {/* Stylists */}
      <section aria-labelledby="sora-stylists">
        <div className={cn(soraContainer, "py-24 lg:py-32")}>
          <SoraHeading eyebrow={stylists.eyebrow} title={stylists.title} id="sora-stylists" center />
          <ul className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-3">
            {stylists.items.map((person, i) => (
              <li key={person.id} className="text-center">
                <Reveal delay={i * 100}>
                  <span aria-hidden className="mx-auto grid size-28 place-items-center rounded-full bg-sora-blush font-sora-serif text-5xl italic">
                    {person.name[0]}
                  </span>
                  <h3 className="mt-6 font-sora-serif text-3xl">{person.name}</h3>
                  <p className="mt-1 text-sm text-sora-muted">{person.role}</p>
                  <p className="mt-3 font-sora text-[0.6875rem] tracking-[0.24em] text-sora-clay-deep uppercase">{person.focus}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <section aria-labelledby="sora-reviews" className="border-t border-sora-line">
        <div className={cn(soraContainer, "py-24 lg:py-28")}>
          <SoraEyebrow className="text-center">{reviews.eyebrow}</SoraEyebrow>
          <h2 id="sora-reviews" className="sr-only">
            {reviews.eyebrow}
          </h2>
          <ul className="mt-12 grid gap-12 md:grid-cols-3">
            {reviews.items.map((review) => (
              <li key={review.name} className="text-center">
                <p aria-label={sora.ui.stars} className="tracking-[0.3em] text-sora-clay">
                  ★★★★★
                </p>
                <blockquote className="mt-5 font-sora-serif text-2xl leading-snug italic">“{review.text}”</blockquote>
                <p className="mt-5 text-sm">
                  {review.name} · <span className="text-sora-muted">{reviews.badge}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center text-xs text-sora-muted">{reviews.note}</p>
        </div>
      </section>

      {/* Visit */}
      <section aria-labelledby="sora-visit" className="bg-sora-shell">
        <div className={cn(soraContainer, "grid gap-12 py-24 lg:grid-cols-12 lg:gap-8 lg:py-28")}>
          <div className="lg:col-span-5">
            <SoraHeading eyebrow={visit.eyebrow} title={visit.title} id="sora-visit" />
            <dl className="mt-10 divide-y divide-sora-line border-y border-sora-line">
              {visit.hours.map((row) => (
                <div key={row.days} className="flex justify-between gap-6 py-4">
                  <dt>{row.days}</dt>
                  <dd className="font-sora-serif text-2xl">{row.time}</dd>
                </div>
              ))}
            </dl>
            <address className="mt-8 leading-relaxed not-italic">
              {sora.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a href={sora.phone.href} className="mt-3 block hover:text-sora-clay-deep">
                {sora.phone.label}
              </a>
            </address>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden lg:col-span-6 lg:col-start-7">
            <Image src={soraImages.stations.src} alt={sora.imageAlt.stations} placeholder="blur" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <SoraBookBand s={sora} />
    </>
  );
}
