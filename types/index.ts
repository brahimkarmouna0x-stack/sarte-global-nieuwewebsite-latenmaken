import type { CSSProperties, ReactNode } from "react";

export type ServiceIconName =
  | "shield"
  | "monitor"
  | "cursor"
  | "search"
  | "megaphone"
  | "chart"
  | "code"
  | "palette"
  | "mobile"
  | "cpu"
  | "cart"
  | "rocket"
  | "lightning"
  | "layers"
  | "spark"
  | "gauge"
  | "video"
  | "wrench";

export interface NavLink {
  readonly label: string;
  readonly href: string;
  /**
   * Optional condensed label for the desktop nav bar, where the full
   * keyword-rich `label` (kept for the mobile drawer + a11y) would be too wide.
   */
  readonly shortLabel?: string;
}

/** A titled group of links shown as one column inside a nav mega-menu. */
export interface NavMenuSection {
  /** Column heading shown above the links (e.g. "Onze diensten"). */
  readonly title: string;
  readonly items: readonly NavLink[];
}

/**
 * A primary-nav entry: either a normal link or a hover-dropdown trigger. The
 * dropdown renders a wide mega-menu of titled `sections` (columns). `menuId`
 * must be unique per dropdown instance so the panel's `id` / `aria-controls`
 * stay valid when more than one dropdown is rendered in the bar.
 */
export type NavItem =
  | { readonly kind: "link"; readonly label: string; readonly href: string; readonly shortLabel?: string }
  | {
      readonly kind: "dropdown";
      readonly label: string;
      readonly menuId: string;
      /** Titled link groups shown as columns inside the mega-menu. */
      readonly sections: readonly NavMenuSection[];
    };

export interface HeroStat {
  readonly label: string;
}

export interface HeroTitleWord {
  readonly text: string;
  readonly italicAccent?: boolean;
}

export interface HeroTitleLine {
  readonly words: readonly HeroTitleWord[];
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly title: readonly HeroTitleLine[];
  readonly subtitle: string;
  readonly primaryCta: { readonly label: string; readonly href: string };
  readonly secondaryCta: { readonly label: string; readonly href: string };
  readonly pricingCta: { readonly label: string; readonly href: string };
  readonly stats: readonly HeroStat[];
  readonly scrollLabel: string;
  readonly badgeText: string;
}

export interface HeroSlide {
  readonly id: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly accent: string;
}

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
  readonly iconName: ServiceIconName;
}

export interface ServiceProcessItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface ServiceCTACopy {
  readonly titleLead: string;
  readonly titleEm: string;
  readonly sub: string;
  readonly primaryLabel: string;
  readonly primaryHref: string;
  readonly secondaryLabel: string;
  readonly secondaryHref: string;
}

export interface Service {
  readonly slug: string;
  readonly number: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly href: string;
  readonly icon: ServiceIconName;
  readonly heroEyebrow: string;
  readonly heroTitleLead: string;
  readonly heroTitleEm: string;
  readonly features: readonly ServiceFeature[];
  readonly process: readonly ServiceProcessItem[];
  readonly techIds: readonly string[];
  readonly relatedCategories: readonly Exclude<ProjectCategory, "All">[];
  readonly cta: ServiceCTACopy;
}

/* ── Pricing ("Pakketten") ─────────────────────────────────────────────── */

export type PricingTierId = "start" | "professioneel" | "maatwerk";

/** A single cell in the comparison matrix: yes (✓), no (—) or a literal value. */
export type PricingCell = boolean | string;

/**
 * Tier price. `amount: null` renders as "Op aanvraag" (no CountUp). `plus`
 * appends a trailing "+" (open-ended/starting price). `period` drives the
 * caption ("eenmalig" / "per maand").
 */
export interface PricingPrice {
  readonly amount: number | null;
  readonly prefix?: string;
  readonly plus?: boolean;
  readonly period?: "eenmalig" | "maand";
}

export interface PricingTier {
  readonly id: PricingTierId;
  readonly name: string;
  readonly badge?: string;
  readonly tagline: string;
  readonly bestFor: string;
  readonly timeline: string;
  readonly price: PricingPrice;
  readonly deliverables: readonly string[];
  readonly techIds: readonly string[];
  readonly ctaLabel: string;
  readonly highlighted?: boolean;
}

export interface PricingComparisonRow {
  readonly label: string;
  readonly values: readonly [PricingCell, PricingCell, PricingCell];
}

export interface PricingRoiStat {
  readonly target: number;
  readonly prefix?: string;
  readonly suffix?: string;
  readonly label: string;
}

export interface PricingFaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface ServicePricing {
  readonly slug: string;
  readonly name: string;
  readonly chipLabel: string;
  readonly icon: ServiceIconName;
  readonly projectType: string;
  readonly headline: string;
  readonly tiers: readonly [PricingTier, PricingTier, PricingTier];
  readonly comparison: readonly PricingComparisonRow[];
  readonly roi: {
    readonly lead: string;
    readonly stats: readonly PricingRoiStat[];
  };
  readonly faq: readonly PricingFaqItem[];
  readonly seo: {
    readonly title: string;
    readonly body: string;
  };
}

export interface PricingSectionContent {
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly sub: string;
  readonly filterLabel: string;
  readonly comparisonTitle: string;
  readonly roiEyebrow: string;
  readonly faqEyebrow: string;
  readonly faqTitle: string;
}

export interface PricingSectionProps {
  readonly defaultServiceSlug?: string;
  readonly id?: string;
}

export interface PricingCardProps {
  readonly tier: PricingTier;
  readonly projectType: string;
  readonly index: number;
}

export type WorkArtwork =
  | "volta"
  | "meridian"
  | "fenix"
  | "orbis"
  | "stratum";

export interface WorkItem {
  readonly id: string;
  readonly tag: string;
  readonly metric: string;
  readonly meta: string;
  readonly title: string;
  readonly viewLabel: string;
  readonly artwork: WorkArtwork;
  readonly feature: boolean;
  readonly ariaLabel: string;
}

export interface ProcessStepData {
  readonly number: string;
  readonly name: string;
  readonly description: string;
}

export interface ImpactStat {
  readonly target: number;
  readonly prefix?: string;
  readonly suffix?: string;
  readonly label: string;
}

export interface Testimonial {
  readonly name: string;
  readonly time: string;
  readonly rating: number;
  readonly content: string;
  readonly image: string;
}

export type TeamSceneId =
  | "scene-studio"
  | "scene-strategy"
  | "scene-code"
  | "scene-presentation"
  | "scene-photo"
  | "scene-office";

export interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly scene: TeamSceneId;
  /** URL fragment for the author/team profile page, e.g. "alex-chen". */
  readonly slug: string;
  /**
   * Real, public professional profiles (LinkedIn, X, …) for `Person.sameAs`.
   * Leave empty/omit when none exist — we never emit placeholder profile URLs.
   */
  readonly sameAs?: readonly string[];
}

export type ArticleArtwork = "rings" | "lines" | "curves";

export type ArticleParagraph =
  | string
  | { readonly type: "heading"; readonly text: string }
  | { readonly type: "list"; readonly items: readonly string[] };

export interface Article {
  readonly tag: string;
  readonly title: string;
  readonly date: string;
  readonly readLabel: string;
  readonly href: string;
  readonly artwork: ArticleArtwork;
  readonly slug?: string;
  readonly excerpt?: string;
  readonly readMinutes?: number;
  readonly author?: string;
  readonly body?: readonly ArticleParagraph[];
}

export interface FooterLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export type SocialIconName =
  | "linkedin"
  | "x"
  | "dribbble"
  | "instagram"
  | "facebook";

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: SocialIconName;
}

/**
 * Raw `global_settings` record as returned by Supabase (single-row singleton).
 * Every editable field is optional so a partial record still maps cleanly.
 * Column names mirror the actual Supabase table.
 */
export interface SettingsRecord {
  readonly id: string;
  readonly phone?: string;
  readonly email?: string;
  readonly whatsapp_url?: string;
  readonly instagram_url?: string;
  readonly facebook_url?: string;
  readonly linkedin_url?: string;
  readonly x_url?: string;
  readonly created_at: string;
  readonly updated_at: string;
}

/** Clean, app-facing settings shape (post-mapping, with fallbacks applied). */
export interface SiteSettings {
  readonly phone: string;
  readonly email: string;
  readonly whatsapp: string;
  readonly address: {
    readonly line: string;
    readonly city: string;
    readonly country: string;
  };
  readonly footerMission: string;
  readonly socialLinks: readonly SocialLink[];
}

export interface SiteMeta {
  readonly title: string;
  readonly description: string;
  readonly themeColor: string;
  readonly brandName: string;
  readonly brandAccent: string;
  readonly url: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
}

export interface RevealProps {
  readonly children: ReactNode;
  readonly as?: "div" | "section" | "article" | "header" | "span" | "aside";
  readonly className?: string;
  readonly index?: number;
  readonly role?: string;
  readonly style?: CSSProperties;
  readonly id?: string;
  readonly ariaLabelledby?: string;
  readonly ariaLabel?: string;
}

export interface ServiceCardProps {
  readonly service: Service;
  readonly index: number;
}

export type LocalBusinessIconName =
  // Auto
  | "carWash"
  | "autoRepair"
  | "carDetailing"
  | "autoDealer"
  | "drivingSchool"
  | "tireService"
  // Vastgoed
  | "realEstate"
  | "propertyManagement"
  | "rentalAgency"
  | "commercialProperty"
  | "mortgageAdvisor"
  | "homeInspector"
  // Horeca & food
  | "restaurant"
  | "coffeeBar"
  | "bakery"
  | "fastFood"
  | "catering"
  | "iceCreamShop"
  // Beauty & wellness
  | "hairSalon"
  | "barbershop"
  | "beautySalon"
  | "spa"
  | "nailSalon"
  | "pedicure"
  // Zakelijke diensten
  | "lawyer"
  | "accountant"
  | "consultant"
  | "insurance"
  | "notary"
  | "marketingAgency"
  // Huis & klus
  | "plumber"
  | "electrician"
  | "cleaningService"
  | "pestControl"
  | "landscaping"
  | "painter"
  | "construction"
  // Retail
  | "clothingStore"
  | "mensFashion"
  | "electronicsStore"
  | "furnitureStore"
  | "supermarket"
  | "jewelry"
  | "flowerShop"
  // Fitness
  | "gym"
  | "yogaStudio"
  | "personalTrainer"
  | "danceStudio"
  | "martialArts"
  | "crossfitBox"
  // Onderwijs
  | "school"
  | "languageCenter"
  | "trainingCenter"
  | "musicSchool"
  | "tutoring"
  | "cookingStudio"
  // Zorg
  | "clinic"
  | "pharmacy"
  | "physiotherapy"
  | "veterinary"
  | "dentist"
  | "psychologist"
  // Overig
  | "photographer"
  | "travelAgency"
  | "petStore"
  | "childcare"
  | "tattooStudio"
  | "eventPlanner";

export interface LocalBusiness {
  readonly slug: string;
  readonly icon: LocalBusinessIconName;
  /** Dutch group label used by the group-filter chips (e.g. "Auto", "Zorg"). */
  readonly group: string;
  readonly title: string;
  readonly description: string;
  readonly badge?: string;
  readonly ctaLabel: string;
  readonly projectType: string;
  readonly image: string;
  readonly imageAlt: string;
  /** Extra search terms — include English synonyms so e.g. "dentist" finds "Tandartspraktijk". */
  readonly keywords?: readonly string[];
}

export interface LocalBusinessesSectionContent {
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly sub: string;
  readonly loadMoreLabel: string;
  readonly loadLessLabel: string;
  /** Search + filter UI copy. */
  readonly searchPlaceholder: string;
  readonly searchAriaLabel: string;
  readonly clearSearchLabel: string;
  readonly allGroupsLabel: string;
  readonly filterAriaLabel: string;
  /** Result count: use {count} as the placeholder for the number. */
  readonly resultsLabel: string;
  readonly emptyTitle: string;
  /** Empty-state body: use {query} as the placeholder for the search term. */
  readonly emptyBody: string;
  readonly emptyCtaLabel: string;
  readonly emptyCtaProjectType: string;
}

export interface LocalBusinessCardProps {
  readonly business: LocalBusiness;
  readonly index: number;
}

export interface LocalBusinessIconProps {
  readonly name: LocalBusinessIconName;
}

export interface WorkCardProps {
  readonly item: WorkItem;
  readonly index: number;
}

export type ProjectCategory =
  | "All"
  | "SaaS"
  | "AI"
  | "Creative Studio"
  | "Design Tools"
  | "Consumer Apps"
  | "E-Commerce"
  | "Landing Page"
  | "Branding"
  | "WordPress"
  | "Shopify & Dropshipping"
  | "Digital Products";

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly category: Exclude<ProjectCategory, "All">;
  readonly description: string;
  readonly techStack: readonly string[];
  readonly tools?: readonly string[];
  readonly industry: string;
  readonly url: string;
  readonly screenshot: string;
  readonly accent?: string;
  readonly year: string;
  readonly isVideo?: boolean;
}

export interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
}

export interface ProjectsFilterProps {
  readonly categories: readonly ProjectCategory[];
  readonly active: ProjectCategory;
  readonly onChange: (category: ProjectCategory) => void;
}

export interface ProjectsGridProps {
  readonly projects: readonly Project[];
  readonly initialCount?: number;
  readonly step?: number;
}

export interface ProcessStepProps {
  readonly step: ProcessStepData;
}

export interface StatCounterProps {
  readonly target: number;
  readonly start: boolean;
}

export interface TeamStageProps {
  readonly scene: TeamSceneId;
  readonly isActive: boolean;
}

export interface ArticleCardProps {
  readonly article: Article;
  readonly index: number;
}

export interface ServiceIconProps {
  readonly name: ServiceIconName;
}

export type CSSVarStyle = CSSProperties & Record<`--${string}`, string | number>;

export type LegalSlug = "privacy" | "terms" | "cookies";

export type LegalParagraph =
  | string
  | { readonly type: "subheading"; readonly text: string }
  | { readonly type: "list"; readonly items: readonly string[] };

export interface LegalSection {
  readonly id: string;
  readonly heading: string;
  readonly body: readonly LegalParagraph[];
}

export interface LegalDocument {
  readonly slug: LegalSlug;
  readonly icon: ServiceIconName;
  readonly heroEyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly intro: string;
  readonly lastUpdated: string;
  readonly sections: readonly LegalSection[];
  readonly contact: { readonly email: string; readonly subject: string };
}

export interface LegalPageProps {
  readonly document: LegalDocument;
}

export interface PageHeroContent {
  readonly icon?: ServiceIconName;
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly intro?: string;
  readonly align?: "left" | "center";
}

export interface CareerValue {
  readonly icon: ServiceIconName;
  readonly title: string;
  readonly description: string;
}

export interface CareerRole {
  readonly id: string;
  readonly title: string;
  readonly team: string;
  readonly location: string;
  readonly type: string;
  readonly summary: string;
  readonly applyEmail: string;
}

export interface HiringStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface ContactChannel {
  readonly icon: "mail" | "phone" | "map" | "chat";
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly note?: string;
}

export interface AboutCompanyPillar {
  readonly title: string;
  readonly description: string;
}

export interface AboutCompanyMetric {
  readonly value: string;
  readonly label: string;
}

export interface AboutCompanyContent {
  readonly eyebrow: string;
  readonly brand: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly titleTail: string;
  readonly lead: string;
  readonly paragraphs: readonly string[];
  readonly pillars: readonly AboutCompanyPillar[];
  readonly metrics: readonly AboutCompanyMetric[];
  readonly badge: string;
  readonly mediaImage: string;
  readonly mediaAlt: string;
  readonly mediaCaption: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
  readonly secondaryLabel: string;
  readonly secondaryHref: string;
}
