import type { Metadata } from "next";
import { BookingFlow } from "@/components/demos/ferrum/BookingFlow";
import { FerrumPageHero } from "@/components/demos/ferrum/FerrumPageHero";
import { ferrum } from "@/demos/ferrum/content";

export const metadata: Metadata = { title: "Boka tid" };

const t = ferrum.booking.page;

export default function FerrumBookingPage() {
  return (
    <>
      <FerrumPageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <BookingFlow />
      </div>
    </>
  );
}
