import { LANDING_HERO } from "@/constants";
import type { CSSVarStyle } from "@/types";

import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";

const PROJECT_TYPE = "Nieuwe website laten maken";
const CHART_BARS = [38, 56, 47, 72, 64, 88, 100] as const;

/**
 * Premium split hero: persuasive copy on the left, an animated browser/dashboard
 * mockup with floating UI pills on the right. Pure-CSS motion (reuses the brand
 * hero keyframes); server component so it stays in the static payload.
 */
export function LandingHero() {
  return (
    <section className="wlm-hero" aria-labelledby="lp-hero-h">
      <span className="wlm-hero__orb wlm-hero__orb--a" aria-hidden="true" />
      <span className="wlm-hero__orb wlm-hero__orb--b" aria-hidden="true" />
      <span className="wlm-hero__grid" aria-hidden="true" />

      <Container className="wlm-hero__inner">
        <div className="wlm-hero__copy">
          <span className="wlm-hero__badge">
            <span className="wlm-hero__badge-dot" aria-hidden="true" />
            {LANDING_HERO.badge}
          </span>

          <p className="eyebrow wlm-hero__eyebrow">{LANDING_HERO.eyebrow}</p>

          <h1 className="h2 wlm-hero__title" id="lp-hero-h">
            {LANDING_HERO.titleLead} <em>{LANDING_HERO.titleEm}</em>
          </h1>

          <p className="sub wlm-hero__sub">{LANDING_HERO.sub}</p>

          <div className="wlm-hero__cta">
            <CTAButton
              label={LANDING_HERO.primaryCta}
              variant="primary"
              size="large"
              projectType={PROJECT_TYPE}
            />
            <a
              href={LANDING_HERO.secondaryCta.href}
              className="btn btn-ghost btn-large"
            >
              {LANDING_HERO.secondaryCta.label}
            </a>
          </div>

          <ul className="wlm-hero__benefits" aria-label="Inbegrepen">
            {LANDING_HERO.benefits.map((benefit) => (
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
              {LANDING_HERO.rating.score}
            </span>
            <span className="wlm-hero__rating-label">
              {LANDING_HERO.rating.label}
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

          {LANDING_HERO.pills.map((pill, index) => (
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
