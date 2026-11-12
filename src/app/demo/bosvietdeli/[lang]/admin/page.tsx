import type { Metadata } from "next";
import { BoAdmin } from "@/components/demos/bosvietdeli/BoAdmin";
import { getBo } from "@/demos/bosvietdeli/server";

export async function generateMetadata(): Promise<Metadata> {
  return { title: { absolute: (await getBo()).meta.adminTitle } };
}

export default function BoAdminPage() {
  return <BoAdmin />;
}
