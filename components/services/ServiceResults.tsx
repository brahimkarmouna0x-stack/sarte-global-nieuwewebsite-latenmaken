import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface ResultCase {
  readonly stat: string;
  readonly statLabel: string;
  readonly title: string;
  readonly description: string;
  readonly metric: string;
}

interface ServiceResultsProps {
  readonly title?: string;
  readonly eyebrow?: string;
  readonly cases?: readonly ResultCase[];
}

const DEFAULT_CASES: readonly ResultCase[] = [
  {
    stat: "+200%",
    statLabel: "meer aanvragen",
    title: "TechSaaS lanceert nieuwe website",
    description: "Vervanging van een verouderde WordPress-site door een snelle Next.js-ervaring. De laadtijd daalde van 4,2s naar 0,8s.",
    metric: "Conversie steeg met +200% in 3 maanden",
  },
  {
    stat: "+156%",
    statLabel: "meer omzet",
    title: "D2C-merk vernieuwt webshop",
    description: "Een geoptimaliseerde checkout-flow en mobile-first ontwerp resulteerden in een forse omzetstijging.",
    metric: "Gemiddelde orderwaarde steeg met +34%",
  },
  {
    stat: "+118%",
    statLabel: "organisch verkeer",
    title: "Lokaal bedrijf scoort met SEO",
    description: "Technische SEO-audit, contentstrategie en lokale optimalisatie leverden een verdubbeling van het organische verkeer op.",
    metric: "Top 3-posities op 27 zoekwoorden",
  },
];

export function ServiceResults({
  title = "Resultaten voor onze klanten.",
  eyebrow = "Resultaten",
  cases = DEFAULT_CASES,
}: ServiceResultsProps) {
  return (
    <section className="svc-results" aria-labelledby="svc-results-h">
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h2" id="svc-results-h">
              {title}
            </h2>
          </div>
        </Reveal>

        <div className="svc-results__grid">
          {cases.map((result, index) => (
            <Reveal
              key={result.title}
              as="article"
              className="svc-results__card"
              index={index}
            >
              <div className="svc-results__card-stat">
                <span className="svc-results__card-stat-val">
                  {result.stat}
                </span>
                <span className="svc-results__card-stat-lbl">
                  {result.statLabel}
                </span>
              </div>
              <div className="svc-results__card-body">
                <h3 className="svc-results__card-title">{result.title}</h3>
                <p className="svc-results__card-desc">{result.description}</p>
                <div className="svc-results__card-metric">
                  <span className="svc-results__card-metric-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </svg>
                  </span>
                  {result.metric}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
