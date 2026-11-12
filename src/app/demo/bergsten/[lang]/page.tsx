import Image from "next/image";
import Link from "next/link";
import {
  BergstenButton,
  BergstenCtaBand,
  BergstenEyebrow,
  BergstenHeading,
  ProjectCard,
  bergstenContainer,
} from "@/components/demos/bergsten/BergstenUi";
import { Reveal } from "@/components/ui/Reveal";
import { getBergsten } from "@/demos/bergsten/server";
import { bergstenImages } from "@/demos/bergsten/images";
import { cn } from "@/lib/cn";

export default async function BergstenHome() {

  const bergsten = await getBergsten();
  const bergstenPaths = bergsten.paths;
  const { hero, stats, intro, services, process, trust, review, projectsSection } = bergsten;

  return (
    <>
      {/* Hero: copy on sand, photo bleeding to the right edge on desktop */}
      <section aria-labelledby="bergsten-hero" className="relative overflow-hidden">
        <div className="grid lg:grid-cols-12">
          <div className={cn(bergstenContainer, "w-full pt-14 pb-16 lg:col-span-6 lg:mr-0 lg:pt-24 lg:pb-24 lg:pr-12")}>
            <BergstenEyebrow>{hero.eyebrow}</BergstenEyebrow>
            <h1
              id="bergsten-hero"
              className="mt-7 font-bergsten text-[clamp(3rem,6.5vw,6rem)] leading-[0.98] font-semibold tracking-[-0.035em]"
            >
              {hero.title}
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-bergsten-muted">{hero.lead}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <BergstenButton href={bergstenPaths.quote}>{bergsten.quoteCta}</BergstenButton>
              <BergstenButton href={bergstenPaths.projects} variant="outline">
                {hero.secondaryCta}
              </BergstenButton>
            </div>
          </div>
          <div className="relative min-h-[22rem] sm:min-h-[30rem] lg:col-span-6 lg:min-h-0">
            <Image
              src={bergstenImages.hero.src}
              alt={bergsten.imageAlt.hero}
              placeholder="blur"
              priority
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="border-y border-bergsten-line bg-bergsten-paper">
          <dl className={cn(bergstenContainer, "grid grid-cols-2 lg:grid-cols-4")}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "py-8 lg:py-10",
                  i % 2 === 1 && "border-l border-bergsten-line pl-6",
                  i >= 2 && "border-t border-bergsten-line lg:border-t-0",
                  i === 2 && "lg:border-l lg:pl-6",
                )}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-bergsten text-5xl font-semibold tracking-[-0.03em] tabular-nums">{stat.value}</span>
                  <span className="ml-1 font-bergsten text-xl text-bergsten-green">{stat.unit}</span>
                  <span className="mt-1 block text-sm text-bergsten-muted">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Intro */}
      <section aria-labelledby="bergsten-intro">
        <div className={cn(bergstenContainer, "grid gap-10 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32")}>
          <div className="lg:col-span-7">
            <BergstenEyebrow>{intro.eyebrow}</BergstenEyebrow>
            <h2 id="bergsten-intro" className="mt-5 font-bergsten text-3xl leading-[1.15] font-medium tracking-[-0.02em] sm:text-4xl">
              {intro.title}
            </h2>
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9 lg:pt-10">
            <p className="text-lg leading-relaxed text-bergsten-muted">{intro.body}</p>
            <Link
              href={bergstenPaths.about}
              className="mt-8 inline-block font-bergsten text-sm tracking-[0.08em] text-bergsten-green uppercase underline-offset-[6px] hover:underline"
            >
              {bergsten.ui.moreAbout} →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Featured projects */}
      <section aria-labelledby="bergsten-projects" className="border-t border-bergsten-line bg-bergsten-paper">
        <div className={cn(bergstenContainer, "py-24 lg:py-32")}>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <BergstenHeading eyebrow={projectsSection.eyebrow} title={projectsSection.title} id="bergsten-projects" />
            <BergstenButton href={bergstenPaths.projects} variant="outline">
              {projectsSection.all}
            </BergstenButton>
          </div>
          <ul className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
            {bergsten.projects.slice(0, 4).map((project, i) => (
              <li key={project.slug} className={cn(i % 2 === 1 && "md:mt-24")}>
                <Reveal delay={(i % 2) * 120}>
                  <ProjectCard b={bergsten} project={project} sizes="(min-width: 768px) 50vw, 100vw" />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="bergsten-services">
        <div className={cn(bergstenContainer, "grid gap-14 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32")}>
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <BergstenHeading eyebrow={services.eyebrow} title={services.title} id="bergsten-services" lead={services.lead} />
            </div>
          </div>
          <ol className="border-t border-bergsten-line lg:col-span-7 lg:col-start-6">
            {services.items.map((service, i) => (
              <li key={service.id} className="border-b border-bergsten-line">
                <Link
                  href={`${bergstenPaths.services}#${service.id}`}
                  className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-8 transition-colors"
                >
                  <span className="font-bergsten text-sm text-bergsten-green tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-bergsten text-2xl font-semibold tracking-[-0.01em] transition-colors group-hover:text-bergsten-green sm:text-3xl">
                      {service.title}
                    </span>
                    <span className="mt-2 block max-w-lg text-[0.9375rem] leading-relaxed text-bergsten-muted">{service.text}</span>
                  </span>
                  <span aria-hidden className="text-xl text-bergsten-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-bergsten-green">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Craft band with review */}
      <section aria-label={review.badge} className="relative isolate min-h-[34rem] overflow-hidden text-bergsten-paper">
        <Image src={bergstenImages.saw.src} alt="" placeholder="blur" fill sizes="100vw" className="-z-10 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-bergsten-ink/85 via-bergsten-ink/60 to-bergsten-ink/10" />
        <div className={cn(bergstenContainer, "flex min-h-[34rem] items-center py-20")}>
          <figure className="max-w-xl">
            <span className="border border-bergsten-paper/30 px-2.5 py-1 font-bergsten text-[0.6875rem] tracking-[0.16em] uppercase">
              {review.badge}
            </span>
            <blockquote className="mt-8 font-bergsten text-3xl leading-[1.2] font-medium tracking-[-0.01em] sm:text-4xl">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-8 text-sm text-bergsten-paper/75">— {review.name}</figcaption>
          </figure>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="bergsten-process">
        <div className={cn(bergstenContainer, "py-24 lg:py-32")}>
          <BergstenHeading eyebrow={process.eyebrow} title={process.title} id="bergsten-process" />
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 80}>
                  <div className="flex items-center gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-bergsten-green font-bergsten text-sm text-bergsten-green">
                      {i + 1}
                    </span>
                    <span aria-hidden className="hidden h-px flex-1 bg-bergsten-line lg:block" />
                  </div>
                  <h3 className="mt-6 font-bergsten text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-bergsten-muted">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trust */}
      <section aria-labelledby="bergsten-trust" className="border-t border-bergsten-line bg-bergsten-paper">
        <div className={cn(bergstenContainer, "grid gap-14 py-24 lg:grid-cols-12 lg:gap-8 lg:py-28")}>
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <Image src={bergstenImages.craft.src} alt={bergsten.imageAlt.craft} placeholder="blur" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
            <BergstenHeading eyebrow={trust.eyebrow} title={trust.title} id="bergsten-trust" />
            <ul className="mt-12 grid gap-8 sm:grid-cols-2">
              {trust.items.map((item) => (
                <li key={item.title} className="border-t-2 border-bergsten-green pt-5">
                  <h3 className="font-bergsten text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-bergsten-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BergstenCtaBand b={bergsten} />
    </>
  );
}
