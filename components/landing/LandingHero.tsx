import { LANDING_HERO, type LandingHeroContent } from "@/constants";
import type { CSSVarStyle } from "@/types";

import { Container } from "../ui/Container";

const CHART_BARS = [38, 56, 47, 72, 64, 88, 100] as const;

interface LandingHeroProps {
  readonly content?: LandingHeroContent;
  /**
   * Accepted for backward compatibility with existing call sites. The primary
   * CTA now scrolls to the on-page pricing section instead of opening WhatsApp,
   * so the project type is no longer read here (the bottom-of-page final CTA
   * and the floating button still drive the WhatsApp flow).
   */
  readonly projectType?: string;
  /** Anchor the primary CTA scrolls to. Defaults to the pricing section. */
  readonly primaryCtaHref?: string;
}

/**
 * Premium split hero: persuasive copy on the left, an animated browser/dashboard
 * mockup with floating UI pills on the right. Pure-CSS motion (reuses the brand
 * hero keyframes); server component so it stays in the static payload. Defaults
 * to the "nieuwe website" copy; pass `content` to reuse it for the WordPress,
 * webshop and other service pages. The primary CTA scrolls visitors to the
 * pricing ("Pakketten") section so they choose a package before contacting us.
 */
export function LandingHero({
  content = LANDING_HERO,
  primaryCtaHref = "#pakketten",
}: LandingHeroProps = {}) {
  return (
    <section className="wlm-hero" aria-labelledby="lp-hero-h">
      <span className="wlm-hero__orb wlm-hero__orb--a" aria-hidden="true" />
      <span className="wlm-hero__orb wlm-hero__orb--b" aria-hidden="true" />
      <span className="wlm-hero__grid" aria-hidden="true" />

      <Container className="wlm-hero__inner">
        <div className="wlm-hero__copy">
          <span className="wlm-hero__badge">
            <span className="wlm-hero__badge-dot" aria-hidden="true" />
            {content.badge}
          </span>

          <p className="eyebrow wlm-hero__eyebrow">{content.eyebrow}</p>

          <h1 className="h2 wlm-hero__title" id="lp-hero-h">
            {content.titleLead} <em>{content.titleEm}</em>
          </h1>

          <p className="sub wlm-hero__sub">{content.sub}</p>

          <div className="wlm-hero__cta">
            <a href={primaryCtaHref} className="btn btn-primary btn-large">
              {content.primaryCta}
              <span className="arr">→</span>
            </a>
            <a
              href={content.secondaryCta.href}
              className="btn btn-ghost btn-large"
            >
              {content.secondaryCta.label}
            </a>
          </div>

          <ul className="wlm-hero__benefits" aria-label="Inbegrepen">
            {content.benefits.map((benefit) => (
              <li key={benefit} className="wlm-hero__benefit">
                <CheckIcon />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="wlm-hero__rating">
            <span className="wlm-hero__stars" aria-hidden="true">
              {"★★★★★"}
            </span>
            <span className="wlm-hero__rating-score">
              {content.rating.score}
            </span>
            <span className="wlm-hero__rating-label">
              {content.rating.label}
            </span>
          </div>
        </div>

        <div className="wlm-hero__visual">
          <span className="wlm-hero__visual-glow" aria-hidden="true" />

          <div
            className="wlm-hero__mock"
            role="img"
            aria-label="Voorbeeld van een website die wij bouwen, met live statistieken over conversie en bezoekers."
          >
            <div className="wlm-hero__chrome" aria-hidden="true">
              <span className="wlm-hero__dot" />
              <span className="wlm-hero__dot" />
              <span className="wlm-hero__dot" />
              <span className="wlm-hero__url">sarteglobal.nl</span>
            </div>

            <div className="wlm-hero__screen" aria-hidden="true">
              <div className="wlm-hero__site-nav">
                <span className="wlm-hero__site-logo" />
                <span className="wlm-hero__site-links">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="wlm-hero__site-btn" />
              </div>

              <div className="wlm-hero__site-hero">
                <span className="wlm-hero__bar wlm-hero__bar--xl" />
                <span className="wlm-hero__bar wlm-hero__bar--lg" />
                <span className="wlm-hero__bar wlm-hero__bar--md" />
                <span className="wlm-hero__site-cta" />
              </div>

              <div className="wlm-hero__widget">
                <div className="wlm-hero__widget-head">
                  <span className="wlm-hero__widget-title" />
                  <span className="wlm-hero__widget-chip">+41%</span>
                </div>
                <div className="wlm-hero__chart">
                  {CHART_BARS.map((height, index) => (
                    <span
                      key={index}
                      style={
                        {
                          "--h": `${height}%`,
                          "--bd": `${index * 90}ms`,
                        } as CSSVarStyle
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {content.pills.map((pill, index) => (
            <span
              key={pill.label}
              className={`wlm-hero__pill wlm-hero__pill--${index}`}
              aria-hidden="true"
            >
              <span className="wlm-hero__pill-dot" />
              {pill.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="wlm-hero__check"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}
