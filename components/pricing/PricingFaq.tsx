import type { PricingFaqItem } from "@/types";

interface PricingFaqProps {
  readonly items: readonly PricingFaqItem[];
  readonly eyebrow: string;
  readonly title: string;
}

export function PricingFaq({ items, eyebrow, title }: PricingFaqProps) {
  return (
    <section className="mt-12 sm:mt-16" aria-labelledby="pr-faq-h">
      <header className="mx-auto mb-7 flex max-w-2xl flex-col items-center text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h3
          id="pr-faq-h"
          className="mt-3 font-[family-name:var(--font-display)] text-[clamp(22px,2.8vw,32px)] font-bold leading-[1.1] tracking-[-0.02em] text-(--color-text)"
        >
          {title}
        </h3>
      </header>

      <div className="lp-faq__list">
        {items.map((item) => (
          <details className="lp-faq__item" name="pr-faq" key={item.question}>
            <summary className="lp-faq__question">
              <span>{item.question}</span>
              <span className="lp-faq__icon" aria-hidden="true" />
            </summary>
            <p className="lp-faq__answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
