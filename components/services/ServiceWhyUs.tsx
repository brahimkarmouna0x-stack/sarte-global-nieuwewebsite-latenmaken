import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export interface WhyUsCard {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly stat?: { readonly value: string; readonly label: string };
}

interface ServiceWhyUsProps {
  readonly title?: string;
  readonly eyebrow?: string;
  readonly cards?: readonly WhyUsCard[];
}

export const DEFAULT_WHY_US_CARDS: readonly WhyUsCard[] = [
  {
    icon: "star",
    title: "Vaste specialist",
    description: "Eén vast teamlid dat jouw bedrijf, doelgroep en doelen tot in detail kent — geen wisselende gezichten.",
    stat: { value: "1", label: "vast aanspreekpunt" },
  },
  {
    icon: "clock",
    title: "Snelle oplevering",
    description: "Van kennismaking tot livegang in gemiddeld 2 tot 4 weken. Geen maandenlang wachten op een website.",
    stat: { value: "2-4", label: "weken oplevering" },
  },
  {
    icon: "chart",
    title: "Conversiegericht",
    description: "Elke pagina, knop en tekst is ontworpen om bezoekers om te zetten in klanten. Data-driven optimalisatie.",
    stat: { value: "+85%", label: "gem. conversiegroei" },
  },
  {
    icon: "search",
    title: "SEO vanaf dag één",
    description: "Technische SEO, schema-markup en metadata zijn standaard inbegrepen. Je wordt gevonden vanaf de lancering.",
    stat: { value: "100/100", label: "SEO-score" },
  },
  {
    icon: "shield",
    title: "Veilig & schaalbaar",
    description: "Moderne stack met veilige architectuur, automatische back-ups en monitoring. Klaar voor groei.",
    stat: { value: "99,9%", label: "uptime" },
  },
  {
    icon: "heart",
    title: "Klanttevredenheid",
    description: "Onze klanten beoordelen ons met een 4,9/5. Niet omdat we perfect zijn, maar omdat we écht meedenken.",
    stat: { value: "4,9", label: "gem. beoordeling" },
  },
];

export function ServiceWhyUs({
  title = "Waarom kiezen bedrijven voor ons?",
  eyebrow = "Waarom Sarte Global",
  cards = DEFAULT_WHY_US_CARDS,
}: ServiceWhyUsProps) {
  return (
    <section className="svc-why-us" aria-labelledby="svc-why-us-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h2" id="svc-why-us-h">
            {title}
          </h2>
        </Reveal>

        <div className="svc-why-us__grid">
          {cards.map((card, index) => (
            <Reveal
              key={card.title}
              as="article"
              className="svc-why-us__card"
              index={index}
            >
              <div className="svc-why-us__card-icon" aria-hidden="true">
                <WhyUsIcon name={card.icon} />
              </div>
              <h3 className="svc-why-us__card-title">{card.title}</h3>
              <p className="svc-why-us__card-desc">{card.description}</p>
              {card.stat && (
                <div className="svc-why-us__card-stat">
                  <span className="svc-why-us__card-stat-val">{card.stat.value}</span>
                  <span className="svc-why-us__card-stat-lbl">{card.stat.label}</span>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyUsIcon({ name }: { name: string }) {
  const props: Record<string, string> = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "star":
      return (<svg {...props}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>);
    case "clock":
      return (<svg {...props}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>);
    case "chart":
      return (<svg {...props}><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>);
    case "search":
      return (<svg {...props}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>);
    case "shield":
      return (<svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
    case "heart":
      return (<svg {...props}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>);
    case "cpu":
      return (<svg {...props}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /></svg>);
    case "layers":
      return (<svg {...props}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>);
    case "lightning":
      return (<svg {...props}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>);
    default:
      return (<svg {...props}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>);
  }
}
