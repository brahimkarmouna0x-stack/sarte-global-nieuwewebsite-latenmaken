import type { CSSVarStyle, Service } from "@/types";

import { Container } from "../ui/Container";

const CHART_BARS = [38, 56, 47, 72, 64, 88, 100] as const;

interface ServicePageHeroProps {
  service: Service;
}

/**
 * Premium SaaS-style hero:
 * LEFT  – trust badge, H1, description, CTAs, social proof, stats
 * RIGHT – interactive browser mockup with dashboard preview
 */
export function ServicePageHero({ service }: ServicePageHeroProps) {
  return (
    <section className="svc-page-hero" aria-labelledby={`svc-${service.slug}-h`}>
      <span className="svc-page-hero__orb svc-page-hero__orb--a" aria-hidden="true" />
      <span className="svc-page-hero__orb svc-page-hero__orb--b" aria-hidden="true" />

      <Container className="svc-page-hero__inner">
        {/* LEFT COLUMN – Copy */}
        <div className="svc-page-hero__copy">
          <span className="svc-page-hero__badge">
            <span className="svc-page-hero__badge-dot" aria-hidden="true" />
            {service.heroEyebrow}
          </span>

          <h1 className="h2 svc-page-hero__title" id={`svc-${service.slug}-h`}>
            {service.heroTitleLead} <em>{service.heroTitleEm}</em>
          </h1>

          <p className="sub svc-page-hero__sub">{service.tagline}</p>

          <div className="svc-page-hero__cta">
            <a href="#pakketten" className="btn btn-primary btn-large">
              {service.cta.primaryLabel}
              <span className="arr">→</span>
            </a>
            <a href={service.cta.secondaryHref} className="btn btn-ghost btn-large">
              {service.cta.secondaryLabel}
            </a>
          </div>

          {/* Honest capability signals — no fabricated reviews/track record. */}
          <div className="svc-page-hero__trust">
            <ul className="svc-page-hero__stats" aria-label="Kenmerken">
              <li className="svc-page-hero__stat">
                <span className="svc-page-hero__stat-val">±2 wkn</span>
                <span className="svc-page-hero__stat-lbl">snelle oplevering</span>
              </li>
              <li className="svc-page-hero__stat">
                <span className="svc-page-hero__stat-val">100%</span>
                <span className="svc-page-hero__stat-lbl">responsive design</span>
              </li>
              <li className="svc-page-hero__stat">
                <span className="svc-page-hero__stat-val">NL</span>
                <span className="svc-page-hero__stat-lbl">werkzaam in heel Nederland</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN – Visual mockup */}
        <div className="svc-page-hero__visual" aria-hidden="true">
          <span className="svc-page-hero__visual-glow" />

          <div
            className="svc-page-hero__mock"
            role="img"
            aria-label={`Voorbeeld van een ${service.name.toLowerCase()} project met live statistieken.`}
          >
            {/* Browser chrome */}
            <div className="svc-page-hero__chrome">
              <span className="svc-page-hero__dot" />
              <span className="svc-page-hero__dot" />
              <span className="svc-page-hero__dot" />
              <span className="svc-page-hero__url">{service.name}</span>
            </div>

            {/* Screen content */}
            <div className="svc-page-hero__screen">
              {/* Site header preview */}
              <div className="svc-page-hero__site-nav">
                <span className="svc-page-hero__site-logo" />
                <span className="svc-page-hero__site-links">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="svc-page-hero__site-btn" />
              </div>

              {/* Hero area preview */}
              <div className="svc-page-hero__site-hero">
                <span className="svc-page-hero__bar svc-page-hero__bar--xl" />
                <span className="svc-page-hero__bar svc-page-hero__bar--lg" />
                <span className="svc-page-hero__bar svc-page-hero__bar--md" />
                <span className="svc-page-hero__site-cta" />
              </div>

              {/* Analytics widget */}
              <div className="svc-page-hero__widget">
                <div className="svc-page-hero__widget-head">
                  <span className="svc-page-hero__widget-title" />
                  <span className="svc-page-hero__widget-chip">
                    +
                    {service.number === "01" ? "200" : service.number === "02" ? "156" : service.number === "05" ? "118" : "85"}%
                  </span>
                </div>
                <div className="svc-page-hero__chart">
                  {CHART_BARS.map((height, index) => (
                    <span
                      key={index}
                      style={{ "--h": `${height}%`, "--bd": `${index * 90}ms` } as CSSVarStyle}
                    />
                  ))}
                </div>
              </div>

              {/* Feature cards preview */}
              <div className="svc-page-hero__features">
                {service.features.slice(0, 3).map((f, i) => (
                  <div key={i} className="svc-page-hero__feature">
                    <span className="svc-page-hero__feature-icon" />
                    <div>
                      <span className="svc-page-hero__feature-title">{f.title}</span>
                      <span className="svc-page-hero__feature-desc">{f.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating pills */}
          {[
            `Live in ${service.number === "03" ? "1 week" : "2-4 weken"}`,
            service.number === "01" ? "Professioneel ontwerp" : service.number === "02" ? "iDEAL & meer" : service.number === "05" ? "SEO-garantie" : "Maatwerk",
            service.number === "04" ? "Design systeem" : service.number === "06" ? "Cross-platform" : "100% responsive",
            service.number === "07" ? "AI-integratie" : service.number === "08" ? "Merkstrategie" : service.number === "09" ? "Adverteren" : "Modern & snel",
          ].map((label, index) => (
            <span
              key={label}
              className={`svc-page-hero__pill svc-page-hero__pill--${index}`}
              aria-hidden="true"
            >
              <span className="svc-page-hero__pill-dot" />
              {label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
