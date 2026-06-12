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
          // starts downloading immediately.
          priority
          fetchPriority="high"
          // The backdrop is always veiled (wash + grain + veil, plus a heavy
          // dark gradient on phones), so a smaller source on mobile is visually
          // identical while cutting the network payload. Desktop keeps the
          // vivid full-resolution image. A flat `100vw` made phones fetch a
          // ~1920px variant; this drops them to the ~1080px bucket.
          sizes="(max-width: 768px) 75vw, (max-width: 1200px) 90vw, 100vw"
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
