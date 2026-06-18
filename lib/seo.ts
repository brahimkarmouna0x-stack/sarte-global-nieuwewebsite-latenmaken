import type { Metadata } from "next";

import { SITE } from "@/constants";
import type { LandingFAQItem } from "@/constants/landing-nieuwe-website";

/**
 * Shared SEO helpers — keep the per-page metadata + JSON-LD boilerplate in one
 * place so every landing page emits consistent, valid structured data. Output
 * mirrors the hand-written schema the original landing pages used; the new
 * service pages and the existing ones both build on these.
 */

/** Default Open Graph / Twitter share image (1200×800). */
const OG_IMAGE = "/images/company-img.png";

/**
 * Regions we actively serve. Used for `areaServed` on the Organization and on
 * every Service schema so the site signals national + key-city coverage without
 * thin per-city pages. Also the single source for the visible "Werkzaam in heel
 * Nederland" section (LandingLocalSeo), so markup and on-page copy stay in sync.
 */
export const SERVICE_CITIES = [
  "Amsterdam",
  "Rotterdam",
  "Den Haag",
  "Utrecht",
  "Eindhoven",
  "Haarlem",
  "Amersfoort",
] as const;

/** Country + key-city `areaServed`, reused across all Service/Organization schema. */
export function areaServedNL() {
  return [
    { "@type": "Country", name: "Netherlands" },
    ...SERVICE_CITIES.map((name) => ({ "@type": "City", name })),
  ];
}

export interface LandingMetaInput {
  readonly path: string;
  readonly title: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly ogAlt: string;
}

/** Builds the full Metadata object (canonical + OG + Twitter) for a landing page. */
export function buildLandingMetadata(meta: LandingMetaInput): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.path },
    keywords: [...meta.keywords],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.path,
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 800, alt: meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  };
}

export interface ServiceSchemaInput {
  /** Page path, e.g. "/seo-optimalisatie". */
  readonly path: string;
  /** Service display name (also used as serviceType). */
  readonly name: string;
  readonly description: string;
  /** OfferCatalog title, e.g. "Voordelen van SEO-optimalisatie". */
  readonly offerCatalogName: string;
  /** Catalog entries — typically the WHY pillars. */
  readonly offers: readonly { readonly title: string; readonly description: string }[];
  /**
   * Overrides the default national+city `areaServed`. Used by the programmatic
   * city pages, which narrow coverage to a single `{ "@type": "City", name }`.
   */
  readonly areaServed?: ReturnType<typeof areaServedNL>;
}

/** Service JSON-LD with provider, national+city areaServed and offer catalog. */
export function buildServiceSchema(input: ServiceSchemaInput) {
  const pageUrl = `${SITE.url}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    name: input.name,
    serviceType: input.name,
    url: pageUrl,
    description: input.description,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: input.areaServed ?? areaServedNL(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: input.offerCatalogName,
      itemListElement: input.offers.map((offer) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: offer.title,
          description: offer.description,
        },
      })),
    },
  };
}

/** Two-level breadcrumb (Home → page). */
export function buildBreadcrumbSchema(name: string, path: string) {
  return buildBreadcrumbTrail([{ name, path }]);
}

/**
 * BreadcrumbList from an ordered trail (Home is prepended automatically). Used
 * by the programmatic city pages for a 3-level crumb (Home → Service → Stad).
 */
export function buildBreadcrumbTrail(
  trail: readonly { readonly name: string; readonly path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      ...trail.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: entry.name,
        item: `${SITE.url}${entry.path}`,
      })),
    ],
  };
}

/** FAQPage JSON-LD from the landing FAQ items. */
export function buildFaqSchema(items: readonly LandingFAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export interface ArticleSchemaInput {
  /** Canonical path, e.g. "/journal/wat-kost-een-website". */
  readonly path: string;
  readonly title: string;
  readonly description: string;
  /** ISO date (YYYY-MM-DD). */
  readonly datePublished: string;
  /** ISO date (YYYY-MM-DD); falls back to datePublished. */
  readonly dateModified?: string;
  /** Author display name; defaults to the organisation. */
  readonly author?: string;
  /** Optional cover image path (defaults to the share image). */
  readonly image?: string;
}

/**
 * Article (BlogPosting) JSON-LD for the journal posts. `publisher` references
 * the single Organization node emitted in the root layout so Google can tie the
 * post to the brand. `mainEntityOfPage` carries the canonical URL.
 */
export function buildArticleSchema(input: ArticleSchemaInput) {
  const pageUrl = `${SITE.url}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}/#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: "nl-NL",
    author: input.author
      ? { "@type": "Person", name: input.author }
      : { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    image: [`${SITE.url}${input.image ?? OG_IMAGE}`],
    url: pageUrl,
  };
}

/**
 * Builds the Metadata object (canonical + OG `article` + Twitter) for a journal
 * post. Mirrors `buildLandingMetadata` but emits `openGraph.type: "article"`
 * with the published/modified timestamps so social cards render correctly.
 */
export function buildArticleMetadata(input: {
  readonly path: string;
  readonly title: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly datePublished: string;
  readonly dateModified?: string;
  readonly image?: string;
  readonly ogAlt?: string;
}): Metadata {
  const image = input.image ?? OG_IMAGE;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    keywords: [...input.keywords],
    openGraph: {
      title: input.title,
      description: input.description,
      url: input.path,
      type: "article",
      publishedTime: input.datePublished,
      modifiedTime: input.dateModified ?? input.datePublished,
      images: [{ url: image, width: 1200, height: 800, alt: input.ogAlt ?? input.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}

/**
 * Metadata for a programmatic city page. Identical contract to
 * `buildLandingMetadata` — kept as a thin wrapper so the city route reads
 * intent-fully and we can diverge later (e.g. geo OG tags) without touching the
 * call site.
 */
export function buildLocationMetadata(meta: LandingMetaInput): Metadata {
  return buildLandingMetadata(meta);
}
