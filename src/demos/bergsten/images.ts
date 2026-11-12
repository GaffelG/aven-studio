import aerial from "../../../public/demos/bergsten/bergsten-aerial.jpg";
import cabin from "../../../public/demos/bergsten/bergsten-cabin.jpg";
import craft from "../../../public/demos/bergsten/bergsten-craft.jpg";
import hero from "../../../public/demos/bergsten/bergsten-hero.jpg";
import kitchen from "../../../public/demos/bergsten/bergsten-kitchen.jpg";
import saw from "../../../public/demos/bergsten/bergsten-saw.jpg";
import villa from "../../../public/demos/bergsten/bergsten-villa.jpg";
import workerFrame from "../../../public/demos/bergsten/bergsten-worker-frame.jpg";

/** Static imports give next/image dimensions and blur placeholders. Alt texts are per language in content.ts. Credits: src/demos/CREDITS.md. */
export const bergstenImages = {
  hero: { src: hero },
  workerFrame: { src: workerFrame },
  craft: { src: craft },
  saw: { src: saw },
  kitchen: { src: kitchen },
  aerial: { src: aerial },
  villa: { src: villa },
  cabin: { src: cabin },
};

export type BergstenImageKey = keyof typeof bergstenImages;
