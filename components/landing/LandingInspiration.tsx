"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  LANDING_INSPIRATION,
  LANDING_INSPIRATION_SECTION,
  type LandingInspirationItem,
  type LandingInspirationScore,
} from "@/constants";
import { useCounter } from "@/hooks/useCounter";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { CSSVarStyle } from "@/types";

import { CTAButton } from "../ui/CTAButton";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const EASE = [0.2, 0.7, 0.2, 1] as const;

/**
 * Section 06 — "Inspiratie": real, recognizable Dutch digital brands shown as
 * design inspiration (NOT clients, NOT built by Sarte Global). On-brand CSS
 * browser/phone mockups + an animated 6-dimension UX assessment per brand.
 */
export function LandingInspiration() {
  return (
    <section className="wlm-insp" aria-labelledby="wlm-insp-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{LANDING_INSPIRATION_SECTION.eyebrow}</span>
          <h2 className="h2" id="wlm-insp-h">
            {LANDING_INSPIRATION_SECTION.titleLead}{" "}
            <em>{LANDING_INSPIRATION_SECTION.titleEm}</em>
          </h2>
          <p className="sub wlm-insp__sub">{LANDING_INSPIRATION_SECTION.sub}</p>
          <p className="wlm-insp__note">{LANDING_INSPIRATION_SECTION.note}</p>
        </Reveal>

        <div className="wlm-insp__grid">
          {LANDING_INSPIRATION.map((item, index) => (
            <InspirationCard key={item.id} item={item} reverse={index % 2 === 1} />
          ))}
        </div>

        <Reveal as="div" className="wlm-insp__seo">
          <h3 className="wlm-insp__seo-title">
            {LANDING_INSPIRATION_SECTION.seoTitle}
          </h3>
          <p className="wlm-insp__seo-body">
            {LANDING_INSPIRATION_SECTION.seoBody}
          </p>
          <CTAButton
            label={LANDING_INSPIRATION_SECTION.ctaLabel}
            variant="primary"
            projectType="Website laten maken"
          />
        </Reveal>
      </Container>
    </section>
  );
}

function InspirationCard({
  item,
  reverse,
}: {
  item: LandingInspirationItem;
  reverse: boolean;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -120px 0px" });
  const shown = reduced || inView;

  return (
    <motion.article
      ref={ref}
      className={`wlm-insp__card${reverse ? " is-reverse" : ""}`}
      style={{ "--brand": item.accent } as CSSVarStyle}
      initial={reduced ? false : { opacity: 0, y: 44 }}
      animate={shown ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="wlm-insp__content">
        <div className="wlm-insp__brandrow">
          <h3 className="wlm-insp__logo">{item.brand}</h3>
          <span className="wlm-insp__industry">{item.industry}</span>
        </div>

        <p className="wlm-insp__analysis">{item.analysis}</p>

        <ul className="wlm-insp__strengths" aria-label="Sterke punten">
          {item.strengths.map((strength) => (
            <li key={strength} className="wlm-insp__chip">
              <CheckDot />
              {strength}
            </li>
          ))}
        </ul>

        <p className="wlm-insp__trust">
          <span className="wlm-insp__trust-label">Waarom bezoekers vertrouwen</span>
          {item.trust}
        </p>

        <div className="wlm-insp__scores">
          {item.scores.map((score) => (
            <ScoreBar key={score.label} score={score} start={shown} />
          ))}
        </div>
      </div>

      <div className="wlm-insp__visual" aria-hidden="true">
        <BrowserMock domain={item.domain} />
      </div>
    </motion.article>
  );
}

function ScoreBar({
  score,
  start,
}: {
  score: LandingInspirationScore;
  start: boolean;
}) {
  const value = useCounter({ target: score.value, start });

  return (
    <div className="wlm-insp__score">
      <div className="wlm-insp__score-head">
        <span className="wlm-insp__score-label">{score.label}</span>
        <span className="wlm-insp__score-num">{value}</span>
      </div>
      <div className="wlm-insp__bar">
        <span
          className="wlm-insp__bar-fill"
          style={{ width: start ? `${score.value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function CheckDot() {
  return (
    <svg
      className="wlm-insp__chip-icon"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  );
}

function BrowserMock({ domain }: { domain: string }) {
  return (
    <div className="wlm-insp__mock">
      <span className="wlm-insp__tablet" />

      <div className="wlm-insp__browser">
        <div className="wlm-insp__chrome">
          <span className="wlm-insp__dot" />
          <span className="wlm-insp__dot" />
          <span className="wlm-insp__dot" />
          <span className="wlm-insp__addr">{domain}</span>
        </div>
        <div className="wlm-insp__screen">
          <span className="wlm-insp__screen-nav" />
          <div className="wlm-insp__screen-hero">
            <span className="wlm-insp__screen-line wlm-insp__screen-line--lg" />
            <span className="wlm-insp__screen-line wlm-insp__screen-line--md" />
            <span className="wlm-insp__screen-cta" />
          </div>
          <div className="wlm-insp__screen-grid">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="wlm-insp__phone">
        <span className="wlm-insp__phone-notch" />
        <span className="wlm-insp__phone-img" />
        <span className="wlm-insp__phone-line" />
        <span className="wlm-insp__phone-line wlm-insp__phone-line--sm" />
        <span className="wlm-insp__phone-btn" />
      </div>
    </div>
  );
}
