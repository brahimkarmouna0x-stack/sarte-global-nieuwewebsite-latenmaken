import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingCases } from "@/components/landing/LandingCases";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { LandingWhyStats } from "@/components/landing/LandingWhyStats";
import { LandingFinalCTA } from "@/components/landing/LandingFinalCTA";
import { LandingFeaturesSlider } from "@/components/landing/LandingFeaturesSlider";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingIndustries } from "@/components/landing/LandingIndustries";
import { LandingProcess } from "@/components/landing/LandingProcess";
import { LandingTestimonials } from "@/components/landing/LandingTestimonials";
import { LandingTrustStats } from "@/components/landing/LandingTrustStats";
import { LandingWhy } from "@/components/landing/LandingWhy";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { Container } from "@/components/ui/Container";
import { LANDING_BENEFITS, LANDING_FAQ } from "@/constants";
import { ProjectsSection } from "@/components/projects/projects-section";
import { Testimonials } from "@/components/sections/Testimonials";
import { Services } from "@/components/sections/Services";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from "@/lib/seo";

const PATH = "/website-laten-maken";
const PAGE_TITLE = "Website laten maken voor ondernemers | Sarte Global";
const PAGE_DESC =
  "Website laten maken bij Sarte Global. Professionele, moderne en responsive websites voor ondernemers in Nederland — sterk in SEO en gemaakt om te converteren. Vraag vrijblijvend een voorstel aan.";

export const metadata: Metadata = {
  // `absolute`: PAGE_TITLE already carries the brand; skip the root title template.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  alternates: { canonical: PATH },
  keywords: [
    "nieuwe website laten maken",
    "website laten maken",
    "professionele website laten maken",
    "zakelijke website laten maken",
    "moderne website laten maken",
    "responsive website",
    "SEO website",
    "webdesign bureau",
    "website ontwikkeling",
    "maatwerk website",
    "website voor ondernemers",
    "website redesign",
    "website optimalisatie",
    "Sarte Global",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PATH,
    type: "website",
    images: [
      {
        url: "/images/company-img.png",
        width: 1200,
        height: 800,
        alt: "Website laten maken · Sarte Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/company-img.png"],
  },
};

const SERVICE_JSON_LD = buildServiceSchema({
  path: PATH,
  name: "Website laten maken",
  description: PAGE_DESC,
  offerCatalogName: "Voordelen van een nieuwe website",
  offers: LANDING_BENEFITS,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema("Nieuwe website laten maken", PATH);
const FAQ_JSON_LD = buildFaqSchema(LANDING_FAQ);

export default function NieuweWebsiteLatenMakenPage() {
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

      {/* 01 — Premium hero */}
      <LandingHero />

      {/* 02 — Trust & social proof */}
      <TrustedMarquee />
      <LandingTrustStats />

      {/* 02b — Waarom kiezen voor ons */}
      <LandingWhyStats />

      {/* 03 — Waarom Sarte Global */}
      <LandingWhy />

      {/* 04 — Ons proces */}
      <LandingProcess />

      {/* 05 — Website features */}
      <LandingFeaturesSlider />

      <Services />

      {/* 06 — Resultaten voor onze klanten */}
      <LandingCases />

      {/* 07 — Portfolio */}
      <ProjectsSection />

      {/* 07 — Branches */}
      <LandingIndustries />


      {/* 08 — Pakketten */}
      <PricingSection defaultServiceSlug="web-development" />

      {/* 09 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={LANDING_FAQ} />

      {/* Werkzaam in heel Nederland */}
      <LandingLocalSeo serviceLabel="Website laten maken" />

      {/* 10 — Final CTA met formulier */}
      <LandingFinalCTA />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/nextjs-website-laten-maken">Next.js website laten maken</Link>
            <Link href="/wordpress-website-laten-maken">WordPress website laten maken</Link>
            <Link href="/webshop-laten-maken">Webshop laten maken</Link>
            <Link href="/landing-page-laten-maken">Landing page laten maken</Link>
            <Link href="/seo-optimalisatie">SEO optimalisatie</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
