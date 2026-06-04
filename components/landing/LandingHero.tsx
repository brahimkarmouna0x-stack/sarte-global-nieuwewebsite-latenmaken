import { LANDING_HERO } from "@/constants";

import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";

const PROJECT_TYPE = "Nieuwe website laten maken";

export function LandingHero() {
  return (
    <section className="lp-hero" aria-labelledby="lp-hero-h">
      <span className="lp-hero__orb lp-hero__orb--a" aria-hidden="true" />
      <span className="lp-hero__orb lp-hero__orb--b" aria-hidden="true" />

      <Container className="lp-hero__inner">
        <p className="eyebrow lp-hero__eyebrow">{LANDING_HERO.eyebrow}</p>
        <h1 className="h2 lp-hero__title" id="lp-hero-h">
          {LANDING_HERO.titleLead} <em>{LANDING_HERO.titleEm}</em>
        </h1>
        <p className="sub lp-hero__sub">{LANDING_HERO.sub}</p>

        <div className="lp-hero__cta">
          <CTAButton
            label={LANDING_HERO.primaryCta}
            variant="primary"
            size="large"
            projectType={PROJECT_TYPE}
          />
          <a href={LANDING_HERO.secondaryCta.href} className="btn btn-ghost">
            {LANDING_HERO.secondaryCta.label}
          </a>
        </div>

        <ul className="lp-hero__benefits" aria-label="Inbegrepen">
          {LANDING_HERO.benefits.map((benefit) => (
            <li key={benefit} className="lp-hero__benefit">
              <span className="lp-hero__benefit-dot" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>

        <ul className="lp-hero__trust" aria-label="Waarom Sarte Global">
          {LANDING_HERO.trust.map((item) => (
            <li key={item} className="lp-hero__trust-item">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
