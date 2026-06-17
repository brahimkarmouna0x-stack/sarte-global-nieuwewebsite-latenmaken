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
 * Content for `/shopify-webshop-laten-maken`. Targets the
 * "shopify webshop laten maken" keyword cluster with a Shopify-specific angle
 * (snel live, betrouwbaar gehost, weinig onderhoud, schaalbaar), distinct from
 * the broader `/webshop-laten-maken` hub and the WooCommerce page.
 */

const PROJECT_TYPE = "Webshop laten maken";

export const SHOPIFY_PROJECT_TYPE = PROJECT_TYPE;

export const SHOPIFY_META = {
  path: "/shopify-webshop-laten-maken",
  title: "Shopify webshop laten maken | Sarte Global",
  description:
    "Shopify webshop laten maken door specialisten: een snelle, betrouwbare en schaalbare webshop met maatwerk Shopify-thema. iDEAL en alle betaalmethoden, weinig onderhoud en sterke conversie. Vraag vrijblijvend een voorstel aan.",
  keywords: [
    "shopify webshop laten maken",
    "shopify specialist",
    "shopify website laten maken",
    "shopify webshop bouwen",
    "shopify thema op maat",
    "webshop laten maken",
    "professionele webshop laten maken",
    "dropshipping webshop laten maken",
    "shopify seo",
    "webshop met ideal",
    "e-commerce website laten maken",
    "Sarte Global",
  ],
  ogAlt: "Shopify webshop laten maken · Sarte Global",
} as const;

export const SHOPIFY_HERO = {
  eyebrow: "Shopify webshop laten maken · Sarte Global",
  badge: "Shopify-specialist · nu 3 plekken beschikbaar",
  titleLead: "Shopify webshop laten maken die",
  titleEm: "snel live is en verkoopt.",
  sub: "Sarte Global bouwt snelle, conversiegerichte Shopify-webshops met een maatwerk thema. Betrouwbaar gehost, weinig onderhoud en klaar om te schalen — zodat jij je op verkopen kunt richten.",
  primaryCta: "Shopify-webshop aanvragen",
  secondaryCta: { label: "Bekijk ons proces", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ reviews" },
  pills: [
    { label: "Snel live" },
    { label: "iDEAL & meer" },
    { label: "Weinig onderhoud" },
    { label: "Schaalbaar" },
  ],
  trust: [
    "150+ websites & shops opgeleverd",
    "Shopify-specialisten",
    "Maatwerk thema's",
    "Conversiegericht ontwerp",
  ],
  benefits: [
    "Betrouwbaar & veilig gehost",
    "iDEAL, Klarna, creditcard & meer",
    "Zelf producten beheren",
    "SEO-geoptimaliseerd",
  ],
} as const satisfies LandingHeroContent;

export const SHOPIFY_WHY = {
  eyebrow: "Waarom Shopify",
  titleLead: "Het snelste platform om",
  titleEm: "professioneel te verkopen.",
  lead: "Shopify is wereldwijd het populairste gehoste e-commerceplatform. Hosting, beveiliging en updates zijn geregeld, zodat jij je volledig op je producten en verkoop kunt richten — wij verzorgen het maatwerk design en de conversie eromheen.",
  media: {
    image: "/images/company-img.png",
    alt: "Het team van Sarte Global bouwt een Shopify-webshop in de studio.",
    caption: "Sarte Global · Shopify",
    tag: "Shopify-specialist",
  },
  proof: [
    "Shopify-specialisten",
    "Maatwerk thema — geen standaard template",
    "Snel live & weinig onderhoud",
  ],
  pillars: [
    {
      iconName: "rocket",
      title: "Snel live",
      description:
        "Een betrouwbaar platform met maatwerk thema betekent dat je shop snel en zonder technische zorgen online staat en kan verkopen.",
    },
    {
      iconName: "shield",
      title: "Veilig & onderhoudsarm",
      description:
        "Shopify regelt hosting, SSL, beveiliging en updates. Geen plugin-onderhoud of serverbeheer — jij richt je op groei.",
    },
    {
      iconName: "cart",
      title: "Gemaakt om te verkopen",
      description:
        "Een beproefde checkout met hoge conversie en een productflow die we rond jouw assortiment en klant optimaliseren.",
    },
    {
      iconName: "cpu",
      title: "Schaalbaar & koppelbaar",
      description:
        "Van eerste verkoop tot duizenden bestellingen per dag. Koppel apps voor verzending, voorraad, e-mail en boekhouding wanneer je groeit.",
    },
    {
      iconName: "search",
      title: "Sterk in SEO",
      description:
        "Snelle, mobielvriendelijke pagina's met nette structuur en schema-markup, zodat je producten vindbaar zijn in Google.",
    },
  ],
  paragraphs: [
    "Een Shopify webshop laten maken betekent kiezen voor snelheid en gemak. Het platform neemt het technische werk uit handen, zodat je sneller live bent en minder tijd kwijt bent aan onderhoud.",
    "Bij Sarte Global bouwen we geen standaard template af. We ontwerpen een maatwerk Shopify-thema rond jouw merk en richten alles in op conversie. We werken voor ondernemers door heel Nederland, van Rotterdam tot Utrecht.",
  ],
} as const satisfies LandingWhyContent;

export const SHOPIFY_FEATURES = {
  eyebrow: "Conversiegericht",
  titleLead: "Gebouwd om bezoekers",
  titleEm: "klant te maken.",
  sub: "Elk onderdeel van je Shopify-shop is gericht op één doel: meer verkopen. Standaard inbegrepen bij elke webshop die we bouwen.",
  features: [
    {
      key: "convert",
      iconName: "cart",
      title: "Conversiegerichte checkout",
      description:
        "Shopify's beproefde, snelle checkout met zichtbare betaalopties en zo min mogelijk stappen — minder afhakers, meer voltooide bestellingen.",
      stat: { value: "+120%", label: "meer omzet" },
    },
    {
      key: "mobile",
      iconName: "mobile",
      title: "Mobiel afrekenen",
      description:
        "De meeste bestellingen komen via mobiel. We bouwen het thema mobile-first, met grote knoppen en supersnelle productpagina's.",
      stat: { value: "100%", label: "mobielvriendelijk" },
    },
    {
      key: "speed",
      iconName: "lightning",
      title: "Snelle productpagina's",
      description:
        "Een licht, geoptimaliseerd maatwerk thema houdt je shop razendsnel. Snelheid verlaagt het bouncepercentage en verhoogt de verkoop.",
      stat: { value: "0,8s", label: "laadtijd" },
    },
    {
      key: "manage",
      iconName: "cursor",
      title: "Zelf producten beheren",
      description:
        "Voeg via het overzichtelijke Shopify-dashboard moeiteloos producten, prijzen, varianten en voorraad toe — of laat het beheer aan ons over.",
      stat: { value: "5 min", label: "om bij te werken" },
    },
    {
      key: "seo",
      iconName: "search",
      title: "Vindbaar in Google",
      description:
        "SEO-vriendelijke product- en categoriepagina's met schema-markup en snelle laadtijden, zodat klanten je producten vinden.",
      stat: { value: "100/100", label: "SEO-score" },
    },
    {
      key: "secure",
      iconName: "shield",
      title: "Veilig betalen",
      description:
        "Shopify regelt SSL en PCI-compliance. Betrouwbare betaalproviders geven je klanten het vertrouwen om af te rekenen.",
      stat: { value: "99,9%", label: "uptime" },
    },
  ],
} as const satisfies LandingFeaturesContent;

export const SHOPIFY_PAYMENTS = {
  eyebrow: "Betaalmethoden & koppelingen",
  titleLead: "Alle betaalmethoden die",
  titleEm: "jouw klanten verwachten.",
  sub: "Van iDEAL tot creditcard en achteraf betalen — we activeren de betaalmethoden die Nederlandse klanten vertrouwen, plus apps voor verzending, voorraad en boekhouding.",
  extra: [
    "Klarna",
    "Shopify Payments",
    "Mollie",
    "Bancontact",
    "Apple Pay",
    "Google Pay",
    "Achteraf betalen",
  ],
  features: [
    {
      iconName: "cart",
      title: "Alle betaalmethoden",
      description:
        "iDEAL, creditcard, PayPal, Klarna en meer — via Shopify Payments of Mollie geïntegreerd in de vertrouwde checkout.",
    },
    {
      iconName: "rocket",
      title: "Verzendkoppelingen",
      description:
        "Apps en koppelingen met PostNL, DHL en andere vervoerders, inclusief verzendlabels en track & trace voor je klant.",
    },
    {
      iconName: "chart",
      title: "Boekhoudkoppeling",
      description:
        "Koppel je shop aan Moneybird, e-Boekhouden of Exact, zodat facturen en orders automatisch in je administratie belanden.",
    },
    {
      iconName: "layers",
      title: "Voorraad & apps",
      description:
        "Realtime voorraad, varianten en een rijk app-ecosysteem voor reviews, e-mail en marketing — eenvoudig uit te breiden.",
    },
  ],
} as const satisfies LandingPaymentsContent;

export const SHOPIFY_COMPARISON = {
  eyebrow: "Maatwerk vs. standaard",
  titleLead: "Waarom een maatwerk Shopify wint van",
  titleEm: "een kant-en-klaar thema.",
  sub: "Een standaard Shopify-thema is snel, maar lijkt op duizenden andere shops en laat conversie liggen. Met een maatwerk thema van Sarte Global onderscheid je je merk én haal je meer uit elke bezoeker.",
  usLabel: "Sarte Global · maatwerk Shopify",
  themLabel: "Standaard thema / zelf doen",
  rows: [
    {
      label: "Design op maat van jouw merk",
      us: "Volledig uniek",
      them: "Herkenbaar template",
      themPositive: false,
    },
    {
      label: "Conversie-optimalisatie",
      us: "Ingebouwd",
      them: "Beperkt",
      themPositive: false,
    },
    {
      label: "Laadsnelheid",
      us: "Geoptimaliseerd",
      them: "Vaak traag door apps",
      themPositive: false,
    },
    {
      label: "SEO-fundament",
      us: "Sterk ingericht",
      them: "Standaard",
      themPositive: false,
    },
    {
      label: "Betaalmethoden NL",
      us: "Compleet ingesteld",
      them: "Zelf uitzoeken",
      themPositive: false,
    },
    {
      label: "Begeleiding & ondersteuning",
      us: "Eén vast team",
      them: "Alleen helpdesk",
      themPositive: false,
    },
  ],
  footnote:
    "Shopify is een uitstekende keuze als je snel en onderhoudsarm wilt verkopen. Wij zorgen dat je shop niet op duizenden andere lijkt, maar past bij jouw merk en maximaal converteert.",
} as const satisfies LandingComparisonContent;

export const SHOPIFY_FAQ = [
  {
    question: "Wat kost een Shopify webshop laten maken?",
    answer:
      "Naast het Shopify-abonnement hangen de kosten af van het aantal producten, gewenste apps en de mate van maatwerk in het thema. Een professionele Shopify-webshop start op een toegankelijk instapniveau. Je ontvangt altijd vooraf een heldere offerte zonder verrassingen.",
  },
  {
    question: "Wat is het verschil tussen Shopify en WooCommerce?",
    answer:
      "Shopify is een gehost platform: hosting, beveiliging en updates zijn geregeld en je betaalt een maandabonnement. WooCommerce is open source op WordPress, met volledig eigenaarschap en geen platform-transactiekosten, maar wat meer onderhoud. Shopify past goed bij wie snel en onderhoudsarm wil verkopen; we adviseren eerlijk wat bij jou past.",
  },
  {
    question: "Kan ik mijn Shopify-webshop zelf beheren?",
    answer:
      "Ja. Shopify heeft een overzichtelijk dashboard waarmee je producten, prijzen, voorraad en bestellingen eenvoudig beheert. We geven een korte uitleg op maat, en je kunt het beheer ook aan ons uitbesteden.",
  },
  {
    question: "Welke betaalmethoden kunnen jullie instellen?",
    answer:
      "Alle gangbare methoden voor de Nederlandse markt: iDEAL, creditcard, PayPal, Bancontact, Apple Pay, Google Pay en achteraf betalen via Klarna — via Shopify Payments of Mollie.",
  },
  {
    question: "Is een Shopify-webshop goed vindbaar in Google?",
    answer:
      "Ja. We bouwen een snel, mobielvriendelijk maatwerk thema met nette URL-structuur, schema-markup en geoptimaliseerde product- en categoriepagina's, zodat je shop vindbaar is vanaf de lancering.",
  },
  {
    question: "Hoe lang duurt het om een Shopify-webshop te maken?",
    answer:
      "Een Shopify-webshop met maatwerk thema staat gemiddeld binnen twee tot vier weken online. Grotere shops met veel producten of maatwerkkoppelingen duren langer. In de analysefase geven we een concrete planning met duidelijke mijlpalen.",
  },
] as const satisfies readonly LandingFAQItem[];

export const SHOPIFY_FINAL_CTA = {
  eyebrow: "Klaar om te verkopen",
  titleLead: "Jouw Shopify-webshop",
  titleEm: "begint vandaag.",
  sub: "Vertel ons kort over je producten en doelen. Binnen één werkdag ontvang je een vrijblijvend voorstel voor je Shopify webshop laten maken — helder en op maat.",
  urgency: "Nog 3 projectplekken beschikbaar deze maand",
  points: [
    "Reactie binnen 1 werkdag",
    "Maatwerk thema & conversiegericht",
    "Eén vaste Shopify-specialist",
  ],
  projectType: PROJECT_TYPE,
} as const satisfies LandingFinalCtaContent;
