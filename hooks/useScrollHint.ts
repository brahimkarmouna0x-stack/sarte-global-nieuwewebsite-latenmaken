"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface ScrollHintState {
  readonly canLeft: boolean;
  readonly canRight: boolean;
}

interface UseScrollHintResult<T extends HTMLElement> {
  readonly ref: RefObject<T | null>;
  readonly canLeft: boolean;
  readonly canRight: boolean;
  readonly scrollByDir: (dir: 1 | -1) => void;
}

/**
 * Tracks whether a horizontally scrollable element has hidden content to the
 * left and/or right, so a UI can show "scroll for more" affordances only when
 * they're useful. `canLeft`/`canRight` give the first→hide-left,
 * last→hide-right, middle→show-both behaviour for free.
 *
 * Pass an existing ref (e.g. a strip that's already auto-centred elsewhere) to
 * reuse it; otherwise attach the returned `ref` to the scroll container.
 * rAF-throttled, mirroring the pattern in `useScrolled`.
 */
export function useScrollHint<T extends HTMLElement = HTMLDivElement>(
  externalRef?: RefObject<T | null>,
): UseScrollHintResult<T> {
  const internalRef = useRef<T>(null);
  const ref = externalRef ?? internalRef;
  const [state, setState] = useState<ScrollHintState>({
    canLeft: false,
    canRight: false,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const measure = (): void => {
      frame = 0;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const canLeft = scrollLeft > 1;
      const canRight = scrollLeft + clientWidth < scrollWidth - 1;
      setState((prev) =>
        prev.canLeft === canLeft && prev.canRight === canRight
          ? prev
          : { canLeft, canRight },
      );
    };

    const schedule = (): void => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    el.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    // Watch both the viewport and its content so chip/font changes re-measure.
    const observer = new ResizeObserver(schedule);
    observer.observe(el);
    const content = el.firstElementChild;
    if (content) observer.observe(content);

    return (): void => {
      if (frame) window.cancelAnimationFrame(frame);
      el.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, [ref]);

  const scrollByDir = (dir: 1 | -1): void => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.max(160, el.clientWidth * 0.7),
      behavior: "smooth",
    });
  };

  return { ref, canLeft: state.canLeft, canRight: state.canRight, scrollByDir };
}
