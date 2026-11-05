import type { Metadata } from "next";
import { BergstenEyebrow, bergstenContainer } from "@/components/demos/bergsten/BergstenUi";
import { QuoteForm } from "@/components/demos/bergsten/QuoteForm";
import { bergsten } from "@/demos/bergsten/content";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Begär offert" };

const t = bergsten.quote;

export default function BergstenQuotePage() {
  return (
    <div className={cn(bergstenContainer, "grid gap-14 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24")}>
      <div className="lg:col-span-4">
        <BergstenEyebrow>{t.eyebrow}</BergstenEyebrow>
        <h1 className="mt-6 font-bergsten text-5xl leading-[1.02] font-semibold tracking-[-0.03em] sm:text-6xl">{t.title}</h1>
        <p className="mt-8 text-lg leading-relaxed text-bergsten-muted">{t.lead}</p>

        <h2 className="mt-14 font-bergsten text-xl font-semibold">{t.nextTitle}</h2>
        <ol className="mt-5 border-t border-bergsten-line">
          {t.next.map((step, i) => (
            <li key={step} className="grid grid-cols-[2.5rem_1fr] border-b border-bergsten-line py-4 text-[0.9375rem]">
              <span className="font-bergsten text-sm text-bergsten-green">{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>

        <div className="mt-10 text-[0.9375rem] leading-relaxed">
          <p className="text-bergsten-muted">Hellre prata direkt?</p>
          <a href={bergsten.phone.href} className="block font-bergsten text-2xl font-semibold hover:text-bergsten-green">
            {bergsten.phone.label}
          </a>
          <a href={`mailto:${bergsten.email}`} className="text-bergsten-muted underline-offset-4 hover:underline">
            {bergsten.email}
          </a>
        </div>
      </div>

      <div className="lg:col-span-7 lg:col-start-6">
        <QuoteForm />
      </div>
    </div>
  );
}
