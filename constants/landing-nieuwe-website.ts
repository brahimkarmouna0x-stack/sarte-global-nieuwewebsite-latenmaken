import type {
  ServiceCTACopy,
  ServiceFeature,
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

export const LANDING_HERO = {
  eyebrow: "Nieuwe website laten maken · Sarte Global",
  titleLead: "Nieuwe website laten maken voor",
  titleEm: "meer groei en klanten.",
  sub: "Sarte Global ontwikkelt nieuwe, professionele en responsive websites voor ondernemers en bedrijven in Nederland. Modern design, sterke SEO en een opbouw die bezoekers omzet in klanten.",
  primaryCta: "Nieuwe website aanvragen",
  secondaryCta: { label: "Bekijk ons proces", href: "#proces" },
  trust: [
    "150+ websites opgeleverd",
    "98% tevreden klanten",
    "Binnen 2 weken online",
    "Gevestigd in Nederland",
  ],
  benefits: [
    "Modern & responsive design",
    "SEO-geoptimaliseerd",
    "Razendsnel",
    "Conversiegericht",
  ],
} as const;

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
