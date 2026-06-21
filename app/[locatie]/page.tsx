import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingCases } from "@/components/landing/LandingCases";
import { LandingFeaturesSlider } from "@/components/landing/LandingFeaturesSlider";
import { LandingFinalCTA } from "@/components/landing/LandingFinalCTA";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingProcess } from "@/components/landing/LandingProcess";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getLocationPage, getLocationSlugs } from "@/lib/programmatic";
import {
  buildBreadcrumbTrail,
  buildFaqSchema,
  buildServiceSchema,
} from "@/lib/seo";

// Only the generated city × service combos are valid; everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return getLocationSlugs().map((locatie) => ({ locatie }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locatie: string }>;
}): Promise<Metadata> {
  const { locatie } = await params;
  const page = getLocationPage(locatie);
  if (!page) return {};

  return {
    // `absolute`: page.metaTitle already ends in "| Sarte Global"; opt out of the
    // root title template so the brand isn't duplicated.
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: page.path },
    keywords: [...page.keywords],
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: page.path,
      type: "website",
      images: [
        {
          url: "/images/company-img.png",
          width: 1200,
          height: 800,
          alt: `${page.service.label} in ${page.city.name} · Sarte Global`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/images/company-img.png"],
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ locatie: string }>;
}) {
  const { locatie } = await params;
  const page = getLocationPage(locatie);
  if (!page) notFound();

  const serviceJsonLd = buildServiceSchema({
    path: page.path,
    name: `${page.service.label} in ${page.city.name}`,
    description: page.serviceDescription,
    offerCatalogName: `${page.service.label} in ${page.city.name}`,
    offers: page.benefits.map((benefit) => ({ title: benefit, description: benefit })),
    areaServed: [{ "@type": "City", name: page.city.name }],
  });

  const breadcrumbJsonLd = buildBreadcrumbTrail([
    { name: page.service.parentLabel, path: page.service.parentPath },
    { name: page.city.name, path: page.path },
  ]);

  const faqJsonLd = buildFaqSchema(page.faq);

  return (
    <main className="wlm" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* emitFaq=false: this page already emits a city-specific FAQPage above */}
      <PricingSchema serviceSlug="web-development" emitFaq={false} />

      <LandingHero content={page.hero} />

      <TrustedMarquee />

      {/* Unique, city-specific intro — the page's primary differentiator */}
      <section className="lp-intro" aria-labelledby="lp-intro-h">
        <Container>
          <Reveal as="header" className="section-head">
            <span className="eyebrow">{page.service.label}</span>
            <h2 className="h2" id="lp-intro-h">
              {page.introHeading}
            </h2>
          </Reveal>
          {page.introParagraphs.map((paragraph) => (
            <p key={paragraph} className="sub lp-intro__p">
              {paragraph}
            </p>
          ))}

          <h3 className="lp-intro__benefits-h">{page.benefitsHeading}</h3>
          <ul className="lp-intro__benefits">
            {page.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </Container>
      </section>

      <LandingWhyStats />
      <LandingProcess />
      <LandingFeaturesSlider />
      <LandingCases />

      <PricingSection defaultServiceSlug="web-development" />

      <FAQAccordion items={page.faq} title={page.faqHeading} />

      <LandingFinalCTA />

      {/* Internal linking — parent service, nearby cities, related services */}
      <section className="lp-related" aria-label="Gerelateerde pagina's">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href={page.service.parentPath}>{page.service.parentLabel}</Link>
            {page.nearby.map((city) => (
              <Link key={city.href} href={city.href}>
                {page.service.label} {city.name}
              </Link>
            ))}
            {page.crossLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}
            <Link href="/webshop-laten-maken">Webshop laten maken</Link>
            <Link href="/seo-optimalisatie">SEO optimalisatie</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
