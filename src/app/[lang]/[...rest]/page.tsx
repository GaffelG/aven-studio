import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";

// Catches unknown paths under a locale so the 404 renders with a localized title.

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.notFound.heading, robots: { index: false } };
}

export default function CatchAll() {
  notFound();
}
