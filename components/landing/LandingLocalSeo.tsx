import Link from "next/link";

import { LANDING_LOCAL_SEO } from "@/constants";
import { CITIES, LOCATION_SERVICES } from "@/constants/locations";

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
}

// The keyword dimension the city badges link to (e.g. website-laten-maken-[stad]).
const LOCATION_PREFIX = LOCATION_SERVICES[0]!.prefix;

/**
 * Section — "Werkzaam in heel Nederland": a local-SEO block that links to the
 * programmatic city pages (single source: constants/locations.ts). Doubles as an
 * internal-link hub from every landing page to the city × service pages.
 */
export function LandingLocalSeo({
  serviceLabel = "Nieuwe website laten maken",
  content = LANDING_LOCAL_SEO,
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
              {CITIES.map((city) => (
                <li key={city.slug} className="wlm-local__city">
                  <Link
                    href={`/${LOCATION_PREFIX}-${city.slug}`}
                    className="wlm-local__city-link"
                  >
                    <span className="wlm-local__pin" aria-hidden="true">
                      <PinIcon />
                    </span>
                    {city.name}
                  </Link>
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
