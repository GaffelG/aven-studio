import type { Metadata } from "next";
import Link from "next/link";
import { FerrumPageHero } from "@/components/demos/ferrum/FerrumPageHero";
import { QuestionForm } from "@/components/demos/ferrum/QuestionForm";
import { FerrumContact } from "@/components/demos/ferrum/sections/FerrumContact";
import { getFerrum } from "@/demos/ferrum/server";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getFerrum()).meta.pages.contact };
}


export default async function FerrumContactPage() {

  const ferrum = await getFerrum();
  const ferrumPaths = ferrum.paths;
  const t = ferrum.contact.page;
  return (
    <>
      <FerrumPageHero eyebrow={ferrum.contact.eyebrow} title={t.title} lead={t.lead}>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={ferrumPaths.booking}
            className="inline-flex items-center gap-3 bg-ferrum-accent px-7 py-4 font-ferrum text-xl font-bold tracking-wide text-ferrum-ink uppercase transition-colors hover:bg-ferrum-text"
          >
            {ferrum.hero.primaryCta} <span aria-hidden>→</span>
          </Link>
          <a
            href={ferrum.phone.href}
            className="inline-flex items-center border border-ferrum-text/25 px-7 py-4 font-ferrum text-xl font-bold tracking-wide uppercase transition-colors hover:border-ferrum-text"
          >
            {ferrum.phone.label}
          </a>
        </div>
      </FerrumPageHero>

      <FerrumContact />

      <section aria-label={ferrum.contact.form.title} className="border-t border-ferrum-line">
        <div className="mx-auto max-w-site px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <QuestionForm />
          </div>
        </div>
      </section>
    </>
  );
}
