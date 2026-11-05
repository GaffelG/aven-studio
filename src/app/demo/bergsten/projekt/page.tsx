import type { Metadata } from "next";
import { BergstenCtaBand, BergstenPageHero, bergstenContainer } from "@/components/demos/bergsten/BergstenUi";
import { ProjectGrid } from "@/components/demos/bergsten/ProjectGrid";

export const metadata: Metadata = { title: "Projekt" };

export default function BergstenProjectsPage() {
  return (
    <>
      <BergstenPageHero
        eyebrow="Projekt"
        title="Hus vi har byggt, förnyat och byggt till"
        lead="Ett urval av våra uppdrag – från villor och fritidshus till renoveringar och påbyggnader för bostadsrättsföreningar."
      />
      <div className={`${bergstenContainer} py-16 lg:py-24`}>
        <ProjectGrid />
      </div>
      <BergstenCtaBand />
    </>
  );
}
