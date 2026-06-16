import Image from "next/image";

import {
  LANDING_MEANING,
  LANDING_WHY,
  type LandingWhyContent,
} from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ServiceIcon } from "../ui/ServiceIcon";

const DEFAULT_CONTENT: LandingWhyContent = {
  ...LANDING_WHY,
  paragraphs: LANDING_MEANING.paragraphs,
};

interface LandingWhyProps {
  readonly content?: LandingWhyContent;
}

/**
 * Section 03 — "Why Sarte Global": an alternating media/narrative row that folds
 * in the SEO meaning copy, followed by a five-pillar capability grid
 * (Strategie, Design, Development, SEO, Performance). Defaults to the website
 * copy; pass `content` to retarget it (e.g. "Why WordPress" / WooCommerce).
 */
export function LandingWhy({ content = DEFAULT_CONTENT }: LandingWhyProps = {}) {
  return (
    <section className="wlm-why" aria-labelledby="wlm-why-h">
      <Container>
        <Reveal as="header" className="section-head wlm-why__head">
          <div>
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="h2" id="wlm-why-h">
              {content.titleLead} <em>{content.titleEm}</em>
            </h2>
          </div>
          <p className="sub wlm-why__lead">{content.lead}</p>
        </Reveal>

        <div className="wlm-why__row">
          <Reveal as="aside" className="wlm-why__media" ariaLabel={content.media.caption}>
            <span className="wlm-why__media-frame" aria-hidden="true" />
            <Image
              src={content.media.image}
              alt={content.media.alt}
              fill
              sizes="(max-width: 980px) 92vw, 46vw"
              className="wlm-why__media-img"
              quality={75}
              loading="lazy"
            />
            <span className="wlm-why__media-shade" aria-hidden="true" />
            <div className="wlm-why__media-tag">
              <span className="wlm-why__media-name">{content.media.caption}</span>
              <span className="wlm-why__media-loc">{content.media.tag}</span>
            </div>
          </Reveal>

          <Reveal as="div" className="wlm-why__narrative">
            <div className="wlm-why__paragraphs">
              {content.paragraphs.slice(0, 2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="wlm-why__proof" aria-label="Onze belofte">
              {content.proof.map((item) => (
                <li key={item} className="wlm-why__proof-item">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="wlm-why__pillars">
          {content.pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              as="article"
              className="wlm-why__pillar"
              index={index}
            >
              <span className="wlm-why__pillar-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="wlm-why__pillar-icon" aria-hidden="true">
                <ServiceIcon name={pillar.iconName} />
              </span>
              <h3 className="wlm-why__pillar-title">{pillar.title}</h3>
              <p className="wlm-why__pillar-desc">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="wlm-why__check"
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
  );
}
