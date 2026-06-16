"use client";

import { useEffect } from "react";

/**
 * Smoothly scrolls to the URL hash target on first load. Covers the cross-page
 * "Prijzen" flow: clicking it from another page navigates to `/#pakketten`, and
 * this mounts on the homepage and scrolls to the pricing section. The navbar
 * offset is handled by `html { scroll-padding-top }` in globals.css.
 */
export function HashScrollOnLoad() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.length < 2) return;

    const id = decodeURIComponent(hash.slice(1));
    // Defer one frame so below-the-fold sections are laid out before scrolling.
    const raf = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      target.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
