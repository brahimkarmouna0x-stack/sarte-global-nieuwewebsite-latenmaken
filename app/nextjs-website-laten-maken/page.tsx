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
  NEXTJS_COMPARISON,
  NEXTJS_FAQ,
  NEXTJS_FEATURES,
  NEXTJS_FINAL_CTA,
  NEXTJS_HERO,
  NEXTJS_META,
  NEXTJS_PROJECT_TYPE,
  NEXTJS_WHY,
} from "@/constants";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata(NEXTJS_META);

const SERVICE_NAME = "Next.js website laten maken";

const SERVICE_JSON_LD = buildServiceSchema({
  path: NEXTJS_META.path,
  name: SERVICE_NAME,
  description: NEXTJS_META.description,
  offerCatalogName: "Voordelen van een Next.js-website",
  offers: NEXTJS_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, NEXTJS_META.path);
const FAQ_JSON_LD = buildFaqSchema(NEXTJS_FAQ);

export default function NextjsWebsiteLatenMakenPage() {
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
      <LandingHero content={NEXTJS_HERO} projectType={NEXTJS_PROJECT_TYPE} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom Next.js */}
      <LandingWhy content={NEXTJS_WHY} />

      {/* 04 — Werkwijze */}
      <LandingProcess />

      {/* 05 — Features */}
      <LandingFeaturesSlider content={NEXTJS_FEATURES} />

      {/* 06 — Next.js vs WordPress */}
      <LandingComparison content={NEXTJS_COMPARISON} />

      {/* 07 — Portfolio */}
      {/* Resultaten voor onze klanten */}
      <LandingCases />

      <ProjectsSection />

      {/* 08 — Pakketten */}
      <PricingSection defaultServiceSlug="web-development" />

      {/* 09 — Testimonials */}
      <Testimonials />

      {/* 10 — Veelgestelde vragen */}
      <FAQAccordion items={NEXTJS_FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Next.js website laten maken" />

      {/* 11 — Final CTA met formulier */}
      <LandingFinalCTA content={NEXTJS_FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/website-laten-maken">Website laten maken</Link>
            <Link href="/webapp-laten-maken">Webapp laten maken</Link>
            <Link href="/wordpress-website-laten-maken">WordPress website laten maken</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
