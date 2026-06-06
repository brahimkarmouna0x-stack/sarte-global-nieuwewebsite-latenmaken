"use client";

import { useMemo, useState } from "react";

import type { Project, ProjectCategory, ProjectsGridProps } from "@/types";

import { PROJECTS_SECTION, PROJECT_CATEGORIES, CATEGORY_GROUPS } from "@/data/projects";

import { ProjectCard } from "./project-card";
import { ProjectsFilter } from "./projects-filter";

// Child categories folded into a group parent — hidden as standalone chips.
const GROUPED_CHILDREN = new Set<string>(
  Object.values(CATEGORY_GROUPS).flatMap((children) =>
    children.filter((child) => !(child in CATEGORY_GROUPS)),
  ),
);

/**
 * A chip matches a project when the project's category is in the chip's group,
 * or equals the chip when it isn't a group parent. Keeps "E-Commerce" showing
 * every online-store project while each project keeps its granular category.
 */
function filterMatches(
  projectCategory: ProjectCategory,
  active: ProjectCategory,
): boolean {
  const group = (CATEGORY_GROUPS as Record<string, readonly string[]>)[active];
  return group ? group.includes(projectCategory) : projectCategory === active;
}

export function ProjectsGrid({
  projects,
  initialCount = 6,
  step = 3,
}: ProjectsGridProps) {
  const [active, setActive] = useState<ProjectCategory>("All");
  const [visible, setVisible] = useState<number>(initialCount);

  // Derived from the single source of truth (PROJECT_CATEGORIES), filtered to
  // categories that actually have projects. No hardcoded list → the filter,
  // the "All" sampler and the data stay in sync and auto-update when projects
  // or categories are added.
  const representativeCategories = useMemo(
    () =>
      PROJECT_CATEGORIES.filter(
        (category): category is Exclude<ProjectCategory, "All"> =>
          category !== "All" &&
          !GROUPED_CHILDREN.has(category) &&
          projects.some((project) => filterMatches(project.category, category)),
      ),
    [projects],
  );

  const filterCategories = useMemo<readonly ProjectCategory[]>(
    () => ["All", ...representativeCategories],
    [representativeCategories],
  );

  const filtered = useMemo(() => {
    if (active === "All") {
      return representativeCategories.reduce<Project[]>((acc, category) => {
        const first = projects.find((project) => filterMatches(project.category, category));
        if (first) acc.push(first);
        return acc;
      }, []);
    }
    return projects.filter((project) => filterMatches(project.category, active));
  }, [projects, active, representativeCategories]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleFilterChange = (category: ProjectCategory) => {
    setActive(category);
    setVisible(initialCount);
  };

  const handleLoadMore = () => {
    setVisible((current) => Math.min(current + step, filtered.length));
  };

  const handleShowAll = () => {
    setVisible(filtered.length);
  };

  return (
    <>
      <ProjectsFilter
        categories={filterCategories}
        active={active}
        onChange={handleFilterChange}
      />

      <div
        className="proj-grid"
        data-active-filter={active}
        role="list"
      >
        {shown.map((project, index) => (
          <div role="listitem" key={project.id} className="proj-grid-cell">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="proj-empty">Nog geen projecten in deze categorie.</p>
      ) : null}

      {hasMore ? (
        <div className="proj-foot">
          <button
            type="button"
            onClick={handleLoadMore}
            className="btn btn-ghost proj-more"
          >
            {PROJECTS_SECTION.loadMoreLabel}
            <span className="arr" aria-hidden="true">
              ↓
            </span>
          </button>

          {filtered.length - visible > step ? (
            <button
              type="button"
              onClick={handleShowAll}
              className="proj-show-all"
            >
              {PROJECTS_SECTION.loadAllLabel}
              <span aria-hidden="true"> · {filtered.length}</span>
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
