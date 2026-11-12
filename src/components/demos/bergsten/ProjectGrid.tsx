"use client";

import { useState } from "react";
import { projectCategories, type ProjectCategory } from "@/demos/bergsten/content";
import { cn } from "@/lib/cn";
import { ProjectCard } from "./BergstenUi";
import { useBergsten } from "./useBergsten";

/** Project portfolio with category filter (client-side, all projects are in the HTML). */
export function ProjectGrid() {
  const bergsten = useBergsten();
  const [filter, setFilter] = useState<ProjectCategory | null>(null);
  const t = bergsten.projectsSection;
  const projects = filter ? bergsten.projects.filter((p) => p.category === filter) : bergsten.projects;
  const options: Array<ProjectCategory | null> = [null, ...projectCategories];

  return (
    <div>
      <div role="group" aria-label={t.filterLabel} className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option === filter;
          const count = option ? bergsten.projects.filter((p) => p.category === option).length : bergsten.projects.length;
          return (
            <button
              key={option ?? "all"}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option)}
              className={cn(
                "border px-4 py-2 font-bergsten text-sm tracking-[0.06em] transition-colors",
                active ? "border-bergsten-ink bg-bergsten-ink text-bergsten-paper" : "border-bergsten-line hover:border-bergsten-ink",
              )}
            >
              {option ? bergsten.labels.categories[option] : t.filterAll} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <ProjectCard b={bergsten} project={project} priority={i < 2} sizes="(min-width: 768px) 50vw, 100vw" />
          </li>
        ))}
      </ul>
    </div>
  );
}
