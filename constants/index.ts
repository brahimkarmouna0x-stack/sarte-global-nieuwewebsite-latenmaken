import type {
  FooterColumn,
  HeroContent,
  NavItem,
  NavLink,
  NavMenuSection,
  SiteMeta
} from "@/types";

import { SERVICES } from "./services";

export const SITE = {
  title: "Nieuwe Website Laten Maken | 14 Dagen Live · Sarte Global",
  description:
    "Professionele website laten maken die bezoekers omzet in klanten. Modern design, sterke SEO en snelle oplevering. Vraag vandaag een gratis offerte aan.",
  themeColor: "#0D0D0D",
  brandName: "SARTE GLOBAL",
  brandAccent: ".",
  url: "https://nieuwewebsite-latenmaken.nl",
  name: "Sarte Global",
  email: "info@sarteglobal.com",
  // Online-only / nationaal: geen telefoonnummer getoond. Contact loopt via
  // e-mail en WhatsApp. Vul hier pas een nummer in als er een geldig
  // Nederlands telefoonnummer is — leeg laten betekent: geen telefoon in UI/schema.
  phone: "",
} as const satisfies SiteMeta;

export const TRUST_LINE =
  "Nieuwe website laten maken is een dienst van Sarte Global." as const;

/**
 * The 10 service pages — single source for the "Services" nav dropdown, the
 * mobile drawer group and the footer "Diensten" column. Keyword-rich labels +
 * canonical routes (all pages exist), so every Diensten link is SEO-relevant.
 */
export const SERVICE_LINKS: readonly NavLink[] = [
  { label: "Website laten maken", href: "/website-laten-maken" },
  { label: "WordPress website laten maken", href: "/wordpress-website-laten-maken" },
  { label: "Next.js website laten maken", href: "/nextjs-website-laten-maken" },
  { label: "Webshop laten maken", href: "/webshop-laten-maken" },
  { label: "WooCommerce webshop laten maken", href: "/woocommerce-webshop-laten-maken" },
  { label: "Shopify webshop laten maken", href: "/shopify-webshop-laten-maken" },
  { label: "Landing page laten maken", href: "/landing-page-laten-maken" },
  { label: "Webapp laten maken", href: "/webapp-laten-maken" },
  { label: "SEO optimalisatie", href: "/seo-optimalisatie" },
  { label: "Website onderhoud", href: "/website-onderhoud" },
];

/**
 * Service offerings that already have a dedicated keyword landing page. Their
 * /services/[slug] twin would target the exact same primary keyword, so it is
 * 301-redirected (next.config.mjs) and canonicalised to the landing page — one
 * indexable URL per keyword, no cannibalisation. Single source of truth for the
 * redirect targets, the sitemap exclusion, the canonical override on the dynamic
 * service route and the nav de-duplication below.
 */
export const SERVICE_LANDING_PAGE_BY_SLUG = {
  "web-development": "/website-laten-maken",
  "ecommerce": "/webshop-laten-maken",
  "landing-page-optimization": "/landing-page-laten-maken",
  "seo": "/seo-optimalisatie",
} as const;

/**
 * Slugs from SERVICE_LANDING_PAGE_BY_SLUG as a Set. Used to exclude the four
 * keyword-page duplicates from the mega-menu's "Onze diensten" column (so the
 * two columns never list the same service twice) and from the sitemap.
 */
export const SERVICE_SLUGS_WITH_LANDING_PAGE: ReadonlySet<string> = new Set(
  Object.keys(SERVICE_LANDING_PAGE_BY_SLUG),
);

export const SERVICES_NAV: readonly NavLink[] = SERVICES.filter(
  (service) => !SERVICE_SLUGS_WITH_LANDING_PAGE.has(service.slug),
).map((service) => ({
  label: service.name,
  href: service.href,
}));

/**
 * The two titled columns inside the single "Diensten" mega-menu: the keyword
 * landing pages (SERVICE_LINKS) and the broader service catalogue (SERVICES_NAV).
 */
export const NAV_SERVICE_SECTIONS: readonly NavMenuSection[] = [
  { title: "Websites & webshops", items: SERVICE_LINKS },
  { title: "Onze diensten", items: SERVICES_NAV },
];

/**
 * Primary nav (explicit, user-defined order). One "Diensten" dropdown that
 * opens a wide mega-menu combining both service lists (see NAV_SERVICE_SECTIONS).
 */
export const NAV_ITEMS: readonly NavItem[] = [
  { kind: "link", label: "Nieuwe website", href: "/" },
  { kind: "link", label: "Prijzen", href: "#pakketten" },
  { kind: "link", label: "Website laten maken", href: "/website-laten-maken", shortLabel: "Website laten maken" },
  { kind: "dropdown", label: "Diensten", menuId: "nav-diensten-menu", sections: NAV_SERVICE_SECTIONS },
  { kind: "link", label: "WordPress laten maken", href: "/wordpress-website-laten-maken", shortLabel: "WordPress laten maken" },
  { kind: "link", label: "Webshop laten maken", href: "/webshop-laten-maken", shortLabel: "Webshop laten maken" },
  { kind: "link", label: "Contact", href: "/contact" },
];

export const NAV_CTA = {
  label: "Offerte aanvragen",
  href: "#cta",
} as const;

export const HERO = {
  eyebrow: "Sarte Global",
  title: [
    {
      words: [
        { text: "Nieuwe Website Laten Maken", italicAccent: true },
      ],
    },
  ],
  subtitle:
    "Professionele, moderne en responsive websites voor bedrijven en ondernemers in Nederland. Sterke SEO, snelle oplevering en focus op conversie en groei.",
  primaryCta: { label: "Nieuwe website laten maken", href: "#cta" },
  secondaryCta: { label: "Bekijk portfolio", href: "/work" },
  pricingCta: { label: "Bekijk pakketten", href: "#pakketten" },
  stats: [
    { label: "Modern & responsive design" },
    { label: "Binnen 2 weken online" },
    { label: "Voor MKB & ondernemers" },
  ],
  scrollLabel: "Scroll",
  badgeText:
    "NIEUWE WEBSITE LATEN MAKEN · SARTE GLOBAL · NIEUWE WEBSITE LATEN MAKEN · SARTE GLOBAL · ",
} as const satisfies HeroContent;

export const TRUSTED_LABEL = "Vertrouwd door Nederlandse ondernemers" as const;

export const TRUSTED_BRANDS = [
  "Meridian",
  "Volta",
  "Claros",
  "Orbis",
  "Fenix",
  "Stratum",
  "Kova",
  "Helion",
] as const satisfies readonly string[];

export const CTA_SECTION = {
  titleLead: "Laat jouw website",
  titleEm: "vandaag starten.",
  sub: "Plan een gratis kennismaking van 30 minuten — geen verplichtingen, gewoon een open gesprek over jouw website en doelen.",
  ctaLabel: "Neem contact op",
  ctaHref: "mailto:info@sarteglobal.com",
} as const;

export const FOOTER_MISSION =
  "Professionele, moderne websites voor ondernemers en bedrijven in Nederland. Een dienst van Sarte Global — gebouwd voor groei en gemaakt om te verkopen." as const;

export const FOOTER_COLUMNS = [
  {
    title: "Diensten",
    links: SERVICE_LINKS,
  },
  {
    title: "Bedrijf",
    links: [
      { label: "Over ons", href: "/over-ons" },
      { label: "Werk", href: "/work" },
      { label: "Journal", href: "/journal" },
      { label: "Vacatures", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const satisfies readonly FooterColumn[];

export const NEWSLETTER = {
  title: "De Nieuwsbrief",
  description:
    "Eén beknopte e-mail per maand. Praktische tips over websites, SEO en online groei voor ondernemers.",
  placeholder: "jij@bedrijf.nl",
  buttonLabel: "Inschrijven",
  defaultNote: "Geen spam. Op elk moment uitschrijven.",
  errorNote: "Voer een geldig e-mailadres in.",
  successNote: "Bedankt! Je ontvangt binnenkort onze eerste e-mail.",
} as const;

export const FOOTER_LEGAL = {
  copyright: `© ${new Date().getFullYear()} Sarte Global`,
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Voorwaarden", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
} as const;

export const PAYMENT_METHODS_LABEL = "Wij accepteren" as const;

export const PAYMENT_METHODS = [
  { id: "ideal", label: "iDEAL", color: "#CC0066" },
  { id: "visa", label: "Visa", color: "#1A1F71" },
  { id: "mastercard", label: "Mastercard", color: "#EB001B" },
  { id: "paypal", label: "PayPal", color: "#00457C" },
  { id: "stripe", label: "Stripe", color: "#635BFF" },
] as const;

export type PaymentMethodId = (typeof PAYMENT_METHODS)[number]["id"];

export const COOKIE_COPY = {
  message:
    "We gebruiken een klein aantal cookies om verkeer te begrijpen en deze website te verbeteren.",
  policyLabel: "Lees onze cookieverklaring",
  policyHref: "/cookies",
  declineLabel: "Weigeren",
  acceptLabel: "Accepteren",
  storageKey: "sarte_cookies",
  delayMs: 1200,
} as const;

export * from "./about";
export * from "./new-website";
export * from "./landing-nieuwe-website";
export * from "./wordpress";
export * from "./webshop";
export * from "./woocommerce";
export * from "./shopify";
export * from "./landing-page";
export * from "./webapp";
export * from "./seo-optimalisatie";
export * from "./website-onderhoud";
export * from "./nextjs";
export * from "./pricing";
export * from "./journal";
export * from "./services";
export * from "./team";
export * from "./testimonials";
export * from "./work";
export * from "./process";
export * from "./impact";
export * from "./technologies";
export * from "./hero-projects";
export * from "./hero-stage";
export * from "./local-businesses";
