import { LANDING_INDUSTRIES, LANDING_INDUSTRIES_SECTION } from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { LandingIndustryIcon } from "./LandingIndustryIcon";

/**
 * Section 07 — industries we serve. Interactive cards with hover micro-interactions
 * (accent glow, icon lift) that stagger in on scroll.
 */
export function LandingIndustries() {
  return (
    <section className="wlm-ind" aria-labelledby="wlm-ind-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{LANDING_INDUSTRIES_SECTION.eyebrow}</span>
          <h2 className="h2" id="wlm-ind-h">
            {LANDING_INDUSTRIES_SECTION.titleLead}{" "}
            <em>{LANDING_INDUSTRIES_SECTION.titleEm}</em>
          </h2>
          <p className="sub wlm-ind__sub">{LANDING_INDUSTRIES_SECTION.sub}</p>
        </Reveal>

        <div className="wlm-ind__grid">
          {LANDING_INDUSTRIES.map((industry, index) => (
            <Reveal
              key={industry.title}
              as="article"
              className="wlm-ind__card"
              index={index}
            >
              <span className="wlm-ind__card-glow" aria-hidden="true" />
              <span className="wlm-ind__card-icon" aria-hidden="true">
                <LandingIndustryIcon name={industry.icon} />
              </span>
              <h3 className="wlm-ind__card-title">{industry.title}</h3>
              <p className="wlm-ind__card-desc">{industry.description}</p>
              <span className="wlm-ind__card-arrow" aria-hidden="true">
                →
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
