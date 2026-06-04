import type { LandingFAQItem } from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface FAQAccordionProps {
  readonly items: readonly LandingFAQItem[];
  readonly title?: string;
  readonly eyebrow?: string;
}

export function FAQAccordion({
  items,
  title = "Veelgestelde vragen",
  eyebrow = "FAQ",
}: FAQAccordionProps) {
  return (
    <section className="lp-faq" aria-labelledby="lp-faq-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h2" id="lp-faq-h">
            {title}
          </h2>
        </Reveal>

        <div className="lp-faq__list">
          {items.map((item, index) => (
            <Reveal
              key={item.question}
              as="div"
              className="lp-faq__item-wrap"
              index={index}
            >
              <details className="lp-faq__item" name="lp-faq">
                <summary className="lp-faq__question">
                  <span>{item.question}</span>
                  <span className="lp-faq__icon" aria-hidden="true" />
                </summary>
                <p className="lp-faq__answer">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
