import type { PricingSectionContent, ServicePricing } from "@/types";

/**
 * "Pakketten" — premium, conversion-focused tier overview reused across the
 * homepage, the website-laten-maken landing page and every /services/[slug] page.
 *
 * Pricing: tiers show transparent euro prices (the client-provided source of
 * truth). Open-ended tiers use `plus: true` ("vanaf …+"); bespoke services that
 * have no fixed list price use `amount: null` → "Op aanvraag". Premium framing
 * only — never "goedkoop", "betaalbaar" of "laagste prijs".
 */

export const PRICING_SECTION = {
  eyebrow: "Tarieven & pakketten",
  titleLead: "Eén aanpak,",
  titleEm: "drie heldere pakketten.",
  sub: "Kies een dienst en zie direct wat een website, webshop of campagne kost — van een vliegende start tot volledig maatwerk. Transparante prijzen, een heldere scope en altijd een eerlijke offerte op maat.",
  filterLabel: "Kies een dienst",
  comparisonTitle: "Volledige vergelijking",
  roiEyebrow: "Rendement",
  faqEyebrow: "Kosten & prijzen",
  faqTitle: "Veelgestelde vragen over kosten",
} as const satisfies PricingSectionContent;

/** Display order of the service filter bar (client's 8 first, then legacy). */
export const PRICING_ORDER = [
  "web-development",
  "ecommerce",
  "ui-ux-design",
  "video-editing",
  "brand-strategy",
  "seo",
  "paid-media",
  "maintenance",
  "landing-page-optimization",
  "mobile-development",
  "ai-automation",
] as const;

export const SERVICE_PRICING = [
  {
    slug: "web-development",
    name: "Website laten maken",
    chipLabel: "Website",
    icon: "code",
    projectType: "Website laten maken",
    headline:
      "Van een strakke one-pager tot een volledige zakelijke website — gebouwd op een snelle, SEO-sterke basis.",
    tiers: [
      {
        id: "start",
        name: "Starter Website",
        tagline: "Een professionele one-page website om snel online te staan",
        bestFor: "Ideaal voor zzp'ers en starters die snel een sterke eerste indruk willen.",
        timeline: "± 1 week",
        price: { amount: 995, period: "eenmalig" },
        deliverables: [
          "One-page website (tot 5 secties)",
          "Maatwerk design in jouw huisstijl",
          "Mobiel- en tabletvriendelijk",
          "Basis-SEO & snelle laadtijd",
          "Contactformulier + Google Maps",
        ],
        techIds: ["Next.js", "React", "Tailwind"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "Business Website",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Een complete meerpagina-website die klanten oplevert",
        bestFor: "Voor het MKB dat serieus wil groeien en gevonden wil worden.",
        timeline: "± 2–3 weken",
        price: { amount: 1995, period: "eenmalig" },
        deliverables: [
          "Tot 8 pagina's, volledig maatwerk",
          "Conversiegerichte structuur & copy-opzet",
          "Technische SEO + schema markup",
          "CMS zodat je zelf teksten aanpast",
          "Analytics, cookiebanner & koppelingen",
        ],
        techIds: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "maatwerk",
        name: "Premium Website",
        tagline: "Een onderscheidende website met maatwerk en uitgebreide functionaliteit",
        bestFor: "Voor organisaties die maximale impact, functionaliteit en snelheid willen.",
        timeline: "± 3–5 weken",
        price: { amount: 3495, period: "eenmalig" },
        deliverables: [
          "Onbeperkt aantal pagina's & templates",
          "Volledig maatwerk design & animaties",
          "Geavanceerde technische SEO + schema",
          "CMS, meertaligheid & API-koppelingen",
          "Conversie-optimalisatie & A/B-basis",
        ],
        techIds: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Aantal pagina's", values: ["1", "Tot 8", "Onbeperkt"] },
      { label: "Maatwerk design", values: [true, true, true] },
      { label: "Technische SEO & schema", values: ["Basis", true, true] },
      { label: "Zelf content beheren (CMS)", values: [false, true, true] },
      { label: "Integraties & API-koppelingen", values: [false, "Beperkt", true] },
      { label: "Onderhoud & support", values: ["Op aanvraag", "Op aanvraag", "SLA"] },
    ],
    roi: {
      lead: "Wat een website kost hangt af van het aantal pagina's, maatwerk en koppelingen. Wat hij oplevert, is bijna altijd groter: meer vertrouwen, meer aanvragen en lagere advertentiekosten dankzij sterke SEO.",
      stats: [
        { target: 90, suffix: "+", label: "Google PageSpeed-score" },
        { target: 2, prefix: "±", suffix: " wkn", label: "Gemiddelde doorlooptijd" },
        { target: 100, suffix: "%", label: "Responsive op elk device" },
      ],
    },
    faq: [
      {
        question: "Wat kost een website laten maken?",
        answer:
          "Een website laten maken begint bij Sarte Global vanaf €995 voor een professionele one-pager. De uiteindelijke prijs hangt af van het aantal pagina's, de hoeveelheid maatwerk en eventuele koppelingen. Je ontvangt altijd vooraf een heldere offerte op maat, zodat je nooit betaalt voor functies die je niet nodig hebt.",
      },
      {
        question: "Waarom verschilt de prijs per project?",
        answer:
          "Een one-page website voor een starter is iets heel anders dan een meertalig platform met integraties. De prijs volgt de scope: ontwerp, aantal pagina's, techniek en onderhoud. We leggen elke kostenpost transparant uit in de offerte.",
      },
      {
        question: "Krijg ik vooraf een vaste offerte?",
        answer:
          "Ja. Na een korte kennismaking ontvang je binnen 24 uur een heldere offerte met een vaste scope en planning. Geen open eindjes en geen verrassingen achteraf.",
      },
      {
        question: "Hoe snel staat mijn website online?",
        answer:
          "Een Starter-website staat vaak binnen een week live, een Business-website doorgaans in 2 tot 3 weken. Premium-trajecten plannen we in overleg, afhankelijk van de complexiteit.",
      },
    ],
    seo: {
      title: "Wat kost een website laten maken?",
      body: "Veel ondernemers vragen zich af wat een website laten maken kost. Bij Sarte Global start een professionele website vanaf €995, terwijl een uitgebreide zakelijke website met CMS, meertaligheid en koppelingen oploopt richting €3.495 of meer. De prijs volgt altijd de scope: een compacte one-pager vraagt minder werk dan een uitgebreide website. Daarom werken we met transparante pakketprijzen én een offerte op maat, zodat je vooraf precies weet waar je voor betaalt en nooit te veel betaalt. Belangrijker dan de prijs is het rendement: een snelle, professionele en goed vindbare website verdient zichzelf terug door meer aanvragen, meer vertrouwen en lagere advertentiekosten. Plan een vrijblijvende kennismaking en ontdek wat een nieuwe website voor jouw bedrijf kan betekenen.",
    },
  },
  {
    slug: "ecommerce",
    name: "Webshop laten maken",
    chipLabel: "Webshop",
    icon: "cart",
    projectType: "Webshop laten maken",
    headline:
      "Een webshop die verkoopt: snelle productpagina's, een soepele checkout en alle Nederlandse betaalmethoden.",
    tiers: [
      {
        id: "start",
        name: "Starter Shop",
        tagline: "Een nette webshop om snel je eerste producten te verkopen",
        bestFor: "Voor ondernemers die met een overzichtelijk assortiment starten.",
        timeline: "± 1–2 weken",
        price: { amount: 1995, period: "eenmalig" },
        deliverables: [
          "Webshop tot 25 producten",
          "iDEAL & creditcard betalingen",
          "Mobiele, conversiegerichte checkout",
          "Verzendkoppeling & basis-SEO",
          "Zelf producten beheren",
        ],
        techIds: ["Next.js", "React", "Tailwind"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "Growth Shop",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Een volwaardige webshop gebouwd om omzet te laten groeien",
        bestFor: "Voor groeiende webshops met een serieus assortiment.",
        timeline: "± 3–4 weken",
        price: { amount: 3995, period: "eenmalig" },
        deliverables: [
          "Onbeperkt producten & categorieën",
          "Alle betaalmethoden + achteraf betalen",
          "Kortingscodes, reviews & wishlist",
          "Koppeling met boekhouding & verzending",
          "Conversie-optimalisatie & GA4-tracking",
        ],
        techIds: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "maatwerk",
        name: "Enterprise Shop",
        tagline: "Een schaalbaar e-commerceplatform voor grotere catalogi",
        bestFor: "Voor merken met voorraadbeheer, B2B-prijzen of internationale verkoop.",
        timeline: "In overleg",
        price: { amount: 7500, plus: true, period: "eenmalig" },
        deliverables: [
          "Maatwerk PIM/voorraad-integraties",
          "B2B-prijzen, accounts & offertes",
          "Meerdere talen, valuta & magazijnen",
          "Headless architectuur voor snelheid",
          "Doorlopende optimalisatie & support-SLA",
        ],
        techIds: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Aantal producten", values: ["Tot 25", "Onbeperkt", "Onbeperkt"] },
      { label: "Betaalmethoden", values: ["iDEAL + card", "Alle methoden", "Alle methoden"] },
      { label: "Kortingen, reviews & wishlist", values: [false, true, true] },
      { label: "Boekhouding- & verzendkoppeling", values: ["Basis", true, true] },
      { label: "B2B / meerdere valuta", values: [false, false, true] },
      { label: "Conversie-optimalisatie", values: [false, true, true] },
    ],
    roi: {
      lead: "De kosten van een webshop hangen af van het aantal producten, betaalmethoden en koppelingen. De winst zit in een soepele checkout: elke procent minder uitval in de winkelwagen is directe extra omzet.",
      stats: [
        { target: 3, prefix: "±", suffix: " wkn", label: "Tot aan livegang" },
        { target: 99, suffix: "%", label: "Uptime betaalproces" },
        { target: 5, suffix: "+", label: "Betaalmethoden" },
      ],
    },
    faq: [
      {
        question: "Wat kost een webshop laten maken?",
        answer:
          "Een webshop laten maken start bij Sarte Global vanaf €1.995. De prijs hangt af van het aantal producten, de gewenste betaalmethoden, koppelingen met je boekhouding en de mate van maatwerk. Na een korte intake ontvang je een offerte op maat met een heldere scope — zonder verborgen kosten.",
      },
      {
        question: "Welke betaalmethoden kunnen jullie koppelen?",
        answer:
          "Alle Nederlandse en Europese methoden: iDEAL, Bancontact, creditcard, Apple Pay, PayPal en achteraf betalen. We kiezen samen de mix die bij jouw klanten past.",
      },
      {
        question: "Kan ik zelf producten en bestellingen beheren?",
        answer:
          "Ja. Je krijgt een gebruiksvriendelijk beheer waarmee je zonder technische kennis producten, voorraad, prijzen en bestellingen aanpast.",
      },
      {
        question: "Kunnen jullie koppelen met mijn boekhouding of voorraad?",
        answer:
          "Zeker. We koppelen met pakketten zoals je boekhouding, verzendpartner of een PIM-systeem. Complexere integraties vallen onder het Enterprise-pakket.",
      },
    ],
    seo: {
      title: "Wat kost een webshop laten maken?",
      body: "De kosten van een webshop laten maken verschillen sterk per project. Bij Sarte Global start een professionele webshop vanaf €1.995, terwijl een uitgebreid platform met honderden artikelen, B2B-prijzen en koppelingen met voorraad en boekhouding oploopt vanaf €7.500. Je krijgt daarom geen standaardprijs, maar een transparante offerte op maat die past bij jouw assortiment en groeiplannen. We bouwen webshops die niet alleen mooi zijn, maar vooral verkopen: snelle productpagina's, alle Nederlandse betaalmethoden en een checkout die is geoptimaliseerd om winkelwagenuitval te verlagen. Zo telt elke euro die je investeert mee aan meer omzet. Vraag een vrijblijvende offerte aan en ontdek wat een professionele webshop voor jouw onderneming kan opleveren.",
    },
  },
  {
    slug: "ui-ux-design",
    name: "UX / UI design",
    chipLabel: "UI/UX",
    icon: "cursor",
    projectType: "UX / UI design",
    headline:
      "Doordacht ontwerp gebaseerd op onderzoek — gemaakt om te bouwen en gestuurd door data.",
    tiers: [
      {
        id: "start",
        name: "Landing Page Design",
        tagline: "Een conversiegericht ontwerp voor één landingspagina of scherm",
        bestFor: "Voor een scherpe landingspagina of een afgebakend MVP-scherm.",
        timeline: "± 1 week",
        price: { amount: 499, period: "eenmalig" },
        deliverables: [
          "UI-ontwerp van 1–3 schermen",
          "Werkend kleur- & typografiesysteem",
          "Klikbaar prototype in Figma",
          "Mobiel en desktop ontwerp",
          "Eén feedbackronde",
        ],
        techIds: ["Figma", "Tailwind"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "Website UI/UX",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Een compleet, conversiegericht ontwerp voor je hele website",
        bestFor: "Voor bedrijven die hun website naar een hoger niveau tillen.",
        timeline: "± 2–4 weken",
        price: { amount: 1495, period: "eenmalig" },
        deliverables: [
          "Gebruikersonderzoek & user flows",
          "Volledig design system met componenten",
          "High-fidelity ontwerp van alle schermen",
          "Interactief, testbaar prototype",
          "Design tokens klaar voor development",
        ],
        techIds: ["Figma", "React", "Next.js", "Tailwind", "TypeScript"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "maatwerk",
        name: "SaaS Product Design",
        tagline: "End-to-end productontwerp voor SaaS en webapps",
        bestFor: "Voor teams die design en development structureel willen versnellen.",
        timeline: "In overleg",
        price: { amount: 2995, plus: true, period: "eenmalig" },
        deliverables: [
          "Onderzoek, testing & UX-audits",
          "Uitbreidbaar design system + documentatie",
          "Designers en developers in één team",
          "Toegankelijkheid (WCAG) ingebouwd",
          "Doorlopende ontwerp- & verbetersprints",
        ],
        techIds: ["Figma", "React", "Next.js", "Tailwind", "TypeScript", "Vue"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Aantal schermen", values: ["1–3", "Volledig product", "Onbeperkt"] },
      { label: "Gebruikersonderzoek", values: [false, true, true] },
      { label: "Design system", values: ["Basis", true, true] },
      { label: "Interactief prototype", values: [true, true, true] },
      { label: "Design tokens voor development", values: [false, true, true] },
      { label: "Toegankelijkheid (WCAG)", values: [false, "Op aanvraag", true] },
    ],
    roi: {
      lead: "De kosten van UX/UI design hangen af van het aantal schermen en de diepgang van het onderzoek. Goed ontwerp verdient zich terug: minder ontwikkeltijd, minder support en een hogere conversie omdat gebruikers moeiteloos hun doel bereiken.",
      stats: [
        { target: 3, suffix: "×", label: "Snellere bouw door tokens" },
        { target: 1, prefix: "±", suffix: " wk", label: "Eerste prototype" },
        { target: 100, suffix: "%", label: "Build-ready oplevering" },
      ],
    },
    faq: [
      {
        question: "Wat kost UX/UI design?",
        answer:
          "UX/UI design start bij Sarte Global vanaf €499 voor één landingspagina-ontwerp. De prijs hangt af van het aantal schermen, de hoeveelheid onderzoek en of je een volledig design system nodig hebt. Na een korte intake ontvang je een offerte op maat met een heldere scope.",
      },
      {
        question: "Leveren jullie ook de code, of alleen het ontwerp?",
        answer:
          "Beide is mogelijk. We leveren Figma-bestanden met design tokens, en kunnen het ontwerp direct in productiecode omzetten — zo gaat er niets verloren tussen design en development.",
      },
      {
        question: "Werken jullie met onderzoek of meteen met ontwerp?",
        answer:
          "Voor grotere projecten starten we met onderzoek en user flows; dat voorkomt dure herontwerpen later. Voor een afgebakend scherm kan het ook compacter.",
      },
      {
        question: "Wat is een design system en heb ik dat nodig?",
        answer:
          "Een design system is een set herbruikbare componenten, kleuren en regels. Het houdt je product consistent en maakt doorontwikkelen sneller en voordeliger — handig zodra je meer dan een paar schermen hebt.",
      },
    ],
    seo: {
      title: "Wat kost UX/UI design?",
      body: "De kosten van UX/UI design laten zich niet in één bedrag vangen: een ontwerp voor één landingspagina (vanaf €499) is iets anders dan een compleet design system voor een SaaS-product (vanaf €2.995). Bij Sarte Global bepalen we samen de scope en ontvang je een transparante offerte op maat. Investeren in goed ontwerp loont dubbel. Een doordachte gebruikerservaring verlaagt je ontwikkelkosten, omdat developers met kant-en-klare design tokens werken, én verhoogt je conversie omdat bezoekers moeiteloos hun doel bereiken. We baseren elk ontwerp op gebruikersonderzoek en leveren een klikbaar prototype, zodat je de ervaring test vóór er ook maar één regel code wordt geschreven. Vraag een vrijblijvende offerte aan en til je product naar een hoger niveau.",
    },
  },
  {
    slug: "video-editing",
    name: "Video editing",
    chipLabel: "Video",
    icon: "video",
    projectType: "Video editing",
    headline:
      "Scroll-stopping video's die kijkers vasthouden en omzetten — van social reels tot premium merkvideo's.",
    tiers: [
      {
        id: "start",
        name: "Social Media Pakket",
        tagline: "Een serie korte, scroll-stoppende video's voor je socials",
        bestFor: "Voor ondernemers die consistent en professioneel willen posten.",
        timeline: "± 3–5 werkdagen",
        price: { amount: 199, period: "eenmalig" },
        deliverables: [
          "4 korte video's (Reels, TikTok, Shorts)",
          "Professionele montage & kleurcorrectie",
          "Ondertiteling & merkelementen",
          "Geoptimaliseerd per platform (9:16)",
          "Eén revisieronde",
        ],
        techIds: ["Premiere Pro", "After Effects"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "Growth Pakket",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Een complete contentbatch om je kanalen te laten groeien",
        bestFor: "Voor merken die structureel aan bereik en interactie bouwen.",
        timeline: "± 1 week",
        price: { amount: 499, period: "eenmalig" },
        deliverables: [
          "8–10 video's per maand",
          "Hooks & scripting-advies",
          "Motion graphics & geanimeerde captions",
          "Formaten voor alle kanalen",
          "Twee revisierondes + thumbnails",
        ],
        techIds: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "maatwerk",
        name: "Premium Pakket",
        tagline: "Premium merkvideo's en commercials met volledige productie",
        bestFor: "Voor bedrijven die zich met high-end video onderscheiden.",
        timeline: "± 2 weken",
        price: { amount: 999, period: "eenmalig" },
        deliverables: [
          "Merkvideo of commercial (tot 90 sec)",
          "Storyboard & creatief concept",
          "Geavanceerde motion graphics & VFX",
          "Sound design & licentievrije muziek",
          "Kleurgrading op bioscoopniveau",
          "Meerdere uitsneden voor elk kanaal",
        ],
        techIds: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Aantal video's", values: ["4", "8–10", "Op maat"] },
      { label: "Motion graphics & animatie", values: ["Basis", true, "Geavanceerd"] },
      { label: "Scripting & concept", values: [false, "Advies", "Volledig"] },
      { label: "Sound design & muziek", values: ["Standaard", true, "Premium"] },
      { label: "Revisierondes", values: ["1", "2", "Onbeperkt"] },
      { label: "Kleurgrading", values: ["Basis", true, "Cinematisch"] },
    ],
    roi: {
      lead: "Wat video editing kost, hangt af van het aantal video's, de lengte en de mate van animatie. Het rendement is aandacht: sterke video's houden kijkers langer vast en leveren meer interactie en aanvragen op.",
      stats: [
        { target: 3, suffix: "×", label: "Meer bereik met video" },
        { target: 5, prefix: "±", suffix: " dgn", label: "Tot eerste oplevering" },
        { target: 100, suffix: "%", label: "Geoptimaliseerd per platform" },
      ],
    },
    faq: [
      {
        question: "Wat kost video editing of videomontage?",
        answer:
          "Video editing start bij Sarte Global vanaf €199 voor een serie social video's. De kosten hangen af van het aantal video's, de lengte en de hoeveelheid animatie en motion graphics. Daarom werken we met heldere pakketten en, voor grotere producties, een offerte op maat — zonder verrassingen achteraf.",
      },
      {
        question: "Leveren jullie video's geschikt voor elk platform?",
        answer:
          "Ja. We leveren je video's in de juiste verhoudingen en formaten voor Instagram, TikTok, YouTube en LinkedIn, zodat ze overal optimaal presteren.",
      },
      {
        question: "Lever ik zelf het beeldmateriaal aan?",
        answer:
          "Dat kan, maar hoeft niet. Je kunt eigen opnames aanleveren; voor de Premium-producties verzorgen we desgewenst ook het concept, de opnames en licentievrije muziek.",
      },
      {
        question: "Hoe snel ontvang ik mijn video's?",
        answer:
          "Korte social video's lever je vaak binnen enkele werkdagen, een volledige contentbatch binnen een week. Premium merkvideo's plannen we afhankelijk van de productie.",
      },
    ],
    seo: {
      title: "Wat kost video editing?",
      body: "Wat video editing kost, hangt vooral af van het aantal video's, de lengte en de hoeveelheid montage, motion graphics en sound design. Bij Sarte Global start een serie social video's vanaf €199, terwijl een volledige merkvideo met concept, animatie en cinematische kleurgrading rond de €999 ligt. Je werkt daarom met heldere pakketten en, voor grotere producties, een transparante offerte op maat. Het rendement van professionele video zit in aandacht: sterke, scroll-stoppende video's houden kijkers langer vast, vergroten je bereik en leiden tot meer interactie en aanvragen. We leveren elke video geoptimaliseerd voor het juiste platform, van verticale reels tot breedbeeld commercials. Vraag vrijblijvend een voorstel aan en zet video in als groeimotor voor je merk.",
    },
  },
  {
    slug: "brand-strategy",
    name: "Merkstrategie",
    chipLabel: "Branding",
    icon: "palette",
    projectType: "Merkstrategie",
    headline:
      "Positionering, verhaal en identiteit die jouw bedrijf onvergetelijk maken.",
    tiers: [
      {
        id: "start",
        name: "Brand Starter",
        tagline: "Een sterke visuele basis om mee te starten",
        bestFor: "Voor starters die een professionele uitstraling nodig hebben.",
        timeline: "± 1–2 weken",
        price: { amount: 799, period: "eenmalig" },
        deliverables: [
          "Logo-ontwerp & varianten",
          "Kleurenpalet & typografie",
          "Korte merkrichtlijn (mini-brandbook)",
          "Social media-templates",
          "Bestanden klaar voor gebruik",
        ],
        techIds: ["Figma"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "Brand Identity",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Een compleet merk: strategie, identiteit en toon",
        bestFor: "Voor bedrijven die zich onderscheidend willen positioneren.",
        timeline: "± 3–5 weken",
        price: { amount: 1999, period: "eenmalig" },
        deliverables: [
          "Positionering & merkstrategie",
          "Verbale identiteit (naam, tone of voice)",
          "Volledige visuele identiteit",
          "Uitgebreid brandbook",
          "Toepassing op web & social",
        ],
        techIds: ["Figma", "Notion", "Webflow"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "maatwerk",
        name: "Premium Brand System",
        tagline: "Een merk dat schaalt van billboard tot favicon",
        bestFor: "Voor ambitieuze merken en herpositioneringen.",
        timeline: "In overleg",
        price: { amount: 4995, plus: true, period: "eenmalig" },
        deliverables: [
          "Diepgaand merk- & marktonderzoek",
          "Naamgeving & merkarchitectuur",
          "Motion, fotografie & art direction",
          "Levende guidelines in code & Figma",
          "Lanceer-assets & merkactivatie",
        ],
        techIds: ["Figma", "Notion", "Webflow", "Next.js", "Tailwind"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Logo & visuele identiteit", values: [true, true, true] },
      { label: "Merkstrategie & positionering", values: [false, true, true] },
      { label: "Verbale identiteit / tone of voice", values: [false, true, true] },
      { label: "Brandbook", values: ["Mini", true, "Levend systeem"] },
      { label: "Naamgeving & merkarchitectuur", values: [false, false, true] },
      { label: "Motion & art direction", values: [false, "Op aanvraag", true] },
    ],
    roi: {
      lead: "Wat merkstrategie kost, hangt af van de diepgang: van een visuele basis tot een volledige (her)positionering. Een sterk merk verdient zich terug in herkenbaarheid, vertrouwen en hogere marges.",
      stats: [
        { target: 1, suffix: " merk", label: "Eén consistent verhaal" },
        { target: 3, prefix: "±", suffix: " wkn", label: "Tot complete identiteit" },
        { target: 100, suffix: "%", label: "Eigen, herkenbaar design" },
      ],
    },
    faq: [
      {
        question: "Wat kost merkstrategie of een huisstijl?",
        answer:
          "Een merkidentiteit start bij Sarte Global vanaf €799 voor een visuele basis met logo en huisstijl. Een volledige merkstrategie met positionering, naamgeving en een levend brandbook ligt hoger. Je ontvangt vooraf een offerte op maat, afgestemd op jouw ambitie.",
      },
      {
        question: "Wat is het verschil tussen een logo en een merk?",
        answer:
          "Een logo is een onderdeel; een merk is het complete verhaal — positionering, toon, visuele identiteit en hoe je overkomt. Wij bouwen het merk, niet alleen het plaatje.",
      },
      {
        question: "Krijg ik richtlijnen zodat mijn merk consistent blijft?",
        answer:
          "Ja. Je ontvangt een brandbook met richtlijnen voor kleur, typografie en gebruik, zodat je merk overal consistent blijft — ook na de oplevering.",
      },
      {
        question: "Kunnen jullie ook mijn website in de nieuwe stijl maken?",
        answer:
          "Zeker. Omdat we ook websites bouwen, vertalen we je nieuwe merk naadloos naar een passende online uitstraling.",
      },
    ],
    seo: {
      title: "Wat kost merkstrategie en een huisstijl?",
      body: "De kosten van merkstrategie en een huisstijl verschillen per ambitie. Bij Sarte Global start een professionele merkidentiteit vanaf €799, terwijl een complete merkstrategie met naamgeving en een levend brandbook oploopt vanaf €4.995. Daarom werken we met een offerte op maat, afgestemd op jouw doelen en fase. Investeren in een sterk merk loont: het maakt je herkenbaar, wekt vertrouwen en stelt je in staat hogere marges te vragen, omdat klanten kiezen voor het verhaal en niet alleen voor de prijs. We bouwen geen los logo, maar een samenhangend merk dat schaalt van favicon tot billboard, en vertalen dat naadloos naar je website en social. Vraag vrijblijvend een voorstel aan en zet een merk neer dat blijft hangen.",
    },
  },
  {
    slug: "seo",
    name: "SEO & groei",
    chipLabel: "SEO",
    icon: "search",
    projectType: "SEO & groei",
    headline:
      "Technische SEO, sterke content en heldere rapportages die je structureel beter laten scoren in Google.",
    tiers: [
      {
        id: "start",
        name: "Local SEO",
        tagline: "Lokaal goed vindbaar worden in jouw regio",
        bestFor: "Voor lokale ondernemers die klanten uit de buurt willen.",
        timeline: "Maandelijks",
        price: { amount: 299, period: "maand" },
        deliverables: [
          "Lokale SEO & Google Bedrijfsprofiel",
          "Zoekwoordenonderzoek (lokaal)",
          "On-page optimalisatie kernpagina's",
          "Google Search Console & GA4 inrichten",
          "Maandelijkse voortgangsrapportage",
        ],
        techIds: ["Next.js", "TypeScript"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "Growth SEO",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Maandelijkse SEO-groei met content en optimalisatie",
        bestFor: "Voor ondernemers die structureel hoger willen ranken.",
        timeline: "Maandelijks",
        price: { amount: 799, period: "maand" },
        deliverables: [
          "Maandelijkse content (expert-artikelen)",
          "Doorlopende technische optimalisatie",
          "Lokale SEO & Google Bedrijfsprofiel",
          "Linkbuilding & autoriteitsopbouw",
          "Maandelijkse rapportage & overleg",
        ],
        techIds: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "maatwerk",
        name: "Authority SEO",
        tagline: "Een complete groeistrategie voor competitieve markten",
        bestFor: "Voor merken die landelijk willen domineren in zoekresultaten.",
        timeline: "Maandelijks",
        price: { amount: 1499, plus: true, period: "maand" },
        deliverables: [
          "Contentstrategie op schaal",
          "Geavanceerde technische SEO & CWV",
          "Digital PR & premium linkbuilding",
          "Eigen dashboard gekoppeld aan omzet",
          "Dedicated SEO-specialist",
        ],
        techIds: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Node.js"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Technische SEO", values: ["Audit", true, true] },
      { label: "Content per maand", values: [false, "Ja", "Op schaal"] },
      { label: "Lokale SEO", values: [true, true, true] },
      { label: "Linkbuilding", values: [false, true, "Digital PR"] },
      { label: "Rapportage", values: ["Maandelijks", "Maandelijks", "Live dashboard"] },
      { label: "Dedicated specialist", values: [false, false, true] },
    ],
    roi: {
      lead: "SEO-tarieven hangen af van de competitie in jouw markt en het tempo waarin je wilt groeien. Het rendement is duurzaam: organisch verkeer blijft binnenkomen, ook als je niet betaalt per klik.",
      stats: [
        { target: 24, suffix: "/7", label: "Zichtbaar in Google" },
        { target: 3, suffix: "×", label: "Meer organisch verkeer" },
        { target: 100, suffix: "%", label: "Duurzaam, geen kosten per klik" },
      ],
    },
    faq: [
      {
        question: "Wat zijn de SEO-tarieven in Nederland?",
        answer:
          "SEO-tarieven in Nederland lopen uiteen. Bij Sarte Global start SEO vanaf €299 per maand voor lokale vindbaarheid, oplopend voor competitieve, landelijke campagnes. We werken met heldere maandtarieven op basis van jouw markt, doelen en gewenste tempo — zonder lange, onduidelijke contracten.",
      },
      {
        question: "Hoe snel zie ik resultaat van SEO?",
        answer:
          "De eerste verbeteringen zijn vaak binnen enkele weken zichtbaar, maar duurzame groei in rankings bouwt zich op over enkele maanden. SEO is een investering die zich blijft uitbetalen.",
      },
      {
        question: "Werken jullie met vaste contracten?",
        answer:
          "We werken het liefst maandelijks en transparant. Je zit niet vast aan lange verplichtingen; je blijft omdat de resultaten en rapportages voor zich spreken.",
      },
      {
        question: "Wat is het verschil met betaald adverteren?",
        answer:
          "Bij adverteren betaal je per klik en stopt het verkeer zodra het budget op is. SEO bouwt blijvende zichtbaarheid op, waardoor je verkeer ook op lange termijn gratis binnenkomt.",
      },
    ],
    seo: {
      title: "Wat zijn de SEO-tarieven in Nederland?",
      body: "SEO-tarieven in Nederland verschillen flink, en dat is logisch: in een competitieve markt is meer werk nodig om bovenaan te komen dan in een nichebranche. Bij Sarte Global start SEO vanaf €299 per maand voor lokale vindbaarheid en loopt het op vanaf €1.499 per maand voor landelijke autoriteitscampagnes. SEO is geen eenmalige klus, maar doorlopende optimalisatie van techniek, content en autoriteit. Het mooie aan SEO is het rendement op lange termijn: waar je bij adverteren per klik betaalt, blijft organisch verkeer binnenkomen zonder dat je telkens hoeft bij te betalen. We combineren technische SEO, sterke content en heldere rapportages, zodat je precies ziet hoe je investering zich vertaalt naar meer bezoekers en klanten. Vraag vrijblijvend een SEO-voorstel aan.",
    },
  },
  {
    slug: "paid-media",
    name: "Online advertising",
    chipLabel: "Advertising",
    icon: "megaphone",
    projectType: "Online advertising",
    headline:
      "Performance marketing als product: meetbaar, schaalbaar en gericht op rendement.",
    tiers: [
      {
        id: "start",
        name: "Starter",
        tagline: "Een goed ingerichte campagne om te beginnen met adverteren",
        bestFor: "Voor ondernemers die voor het eerst gestructureerd adverteren.",
        timeline: "Maandelijks",
        price: { amount: 299, period: "maand" },
        deliverables: [
          "Eén kanaal (Google of Meta)",
          "Accountstructuur & tracking",
          "Eerste set ad-creatives",
          "Conversie-tracking ingericht",
          "Heldere maandrapportage",
        ],
        techIds: ["Google Ads", "Meta Ads", "GA4"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "Growth",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Doorlopend beheer en optimalisatie voor meer rendement",
        bestFor: "Voor bedrijven die willen opschalen met advertenties.",
        timeline: "Maandelijks",
        price: { amount: 699, period: "maand" },
        deliverables: [
          "Google Ads én Meta Ads beheer",
          "Wekelijkse optimalisatie & A/B-tests",
          "Doorlopende creatieve productie",
          "Server-side tracking & dashboards",
          "Maandelijkse business review",
        ],
        techIds: ["Google Ads", "Meta Ads", "GA4", "Segment"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "maatwerk",
        name: "Scale",
        tagline: "Full-funnel performance marketing op schaal",
        bestFor: "Voor adverteerders met grotere budgetten en meerdere markten.",
        timeline: "Maandelijks",
        price: { amount: 1499, plus: true, period: "maand" },
        deliverables: [
          "Multi-channel funnelstrategie",
          "Creatie-motor tegen ad fatigue",
          "Geavanceerde attributie & data",
          "Dedicated specialist & dashboards",
          "Wekelijkse test- & schaalsprints",
        ],
        techIds: ["Google Ads", "Meta Ads", "GA4", "Looker", "Segment", "Stripe"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Advertentiekanalen", values: ["1 kanaal", "Google + Meta", "Multi-channel"] },
      { label: "Creatieve productie", values: ["Eenmalig", "Doorlopend", "Creatie-motor"] },
      { label: "Optimalisatie", values: ["Opzet", "Wekelijks", "Sprints"] },
      { label: "Tracking", values: ["Basis", "Server-side", "Geavanceerd"] },
      { label: "Rapportage", values: ["Maandelijks", "Maandelijks", "Live dashboard"] },
      { label: "Dedicated specialist", values: [false, false, true] },
    ],
    roi: {
      lead: "De kosten van advertentiebeheer staan los van je advertentiebudget. Het rendement bepaal je samen: met scherpe tracking en optimalisatie verdient elke euro die je investeert zichzelf terug.",
      stats: [
        { target: 2, suffix: " kanalen", label: "Google & Meta" },
        { target: 7, suffix: " dagen", label: "Wekelijkse optimalisatie" },
        { target: 100, suffix: "%", label: "Meetbaar resultaat" },
      ],
    },
    faq: [
      {
        question: "Wat kost Google Ads of online adverteren via een bureau?",
        answer:
          "Houd twee zaken uit elkaar: je advertentiebudget (dat gaat naar Google of Meta) en de kosten voor beheer en creatie. Ons beheer start vanaf €299 per maand en werkt met een offerte op maat, afgestemd op je kanalen, budget en doelen — zonder verborgen kosten.",
      },
      {
        question: "Hoeveel advertentiebudget heb ik nodig?",
        answer:
          "Dat hangt af van je markt en doelen. We adviseren een budget waarmee we genoeg data verzamelen om te optimaliseren, en schalen op zodra campagnes winstgevend draaien.",
      },
      {
        question: "Hoe meten jullie het rendement?",
        answer:
          "Met server-side tracking en heldere dashboards koppelen we advertentie-uitgaven aan daadwerkelijke aanvragen en omzet, zodat je precies ziet wat werkt en wat niet.",
      },
      {
        question: "Maken jullie ook de advertenties zelf?",
        answer:
          "Ja. We produceren doorlopend ad-creatives — statisch, video en UGC — zodat je campagnes vers blijven en ad fatigue voorblijven.",
      },
    ],
    seo: {
      title: "Wat kost Google Ads beheer via een bureau?",
      body: "Bij de kosten van online adverteren is het belangrijk om onderscheid te maken tussen je advertentiebudget en de kosten voor beheer en creatie. Het budget gaat rechtstreeks naar platforms als Google Ads en Meta Ads; daarnaast betaal je voor de strategie, het beheer en de advertenties zelf. Bij Sarte Global start advertentiebeheer vanaf €299 per maand, oplopend vanaf €1.499 per maand voor full-funnel campagnes over meerdere kanalen. Belangrijker dan de kosten is het rendement: met scherpe conversie-tracking, doorlopende optimalisatie en sterke creatives zorgen we dat elke geïnvesteerde euro zoveel mogelijk oplevert. Je ziet via heldere dashboards precies welke campagnes aanvragen en omzet genereren, zodat je budget altijd naar wat werkt gaat. Vraag een vrijblijvend voorstel aan en maak van adverteren een voorspelbare groeimotor.",
    },
  },
  {
    slug: "maintenance",
    name: "Website onderhoud",
    chipLabel: "Onderhoud",
    icon: "wrench",
    projectType: "Website onderhoud",
    headline:
      "Je website snel, veilig en up-to-date houden — zodat jij je volledig op ondernemen kunt richten.",
    tiers: [
      {
        id: "start",
        name: "Essential",
        tagline: "De essentie geregeld: updates, back-ups en veiligheid",
        bestFor: "Voor websites die veilig en up-to-date moeten blijven.",
        timeline: "Maandelijks",
        price: { amount: 79, period: "maand" },
        deliverables: [
          "Maandelijkse software-updates",
          "Dagelijkse back-ups",
          "Beveiligingsmonitoring",
          "Uptime-monitoring 24/7",
          "Kleine tekstwijzigingen (30 min/mnd)",
        ],
        techIds: ["Next.js", "Vercel"],
        ctaLabel: "Start nu",
      },
      {
        id: "professioneel",
        name: "Business",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Onderhoud plus doorlopende kleine verbeteringen",
        bestFor: "Voor groeiende bedrijven die hun site actueel houden.",
        timeline: "Maandelijks",
        price: { amount: 149, period: "maand" },
        deliverables: [
          "Alles uit Essential",
          "2 uur wijzigingen per maand",
          "Prestatie- & snelheidsoptimalisatie",
          "Maandelijkse gezondheidsrapportage",
          "Prioriteit support (binnen 24 uur)",
          "Basis SEO-monitoring",
        ],
        techIds: ["Next.js", "Vercel", "GA4"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "maatwerk",
        name: "Premium",
        tagline: "Een proactieve onderhoudspartner voor je hele platform",
        bestFor: "Voor bedrijven waarvoor de website bedrijfskritisch is.",
        timeline: "Maandelijks",
        price: { amount: 299, period: "maand" },
        deliverables: [
          "Alles uit Business",
          "5 uur ontwikkeling per maand",
          "Proactieve doorontwikkeling & A/B-tests",
          "Dedicated aanspreekpunt",
          "Support-SLA (binnen 4 uur)",
          "Kwartaal-strategiegesprek",
        ],
        techIds: ["Next.js", "Vercel", "GA4", "PostgreSQL"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Updates & back-ups", values: [true, true, true] },
      { label: "Beveiligings- & uptime-monitoring", values: [true, true, true] },
      { label: "Wijzigingen per maand", values: ["30 min", "2 uur", "5 uur"] },
      { label: "Prestatie-optimalisatie", values: [false, true, true] },
      { label: "Support-responstijd", values: ["48 uur", "24 uur", "4 uur (SLA)"] },
      { label: "Doorontwikkeling & strategie", values: [false, "Basis", true] },
    ],
    roi: {
      lead: "Onderhoudskosten zijn een kleine, vaste investering die grote risico's voorkomt. Eén dag downtime of een gehackte site kost vaak meer dan een jaar onderhoud — nog los van de gemiste omzet.",
      stats: [
        { target: 24, suffix: "/7", label: "Monitoring & beveiliging" },
        { target: 99, suffix: "%", label: "Gegarandeerde uptime" },
        { target: 4, prefix: "±", suffix: " uur", label: "Reactietijd (Premium)" },
      ],
    },
    faq: [
      {
        question: "Wat kost website onderhoud per maand?",
        answer:
          "Website onderhoud start bij Sarte Global vanaf €79 per maand. De prijs hangt af van de omvang van je website en hoeveel doorontwikkeling je wilt. We werken met heldere maandpakketten, zodat je nooit voor verrassingen komt te staan en je website altijd snel, veilig en up-to-date blijft.",
      },
      {
        question: "Wat valt er onder onderhoud?",
        answer:
          "Denk aan software-updates, dagelijkse back-ups, beveiligings- en uptime-monitoring, prestatie-optimalisatie en kleine tekst- en beeldwijzigingen. Bij de grotere pakketten komt daar doorontwikkeling bij.",
      },
      {
        question: "Zit ik vast aan een lang contract?",
        answer:
          "Nee. Onze onderhoudspakketten zijn maandelijks opzegbaar. Je blijft omdat je site goed draait, niet omdat een contract je vasthoudt.",
      },
      {
        question: "Wat als mijn website door iemand anders is gebouwd?",
        answer:
          "Ook dan kunnen we vaak het onderhoud overnemen. We doen eerst een korte technische check en bespreken daarna wat mogelijk is.",
      },
    ],
    seo: {
      title: "Wat kost website onderhoud per maand?",
      body: "De kosten van website onderhoud hangen af van de omvang van je website, het platform en de hoeveelheid doorontwikkeling die je wenst. Bij Sarte Global start een onderhoudsabonnement met updates, back-ups en monitoring vanaf €79 per maand, oplopend tot €299 per maand voor een pakket waarin we je site ook doorlopend verbeteren en uitbreiden. Onderhoud lijkt een kostenpost, maar is vooral een verzekering: het voorkomt downtime, beveiligingslekken en omzetverlies. Eén dag dat je website plat ligt of gehackt wordt, kost vaak meer dan een heel jaar onderhoud. Wij houden je website snel, veilig en up-to-date, met monitoring, back-ups en proactieve verbeteringen, zodat jij je volledig op ondernemen kunt richten. Vraag vrijblijvend een voorstel aan.",
    },
  },
  {
    slug: "landing-page-optimization",
    name: "Landingspagina laten maken",
    chipLabel: "Landingspagina",
    icon: "rocket",
    projectType: "Landingspagina",
    headline:
      "Een snelle, conversiegerichte landingspagina die bezoekers omzet in leads en klanten.",
    tiers: [
      {
        id: "start",
        name: "Start",
        tagline: "Eén scherpe landingspagina, klaar voor je campagne",
        bestFor: "Voor een snelle campagne, lancering of aanbieding.",
        timeline: "± 5 werkdagen",
        price: { amount: null },
        deliverables: [
          "Eén conversiegerichte landingspagina",
          "Overtuigende kop- & CTA-structuur",
          "Mobile-first, laadt in seconden",
          "Formulier of directe call-to-action",
          "Basis-tracking van conversies",
        ],
        techIds: ["Next.js", "TypeScript", "Tailwind"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "professioneel",
        name: "Professioneel",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Een landingspagina plus de meetstructuur om te blijven verbeteren",
        bestFor: "Voor adverteerders die meer uit hun ad-budget willen halen.",
        timeline: "± 1–2 weken",
        price: { amount: null },
        deliverables: [
          "Conversie-analyse & copy op maat",
          "A/B-test van koppen en CTA's",
          "Event-tracking via GA4",
          "Koppeling met ads & e-mailtools",
          "Heatmaps voor inzicht in gedrag",
        ],
        techIds: ["Next.js", "TypeScript", "Tailwind", "GA4", "Hotjar"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "maatwerk",
        name: "Maatwerk",
        tagline: "Een set landingspagina's met doorlopende optimalisatie",
        bestFor: "Voor teams die meerdere campagnes en doelgroepen draaien.",
        timeline: "In overleg",
        price: { amount: null },
        deliverables: [
          "Meerdere pagina's per doelgroep",
          "Dynamische content & personalisatie",
          "Doorlopende A/B-testcycli",
          "Server-side tracking & dashboards",
          "Maandelijkse optimalisatierapportage",
        ],
        techIds: ["Next.js", "TypeScript", "Tailwind", "GA4", "Hotjar", "Stripe"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Aantal pagina's", values: ["1", "1–2", "Meerdere"] },
      { label: "Conversie-copy op maat", values: ["Basis", true, true] },
      { label: "A/B-testen", values: [false, true, true] },
      { label: "Heatmaps & gedragsinzicht", values: [false, true, true] },
      { label: "Personalisatie", values: [false, false, true] },
      { label: "Doorlopende optimalisatie", values: [false, "Op aanvraag", true] },
    ],
    roi: {
      lead: "Een landingspagina kost relatief weinig, maar bepaalt het rendement van je hele campagne. Een paar procent meer conversie betekent direct meer leads uit hetzelfde advertentiebudget.",
      stats: [
        { target: 5, prefix: "±", suffix: " dgn", label: "Tot live" },
        { target: 95, suffix: "+", label: "PageSpeed mobiel" },
        { target: 2, suffix: "×", label: "Focus op één doel" },
      ],
    },
    faq: [
      {
        question: "Wat kost een landingspagina laten maken?",
        answer:
          "De kosten van een landingspagina hangen af van de hoeveelheid maatwerk in copy, design en tracking, en of je A/B-tests en koppelingen wilt. Je ontvangt vooraf een offerte op maat met een duidelijke scope.",
      },
      {
        question: "Waarom een aparte landingspagina in plaats van mijn homepage?",
        answer:
          "Een landingspagina is gebouwd rond één doel en één doelgroep, zonder afleiding. Daardoor converteert hij vrijwel altijd beter dan een algemene homepage voor betaald verkeer.",
      },
      {
        question: "Kunnen jullie de pagina koppelen aan mijn advertenties?",
        answer:
          "Ja. We koppelen de pagina aan Google Ads, Meta Ads en je e-mailtool, met correcte conversie-tracking zodat je precies ziet wat een campagne oplevert.",
      },
      {
        question: "Testen jullie ook varianten?",
        answer:
          "In het Professioneel- en Maatwerk-pakket testen we koppen, layouts en CTA's, zodat we elke maand meer resultaat uit hetzelfde verkeer halen.",
      },
    ],
    seo: {
      title: "Wat kost een landingspagina laten maken?",
      body: "Wat een landingspagina laten maken kost, hangt vooral af van het doel en de mate van optimalisatie. Een eenvoudige campagnepagina is sneller klaar dan een set gepersonaliseerde pagina's met A/B-tests en server-side tracking. Bij Sarte Global krijg je een transparante offerte op maat, zodat je nooit voor onnodige extra's betaalt. Een goede landingspagina verdient zichzelf snel terug: omdat hij rond één doel is gebouwd, haal je meer leads en klanten uit precies hetzelfde advertentiebudget. We combineren overtuigende copy, een mobile-first ontwerp en heldere conversie-tracking, zodat je zwart op wit ziet wat je campagne oplevert. Vraag vrijblijvend een voorstel aan en zet jouw volgende campagne sterker neer.",
    },
  },
  {
    slug: "mobile-development",
    name: "Mobiele apps",
    chipLabel: "Mobiel",
    icon: "mobile",
    projectType: "Mobiele app",
    headline:
      "Native en cross-platform apps die op elk toestel premium aanvoelen — van prototype tot App Store.",
    tiers: [
      {
        id: "start",
        name: "Start",
        tagline: "Een MVP-app om je idee snel te valideren",
        bestFor: "Voor founders die hun concept willen testen bij echte gebruikers.",
        timeline: "± 3–4 weken",
        price: { amount: null },
        deliverables: [
          "Cross-platform MVP (iOS + Android)",
          "Kernfunctionaliteit van je idee",
          "Klikbaar prototype vooraf",
          "Publicatie in beide app stores",
          "Basis-analytics ingebouwd",
        ],
        techIds: ["React Native", "TypeScript"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "professioneel",
        name: "Professioneel",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Een volwaardige app klaar voor echte gebruikers en groei",
        bestFor: "Voor bedrijven die met een serieuze app naar de markt gaan.",
        timeline: "± 6–10 weken",
        price: { amount: null },
        deliverables: [
          "Volledige cross-platform app",
          "Backend, accounts & pushnotificaties",
          "OTA-updates & releasebeheer",
          "Crash- & performance-monitoring",
          "Onboarding-flow op maat",
        ],
        techIds: ["React Native", "Flutter", "TypeScript", "Node.js"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "maatwerk",
        name: "Maatwerk",
        tagline: "Native diepgang en integraties zonder compromissen",
        bestFor: "Voor apps waar performance of hardware-interactie cruciaal is.",
        timeline: "In overleg",
        price: { amount: null },
        deliverables: [
          "Native modules (Swift / Kotlin)",
          "Complexe integraties & API's",
          "Offline-modus & realtime sync",
          "Schaalbare cloud-infrastructuur",
          "Doorlopend onderhoud & support-SLA",
        ],
        techIds: ["React Native", "Flutter", "Swift", "Kotlin", "TypeScript"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Platforms", values: ["iOS + Android", "iOS + Android", "+ Native"] },
      { label: "Backend & accounts", values: [false, true, true] },
      { label: "Pushnotificaties", values: [false, true, true] },
      { label: "App Store-publicatie", values: [true, true, true] },
      { label: "Offline & realtime sync", values: [false, "Op aanvraag", true] },
      { label: "Onderhoud & support", values: ["Op aanvraag", "Op aanvraag", "SLA"] },
    ],
    roi: {
      lead: "Wat een app laten maken kost, hangt af van de functionaliteit en of je native diepgang nodig hebt. Een goed gebouwde app verlaagt je kosten op termijn door één gedeelde codebase voor beide platforms.",
      stats: [
        { target: 2, suffix: " stores", label: "iOS én Android" },
        { target: 1, prefix: "±", suffix: " codebase", label: "Cross-platform" },
        { target: 99, suffix: "%", label: "Crash-vrije sessies" },
      ],
    },
    faq: [
      {
        question: "Wat is de prijs van een app laten maken?",
        answer:
          "De prijs van een app laten maken hangt af van de functionaliteit, het aantal schermen, de benodigde backend en of je native modules nodig hebt. Na een korte strategiesessie ontvang je een offerte op maat met een duidelijke scope.",
      },
      {
        question: "Bouwen jullie native of cross-platform?",
        answer:
          "Standaard bouwen we cross-platform met React Native of Flutter: één codebase voor iOS én Android, sneller live en voordeliger in onderhoud. Waar performance of hardware het vereist, gaan we native met Swift of Kotlin.",
      },
      {
        question: "Regelen jullie ook de publicatie in de app stores?",
        answer:
          "Ja. We verzorgen de volledige publicatie in de App Store en Google Play, inclusief de juiste assets, en begeleiden de gefaseerde uitrol.",
      },
      {
        question: "Kan ik later functies toevoegen?",
        answer:
          "Zeker. We bouwen apps modulair op, zodat je na de lancering eenvoudig nieuwe functies kunt toevoegen op basis van gebruikersfeedback.",
      },
    ],
    seo: {
      title: "Wat is de prijs van een app laten maken?",
      body: "De prijs van een app laten maken is sterk afhankelijk van wat de app moet kunnen. Een MVP om je idee te valideren vraagt minder dan een volwaardige app met accounts, pushnotificaties, een backend en native integraties. Daarom werkt Sarte Global niet met standaard prijslijsten, maar met een transparante offerte op maat die aansluit op jouw doelen en budget. Door standaard cross-platform te bouwen met één gedeelde codebase, houd je de kosten van ontwikkeling én onderhoud beheersbaar, terwijl je app op zowel iOS als Android premium aanvoelt. We begeleiden het hele traject, van het eerste klikbare prototype tot een vijfsterren-lancering in de app stores. Vraag een vrijblijvende offerte aan en breng jouw app-idee tot leven.",
    },
  },
  {
    slug: "ai-automation",
    name: "AI & automatisering",
    chipLabel: "AI",
    icon: "cpu",
    projectType: "AI & automatisering",
    headline:
      "AI-oplossingen en automatiseringen die echt waarde toevoegen — geleverd als product, niet als demo.",
    tiers: [
      {
        id: "start",
        name: "Start",
        tagline: "Een werkend AI-prototype op jouw eigen data",
        bestFor: "Voor bedrijven die de waarde van AI willen aantonen.",
        timeline: "± 1–2 weken",
        price: { amount: null },
        deliverables: [
          "AI-prototype op je eigen data",
          "Eén concrete use-case",
          "Slimme chatbot of zoekfunctie",
          "Demo & haalbaarheidsadvies",
          "Helder vervolgplan",
        ],
        techIds: ["Python", "OpenAI"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "professioneel",
        name: "Professioneel",
        badge: "Meest gekozen",
        highlighted: true,
        tagline: "Een AI-oplossing die productie aankan en tijd bespaart",
        bestFor: "Voor teams die handmatig werk willen automatiseren.",
        timeline: "± 3–6 weken",
        price: { amount: null },
        deliverables: [
          "Productieklare LLM-toepassing",
          "Workflow-automatisering (serverless)",
          "Koppeling met jouw systemen & data",
          "Evaluaties & guardrails ingebouwd",
          "Dashboard voor kosten & kwaliteit",
        ],
        techIds: ["Python", "OpenAI", "LangChain", "Node.js"],
        ctaLabel: "Vraag offerte aan",
      },
      {
        id: "maatwerk",
        name: "Maatwerk",
        tagline: "Maatwerk modellen en AI-infrastructuur op schaal",
        bestFor: "Voor organisaties met eigen data en hoge eisen.",
        timeline: "In overleg",
        price: { amount: null },
        deliverables: [
          "Fine-tuned modellen op jouw data",
          "RAG-architectuur & vector-search",
          "Monitoring, evals & regressietests",
          "Schaalbare, veilige infrastructuur",
          "Doorlopende doorontwikkeling",
        ],
        techIds: ["Python", "OpenAI", "LangChain", "TensorFlow", "PyTorch", "Node.js"],
        ctaLabel: "Plan een gesprek",
      },
    ],
    comparison: [
      { label: "Use-cases", values: ["1", "Meerdere", "Onbeperkt"] },
      { label: "Productieklaar", values: [false, true, true] },
      { label: "Koppeling met eigen data", values: ["Demo", true, true] },
      { label: "Evaluaties & guardrails", values: [false, true, true] },
      { label: "Maatwerk modellen / RAG", values: [false, false, true] },
      { label: "Monitoring & onderhoud", values: [false, "Dashboard", "Volledig"] },
    ],
    roi: {
      lead: "AI-projecten verschillen in prijs naar gelang de complexiteit en datakwaliteit. Het rendement zit in tijdwinst: elk handmatig proces dat je automatiseert, bespaart elke maand opnieuw uren werk.",
      stats: [
        { target: 24, suffix: "/7", label: "Automatisch aan het werk" },
        { target: 1, prefix: "±", suffix: " sprint", label: "Tot werkend prototype" },
        { target: 10, suffix: "+", label: "Uur per week besparing" },
      ],
    },
    faq: [
      {
        question: "Wat kost een AI-oplossing of automatisering?",
        answer:
          "De kosten hangen af van de complexiteit van de use-case, de kwaliteit van je data en of je een prototype of een productieklare oplossing wilt. We starten graag klein met een prototype en schalen op wat bewezen waarde levert — altijd met een offerte op maat.",
      },
      {
        question: "Wat kan een AI automation bedrijf voor mij doen?",
        answer:
          "Als AI automation bedrijf bouwen we slimme zoekfuncties, chatbots, documentverwerking en workflow-automatiseringen die handmatig werk vervangen. We leveren een werkend product, geen vrijblijvende demo.",
      },
      {
        question: "Is mijn bedrijfsdata veilig?",
        answer:
          "Ja. We bouwen met evaluaties, guardrails en een veilige infrastructuur, zodat je AI met vertrouwen in productie kunt zetten en je data beschermd blijft.",
      },
      {
        question: "Hoe weet ik of AI voor mij waarde heeft?",
        answer:
          "Daar begint elk traject mee: we zoeken de processen waar AI écht tijd of geld bespaart — en die waar het juist niet loont. Zo investeer je alleen waar het rendeert.",
      },
    ],
    seo: {
      title: "Wat kost AI & automatisering voor je bedrijf?",
      body: "De kosten van AI en automatisering laten zich niet vooraf in één bedrag vatten, omdat ze afhangen van de use-case, je data en de mate van maatwerk. Als AI automation bedrijf werkt Sarte Global daarom stap voor stap: we beginnen met een prototype op jouw eigen data, tonen de waarde aan en schalen vervolgens op wat werkt — altijd met een transparante offerte op maat. Het rendement van AI zit in structurele tijdwinst. Elk handmatig proces dat we automatiseren, of het nu om klantvragen, documentverwerking of interne workflows gaat, bespaart elke maand opnieuw uren werk. We leveren geen losse demo, maar een productieklare oplossing met evaluaties, guardrails en monitoring. Vraag vrijblijvend een voorstel aan en ontdek waar AI voor jou het verschil maakt.",
    },
  },
] as const satisfies readonly ServicePricing[];

/** Lookup helper: returns the pricing config for a slug, or the first service. */
export function getServicePricing(slug?: string): ServicePricing {
  if (slug) {
    const match = SERVICE_PRICING.find((item) => item.slug === slug);
    if (match) return match;
  }
  return SERVICE_PRICING[0];
}
