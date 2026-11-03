import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse";
type Size = "sm" | "md";

const base =
  "group inline-flex items-center justify-center gap-3 rounded-[3px] font-medium whitespace-nowrap transition-colors duration-300 ease-out-soft disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-ink-soft",
  secondary: "border border-ink/20 text-ink hover:border-ink",
  inverse: "bg-paper text-ink hover:bg-sage",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.9375rem]",
};

type StyleProps = { variant?: Variant; size?: Size; arrow?: boolean; children: ReactNode };

type ButtonProps =
  | (StyleProps & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "children">)
  | (StyleProps & { href?: undefined } & Omit<ComponentProps<"button">, "children">);

function Arrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-300 ease-out-soft group-hover:translate-x-1"
    >
      →
    </span>
  );
}

/** Renders a Next.js Link when given `href`, otherwise a native button. */
export function Button({ variant = "primary", size = "md", arrow, className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (props.href !== undefined) {
    return (
      <Link className={classes} {...props}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ComponentProps<"button">;
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
