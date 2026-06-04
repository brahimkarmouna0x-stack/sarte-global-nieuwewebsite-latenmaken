import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingHero } from "@/components/landing/LandingHero";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  LANDING_BENEFITS,
  LANDING_CTA,
  LANDING_FAQ,
  LANDING_MEANING,
  LANDING_WHY_CARDS,
  LANDING_PROCESS,
  SITE,
} from "@/constants";

const PATH = "/nieuwe-website-laten-maken";
const PAGE_TITLE = "Nieuwe website laten maken | Sarte Global";
const PAGE_DESC =
  "Nieuwe website laten maken bij Sarte Global. Professionele, moderne en responsive websites voor ondernemers in Nederland — sterk in SEO en gemaakt om te converteren. Vraag vrijblijvend een voorstel aan.";

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
        alt: "Nieuwe website laten maken · Sarte Global",
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
  name: "Nieuwe website laten maken",
  serviceType: "Nieuwe website laten maken",
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
    <main className="lp" id="top">
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

      {/* 1 — Hero */}
      <LandingHero />
      <TrustedMarquee />

      {/* 2 — Wat betekent een nieuwe website laten maken? */}
      <section className="nws" aria-labelledby="lp-meaning-h">
        <Container>
          <Reveal as="div" className="nws__block">
            <header className="nws__head">
              <span className="eyebrow">{LANDING_MEANING.eyebrow}</span>
              <h2 className="h2 nws__title" id="lp-meaning-h">
                {LANDING_MEANING.title}
              </h2>
            </header>

            <div className="nws__meaning">
              <div className="nws__paragraphs">
                {LANDING_MEANING.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  Benieuwd naar de mogelijkheden? Bekijk onze dienst{" "}
                  <Link href="/services/web-development">website laten maken</Link>{" "}
                  of ontdek hoe we je helpen groeien met{" "}
                  <Link href="/services/seo">SEO &amp; vindbaarheid</Link>.
                </p>
              </div>

              <ul className="nws__points">
                {LANDING_MEANING.points.map((point) => (
                  <li key={point.title} className="nws__point">
                    <h3 className="nws__point-title">{point.title}</h3>
                    <p className="nws__point-desc">{point.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3 — Waarom kiezen voor Sarte Global? */}
      <ServiceFeatures
        features={LANDING_WHY_CARDS}
        title="Waarom kiezen voor Sarte Global?"
        eyebrow="Onze aanpak"
      />

      {/* 4 — Ons websiteontwikkelingsproces */}
      <div id="proces">
        <ServiceProcess
          steps={LANDING_PROCESS}
          title="Ons websiteontwikkelingsproces"
          eyebrow="Werkwijze"
        />
      </div>

      {/* 5 — Voordelen van een professionele website */}
      <ServiceFeatures
        features={LANDING_BENEFITS}
        title="Voordelen van een professionele website"
        eyebrow="Voordelen"
      />

      {/* 6 — Veelgestelde vragen */}
      <FAQAccordion items={LANDING_FAQ} />

      {/* 7 — Contact / CTA */}
      <ServiceCTA copy={LANDING_CTA} projectType="Nieuwe website laten maken" />

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
