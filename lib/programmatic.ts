import { LANDING_HERO, type LandingFAQItem, type LandingHeroContent } from "@/constants";
import {
  CITIES,
  CITY_BY_SLUG,
  LOCATION_SERVICES,
  type City,
  type LocationService,
} from "@/constants/locations";

interface InternalLink {
  readonly name: string;
  readonly href: string;
}

/**
 * Composition engine for the programmatic city × service pages. Every page is
 * generated from `City` + `LocationService` tokens, but the prose is selected
 * deterministically from variant pools (seeded by the slug) so each page reads
 * differently — guarding against thin/duplicate-content penalties while staying
 * stable across builds.
 */

export interface LocationPage {
  readonly slug: string;
  readonly path: string;
  readonly city: City;
  readonly service: LocationService;
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly keywords: readonly string[];
  readonly hero: LandingHeroContent;
  readonly introHeading: string;
  readonly introParagraphs: readonly string[];
  readonly benefitsHeading: string;
  readonly benefits: readonly string[];
  readonly faqHeading: string;
  readonly faq: readonly LandingFAQItem[];
  readonly nearby: readonly InternalLink[];
  /** Same city in the other keyword dimension(s), e.g. Webdesign ↔ Website. */
  readonly crossLinks: readonly InternalLink[];
  readonly serviceDescription: string;
}

/* ── Deterministic, slug-seeded selection ─────────────────────────────────── */

function hash(input: string): number {
  let h = 5381;
  for (let i = 0; i < input.length; i += 1) {
    h = (h * 33) ^ input.charCodeAt(i);
  }
  return Math.abs(h);
}

/** Pick one item from `pool` for `seed`, with an `offset` so several picks vary. */
function pick<T>(pool: readonly T[], seed: number, offset = 0): T {
  return pool[(seed + offset * 7) % pool.length]!;
}

/* ── Variant pools (templates take the resolved city + service) ───────────── */

type Tpl = (city: City, service: LocationService) => string;

const TITLE_TEMPLATES: readonly Tpl[] = [
  (c, s) => `${s.label} in ${c.name} | Sarte Global`,
  (c, s) => `${s.label} ${c.name} — professioneel & vindbaar | Sarte Global`,
  (c, s) => `${s.label} in ${c.name} voor ondernemers | Sarte Global`,
];

const DESCRIPTION_TEMPLATES: readonly Tpl[] = [
  (c, s) =>
    `${s.label} in ${c.name}? Sarte Global bouwt een professionele, snelle en goed vindbare ${s.noun} voor ondernemers in ${c.name} en ${c.region}. Sterke SEO en focus op conversie. Vraag vrijblijvend een voorstel aan.`,
  (c, s) =>
    `Een ${s.noun} laten maken in ${c.name}? Wij ontwerpen moderne, responsive websites die ondernemers in ${c.province} meer klanten opleveren. Transparante prijzen, snelle oplevering.`,
  (c, s) =>
    `Op zoek naar ${s.label.toLowerCase()} in ${c.name}? Sarte Global levert maatwerk websites met sterke SEO voor bedrijven in ${c.name}. Modern design, gebouwd om te converteren.`,
];

const HERO_TITLE_EM: readonly string[] = [
  "meer groei en klanten.",
  "die klanten oplevert.",
  "die opvalt en converteert.",
];

const HERO_SUB_TEMPLATES: readonly Tpl[] = [
  (c, s) =>
    `Sarte Global ontwikkelt professionele, responsive websites voor ondernemers in ${c.name} en omstreken. Modern design, sterke SEO en een opbouw die bezoekers omzet in klanten.`,
  (c, s) =>
    `Wil je een ${s.noun} laten maken in ${c.name}? Wij combineren een onderscheidend ontwerp met technische snelheid en goede vindbaarheid in Google — gemaakt voor groei.`,
  (c) =>
    `Van eerste idee tot livegang: wij bouwen voor ondernemers in ${c.name} een snelle, moderne website die vertrouwen wekt en aanvragen oplevert.`,
];

const INTRO_HEADINGS: readonly Tpl[] = [
  (c, s) => `${s.label} in ${c.name}`,
  (c, s) => `Waarom een ${s.noun} laten maken in ${c.name}?`,
  (c, s) => `Jouw ${s.noun} laten maken in ${c.name}`,
];

const INTRO_OPENERS: readonly Tpl[] = [
  (c, s) =>
    `Een ${s.noun} laten maken in ${c.name} draait om meer dan een mooi ontwerp. Het gaat om een site die de juiste bezoekers uit ${c.name} en ${c.region} trekt en hen omzet in klanten. Sarte Global bouwt precies die websites: snel, modern en geoptimaliseerd voor Google.`,
  (c, s) =>
    `Steeds meer ondernemers in ${c.name} ontdekken dat hun website hun belangrijkste verkoopkanaal is. Of je nu in ${c.province} start of doorgroeit — een professionele ${s.noun} bepaalt of een bezoeker bij jou blijft of doorklikt naar de concurrent.`,
  (c, s) =>
    `Klanten in ${c.name} oriënteren zich online voordat ze contact opnemen. Een verouderde of trage ${s.noun} kost je daardoor direct omzet. Wij zorgen voor een moderne, vindbare website die in ${c.name} het verschil maakt.`,
];

const FAQ_BUILDERS: readonly ((c: City, s: LocationService) => LandingFAQItem)[] = [
  (c, s) => ({
    question: `Wat kost een ${s.noun} laten maken in ${c.name}?`,
    answer: `Dat hangt af van de omvang en functionaliteit. Wij werken met transparante pakketten, zodat je vooraf precies weet wat je ${s.noun} in ${c.name} kost — zonder verrassingen achteraf.`,
  }),
  (c) => ({
    question: `Werken jullie ook voor bedrijven buiten ${c.name}?`,
    answer: `Ja. We zijn online actief in heel Nederland en werken voor ondernemers in ${c.name}, ${c.province} en de rest van ${c.region}. Alles verloopt soepel op afstand, met persoonlijk contact via e-mail en videocall.`,
  }),
  (c, s) => ({
    question: `Hoe snel is mijn ${s.noun} in ${c.name} online?`,
    answer: `Voor de meeste ondernemers in ${c.name} leveren we binnen twee tot vier weken op, afhankelijk van de omvang en hoe snel content en feedback worden aangeleverd.`,
  }),
  (c) => ({
    question: `Wordt mijn website goed gevonden in ${c.name}?`,
    answer: `Ja. We bouwen elke website met een sterke SEO-basis en lokale zoekwoorden, zodat je beter gevonden wordt door klanten die in ${c.name} en omgeving zoeken.`,
  }),
];

const BENEFIT_POOL: readonly Tpl[] = [
  (c) => `Lokaal vindbaar voor klanten die in ${c.name} zoeken`,
  () => `Modern, responsive ontwerp dat op elk apparaat werkt`,
  () => `Razendsnelle laadtijden en sterke Core Web Vitals`,
  () => `Conversiegericht opgebouwd — van bezoeker naar aanvraag`,
  (c) => `Persoonlijk contact, ook op afstand vanuit heel ${c.province}`,
  () => `Transparante pakketten en een duidelijke planning`,
];

/* ── Slug ↔ page resolution ───────────────────────────────────────────────── */

interface Combo {
  readonly slug: string;
  readonly service: LocationService;
  readonly city: City;
}

const COMBOS: readonly Combo[] = LOCATION_SERVICES.flatMap((service) =>
  CITIES.map((city) => ({
    slug: `${service.prefix}-${city.slug}`,
    service,
    city,
  })),
);

const COMBO_BY_SLUG: ReadonlyMap<string, Combo> = new Map(
  COMBOS.map((combo) => [combo.slug, combo]),
);

/** All programmatic slugs — for `generateStaticParams` and the sitemap. */
export function getLocationSlugs(): readonly string[] {
  return COMBOS.map((combo) => combo.slug);
}

/** Fully composed page for a slug, or `null` when the slug is not a real combo. */
export function getLocationPage(slug: string): LocationPage | null {
  const combo = COMBO_BY_SLUG.get(slug);
  if (!combo) return null;

  const { city, service } = combo;
  const seed = hash(slug);
  const path = `/${slug}`;

  const benefits = Array.from({ length: 4 }, (_, i) =>
    pick(BENEFIT_POOL, seed, i + 1)(city, service),
  ).filter((value, index, all) => all.indexOf(value) === index);

  const nearby = city.nearby
    .map((nearbySlug) => CITY_BY_SLUG.get(nearbySlug))
    .filter((c): c is City => Boolean(c))
    .map((c) => ({ name: c.name, href: `/${service.prefix}-${c.slug}` }));

  // Cross-link this city's page to the same city in every other keyword
  // dimension (e.g. /website-laten-maken-amsterdam ↔ /webdesign-amsterdam), so
  // the dimensions pass authority to each other instead of being orphaned silos.
  const crossLinks: readonly InternalLink[] = LOCATION_SERVICES.filter(
    (other) => other.prefix !== service.prefix,
  ).map((other) => ({
    name: `${other.label} ${city.name}`,
    href: `/${other.prefix}-${city.slug}`,
  }));

  const hero: LandingHeroContent = {
    ...LANDING_HERO,
    eyebrow: `${service.label} · ${city.name}`,
    titleLead: `${service.label} in ${city.name} voor`,
    titleEm: pick(HERO_TITLE_EM, seed, 2),
    sub: pick(HERO_SUB_TEMPLATES, seed, 1)(city, service),
  };

  return {
    slug,
    path,
    city,
    service,
    metaTitle: pick(TITLE_TEMPLATES, seed)(city, service),
    metaDescription: pick(DESCRIPTION_TEMPLATES, seed, 1)(city, service),
    keywords: [
      `${service.label.toLowerCase()} ${city.name}`,
      `${service.noun} laten maken ${city.name}`,
      `webdesign ${city.name}`,
      `webdesigner ${city.name}`,
      `website laten maken ${city.name}`,
      `professionele website ${city.name}`,
    ],
    hero,
    introHeading: pick(INTRO_HEADINGS, seed, 3)(city, service),
    introParagraphs: [pick(INTRO_OPENERS, seed, 1)(city, service), city.angle],
    benefitsHeading: `Wat je krijgt met je ${service.noun} in ${city.name}`,
    benefits,
    faqHeading: `Veelgestelde vragen — ${service.label.toLowerCase()} in ${city.name}`,
    faq: FAQ_BUILDERS.map((build) => build(city, service)),
    nearby,
    crossLinks,
    serviceDescription: pick(DESCRIPTION_TEMPLATES, seed, 2)(city, service),
  };
}
