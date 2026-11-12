"use client";

import Link from "next/link";
import { useFerrum } from "./useFerrum";

/** Wordmark: an accent square followed by the condensed name. */
export function FerrumLogo() {
  const ferrum = useFerrum();
  return (
    <Link href={ferrum.paths.home} aria-label={`${ferrum.name} – ${ferrum.ui.home}`} className="flex items-center gap-2.5">
      <span aria-hidden className="grid size-7 place-items-center bg-ferrum-accent font-ferrum text-lg font-bold text-ferrum-ink">
        F
      </span>
      <span className="font-ferrum text-2xl leading-none font-bold tracking-wide uppercase">
        Ferrum<span className="ml-1.5 font-medium text-ferrum-muted">Verkstad</span>
      </span>
    </Link>
  );
}
