import aerial from "../../../public/demos/bergsten/bergsten-aerial.jpg";
import cabin from "../../../public/demos/bergsten/bergsten-cabin.jpg";
import craft from "../../../public/demos/bergsten/bergsten-craft.jpg";
import hero from "../../../public/demos/bergsten/bergsten-hero.jpg";
import kitchen from "../../../public/demos/bergsten/bergsten-kitchen.jpg";
import saw from "../../../public/demos/bergsten/bergsten-saw.jpg";
import villa from "../../../public/demos/bergsten/bergsten-villa.jpg";
import workerFrame from "../../../public/demos/bergsten/bergsten-worker-frame.jpg";

/** Static imports give next/image dimensions and blur placeholders. Credits: src/demos/CREDITS.md. */
export const bergstenImages = {
  hero: { src: hero, alt: "Trästomme med byggställning mot blå himmel" },
  workerFrame: { src: workerFrame, alt: "Snickare i hjälm arbetar högt upp på en trästomme" },
  craft: { src: craft, alt: "Händer som märker upp en träbräda med blyerts" },
  saw: { src: saw, alt: "Byggarbetare i hjälm och skyddsutrustning vid en såg" },
  kitchen: { src: kitchen, alt: "Nyrenoverat kök med grå luckor och marmorbänk" },
  aerial: { src: aerial, alt: "Husstomme i trä fotograferad ovanifrån" },
  villa: { src: villa, alt: "Svart trävilla med vita fönster på en äng" },
  cabin: { src: cabin, alt: "Fritidshus med brant sadeltak omgivet av skog" },
};

export type BergstenImageKey = keyof typeof bergstenImages;
