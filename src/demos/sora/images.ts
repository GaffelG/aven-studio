import brush from "../../../public/demos/sora/sora-brush.jpg";
import colour from "../../../public/demos/sora/sora-colour.jpg";
import curls from "../../../public/demos/sora/sora-curls.jpg";
import cut from "../../../public/demos/sora/sora-cut.jpg";
import hero from "../../../public/demos/sora/sora-hero.jpg";
import interior from "../../../public/demos/sora/sora-interior.jpg";
import products from "../../../public/demos/sora/sora-products.jpg";
import stations from "../../../public/demos/sora/sora-stations.jpg";
import stylists from "../../../public/demos/sora/sora-stylists.jpg";

/** Static imports give next/image dimensions and blur placeholders. Alt texts are per language in content.ts. Credits: src/demos/CREDITS.md. */
export const soraImages = {
  hero: { src: hero },
  interior: { src: interior },
  stations: { src: stations },
  products: { src: products },
  curls: { src: curls },
  stylists: { src: stylists },
  cut: { src: cut },
  colour: { src: colour },
  brush: { src: brush },
};

export type SoraImageKey = keyof typeof soraImages;
