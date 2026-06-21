# Content Map — 100 Blog Topics (Topical Authority Plan)

Planning artifact for the `/journal` blog. **100 article topics** clustered around
the eight pillars below, each mapped to search intent and the money/parent page it
should support. This is a *roadmap*, not generated content — write each post as a
genuine, expert article (see "How to use" below). Premium positioning: we target
*prijs / wat kost / transparant*, **never "goedkoop"**.

See also [seo-keyword-clusters.md](seo-keyword-clusters.md) for the live cluster
strategy and internal-linking map.

## How to use this map
1. Pick a topic, write a real MDX file in `content/journal/<slug>.mdx` (frontmatter
   contract: `lib/blog.ts` → `PostFrontmatter`). It then appears automatically in
   the listing, sitemap, related-posts and JSON-LD.
2. Set `cluster` to one of: `commercial`, `wordpress`, `nextjs`, `seo`, `webdesign`,
   `growth`, `landing`, `ecommerce`, `price`, `brand` (drives related-post grouping).
3. Set a real `author` matching a name in `constants/team.ts` so the post links to
   that author's `/team/[slug]` Person profile (E-E-A-T).
4. **Internal links (required):** every post links *up* to its target/parent page
   and *sideways* to 1–2 posts in the same cluster.
5. **Cadence:** quality over volume. ~2–4 posts/month beats 100 thin posts at once —
   bulk low-value content triggers Google's helpful-content system (the opposite of
   topical authority). Prioritise the ⭐ high-intent rows first.

**Status legend:** ✅ shipped · ⭐ high priority · ○ planned

---

## 1. Website laten maken (core / commercial) — 15

Internal linking: link up to `/website-laten-maken`; price topics → `#pakketten`.

| # | Onderwerp | Intentie | Doelpagina | Status |
|---|-----------|----------|------------|--------|
| 1 | Website laten maken: het complete stappenplan (2026) | Informational | /website-laten-maken | ✅ `website-laten-maken-stappenplan` |
| 2 | Wat kost een website laten maken in 2026? | Commercieel onderzoek | #pakketten | ✅ `wat-kost-een-website-laten-maken` |
| 3 | Website laten maken voor ZZP'ers: waar let je op? | Commercieel | /website-laten-maken | ⭐ |
| 4 | Hoelang duurt het om een website te laten maken? | Informational | /website-laten-maken | ○ |
| 5 | Zelf een website maken of laten maken? Eerlijke afweging | Comparison | /website-laten-maken | ⭐ |
| 6 | Welke info heeft een webdesigner van je nodig? (checklist) | Informational | /contact | ○ |
| 7 | Website laten maken: bureau, freelancer of platform? | Comparison | /website-laten-maken | ⭐ |
| 8 | Een zakelijke website: 9 onmisbare onderdelen | Commercieel | /website-laten-maken | ○ |
| 9 | Website redesign: wanneer is het tijd voor een nieuwe site? | Commercieel | /website-laten-maken | ⭐ |
| 10 | Een meertalige website laten maken: aanpak en valkuilen | Informational | /website-laten-maken | ○ |
| 11 | Website laten maken voor een klein bedrijf | Commercieel | /website-laten-maken | ○ |
| 12 | Wat maakt een website 'professioneel'? 12 kenmerken | Informational | /website-laten-maken | ○ |
| 13 | Wat kost en omvat website onderhoud na livegang? | Commercieel | /website-onderhoud | ○ |
| 14 | Domeinnaam en hosting kiezen voor je nieuwe website | Informational | /website-onderhoud | ○ |
| 15 | De 10 grootste fouten bij een website laten maken | Informational | /website-laten-maken | ⭐ |

## 2. WordPress — 12

Internal linking: link up to `/wordpress-website-laten-maken`; compare → `/nextjs-website-laten-maken`.

| # | Onderwerp | Intentie | Doelpagina | Status |
|---|-----------|----------|------------|--------|
| 16 | WordPress website laten maken: voor wie (niet) geschikt? | Commercieel | /wordpress-website-laten-maken | ⭐ |
| 17 | WordPress of maatwerk (Next.js)? Zo kies je goed | Comparison | /wordpress-website-laten-maken | ✅ `wordpress-of-maatwerk-website` |
| 18 | Hoeveel kost een WordPress website in 2026? | Commercieel | /wordpress-website-laten-maken | ⭐ |
| 19 | WordPress beveiligen: 12 stappen tegen hacks | Informational | /website-onderhoud | ○ |
| 20 | WordPress-pagebuilder vs. maatwerk thema | Comparison | /wordpress-website-laten-maken | ○ |
| 21 | WordPress sneller maken: Core Web Vitals verbeteren | Informational | /seo-optimalisatie | ○ |
| 22 | WordPress onderhoud: updates, back-ups, beveiliging | Commercieel | /website-onderhoud | ○ |
| 23 | Van WordPress naar maatwerk migreren: wanneer en hoe | Comparison | /nextjs-website-laten-maken | ○ |
| 24 | WooCommerce of Shopify op WordPress? | Comparison | /woocommerce-webshop-laten-maken | ○ |
| 25 | Essentiële WordPress-plugins voor een zakelijke site | Informational | /wordpress-website-laten-maken | ○ |
| 26 | WordPress multisite: wanneer is het zinvol? | Informational | /wordpress-website-laten-maken | ○ |
| 27 | WordPress SEO: de complete technische checklist | Informational | /seo-optimalisatie | ⭐ |

## 3. Next.js / maatwerk — 12

Internal linking: link up to `/nextjs-website-laten-maken` & `/webapp-laten-maken`.

| # | Onderwerp | Intentie | Doelpagina | Status |
|---|-----------|----------|------------|--------|
| 28 | Next.js website laten maken: voordelen voor ondernemers | Commercieel | /nextjs-website-laten-maken | ⭐ |
| 29 | Wat is een headless website en wanneer kies je ervoor? | Informational | /nextjs-website-laten-maken | ○ |
| 30 | Next.js vs WordPress: snelheid, SEO en kosten | Comparison | /nextjs-website-laten-maken | ⭐ |
| 31 | Maatwerk website laten maken: wanneer loont het? | Commercieel | /website-laten-maken | ⭐ |
| 32 | React, Next.js en de moderne webstack uitgelegd | Informational | /nextjs-website-laten-maken | ○ |
| 33 | Core Web Vitals: waarom Next.js standaard scoort | Informational | /seo-optimalisatie | ○ |
| 34 | Een webapp laten maken: SaaS, dashboard of portaal? | Commercieel | /webapp-laten-maken | ⭐ |
| 35 | SSR vs static: wat betekent het voor SEO? | Informational | /nextjs-website-laten-maken | ○ |
| 36 | Headless CMS kiezen voor een Next.js-site | Informational | /nextjs-website-laten-maken | ○ |
| 37 | Wat kost een maatwerk website in Next.js? | Commercieel | #pakketten | ○ |
| 38 | API-koppelingen en integraties op je website | Informational | /webapp-laten-maken | ○ |
| 39 | Toekomstvast bouwen: schaalbaarheid en techniek-keuzes | Informational | /nextjs-website-laten-maken | ○ |

## 4. SEO — 14

Internal linking: link up to `/seo-optimalisatie`; lokaal → city pages.

| # | Onderwerp | Intentie | Doelpagina | Status |
|---|-----------|----------|------------|--------|
| 40 | SEO optimalisatie: complete gids voor ondernemers (2026) | Informational | /seo-optimalisatie | ⭐ |
| 41 | Lokale SEO: beter vindbaar in jouw stad en regio | Commercieel | /seo-optimalisatie | ⭐ |
| 42 | Technische SEO checklist: 25 punten | Informational | /seo-optimalisatie | ○ |
| 43 | Zoekwoordenonderzoek voor beginners | Informational | /seo-optimalisatie | ○ |
| 44 | Core Web Vitals verbeteren: LCP, CLS en INP | Informational | /seo-optimalisatie | ○ |
| 45 | Google Business Profile optimaliseren | Informational | /seo-optimalisatie | ○ |
| 46 | Hoe lang duurt SEO voordat je resultaat ziet? | Informational | /seo-optimalisatie | ○ |
| 47 | Contentmarketing: een blog die klanten oplevert | Commercieel | /seo-optimalisatie | ○ |
| 48 | Linkbuilding voor het MKB: kwaliteit boven kwantiteit | Informational | /seo-optimalisatie | ○ |
| 49 | SEO voor webshops: productpagina's die ranken | Commercieel | /webshop-laten-maken | ⭐ |
| 50 | Structured data (schema.org) uitgelegd | Informational | /seo-optimalisatie | ○ |
| 51 | SEO-migratie: zonder rankingverlies naar een nieuwe site | Informational | /seo-optimalisatie | ⭐ |
| 52 | AI en zoeken: vindbaar blijven in AI-overzichten | Informational | /seo-optimalisatie | ⭐ |
| 53 | Wat kost SEO in Nederland? Tarieven en modellen | Commercieel | /seo-optimalisatie | ⭐ |

## 5. Webdesign / UX — 13

Internal linking: link up to `/website-laten-maken`; design-for-conversion → `/landing-page-laten-maken`.

| # | Onderwerp | Intentie | Doelpagina | Status |
|---|-----------|----------|------------|--------|
| 54 | Waarom de meeste bureausites falen | Commercieel | /website-laten-maken | ✅ `waarom-de-meeste-bureausites-falen` |
| 55 | De zeven principes van merkherkenning | Brand | /website-laten-maken | ✅ `zeven-principes-van-merkherkenning` |
| 56 | Webdesign trends 2026 die wél blijven | Informational | /website-laten-maken | ○ |
| 57 | UX-basis: 10 regels voor een gebruiksvriendelijke site | Informational | /website-laten-maken | ○ |
| 58 | Mobile-first design: waarom het niet optioneel is | Informational | /website-laten-maken | ○ |
| 59 | Toegankelijkheid (WCAG): waarom en hoe | Informational | /website-laten-maken | ○ |
| 60 | Kleur, contrast en typografie voor vertrouwen | Informational | /website-laten-maken | ○ |
| 61 | Een sterke homepage: structuur die converteert | Commercieel | /landing-page-laten-maken | ⭐ |
| 62 | Webdesign-psychologie: hoe bezoekers beslissen | Informational | /website-laten-maken | ○ |
| 63 | Designsysteem: consistentie die schaalt | Informational | /webapp-laten-maken | ○ |
| 64 | Microcopy en UX-teksten die werken | Informational | /landing-page-laten-maken | ○ |
| 65 | Beeld en fotografie: kwaliteit zonder snelheidsverlies | Informational | /website-laten-maken | ○ |
| 66 | Van wireframe tot livegang: het ontwerpproces | Informational | /website-laten-maken | ○ |

## 6. Conversie-optimalisatie (CRO / groei) — 12

Internal linking: link up to `/landing-page-laten-maken`; social proof → `/work`.

| # | Onderwerp | Intentie | Doelpagina | Status |
|---|-----------|----------|------------|--------|
| 67 | Ontwerpen voor conversie in 2026 | Informational | /landing-page-laten-maken | ✅ `ontwerpen-voor-conversie-2026` |
| 68 | Conversiepercentage verhogen: waar begin je? | Commercieel | /landing-page-laten-maken | ⭐ |
| 69 | Call-to-actions die klikken opleveren | Informational | /landing-page-laten-maken | ○ |
| 70 | A/B-testen voor het MKB: praktische aanpak | Informational | /landing-page-laten-maken | ○ |
| 71 | Formulieren optimaliseren voor meer aanvragen | Informational | /landing-page-laten-maken | ○ |
| 72 | Social proof: reviews en cases die overtuigen | Commercieel | /work | ⭐ |
| 73 | Snelheid en conversie: de verborgen omzetlek | Informational | /seo-optimalisatie | ○ |
| 74 | Heatmaps en gedragsanalyse begrijpen | Informational | /landing-page-laten-maken | ○ |
| 75 | De checkout optimaliseren: minder afhakers | Commercieel | /webshop-laten-maken | ⭐ |
| 76 | Vertrouwenssignalen op je website | Informational | /website-laten-maken | ○ |
| 77 | Prijscommunicatie: transparantie die verkoopt | Commercieel | #pakketten | ○ |
| 78 | Conversiegericht schrijven: de basis van copywriting | Informational | /landing-page-laten-maken | ○ |

## 7. Landingspagina's — 10

Internal linking: link up to `/landing-page-laten-maken`.

| # | Onderwerp | Intentie | Doelpagina | Status |
|---|-----------|----------|------------|--------|
| 79 | Landing page laten maken: wanneer en waarom | Commercieel | /landing-page-laten-maken | ⭐ |
| 80 | Anatomie van een converterende landingspagina | Informational | /landing-page-laten-maken | ○ |
| 81 | Landingspagina voor Google Ads: best practices | Commercieel | /landing-page-laten-maken | ⭐ |
| 82 | Landingspagina vs homepage: wat is het verschil? | Comparison | /landing-page-laten-maken | ○ |
| 83 | Een productlancering met een landingspagina | Commercieel | /landing-page-laten-maken | ○ |
| 84 | Leadgeneratie: landingspagina's die leads opleveren | Commercieel | /landing-page-laten-maken | ○ |
| 85 | De perfecte boven-de-vouw: eerste indruk telt | Informational | /landing-page-laten-maken | ○ |
| 86 | Landingspagina testen en optimaliseren | Informational | /landing-page-laten-maken | ○ |
| 87 | Bedankpagina's benutten voor meer conversie | Informational | /landing-page-laten-maken | ○ |
| 88 | Wat kost een landingspagina laten maken? | Commercieel | #pakketten | ○ |

## 8. Webshops / e-commerce — 12

Internal linking: link up to `/webshop-laten-maken`, `/woocommerce-webshop-laten-maken`, `/shopify-webshop-laten-maken`.

| # | Onderwerp | Intentie | Doelpagina | Status |
|---|-----------|----------|------------|--------|
| 89 | Webshop laten maken: het complete startersplan | Commercieel | /webshop-laten-maken | ⭐ |
| 90 | WooCommerce of Shopify? De eerlijke vergelijking | Comparison | /woocommerce-webshop-laten-maken | ⭐ |
| 91 | Wat kost een webshop laten maken in 2026? | Commercieel | #pakketten | ⭐ |
| 92 | Productpagina's die verkopen: structuur en copy | Commercieel | /webshop-laten-maken | ○ |
| 93 | Betaalmethoden in Nederland: iDEAL en meer | Informational | /webshop-laten-maken | ○ |
| 94 | Webshop SEO: gevonden worden met je producten | Commercieel | /seo-optimalisatie | ⭐ |
| 95 | Verzending en retouren: beleid dat vertrouwen wekt | Informational | /webshop-laten-maken | ○ |
| 96 | Webshop migreren zonder omzetverlies | Informational | /webshop-laten-maken | ○ |
| 97 | Cross- en upsell: gemiddelde orderwaarde verhogen | Commercieel | /webshop-laten-maken | ○ |
| 98 | Voorraad- en boekhoudkoppelingen voor je shop | Informational | /woocommerce-webshop-laten-maken | ○ |
| 99 | Internationale webshop: meertalig en multi-valuta | Informational | /shopify-webshop-laten-maken | ○ |
| 100 | Webshop onderhoud en beveiliging | Commercieel | /website-onderhoud | ○ |

---

## Summary
- **Shipped:** 6 (#1, #2, #17, #54, #55, #67).
- **Suggested first wave (⭐):** the high-intent commercial/comparison rows — they
  capture buyers and feed the money pages directly.
- **Cluster → `cluster` frontmatter:** Website laten maken → `commercial`/`price`,
  WordPress → `wordpress`, Next.js → `nextjs`, SEO → `seo`, Webdesign → `webdesign`/`brand`,
  CRO → `growth`, Landingspagina's → `landing`, Webshops → `ecommerce`.
