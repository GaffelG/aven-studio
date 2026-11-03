import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = { href: string; label: string; className?: string };

/** Text wordmark. Replace with an SVG mark once the final logo exists. */
export function Logo({ href, label, className }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn("font-display text-lg tracking-[-0.02em] sm:text-xl", className)}
    >
      <span className="font-bold">Aven</span> <span className="font-normal opacity-55">Studio</span>
    </Link>
  );
}
