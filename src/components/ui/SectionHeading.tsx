import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow: string;
  title: string;
  action?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** Eyebrow + h2, with an optional action aligned to the right on wide screens. */
export function SectionHeading({ eyebrow, title, action, tone = "light", className }: Props) {
  return (
    <div className={cn("flex flex-col gap-8 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-3xl">
        <Eyebrow className={tone === "dark" ? "text-sage" : undefined}>{eyebrow}</Eyebrow>
        <h2 className="mt-5 text-display-lg">{title}</h2>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
