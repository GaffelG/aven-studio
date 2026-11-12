import type { Metadata } from "next";
import { BookingFlow } from "@/components/demos/ferrum/BookingFlow";
import { FerrumPageHero } from "@/components/demos/ferrum/FerrumPageHero";
import { getFerrum } from "@/demos/ferrum/server";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getFerrum()).meta.pages.booking };
}


export default async function FerrumBookingPage() {

  const ferrum = await getFerrum();
  const t = ferrum.booking.page;
  return (
    <>
      <FerrumPageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <BookingFlow />
      </div>
    </>
  );
}
