import brush from "../../../public/demos/sora/sora-brush.jpg";
import colour from "../../../public/demos/sora/sora-colour.jpg";
import curls from "../../../public/demos/sora/sora-curls.jpg";
import cut from "../../../public/demos/sora/sora-cut.jpg";
import hero from "../../../public/demos/sora/sora-hero.jpg";
import interior from "../../../public/demos/sora/sora-interior.jpg";
import products from "../../../public/demos/sora/sora-products.jpg";
import stations from "../../../public/demos/sora/sora-stations.jpg";
import stylists from "../../../public/demos/sora/sora-stylists.jpg";

/** Static imports give next/image dimensions and blur placeholders. Credits: src/demos/CREDITS.md. */
export const soraImages = {
  hero: { src: hero, alt: "Kvinna vid salongens receptionsdisk i varma, ljusa toner" },
  interior: { src: interior, alt: "Ljus salong med välvd öppning och hyllor med hårprodukter" },
  stations: { src: stations, alt: "Frisörplatser med speglar och stolar i beige" },
  products: { src: products, alt: "Pumpflaskor med schampo och balsam mot en vägg av träribbor" },
  curls: { src: curls, alt: "Frisör som formar lockar med locktång" },
  stylists: { src: stylists, alt: "Två frisörer som arbetar med en kunds hår" },
  cut: { src: cut, alt: "Frisör som klipper vått hår med sax" },
  colour: { src: colour, alt: "Frisör som färgar hår med folieslingor" },
  brush: { src: brush, alt: "Rundborste som formar långt blont hår" },
};

export type SoraImageKey = keyof typeof soraImages;
