"use client";

import { useScrollHint } from "@/hooks/useScrollHint";
import type { ProjectsFilterProps } from "@/types";

import { ScrollHintNav } from "../ui/ScrollHintNav";

export function ProjectsFilter({ categories, active, onChange }: ProjectsFilterProps) {
  const { ref, canLeft, canRight, scrollByDir } = useScrollHint<HTMLDivElement>();

  return (
    <div
      className="filter-scroller proj-filter-scroller"
      data-can-left={canLeft}
      data-can-right={canRight}
    >
      <ScrollHintNav
        canLeft={canLeft}
        canRight={canRight}
        onLeft={() => scrollByDir(-1)}
        onRight={() => scrollByDir(1)}
      />
      <div ref={ref} className="filter-scroller__viewport">
        <div className="proj-filter" role="tablist" aria-label="Filter projecten op categorie">
          {categories.map((category) => {
            const isActive = category === active;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={isActive ? "proj-chip-btn is-active" : "proj-chip-btn"}
                onClick={() => onChange(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
