import type { Metadata } from "next";

import { AboutCompany } from "@/components/sections/AboutCompany";
import { CallToAction } from "@/components/sections/CallToAction";
import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Journal } from "@/components/sections/Journal";
import { LocalBusinesses } from "@/components/sections/LocalBusinesses";
import { NewWebsiteSeo } from "@/components/sections/NewWebsiteSeo";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { ProjectsSection } from "@/components/projects/projects-section";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { HashScrollOnLoad } from "@/components/ui/HashScrollOnLoad";
import { SITE } from "@/constants";
import { areaServedNL } from "@/lib/seo";

// Title + description are intentionally inherited from the root layout's
// `title.default` (SITE.title) and `description` — setting a plain `title` here
// would re-apply the "%s · Sarte Global" template and duplicate the brand.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const SITE_URL = SITE.url;

const HOMEPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Sarte Global — Nieuwe website laten maken",
  url: SITE_URL,
  description:
    "Sarte Global bouwt nieuwe, professionele en moderne websites voor ondernemers en bedrijven in Nederland. Sterke SEO, snelle oplevering en focus op conversie.",
  areaServed: areaServedNL(),
  serviceType: [
    "Website laten maken",
    "Webshop laten maken",
    "Landingspagina laten maken",
    "UX / UI design",
    "SEO & groei",
    "Online advertising",
  ],
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

export default function HomePage() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_JSON_LD) }}
      />
      <HashScrollOnLoad />
      <PricingSchema serviceSlug="web-development" />
      <Hero />
      <Testimonials />
      <TrustedMarquee />
      <AboutCompany />
      <NewWebsiteSeo />
      <Services />
      <PricingSection />
      <LocalBusinesses />
      <TechStack />
      <ProjectsSection />
      <Process />
      <ImpactStats />
      <TeamShowcase />
      <Journal />
      <CallToAction />
    </main>
  );
}
