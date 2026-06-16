import type {
  LandingFAQItem,
  LandingFeaturesContent,
  LandingFinalCtaContent,
  LandingHeroContent,
  LandingPaymentsContent,
  LandingWhyContent,
} from "./landing-nieuwe-website";

/**
 * Content for `/webshop-laten-maken`. Reuses the premium `Landing*` components
 * via their `content` props and targets the "webshop laten maken" /
 * "woocommerce webshop laten maken" keyword cluster.
 */

const PROJECT_TYPE = "Webshop laten maken";

export const WEBSHOP_PROJECT_TYPE = PROJECT_TYPE;

export const WEBSHOP_META = {
  path: "/webshop-laten-maken",
  title: "Webshop laten maken | Sarte Global",
  description:
    "Webshop laten maken met WooCommerce: een snelle, conversiegerichte webshop die verkoopt. iDEAL en alle betaalmethoden, mobiel afrekenen en sterke SEO. Vraag vrijblijvend een voorstel aan.",
  keywords: [
    "webshop laten maken",
    "woocommerce webshop laten maken",
    "webshop bouwen",
    "professionele webshop laten maken",
    "online winkel beginnen",
    "e-commerce website laten maken",
    "webshop op maat",
    "wordpress webshop",
    "webshop met ideal",
    "webshop seo",
    "website laten maken",
    "Sarte Global",
  ],
  ogAlt: "Webshop laten maken · Sarte Global",
} as const;

export const WEBSHOP_HERO = {
  eyebrow: "Webshop laten maken · Sarte Global",
  badge: "WooCommerce-specialist · nu 3 plekken beschikbaar",
  titleLead: "Webshop laten maken die",
  titleEm: "verkoopt, niet alleen toont.",
  sub: "Sarte Global bouwt snelle, conversiegerichte webshops met WooCommerce. Een vlekkeloze checkout, iDEAL en alle betaalmethoden, sterke SEO en een beheeromgeving waarin je zelf eenvoudig producten beheert.",
  primaryCta: "Webshop aanvragen",
  secondaryCta: { label: "Bekijk ons proces", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ reviews" },
  pills: [
    { label: "+120% omzet" },
    { label: "iDEAL & meer" },
    { label: "Mobiel afrekenen" },
    { label: "Live in 2-4 weken" },
  ],
  trust: [
    "150+ websites & shops opgeleverd",
    "WooCommerce-specialisten",
    "Alle betaalmethoden",
    "Conversiegericht ontwerp",
  ],
  benefits: [
    "Conversiegerichte checkout",
    "iDEAL, Klarna, creditcard & meer",
    "Zelf producten beheren",
    "SEO-geoptimaliseerd",
  ],
} as const satisfies LandingHeroContent;

export const WEBSHOP_WHY = {
  eyebrow: "Waarom WooCommerce",
  titleLead: "De krachtigste webshop,",
  titleEm: "volledig van jou.",
  lead: "WooCommerce is het meest gebruikte e-commerceplatform ter wereld, gebouwd op WordPress. Je krijgt een professionele webshop op maat, zonder maandelijkse transactiekosten van gesloten platforms en zonder limieten op groei.",
  media: {
    image: "/images/company-img.png",
    alt: "Het team van Sarte Global bouwt een WooCommerce-webshop in de studio.",
    caption: "Sarte Global · WooCommerce",
    tag: "WooCommerce-specialist",
  },
  proof: [
    "WooCommerce-specialisten",
    "Geen transactiekosten van het platform",
    "Onbeperkt producten & categorieën",
  ],
  pillars: [
    {
      iconName: "cart",
      title: "Gemaakt om te verkopen",
      description:
        "Een doordachte productflow en een geoptimaliseerde checkout die twijfel wegneemt en zoveel mogelijk bezoekers omzet in klanten.",
    },
    {
      iconName: "layers",
      title: "Volledig eigenaarschap",
      description:
        "Je webshop, je data en je klanten zijn van jou. Geen platform-lock-in en geen maandelijkse omzetafdracht zoals bij gesloten platforms.",
    },
    {
      iconName: "cpu",
      title: "Onbeperkt uitbreidbaar",
      description:
        "Koppel betaalproviders, verzendpartners, boekhouding en voorraadbeheer. WooCommerce groeit moeiteloos mee met je assortiment.",
    },
    {
      iconName: "search",
      title: "Sterk in SEO",
      description:
        "Vindbare product- en categoriepagina's met schema-markup en snelle laadtijden, zodat klanten je producten vinden in Google.",
    },
    {
      iconName: "shield",
      title: "Veilig & betrouwbaar",
      description:
        "SSL, veilige betalingen, back-ups en doorlopende updates. Je klanten rekenen met vertrouwen af en jij hebt nergens omkijken naar.",
    },
  ],
  paragraphs: [
    "Een webshop laten maken betekent meer dan producten online zetten. Het draait om een soepele winkelervaring: snel laden, makkelijk vinden, vertrouwd afrekenen. Precies daar verdien je het verschil tussen een bezoeker en een klant.",
    "Bij Sarte Global bouwen we je webshop op WooCommerce — flexibel, schaalbaar en volledig van jou. We ontwerpen rond je assortiment en je klant, met focus op conversie, mobiel gemak en sterke vindbaarheid.",
  ],
} as const satisfies LandingWhyContent;

export const WEBSHOP_FEATURES = {
  eyebrow: "Conversiegericht",
  titleLead: "Gebouwd om bezoekers",
  titleEm: "klant te maken.",
  sub: "Elk onderdeel van je webshop is gericht op één doel: meer verkopen. Standaard inbegrepen bij elke webshop die we bouwen.",
  features: [
    {
      key: "convert",
      iconName: "cart",
      title: "Conversiegerichte checkout",
      description:
        "Een korte, heldere afrekenflow met zo min mogelijk stappen en zichtbare betaalopties — minder afhakers, meer voltooide bestellingen.",
      stat: { value: "+120%", label: "meer omzet" },
    },
    {
      key: "mobile",
      iconName: "mobile",
      title: "Mobiel afrekenen",
      description:
        "De meeste bestellingen komen via mobiel. We ontwerpen de winkelervaring mobile-first, met grote knoppen en supersnelle productpagina's.",
      stat: { value: "100%", label: "mobielvriendelijk" },
    },
    {
      key: "speed",
      iconName: "lightning",
      title: "Snelle productpagina's",
      description:
        "Geoptimaliseerde beelden en code houden je productpagina's razendsnel. Snelheid verlaagt het bouncepercentage en verhoogt de verkoop.",
      stat: { value: "0,8s", label: "laadtijd" },
    },
    {
      key: "secure",
      iconName: "shield",
      title: "Veilig betalen",
      description:
        "SSL en betrouwbare betaalproviders zorgen voor veilige transacties en geven je klanten het vertrouwen om af te rekenen.",
      stat: { value: "99,9%", label: "uptime" },
    },
    {
      key: "seo",
      iconName: "search",
      title: "Vindbaar in Google",
      description:
        "SEO-vriendelijke product- en categoriepagina's met schema-markup, zodat je producten verschijnen wanneer klanten ernaar zoeken.",
      stat: { value: "100/100", label: "SEO-score" },
    },
    {
      key: "manage",
      iconName: "cursor",
      title: "Zelf producten beheren",
      description:
        "Voeg moeiteloos producten, prijzen en voorraad toe via een overzichtelijk dashboard — of laat het beheer aan ons over.",
      stat: { value: "5 min", label: "om bij te werken" },
    },
  ],
} as const satisfies LandingFeaturesContent;

export const WEBSHOP_PAYMENTS = {
  eyebrow: "Betaalmethoden & koppelingen",
  titleLead: "Alle betaalmethoden die",
  titleEm: "jouw klanten verwachten.",
  sub: "Van iDEAL tot creditcard en achteraf betalen — we integreren de betaalmethoden die Nederlandse klanten vertrouwen, plus koppelingen met verzending, voorraad en boekhouding.",
  extra: [
    "Klarna",
    "Mollie",
    "Bancontact",
    "Apple Pay",
    "Google Pay",
    "Achteraf betalen",
    "SEPA-incasso",
  ],
  features: [
    {
      iconName: "cart",
      title: "Alle betaalmethoden",
      description:
        "iDEAL, creditcard, PayPal, Klarna en meer — via Mollie of Stripe geïntegreerd in een vertrouwde, snelle checkout.",
    },
    {
      iconName: "rocket",
      title: "Verzendkoppelingen",
      description:
        "Automatische koppelingen met PostNL, DHL en andere vervoerders, inclusief verzendlabels en track & trace voor je klant.",
    },
    {
      iconName: "chart",
      title: "Boekhoudkoppeling",
      description:
        "Koppel je webshop aan Moneybird, e-Boekhouden of Exact, zodat facturen en orders automatisch in je administratie belanden.",
    },
    {
      iconName: "layers",
      title: "Voorraadbeheer",
      description:
        "Realtime voorraad, varianten en automatische meldingen — overzichtelijk te beheren vanuit één dashboard.",
    },
  ],
} as const satisfies LandingPaymentsContent;

export const WEBSHOP_FAQ = [
  {
    question: "Wat kost een webshop laten maken?",
    answer:
      "De kosten hangen af van het aantal producten, gewenste koppelingen en de mate van maatwerk. Een professionele WooCommerce-webshop start op een toegankelijk instapniveau; uitgebreide shops met integraties vragen meer. Je krijgt altijd vooraf een heldere offerte zonder verrassingen.",
  },
  {
    question: "Welke betaalmethoden kunnen jullie integreren?",
    answer:
      "Alle gangbare methoden voor de Nederlandse markt: iDEAL, creditcard, PayPal, Bancontact, Apple Pay, Google Pay en achteraf betalen via Klarna. We koppelen dit via betrouwbare providers als Mollie of Stripe.",
  },
  {
    question: "Kan ik zelf producten en bestellingen beheren?",
    answer:
      "Ja. Je krijgt een overzichtelijk dashboard waarin je producten, prijzen, voorraad en bestellingen eenvoudig beheert. We geven een korte uitleg op maat, en je kunt het beheer ook aan ons uitbesteden.",
  },
  {
    question: "Bouwen jullie op WooCommerce of Shopify?",
    answer:
      "Standaard bouwen we op WooCommerce (WordPress): flexibel, schaalbaar en zonder maandelijkse omzetafdracht, zodat je volledig eigenaar blijft van je webshop en data. Past Shopify beter bij jouw situatie? Dan bespreken we dat eerlijk in het adviesgesprek.",
  },
  {
    question: "Is mijn webshop goed vindbaar in Google?",
    answer:
      "Ja. We bouwen elke webshop met sterke technische SEO: vindbare product- en categoriepagina's, schema-markup, snelle laadtijden en een nette structuur. Voor structurele groei kunnen we je ook helpen met content en doorlopende SEO.",
  },
  {
    question: "Hoe lang duurt het om een webshop te maken?",
    answer:
      "Een standaard WooCommerce-webshop staat gemiddeld binnen twee tot vier weken online. Grotere shops met veel producten of maatwerkkoppelingen duren langer. In de analysefase geven we een concrete planning met duidelijke mijlpalen.",
  },
] as const satisfies readonly LandingFAQItem[];

export const WEBSHOP_FINAL_CTA = {
  eyebrow: "Klaar om te verkopen",
  titleLead: "Jouw webshop",
  titleEm: "begint vandaag.",
  sub: "Vertel ons kort over je producten en doelen. Binnen één werkdag ontvang je een vrijblijvend voorstel voor je webshop laten maken — helder en op maat.",
  urgency: "Nog 3 projectplekken beschikbaar deze maand",
  points: [
    "Reactie binnen 1 werkdag",
    "Conversiegericht & op maat",
    "Eén vaste WooCommerce-specialist",
  ],
  projectType: PROJECT_TYPE,
} as const satisfies LandingFinalCtaContent;
