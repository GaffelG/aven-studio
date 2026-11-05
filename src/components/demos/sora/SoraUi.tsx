import Link from "next/link";
import type { ReactNode } from "react";
import { sora, soraPaths } from "@/demos/sora/content";
import { cn } from "@/lib/cn";

/** Shared building blocks for the Salong Sora demo. */

export const soraContainer = "mx-auto max-w-site px-5 sm:px-8 lg:px-10";

export function SoraLogo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href={soraPaths.home} aria-label={`${sora.name} – startsida`} className="flex w-fit items-baseline gap-2">
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

export function SoraBookBand() {
  return (
    <section aria-labelledby="sora-book" className="bg-sora-espresso text-sora-shell">
      <div className={cn(soraContainer, "py-24 text-center lg:py-32")}>
        <p className="font-sora text-xs tracking-[0.3em] text-sora-blush/80 uppercase">{sora.bookCta}</p>
        <h2 id="sora-book" className="mx-auto mt-6 max-w-3xl font-sora-serif text-5xl leading-[1.05] italic sm:text-7xl">
          Unna dig en stund för dig själv.
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <SoraButton href={soraPaths.booking} variant="light">
            {sora.bookCta}
          </SoraButton>
          <a
            href={sora.phone.href}
            className="inline-flex items-center rounded-full border border-sora-shell/30 px-7 py-3.5 font-sora text-sm tracking-[0.12em] uppercase transition-colors hover:border-sora-shell"
          >
            {sora.phone.label}
          </a>
        </div>
      </div>
    </section>
  );
}
