import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Small uppercase label placed above headings. */
export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-xs font-medium tracking-[0.18em] text-sage-deep uppercase sm:text-sm", className)}
      {...props}
    />
  );
}
