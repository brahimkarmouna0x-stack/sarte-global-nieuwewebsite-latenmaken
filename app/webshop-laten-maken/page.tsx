import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingCases } from "@/components/landing/LandingCases";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingProcess } from "@/components/landing/LandingProcess";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
import { LandingFeaturesSlider } from "@/components/landing/LandingFeaturesSlider";
import { LandingFinalCTA } from "@/components/landing/LandingFinalCTA";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingPayments } from "@/components/landing/LandingPayments";
import { LandingTrustStats } from "@/components/landing/LandingTrustStats";
import { LandingWhy } from "@/components/landing/LandingWhy";
import { ProjectsSection } from "@/components/projects/projects-section";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { Container } from "@/components/ui/Container";
import {
  WEBSHOP_FAQ,
  WEBSHOP_FEATURES,
  WEBSHOP_FINAL_CTA,
  WEBSHOP_HERO,
  WEBSHOP_META,
  WEBSHOP_PAYMENTS,
  WEBSHOP_PROJECT_TYPE,
  WEBSHOP_WHY,
} from "@/constants";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata(WEBSHOP_META);

const SERVICE_NAME = "Webshop laten maken";

const SERVICE_JSON_LD = buildServiceSchema({
  path: WEBSHOP_META.path,
  name: SERVICE_NAME,
  description: WEBSHOP_META.description,
  offerCatalogName: "Voordelen van een WooCommerce-webshop",
  offers: WEBSHOP_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, WEBSHOP_META.path);
const FAQ_JSON_LD = buildFaqSchema(WEBSHOP_FAQ);

export default function WebshopLatenMakenPage() {
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
      <PricingSchema serviceSlug="ecommerce" emitFaq={false} />

      {/* 01 — Hero */}
      <LandingHero content={WEBSHOP_HERO} projectType={WEBSHOP_PROJECT_TYPE} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom WooCommerce */}
      <LandingWhy content={WEBSHOP_WHY} />

      {/* 04 — Ons proces */}
      <LandingProcess />

      {/* 04 — Conversiegerichte features */}
      <LandingFeaturesSlider content={WEBSHOP_FEATURES} />

      {/* 05 — Betaalmethoden & koppelingen */}
      <LandingPayments content={WEBSHOP_PAYMENTS} />

      {/* 06 — Portfolio */}
      {/* Resultaten voor onze klanten */}
      <LandingCases />

      <ProjectsSection />

      {/* 07 — Pakketten */}
      <PricingSection defaultServiceSlug="ecommerce" />

      {/* 08 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={WEBSHOP_FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Webshop laten maken" />

      {/* 10 — Final CTA met formulier */}
      <LandingFinalCTA content={WEBSHOP_FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/woocommerce-webshop-laten-maken">WooCommerce webshop laten maken</Link>
            <Link href="/shopify-webshop-laten-maken">Shopify webshop laten maken</Link>
            <Link href="/website-laten-maken">Website laten maken</Link>
            <Link href="/wordpress-website-laten-maken">WordPress website laten maken</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
