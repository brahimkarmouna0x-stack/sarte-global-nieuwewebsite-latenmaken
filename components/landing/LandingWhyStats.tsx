import {
  LANDING_WHY_STATS,
  LANDING_WHY_STATS_SECTION,
  type LandingStatCard,
} from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ServiceIcon } from "../ui/ServiceIcon";

interface LandingWhyStatsSection {
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly sub: string;
}

interface LandingWhyStatsProps {
  readonly section?: LandingWhyStatsSection;
  readonly items?: readonly LandingStatCard[];
}

/**
 * Section 02b — "Waarom kiezen voor ons": a six-card stat grid (icon + headline
 * figure + reason). Distinct from the narrative `LandingWhy`; defaults to the
 * website copy, pass `section`/`items` to retarget per service.
 */
export function LandingWhyStats({
  section = LANDING_WHY_STATS_SECTION,
  items = LANDING_WHY_STATS,
}: LandingWhyStatsProps = {}) {
  return (
    <section className="wlm-stats" aria-labelledby="wlm-stats-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{section.eyebrow}</span>
          <h2 className="h2" id="wlm-stats-h">
            {section.titleLead} <em>{section.titleEm}</em>
          </h2>
          <p className="sub">{section.sub}</p>
        </Reveal>

        <div className="wlm-stats__grid">
          {items.map((item, index) => (
            <Reveal
              key={item.title}
              as="article"
              className="wlm-stats__card"
              index={index}
            >
              <span className="wlm-stats__icon" aria-hidden="true">
                <ServiceIcon name={item.iconName} />
              </span>
              <span className="wlm-stats__value">{item.value}</span>
              <h3 className="wlm-stats__title">{item.title}</h3>
              <p className="wlm-stats__desc">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
