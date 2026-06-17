import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingCases } from "@/components/landing/LandingCases";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
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
  LANDINGPAGE_FAQ,
  LANDINGPAGE_FEATURES,
  LANDINGPAGE_FINAL_CTA,
  LANDINGPAGE_HERO,
  LANDINGPAGE_META,
  LANDINGPAGE_PROJECT_TYPE,
  LANDINGPAGE_WHY,
} from "@/constants";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata(LANDINGPAGE_META);

const SERVICE_NAME = "Landing page laten maken";

const SERVICE_JSON_LD = buildServiceSchema({
  path: LANDINGPAGE_META.path,
  name: SERVICE_NAME,
  description: LANDINGPAGE_META.description,
  offerCatalogName: "Voordelen van een conversiegerichte landingspagina",
  offers: LANDINGPAGE_WHY.pillars,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema(SERVICE_NAME, LANDINGPAGE_META.path);
const FAQ_JSON_LD = buildFaqSchema(LANDINGPAGE_FAQ);

export default function LandingPageLatenMakenPage() {
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
      <PricingSchema serviceSlug="landing-page-optimization" emitFaq={false} />

      {/* 01 — Hero */}
      <LandingHero content={LANDINGPAGE_HERO} projectType={LANDINGPAGE_PROJECT_TYPE} />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom een aparte landingspagina */}
      <LandingWhy content={LANDINGPAGE_WHY} />

      {/* 04 — Werkwijze */}
      <LandingProcess />

      {/* 05 — Features */}
      <LandingFeaturesSlider content={LANDINGPAGE_FEATURES} />

      {/* 06 — Portfolio */}
      {/* Resultaten voor onze klanten */}
      <LandingCases />

      <ProjectsSection />

      {/* 07 — Pakketten */}
      <PricingSection defaultServiceSlug="landing-page-optimization" />

      {/* 08 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={LANDINGPAGE_FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Landing page laten maken" />

      {/* 10 — Final CTA met formulier */}
      <LandingFinalCTA content={LANDINGPAGE_FINAL_CTA} />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/website-laten-maken">Website laten maken</Link>
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
