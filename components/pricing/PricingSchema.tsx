import { SITE, getServicePricing } from "@/constants";

interface PricingSchemaProps {
  readonly serviceSlug?: string;
  /** Set false on pages that already emit an FAQPage (e.g. the landing page). */
  readonly emitFaq?: boolean;
}

/**
 * Server component — emits structured data for the pricing section into the
 * initial HTML. Offers carry a fixed `price` + `priceCurrency` (EUR); recurring
 * tiers add a monthly `UnitPriceSpecification`. Bespoke tiers without a list
 * price (`amount: null`) are emitted price-free. The FAQPage drives the
 * "kosten/prijs" intent.
 */
export function PricingSchema({ serviceSlug, emitFaq = true }: PricingSchemaProps) {
  const data = getServicePricing(serviceSlug);
  const url = `${SITE.url}/services/${data.slug}`;

  const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: `${data.name} — pakketten`,
    url,
    itemListElement: data.tiers.map((tier) => ({
      "@type": "Offer",
      name: `${data.name} — ${tier.name}`,
      ...(tier.price.amount !== null
        ? {
            price: String(tier.price.amount),
            priceCurrency: "EUR",
            ...(tier.price.period === "maand"
              ? {
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: String(tier.price.amount),
                    priceCurrency: "EUR",
                    referenceQuantity: {
                      "@type": "QuantitativeValue",
                      value: 1,
                      unitCode: "MON",
                    },
                  },
                }
              : {}),
          }
        : {}),
      itemOffered: {
        "@type": "Service",
        name: `${data.name} — ${tier.name}`,
        description: tier.tagline,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: { "@type": "Country", name: "Netherlands" },
      },
    })),
  };

  const faqJsonLd = emitFaq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
    </>
  );
}
