import { LANDING_LOCAL_SEO } from "@/constants";
import { SERVICE_CITIES } from "@/lib/seo";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface LandingLocalSeoContent {
  readonly eyebrow: string;
  readonly lead: string;
  readonly note: string;
}

interface LandingLocalSeoProps {
  /** Service name used in the heading, e.g. "Webshop laten maken". */
  readonly serviceLabel?: string;
  readonly content?: LandingLocalSeoContent;
  readonly cities?: readonly string[];
}

/**
 * Section — "Werkzaam in heel Nederland": a local-SEO block that names the key
 * cities (single source: SERVICE_CITIES, shared with the Service schema). Cities
 * render as non-clickable badges for now; wire links once city pages exist.
 */
export function LandingLocalSeo({
  serviceLabel = "Nieuwe website laten maken",
  content = LANDING_LOCAL_SEO,
  cities = SERVICE_CITIES,
}: LandingLocalSeoProps = {}) {
  return (
    <section className="wlm-local" aria-labelledby="wlm-local-h">
      <Container>
        <div className="wlm-local__inner">
          <Reveal as="header" className="wlm-local__head">
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="h2" id="wlm-local-h">
              {serviceLabel} in <em>heel Nederland.</em>
            </h2>
            <p className="sub wlm-local__lead">{content.lead}</p>
          </Reveal>

          <Reveal as="div" className="wlm-local__cities-wrap">
            <ul
              className="wlm-local__cities"
              aria-label="Steden waar we actief zijn"
            >
              {cities.map((city) => (
                <li key={city} className="wlm-local__city">
                  <span className="wlm-local__pin" aria-hidden="true">
                    <PinIcon />
                  </span>
                  {city}
                </li>
              ))}
            </ul>
            <p className="wlm-local__note">{content.note}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M8 1.5c-2.5 0-4.5 2-4.5 4.5 0 3.2 4.5 8 4.5 8s4.5-4.8 4.5-8c0-2.5-2-4.5-4.5-4.5z" />
      <circle cx="8" cy="6" r="1.6" />
    </svg>
  );
}
