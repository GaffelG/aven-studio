import Link from "next/link";

type Props = { label: string; body: string; back: string; backHref: string };

/** Aven-branded strip above every demo site, making clear the business is fictional. */
export function DemoBanner({ label, body, back, backHref }: Props) {
  return (
    <aside className="bg-paper font-sans text-ink">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2.5 text-xs sm:px-8 lg:px-10">
        <p>
          <strong className="font-semibold">{label}.</strong> <span className="text-ink/65">{body}</span>
        </p>
        <Link href={backHref} className="underline decoration-ink/25 underline-offset-4 hover:decoration-ink">
          ← {back}
        </Link>
      </div>
    </aside>
  );
}
