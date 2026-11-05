import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BergstenCtaBand, BergstenEyebrow, ProjectCard, bergstenContainer } from "@/components/demos/bergsten/BergstenUi";
import { bergsten, bergstenPaths } from "@/demos/bergsten/content";
import { bergstenImages } from "@/demos/bergsten/images";
import { cn } from "@/lib/cn";

const findProject = (slug: string) => bergsten.projects.find((p) => p.slug === slug);

export function generateStaticParams() {
  return bergsten.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/demo/bergsten/projekt/[slug]">): Promise<Metadata> {
  const project = findProject((await params).slug);
  return project ? { title: project.name, description: project.summary } : {};
}

export default async function BergstenProjectPage({ params }: PageProps<"/demo/bergsten/projekt/[slug]">) {
  const project = findProject((await params).slug);
  if (!project) notFound();

  const image = bergstenImages[project.image];
  const others = bergsten.projects.filter((p) => p.slug !== project.slug).slice(0, 2);
  const facts = [
    { label: "Typ", value: project.category },
    { label: "Ort", value: project.location },
    { label: "År", value: project.year },
    { label: "Storlek", value: project.size },
    { label: "Byggtid", value: project.duration },
    { label: "Status", value: project.status },
  ];

  return (
    <>
      <article aria-labelledby="project-title">
        <header className={cn(bergstenContainer, "pt-12 pb-12 lg:pt-16")}>
          <Link
            href={bergstenPaths.projects}
            className="font-bergsten text-sm tracking-[0.08em] text-bergsten-muted uppercase hover:text-bergsten-green"
          >
            ← Alla projekt
          </Link>
          <BergstenEyebrow className="mt-10">{project.category}</BergstenEyebrow>
          <h1
            id="project-title"
            className="mt-5 max-w-4xl font-bergsten text-5xl leading-[1.02] font-semibold tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-bergsten-muted">{project.summary}</p>
        </header>

        <div className="relative aspect-[16/9] max-h-[80vh] w-full overflow-hidden bg-bergsten-stone lg:aspect-[21/9]">
          <Image src={image.src} alt={image.alt} placeholder="blur" priority fill sizes="100vw" className="object-cover" />
        </div>

        <div className={cn(bergstenContainer, "grid gap-14 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28")}>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 self-start border-t border-bergsten-line pt-6 lg:col-span-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-bergsten text-xs tracking-[0.18em] text-bergsten-muted uppercase">{fact.label}</dt>
                <dd className="mt-1.5 font-bergsten text-lg font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 text-lg leading-relaxed">
              {project.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <h2 className="mt-14 font-bergsten text-xs font-medium tracking-[0.2em] text-bergsten-green uppercase">Vi utförde</h2>
            <ul className="mt-5 grid gap-px bg-bergsten-line sm:grid-cols-2">
              {project.scope.map((line) => (
                <li key={line} className="flex gap-3 bg-bergsten-sand py-3.5 pr-4 text-[0.9375rem]">
                  <span aria-hidden className="text-bergsten-green">
                    ✓
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            {project.quote && (
              <figure className="mt-14 border-l-2 border-bergsten-green pl-6">
                <blockquote className="font-bergsten text-2xl leading-snug font-medium">“{project.quote.text}”</blockquote>
                <figcaption className="mt-4 text-sm text-bergsten-muted">
                  — {project.quote.name} · <span className="italic">{bergsten.review.badge}</span>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </article>

      <section aria-labelledby="more-projects" className="border-t border-bergsten-line bg-bergsten-paper">
        <div className={cn(bergstenContainer, "py-20 lg:py-24")}>
          <h2 id="more-projects" className="font-bergsten text-3xl font-semibold tracking-[-0.02em]">
            Fler projekt
          </h2>
          <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {others.map((other) => (
              <li key={other.slug}>
                <ProjectCard project={other} sizes="(min-width: 768px) 50vw, 100vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BergstenCtaBand />
    </>
  );
}
