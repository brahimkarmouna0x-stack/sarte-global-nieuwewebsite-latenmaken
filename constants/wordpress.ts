import type {
  LandingComparisonContent,
  LandingFAQItem,
  LandingFeaturesContent,
  LandingFinalCtaContent,
  LandingHeroContent,
  LandingWhyContent,
} from "./landing-nieuwe-website";

/**
 * Content for `/wordpress-website-laten-maken`. Reuses the premium `Landing*`
 * components via their `content` props, so the WordPress page matches the
 * flagship landing page exactly while targeting the "wordpress website laten
 * maken" / "wordpress specialist" keyword cluster.
 */

const PROJECT_TYPE = "WordPress website laten maken";

export const WORDPRESS_PROJECT_TYPE = PROJECT_TYPE;

export const WORDPRESS_META = {
  path: "/wordpress-website-laten-maken",
  title: "WordPress website laten maken | Sarte Global",
  description:
    "WordPress website laten maken door een WordPress-specialist. Maatwerk thema's, sterke SEO en een website die je zelf eenvoudig beheert. Vraag vrijblijvend een voorstel aan.",
  keywords: [
    "wordpress website laten maken",
    "wordpress specialist",
    "wordpress website bouwen",
    "wordpress webdesign",
    "wordpress laten maken",
    "professionele wordpress website",
    "maatwerk wordpress website",
    "wordpress website op maat",
    "wordpress seo",
    "woocommerce webshop laten maken",
    "website laten maken",
    "Sarte Global",
  ],
  ogAlt: "WordPress website laten maken · Sarte Global",
} as const;

export const WORDPRESS_HERO = {
  eyebrow: "WordPress website laten maken · Sarte Global",
  badge: "WordPress-specialist · nu 3 plekken beschikbaar",
  titleLead: "WordPress website laten maken die",
  titleEm: "je zelf eenvoudig beheert.",
  sub: "Sarte Global bouwt professionele WordPress-websites op maat — modern, snel en SEO-sterk. Je past teksten en beelden zelf moeiteloos aan via een overzichtelijk CMS, zonder technische kennis.",
  primaryCta: "WordPress website aanvragen",
  secondaryCta: { label: "Bekijk ons proces", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ reviews" },
  pills: [
    { label: "Zelf te beheren" },
    { label: "SEO-klaar" },
    { label: "Snel & veilig" },
    { label: "Live in 2 weken" },
  ],
  trust: [
    "150+ websites opgeleverd",
    "WordPress-specialisten",
    "Binnen 2 weken online",
    "Maatwerk thema's",
  ],
  benefits: [
    "Eigen CMS — zelf aanpasbaar",
    "SEO-vriendelijk (Yoast / RankMath)",
    "Snel & veilig gehost",
    "Volledig responsive",
  ],
} as const satisfies LandingHeroContent;

export const WORDPRESS_WHY = {
  eyebrow: "Waarom WordPress",
  titleLead: "Het meest gebruikte CMS ter wereld,",
  titleEm: "professioneel gebouwd.",
  lead: "Ruim 40% van alle websites draait op WordPress — en daar is een reden voor. Wij combineren die kracht met maatwerk design en schone code, zodat je een WordPress-website krijgt die professioneel oogt én eenvoudig te beheren is.",
  media: {
    image: "/images/company-img.png",
    alt: "Het team van Sarte Global bouwt een WordPress-website in de studio.",
    caption: "Sarte Global · WordPress",
    tag: "WordPress-specialist",
  },
  proof: [
    "WordPress-specialisten",
    "Maatwerk thema's — geen kant-en-klare templates",
    "WooCommerce- & Yoast-ready",
  ],
  pillars: [
    {
      iconName: "cursor",
      title: "Zelf te beheren",
      description:
        "Een gebruiksvriendelijk CMS waarmee je teksten, beelden en pagina's zelf aanpast — zonder developer of technische kennis.",
    },
    {
      iconName: "layers",
      title: "Volledige vrijheid",
      description:
        "Jij bent eigenaar van je website én je data. Geen platform-lock-in en geen beperkende templates zoals bij website-bouwers.",
    },
    {
      iconName: "code",
      title: "Eindeloos uitbreidbaar",
      description:
        "Van webshop tot ledenportaal of boekingssysteem: met plugins en maatwerk groeit je WordPress-site mee met je bedrijf.",
    },
    {
      iconName: "search",
      title: "Sterk in SEO",
      description:
        "Een schone technische basis met Yoast of RankMath, nette structuur en snelle laadtijden — vindbaar vanaf dag één.",
    },
    {
      iconName: "shield",
      title: "Veilig & onderhouden",
      description:
        "Wij regelen updates, back-ups en beveiliging, zodat je WordPress-website altijd snel, veilig en up-to-date blijft.",
    },
  ],
  paragraphs: [
    "Een WordPress website laten maken betekent dat je kiest voor het meest flexibele en best ondersteunde CMS ter wereld. Je krijgt een professionele website met een ontwerp op maat, maar houdt zelf de regie: content aanpassen doe je voortaan in een paar klikken.",
    "Bij Sarte Global bouwen we geen kant-en-klare template af. We ontwerpen een maatwerk WordPress-thema rond jouw merk en doelen, met schone code, sterke SEO en een beheeromgeving die je collega's moeiteloos begrijpen.",
  ],
} as const satisfies LandingWhyContent;

export const WORDPRESS_FEATURES = {
  eyebrow: "Wat je krijgt",
  titleLead: "Alles wat een professionele",
  titleEm: "WordPress-website nodig heeft.",
  sub: "Kies een onderdeel en zie wat het voor jouw website betekent. Standaard inbegrepen bij elke WordPress-website die we bouwen.",
  features: [
    {
      key: "manage",
      iconName: "cursor",
      title: "Zelf eenvoudig beheren",
      description:
        "Een overzichtelijk WordPress-dashboard waarmee je teksten, foto's en pagina's zelf aanpast — of laat het ons doen. Jij houdt de controle.",
      stat: { value: "5 min", label: "om bij te werken" },
    },
    {
      key: "seo",
      iconName: "search",
      title: "SEO-geoptimaliseerd",
      description:
        "Ingericht met Yoast of RankMath, een nette URL-structuur, schema-markup en snelle laadtijden, zodat klanten je vinden in Google.",
      stat: { value: "100/100", label: "SEO-score" },
    },
    {
      key: "speed",
      iconName: "lightning",
      title: "Razendsnel",
      description:
        "Geoptimaliseerde code, caching en beelden voor laadtijden onder de seconde — beter voor je bezoeker én voor je ranking.",
      stat: { value: "0,8s", label: "laadtijd" },
    },
    {
      key: "secure",
      iconName: "shield",
      title: "Veilig & onderhouden",
      description:
        "SSL, dagelijkse back-ups en doorlopende plugin- en core-updates. Je WordPress-site blijft veilig en up-to-date — zonder zorgen.",
      stat: { value: "99,9%", label: "uptime" },
    },
    {
      key: "mobile",
      iconName: "mobile",
      title: "Volledig responsive",
      description:
        "Een maatwerk thema dat vlekkeloos werkt op telefoon, tablet en desktop — waar het grootste deel van je bezoek vandaan komt.",
      stat: { value: "100%", label: "responsive" },
    },
    {
      key: "convert",
      iconName: "cursor",
      title: "Conversiegericht",
      description:
        "Een heldere opbouw met duidelijke call-to-actions die bezoekers stap voor stap naar contact, offerte of aankoop leidt.",
      stat: { value: "+41%", label: "meer conversie" },
    },
  ],
} as const satisfies LandingFeaturesContent;

export const WORDPRESS_COMPARISON = {
  eyebrow: "WordPress vs. website-bouwers",
  titleLead: "Waarom maatwerk WordPress wint van",
  titleEm: "kant-en-klare bouwers.",
  sub: "Wix, Squarespace en andere DIY-bouwers zijn snel gestart, maar lopen tegen grenzen aan. Een professioneel gebouwde WordPress-website geeft je meer vrijheid, betere SEO en lagere kosten op termijn.",
  usLabel: "Sarte Global · WordPress",
  themLabel: "DIY website-bouwers",
  rows: [
    {
      label: "Eigenaarschap van site & data",
      us: "Volledig van jou",
      them: "Platform-afhankelijk",
      themPositive: false,
    },
    {
      label: "Maatwerk & uitbreidbaarheid",
      us: "Onbeperkt (plugins + code)",
      them: "Beperkt tot templates",
      themPositive: false,
    },
    {
      label: "SEO-mogelijkheden",
      us: "Volledige controle",
      them: "Basis / beperkt",
      themPositive: false,
    },
    {
      label: "Snelheid & performance",
      us: "Geoptimaliseerd",
      them: "Vaak traag",
      themPositive: false,
    },
    {
      label: "Kosten op termijn",
      us: "Alleen hosting",
      them: "Doorlopend abonnement",
      themPositive: false,
    },
    {
      label: "Professioneel design op maat",
      us: "Rond jouw merk",
      them: "Herkenbare templates",
      themPositive: false,
    },
    {
      label: "Persoonlijke ondersteuning",
      us: "Eén vast team",
      them: "Alleen helpdesk",
      themPositive: false,
    },
  ],
  footnote:
    "Snel een eenvoudige site nodig? Soms volstaat een bouwer. Wil je groeien, goed vindbaar zijn en eigenaar blijven van je platform? Dan is maatwerk WordPress de slimmere keuze.",
} as const satisfies LandingComparisonContent;

export const WORDPRESS_FAQ = [
  {
    question: "Wat kost een WordPress website laten maken?",
    answer:
      "Dat hangt af van de omvang en wensen. Een professionele WordPress-website voor ondernemers start op een toegankelijk instapniveau; maatwerk thema's, koppelingen of een WooCommerce-webshop vragen meer. Je ontvangt altijd vooraf een heldere offerte, zodat je precies weet waar je aan toe bent.",
  },
  {
    question: "Kan ik mijn WordPress-website zelf beheren?",
    answer:
      "Ja. Dat is juist de kracht van WordPress. Je krijgt een overzichtelijk dashboard waarmee je teksten, beelden en pagina's zelf aanpast. We leveren een korte uitleg op maat op, en je kunt het beheer ook volledig aan ons uitbesteden.",
  },
  {
    question: "Gebruiken jullie een kant-en-klaar thema of maatwerk?",
    answer:
      "We bouwen een maatwerk thema rond jouw merk en doelen — geen standaard template die er hetzelfde uitziet als duizenden andere sites. Zo krijg je een unieke, snelle en schaalbare WordPress-website.",
  },
  {
    question: "Is WordPress goed voor SEO?",
    answer:
      "Zeker. WordPress is uitstekend geschikt voor SEO. We richten je site in met Yoast of RankMath, een nette URL-structuur, schema-markup en snelle laadtijden, zodat je vindbaar bent in Google vanaf de lancering.",
  },
  {
    question: "Kan ik later een webshop toevoegen?",
    answer:
      "Ja. WordPress is eindeloos uitbreidbaar. Met WooCommerce voegen we eenvoudig een professionele webshop toe, en ook koppelingen met boekhouding, CRM of nieuwsbrief zijn mogelijk wanneer je bedrijf groeit.",
  },
  {
    question: "Verzorgen jullie ook onderhoud en updates?",
    answer:
      "Ja. We bieden onderhoud waarbij we plugins, thema en WordPress-core up-to-date houden, back-ups maken en de beveiliging bewaken. Zo blijft je website veilig, snel en zorgeloos online.",
  },
] as const satisfies readonly LandingFAQItem[];

export const WORDPRESS_FINAL_CTA = {
  eyebrow: "Klaar om te starten",
  titleLead: "Jouw WordPress-website",
  titleEm: "begint vandaag.",
  sub: "Vertel ons kort over je bedrijf en doelen. Binnen één werkdag ontvang je een vrijblijvend voorstel voor je WordPress website laten maken — helder en op maat.",
  urgency: "Nog 3 projectplekken beschikbaar deze maand",
  points: [
    "Reactie binnen 1 werkdag",
    "Maatwerk thema, geen template",
    "Eén vaste WordPress-specialist",
  ],
  projectType: PROJECT_TYPE,
} as const satisfies LandingFinalCtaContent;
