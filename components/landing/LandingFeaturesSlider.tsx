"use client";

import { useRef, useState, type KeyboardEvent } from "react";

import {
  LANDING_FEATURES,
  LANDING_FEATURES_SECTION,
  type LandingFeatureItem,
} from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ServiceIcon } from "../ui/ServiceIcon";

/**
 * Section 05 — interactive feature showcase. A vertical tablist on the left drives
 * a tailored CSS mockup on the right. Fully keyboard-operable (arrow/Home/End).
 */
export function LandingFeaturesSlider() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function focusTab(index: number) {
    const clamped = (index + LANDING_FEATURES.length) % LANDING_FEATURES.length;
    setActive(clamped);
    tabRefs.current[clamped]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        focusTab(active + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        focusTab(active - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(LANDING_FEATURES.length - 1);
        break;
      default:
        break;
    }
  }

  const activeFeature = LANDING_FEATURES[active];
  if (!activeFeature) return null;

  return (
    <section className="wlm-feat" aria-labelledby="wlm-feat-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{LANDING_FEATURES_SECTION.eyebrow}</span>
          <h2 className="h2" id="wlm-feat-h">
            {LANDING_FEATURES_SECTION.titleLead}{" "}
            <em>{LANDING_FEATURES_SECTION.titleEm}</em>
          </h2>
          <p className="sub wlm-feat__sub">{LANDING_FEATURES_SECTION.sub}</p>
        </Reveal>

        <Reveal as="div" className="wlm-feat__layout">
          <div
            className="wlm-feat__list"
            role="tablist"
            aria-orientation="vertical"
            aria-label="Website-onderdelen"
            onKeyDown={handleKeyDown}
          >
            {LANDING_FEATURES.map((feature, index) => {
              const isActive = index === active;
              return (
                <button
                  key={feature.key}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`wlm-feat-tab-${feature.key}`}
                  aria-selected={isActive}
                  aria-controls="wlm-feat-panel"
                  tabIndex={isActive ? 0 : -1}
                  className={`wlm-feat__item${isActive ? " is-active" : ""}`}
                  onClick={() => setActive(index)}
                >
                  <span className="wlm-feat__item-icon" aria-hidden="true">
                    <ServiceIcon name={feature.iconName} />
                  </span>
                  <span className="wlm-feat__item-text">
                    <span className="wlm-feat__item-title">{feature.title}</span>
                    <span className="wlm-feat__item-desc">
                      {feature.description}
                    </span>
                  </span>
                  <span className="wlm-feat__item-arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="wlm-feat__preview"
            role="tabpanel"
            id="wlm-feat-panel"
            aria-labelledby={`wlm-feat-tab-${activeFeature.key}`}
          >
            <span className="wlm-feat__preview-glow" aria-hidden="true" />
            <FeatureMock feature={activeFeature} />
            <div className="wlm-feat__stat">
              <span className="wlm-feat__stat-value">
                {activeFeature.stat.value}
              </span>
              <span className="wlm-feat__stat-label">
                {activeFeature.stat.label}
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function FeatureMock({ feature }: { feature: LandingFeatureItem }) {
  return (
    <div className="wlm-feat__mock" key={feature.key} aria-hidden="true">
      {feature.key === "mobile" ? <MobileMock /> : null}
      {feature.key === "seo" ? <SeoMock /> : null}
      {feature.key === "speed" ? <SpeedMock /> : null}
      {feature.key === "secure" ? <SecureMock /> : null}
      {feature.key === "convert" ? <ConvertMock /> : null}
      {feature.key === "manage" ? <ManageMock /> : null}
    </div>
  );
}

function MobileMock() {
  return (
    <div className="wlm-mk wlm-mk--mobile">
      <div className="wlm-mk__phone">
        <span className="wlm-mk__notch" />
        <span className="wlm-mk__line wlm-mk__line--img" />
        <span className="wlm-mk__line wlm-mk__line--lg" />
        <span className="wlm-mk__line wlm-mk__line--md" />
        <span className="wlm-mk__btn" />
      </div>
      <div className="wlm-mk__phone wlm-mk__phone--ghost">
        <span className="wlm-mk__line wlm-mk__line--img" />
        <span className="wlm-mk__line wlm-mk__line--md" />
      </div>
    </div>
  );
}

function SeoMock() {
  return (
    <div className="wlm-mk wlm-mk--seo">
      <span className="wlm-mk__rank">#1</span>
      <span className="wlm-mk__seo-url">sarteglobal.nl › nieuwe-website</span>
      <span className="wlm-mk__seo-title" />
      <span className="wlm-mk__seo-meta" />
      <span className="wlm-mk__seo-meta wlm-mk__seo-meta--short" />
      <div className="wlm-mk__seo-ghost">
        <span />
        <span />
      </div>
    </div>
  );
}

function SpeedMock() {
  return (
    <div className="wlm-mk wlm-mk--speed">
      <div className="wlm-mk__gauge" aria-hidden="true">
        <span className="wlm-mk__gauge-fill" />
        <span className="wlm-mk__gauge-center">0,8s</span>
      </div>
      <div className="wlm-mk__vitals">
        <span className="wlm-mk__vital is-good" />
        <span className="wlm-mk__vital is-good" />
        <span className="wlm-mk__vital is-good" />
      </div>
    </div>
  );
}

function SecureMock() {
  return (
    <div className="wlm-mk wlm-mk--secure">
      <div className="wlm-mk__addr">
        <span className="wlm-mk__lock" aria-hidden="true" />
        <span className="wlm-mk__addr-text">https://sarteglobal.nl</span>
      </div>
      <div className="wlm-mk__shield">
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path
            d="M24 5L9 11v11c0 9 6.5 15 15 17 8.5-2 15-8 15-17V11L24 5z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M17 24l5 5 9-10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function ConvertMock() {
  return (
    <div className="wlm-mk wlm-mk--convert">
      <span className="wlm-mk__funnel wlm-mk__funnel--1">Bezoekers</span>
      <span className="wlm-mk__funnel wlm-mk__funnel--2">Interesse</span>
      <span className="wlm-mk__funnel wlm-mk__funnel--3">Klant</span>
    </div>
  );
}

function ManageMock() {
  return (
    <div className="wlm-mk wlm-mk--manage">
      <div className="wlm-mk__cms-row">
        <span className="wlm-mk__cms-label" />
        <span className="wlm-mk__cms-field" />
      </div>
      <div className="wlm-mk__cms-row">
        <span className="wlm-mk__cms-label" />
        <span className="wlm-mk__cms-field wlm-mk__cms-field--tall" />
      </div>
      <div className="wlm-mk__cms-row wlm-mk__cms-row--toggle">
        <span className="wlm-mk__cms-label" />
        <span className="wlm-mk__cms-toggle" />
      </div>
    </div>
  );
}
