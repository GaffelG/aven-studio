import { Hero } from "@/components/sections/home/Hero";
import { Principles } from "@/components/sections/home/Principles";
import { Process } from "@/components/sections/home/Process";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { Statement } from "@/components/sections/home/Statement";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <ServicesOverview />
      <Principles />
      <Process />
    </>
  );
}
