import type {
  LandingFAQItem,
  LandingFeaturesContent,
  LandingFinalCtaContent,
  LandingHeroContent,
  LandingWhyContent,
} from "./landing-nieuwe-website";

/**
 * Content for `/website-onderhoud`. Targets the "website onderhoud" keyword
 * cluster — updates, beveiliging, back-ups, snelheid en doorlopende
 * verbeteringen. This is the primary maintenance page (there is a `maintenance`
 * pricing tier but no `/services/maintenance` page), so no cannibalisation.
 */

const PROJECT_TYPE = "Website onderhoud";

export const ONDERHOUD_PROJECT_TYPE = PROJECT_TYPE;

export const ONDERHOUD_META = {
  path: "/website-onderhoud",
  title: "Website onderhoud | Sarte Global",
  description:
    "Website onderhoud waardoor je site veilig, snel en up-to-date blijft. Updates, beveiliging, dagelijkse back-ups, monitoring en doorlopende verbeteringen — zonder zorgen. Vraag een vrijblijvend onderhoudsplan aan.",
  keywords: [
    "website onderhoud",
    "wordpress onderhoud",
    "website onderhoudscontract",
    "website laten onderhouden",
    "website updates",
    "website beveiliging",
    "website back-up",
    "websitebeheer uitbesteden",
    "onderhoud webshop",
    "website support",
    "website laten maken",
    "Sarte Global",
  ],
  ogAlt: "Website onderhoud · Sarte Global",
} as const;

export const ONDERHOUD_HERO = {
  eyebrow: "Website onderhoud · Sarte Global",
  badge: "Onderhoud & support · nieuwe klanten welkom",
  titleLead: "Website onderhoud waardoor je site",
  titleEm: "veilig en snel blijft.",
  sub: "Sarte Global houdt je website veilig, snel en up-to-date. Updates, beveiliging, dagelijkse back-ups en doorlopende verbeteringen — zodat jij je op je bedrijf richt en wij op je site.",
  primaryCta: "Onderhoudsplan aanvragen",
  secondaryCta: { label: "Bekijk wat we doen", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ reviews" },
  pills: [
    { label: "Dagelijkse back-ups" },
    { label: "Updates & beveiliging" },
    { label: "Snelle support" },
    { label: "Maandelijks opzegbaar" },
  ],
  trust: [
    "150+ websites & shops beheerd",
    "Snelle reactietijden",
    "Updates zonder downtime",
    "Maandelijks opzegbaar",
  ],
  benefits: [
    "Updates van core, thema & plugins",
    "Beveiliging & dagelijkse back-ups",
    "Snelheidsbewaking",
    "Vaste contactpersoon",
  ],
} as const satisfies LandingHeroContent;

export const ONDERHOUD_WHY = {
  eyebrow: "Waarom onderhoud",
  titleLead: "Een website is geen",
  titleEm: "eenmalig project.",
  lead: "Software veroudert, beveiligingslekken duiken op en zonder updates wordt je site trager en kwetsbaarder. Met doorlopend onderhoud voorkom je problemen vóórdat ze klanten of omzet kosten — en blijft je website een betrouwbaar visitekaartje.",
  media: {
    image: "/images/company-img.png",
    alt: "Het team van Sarte Global voert updates en monitoring uit in de studio.",
    caption: "Sarte Global · onderhoud",
    tag: "Onderhoud & support",
  },
  proof: [
    "Updates zonder downtime",
    "Proactieve beveiliging & monitoring",
    "Eén vaste contactpersoon",
  ],
  pillars: [
    {
      iconName: "shield",
      title: "Beveiliging & back-ups",
      description:
        "Doorlopende beveiliging, een firewall en dagelijkse back-ups. Gaat er iets mis, dan zetten we je site snel weer terug.",
    },
    {
      iconName: "layers",
      title: "Updates zonder zorgen",
      description:
        "We houden core, thema en plugins up-to-date en testen na elke update, zodat je site veilig blijft en niets stuk gaat.",
    },
    {
      iconName: "gauge",
      title: "Snelheidsbewaking",
      description:
        "We bewaken laadtijden en Core Web Vitals en grijpen in als je site trager wordt — beter voor bezoekers én voor Google.",
    },
    {
      iconName: "cursor",
      title: "Inhoudelijke aanpassingen",
      description:
        "Tekst- of beeldwijziging nodig? Een nieuwe pagina? Wij regelen het binnen je onderhoudsuren, snel en zonder gedoe.",
    },
    {
      iconName: "chart",
      title: "Monitoring & rapportage",
      description:
        "Uptime-monitoring en periodieke rapportage, zodat je altijd weet dat je site online is en goed presteert.",
    },
  ],
  paragraphs: [
    "Website onderhoud betekent rust: geen onverwachte storingen, geen gehackte site en geen verouderde plugins. Het is de verzekering die je website veilig, snel en bij de tijd houdt, zodat hij blijft doen waarvoor hij is gebouwd.",
    "Bij Sarte Global nemen we het volledige beheer uit handen, met korte lijnen en een vaste contactpersoon. We onderhouden websites en webshops voor ondernemers door heel Nederland, van Rotterdam tot Den Haag — ook als wij je site niet hebben gebouwd.",
  ],
} as const satisfies LandingWhyContent;

export const ONDERHOUD_FEATURES = {
  eyebrow: "Wat we doen",
  titleLead: "Alles om je website",
  titleEm: "zorgeloos te houden.",
  sub: "Kies een onderdeel en zie wat het voor jouw website betekent. Standaard onderdeel van elk onderhoudsplan.",
  features: [
    {
      key: "secure",
      iconName: "shield",
      title: "Beveiliging & back-ups",
      description:
        "Firewall, beveiligingsupdates en dagelijkse back-ups die we veilig bewaren — zodat we altijd snel kunnen herstellen.",
      stat: { value: "dagelijks", label: "back-up" },
    },
    {
      key: "manage",
      iconName: "layers",
      title: "Updates & testen",
      description:
        "We werken core, thema en plugins bij en testen na elke update, zodat je site veilig blijft en niets onverwacht breekt.",
      stat: { value: "0", label: "downtime" },
    },
    {
      key: "speed",
      iconName: "lightning",
      title: "Snelheidsoptimalisatie",
      description:
        "We bewaken en verbeteren laadtijden en Core Web Vitals doorlopend, zodat je site snel blijft voor bezoekers en Google.",
      stat: { value: "0,8s", label: "laadtijd" },
    },
    {
      key: "convert",
      iconName: "cursor",
      title: "Aanpassingen op verzoek",
      description:
        "Teksten, beelden of een nieuwe pagina nodig? Wij voeren wijzigingen snel door binnen je onderhoudsuren.",
      stat: { value: "binnen 1", label: "werkdag" },
    },
    {
      key: "seo",
      iconName: "gauge",
      title: "Monitoring & uptime",
      description:
        "We bewaken of je site online is en grijpen direct in bij problemen, vaak nog voordat jij het merkt.",
      stat: { value: "99,9%", label: "uptime" },
    },
    {
      key: "mobile",
      iconName: "chart",
      title: "Rapportage & advies",
      description:
        "Periodieke rapportage over updates, prestaties en beveiliging, plus advies voor verdere verbeteringen.",
      stat: { value: "periodiek", label: "rapportage" },
    },
  ],
} as const satisfies LandingFeaturesContent;

export const ONDERHOUD_FAQ = [
  {
    question: "Wat kost website onderhoud?",
    answer:
      "Onderhoud werkt met een vast, voorspelbaar maandbedrag dat afhangt van het type site (website of webshop), de omvang en het aantal gewenste wijzigingsuren. Je krijgt vooraf een helder plan, zodat je nooit voor verrassingen komt te staan.",
  },
  {
    question: "Onderhouden jullie ook websites die jullie niet hebben gebouwd?",
    answer:
      "Ja. We starten met een korte technische controle van je bestaande website of webshop en nemen daarna het onderhoud over. Of je site nu op WordPress, WooCommerce of een ander platform draait — we kijken graag mee.",
  },
  {
    question: "Wat valt er allemaal onder het onderhoud?",
    answer:
      "Updates van core, thema en plugins, beveiliging en een firewall, dagelijkse back-ups, snelheidsbewaking, uptime-monitoring en kleine inhoudelijke aanpassingen binnen je uren. Grotere uitbreidingen offreren we apart.",
  },
  {
    question: "Hoe snel reageren jullie bij een probleem?",
    answer:
      "Bij storingen of beveiligingsproblemen hebben we korte reactietijden en pakken we het met prioriteit op. Dankzij onze monitoring zien we veel problemen vaak al voordat ze jou bereiken.",
  },
  {
    question: "Kan ik maandelijks opzeggen?",
    answer:
      "Ja. We werken met flexibele, maandelijks opzegbare onderhoudsplannen. We willen je houden op basis van service en resultaat, niet op basis van een langdurig contract.",
  },
  {
    question: "Maken jullie back-ups en kunnen jullie herstellen?",
    answer:
      "Zeker. We maken dagelijks back-ups en bewaren deze veilig. Mocht er iets misgaan, dan zetten we je website snel terug naar een werkende versie.",
  },
] as const satisfies readonly LandingFAQItem[];

export const ONDERHOUD_FINAL_CTA = {
  eyebrow: "Klaar voor rust",
  titleLead: "Zorgeloos online",
  titleEm: "begint vandaag.",
  sub: "Vertel ons kort over je website. Binnen één werkdag ontvang je een vrijblijvend onderhoudsplan op maat — veilig, snel en zonder zorgen.",
  urgency: "Nieuwe onderhoudsklanten zijn welkom",
  points: [
    "Reactie binnen 1 werkdag",
    "Maandelijks opzegbaar",
    "Eén vaste contactpersoon",
  ],
  projectType: PROJECT_TYPE,
} as const satisfies LandingFinalCtaContent;
