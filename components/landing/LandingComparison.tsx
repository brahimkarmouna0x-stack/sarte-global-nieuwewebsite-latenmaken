import type { LandingComparisonContent } from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface LandingComparisonProps {
  readonly content: LandingComparisonContent;
}

/**
 * Data-driven comparison table — positions our maatwerk approach against DIY
 * website/webshop builders. Server component; styled with the shared `wlm-*`
 * tokens. Reusable across service pages via the `content` prop.
 */
export function LandingComparison({ content }: LandingComparisonProps) {
  return (
    <section className="wlm-cmp" aria-labelledby="wlm-cmp-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="h2" id="wlm-cmp-h">
            {content.titleLead} <em>{content.titleEm}</em>
          </h2>
          <p className="sub wlm-cmp__sub">{content.sub}</p>
        </Reveal>

        <Reveal as="div" className="wlm-cmp__table" ariaLabel="Vergelijking">
          <div className="wlm-cmp__row wlm-cmp__row--head">
            <span className="wlm-cmp__cell wlm-cmp__cell--label">Kenmerk</span>
            <span className="wlm-cmp__cell wlm-cmp__cell--us">
              {content.usLabel}
            </span>
            <span className="wlm-cmp__cell wlm-cmp__cell--them">
              {content.themLabel}
            </span>
          </div>

          {content.rows.map((row) => (
            <div className="wlm-cmp__row" key={row.label}>
              <span className="wlm-cmp__cell wlm-cmp__cell--label">
                {row.label}
              </span>
              <span className="wlm-cmp__cell wlm-cmp__cell--us">
                <Mark positive={row.usPositive ?? true} />
                <span className="wlm-cmp__value">{row.us}</span>
              </span>
              <span className="wlm-cmp__cell wlm-cmp__cell--them">
                <Mark positive={row.themPositive ?? false} />
                <span className="wlm-cmp__value">{row.them}</span>
              </span>
            </div>
          ))}
        </Reveal>

        {content.footnote ? (
          <Reveal as="div" className="wlm-cmp__note">
            <p>{content.footnote}</p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}

function Mark({ positive }: { readonly positive: boolean }) {
  return (
    <span
      className={`wlm-cmp__mark${positive ? " is-yes" : " is-no"}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {positive ? <path d="M4 10.5l4 4 8-9" /> : <path d="M6 6l8 8M14 6l-8 8" />}
      </svg>
    </span>
  );
}
