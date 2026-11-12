import type { Metadata } from "next";
import { SoraBooking } from "@/components/demos/sora/SoraBooking";
import { SoraPageHero, soraContainer } from "@/components/demos/sora/SoraUi";
import { getSora } from "@/demos/sora/server";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getSora()).meta.pages.booking };
}

export default async function SoraBookingPage() {
  const sora = await getSora();
  const t = sora.booking;
  return (
    <>
      <SoraPageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <div className={`${soraContainer} pb-24 lg:pb-32`}>
        <SoraBooking />
      </div>
    </>
  );
}
