"use client";

import { useRef, useState, type KeyboardEvent } from "react";

import {
  LANDING_FEATURES,
  LANDING_FEATURES_SECTION,
  type LandingFeatureItem,
  type LandingFeaturesContent,
} from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ServiceIcon } from "../ui/ServiceIcon";

const DEFAULT_CONTENT: LandingFeaturesContent = {
  ...LANDING_FEATURES_SECTION,
  features: LANDING_FEATURES,
};

interface LandingFeaturesSliderProps {
  readonly content?: LandingFeaturesContent;
}

/**
 * Section 05 — interactive feature showcase. A vertical tablist on the left drives
 * a tailored CSS mockup on the right. Fully keyboard-operable (arrow/Home/End).
 * Defaults to the website feature set; pass `content` (re-using the same feature
 * keys, which drive the mock visuals) to retarget it per service page.
 */
export function LandingFeaturesSlider({
  content = DEFAULT_CONTENT,
}: LandingFeaturesSliderProps = {}) {
  const features = content.features;
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function focusTab(index: number) {
    const clamped = (index + features.length) % features.length;
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
        focusTab(features.length - 1);
        break;
      default:
        break;
    }
  }

  const activeFeature = features[active];
  if (!activeFeature) return null;

  return (
    <section className="wlm-feat" aria-labelledby="wlm-feat-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="h2" id="wlm-feat-h">
            {content.titleLead} <em>{content.titleEm}</em>
          </h2>
          <p className="sub wlm-feat__sub">{content.sub}</p>
        </Reveal>

        <Reveal as="div" className="wlm-feat__layout">
          <div
            className="wlm-feat__list"
            role="tablist"
            aria-orientation="vertical"
            aria-label="Website-onderdelen"
            onKeyDown={handleKeyDown}
          >
            {features.map((feature, index) => {
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
      <div className="wlm-mk__device wlm-mk__device--desktop">
        <span className="wlm-mk__bar" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <div className="wlm-mk__screen">
          <span className="wlm-mk__line wlm-mk__line--img" />
          <span className="wlm-mk__line wlm-mk__line--lg" />
          <span className="wlm-mk__line wlm-mk__line--md" />
          <span className="wlm-mk__btn" />
        </div>
      </div>
      <div className="wlm-mk__device wlm-mk__device--phone">
        <span className="wlm-mk__notch" />
        <span className="wlm-mk__line wlm-mk__line--img" />
        <span className="wlm-mk__line wlm-mk__line--lg" />
        <span className="wlm-mk__btn" />
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
      <div className="wlm-mk__seo-trend" aria-hidden="true">
        <span />
        <span />
        <span />
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
        <span className="wlm-mk__vital">
          <i className="is-good" />
          <b>LCP</b>
        </span>
        <span className="wlm-mk__vital">
          <i className="is-good" />
          <b>CLS</b>
        </span>
        <span className="wlm-mk__vital">
          <i className="is-good" />
          <b>INP</b>
        </span>
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
      <span className="wlm-mk__funnel wlm-mk__funnel--1">
        <b>Bezoekers</b>
        <i>100%</i>
      </span>
      <span className="wlm-mk__funnel wlm-mk__funnel--2">
        <b>Interesse</b>
        <i>74%</i>
      </span>
      <span className="wlm-mk__funnel wlm-mk__funnel--3">
        <b>Klant</b>
        <i>41%</i>
      </span>
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
