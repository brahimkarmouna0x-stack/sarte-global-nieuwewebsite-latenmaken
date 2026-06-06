"use client";

import { useState } from "react";

import { LANDING_FINAL_CTA, SITE } from "@/constants";

import { ContactForm } from "../contact/ContactForm";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/**
 * Section 10 — final conversion section. Emotional headline + closing argument on
 * the left, an inline contact form on the right. The form reuses the dialog's
 * ContactForm (auto-focus disabled to avoid scroll-jank when scrolled into view).
 */
export function LandingFinalCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="wlm-final" id="cta" aria-labelledby="wlm-final-h">
      <span className="wlm-final__orb wlm-final__orb--a" aria-hidden="true" />
      <span className="wlm-final__orb wlm-final__orb--b" aria-hidden="true" />

      <Container>
        <Reveal as="div" className="wlm-final__card">
          <div className="wlm-final__copy">
            <span className="wlm-final__urgency">
              <span className="wlm-final__urgency-dot" aria-hidden="true" />
              {LANDING_FINAL_CTA.urgency}
            </span>

            <span className="eyebrow">{LANDING_FINAL_CTA.eyebrow}</span>
            <h2 className="h2 wlm-final__title" id="wlm-final-h">
              {LANDING_FINAL_CTA.titleLead} <em>{LANDING_FINAL_CTA.titleEm}</em>
            </h2>
            <p className="sub wlm-final__sub">{LANDING_FINAL_CTA.sub}</p>

            <ul className="wlm-final__points">
              {LANDING_FINAL_CTA.points.map((point) => (
                <li key={point} className="wlm-final__point">
                  <svg
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
                  {point}
                </li>
              ))}
            </ul>

            <a className="wlm-final__mail" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>

          <div className="wlm-final__form">
            {submitted ? (
              <div className="wlm-final__done" role="status">
                <span className="wlm-final__done-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12.5l4.5 4.5L19 7" />
                  </svg>
                </span>
                <h3 className="wlm-final__done-title">Bedankt voor je bericht!</h3>
                <p className="wlm-final__done-text">
                  We hebben WhatsApp voor je geopend. Lukt dat niet? Mail ons
                  gerust direct — je hoort binnen één werkdag van ons.
                </p>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setSubmitted(false)}
                >
                  Nog een bericht sturen
                </button>
              </div>
            ) : (
              <>
                <h3 className="wlm-final__form-title">
                  Vraag je voorstel aan
                </h3>
                <ContactForm
                  initialProjectType={LANDING_FINAL_CTA.projectType}
                  onComplete={() => setSubmitted(true)}
                  autoFocus={false}
                />
              </>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
