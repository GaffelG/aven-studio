import type { Metadata } from "next";
import { SoraBooking } from "@/components/demos/sora/SoraBooking";
import { SoraPageHero, soraContainer } from "@/components/demos/sora/SoraUi";
import { sora } from "@/demos/sora/content";

export const metadata: Metadata = { title: "Boka tid" };

const t = sora.booking;

export default function SoraBookingPage() {
  return (
    <>
      <SoraPageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <div className={`${soraContainer} pb-24 lg:pb-32`}>
        <SoraBooking />
      </div>
    </>
  );
}
