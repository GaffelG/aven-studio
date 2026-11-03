import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Centers content at the site width with responsive side gutters. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-site px-5 sm:px-8 lg:px-10", className)} {...props} />;
}
