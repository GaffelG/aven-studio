import Link from "next/link";
import { ferrum } from "@/demos/ferrum/content";

/** Wordmark: an accent square followed by the condensed name. */
export function FerrumLogo() {
  return (
    <Link href={ferrum.basePath} aria-label={`${ferrum.name} – startsida`} className="flex items-center gap-2.5">
      <span aria-hidden className="grid size-7 place-items-center bg-ferrum-accent font-ferrum text-lg font-bold text-ferrum-ink">
        F
      </span>
      <span className="font-ferrum text-2xl leading-none font-bold tracking-wide uppercase">
        Ferrum<span className="ml-1.5 font-medium text-ferrum-muted">Verkstad</span>
      </span>
    </Link>
  );
}
