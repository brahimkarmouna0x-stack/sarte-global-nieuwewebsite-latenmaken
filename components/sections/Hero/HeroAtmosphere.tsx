"use client";

import Image from "next/image";

import type { CSSVarStyle } from "@/types";

import { useHeroStage } from "./HeroStage";

export function HeroAtmosphere() {
  const { slides, index, accent } = useHeroStage();
  const current = slides[index];
  if (!current) return null;

  const layerStyle: CSSVarStyle = {
    "--hero-accent": accent ?? "var(--color-accent)",
  } as CSSVarStyle;

  return (
    <div className="hero-backdrop" aria-hidden="true">
      <div key={current.id} className="hero-backdrop__layer" style={layerStyle}>
        <Image
          src={current.image}
          // Purely decorative atmosphere: the whole `.hero-backdrop` wrapper is
          // already `aria-hidden`, so an empty alt is the correct WCAG pattern
          // (no duplicate announcement of the rotating background).
          alt=""
          fill
          // LCP backdrop: preload it (priority + high fetch priority) so it
          // starts downloading immediately. This full-bleed image is the
          // largest element in the hero, so it is the LCP candidate on mobile.
          priority
          fetchPriority="high"
          // `100vw` + quality 70 deliberately match the showcase image's mobile
          // settings (≤980px → 100vw, q70). Because both reference the same
          // slide src, they resolve to one optimised URL on phones and share a
          // single download — the showcase reuses these preloaded bytes.
          // (70 is one of next.config `images.qualities`, so it isn't coerced.)
          sizes="100vw"
          quality={70}
          className="hero-backdrop__image"
        />
        <span className="hero-backdrop__wash" />
      </div>

      <span className="hero-backdrop__veil" />
      <span className="hero-backdrop__grain" />

      {/* Mobile-only legibility overlay. Darkens the backdrop on phones so the
          hero copy stays highly readable over the image; hidden from `md`
          (≥768px) up so desktop keeps the brighter, more vivid backdrop. */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/85 md:hidden" />
    </div>
  );
}
