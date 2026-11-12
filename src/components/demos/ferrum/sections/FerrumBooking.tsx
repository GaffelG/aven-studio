import Link from "next/link";
import { getFerrum } from "@/demos/ferrum/server";


export async function FerrumBooking() {

  const ferrum = await getFerrum();
  const ferrumPaths = ferrum.paths;
  const t = ferrum.booking;
  return (
    <section id="boka" aria-labelledby="boka-title" className="scroll-mt-20 bg-ferrum-accent text-ferrum-ink">
      <div className="mx-auto flex max-w-site flex-col gap-10 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-20">
        <div>
          <h2 id="boka-title" className="max-w-3xl font-ferrum text-5xl leading-[0.9] font-bold uppercase sm:text-6xl lg:text-7xl">
            {t.title}.
          </h2>
          <p className="mt-5 max-w-md text-lg text-ferrum-ink/80">{t.lead}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={ferrumPaths.booking}
            className="inline-flex items-center gap-3 bg-ferrum-ink px-7 py-4 font-ferrum text-xl font-bold tracking-wide text-ferrum-text uppercase transition-colors hover:bg-ferrum-raised"
          >
            {t.cta} <span aria-hidden>→</span>
          </Link>
          <a
            href={ferrum.phone.href}
            className="inline-flex items-center border-2 border-ferrum-ink px-7 py-4 font-ferrum text-xl font-bold tracking-wide uppercase transition-colors hover:bg-ferrum-ink hover:text-ferrum-text"
          >
            {t.call}
          </a>
        </div>
      </div>
    </section>
  );
}
