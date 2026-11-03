import { Hero } from "@/components/sections/home/Hero";
import { Principles } from "@/components/sections/home/Principles";
import { Process } from "@/components/sections/home/Process";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { Statement } from "@/components/sections/home/Statement";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <Statement />
      <ServicesOverview />
      <Principles />
      <Process />
    </>
  );
}
