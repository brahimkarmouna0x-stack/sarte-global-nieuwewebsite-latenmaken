import type { Metadata } from "next";

import { PageHero } from "@/components/page/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { SERVICES, SITE } from "@/constants";

const PATH = "/services";
const PAGE_TITLE = "Diensten | Website, webshop, SEO & meer - Sarte Global";
const PAGE_DESC =
  "Ontdek alle diensten van Sarte Global: een nieuwe website of webshop laten maken, landingspagina's, SEO, UX/UI-design, mobiele apps en online advertising — één partner voor digitale groei.";

export const metadata: Metadata = {
  // `absolute`: PAGE_TITLE already carries the brand; skip the root title template.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  alternates: { canonical: PATH },
  keywords: [
    "diensten Sarte Global",
    "website laten maken",
    "webshop laten maken",
    "professionele website ontwikkeling",
    "webdesign bureau",
    "SEO-vriendelijke websites",
    "zakelijke websites",
    "UX UI design",
    "online advertising",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PATH,
    type: "website",
    images: [{ url: "/images/company-img.png", width: 1200, height: 800, alt: PAGE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/company-img.png"],
  },
};

const HERO = {
  icon: "layers" as const,
  eyebrow: "Diensten · Sarte Global",
  titleLead: "Eén partner voor",
  titleEm: "jouw digitale groei.",
  intro:
    "Van een nieuwe website of webshop laten maken tot SEO, UX/UI-design en online advertising. Bekijk wat Sarte Global voor jouw bedrijf kan betekenen.",
  align: "center" as const,
};

// BreadcrumbList — gives every /services/[slug] detail page a real parent URL.
const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Diensten", item: `${SITE.url}${PATH}` },
  ],
};

// ItemList of every service, linking to its canonical URL (the four keyword
// offerings use their dedicated landing page via `service.href`).
const ITEM_LIST_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Diensten van Sarte Global",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.name,
    description: service.tagline,
    url: `${SITE.url}${service.href}`,
  })),
};

export default function ServicesHubPage() {
  return (
    <main className="services-hub" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_JSON_LD) }}
      />
      <PageHero content={HERO} id="services-hub-h" />
      <Services />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
