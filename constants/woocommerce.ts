import type {
  LandingComparisonContent,
  LandingFAQItem,
  LandingFeaturesContent,
  LandingFinalCtaContent,
  LandingHeroContent,
  LandingPaymentsContent,
  LandingWhyContent,
} from "./landing-nieuwe-website";

/**
 * Content for `/woocommerce-webshop-laten-maken`. Targets the
 * "woocommerce webshop laten maken" keyword cluster with a WooCommerce-specific
 * angle (open source, volledig eigenaarschap, geen transactiekosten), distinct
 * from the broader `/webshop-laten-maken` hub and the Shopify page.
 */

const PROJECT_TYPE = "Webshop laten maken";

export const WOOCOMMERCE_PROJECT_TYPE = PROJECT_TYPE;

export const WOOCOMMERCE_META = {
  path: "/woocommerce-webshop-laten-maken",
  title: "WooCommerce webshop laten maken | Sarte Global",
  description:
    "WooCommerce webshop laten maken door specialisten: een snelle, schaalbare webshop op WordPress, volledig van jou en zonder transactiekosten van het platform. iDEAL en alle betaalmethoden. Vraag vrijblijvend een voorstel aan.",
  keywords: [
    "woocommerce webshop laten maken",
    "woocommerce specialist",
    "woocommerce website laten maken",
    "wordpress webshop laten maken",
    "webshop laten maken",
    "professionele webshop laten maken",
    "webshop op maat",
    "e-commerce website laten maken",
    "woocommerce seo",
    "webshop met ideal",
    "online winkel beginnen",
    "Sarte Global",
  ],
  ogAlt: "WooCommerce webshop laten maken · Sarte Global",
} as const;

export const WOOCOMMERCE_HERO = {
  eyebrow: "WooCommerce webshop laten maken · Sarte Global",
  badge: "WooCommerce-specialist · nu 3 plekken beschikbaar",
  titleLead: "WooCommerce webshop laten maken die",
  titleEm: "volledig van jou is.",
  sub: "Sarte Global bouwt snelle, schaalbare WooCommerce-webshops op WordPress. Geen maandelijkse omzetafdracht, geen platform-lock-in — wel volledige controle over je shop, je data en je groei.",
  primaryCta: "WooCommerce-webshop aanvragen",
  secondaryCta: { label: "Bekijk ons proces", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ reviews" },
  pills: [
    { label: "0% transactiekosten" },
    { label: "iDEAL & meer" },
    { label: "Onbeperkt producten" },
    { label: "Live in 2-4 weken" },
  ],
  trust: [
    "150+ websites & shops opgeleverd",
    "WooCommerce-specialisten",
    "Volledig eigenaarschap",
    "Conversiegericht ontwerp",
  ],
  benefits: [
    "Geen platform-transactiekosten",
    "iDEAL, Klarna, creditcard & meer",
    "Zelf producten beheren",
    "SEO-geoptimaliseerd",
  ],
} as const satisfies LandingHeroContent;

export const WOOCOMMERCE_WHY = {
  eyebrow: "Waarom WooCommerce",
  titleLead: "Het meest gebruikte e-commerceplatform,",
  titleEm: "professioneel gebouwd.",
  lead: "WooCommerce draait wereldwijd op miljoenen webshops en is gebouwd op WordPress — het meest gebruikte CMS ter wereld. Je krijgt een professionele webshop op maat, zonder de maandelijkse kosten en beperkingen van gesloten platforms.",
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
      iconName: "layers",
      title: "Volledig eigenaarschap",
      description:
        "Je webshop, je data en je klanten zijn van jou. Geen platform-lock-in en geen maandelijkse omzetafdracht zoals bij gesloten platforms.",
    },
    {
      iconName: "cart",
      title: "Geen transactiekosten",
      description:
        "WooCommerce rekent geen percentage over je omzet. Je betaalt alleen voor hosting en de betaalprovider — je marge blijft van jou.",
    },
    {
      iconName: "cpu",
      title: "Onbeperkt uitbreidbaar",
      description:
        "Koppel betaalproviders, verzendpartners, boekhouding en voorraadbeheer. Van 10 tot 10.000 producten — WooCommerce groeit moeiteloos mee.",
    },
    {
      iconName: "search",
      title: "Sterk in SEO",
      description:
        "Gebouwd op WordPress met Yoast of RankMath: vindbare product- en categoriepagina's, schema-markup en snelle laadtijden.",
    },
    {
      iconName: "shield",
      title: "Veilig & onderhouden",
      description:
        "SSL, veilige betalingen, back-ups en doorlopende updates van core, thema en plugins. Je shop blijft snel, veilig en up-to-date.",
    },
  ],
  paragraphs: [
    "Een WooCommerce webshop laten maken betekent kiezen voor maximale vrijheid. Je bouwt op open source, blijft eigenaar van je platform en betaalt geen percentage over elke verkoop — precies wat je wilt als je serieus wilt groeien.",
    "Bij Sarte Global bouwen we geen kant-en-klare template af. We ontwerpen een maatwerk WooCommerce-shop rond jouw assortiment en klant, met focus op conversie en mobiel gemak. We werken voor ondernemers door heel Nederland, van Amsterdam tot Eindhoven.",
  ],
} as const satisfies LandingWhyContent;

export const WOOCOMMERCE_FEATURES = {
  eyebrow: "Conversiegericht",
  titleLead: "Gebouwd om bezoekers",
  titleEm: "klant te maken.",
  sub: "Elk onderdeel van je WooCommerce-shop is gericht op één doel: meer verkopen. Standaard inbegrepen bij elke webshop die we bouwen.",
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
        "De meeste bestellingen komen via mobiel. We bouwen de winkelervaring mobile-first, met grote knoppen en supersnelle productpagina's.",
      stat: { value: "100%", label: "mobielvriendelijk" },
    },
    {
      key: "speed",
      iconName: "lightning",
      title: "Snelle productpagina's",
      description:
        "Geoptimaliseerde beelden, caching en code houden je shop razendsnel. Snelheid verlaagt het bouncepercentage en verhoogt de verkoop.",
      stat: { value: "0,8s", label: "laadtijd" },
    },
    {
      key: "manage",
      iconName: "cursor",
      title: "Zelf producten beheren",
      description:
        "Voeg via het vertrouwde WordPress-dashboard moeiteloos producten, prijzen, varianten en voorraad toe — of laat het beheer aan ons over.",
      stat: { value: "5 min", label: "om bij te werken" },
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
      key: "secure",
      iconName: "shield",
      title: "Veilig betalen",
      description:
        "SSL en betrouwbare betaalproviders zorgen voor veilige transacties en geven je klanten het vertrouwen om af te rekenen.",
      stat: { value: "99,9%", label: "uptime" },
    },
  ],
} as const satisfies LandingFeaturesContent;

export const WOOCOMMERCE_PAYMENTS = {
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

export const WOOCOMMERCE_COMPARISON = {
  eyebrow: "WooCommerce vs. Shopify",
  titleLead: "Waarom WooCommerce wint voor",
  titleEm: "ondernemers die willen groeien.",
  sub: "Shopify is snel opgezet, maar je huurt het platform en betaalt mee over je omzet. Met een maatwerk WooCommerce-webshop ben je volledig eigenaar, betaal je geen transactiekosten en groei je zonder limieten.",
  usLabel: "Sarte Global · WooCommerce",
  themLabel: "Shopify",
  rows: [
    {
      label: "Eigenaarschap van site & data",
      us: "Volledig van jou",
      them: "Platform-afhankelijk",
      themPositive: false,
    },
    {
      label: "Transactiekosten platform",
      us: "Geen",
      them: "Tot 2% (bij externe betaling)",
      themPositive: false,
    },
    {
      label: "Maandelijkse kosten",
      us: "Alleen hosting",
      them: "Doorlopend abonnement",
      themPositive: false,
    },
    {
      label: "Maatwerk & uitbreidbaarheid",
      us: "Onbeperkt (open source)",
      them: "Beperkt tot apps & thema",
      themPositive: false,
    },
    {
      label: "SEO-mogelijkheden",
      us: "Volledige controle",
      them: "Goed, maar beperkt aanpasbaar",
      themPositive: false,
    },
    {
      label: "Maatwerk design",
      us: "Rond jouw merk",
      them: "Thema-gebonden",
      themPositive: false,
    },
  ],
  footnote:
    "Wil je razendsnel een eenvoudige shop online? Dan kan Shopify volstaan. Wil je eigenaar blijven, marge behouden en zonder limieten groeien? Dan is maatwerk WooCommerce de slimmere keuze.",
} as const satisfies LandingComparisonContent;

export const WOOCOMMERCE_FAQ = [
  {
    question: "Wat kost een WooCommerce webshop laten maken?",
    answer:
      "De kosten hangen af van het aantal producten, gewenste koppelingen en de mate van maatwerk. Een professionele WooCommerce-webshop start op een toegankelijk instapniveau; uitgebreide shops met integraties vragen meer. Je ontvangt altijd vooraf een heldere offerte zonder verrassingen.",
  },
  {
    question: "Wat is het verschil tussen WooCommerce en Shopify?",
    answer:
      "WooCommerce is open source en draait op je eigen WordPress-hosting: je bent volledig eigenaar en betaalt geen transactiekosten of maandabonnement aan het platform. Shopify is een gehost abonnement dat sneller is opgezet, maar minder vrijheid en hogere doorlopende kosten kent. Voor groei en eigenaarschap adviseren we doorgaans WooCommerce.",
  },
  {
    question: "Moet ik transactiekosten betalen over mijn omzet?",
    answer:
      "Nee, WooCommerce zelf rekent geen percentage over je verkopen. Je betaalt alleen de tarieven van je betaalprovider (zoals Mollie of Stripe) en je hosting. Je marge blijft dus van jou.",
  },
  {
    question: "Kan ik zelf producten en bestellingen beheren?",
    answer:
      "Ja. Je beheert producten, prijzen, voorraad en bestellingen via het vertrouwde WordPress-dashboard. We geven een korte uitleg op maat, en je kunt het beheer ook volledig aan ons uitbesteden.",
  },
  {
    question: "Is een WooCommerce-webshop goed vindbaar in Google?",
    answer:
      "Zeker. WooCommerce draait op WordPress en is uitstekend voor SEO. We richten je shop in met Yoast of RankMath, vindbare product- en categoriepagina's, schema-markup en snelle laadtijden — vindbaar vanaf de lancering.",
  },
  {
    question: "Hoe lang duurt het om een WooCommerce-webshop te maken?",
    answer:
      "Een standaard WooCommerce-webshop staat gemiddeld binnen twee tot vier weken online. Grotere shops met veel producten of maatwerkkoppelingen duren langer. In de analysefase geven we een concrete planning met duidelijke mijlpalen.",
  },
] as const satisfies readonly LandingFAQItem[];

export const WOOCOMMERCE_FINAL_CTA = {
  eyebrow: "Klaar om te verkopen",
  titleLead: "Jouw WooCommerce-webshop",
  titleEm: "begint vandaag.",
  sub: "Vertel ons kort over je producten en doelen. Binnen één werkdag ontvang je een vrijblijvend voorstel voor je WooCommerce webshop laten maken — helder en op maat.",
  urgency: "Nog 3 projectplekken beschikbaar deze maand",
  points: [
    "Reactie binnen 1 werkdag",
    "Volledig eigenaarschap & op maat",
    "Eén vaste WooCommerce-specialist",
  ],
  projectType: PROJECT_TYPE,
} as const satisfies LandingFinalCtaContent;
