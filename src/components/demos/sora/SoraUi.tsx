import Link from "next/link";
import type { ReactNode } from "react";
import type { Sora } from "@/demos/sora/content";
import { cn } from "@/lib/cn";

/**
 * Shared building blocks for the Salong Sora demo. Used from both Server and Client Components,
 * so anything language-dependent takes the content object `s` as a prop.
 */

export const soraContainer = "mx-auto max-w-site px-5 sm:px-8 lg:px-10";

export function SoraLogo({ s, tone = "dark" }: { s: Sora; tone?: "dark" | "light" }) {
  return (
    <Link href={s.paths.home} aria-label={`${s.name} – ${s.ui.home}`} className="flex w-fit items-baseline gap-2">
      <span className="font-sora-serif text-3xl leading-none font-medium italic">Sora</span>
      <span
        className={cn(
          "font-sora text-[0.6875rem] tracking-[0.32em] uppercase",
          tone === "dark" ? "text-sora-muted" : "text-sora-shell/60",
        )}
      >
        Salong
      </span>
    </Link>
  );
}

export function SoraEyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("font-sora text-xs tracking-[0.3em] text-sora-clay-deep uppercase", className)}>{children}</p>;
}

type HeadingProps = { eyebrow: string; title: string; id?: string; lead?: string; center?: boolean; className?: string };

export function SoraHeading({ eyebrow, title, id, lead, center, className }: HeadingProps) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      <SoraEyebrow>{eyebrow}</SoraEyebrow>
      <h2 id={id} className="mt-5 font-sora-serif text-5xl leading-[1.05] font-normal sm:text-6xl">
        {title}
      </h2>
      {lead && <p className={cn("mt-6 max-w-xl text-lg leading-relaxed text-sora-muted", center && "mx-auto")}>{lead}</p>}
    </div>
  );
}

type ButtonProps = { href: string; children: ReactNode; variant?: "solid" | "outline" | "light"; className?: string };

export function SoraButton({ href, children, variant = "solid", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center rounded-full px-7 py-3.5 font-sora text-sm tracking-[0.12em] uppercase transition-colors duration-300",
        variant === "solid" && "bg-sora-espresso text-sora-shell hover:bg-sora-clay-deep",
        variant === "outline" && "border border-sora-espresso/30 hover:border-sora-espresso",
        variant === "light" && "bg-sora-shell text-sora-espresso hover:bg-sora-blush",
        className,
      )}
    >
      {children}
    </Link>
  );
}

type PageHeroProps = { eyebrow: string; title: string; lead?: string; children?: ReactNode };

export function SoraPageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className={cn(soraContainer, "pt-16 pb-14 text-center lg:pt-24 lg:pb-20")}>
      <SoraEyebrow>{eyebrow}</SoraEyebrow>
      <h1 className="mx-auto mt-6 max-w-4xl font-sora-serif text-6xl leading-[1] font-normal sm:text-7xl lg:text-8xl">{title}</h1>
      {lead && <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-sora-muted">{lead}</p>}
      {children}
    </section>
  );
}

export function SoraBookBand({ s }: { s: Sora }) {
  return (
    <section aria-labelledby="sora-book" className="bg-sora-espresso text-sora-shell">
      <div className={cn(soraContainer, "py-24 text-center lg:py-32")}>
        <p className="font-sora text-xs tracking-[0.3em] text-sora-blush/80 uppercase">{s.bookCta}</p>
        <h2 id="sora-book" className="mx-auto mt-6 max-w-3xl font-sora-serif text-5xl leading-[1.05] italic sm:text-7xl">
          {s.ui.bookBandTitle}
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <SoraButton href={s.paths.booking} variant="light">
            {s.bookCta}
          </SoraButton>
          <a
            href={s.phone.href}
            className="inline-flex items-center rounded-full border border-sora-shell/30 px-7 py-3.5 font-sora text-sm tracking-[0.12em] uppercase transition-colors hover:border-sora-shell"
          >
            {s.phone.label}
          </a>
        </div>
      </div>
    </section>
  );
}
