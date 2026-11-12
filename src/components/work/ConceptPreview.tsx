import Image from "next/image";
import type { Concept } from "@/content/projects";
import { getLocale } from "@/i18n/get-dictionary";

type Props = { concept: Concept; label: string; priority?: boolean };

/**
 * A browser-framed screenshot of the concept's live demo (first screen at 1440×900).
 * Screenshots live in /public/work, one per language (<name>.png for Swedish, <name>-en.png for English),
 * and include the 36px demo banner, which object-bottom crops away.
 * Re-capture them whenever a demo's first screen changes.
 */
export async function ConceptPreview({ concept, label, priority }: Props) {
  const locale = await getLocale();
  const suffix = locale === "sv" ? "" : `-${locale}`;
  return (
    <figure className="@container overflow-hidden rounded-md bg-paper-dim shadow-[0_1px_0_rgba(17,19,24,0.04),0_30px_60px_-30px_rgba(17,19,24,0.35)] ring-1 ring-ink/8">
      {/* Browser chrome */}
      <div aria-hidden className="flex items-center gap-[1.2cqi] border-b border-ink/8 px-[2.4cqi] py-[1.6cqi]">
        {[0, 1, 2].map((dot) => (
          <span key={dot} className="size-[1.1cqi] rounded-full bg-ink/15" />
        ))}
        <span className="ml-[2cqi] h-[2.6cqi] w-[34cqi] rounded-full bg-ink/6" />
      </div>

      <div className="relative aspect-[16/10] overflow-hidden" style={{ backgroundColor: concept.palette.background }}>
        <Image
          src={`/work/${concept.screenshot}${suffix}.png`}
          alt={`${label}: ${concept.name}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-bottom"
        />
      </div>
    </figure>
  );
}
