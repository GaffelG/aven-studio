import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { projectHref, type Bergsten, type BergstenProject } from "@/demos/bergsten/content";
import { bergstenImages } from "@/demos/bergsten/images";
import { cn } from "@/lib/cn";

/**
 * Shared building blocks for the Bergsten Bygg demo. Used from both Server and Client Components,
 * so anything language-dependent takes the content object `b` as a prop instead of looking it up.
 */

export const bergstenContainer = "mx-auto max-w-site px-5 sm:px-8 lg:px-10";

export function BergstenLogo({ b, tone = "dark", className }: { b: Bergsten; tone?: "dark" | "light"; className?: string }) {
  return (
    <Link href={b.paths.home} aria-label={`${b.name} – ${b.ui.home}`} className={cn("flex w-fit items-center gap-3", className)}>
      <svg aria-hidden viewBox="0 0 32 32" className={cn("size-8", tone === "dark" ? "text-bergsten-green" : "text-bergsten-green-light")}>
        <path d="M2 30V14L16 3l14 11v16h-9v-9h-10v9H2Z" fill="currentColor" />
      </svg>
      <span className="font-bergsten text-base leading-none font-semibold tracking-[0.1em] uppercase sm:text-lg sm:tracking-[0.12em]">
        Bergsten
        <span className={cn("ml-1.5 font-normal tracking-[0.14em] sm:ml-2 sm:tracking-[0.2em]", tone === "dark" ? "text-bergsten-muted" : "text-bergsten-paper/60")}>
          Bygg
        </span>
      </span>
    </Link>
  );
}

export function BergstenEyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-bergsten text-xs font-medium tracking-[0.24em] text-bergsten-green uppercase", className)}>{children}</p>
  );
}

type HeadingProps = { eyebrow: string; title: string; id?: string; lead?: string; className?: string };

export function BergstenHeading({ eyebrow, title, id, lead, className }: HeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <BergstenEyebrow>{eyebrow}</BergstenEyebrow>
      <h2 id={id} className="mt-5 font-bergsten text-4xl leading-[1.05] font-semibold tracking-[-0.02em] sm:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bergsten-muted">{lead}</p>}
    </div>
  );
}

type ButtonProps = { href: string; children: ReactNode; variant?: "primary" | "outline" | "light"; className?: string };

export function BergstenButton({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 px-6 py-3.5 font-bergsten text-sm font-medium tracking-[0.08em] uppercase transition-colors duration-300",
        variant === "primary" && "bg-bergsten-green text-bergsten-paper hover:bg-bergsten-ink",
        variant === "outline" && "border border-bergsten-ink/30 hover:border-bergsten-ink",
        variant === "light" && "bg-bergsten-paper text-bergsten-ink hover:bg-bergsten-sand",
        className,
      )}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

type ProjectCardProps = { b: Bergsten; project: BergstenProject; priority?: boolean; sizes: string };

export function ProjectCard({ b, project, priority, sizes }: ProjectCardProps) {
  const image = bergstenImages[project.image];
  return (
    <Link href={projectHref(b, project.slug)} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-bergsten-stone">
        <Image
          src={image.src}
          alt={b.imageAlt[project.image]}
          placeholder="blur"
          priority={priority}
          sizes={sizes}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.04]"
        />
        {project.status === "ongoing" && (
          <span className="absolute top-4 left-4 bg-bergsten-paper/95 px-3 py-1 font-bergsten text-[0.6875rem] font-medium tracking-[0.16em] uppercase">
            {b.labels.status[project.status]}
          </span>
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="font-bergsten text-xs tracking-[0.18em] text-bergsten-muted uppercase">
            {b.labels.categories[project.category]} · {project.year}
          </p>
          <h3 className="mt-2 font-bergsten text-2xl font-semibold tracking-[-0.01em]">{project.name}</h3>
          <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-bergsten-muted">{project.summary}</p>
        </div>
        <span aria-hidden className="mt-1 text-xl text-bergsten-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-bergsten-green">
          →
        </span>
      </div>
    </Link>
  );
}

export function BergstenCtaBand({ b }: { b: Bergsten }) {
  const t = b.ctaBand;
  return (
    <section aria-labelledby="bergsten-cta" className="bg-bergsten-green text-bergsten-paper">
      <div className={cn(bergstenContainer, "flex flex-col gap-10 py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24")}>
        <div className="max-w-2xl">
          <h2 id="bergsten-cta" className="font-bergsten text-4xl leading-[1.05] font-semibold tracking-[-0.02em] sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-5 text-lg text-bergsten-paper/75">{t.text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <BergstenButton href={b.paths.quote} variant="light">
            {b.quoteCta}
          </BergstenButton>
          <a
            href={b.phone.href}
            className="inline-flex items-center border border-bergsten-paper/40 px-6 py-3.5 font-bergsten text-sm font-medium tracking-[0.08em] uppercase transition-colors hover:border-bergsten-paper"
          >
            {b.phone.label}
          </a>
        </div>
      </div>
    </section>
  );
}

type PageHeroProps = { eyebrow: string; title: string; lead?: string; children?: ReactNode };

export function BergstenPageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="border-b border-bergsten-line">
      <div className={cn(bergstenContainer, "pt-16 pb-16 lg:pt-24 lg:pb-20")}>
        <BergstenEyebrow>{eyebrow}</BergstenEyebrow>
        <h1 className="mt-6 max-w-4xl font-bergsten text-5xl leading-[1.02] font-semibold tracking-[-0.03em] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {lead && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bergsten-muted">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
