import type { Metadata } from "next";
import Image from "next/image";
import { SoraBookBand, SoraPageHero, soraContainer } from "@/components/demos/sora/SoraUi";
import { Reveal } from "@/components/ui/Reveal";
import { getSora } from "@/demos/sora/server";
import { soraImages } from "@/demos/sora/images";
import { cn } from "@/lib/cn";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getSora()).meta.pages.inspiration };
}

// Alternating tall and wide tiles give the gallery an editorial rhythm.
const shapes = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]", "aspect-square", "aspect-[4/5]"];

export default async function SoraGalleryPage() {
  const sora = await getSora();
  const t = sora.gallery;

  return (
    <>
      <SoraPageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <div className={cn(soraContainer, "pb-24 lg:pb-32")}>
        <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
          {t.items.map((key, i) => {
            const image = soraImages[key];
            return (
              <li key={key} className="break-inside-avoid">
                <Reveal delay={(i % 3) * 80}>
                  <figure className={cn("relative overflow-hidden bg-sora-blush", shapes[i % shapes.length])}>
                    <Image
                      src={image.src}
                      alt={sora.imageAlt[key]}
                      placeholder="blur"
                      priority={i < 3}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out-soft hover:scale-[1.03]"
                    />
                  </figure>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
      <SoraBookBand s={sora} />
    </>
  );
}
