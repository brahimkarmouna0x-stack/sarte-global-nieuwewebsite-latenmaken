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
  SHOPIFY_COMPARISON,
  SHOPIFY_FAQ,
  SHOPIFY_FEATURES,
  SHOPIFY_FINAL_CTA,
  SHOPIFY_HERO,
  SHOPIFY_META,
  SHOPIFY_PAYMENTS,
  SHOPIFY_PROJECT_TYPE,
  SHOPIFY_WHY,
} from "@/constants";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata(SHOPIFY_META);

const SERVICE_NAME = "Shopify webshop laten maken";

const SERVICE_JSON_LD = buildServiceSchema({
  path: SHOPIFY_META.path,
  name: SERVICE_NAME,
  description: SHOPIFY_META.description,
  offerCatalogName: "Voordelen van een Shopify-webshop",
  offers: SHOPIFY_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, SHOPIFY_META.path);
const FAQ_JSON_LD = buildFaqSchema(SHOPIFY_FAQ);

export default function ShopifyWebshopLatenMakenPage() {
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
      <LandingHero content={SHOPIFY_HERO} projectType={SHOPIFY_PROJECT_TYPE} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom Shopify */}
      <LandingWhy content={SHOPIFY_WHY} />

      {/* 04 — Werkwijze */}
      <LandingProcess />

      {/* 05 — Conversiegerichte features */}
      <LandingFeaturesSlider content={SHOPIFY_FEATURES} />

      {/* 06 — Betaalmethoden & koppelingen */}
      <LandingPayments content={SHOPIFY_PAYMENTS} />

      {/* 07 — Maatwerk vs standaard thema */}
      <LandingComparison content={SHOPIFY_COMPARISON} />

      {/* 08 — Portfolio */}
      {/* Resultaten voor onze klanten */}
      <LandingCases />

      <ProjectsSection />

      {/* 09 — Pakketten */}
      <PricingSection defaultServiceSlug="ecommerce" />

      {/* 10 — Testimonials */}
      <Testimonials />

      {/* 11 — Veelgestelde vragen */}
      <FAQAccordion items={SHOPIFY_FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Shopify webshop laten maken" />

      {/* 12 — Final CTA met formulier */}
      <LandingFinalCTA content={SHOPIFY_FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/webshop-laten-maken">Webshop laten maken</Link>
            <Link href="/woocommerce-webshop-laten-maken">WooCommerce webshop laten maken</Link>
            <Link href="/website-laten-maken">Website laten maken</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
