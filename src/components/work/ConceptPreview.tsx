import type { CSSProperties } from "react";
import type { Concept } from "@/content/projects";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";

type Mock = Dictionary["work"]["projects"][Concept["id"]]["mock"];

type Props = { concept: Concept; mock: Mock; label: string };

/**
 * A stylised, coded mock-up of the concept site's first screen.
 * Sizes use container query units so the preview scales as one piece.
 */
export function ConceptPreview({ concept, mock, label }: Props) {
  const { palette } = concept;
  const vars = {
    "--c-bg": palette.background,
    "--c-surface": palette.surface,
    "--c-text": palette.text,
    "--c-muted": palette.muted,
    "--c-accent": palette.accent,
  } as CSSProperties;

  return (
    <figure
      aria-label={`${label}: ${concept.name}`}
      className="@container overflow-hidden rounded-md bg-paper-dim shadow-[0_1px_0_rgba(17,19,24,0.04),0_30px_60px_-30px_rgba(17,19,24,0.35)] ring-1 ring-ink/8"
    >
      {/* Browser chrome */}
      <div aria-hidden className="flex items-center gap-[1.2cqi] border-b border-ink/8 px-[2.4cqi] py-[1.6cqi]">
        {[0, 1, 2].map((dot) => (
          <span key={dot} className="size-[1.1cqi] rounded-full bg-ink/15" />
        ))}
        <span className="ml-[2cqi] h-[2.6cqi] w-[34cqi] rounded-full bg-ink/6" />
      </div>

      <div
        aria-hidden
        style={vars}
        className={cn(
          "relative aspect-[16/10] overflow-hidden bg-[var(--c-bg)] text-[var(--c-text)]",
          concept.typeface === "serif" ? "font-serif" : "font-display",
        )}
      >
        {/* Site navigation */}
        <div className="relative z-10 flex items-center justify-between px-[5cqi] pt-[4cqi] text-[1.7cqi]">
          <span className="font-semibold tracking-tight">{concept.name}</span>
          <span className="flex gap-[3cqi] text-[var(--c-muted)]">
            {mock.nav.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </span>
        </div>

        {concept.id === "automotive" && <Automotive mock={mock} />}
        {concept.id === "construction" && <Construction mock={mock} />}
        {concept.id === "salon" && <Salon mock={mock} />}
      </div>
    </figure>
  );
}

function Cta({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn("inline-block bg-[var(--c-accent)] px-[2.6cqi] py-[1.3cqi] text-[1.6cqi] font-medium", className)}
    >
      {children}
    </span>
  );
}

function Automotive({ mock }: { mock: Mock }) {
  return (
    <>
      <div className="absolute inset-y-0 right-0 w-[42%] bg-[var(--c-surface)]">
        <div className="absolute inset-x-0 top-0 h-[1.2cqi] bg-[var(--c-accent)]" />
        <div className="flex h-full flex-col justify-center gap-[1.6cqi] px-[4cqi]">
          {mock.items.map((item, i) => (
            <div key={item} className="flex items-center justify-between border-b border-white/10 pb-[1.6cqi] text-[2cqi]">
              <span>{item}</span>
              <span className="text-[var(--c-accent)] tabular-nums">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[9cqi] left-[5cqi] w-[48%]">
        <p className="text-[5.6cqi] leading-[0.95] font-bold tracking-[-0.04em] uppercase">{mock.headline}</p>
        <Cta className="mt-[3cqi] text-[var(--c-bg)]">{mock.cta}</Cta>
      </div>
    </>
  );
}

function Construction({ mock }: { mock: Mock }) {
  return (
    <>
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, var(--c-text) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--c-text) 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "8cqi 8cqi",
        }}
      />
      <div className="absolute top-[14cqi] right-[5cqi] grid w-[38%] grid-cols-3 gap-[1cqi]">
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            className={cn("aspect-square", i === 4 ? "bg-[var(--c-accent)]" : i % 2 ? "bg-[var(--c-surface)]" : "bg-[var(--c-text)]/85")}
          />
        ))}
      </div>
      <div className="absolute bottom-[7cqi] left-[5cqi] w-[50%]">
        <p className="text-[5.2cqi] leading-[1] font-semibold tracking-[-0.035em]">{mock.headline}</p>
        <div className="mt-[2.4cqi] flex gap-[2cqi] text-[1.5cqi] text-[var(--c-muted)]">
          {mock.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <Cta className="mt-[3cqi] text-[var(--c-bg)]">{mock.cta}</Cta>
      </div>
    </>
  );
}

function Salon({ mock }: { mock: Mock }) {
  return (
    <>
      <div className="absolute right-[7cqi] bottom-0 h-[78%] w-[32%] rounded-t-full bg-[var(--c-surface)]">
        <div className="absolute top-[18%] left-1/2 size-[9cqi] -translate-x-1/2 rounded-full bg-[var(--c-accent)]/70" />
      </div>
      <div className="absolute top-1/2 left-[5cqi] w-[52%] -translate-y-1/2">
        <p className="text-[1.5cqi] tracking-[0.3em] text-[var(--c-muted)] uppercase">{mock.items.join(" · ")}</p>
        <p className="mt-[2cqi] text-[7cqi] leading-[1] font-normal italic tracking-[-0.02em]">{mock.headline}</p>
        <Cta className="mt-[3.4cqi] rounded-full text-[var(--c-bg)]">{mock.cta}</Cta>
      </div>
    </>
  );
}
