"use client";

import { useEffect, useState } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useScrolled } from "@/hooks/useScrolled";

/**
 * Fixed button in the bottom-left corner that fades in once the visitor has
 * scrolled past the first viewport and smooth-scrolls back to the top on click.
 * Rendered globally from the root layout, so it appears on every page.
 *
 * It hides as soon as the footer bar enters the viewport, so it never overlaps
 * the footer's social icons / legal links in the bottom-left corner on mobile.
 */
export function BackToTopButton() {
  const scrolled = useScrolled(600);
  const reduced = useReducedMotion();
  const [atFooter, setAtFooter] = useState<boolean>(false);

  useEffect(() => {
    const target =
      document.querySelector(".foot-bar") ?? document.querySelector("footer");
    if (!target) return;

    const observer = new IntersectionObserver((entries) => {
      setAtFooter(entries[0]?.isIntersecting ?? false);
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = scrolled && !atFooter;

  function handleClick() {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      className={`to-top${visible ? " to-top--visible" : ""}`}
      aria-label="Terug naar boven"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M12 19V5M6 11l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
