import type {
  LandingComparisonContent,
  LandingFAQItem,
  LandingFeaturesContent,
  LandingFinalCtaContent,
  LandingHeroContent,
  LandingWhyContent,
} from "./landing-nieuwe-website";

/**
 * Content for `/webapp-laten-maken`. Targets the "webapp laten maken" keyword
 * cluster — maatwerk webapplicaties, SaaS, dashboards, portalen en interne
 * tools — gebouwd op een moderne stack. Distinct from the marketing-website
 * pages and from `/services/mobile-development` (native/cross-platform apps).
 */

const PROJECT_TYPE = "Webapp laten maken";

export const WEBAPP_PROJECT_TYPE = PROJECT_TYPE;

export const WEBAPP_META = {
  path: "/webapp-laten-maken",
  title: "Webapp laten maken | Sarte Global",
  description:
    "Webapp laten maken op maat: SaaS, dashboards, klantportalen en interne tools, gebouwd op een moderne, schaalbare stack (Next.js & React). Veilig, snel en klaar voor groei. Vraag vrijblijvend een voorstel aan.",
  keywords: [
    "webapp laten maken",
    "web applicatie laten maken",
    "maatwerk webapplicatie",
    "saas laten bouwen",
    "dashboard laten maken",
    "klantportaal laten maken",
    "webapplicatie op maat",
    "progressive web app laten maken",
    "interne tool laten bouwen",
    "software op maat",
    "website laten maken",
    "Sarte Global",
  ],
  ogAlt: "Webapp laten maken · Sarte Global",
} as const;

export const WEBAPP_HERO = {
  eyebrow: "Webapp laten maken · Sarte Global",
  badge: "Maatwerk-specialist · nu 3 plekken beschikbaar",
  titleLead: "Webapp laten maken die",
  titleEm: "met je bedrijf meegroeit.",
  sub: "Sarte Global bouwt maatwerk webapplicaties — SaaS, dashboards, klantportalen en interne tools — op een moderne, schaalbare stack. Snel, veilig en gebouwd als echt product, niet als demo.",
  primaryCta: "Webapp aanvragen",
  secondaryCta: { label: "Bekijk ons proces", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ reviews" },
  pills: [
    { label: "Maatwerk op je proces" },
    { label: "Schaalbaar" },
    { label: "Veilig & getest" },
    { label: "Modern stack" },
  ],
  trust: [
    "150+ projecten opgeleverd",
    "Senior developers",
    "Next.js · React · TypeScript",
    "Veilig & schaalbaar gebouwd",
  ],
  benefits: [
    "Maatwerk op jouw workflow",
    "Gebruikersbeheer & rollen",
    "Koppelingen met je systemen",
    "Schaalbaar & onderhoudbaar",
  ],
} as const satisfies LandingHeroContent;

export const WEBAPP_WHY = {
  eyebrow: "Waarom een maatwerk webapp",
  titleLead: "Software die past bij",
  titleEm: "jouw proces, niet andersom.",
  lead: "Standaardpakketten dwingen je vaak in een werkwijze die niet past. Een maatwerk webapp doet precies wat jouw bedrijf nodig heeft: het automatiseert je proces, sluit aan op je systemen en groeit mee — zonder beperkende licenties of overbodige functies.",
  media: {
    image: "/images/company-img.png",
    alt: "Het team van Sarte Global bouwt een maatwerk webapplicatie in de studio.",
    caption: "Sarte Global · webapp",
    tag: "Maatwerk-specialist",
  },
  proof: [
    "Gebouwd als echt product",
    "Veilig: rollen, rechten & data",
    "Schaalbaar op moderne infrastructuur",
  ],
  pillars: [
    {
      iconName: "cpu",
      title: "Maatwerk op je proces",
      description:
        "We bouwen exact de functionaliteit die jouw bedrijf nodig heeft — geen overbodige features, wel precies de workflow die werkt.",
    },
    {
      iconName: "layers",
      title: "Koppelingen & integraties",
      description:
        "Verbind je webapp met betaalproviders, CRM, boekhouding of bestaande systemen via API's, zodat data automatisch stroomt.",
    },
    {
      iconName: "shield",
      title: "Veilig & betrouwbaar",
      description:
        "Gebruikersbeheer, rollen en rechten, veilige authenticatie en zorgvuldige omgang met data — gebouwd om in productie te draaien.",
    },
    {
      iconName: "gauge",
      title: "Snel & schaalbaar",
      description:
        "Een moderne stack op schaalbare infrastructuur, zodat je app snel blijft van de eerste tot de duizendste gebruiker.",
    },
    {
      iconName: "code",
      title: "Onderhoudbaar & van jou",
      description:
        "Schone, gedocumenteerde code die je niet vastzet bij één leverancier. Je bent en blijft eigenaar van je software.",
    },
  ],
  paragraphs: [
    "Een webapp laten maken betekent investeren in software die exact past bij jouw manier van werken. Of het nu gaat om een SaaS-product, een klantportaal, een dashboard of een interne tool — alles draait om het automatiseren van werk en het ontsluiten van je data.",
    "Bij Sarte Global bouwen we webapps als echt product: met aandacht voor architectuur, beveiliging en performance. We werken voor ambitieuze bedrijven door heel Nederland, van Utrecht tot Eindhoven.",
  ],
} as const satisfies LandingWhyContent;

export const WEBAPP_FEATURES = {
  eyebrow: "Wat je krijgt",
  titleLead: "Alles wat een serieuze webapp",
  titleEm: "nodig heeft.",
  sub: "Kies een onderdeel en zie wat het voor jouw applicatie betekent. Standaard onderdeel van elke webapp die we bouwen.",
  features: [
    {
      key: "manage",
      iconName: "cursor",
      title: "Gebruikers & rollen",
      description:
        "Veilige authenticatie, gebruikersbeheer en fijnmazige rollen en rechten — zodat iedereen precies ziet en doet wat mag.",
      stat: { value: "100%", label: "rolgebaseerd" },
    },
    {
      key: "speed",
      iconName: "lightning",
      title: "Razendsnel",
      description:
        "Een moderne stack en doordachte architectuur houden je app snel en responsief, ook bij groeiende data en gebruikers.",
      stat: { value: "0,8s", label: "laadtijd" },
    },
    {
      key: "secure",
      iconName: "shield",
      title: "Veilig & getest",
      description:
        "Veilige dataopslag, geautomatiseerde tests en monitoring, zodat je app betrouwbaar in productie draait.",
      stat: { value: "99,9%", label: "uptime" },
    },
    {
      key: "convert",
      iconName: "layers",
      title: "Koppelingen via API",
      description:
        "Integraties met betaalproviders, CRM, boekhouding en andere systemen, zodat je app naadloos in je landschap past.",
      stat: { value: "∞", label: "integraties" },
    },
    {
      key: "mobile",
      iconName: "mobile",
      title: "Werkt op elk apparaat",
      description:
        "Een responsive interface die net zo goed werkt op desktop als op tablet en telefoon — installeerbaar als PWA waar gewenst.",
      stat: { value: "100%", label: "responsive" },
    },
    {
      key: "seo",
      iconName: "chart",
      title: "Inzicht & monitoring",
      description:
        "Dashboards en logging voor gebruik, performance en fouten — zodat je weet hoe je app presteert en waar je kunt verbeteren.",
      stat: { value: "realtime", label: "monitoring" },
    },
  ],
} as const satisfies LandingFeaturesContent;

export const WEBAPP_COMPARISON = {
  eyebrow: "Webapp vs. standaardpakket",
  titleLead: "Waarom maatwerk wint van",
  titleEm: "een standaard licentie.",
  sub: "Een kant-en-klaar pakket is snel, maar dwingt je in een vaste werkwijze en groeit met je mee in licentiekosten. Een maatwerk webapp past zich aan jouw proces aan en blijft van jou.",
  usLabel: "Sarte Global · maatwerk webapp",
  themLabel: "Standaard SaaS-pakket",
  rows: [
    {
      label: "Past bij jouw proces",
      us: "Exact op maat",
      them: "Jij past je aan",
      themPositive: false,
    },
    {
      label: "Eigenaarschap van software",
      us: "Volledig van jou",
      them: "Licentie / abonnement",
      themPositive: false,
    },
    {
      label: "Kosten bij groei",
      us: "Voorspelbaar",
      them: "Per gebruiker / maand",
      themPositive: false,
    },
    {
      label: "Koppelingen op maat",
      us: "Onbeperkt via API",
      them: "Beperkt tot wat het pakket biedt",
      themPositive: false,
    },
    {
      label: "Overbodige functies",
      us: "Alleen wat je nodig hebt",
      them: "Betalen voor het hele pakket",
      themPositive: false,
    },
    {
      label: "Data & privacy",
      us: "Jij bepaalt",
      them: "Platformafhankelijk",
      themPositive: false,
    },
  ],
  footnote:
    "Soms is een standaardpakket genoeg om snel te starten. Heb je een uniek proces, specifieke koppelingen of een eigen product voor ogen? Dan verdient maatwerk zich terug.",
} as const satisfies LandingComparisonContent;

export const WEBAPP_FAQ = [
  {
    question: "Wat kost een webapp laten maken?",
    answer:
      "Maatwerk software is altijd projectspecifiek: de kosten hangen af van de functionaliteit, koppelingen en complexiteit. We werken graag in duidelijke fasen met een afgebakende eerste versie (MVP), zodat je snel waarde ziet. Je ontvangt vooraf een heldere offerte en planning.",
  },
  {
    question: "Wat is het verschil tussen een webapp en een website?",
    answer:
      "Een website informeert en zet bezoekers aan tot contact of aankoop. Een webapp is interactieve software in de browser: gebruikers loggen in en voeren taken uit — denk aan een dashboard, klantportaal of SaaS-product met gebruikersbeheer en data.",
  },
  {
    question: "Op welke techniek bouwen jullie webapps?",
    answer:
      "We werken met een moderne, bewezen stack: Next.js, React en TypeScript op de frontend, met een veilige backend en database. Schaalbaar, onderhoudbaar en zonder lock-in bij één leverancier.",
  },
  {
    question: "Kunnen jullie koppelen met mijn bestaande systemen?",
    answer:
      "Ja. Via API's koppelen we je webapp aan betaalproviders, CRM, boekhouding, e-mail of andere systemen, zodat data automatisch stroomt en je geen dubbel werk hebt.",
  },
  {
    question: "Beginnen jullie met een MVP?",
    answer:
      "Vaak wel. We adviseren om te starten met een afgebakende eerste versie die de kern oplost. Zo ben je sneller live, krijg je echte feedback en bouwen we daarna gericht verder op wat werkt.",
  },
  {
    question: "Verzorgen jullie ook onderhoud en doorontwikkeling?",
    answer:
      "Ja. Na livegang blijven we beschikbaar voor onderhoud, beveiligingsupdates, monitoring en het toevoegen van nieuwe functies, zodat je app veilig en bij de tijd blijft.",
  },
] as const satisfies readonly LandingFAQItem[];

export const WEBAPP_FINAL_CTA = {
  eyebrow: "Klaar om te bouwen",
  titleLead: "Jouw webapp",
  titleEm: "begint vandaag.",
  sub: "Vertel ons kort over je idee en proces. Binnen één werkdag ontvang je een vrijblijvend voorstel voor je webapp laten maken — helder, gefaseerd en op maat.",
  urgency: "Nog 3 projectplekken beschikbaar deze maand",
  points: [
    "Reactie binnen 1 werkdag",
    "Gefaseerd, te beginnen bij een MVP",
    "Eén vast senior team",
  ],
  projectType: PROJECT_TYPE,
} as const satisfies LandingFinalCtaContent;
