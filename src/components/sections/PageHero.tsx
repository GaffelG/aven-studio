import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Extra content beneath the lead, e.g. a notice or actions. */
  children?: ReactNode;
  className?: string;
};

/** Opening block shared by all inner pages. */
export function PageHero({ eyebrow, title, lead, children, className }: Props) {
  return (
    <section className={cn("border-b border-ink/8", className)}>
      <Container className="pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-8 max-w-[18ch] text-display-xl">{title}</h1>
        {lead && (
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 motion-safe:animate-rise lg:mt-10">{lead}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
