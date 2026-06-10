import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
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
import { LANDING_BENEFITS, LANDING_FAQ, SITE } from "@/constants";
import { ProjectsSection } from "@/components/projects/projects-section";
import { Testimonials } from "@/components/sections/Testimonials";
import { Services } from "@/components/sections/Services";

const PATH = "/website-laten-maken";
const PAGE_TITLE = "website laten maken | Sarte Global";
const PAGE_DESC =
  "Website laten maken bij Sarte Global. Professionele, moderne en responsive websites voor ondernemers in Nederland — sterk in SEO en gemaakt om te converteren. Vraag vrijblijvend een voorstel aan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
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
        alt: "website laten maken · Sarte Global",
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

const PAGE_URL = `${SITE.url}${PATH}`;

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "website laten maken",
  serviceType: "website laten maken",
  url: PAGE_URL,
  description: PAGE_DESC,
  provider: { "@id": `${SITE.url}/#organization` },
  areaServed: { "@type": "Country", name: "Netherlands" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Voordelen van een nieuwe website",
    itemListElement: LANDING_BENEFITS.map((benefit) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: benefit.title,
        description: benefit.description,
      },
    })),
  },
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Nieuwe website laten maken",
      item: PAGE_URL,
    },
  ],
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: LANDING_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

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

      {/* 03 — Waarom Sarte Global */}
      <LandingWhy />

      {/* 04 — Ons proces */}
      <LandingProcess />

      {/* 05 — Website features */}
      <LandingFeaturesSlider />

      <Services />

      {/* 06 — Inspiratie: succesvolle Nederlandse merken */}
      {/* <LandingInspiration /> */}
      <ProjectsSection />

      {/* 07 — Branches */}
      <LandingIndustries />


      {/* 08 — Pakketten */}
      <PricingSection defaultServiceSlug="web-development" />

      {/* 09 — Testimonials */}
      <Testimonials />

      {/* 09 — Veelgestelde vragen */}
      <FAQAccordion items={LANDING_FAQ} />

      {/* 10 — Final CTA met formulier */}
      <LandingFinalCTA />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            <Link href="/">Home</Link>
            <Link href="/work">Portfolio</Link>
            <Link href="/about">Over ons</Link>
            <Link href="/services/web-development">Website laten maken</Link>
            <Link href="/services/seo">SEO &amp; groei</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </Container>
      </section>
    </main>
  );
}
