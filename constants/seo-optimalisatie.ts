import type {
  LandingFAQItem,
  LandingFeaturesContent,
  LandingFinalCtaContent,
  LandingHeroContent,
  LandingWhyContent,
} from "./landing-nieuwe-website";

/**
 * Content for `/seo-optimalisatie`. Targets the "seo optimalisatie" keyword
 * cluster — technische SEO, content, lokale SEO en rapportage. Commercial entry
 * point that complements the broader `/services/seo` service page.
 */

const PROJECT_TYPE = "SEO & groei";

export const SEO_PROJECT_TYPE = PROJECT_TYPE;

export const SEO_META = {
  path: "/seo-optimalisatie",
  title: "SEO optimalisatie | Sarte Global",
  description:
    "SEO optimalisatie die structureel meer bezoekers en klanten oplevert. Technische SEO, sterke content, lokale SEO en heldere rapportage — voor ondernemers en bedrijven in Nederland. Vraag een vrijblijvende SEO-analyse aan.",
  keywords: [
    "seo optimalisatie",
    "seo specialist",
    "zoekmachine optimalisatie",
    "seo bureau nederland",
    "technische seo",
    "lokale seo",
    "seo uitbesteden",
    "hoger in google",
    "seo voor website",
    "content seo",
    "seo vriendelijke website",
    "Sarte Global",
  ],
  ogAlt: "SEO optimalisatie · Sarte Global",
} as const;

export const SEO_HERO = {
  eyebrow: "SEO optimalisatie · Sarte Global",
  badge: "SEO-specialist · nu 3 plekken beschikbaar",
  titleLead: "SEO optimalisatie die",
  titleEm: "structureel meer klanten oplevert.",
  sub: "Sarte Global verbetert je vindbaarheid in Google met technische SEO, sterke content en lokale SEO. Geen trucjes, maar een bewezen aanpak die zorgt voor blijvende, organische groei.",
  primaryCta: "SEO-analyse aanvragen",
  secondaryCta: { label: "Bekijk onze aanpak", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ reviews" },
  pills: [
    { label: "Meer organisch verkeer" },
    { label: "100/100 techniek" },
    { label: "Lokale SEO" },
    { label: "Heldere rapportage" },
  ],
  trust: [
    "150+ projecten opgeleverd",
    "SEO-specialisten",
    "Technisch & contentgedreven",
    "Maandelijkse rapportage",
  ],
  benefits: [
    "Technische SEO op orde",
    "Content die rankt",
    "Beter vindbaar in jouw regio",
    "Meetbaar resultaat",
  ],
} as const satisfies LandingHeroContent;

export const SEO_WHY = {
  eyebrow: "Waarom SEO",
  titleLead: "Verkeer dat blijft komen,",
  titleEm: "ook zonder advertentiebudget.",
  lead: "Adverteren stopt zodra je budget op is. SEO bouwt aan een fundament dat dag en nacht nieuwe bezoekers blijft aantrekken. Een investering in vindbaarheid betaalt zich jarenlang terug — mits het technisch én inhoudelijk goed gebeurt.",
  media: {
    image: "/images/company-img.png",
    alt: "Het team van Sarte Global analyseert zoekdata en rankings in de studio.",
    caption: "Sarte Global · SEO",
    tag: "SEO-specialist",
  },
  proof: [
    "Technische én content-SEO",
    "Gericht op aanvragen, niet alleen rankings",
    "Transparante maandrapportage",
  ],
  pillars: [
    {
      iconName: "gauge",
      title: "Technische SEO",
      description:
        "Indexering, sitestructuur, schema-markup en Core Web Vitals netjes geregeld — de basis waarop alle andere SEO bouwt.",
    },
    {
      iconName: "spark",
      title: "Content die rankt",
      description:
        "Sterke, relevante content rond de zoekwoorden van jouw klant — geschreven om te ranken én gelezen te worden.",
    },
    {
      iconName: "layers",
      title: "Lokale SEO",
      description:
        "Beter vindbaar in jouw regio met een geoptimaliseerd Google Bedrijfsprofiel, lokale pagina's en reviews.",
    },
    {
      iconName: "search",
      title: "Zoekwoordstrategie",
      description:
        "We bepalen op welke zoekwoorden je écht kunt winnen en die het meeste opleveren — gericht op zoekintentie en omzet.",
    },
    {
      iconName: "chart",
      title: "Meten & rapporteren",
      description:
        "Search Console, GA4 en een helder dashboard laten precies zien wat werkt — gekoppeld aan jouw bedrijfsdoelen.",
    },
  ],
  paragraphs: [
    "SEO optimalisatie draait niet om snelle trucs, maar om een sterk fundament en consistente uitvoering. Een technisch gezonde website met relevante content en lokale signalen wint structureel terrein in Google — en dat verkeer is gratis en duurzaam.",
    "Bij Sarte Global combineren we techniek, content en analyse tot één aanpak die stuurt op aanvragen en omzet. We helpen ondernemers door heel Nederland beter vindbaar te worden, van Amsterdam tot Eindhoven.",
  ],
} as const satisfies LandingWhyContent;

export const SEO_FEATURES = {
  eyebrow: "Onze aanpak",
  titleLead: "Alles wat structurele",
  titleEm: "SEO-groei nodig heeft.",
  sub: "Kies een onderdeel en zie wat het voor jouw vindbaarheid betekent. Onderdeel van elk SEO-traject dat we draaien.",
  features: [
    {
      key: "seo",
      iconName: "gauge",
      title: "Technische SEO-audit",
      description:
        "We brengen indexering, snelheid, structuur en fouten in kaart en lossen op wat groei in de weg staat — de basis voor alles.",
      stat: { value: "100/100", label: "techniek" },
    },
    {
      key: "convert",
      iconName: "spark",
      title: "Content & on-page",
      description:
        "Sterke pagina's en artikelen rond je zoekwoorden, met optimale titels, koppen en interne links die rankings opbouwen.",
      stat: { value: "+118%", label: "organisch verkeer" },
    },
    {
      key: "manage",
      iconName: "layers",
      title: "Lokale SEO",
      description:
        "Google Bedrijfsprofiel, lokale landingspagina's en reviews, zodat je opvalt bij zoekers in jouw regio en stad.",
      stat: { value: "top 3", label: "lokaal pakket" },
    },
    {
      key: "speed",
      iconName: "lightning",
      title: "Core Web Vitals",
      description:
        "Snelle laadtijden en een stabiele pagina-ervaring — een directe rankingfactor én beter voor je bezoeker.",
      stat: { value: "0,8s", label: "laadtijd" },
    },
    {
      key: "secure",
      iconName: "search",
      title: "Zoekwoord & strategie",
      description:
        "Onderzoek naar zoekvraag en concurrentie, vertaald naar een contentplan dat aansluit op jouw verkoopdoelen.",
      stat: { value: "100+", label: "zoekwoorden" },
    },
    {
      key: "mobile",
      iconName: "chart",
      title: "Rapportage & groei",
      description:
        "Maandelijkse rapportage in begrijpelijke taal: rankings, verkeer en — vooral — aanvragen en omzet.",
      stat: { value: "maandelijks", label: "rapportage" },
    },
  ],
} as const satisfies LandingFeaturesContent;

export const SEO_FAQ = [
  {
    question: "Wat kost SEO optimalisatie?",
    answer:
      "SEO is maatwerk: de investering hangt af van je uitgangssituatie, de concurrentie en je ambities. We werken met heldere maandtrajecten of een eenmalige optimalisatie. Je krijgt altijd vooraf een duidelijk voorstel met verwachte inspanning en focus.",
  },
  {
    question: "Hoe snel zie ik resultaat van SEO?",
    answer:
      "SEO is een investering op de middellange termijn. Technische verbeteringen werken vaak binnen enkele weken door, terwijl content en autoriteit doorgaans drie tot zes maanden nodig hebben om echt terrein te winnen. Daarna bouwt het resultaat zich verder op.",
  },
  {
    question: "Doen jullie ook lokale SEO?",
    answer:
      "Ja. We optimaliseren je Google Bedrijfsprofiel, bouwen lokale landingspagina's en helpen met reviews, zodat je beter vindbaar bent in je eigen stad en regio — ideaal voor lokale ondernemers en dienstverleners.",
  },
  {
    question: "Kunnen jullie mijn bestaande website optimaliseren?",
    answer:
      "Zeker. We starten met een audit van je huidige site, lossen technische knelpunten op en verbeteren content en structuur. Je hoeft dus geen nieuwe website te hebben om met SEO te starten.",
  },
  {
    question: "Werken jullie met langdurige contracten?",
    answer:
      "We geloven in resultaat, niet in vastzetten. We werken bij voorkeur met flexibele maandtrajecten en transparante rapportage, zodat je op basis van resultaat beslist om door te gaan.",
  },
  {
    question: "Rapporteren jullie over de resultaten?",
    answer:
      "Ja. Je ontvangt maandelijks een heldere rapportage met rankings, verkeer en conversies, gekoppeld aan je bedrijfsdoelen — geen onleesbare datadump, maar inzicht waar je iets aan hebt.",
  },
] as const satisfies readonly LandingFAQItem[];

export const SEO_FINAL_CTA = {
  eyebrow: "Klaar om te groeien",
  titleLead: "Jouw groei in Google",
  titleEm: "begint vandaag.",
  sub: "Vertel ons kort over je website en doelen. Binnen één werkdag ontvang je een vrijblijvende SEO-analyse met de grootste kansen — helder en op maat.",
  urgency: "Nog 3 trajectplekken beschikbaar deze maand",
  points: [
    "Reactie binnen 1 werkdag",
    "Technisch & contentgedreven",
    "Eén vaste SEO-specialist",
  ],
  projectType: PROJECT_TYPE,
} as const satisfies LandingFinalCtaContent;
