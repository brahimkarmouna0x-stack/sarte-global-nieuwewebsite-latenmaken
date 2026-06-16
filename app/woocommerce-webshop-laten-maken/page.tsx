import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingCases } from "@/components/landing/LandingCases";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
import { LandingComparison } from "@/components/landing/LandingComparison";
import { LandingFeaturesSlider } from "@/components/landing/LandingFeaturesSlider";
import { LandingFinalCTA } from "@/components/landing/LandingFinalCTA";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingPayments } from "@/components/landing/LandingPayments";
import { LandingProcess } from "@/components/landing/LandingProcess";
import { LandingTrustStats } from "@/components/landing/LandingTrustStats";
import { LandingWhy } from "@/components/landing/LandingWhy";
import { ProjectsSection } from "@/components/projects/projects-section";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { Container } from "@/components/ui/Container";
import {
  WOOCOMMERCE_COMPARISON,
  WOOCOMMERCE_FAQ,
  WOOCOMMERCE_FEATURES,
  WOOCOMMERCE_FINAL_CTA,
  WOOCOMMERCE_HERO,
  WOOCOMMERCE_META,
  WOOCOMMERCE_PAYMENTS,
  WOOCOMMERCE_PROJECT_TYPE,
  WOOCOMMERCE_WHY,
} from "@/constants";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata(WOOCOMMERCE_META);

const SERVICE_NAME = "WooCommerce webshop laten maken";

const SERVICE_JSON_LD = buildServiceSchema({
  path: WOOCOMMERCE_META.path,
  name: SERVICE_NAME,
  description: WOOCOMMERCE_META.description,
  offerCatalogName: "Voordelen van een WooCommerce-webshop",
  offers: WOOCOMMERCE_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, WOOCOMMERCE_META.path);
const FAQ_JSON_LD = buildFaqSchema(WOOCOMMERCE_FAQ);

export default function WooCommerceWebshopLatenMakenPage() {
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
      <LandingHero content={WOOCOMMERCE_HERO} projectType={WOOCOMMERCE_PROJECT_TYPE} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom WooCommerce */}
      <LandingWhy content={WOOCOMMERCE_WHY} />

      {/* 04 — Werkwijze */}
      <LandingProcess />

      {/* 05 — Conversiegerichte features */}
      <LandingFeaturesSlider content={WOOCOMMERCE_FEATURES} />

      {/* 06 — Betaalmethoden & koppelingen */}
      <LandingPayments content={WOOCOMMERCE_PAYMENTS} />

      {/* 07 — WooCommerce vs Shopify */}
      <LandingComparison content={WOOCOMMERCE_COMPARISON} />

      {/* 08 — Portfolio */}
      {/* Resultaten voor onze klanten */}
      <LandingCases />

      <ProjectsSection />

      {/* 09 — Pakketten */}
      <PricingSection defaultServiceSlug="ecommerce" />

      {/* 10 — Testimonials */}
      <Testimonials />

      {/* 11 — Veelgestelde vragen */}
      <FAQAccordion items={WOOCOMMERCE_FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="WooCommerce webshop laten maken" />

      {/* 12 — Final CTA met formulier */}
      <LandingFinalCTA content={WOOCOMMERCE_FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/webshop-laten-maken">Webshop laten maken</Link>
            <Link href="/shopify-webshop-laten-maken">Shopify webshop laten maken</Link>
            <Link href="/wordpress-website-laten-maken">WordPress website laten maken</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
