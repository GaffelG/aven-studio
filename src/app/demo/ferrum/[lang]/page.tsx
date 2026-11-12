import { FerrumBooking } from "@/components/demos/ferrum/sections/FerrumBooking";
import { FerrumContact } from "@/components/demos/ferrum/sections/FerrumContact";
import { FerrumHero } from "@/components/demos/ferrum/sections/FerrumHero";
import { FerrumPrices } from "@/components/demos/ferrum/sections/FerrumPrices";
import { FerrumReasons } from "@/components/demos/ferrum/sections/FerrumReasons";
import { FerrumReviews } from "@/components/demos/ferrum/sections/FerrumReviews";
import { FerrumServices } from "@/components/demos/ferrum/sections/FerrumServices";

export default function FerrumHome() {
  return (
    <>
      <FerrumHero />
      <FerrumServices />
      <FerrumPrices />
      <FerrumReasons />
      <FerrumReviews />
      <FerrumBooking />
      <FerrumContact />
    </>
  );
}
