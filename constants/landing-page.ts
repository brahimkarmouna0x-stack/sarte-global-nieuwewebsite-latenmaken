import type {
  LandingFAQItem,
  LandingFeaturesContent,
  LandingFinalCtaContent,
  LandingHeroContent,
  LandingWhyContent,
} from "./landing-nieuwe-website";

/**
 * Content for `/landing-page-laten-maken`. Targets the "landing page laten
 * maken" keyword cluster with a conversion-/campagne-angle (één doel, één
 * pagina, maximale conversie). Complements `/services/landing-page-optimization`
 * (optimaliseren van bestaande pagina's) — this page is the commercial
 * "laten maken" entry point.
 */

const PROJECT_TYPE = "Landingspagina";

export const LANDINGPAGE_PROJECT_TYPE = PROJECT_TYPE;

export const LANDINGPAGE_META = {
  path: "/landing-page-laten-maken",
  title: "Landing page laten maken | Sarte Global",
  description:
    "Landing page laten maken die bezoekers omzet in leads en klanten. Eén doel, een snelle conversiegerichte pagina voor je campagne, dienst of product. Sterke koppen, heldere CTA's en A/B-testen. Vraag vrijblijvend een voorstel aan.",
  keywords: [
    "landing page laten maken",
    "landingspagina laten maken",
    "conversiegerichte landingspagina",
    "landingspagina voor google ads",
    "campagne landingspagina",
    "high converting landing page",
    "landing page bouwen",
    "professionele landingspagina",
    "leadgeneratie pagina",
    "landingspagina op maat",
    "website laten maken",
    "Sarte Global",
  ],
  ogAlt: "Landing page laten maken · Sarte Global",
} as const;

export const LANDINGPAGE_HERO = {
  eyebrow: "Landing page laten maken · Sarte Global",
  badge: "Conversiespecialist · nu 3 plekken beschikbaar",
  titleLead: "Landing page laten maken die",
  titleEm: "bezoekers omzet in klanten.",
  sub: "Sarte Global bouwt snelle, conversiegerichte landingspagina's met één duidelijk doel. Sterke koppen, heldere call-to-actions en een opbouw die bezoekers van je campagne moeiteloos naar contact of aankoop leidt.",
  primaryCta: "Landingspagina aanvragen",
  secondaryCta: { label: "Bekijk ons proces", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ reviews" },
  pills: [
    { label: "+200% aanvragen" },
    { label: "0,8s laadtijd" },
    { label: "A/B-getest" },
    { label: "Live in 1 week" },
  ],
  trust: [
    "150+ pagina's & websites opgeleverd",
    "Conversiespecialisten",
    "Klaar voor Google & Meta Ads",
    "A/B-testen inbegrepen",
  ],
  benefits: [
    "Eén doel, maximale conversie",
    "Sterke koppen & CTA's",
    "Razendsnel op mobiel",
    "Gekoppeld aan je analytics",
  ],
} as const satisfies LandingHeroContent;

export const LANDINGPAGE_WHY = {
  eyebrow: "Waarom een aparte landingspagina",
  titleLead: "Eén pagina, één doel,",
  titleEm: "maximale conversie.",
  lead: "Stuur je advertentieverkeer naar je homepage, dan verlies je conversie. Een toegewijde landingspagina sluit perfect aan op je advertentie, neemt afleiding weg en stuurt bezoekers naar één heldere actie — precies wat een campagne nodig heeft om te renderen.",
  media: {
    image: "/images/company-img.png",
    alt: "Het team van Sarte Global ontwerpt een conversiegerichte landingspagina in de studio.",
    caption: "Sarte Global · landingspagina",
    tag: "Conversiespecialist",
  },
  proof: [
    "Conversiegericht ontworpen",
    "Boodschap sluit aan op je advertentie",
    "Meetbaar via GA4 & events",
  ],
  pillars: [
    {
      iconName: "cursor",
      title: "Eén heldere actie",
      description:
        "Geen afleidende menu's of zijpaden. Alles op de pagina werkt naar één call-to-action toe, zodat meer bezoekers daadwerkelijk converteren.",
    },
    {
      iconName: "spark",
      title: "Overtuigende copy",
      description:
        "Koppen, teksten en knoppen geschreven vanuit het perspectief van je klant — gericht op het wegnemen van twijfel en het tonen van waarde.",
    },
    {
      iconName: "lightning",
      title: "Razendsnel op mobiel",
      description:
        "Een mobile-first pagina die in seconden laadt, zelfs op 4G. Snelheid bepaalt of je betaalde bezoeker blijft of wegklikt.",
    },
    {
      iconName: "chart",
      title: "Meetbaar & testbaar",
      description:
        "Gekoppeld aan GA4 en conversie-events, zodat je precies ziet wat werkt — en we via A/B-testen blijven verbeteren.",
    },
    {
      iconName: "search",
      title: "Vindbaar & adverteerbaar",
      description:
        "Een nette technische basis met sterke Quality Score voor Google Ads en goede vindbaarheid voor organisch verkeer.",
    },
  ],
  paragraphs: [
    "Een landing page laten maken draait om focus. Waar een website veel doelen dient, heeft een landingspagina er maar één: de bezoeker in beweging krijgen. Die focus is precies wat het verschil maakt tussen verspild advertentiebudget en een campagne die rendeert.",
    "Bij Sarte Global ontwerpen we elke landingspagina rond jouw aanbod, doelgroep en de advertentie waar het verkeer vandaan komt. We werken voor ondernemers door heel Nederland, van Amsterdam tot Den Haag.",
  ],
} as const satisfies LandingWhyContent;

export const LANDINGPAGE_FEATURES = {
  eyebrow: "Wat je krijgt",
  titleLead: "Alles wat een landingspagina",
  titleEm: "nodig heeft om te scoren.",
  sub: "Kies een onderdeel en zie wat het voor jouw conversie betekent. Standaard inbegrepen bij elke landingspagina die we bouwen.",
  features: [
    {
      key: "convert",
      iconName: "cursor",
      title: "Conversiegerichte opbouw",
      description:
        "Een bewezen structuur — belofte, bewijs, bezwaren wegnemen, actie — die bezoekers stap voor stap naar je doel leidt.",
      stat: { value: "+200%", label: "meer aanvragen" },
    },
    {
      key: "speed",
      iconName: "lightning",
      title: "Razendsnel",
      description:
        "Geoptimaliseerde code en beelden voor laadtijden onder de seconde. Cruciaal voor je advertentiekosten én je conversie.",
      stat: { value: "0,8s", label: "laadtijd" },
    },
    {
      key: "mobile",
      iconName: "mobile",
      title: "Mobile-first",
      description:
        "Het grootste deel van je advertentieverkeer is mobiel. We ontwerpen de pagina vanaf de eerste schets voor de telefoon.",
      stat: { value: "100%", label: "responsive" },
    },
    {
      key: "seo",
      iconName: "search",
      title: "Klaar voor Ads & SEO",
      description:
        "Een nette technische basis met sterke Quality Score voor Google Ads en goede vindbaarheid voor organisch verkeer.",
      stat: { value: "10/10", label: "Quality Score" },
    },
    {
      key: "manage",
      iconName: "chart",
      title: "Tracking & analytics",
      description:
        "GA4, conversie-events en — waar gewenst — Meta- en Google-tags, zodat elke euro advertentiebudget meetbaar is.",
      stat: { value: "100%", label: "meetbaar" },
    },
    {
      key: "secure",
      iconName: "spark",
      title: "A/B-testen",
      description:
        "We testen koppen, beelden en CTA's om maand na maand meer omzet uit hetzelfde verkeer te halen.",
      stat: { value: "+41%", label: "meer conversie" },
    },
  ],
} as const satisfies LandingFeaturesContent;

export const LANDINGPAGE_FAQ = [
  {
    question: "Wat kost een landing page laten maken?",
    answer:
      "Een professionele landingspagina start op een toegankelijk instapniveau. De prijs hangt af van de lengte, het maatwerk in design en copy en eventuele koppelingen of A/B-testen. Je ontvangt altijd vooraf een heldere offerte zonder verrassingen.",
  },
  {
    question: "Wat is het verschil tussen een landingspagina en een website?",
    answer:
      "Een website dient veel doelen en heeft meerdere pagina's en navigatie. Een landingspagina is één pagina met één doel: bezoekers van een specifieke campagne of advertentie omzetten in een lead of klant, zonder afleiding.",
  },
  {
    question: "Hoe lang duurt het om een landingspagina te maken?",
    answer:
      "Een conversiegerichte landingspagina staat doorgaans binnen één tot twee weken online, afhankelijk van content en maatwerk. In de analysefase geven we een concrete planning met duidelijke mijlpalen.",
  },
  {
    question: "Schrijven jullie ook de teksten?",
    answer:
      "Ja. Overtuigende copy is bepalend voor conversie. We schrijven koppen, teksten en CTA's vanuit het perspectief van jouw klant, of werken samen met jouw input en huisstijl.",
  },
  {
    question: "Is de landingspagina geschikt voor Google en Meta Ads?",
    answer:
      "Zeker. We bouwen met een sterke technische basis en goede Quality Score voor Google Ads, plaatsen de juiste tracking voor Google en Meta en zorgen dat de boodschap naadloos aansluit op je advertenties.",
  },
  {
    question: "Kunnen jullie de pagina blijven optimaliseren?",
    answer:
      "Ja. Na livegang kunnen we via A/B-testen koppen, layouts en CTA's blijven verbeteren, zodat je maand na maand meer uit hetzelfde advertentiebudget haalt. Bekijk ook onze dienst landingspagina-optimalisatie.",
  },
] as const satisfies readonly LandingFAQItem[];

export const LANDINGPAGE_FINAL_CTA = {
  eyebrow: "Klaar om te converteren",
  titleLead: "Jouw landingspagina",
  titleEm: "begint vandaag.",
  sub: "Vertel ons kort over je campagne en doel. Binnen één werkdag ontvang je een vrijblijvend voorstel voor je landing page laten maken — helder en op maat.",
  urgency: "Nog 3 projectplekken beschikbaar deze maand",
  points: [
    "Reactie binnen 1 werkdag",
    "Conversiegericht & A/B-testbaar",
    "Eén vaste conversiespecialist",
  ],
  projectType: PROJECT_TYPE,
} as const satisfies LandingFinalCtaContent;
