import Link from "next/link";
import { ConceptPreview } from "@/components/work/ConceptPreview";
import { concepts, type ProjectId } from "@/content/projects";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";
import { localizedHref, pagePaths } from "@/lib/routes";

// Placement of each concept in the composition. The centre preview sits in front.
const layout: Record<ProjectId, { frame: string; motion: string }> = {
  automotive: {
    frame: "left-[-22%] top-[34%] w-[64%] sm:left-0 sm:top-[20%] sm:w-[44%] z-10",
    motion: "parallax-slow",
  },
  construction: {
    frame: "left-1/2 top-0 w-[92%] -translate-x-1/2 sm:w-[58%] z-20",
    motion: "",
  },
  salon: {
    frame: "right-[-22%] top-[30%] w-[64%] sm:right-0 sm:top-[8%] sm:w-[44%] z-10",
    motion: "parallax-fast",
  },
};

/** Overlapping concept previews under the hero copy. Decorative; the Work page holds the details. */
export async function HeroShowcase() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
  const t = dict.home.hero;

  return (
    <div className="mt-16 motion-safe:animate-rise sm:mt-20 lg:mt-24">
      <div className="relative mx-auto aspect-[16/12] max-w-6xl sm:aspect-[16/8]">
        {concepts.map((concept) => (
          <div key={concept.id} className={cn("absolute", layout[concept.id].frame)}>
            <div className={layout[concept.id].motion}>
              <ConceptPreview
                concept={concept}
                mock={dict.work.projects[concept.id].mock}
                label={dict.work.previewLabel}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs text-silver-deep sm:mt-10">
        <span>{t.showcaseLabel}</span>
        <Link
          href={localizedHref(locale, pagePaths.work)}
          className="text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink"
        >
          {t.showcaseLink} →
        </Link>
      </p>
    </div>
  );
}
