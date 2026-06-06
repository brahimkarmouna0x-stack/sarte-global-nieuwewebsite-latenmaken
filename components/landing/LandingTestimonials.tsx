import Image from "next/image";

import { LANDING_TESTIMONIALS_SECTION, TESTIMONIALS } from "@/constants";
import type { Testimonial } from "@/types";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const QUOTES = TESTIMONIALS.slice(0, 8);
const TRACK = [
  ...QUOTES.map((t) => ({ ...t, dup: false })),
  ...QUOTES.map((t) => ({ ...t, dup: true })),
];

/**
 * Section 08 — premium testimonials. Large quote cards auto-scroll in a seamless
 * marquee (pure CSS, pauses on hover/focus). The duplicated set is hidden from AT.
 */
export function LandingTestimonials() {
  return (
    <section
      className="wlm-quotes"
      aria-labelledby="wlm-quotes-h"
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 560px" }}
    >
      <Container>
        <Reveal as="header" className="section-head centered">
          <span className="eyebrow">{LANDING_TESTIMONIALS_SECTION.eyebrow}</span>
          <h2 className="h2" id="wlm-quotes-h">
            {LANDING_TESTIMONIALS_SECTION.titleLead}{" "}
            <em>{LANDING_TESTIMONIALS_SECTION.titleEm}</em>
          </h2>
          <p className="sub wlm-quotes__sub">
            {LANDING_TESTIMONIALS_SECTION.sub}
          </p>
          <div className="wlm-quotes__score">
            <Stars rating={5} />
            <strong>{LANDING_TESTIMONIALS_SECTION.score}</strong>
            <span>{LANDING_TESTIMONIALS_SECTION.scoreLabel}</span>
          </div>
        </Reveal>
      </Container>

      <div className="wlm-quotes__viewport">
        <div className="wlm-quotes__track">
          {TRACK.map((quote, index) => (
            <QuoteCard
              key={`${quote.dup ? "b" : "a"}-${quote.name}`}
              quote={quote}
              hidden={quote.dup}
              priority={!quote.dup && index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteCard({
  quote,
  hidden,
  priority,
}: {
  quote: Testimonial;
  hidden: boolean;
  priority: boolean;
}) {
  return (
    <article className="wlm-quote" aria-hidden={hidden || undefined}>
      <span className="wlm-quote__mark" aria-hidden="true">
        &ldquo;
      </span>
      <Stars rating={quote.rating} />
      <p className="wlm-quote__text">{quote.content}</p>
      <div className="wlm-quote__author">
        <span className="wlm-quote__avatar">
          <Image
            src={quote.image}
            alt={hidden ? "" : quote.name}
            fill
            sizes="48px"
            quality={75}
            loading={priority ? "eager" : "lazy"}
            className="wlm-quote__avatar-img"
          />
        </span>
        <span className="wlm-quote__meta">
          <span className="wlm-quote__name">{quote.name}</span>
          <span className="wlm-quote__time">{quote.time}</span>
        </span>
      </div>
    </article>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="wlm-quote__stars"
      role="img"
      aria-label={`${rating} van de 5 sterren`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={`wlm-quote__star${index < Math.round(rating) ? " is-on" : ""}`}
          aria-hidden="true"
        >
          <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.95 2.6.94-5.5-4-3.9 5.53-.8L10 1.6z" />
        </svg>
      ))}
    </div>
  );
}
