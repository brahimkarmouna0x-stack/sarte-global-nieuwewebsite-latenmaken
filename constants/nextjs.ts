import type {
  LandingComparisonContent,
  LandingFAQItem,
  LandingFeaturesContent,
  LandingFinalCtaContent,
  LandingHeroContent,
  LandingWhyContent,
} from "./landing-nieuwe-website";

/**
 * Content for `/nextjs-website-laten-maken`. Targets the "nextjs website laten
 * maken" keyword cluster with a performance-/tech-angle (snelheid, Core Web
 * Vitals, headless, schaalbaarheid). Complements `/website-laten-maken` and
 * `/services/web-development`; cross-linked, self-canonical.
 */

const PROJECT_TYPE = "Website laten maken";

export const NEXTJS_PROJECT_TYPE = PROJECT_TYPE;

export const NEXTJS_META = {
  path: "/nextjs-website-laten-maken",
  title: "Next.js website laten maken | Sarte Global",
  description:
    "Next.js website laten maken voor maximale snelheid en topscores op Core Web Vitals. Een razendsnelle, schaalbare en SEO-sterke website op de modernste React-techniek. Vraag vrijblijvend een voorstel aan.",
  keywords: [
    "nextjs website laten maken",
    "next.js website laten maken",
    "next js developer",
    "react website laten maken",
    "headless website laten maken",
    "snelle website laten maken",
    "moderne website laten maken",
    "jamstack website",
    "maatwerk website",
    "professionele website laten maken",
    "website laten maken",
    "Sarte Global",
  ],
  ogAlt: "Next.js website laten maken · Sarte Global",
} as const;

export const NEXTJS_HERO = {
  eyebrow: "Next.js website laten maken · Sarte Global",
  badge: "Next.js-specialist · nu 3 plekken beschikbaar",
  titleLead: "Next.js website laten maken die",
  titleEm: "razendsnel en vindbaar is.",
  sub: "Sarte Global bouwt websites op Next.js — de modernste React-techniek voor maximale snelheid, topscores op Core Web Vitals en sterke SEO. Een toekomstvaste basis die moeiteloos meegroeit met je bedrijf.",
  primaryCta: "Next.js-website aanvragen",
  secondaryCta: { label: "Bekijk ons proces", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ reviews" },
  pills: [
    { label: "0,8s laadtijd" },
    { label: "100/100 Core Web Vitals" },
    { label: "Schaalbaar" },
    { label: "Headless-ready" },
  ],
  trust: [
    "150+ websites opgeleverd",
    "Next.js & React-specialisten",
    "Topscores op Core Web Vitals",
    "SEO-sterk gebouwd",
  ],
  benefits: [
    "Razendsnel & schaalbaar",
    "Topscores Core Web Vitals",
    "Sterke technische SEO",
    "Headless CMS mogelijk",
  ],
} as const satisfies LandingHeroContent;

export const NEXTJS_WHY = {
  eyebrow: "Waarom Next.js",
  titleLead: "De techniek achter de",
  titleEm: "snelste websites van nu.",
  lead: "Next.js is het React-framework waarop toonaangevende merken hun websites bouwen. Door pagina's vooraf te genereren en slim te laden, krijg je laadtijden onder de seconde, uitstekende Core Web Vitals en een sterke basis voor SEO — precies waar Google en je bezoekers van houden.",
  media: {
    image: "/images/company-img.png",
    alt: "Het team van Sarte Global bouwt een Next.js-website in de studio.",
    caption: "Sarte Global · Next.js",
    tag: "Next.js-specialist",
  },
  proof: [
    "Next.js & React-specialisten",
    "Topscores op Core Web Vitals",
    "Schaalbaar & toekomstvast",
  ],
  pillars: [
    {
      iconName: "lightning",
      title: "Maximale snelheid",
      description:
        "Vooraf gegenereerde pagina's en geoptimaliseerd laden zorgen voor laadtijden onder de seconde — een directe winst voor conversie en SEO.",
    },
    {
      iconName: "gauge",
      title: "Topscores Core Web Vitals",
      description:
        "Een stabiele, snelle pagina-ervaring die hoog scoort op Google's Core Web Vitals — een meetbare rankingfactor.",
    },
    {
      iconName: "search",
      title: "Sterk in SEO",
      description:
        "Server-side rendering, nette HTML en schema-markup maken je site uitstekend vindbaar vanaf de eerste dag.",
    },
    {
      iconName: "cpu",
      title: "Headless & koppelbaar",
      description:
        "Combineer Next.js met een headless CMS of bestaande systemen, zodat je content beheert zonder in te leveren op snelheid.",
    },
    {
      iconName: "code",
      title: "Schaalbaar & toekomstvast",
      description:
        "Schone code op een moderne stack die meegroeit van marketingsite tot complexe webapp — zonder je vast te zetten.",
    },
  ],
  paragraphs: [
    "Een Next.js website laten maken betekent kiezen voor snelheid en kwaliteit op de lange termijn. Waar veel sites traag worden onder plugins en overhead, blijft een Next.js-site razendsnel — en snelheid bepaalt steeds vaker je positie in Google én je conversie.",
    "Bij Sarte Global bouwen we Next.js-websites met aandacht voor performance, SEO en onderhoudbaarheid. We werken voor ambitieuze ondernemers door heel Nederland, van Amsterdam tot Eindhoven.",
  ],
} as const satisfies LandingWhyContent;

export const NEXTJS_FEATURES = {
  eyebrow: "Wat je krijgt",
  titleLead: "Alles wat een moderne",
  titleEm: "Next.js-website nodig heeft.",
  sub: "Kies een onderdeel en zie wat het voor jouw website betekent. Standaard inbegrepen bij elke Next.js-website die we bouwen.",
  features: [
    {
      key: "speed",
      iconName: "lightning",
      title: "Razendsnel",
      description:
        "Statisch gegenereerde pagina's en geoptimaliseerde assets voor laadtijden onder de seconde — overal, op elk apparaat.",
      stat: { value: "0,8s", label: "laadtijd" },
    },
    {
      key: "seo",
      iconName: "search",
      title: "SEO vanaf de basis",
      description:
        "Server-side rendering, nette structuur, metadata en schema-markup, zodat klanten je vinden vanaf de lancering.",
      stat: { value: "100/100", label: "SEO-score" },
    },
    {
      key: "convert",
      iconName: "gauge",
      title: "Topscores Core Web Vitals",
      description:
        "Een snelle, stabiele pagina-ervaring die hoog scoort bij Google — beter voor je ranking én je bezoeker.",
      stat: { value: "100/100", label: "Web Vitals" },
    },
    {
      key: "manage",
      iconName: "cursor",
      title: "Headless CMS",
      description:
        "Beheer je content via een gebruiksvriendelijk headless CMS, zonder dat het ten koste gaat van snelheid of veiligheid.",
      stat: { value: "5 min", label: "om bij te werken" },
    },
    {
      key: "mobile",
      iconName: "mobile",
      title: "Volledig responsive",
      description:
        "Een ontwerp dat vlekkeloos werkt op telefoon, tablet en desktop — mobile-first ontworpen.",
      stat: { value: "100%", label: "responsive" },
    },
    {
      key: "secure",
      iconName: "shield",
      title: "Veilig & schaalbaar",
      description:
        "Een moderne, veilige architectuur op schaalbare hosting die piekverkeer moeiteloos aankan.",
      stat: { value: "99,9%", label: "uptime" },
    },
  ],
} as const satisfies LandingFeaturesContent;

export const NEXTJS_COMPARISON = {
  eyebrow: "Next.js vs. standaard WordPress",
  titleLead: "Waarom Next.js wint op",
  titleEm: "snelheid en schaalbaarheid.",
  sub: "WordPress is fijn om zelf te beheren, maar wordt onder plugins vaak traag. Next.js levert maximale snelheid en een toekomstvaste basis. We adviseren eerlijk wat bij jouw situatie past — soms is dat een combinatie via headless.",
  usLabel: "Sarte Global · Next.js",
  themLabel: "Standaard WordPress",
  rows: [
    {
      label: "Laadsnelheid",
      us: "Razendsnel (vooraf gegenereerd)",
      them: "Wisselend, plugin-afhankelijk",
      themPositive: false,
    },
    {
      label: "Core Web Vitals",
      us: "Topscores",
      them: "Vaak verbeterpunt",
      themPositive: false,
    },
    {
      label: "Schaalbaarheid",
      us: "Tot complexe webapps",
      them: "Beperkt bij maatwerk",
      themPositive: false,
    },
    {
      label: "Beveiliging",
      us: "Klein aanvalsoppervlak",
      them: "Plugins als risico",
      themPositive: false,
    },
    {
      label: "Zelf content beheren",
      us: "Via headless CMS",
      them: "Sterk punt van WordPress",
      themPositive: true,
    },
    {
      label: "Onderhoud",
      us: "Minimaal",
      them: "Doorlopende plugin-updates",
      themPositive: false,
    },
  ],
  footnote:
    "Wil je vooral zelf eenvoudig content beheren? Dan kan WordPress een prima keuze zijn. Draait het om maximale snelheid, schaalbaarheid en een toekomstvaste basis? Dan is Next.js de slimmere keuze — desgewenst met een headless CMS voor het beste van beide.",
} as const satisfies LandingComparisonContent;

export const NEXTJS_FAQ = [
  {
    question: "Wat kost een Next.js website laten maken?",
    answer:
      "Een professionele Next.js-website start op een toegankelijk instapniveau; maatwerk, koppelingen of een headless CMS vragen meer. Je ontvangt altijd vooraf een heldere offerte, zodat je precies weet waar je aan toe bent.",
  },
  {
    question: "Wat is het voordeel van Next.js ten opzichte van WordPress?",
    answer:
      "Next.js levert standaard hogere snelheden en betere Core Web Vitals doordat pagina's vooraf worden gegenereerd. Het is schaalbaarder voor maatwerk en heeft een kleiner beveiligingsrisico. WordPress blijft sterk in zelf content beheren — dat combineren we desgewenst via een headless CMS.",
  },
  {
    question: "Kan ik mijn Next.js-website zelf beheren?",
    answer:
      "Ja. We koppelen je Next.js-site aan een gebruiksvriendelijk headless CMS, waarmee je teksten, beelden en pagina's zelf aanpast — zonder dat het ten koste gaat van de snelheid.",
  },
  {
    question: "Is Next.js goed voor SEO?",
    answer:
      "Uitstekend. Dankzij server-side rendering, nette HTML, snelle laadtijden en schema-markup is een Next.js-site technisch sterk vindbaar in Google vanaf de lancering.",
  },
  {
    question: "Is Next.js geschikt voor mijn project?",
    answer:
      "Next.js is ideaal voor websites waar snelheid, schaalbaarheid en SEO belangrijk zijn, en voor projecten die later kunnen uitgroeien tot een webapp. In het kennismakingsgesprek adviseren we eerlijk of Next.js, WordPress of een combinatie het beste past.",
  },
  {
    question: "Hoe lang duurt het om een Next.js-website te maken?",
    answer:
      "Een professionele Next.js-website staat doorgaans binnen twee tot vier weken online, afhankelijk van omvang, content en koppelingen. In de analysefase geven we een concrete planning met duidelijke mijlpalen.",
  },
] as const satisfies readonly LandingFAQItem[];

export const NEXTJS_FINAL_CTA = {
  eyebrow: "Klaar voor snelheid",
  titleLead: "Jouw Next.js-website",
  titleEm: "begint vandaag.",
  sub: "Vertel ons kort over je bedrijf en doelen. Binnen één werkdag ontvang je een vrijblijvend voorstel voor je Next.js website laten maken — helder en op maat.",
  urgency: "Nog 3 projectplekken beschikbaar deze maand",
  points: [
    "Reactie binnen 1 werkdag",
    "Razendsnel & SEO-sterk",
    "Eén vaste Next.js-specialist",
  ],
  projectType: PROJECT_TYPE,
} as const satisfies LandingFinalCtaContent;
