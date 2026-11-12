import type { Metadata } from "next";
import { BergstenCtaBand, BergstenPageHero, bergstenContainer } from "@/components/demos/bergsten/BergstenUi";
import { ProjectGrid } from "@/components/demos/bergsten/ProjectGrid";
import { getBergsten } from "@/demos/bergsten/server";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getBergsten()).meta.pages.projects };
}

export default async function BergstenProjectsPage() {

  const bergsten = await getBergsten();
  return (
    <>
      <BergstenPageHero eyebrow={bergsten.projectsPage.eyebrow} title={bergsten.projectsPage.title} lead={bergsten.projectsPage.lead} />
      <div className={`${bergstenContainer} py-16 lg:py-24`}>
        <ProjectGrid />
      </div>
      <BergstenCtaBand b={bergsten} />
    </>
  );
}
