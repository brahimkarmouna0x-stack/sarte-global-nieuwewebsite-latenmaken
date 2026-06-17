import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceRelatedProjects } from "@/components/services/ServiceRelatedProjects";
import { ServiceResults } from "@/components/services/ServiceResults";
import { ServiceTech } from "@/components/services/ServiceTech";
import { ServiceWhyUs } from "@/components/services/ServiceWhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { SERVICE_FAQ, SERVICE_LANDING_PAGE_BY_SLUG, SERVICES, SITE } from "@/constants";

const SITE_URL = SITE.url;

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// The service set is a fixed, known list. Disallow unknown params so an
// invalid slug returns a real 404 (not a soft 200) at the routing layer.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  const title = service.name;
  const description = service.tagline;
  // Slugs with a dedicated keyword landing page 308-redirect there (see
  // next.config.mjs). Point their canonical at the landing page too, so any
  // pre-redirect crawl consolidates to one URL instead of cannibalising.
  const landingPage =
    SERVICE_LANDING_PAGE_BY_SLUG[slug as keyof typeof SERVICE_LANDING_PAGE_BY_SLUG];
  const canonical = landingPage ?? `/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    keywords: [
      service.name,
      `${service.name} laten maken`,
      `nieuwe ${service.name.toLowerCase()}`,
      `professionele ${service.name.toLowerCase()}`,
      `${service.name} Nederland`,
      `${service.name} kosten`,
      `${service.name} prijs`,
      `${service.name.toLowerCase()} tarieven`,
      `Sarte Global ${service.name}`,
    ],
    openGraph: {
      title: `${title} · Sarte Global`,
      description,
      url: canonical,
      type: "website",
      images: [{ url: "/images/company-img.png", width: 1200, height: 800, alt: `${title} · Sarte Global` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · Sarte Global`,
      description,
      images: ["/images/company-img.png"],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    notFound();
    return null;
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.tagline,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Netherlands" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} - aanbod`,
      itemListElement: service.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature.title,
          description: feature.description,
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Diensten", item: `${SITE_URL}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  };

  return (
    <main className="service-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PricingSchema serviceSlug={service.slug} />
      {/* 01 — Premium Hero */}
      <ServicePageHero service={service} />

      {/* 02 — Features / Wat je krijgt */}
      <ServiceFeatures features={service.features} />

      {/* 03 — Waarom kiezen bedrijven voor ons */}
      <ServiceWhyUs />

      {/* 04 — Ons Proces (timeline) */}
      <ServiceProcess steps={service.process} />

      {/* 05 — Technologieën */}
      <ServiceTech techIds={service.techIds} />

      {/* 06 — Resultaten voor klanten */}
      <ServiceResults />

      {/* 07 — Portfolio / Recente projecten */}
      <ServiceRelatedProjects
        categories={service.relatedCategories}
        serviceName={service.name}
      />

      {/* 08 — Pakketten & Prijzen */}
      <PricingSection defaultServiceSlug={service.slug} />

      {/* 09 — Testimonials */}
      <Testimonials />

      {/* 10 — Veelgestelde vragen */}
      <FAQAccordion items={SERVICE_FAQ} />

      {/* 11 — Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel={service.name} />

      {/* 12 — Final CTA */}
      <ServiceCTA copy={service.cta} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/website-laten-maken">Website laten maken</Link>
            <Link href="/nextjs-website-laten-maken">Next.js website laten maken</Link>
            <Link href="/wordpress-website-laten-maken">WordPress website laten maken</Link>
            <Link href="/webshop-laten-maken">Webshop laten maken</Link>
            <Link href="/landing-page-laten-maken">Landing page laten maken</Link>
            <Link href="/webapp-laten-maken">Webapp laten maken</Link>
            <Link href="/seo-optimalisatie">SEO optimalisatie</Link>
            <Link href="/website-onderhoud">Website onderhoud</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
