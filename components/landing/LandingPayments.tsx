import { PAYMENT_METHODS, type LandingPaymentsContent } from "@/constants";
import type { CSSVarStyle } from "@/types";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ServiceIcon } from "../ui/ServiceIcon";
import { PaymentIcon } from "../ui/PaymentIcon";

interface LandingPaymentsProps {
  readonly content: LandingPaymentsContent;
}

/**
 * Payment & integrations section for the webshop page. Reuses the footer's
 * `PaymentIcon` + `PAYMENT_METHODS` for the recognised brand logos, lists extra
 * methods as text chips and adds supporting integration highlight cards.
 */
export function LandingPayments({ content }: LandingPaymentsProps) {
  return (
    <section className="wlm-pay" aria-labelledby="wlm-pay-h">
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="h2" id="wlm-pay-h">
            {content.titleLead} <em>{content.titleEm}</em>
          </h2>
          <p className="sub wlm-pay__sub">{content.sub}</p>
        </Reveal>

        <Reveal
          as="div"
          className="wlm-pay__methods"
          ariaLabel="Geaccepteerde betaalmethoden"
        >
          <ul className="wlm-pay__icons" role="list">
            {PAYMENT_METHODS.map((method) => (
              <li
                key={method.id}
                className="wlm-pay__icon"
                style={{ "--brand-color": method.color } as CSSVarStyle}
                title={method.label}
                aria-label={method.label}
              >
                <PaymentIcon id={method.id} />
              </li>
            ))}
          </ul>

          {content.extra.length > 0 ? (
            <ul className="wlm-pay__chips" role="list">
              {content.extra.map((label) => (
                <li key={label} className="wlm-pay__chip">
                  {label}
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>

        <div className="wlm-pay__grid">
          {content.features.map((feature, index) => (
            <Reveal
              key={feature.title}
              as="article"
              className="wlm-pay__card"
              index={index}
            >
              <span className="wlm-pay__card-icon" aria-hidden="true">
                <ServiceIcon name={feature.iconName} />
              </span>
              <h3 className="wlm-pay__card-title">{feature.title}</h3>
              <p className="wlm-pay__card-desc">{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
