import type { Metadata } from "next";
import Link from "next/link";
import { FerrumPageHero } from "@/components/demos/ferrum/FerrumPageHero";
import { FerrumBooking } from "@/components/demos/ferrum/sections/FerrumBooking";
import { Reveal } from "@/components/ui/Reveal";
import { formatPrice } from "@/content/pricing";
import { ferrum, ferrumPaths } from "@/demos/ferrum/content";

export const metadata: Metadata = { title: "Tjänster" };

const t = ferrum.services;

export default function FerrumServicesPage() {
  return (
    <>
      <FerrumPageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
        <nav aria-label="Tjänster på sidan" className="mt-10 flex flex-wrap gap-2">
          {t.items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="border border-ferrum-line px-4 py-2 text-sm transition-colors hover:border-ferrum-accent hover:text-ferrum-accent"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </FerrumPageHero>

      <div className="mx-auto max-w-site px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        {t.items.map((item, i) => (
          <article
            key={item.id}
            id={item.id}
            aria-labelledby={`${item.id}-title`}
            className="grid scroll-mt-24 gap-8 border-b border-ferrum-line py-14 last:border-b-0 lg:grid-cols-12 lg:gap-8 lg:py-20"
          >
            <div className="lg:col-span-5">
              <span className="font-ferrum text-xl font-semibold text-ferrum-accent tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 id={`${item.id}-title`} className="mt-4 font-ferrum text-5xl leading-none font-bold uppercase sm:text-6xl">
                {item.title}
              </h2>
              <p className="mt-6">
                <span className="text-sm text-ferrum-muted">från </span>
                <span className="font-ferrum text-3xl font-bold">{formatPrice(item.from, "sv")}</span>
                <span className="text-sm text-ferrum-muted"> · {item.duration}</span>
              </p>
            </div>
            <Reveal className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-ferrum-text/80">{item.details}</p>
              <h3 className="mt-10 text-xs font-semibold tracking-[0.2em] text-ferrum-muted uppercase">{t.includesLabel}</h3>
              <ul className="mt-4 grid gap-px bg-ferrum-line sm:grid-cols-2">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-3 bg-ferrum-ink py-3 pr-4 text-[0.9375rem]">
                    <span aria-hidden className="text-ferrum-accent">
                      ✓
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <Link
                href={ferrumPaths.booking}
                className="mt-10 inline-flex items-center gap-3 bg-ferrum-accent px-6 py-3 font-ferrum text-lg font-bold tracking-wide text-ferrum-ink uppercase transition-colors hover:bg-ferrum-text"
              >
                Boka {item.title.toLowerCase()} <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </article>
        ))}
      </div>

      <FerrumBooking />
    </>
  );
}
