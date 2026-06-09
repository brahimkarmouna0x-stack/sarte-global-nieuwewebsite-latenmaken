"use client";

import { useMemo, useState } from "react";
import { LuSearch, LuSearchX, LuX } from "react-icons/lu";

import { LOCAL_BUSINESSES_SECTION, LOCAL_BUSINESS_GROUPS } from "@/constants";
import { useScrollHint } from "@/hooks/useScrollHint";
import type { LocalBusiness } from "@/types";

import { CTAButton } from "./CTAButton";
import { LocalBusinessCard } from "./LocalBusinessCard";
import { Reveal } from "./Reveal";
import { ScrollHintNav } from "./ScrollHintNav";

interface LocalBusinessesBrowserProps {
  readonly businesses: readonly LocalBusiness[];
  readonly initialCount?: number;
}

const ALL_GROUPS = "__all__";

export function LocalBusinessesBrowser({
  businesses,
  initialCount = 6,
}: LocalBusinessesBrowserProps) {
  const c = LOCAL_BUSINESSES_SECTION;
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState<string>(ALL_GROUPS);
  const [visible, setVisible] = useState(initialCount);

  const { ref, canLeft, canRight, scrollByDir } = useScrollHint<HTMLDivElement>();

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return businesses.filter((business) => {
      // An active search spans every group — a match should surface even if it
      // lives outside the currently selected category chip.
      if (normalizedQuery) {
        const haystack = [
          business.title,
          business.group,
          business.projectType,
          ...(business.keywords ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(normalizedQuery);
      }
      return activeGroup === ALL_GROUPS || business.group === activeGroup;
    });
  }, [businesses, activeGroup, normalizedQuery]);

  // Reset the "show more" window whenever the active filter changes. Typing a
  // query also resets the chip to "Alle" so the highlight matches the now
  // group-wide results.
  const handleQueryChange = (value: string) => {
    setQuery(value);
    setVisible(initialCount);
    if (value.trim()) setActiveGroup(ALL_GROUPS);
  };

  const handleGroupChange = (key: string) => {
    setActiveGroup(key);
    setVisible(initialCount);
  };

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;
  const expanded = visible >= filtered.length && filtered.length > initialCount;
  const showsControls = filtered.length > initialCount;

  const chips = [
    { key: ALL_GROUPS, label: c.allGroupsLabel },
    ...LOCAL_BUSINESS_GROUPS.map((group) => ({ key: group, label: group })),
  ];

  return (
    <div className="local-biz__browser">
      <div className="lb-toolbar">
        <div className="lb-toolbar__search">
          <div className="lb-search">
            <LuSearch className="lb-search__icon" aria-hidden="true" />
            <input
              type="search"
              className="lb-search__input"
              placeholder={c.searchPlaceholder}
              aria-label={c.searchAriaLabel}
              value={query}
              onChange={(event) => handleQueryChange(event.target.value)}
            />
            {query ? (
              <button
                type="button"
                className="lb-search__clear"
                aria-label={c.clearSearchLabel}
                onClick={() => handleQueryChange("")}
              >
                <LuX aria-hidden="true" />
              </button>
            ) : null}
          </div>
        </div>

        <div
          className="filter-scroller lb-filter-scroller"
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
            <div className="proj-filter" role="tablist" aria-label={c.filterAriaLabel}>
              {chips.map((chip) => {
                const isActive = chip.key === activeGroup;
                return (
                  <button
                    key={chip.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={isActive ? "proj-chip-btn is-active" : "proj-chip-btn"}
                    onClick={() => handleGroupChange(chip.key)}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <p className="lb-results" aria-live="polite">
        {c.resultsLabel.replace("{count}", String(filtered.length))}
      </p>

      {filtered.length === 0 ? (
        <Reveal as="div" className="lb-empty">
          <span className="lb-empty__icon" aria-hidden="true">
            <LuSearchX />
          </span>
          <h3 className="lb-empty__title">{c.emptyTitle}</h3>
          <p className="lb-empty__body">
            {c.emptyBody.replace("{query}", query.trim())}
          </p>
          <CTAButton
            label={c.emptyCtaLabel}
            variant="ghost"
            projectType={c.emptyCtaProjectType}
          />
        </Reveal>
      ) : (
        <>
          <div className="local-biz__grid" role="list">
            {shown.map((business, index) => (
              <div key={business.slug} role="listitem">
                <LocalBusinessCard business={business} index={index} />
              </div>
            ))}
          </div>

          {showsControls ? (
            <div className="local-biz__foot">
              {hasMore ? (
                <button
                  type="button"
                  onClick={() => setVisible(filtered.length)}
                  className="btn btn-ghost local-biz__more"
                >
                  {c.loadMoreLabel}
                  <span aria-hidden="true"> · +{filtered.length - visible}</span>
                  <span className="arr" aria-hidden="true">
                    ↓
                  </span>
                </button>
              ) : null}
              {expanded ? (
                <button
                  type="button"
                  onClick={() => setVisible(initialCount)}
                  className="local-biz__less"
                >
                  {c.loadLessLabel}
                </button>
              ) : null}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
