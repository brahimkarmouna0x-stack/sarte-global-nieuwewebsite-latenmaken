"use client";

import { useCallback, useRef, type KeyboardEvent } from "react";

import { useHeroStage } from "./HeroStage";

export function HeroControls() {
  const { slides, index, setIndex, goNext, goPrev } = useHeroStage();

  // Roving-tabindex refs so arrow keys can move focus between the slide tabs.
  const dotRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusDot = useCallback(
    (raw: number): void => {
      const len = slides.length;
      if (len === 0) return;
      const target = ((raw % len) + len) % len;
      // Selection-follows-focus: the slide panel is always in the DOM, so we
      // activate the slide as focus moves between tabs (WAI-ARIA APG tabs).
      setIndex(target);
      dotRefs.current[target]?.focus();
    },
    [slides.length, setIndex],
  );

  const handleDotsKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>): void => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          focusDot(index - 1);
          break;
        case "ArrowRight":
          e.preventDefault();
          focusDot(index + 1);
          break;
        case "Home":
          e.preventDefault();
          focusDot(0);
          break;
        case "End":
          e.preventDefault();
          focusDot(slides.length - 1);
          break;
        default:
          break;
      }
    },
    [focusDot, index, slides.length],
  );

  if (slides.length <= 1) return null;

  return (
    <div
      className="hero-controls"
      role="group"
      aria-label="Showcase-bediening"
    >
      <button
        type="button"
        className="hero-controls__arrow hero-controls__arrow--prev"
        onClick={goPrev}
        aria-label="Vorige showcase"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4l-6 6 6 6" />
        </svg>
      </button>

      <div
        className="hero-controls__dots"
        role="tablist"
        aria-label="Showcase-beelden"
        onKeyDown={handleDotsKeyDown}
      >
        {slides.map((slide, i) => {
          const isActive = i === index;
          return (
            <button
              key={slide.id}
              ref={(node): void => {
                dotRefs.current[i] = node;
              }}
              type="button"
              role="tab"
              id={`hero-dot-${i}`}
              aria-controls="hero-showcase-panel"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              aria-label={`Toon ${slide.label}`}
              className={`hero-controls__dot${isActive ? " hero-controls__dot--active" : ""}`}
              onClick={() => setIndex(i)}
            >
              <span className="hero-controls__dot-fill" aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="hero-controls__arrow hero-controls__arrow--next"
        onClick={goNext}
        aria-label="Volgende showcase"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 4l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
