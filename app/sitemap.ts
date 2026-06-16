import type { MetadataRoute } from "next";

import { SERVICES, SITE } from "@/constants";

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
    { url: `${SITE_URL}/over-ons`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/work`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/journal`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/careers`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/cookies`, lastModified: LAST_MODIFIED, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // No individual journal article pages exist yet — only the journal listing page.
  // Add journal/[slug] entries here when individual article pages are created.

  return [...staticPages, ...servicePages];
}
