import { NEW_WEBSITE_MEANING, NEW_WEBSITE_WHY } from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface NewWebsiteSeoProps {
  /** Optional service name to make the heading read naturally on a service page. */
  readonly serviceName?: string;
}

export function NewWebsiteSeo({ serviceName }: NewWebsiteSeoProps) {
  const whyTitle = serviceName
    ? `Waarom kiezen voor jouw nieuwe ${serviceName.toLowerCase()} bij onze agency?`
    : NEW_WEBSITE_WHY.title;

  return (
    <section className="nws" aria-labelledby="nws-meaning-h">
      <Container>
        <Reveal as="div" className="nws__block">
          <header className="nws__head">
            <span className="eyebrow">{NEW_WEBSITE_MEANING.eyebrow}</span>
            <h2 className="h2 nws__title" id="nws-meaning-h">
              {NEW_WEBSITE_MEANING.title}
            </h2>
          </header>

          <div className="nws__meaning">
            <div className="nws__paragraphs">
              {NEW_WEBSITE_MEANING.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="nws__points">
              {NEW_WEBSITE_MEANING.points.map((point) => (
                <li key={point.title} className="nws__point">
                  <h3 className="nws__point-title">{point.title}</h3>
                  <p className="nws__point-desc">{point.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal as="div" className="nws__block" ariaLabelledby="nws-why-h">
          <header className="nws__head">
            <span className="eyebrow">{NEW_WEBSITE_WHY.eyebrow}</span>
            <h2 className="h2 nws__title" id="nws-why-h">
              {whyTitle}
            </h2>
            <p className="sub nws__intro">{NEW_WEBSITE_WHY.intro}</p>
          </header>

          <ul className="nws__advantages">
            {NEW_WEBSITE_WHY.advantages.map((advantage, index) => (
              <li key={advantage.title} className="nws__advantage">
                <span className="nws__advantage-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="nws__advantage-title">{advantage.title}</h3>
                <p className="nws__advantage-desc">{advantage.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
