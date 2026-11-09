import type { Metadata } from "next";
import { BoAdmin } from "@/components/demos/bosvietdeli/BoAdmin";

export const metadata: Metadata = { title: "Team-Bereich — Entwurf" };

export default function BoAdminPage() {
  return <BoAdmin />;
}
