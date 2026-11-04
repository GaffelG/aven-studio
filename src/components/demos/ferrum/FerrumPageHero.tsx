import type { ReactNode } from "react";

type Props = { eyebrow: string; title: string; lead?: string; children?: ReactNode };

/** Opening block for Ferrum subpages, ending in the hazard stripe like the start page hero. */
export function FerrumPageHero({ eyebrow, title, lead, children }: Props) {
  return (
    <section>
      <div className="mx-auto max-w-site px-5 pt-14 pb-16 sm:px-8 lg:px-10 lg:pt-20 lg:pb-20">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-ferrum-accent uppercase">
          <span aria-hidden className="h-0.5 w-8 bg-current" />
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-5xl font-ferrum text-[clamp(3.25rem,8vw,7rem)] leading-[0.88] font-bold uppercase">
          {title}
          <span className="text-ferrum-accent">.</span>
        </h1>
        {lead && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ferrum-text/75">{lead}</p>}
        {children}
      </div>
      <div
        aria-hidden
        className="h-2 bg-[repeating-linear-gradient(-45deg,var(--color-ferrum-accent)_0_14px,var(--color-ferrum-ink)_14px_28px)]"
      />
    </section>
  );
}
