import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingCases } from "@/components/landing/LandingCases";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingProcess } from "@/components/landing/LandingProcess";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
import { LandingComparison } from "@/components/landing/LandingComparison";
import { LandingFeaturesSlider } from "@/components/landing/LandingFeaturesSlider";
import { LandingFinalCTA } from "@/components/landing/LandingFinalCTA";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingTrustStats } from "@/components/landing/LandingTrustStats";
import { LandingWhy } from "@/components/landing/LandingWhy";
import { ProjectsSection } from "@/components/projects/projects-section";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { Container } from "@/components/ui/Container";
import {
  WORDPRESS_COMPARISON,
  WORDPRESS_FAQ,
  WORDPRESS_FEATURES,
  WORDPRESS_FINAL_CTA,
  WORDPRESS_HERO,
  WORDPRESS_META,
  WORDPRESS_PROJECT_TYPE,
  WORDPRESS_WHY,
} from "@/constants";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata(WORDPRESS_META);

const SERVICE_NAME = "WordPress website laten maken";

const SERVICE_JSON_LD = buildServiceSchema({
  path: WORDPRESS_META.path,
  name: SERVICE_NAME,
  description: WORDPRESS_META.description,
  offerCatalogName: "Voordelen van een WordPress-website",
  offers: WORDPRESS_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, WORDPRESS_META.path);
const FAQ_JSON_LD = buildFaqSchema(WORDPRESS_FAQ);

export default function WordpressWebsiteLatenMakenPage() {
  return (
    <main className="wlm" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      {/* emitFaq=false: this page already emits a FAQPage above */}
      <PricingSchema serviceSlug="web-development" emitFaq={false} />

      {/* 01 — Hero */}
      <LandingHero content={WORDPRESS_HERO} projectType={WORDPRESS_PROJECT_TYPE} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom WordPress */}
      <LandingWhy content={WORDPRESS_WHY} />

      {/* 04 — Ons proces */}
      <LandingProcess />

      {/* 04 — Features */}
      <LandingFeaturesSlider content={WORDPRESS_FEATURES} />

      {/* 05 — Vergelijking met website-bouwers */}
      <LandingComparison content={WORDPRESS_COMPARISON} />

      {/* 06 — Portfolio */}
      {/* Resultaten voor onze klanten */}
      <LandingCases />

      <ProjectsSection />

      {/* 07 — Pakketten */}
      <PricingSection defaultServiceSlug="web-development" />

      {/* 08 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={WORDPRESS_FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="WordPress website laten maken" />

      {/* 10 — Final CTA met formulier */}
      <LandingFinalCTA content={WORDPRESS_FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/website-laten-maken">Website laten maken</Link>
            <Link href="/webshop-laten-maken">Webshop laten maken</Link>
            <Link href="/woocommerce-webshop-laten-maken">WooCommerce webshop laten maken</Link>
            <Link href="/website-onderhoud">Website onderhoud</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
