"use client";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface ScrollHintNavProps {
  readonly canLeft: boolean;
  readonly canRight: boolean;
  readonly onLeft: () => void;
  readonly onRight: () => void;
  /** Optional class on the (zero-height) wrapper, e.g. "sm:hidden". */
  readonly className?: string;
  readonly leftLabel?: string;
  readonly rightLabel?: string;
}

/**
 * Decorative left/right scroll chevrons for a `.filter-scroller`. They sit on
 * top of the strip edges and fade in only when there's more to scroll that way.
 * Marked aria-hidden / tabIndex -1 because the chips themselves remain the
 * real, keyboard-reachable controls — these are a pointer affordance.
 */
export function ScrollHintNav({
  canLeft,
  canRight,
  onLeft,
  onRight,
  className,
  leftLabel = "Vorige",
  rightLabel = "Meer",
}: ScrollHintNavProps) {
  return (
    <div className={className} aria-hidden="true">
      <button
        type="button"
        tabIndex={-1}
        aria-label={leftLabel}
        className="scroll-hint scroll-hint--left"
        data-show={canLeft}
        onClick={onLeft}
      >
        <LuChevronLeft />
      </button>
      <button
        type="button"
        tabIndex={-1}
        aria-label={rightLabel}
        className="scroll-hint scroll-hint--right"
        data-show={canRight}
        onClick={onRight}
      >
        <LuChevronRight />
      </button>
    </div>
  );
}
