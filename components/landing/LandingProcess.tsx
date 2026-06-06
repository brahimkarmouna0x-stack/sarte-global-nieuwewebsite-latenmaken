import { LANDING_PROCESS } from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const SECTION = {
  eyebrow: "Werkwijze",
  titleLead: "Van eerste gesprek tot",
  titleEm: "groei na livegang.",
  sub: "Een heldere route in zes stappen. Je weet altijd waar we staan en wat de volgende stap is.",
} as const;

/**
 * Section 04 — premium vertical timeline. A gradient spine connects six numbered
 * nodes; cards lift on hover and stagger in on scroll.
 */
export function LandingProcess() {
  return (
    <section className="wlm-proc" id="proces" aria-labelledby="wlm-proc-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{SECTION.eyebrow}</span>
          <h2 className="h2" id="wlm-proc-h">
            {SECTION.titleLead} <em>{SECTION.titleEm}</em>
          </h2>
          <p className="sub wlm-proc__sub">{SECTION.sub}</p>
        </Reveal>

        <ol className="wlm-proc__list">
          {LANDING_PROCESS.map((step, index) => (
            <Reveal
              key={step.number}
              as="article"
              className="wlm-proc__step"
              index={index}
            >
              <div className="wlm-proc__spine" aria-hidden="true">
                <span className="wlm-proc__node">{step.number}</span>
              </div>
              <div className="wlm-proc__card">
                <h3 className="wlm-proc__step-title">{step.title}</h3>
                <p className="wlm-proc__step-desc">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
