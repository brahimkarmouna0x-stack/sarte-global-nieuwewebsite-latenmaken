import {
  LANDING_CASES,
  LANDING_CASES_SECTION,
  type LandingCaseItem,
} from "@/constants";
import type { CSSVarStyle } from "@/types";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface LandingCasesSection {
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly sub: string;
  /** Per-card badge text (e.g. "Voorbeeldcase") marking these as illustrative. */
  readonly label?: string;
  /** Visible disclaimer so the figures are never read as real client results. */
  readonly disclaimer?: string;
}

interface LandingCasesProps {
  readonly section?: LandingCasesSection;
  readonly items?: readonly LandingCaseItem[];
}

/**
 * Section — "Resultaten voor onze klanten": case-study cards with a browser
 * mockup bar, before/after metrics and a compare row. Renders the existing
 * `LANDING_CASES` data; pass `section`/`items` to retarget per service.
 */
export function LandingCases({
  section = LANDING_CASES_SECTION,
  items = LANDING_CASES,
}: LandingCasesProps = {}) {
  return (
    <section className="wlm-cases" aria-labelledby="wlm-cases-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{section.eyebrow}</span>
          <h2 className="h2" id="wlm-cases-h">
            {section.titleLead} <em>{section.titleEm}</em>
          </h2>
          <p className="sub">{section.sub}</p>
          {section.disclaimer ? (
            <p className="wlm-cases__disclaimer">{section.disclaimer}</p>
          ) : null}
        </Reveal>

        <div className="wlm-cases__grid">
          {items.map((item, index) => (
            <Reveal
              key={item.id}
              as="article"
              className="wlm-cases__card"
              index={index}
              style={{ "--case-accent": item.accent } as CSSVarStyle}
            >
              <div className="wlm-cases__bar">
                <span className="wlm-cases__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="wlm-cases__url" aria-hidden="true">
                  {item.domain}
                </span>
                {section.label ? (
                  <span className="wlm-cases__badge">{section.label}</span>
                ) : null}
              </div>

              <div className="wlm-cases__body">
                <span className="wlm-cases__tag">{item.tag}</span>
                <h3 className="wlm-cases__title">{item.title}</h3>
                <p className="wlm-cases__summary">{item.summary}</p>

                <div className="wlm-cases__metrics">
                  {item.metrics.map((metric) => (
                    <div key={metric.label} className="wlm-cases__metric">
                      <span className="wlm-cases__metric-value">
                        {metric.value}
                      </span>
                      <span className="wlm-cases__metric-label">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="wlm-cases__compare">
                  <span className="wlm-cases__compare-label">
                    {item.compare.label}
                  </span>
                  <span className="wlm-cases__compare-track">
                    <span className="wlm-cases__compare-before">
                      Voor {item.compare.before}
                    </span>
                    <span
                      className="wlm-cases__compare-arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                    <span className="wlm-cases__compare-after">
                      Na {item.compare.after}
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
