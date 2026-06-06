"use client";

import type { RefObject } from "react";

import { LANDING_TRUST, LANDING_TRUST_STATS } from "@/constants";
import { useReveal } from "@/hooks/useReveal";
import type { CSSVarStyle } from "@/types";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { StatCounter } from "../ui/StatCounter";

/**
 * Section 02 — trust strip with counters that animate when scrolled into view.
 * Mirrors the homepage ImpactStats pattern with landing-scoped styling.
 */
export function LandingTrustStats() {
  const { ref, isIn } = useReveal<HTMLElement>({ threshold: 0.35 });

  return (
    <section
      ref={ref as RefObject<HTMLElement>}
      className="wlm-stats"
      aria-labelledby="wlm-stats-h"
    >
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{LANDING_TRUST.eyebrow}</span>
          <h2 className="h2" id="wlm-stats-h">
            {LANDING_TRUST.titleLead} <em>{LANDING_TRUST.titleEm}</em>
          </h2>
          <p className="sub wlm-stats__sub">{LANDING_TRUST.sub}</p>
        </Reveal>

        <div className="wlm-stats__row">
          {LANDING_TRUST_STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              className="wlm-stats__item"
              index={index}
              style={{ "--i": index } as CSSVarStyle}
            >
              <div className="wlm-stats__num">
                {stat.prefix ? (
                  <span className="wlm-stats__unit">{stat.prefix}</span>
                ) : null}
                <StatCounter target={stat.target} start={isIn} />
                {stat.suffix ? (
                  <span className="wlm-stats__unit">{stat.suffix}</span>
                ) : null}
              </div>
              <div className="wlm-stats__label">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
