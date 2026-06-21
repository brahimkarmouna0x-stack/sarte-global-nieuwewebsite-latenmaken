import type { MetadataRoute } from "next";

import { SERVICES, SERVICE_SLUGS_WITH_LANDING_PAGE, SITE } from "@/constants";
import { getAuthorSlugs } from "@/lib/authors";
import { getAllPosts } from "@/lib/blog";
import { getLocationSlugs } from "@/lib/programmatic";

const SITE_URL = SITE.url;
// Regenerated on each build so the sitemap stays fresh without manual edits.
const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/website-laten-maken`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/wordpress-website-laten-maken`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/nextjs-website-laten-maken`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/webshop-laten-maken`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/woocommerce-webshop-laten-maken`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/shopify-webshop-laten-maken`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/landing-page-laten-maken`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/webapp-laten-maken`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/seo-optimalisatie`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/website-onderhoud`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/services`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/over-ons`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/work`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/journal`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/careers`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/cookies`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Exclude the four offerings that redirect/canonicalise to a dedicated keyword
  // landing page — those landing pages are already listed above, so emitting the
  // /services/[slug] twin here would put a redirecting URL in the sitemap.
  const servicePages: MetadataRoute.Sitemap = SERVICES.filter(
    (service) => !SERVICE_SLUGS_WITH_LANDING_PAGE.has(service.slug),
  ).map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Individual journal articles (MDX in content/journal) — driven by the same
  // source as the listing + the JSON-LD, so the sitemap can never drift.
  const journalPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/journal/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Programmatic city × service pages (e.g. /website-laten-maken-amsterdam),
  // generated from constants/locations.ts.
  const locationPages: MetadataRoute.Sitemap = getLocationSlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Author / team profile pages (e.g. /team/alex-chen) — drive E-E-A-T and link
  // to each author's articles. Same source as the BlogPosting author linkage.
  const authorPages: MetadataRoute.Sitemap = getAuthorSlugs().map((slug) => ({
    url: `${SITE_URL}/team/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...journalPages,
    ...locationPages,
    ...authorPages,
  ];
}
