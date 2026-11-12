import type { DemoId } from "@/demos/shared/routing";
import type { Dictionary } from "@/i18n/get-dictionary";

/*
 * Fictional concept projects. Names and palettes belong to each concept,
 * not to the Aven Studio brand, so they are kept here as data.
 */
export type ProjectId = keyof Dictionary["work"]["projects"];

export type ConceptPalette = {
  background: string;
  surface: string;
  text: string;
  muted: string;
  accent: string;
};

export type Concept = {
  id: ProjectId;
  name: string;
  /** Screenshot file name in /public/work (without .png). */
  screenshot: string;
  /** The live demo site, once built. Its URL depends on the visitor's language (see demoBase). */
  demo?: DemoId;
  palette: ConceptPalette;
};

export const concepts: Concept[] = [
  {
    id: "automotive",
    name: "Ferrum Verkstad",
    demo: "ferrum",
    screenshot: "ferrum",
    palette: { background: "#15171a", surface: "#22262b", text: "#f1f0ec", muted: "#8a8f97", accent: "#e0612c" },
  },
  {
    id: "construction",
    name: "Bergsten Bygg",
    demo: "bergsten",
    screenshot: "bergsten",
    palette: { background: "#ebe6dc", surface: "#dbd2c2", text: "#1d2822", muted: "#6c675d", accent: "#2f5c45" },
  },
  {
    id: "salon",
    name: "Salong Sora",
    demo: "sora",
    screenshot: "sora",
    palette: { background: "#f4ece5", surface: "#e7d7ca", text: "#2c221e", muted: "#8b7b71", accent: "#ad785c" },
  },
];
