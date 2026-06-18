import type {
  ImpactStat,
  ServiceCTACopy,
  ServiceFeature,
  ServiceIconName,
  ServiceProcessItem,
} from "@/types";

export interface LandingMeaningPoint {
  readonly title: string;
  readonly description: string;
}

export interface LandingFAQItem {
  readonly question: string;
  readonly answer: string;
}

/** A single "Waarom kiezen voor ons" card: icon + headline figure + reason. */
export interface LandingStatCard {
  readonly iconName: ServiceIconName;
  readonly value: string;
  readonly title: string;
  readonly description: string;
}

/* ──────────────────────────────────────────────────────────────
   Content-prop interfaces — let the premium `Landing*` components be
   reused across service pages (website / WordPress / webshop). Each
   component defaults to its original constant, so existing pages are
   untouched; new pages pass their own typed content object.
   ────────────────────────────────────────────────────────────── */

export interface LandingHeroContent {
  readonly eyebrow: string;
  readonly badge: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly sub: string;
  readonly primaryCta: string;
  readonly secondaryCta: { readonly label: string; readonly href: string };
  readonly rating: { readonly score: string; readonly label: string };
  readonly pills: readonly { readonly label: string }[];
  readonly trust: readonly string[];
  readonly benefits: readonly string[];
}

export interface LandingWhyContent {
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly lead: string;
  readonly media: {
    readonly image: string;
    readonly alt: string;
    readonly caption: string;
    readonly tag: string;
  };
  readonly proof: readonly string[];
  readonly pillars: readonly LandingPillar[];
  readonly paragraphs: readonly string[];
}

export interface LandingFeaturesContent {
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly sub: string;
  readonly features: readonly LandingFeatureItem[];
}

export interface LandingFinalCtaContent {
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly sub: string;
  readonly urgency: string;
  readonly points: readonly string[];
  readonly projectType: string;
}

/** A single row of the WordPress-vs-website-builders comparison table. */
export interface LandingComparisonRow {
  readonly label: string;
  /** Value in the "Sarte Global" column. */
  readonly us: string;
  /** Value in the "DIY / website builders" column. */
  readonly them: string;
  /** Render the "us" cell as a positive (✓) check. Default: true. */
  readonly usPositive?: boolean;
  /** Render the "them" cell as a positive (✓) check. Default: false. */
  readonly themPositive?: boolean;
}

export interface LandingComparisonContent {
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly sub: string;
  readonly usLabel: string;
  readonly themLabel: string;
  readonly rows: readonly LandingComparisonRow[];
  readonly footnote?: string;
}

export interface LandingPaymentsContent {
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly sub: string;
  /** Extra payment/integration names shown as text badges (no brand icon). */
  readonly extra: readonly string[];
  /** Supporting integration highlights rendered as icon cards. */
  readonly features: readonly ServiceFeature[];
}

export const LANDING_HERO = {
  eyebrow: "Nieuwe website laten maken · Sarte Global",
  badge: "Nu beschikbaar voor 3 nieuwe projecten",
  titleLead: "Nieuwe website laten maken voor",
  titleEm: "meer groei en klanten.",
  sub: "Sarte Global ontwikkelt nieuwe, professionele en responsive websites voor ondernemers en bedrijven in Nederland. Modern design, sterke SEO en een opbouw die bezoekers omzet in klanten.",
  primaryCta: "Nieuwe website aanvragen",
  secondaryCta: { label: "Bekijk ons proces", href: "#proces" },
  rating: { score: "4,9", label: "Gemiddeld 4,9 / 5 uit 100+ reviews" },
  pills: [
    { label: "+41% conversie" },
    { label: "0,8s laadtijd" },
    { label: "100/100 SEO-score" },
    { label: "Live in 2 weken" },
  ],
  trust: [
    "150+ websites opgeleverd",
    "98% tevreden klanten",
    "Binnen 2 weken online",
    "Werkzaam in heel Nederland",
  ],
  benefits: [
    "Modern & responsive design",
    "SEO-geoptimaliseerd",
    "Razendsnel",
    "Conversiegericht",
  ],
} as const satisfies LandingHeroContent;

export const LANDING_MEANING = {
  eyebrow: "Wat het betekent",
  title: "Wat betekent een nieuwe website laten maken?",
  paragraphs: [
    "Een nieuwe website laten maken betekent dat je niet langer doorbouwt op een verouderd ontwerp, maar opnieuw begint met een moderne, professionele basis die past bij je bedrijf van vandaag. Het is de stap van \"we hebben een website\" naar \"onze website levert klanten op\" — een digitaal visitekaartje dat tegelijk je belangrijkste verkoopkanaal is.",
    "Voor ondernemers in Nederland is een sterke online aanwezigheid geen luxe meer, maar een voorwaarde. Klanten oriënteren zich online voordat ze contact opnemen of kopen. Een moderne, snelle en goed vindbare website bepaalt grotendeels of die bezoeker bij jou blijft of doorklikt naar de concurrent.",
    "Bij Sarte Global bouwen we elke nieuwe website rond jouw doelen, doelgroep en de manier waarop mensen vandaag zoeken en kopen. Of het nu gaat om een zakelijke website, een maatwerk website of een complete website redesign — de basis is altijd sterk, schaalbaar en geoptimaliseerd voor groei.",
  ],
  points: [
    {
      title: "Een moderne, professionele uitstraling",
      description:
        "Een eigentijds ontwerp dat vertrouwen wekt en jouw merk serieus laat overkomen vanaf de eerste seconde.",
    },
    {
      title: "Beter gevonden worden in Google",
      description:
        "Een technisch sterke basis met goede SEO-structuur zorgt dat nieuwe klanten je vinden wanneer ze zoeken.",
    },
    {
      title: "Meer bezoekers die klant worden",
      description:
        "Heldere structuur, snelle pagina's en duidelijke call-to-actions leiden bezoekers naar contact of aankoop.",
    },
    {
      title: "Klaar voor de toekomst",
      description:
        "Een schaalbare website die meegroeit met je bedrijf — eenvoudig uit te breiden met nieuwe pagina's of functies.",
    },
  ],
} as const satisfies {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  points: readonly LandingMeaningPoint[];
};

export const LANDING_WHY_CARDS = [
  {
    title: "Bewezen expertise",
    description:
      "Senior designers en developers bouwen jouw website — geen juniors die op jouw kosten leren. Strak, modern en technisch sterk.",
    iconName: "shield",
  },
  {
    title: "Jarenlange ervaring",
    description:
      "Meer dan 150 websites en webshops opgeleverd voor ondernemers en bedrijven in heel Nederland.",
    iconName: "chart",
  },
  {
    title: "Professionele aanpak",
    description:
      "Eén team voor strategie, design en development. Duidelijke planning, korte lijnen en heldere communicatie.",
    iconName: "layers",
  },
  {
    title: "Resultaatgericht",
    description:
      "We sturen op zichtbaarheid, conversie en groei — niet op opgeleverde uren. Jouw resultaat is onze maatstaf.",
    iconName: "spark",
  },
] as const satisfies readonly ServiceFeature[];

export const LANDING_PROCESS = [
  {
    number: "01",
    title: "Analyse",
    description:
      "We brengen jouw bedrijf, doelgroep en doelen in kaart en bekijken wat de concurrentie doet. Zo weten we precies wat jouw nieuwe website nodig heeft.",
  },
  {
    number: "02",
    title: "Strategie",
    description:
      "We bepalen de structuur, content en zoekwoorden. Een helder plan dat aansluit op zoekvraag én op jouw verkoopdoelen.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We ontwerpen een modern, responsive design dat past bij jouw merk en bezoekers moeiteloos naar de juiste actie leidt.",
  },
  {
    number: "04",
    title: "Ontwikkeling",
    description:
      "We bouwen de website op een snelle, veilige basis met nette code en sterke technische SEO — klaar om te schalen.",
  },
  {
    number: "05",
    title: "Testen",
    description:
      "We testen alles grondig op snelheid, mobiel, formulieren en vindbaarheid, zodat de website vlekkeloos werkt op elk apparaat.",
  },
  {
    number: "06",
    title: "Lancering",
    description:
      "We zetten je nieuwe website live, regelen hosting en blijven beschikbaar voor onderhoud, updates en verdere optimalisatie.",
  },
] as const satisfies readonly ServiceProcessItem[];

export const LANDING_BENEFITS = [
  {
    title: "Meer klanten",
    description:
      "Een professionele website die beter vindbaar is en bezoekers overtuigt, levert structureel meer aanvragen en klanten op.",
    iconName: "megaphone",
  },
  {
    title: "Meer vertrouwen",
    description:
      "Een verzorgde, moderne uitstraling geeft bezoekers het vertrouwen om met jouw bedrijf in zee te gaan.",
    iconName: "shield",
  },
  {
    title: "Hogere conversies",
    description:
      "Een conversiegerichte opbouw met duidelijke call-to-actions zet meer bezoekers om in contact of aankoop.",
    iconName: "chart",
  },
  {
    title: "Snellere website",
    description:
      "Razendsnelle laadtijden en uitstekende Core Web Vitals houden bezoekers vast en geven een SEO-voorsprong.",
    iconName: "lightning",
  },
  {
    title: "Mobielvriendelijk",
    description:
      "Een responsive website die vlekkeloos werkt op telefoon, tablet en desktop — waar het grootste deel van je bezoek vandaan komt.",
    iconName: "mobile",
  },
  {
    title: "SEO geoptimaliseerd",
    description:
      "Sterke technische SEO, nette structuur en schema-markup zorgen dat je vindbaar bent in Google vanaf dag één.",
    iconName: "search",
  },
] as const satisfies readonly ServiceFeature[];

export const LANDING_FAQ = [
  {
    question: "Wat kost een nieuwe website laten maken?",
    answer:
      "De kosten hangen af van de omvang en wensen van je project. Een professionele website voor ondernemers begint bij een toegankelijk instapniveau, terwijl maatwerk websites en webshops meer vragen. Je ontvangt altijd vooraf een heldere offerte, zodat je precies weet waar je aan toe bent — zonder verrassingen achteraf.",
  },
  {
    question: "Hoe lang duurt het om een nieuwe website te maken?",
    answer:
      "Een standaard professionele website staat gemiddeld binnen twee weken online. Grotere of complexere projecten, zoals een webshop of maatwerk website, duren langer. In de analysefase geven we een concrete planning met duidelijke mijlpalen.",
  },
  {
    question: "Wordt mijn nieuwe website goed vindbaar in Google?",
    answer:
      "Ja. Elke nieuwe website bouwen we met sterke technische SEO als basis: een nette structuur, snelle laadtijden, schema-markup en doordachte metadata. Daardoor is je website vindbaar vanaf dag één. Voor structurele groei kunnen we je ook helpen met content en doorlopende SEO-optimalisatie.",
  },
  {
    question: "Bieden jullie ook onderhoud na de lancering?",
    answer:
      "Zeker. Na de lancering blijven we beschikbaar voor updates, onderhoud en doorontwikkeling. Zo blijft je website veilig, snel en up-to-date, en kun je hem laten meegroeien met je bedrijf.",
  },
  {
    question: "Regelen jullie ook de hosting?",
    answer:
      "Ja, we kunnen snelle en betrouwbare hosting voor je regelen en de volledige technische kant beheren. Je hoeft je nergens zorgen over te maken — wij zorgen dat je website altijd online en bereikbaar is.",
  },
  {
    question: "Is de website geschikt voor mobiel en tablet?",
    answer:
      "Absoluut. Elke website die we bouwen is volledig responsive en werkt vlekkeloos op telefoon, tablet en desktop. Omdat het merendeel van het bezoek mobiel is, ontwerpen we mobielvriendelijk vanaf de eerste schets.",
  },
] as const satisfies readonly LandingFAQItem[];

export const LANDING_CTA = {
  titleLead: "Start vandaag met jouw",
  titleEm: "nieuwe website.",
  sub: "Vertel ons kort over jouw bedrijf en doelen. Je ontvangt binnen één werkdag een vrijblijvend voorstel voor jouw nieuwe website laten maken.",
  primaryLabel: "Nieuwe website aanvragen",
  primaryHref: "#",
  secondaryLabel: "Neem contact op",
  secondaryHref: "/contact",
} as const satisfies ServiceCTACopy;

/* ──────────────────────────────────────────────────────────────
   Premium landing — extra section data (Sectie 02 t/m 10)
   View-model interfaces co-located met de overige landing-types.
   ────────────────────────────────────────────────────────────── */

/* 02 — Trust & social proof (geanimeerde tellers) */
export const LANDING_TRUST = {
  eyebrow: "In cijfers",
  titleLead: "Cijfers die",
  titleEm: "vertrouwen wekken.",
  sub: "Geen loze beloften — wel een bewezen werkwijze waar ondernemers door heel Nederland op bouwen.",
} as const;

export const LANDING_TRUST_STATS: readonly ImpactStat[] = [
  { target: 150, suffix: "+", label: "Websites opgeleverd" },
  { target: 12, suffix: "+", label: "Jaar ervaring" },
  { target: 98, suffix: "%", label: "Tevreden klanten" },
  { target: 2, suffix: " wk", label: "Gem. oplevertijd" },
];

/* 03 — Waarom Sarte Global (afwisselende layout + pijlers) */
export interface LandingPillar {
  readonly iconName: ServiceIconName;
  readonly title: string;
  readonly description: string;
}

export const LANDING_WHY = {
  eyebrow: "Waarom Sarte Global",
  titleLead: "Eén team voor strategie, design",
  titleEm: "én development.",
  lead: "Geen losse freelancers of doorverkochte uren. Bij Sarte Global werkt één senior team aan jouw nieuwe website — van het eerste strategiegesprek tot ruim na de livegang. We werken voor ondernemers door heel Nederland, van Amsterdam en Rotterdam tot Utrecht, Eindhoven en Den Haag.",
  media: {
    image: "/images/company-img.png",
    alt: "Het team van Sarte Global aan het werk in de studio.",
    caption: "Sarte Global · studio",
    tag: "Werkzaam in heel Nederland",
  },
  proof: [
    "Senior designers & developers",
    "Vaste contactpersoon",
    "Heldere planning vooraf",
  ],
  pillars: [
    {
      iconName: "chart",
      title: "Strategie",
      description:
        "We beginnen bij jouw doelen, doelgroep en markt — niet bij een template. Elke keuze onderbouwd met inzicht.",
    },
    {
      iconName: "palette",
      title: "Design",
      description:
        "Een modern, merkgericht ontwerp dat vertrouwen wekt en bezoekers moeiteloos naar de juiste actie leidt.",
    },
    {
      iconName: "code",
      title: "Development",
      description:
        "Schone code op een snelle, veilige basis — gebouwd om te schalen en jarenlang probleemloos mee te gaan.",
    },
    {
      iconName: "search",
      title: "SEO",
      description:
        "Sterke technische SEO, nette structuur en schema-markup, zodat je vindbaar bent vanaf dag één.",
    },
    {
      iconName: "gauge",
      title: "Performance",
      description:
        "Razendsnelle laadtijden en topscores op Core Web Vitals — beter voor je bezoeker én voor Google.",
    },
  ],
} as const satisfies {
  eyebrow: string;
  titleLead: string;
  titleEm: string;
  lead: string;
  media: {
    image: string;
    alt: string;
    caption: string;
    tag: string;
  };
  proof: readonly string[];
  pillars: readonly LandingPillar[];
};

/* 05 — Website features (interactieve slider) */
export type LandingFeatureKey =
  | "mobile"
  | "seo"
  | "speed"
  | "secure"
  | "convert"
  | "manage";

export interface LandingFeatureItem {
  readonly key: LandingFeatureKey;
  readonly iconName: ServiceIconName;
  readonly title: string;
  readonly description: string;
  readonly stat: { readonly value: string; readonly label: string };
}

export const LANDING_FEATURES_SECTION = {
  eyebrow: "Wat je krijgt",
  titleLead: "Alles wat een moderne website",
  titleEm: "nodig heeft.",
  sub: "Kies een onderdeel en zie wat het voor jouw bezoekers betekent. Standaard inbegrepen bij elke nieuwe website.",
} as const;

export const LANDING_FEATURES: readonly LandingFeatureItem[] = [
  {
    key: "mobile",
    iconName: "mobile",
    title: "Mobile-first",
    description:
      "Ontworpen vanaf de eerste schets voor mobiel — waar het grootste deel van je bezoek vandaan komt. Vlekkeloos op telefoon, tablet en desktop.",
    stat: { value: "100%", label: "responsive" },
  },
  {
    key: "seo",
    iconName: "search",
    title: "SEO-geoptimaliseerd",
    description:
      "Nette structuur, snelle laadtijden, schema-markup en doordachte metadata zorgen dat nieuwe klanten je vinden in Google.",
    stat: { value: "100/100", label: "SEO-score" },
  },
  {
    key: "speed",
    iconName: "lightning",
    title: "Razendsnel",
    description:
      "Geoptimaliseerde code en beelden voor laadtijden onder de seconde. Snelheid houdt bezoekers vast én geeft een SEO-voorsprong.",
    stat: { value: "0,8s", label: "laadtijd" },
  },
  {
    key: "secure",
    iconName: "shield",
    title: "Veilig & betrouwbaar",
    description:
      "SSL, dagelijkse back-ups en doorlopende updates. Je website blijft veilig, online en up-to-date — zonder dat jij erover hoeft na te denken.",
    stat: { value: "99,9%", label: "uptime" },
  },
  {
    key: "convert",
    iconName: "cursor",
    title: "Conversiegericht",
    description:
      "Een heldere opbouw met duidelijke call-to-actions die bezoekers stap voor stap naar contact of aankoop leidt.",
    stat: { value: "+41%", label: "meer conversie" },
  },
  {
    key: "manage",
    iconName: "layers",
    title: "Eenvoudig te beheren",
    description:
      "Pas teksten en beelden zelf eenvoudig aan via een overzichtelijk beheersysteem — of laat het ons doen. Jij houdt de controle.",
    stat: { value: "5 min", label: "om bij te werken" },
  },
];

/* 06 — Inspiratie: succesvolle Nederlandse digitale merken (geen klanten — referentie) */
export interface LandingInspirationScore {
  readonly label: string;
  /** 0–100, onze eigen UX-beoordeling ter illustratie. */
  readonly value: number;
}

export interface LandingInspirationItem {
  readonly id: string;
  readonly brand: string;
  readonly industry: string;
  readonly domain: string;
  readonly accent: string;
  readonly analysis: string;
  readonly strengths: readonly string[];
  readonly trust: string;
  readonly scores: readonly LandingInspirationScore[];
}

export const LANDING_INSPIRATION_SECTION = {
  eyebrow: "Inspiratie van succesvolle Nederlandse digitale merken",
  titleLead: "Websites die",
  titleEm: "marktleider werden.",
  sub: "Geïnspireerd door succesvolle Nederlandse merken die uitblinken in gebruiksvriendelijkheid, conversie en digitale ervaring.",
  note: "Ter inspiratie getoond. Deze merken zijn geen klanten van Sarte Global — we laten ze zien als toonbeeld van sterke Nederlandse digitale ervaringen.",
  seoTitle: "Moderne website voorbeelden uit Nederland",
  seoBody:
    "Op zoek naar website design inspiratie? Deze succesvolle websites uit Nederland laten zien wat een professionele website onderscheidt: heldere navigatie, een vlekkeloze mobiele ervaring en een ontwerp dat bezoekers vertrouwen geeft. Wil je zelf een moderne, professionele website laten maken die aan dit niveau voldoet? Sarte Global vertaalt deze bewezen UX-principes naar jouw merk.",
  ctaLabel: "Nieuwe website laten maken",
} as const;

export const LANDING_INSPIRATION: readonly LandingInspirationItem[] = [
  {
    id: "bol",
    brand: "bol.",
    industry: "E-commerce · Online warenhuis",
    domain: "bol.com",
    accent: "#1A4FFF",
    analysis:
      "Bol zet een vertrouwde, voorspelbare flow centraal: krachtige zoekfunctie, persoonlijke aanbevelingen en een afrekenproces dat bijna geen nadenken vereist.",
    strengths: ["Razendsnelle zoekfunctie", "Persoonlijke aanbevelingen", "Helder retourbeleid"],
    trust:
      "Miljoenen reviews, een duidelijk retourbeleid en Select-voordelen maken online kopen risicoloos.",
    scores: [
      { label: "Navigatie", value: 96 },
      { label: "Mobiele ervaring", value: 94 },
      { label: "Conversie", value: 97 },
      { label: "Laadsnelheid", value: 90 },
      { label: "Vertrouwen", value: 98 },
      { label: "Visuele hiërarchie", value: 93 },
    ],
  },
  {
    id: "coolblue",
    brand: "Coolblue",
    industry: "Elektronica & retail",
    domain: "coolblue.nl",
    accent: "#1FA3F0",
    analysis:
      "Coolblue is geobsedeerd door klanttevredenheid — elke pagina ademt service, met glasheldere product-USP's, eerlijk advies en concrete bezorgbeloftes.",
    strengths: ["Glasheldere USP's", "Vandaag besteld, morgen in huis", "Topklantenservice"],
    trust:
      "Concrete bezorgbeloftes, eerlijk productadvies en 'alles voor een glimlach' bouwen merkvertrouwen op.",
    scores: [
      { label: "Navigatie", value: 95 },
      { label: "Mobiele ervaring", value: 96 },
      { label: "Conversie", value: 98 },
      { label: "Laadsnelheid", value: 92 },
      { label: "Vertrouwen", value: 97 },
      { label: "Visuele hiërarchie", value: 95 },
    ],
  },
  {
    id: "hema",
    brand: "HEMA",
    industry: "Warenhuis & lifestyle",
    domain: "hema.nl",
    accent: "#E5132C",
    analysis:
      "HEMA vertaalt z'n nuchtere, toegankelijke merk naar een speelse maar overzichtelijke webervaring met opvallend sterke eigen-merk-branding.",
    strengths: ["Sterke merkidentiteit", "Toegankelijk & speels", "Naadloos online/offline"],
    trust:
      "Een vertrouwd Nederlands merk met fysieke winkels, herkenbaar design en transparante prijzen.",
    scores: [
      { label: "Navigatie", value: 92 },
      { label: "Mobiele ervaring", value: 93 },
      { label: "Conversie", value: 90 },
      { label: "Laadsnelheid", value: 91 },
      { label: "Vertrouwen", value: 95 },
      { label: "Visuele hiërarchie", value: 94 },
    ],
  },
  {
    id: "ah",
    brand: "Albert Heijn",
    industry: "Supermarkt & e-grocery",
    domain: "ah.nl",
    accent: "#19A0DC",
    analysis:
      "Albert Heijn maakt complexe boodschappen-flows simpel: slimme lijstjes, gepersonaliseerde bonus en een feilloze mobiele bestelervaring.",
    strengths: ["Slimme boodschappenlijst", "Gepersonaliseerde bonus", "Vlekkeloze bezorgflow"],
    trust:
      "Bonuskaart-personalisatie, betrouwbare bezorgmomenten en een vertrouwd merk maken dagelijks bestellen moeiteloos.",
    scores: [
      { label: "Navigatie", value: 94 },
      { label: "Mobiele ervaring", value: 97 },
      { label: "Conversie", value: 95 },
      { label: "Laadsnelheid", value: 89 },
      { label: "Vertrouwen", value: 96 },
      { label: "Visuele hiërarchie", value: 92 },
    ],
  },
  {
    id: "wehkamp",
    brand: "wehkamp",
    industry: "Mode & wonen",
    domain: "wehkamp.nl",
    accent: "#E5006D",
    analysis:
      "Wehkamp combineert een inspirerende, magazine-achtige presentatie met flexibele betaalopties die drempelvrij online shoppen mogelijk maken.",
    strengths: ["Inspirerende fotografie", "Achteraf betalen", "Sterke filters & maatadvies"],
    trust:
      "Achteraf betalen, gratis retour en duidelijke maattabellen verlagen de drempel om te bestellen.",
    scores: [
      { label: "Navigatie", value: 91 },
      { label: "Mobiele ervaring", value: 92 },
      { label: "Conversie", value: 93 },
      { label: "Laadsnelheid", value: 88 },
      { label: "Vertrouwen", value: 92 },
      { label: "Visuele hiërarchie", value: 93 },
    ],
  },
  {
    id: "zalando",
    brand: "Zalando",
    industry: "Mode & schoenen",
    domain: "zalando.nl",
    accent: "#FF6900",
    analysis:
      "Zalando zet visuele mode-inspiratie voorop met een gestroomlijnde checkout en een retourproces dat online kleding kopen zorgeloos maakt.",
    strengths: ["Visuele mode-inspiratie", "Gratis verzending & retour", "Naadloze checkout"],
    trust:
      "Gratis verzending en retour, eerlijke reviews en een vlotte checkout nemen twijfel bij online mode weg.",
    scores: [
      { label: "Navigatie", value: 94 },
      { label: "Mobiele ervaring", value: 95 },
      { label: "Conversie", value: 96 },
      { label: "Laadsnelheid", value: 90 },
      { label: "Vertrouwen", value: 94 },
      { label: "Visuele hiërarchie", value: 96 },
    ],
  },
];

/* 07 — Branches */
export type LandingIndustryIconName =
  | "construction"
  | "health"
  | "finance"
  | "ecommerce"
  | "horeca"
  | "corporate";

export interface LandingIndustryItem {
  readonly icon: LandingIndustryIconName;
  readonly title: string;
  readonly description: string;
}

export const LANDING_INDUSTRIES_SECTION = {
  eyebrow: "Branches",
  titleLead: "Gebouwd voor",
  titleEm: "jouw branche.",
  sub: "We kennen de vragen van jouw markt — en bouwen de website die daar antwoord op geeft.",
} as const;

export const LANDING_INDUSTRIES: readonly LandingIndustryItem[] = [
  {
    icon: "construction",
    title: "Bouw & techniek",
    description:
      "Projecten, certificeringen en offerteaanvragen die direct vertrouwen wekken bij opdrachtgevers.",
  },
  {
    icon: "health",
    title: "Zorg & gezondheid",
    description:
      "Rustige, toegankelijke sites met online afspraken en heldere informatie voor je patiënten.",
  },
  {
    icon: "finance",
    title: "Finance & advies",
    description:
      "Een professionele uitstraling die autoriteit uitstraalt en bezoekers omzet in afspraken.",
  },
  {
    icon: "ecommerce",
    title: "E-commerce & retail",
    description:
      "Snelle webshops die bezoekers moeiteloos en met vertrouwen naar de afrekenpagina leiden.",
  },
  {
    icon: "horeca",
    title: "Horeca & hospitality",
    description:
      "Sfeervolle sites met menu's, reserveringen en routebeschrijving — meteen lokaal vindbaar.",
  },
  {
    icon: "corporate",
    title: "Corporate & B2B",
    description:
      "Schaalbare merksites die jouw organisatie neerzetten als de marktleider in je vakgebied.",
  },
];

/* 08 — Testimonials (grote quote-kaarten, auto-scroll) */
export const LANDING_TESTIMONIALS_SECTION = {
  eyebrow: "Klantverhalen",
  titleLead: "Ondernemers die ons",
  titleEm: "aanbevelen.",
  sub: "Echte ervaringen van bedrijven die hun nieuwe website door Sarte Global lieten maken.",
  score: "4,9",
  scoreLabel: "Gemiddeld 4,9 / 5 uit 100+ beoordelingen",
} as const;

/* 06b — Case studies (active cards met browser-mockup, voor/na metrics) */
export interface LandingCaseItem {
  readonly id: string;
  readonly domain: string;
  readonly accent: string;
  readonly tag: string;
  readonly title: string;
  readonly summary: string;
  readonly metrics: readonly { readonly label: string; readonly value: string }[];
  readonly compare: {
    readonly label: string;
    readonly before: string;
    readonly after: string;
  };
}

export const LANDING_CASES_SECTION = {
  eyebrow: "Ons werk",
  titleLead: "Resultaten die",
  titleEm: "voor zich spreken.",
  sub: "Voorbeelden van het soort resultaat dat we voor ondernemers nastreven — met een helder voor/na-verschil.",
  // Badge + disclaimer so the figures are clearly illustrative and never read as
  // verified client metrics (the domains are placeholders). Replace with real,
  // named cases — and remove these two lines — zodra echte cijfers beschikbaar zijn.
  label: "Voorbeeldcase",
  disclaimer:
    "Bovenstaande cases zijn illustratieve voorbeelden. De getoonde cijfers en domeinnamen dienen ter illustratie en zijn geen geverifieerde klantresultaten.",
} as const;

export const LANDING_CASES: readonly LandingCaseItem[] = [
  {
    id: "zaak1",
    domain: "voorbeeld.nl",
    accent: "#F5A623",
    tag: "Nieuwe website",
    title: "Van oude naar nieuwe website",
    summary: "Een complete redesign met focus op conversie en moderne uitstraling.",
    metrics: [
      { label: "Meer bezoekers", value: "+85%" },
      { label: "Snellere laadtijd", value: "-60%" },
    ],
    compare: {
      label: "Conversie",
      before: "1,2%",
      after: "3,8%",
    },
  },
  {
    id: "zaak2",
    domain: "voorbeeld2.nl",
    accent: "#1A4FFF",
    tag: "Webshop",
    title: "Nieuwe webshop met hogere omzet",
    summary: "Van verouderde shop naar een snelle, mobielvriendelijke webshop.",
    metrics: [
      { label: "Meer omzet", value: "+120%" },
      { label: "Lagere bounce", value: "-45%" },
    ],
    compare: {
      label: "Conversie",
      before: "0,8%",
      after: "2,9%",
    },
  },
  {
    id: "zaak3",
    domain: "voorbeeld3.nl",
    accent: "#19A0DC",
    tag: "Landingspagina",
    title: "Landingspagina optimalisatie",
    summary: "Gerichte landingspagina die bezoekers moeiteloos naar contact leidt.",
    metrics: [
      { label: "Meer aanvragen", value: "+200%" },
      { label: "Snellere laadtijd", value: "-70%" },
    ],
    compare: {
      label: "Conversie",
      before: "0,5%",
      after: "4,2%",
    },
  },
];

/* 02b — "Waarom kiezen voor ons": 6 stat-cards (icon + cijfer + reden) */
export const LANDING_WHY_STATS_SECTION = {
  eyebrow: "Waarom Sarte Global",
  titleLead: "Waarom ondernemers",
  titleEm: "voor ons kiezen.",
  sub: "Geen loze beloftes — meetbare resultaten, snelle oplevering en websites die converteren.",
} as const;

export const LANDING_WHY_STATS: readonly LandingStatCard[] = [
  {
    iconName: "rocket",
    value: "150+",
    title: "Websites opgeleverd",
    description: "Bewezen ervaring met ondernemers door heel Nederland.",
  },
  {
    iconName: "spark",
    value: "4,9/5",
    title: "Klantbeoordeling",
    description: "Gemiddeld uit 100+ reviews — klanten bevelen ons aan.",
  },
  {
    iconName: "lightning",
    value: "0,8s",
    title: "Gemiddelde laadtijd",
    description: "Razendsnelle websites die bezoekers vasthouden.",
  },
  {
    iconName: "search",
    value: "100/100",
    title: "SEO-score",
    description: "Technisch geoptimaliseerd om gevonden te worden in Google.",
  },
  {
    iconName: "gauge",
    value: "98%",
    title: "Tevreden klanten",
    description: "Langdurige samenwerkingen en terugkerende opdrachten.",
  },
  {
    iconName: "shield",
    value: "2 wk",
    title: "Snel live",
    description: "Van kickoff tot livegang — zonder in te leveren op kwaliteit.",
  },
];

/* 09b — Lokale SEO: "Werkzaam in heel Nederland" (steden komen uit SERVICE_CITIES) */
export const LANDING_LOCAL_SEO = {
  eyebrow: "Werkzaam in heel Nederland",
  lead: "Of je nu onderneemt in Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven, Haarlem of Amersfoort — Sarte Global ontwerpt en bouwt je website volledig op afstand, met persoonlijk contact en een vast aanspreekpunt. Geen reisafstand die in de weg zit, wél een partner die je lokale én landelijke groei begrijpt.",
  note: "Online-first webdesignbureau — actief in heel Nederland.",
} as const;

/* 10 — Final CTA (emotionele kop + inline formulier + urgentie) */
export const LANDING_FINAL_CTA = {
  eyebrow: "Klaar om te starten",
  titleLead: "Jouw nieuwe website",
  titleEm: "begint vandaag.",
  sub: "Vertel ons kort over je bedrijf en doelen. Binnen één werkdag ontvang je een vrijblijvend voorstel — helder, op maat en zonder verplichtingen.",
  urgency: "Nog 3 projectplekken beschikbaar deze maand",
  points: [
    "Reactie binnen 1 werkdag",
    "Vrijblijvend & volledig op maat",
    "Eén vaste contactpersoon",
  ],
  projectType: "Nieuwe website laten maken",
} as const satisfies LandingFinalCtaContent;
