import { cn } from "@/lib/cn";

type Props = { eyebrow: string; title: string; id?: string; tone?: "dark" | "light"; className?: string };

/** Section heading: orange rule + eyebrow, then a large condensed uppercase title. */
export function FerrumHeading({ eyebrow, title, id, tone = "dark", className }: Props) {
  return (
    <div className={className}>
      <p
        className={cn(
          "flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase",
          tone === "dark" ? "text-ferrum-accent" : "text-ferrum-accent-deep",
        )}
      >
        <span aria-hidden className="h-0.5 w-8 bg-current" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-5 font-ferrum text-5xl leading-[0.9] font-bold uppercase sm:text-6xl lg:text-7xl">
        {title}
      </h2>
    </div>
  );
}
