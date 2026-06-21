# SEO Keyword Strategy — Sarte Global (nieuwewebsite-latenmaken.nl)

Netherlands / Dutch-language SEO. **Premium positioning** — we never target
"goedkoop". Price intent is captured with *prijs / wat kost / transparante prijzen*
instead. Semantic SEO over keyword stuffing.

## Cluster overview

| # | Cluster | Search intent | Target page(s) | Supporting blog | Internal-link strategy |
|---|---------|---------------|----------------|-----------------|------------------------|
| 1 | **Commercial (core)** | High-intent commercial: ready to hire | `/website-laten-maken`, `/wordpress-website-laten-maken`, `/nextjs-website-laten-maken`, `/webshop-laten-maken` (+ 6 more) | `website-laten-maken-stappenplan`, `wordpress-of-maatwerk-website`, `waarom-de-meeste-bureausites-falen` | Landing pages cross-link via the related-links nav; blog posts link up to the matching landing page |
| 2 | **Location (programmatic)** | Commercial + local: "in mijn stad" | `/website-laten-maken-amsterdam`, `/webdesign-amsterdam`, … (17 cities × 2 keyword dimensions = 34 pages, scalable to 100+) | — (city pages carry their own city FAQ) | `LandingLocalSeo` block on every landing page links to the website-laten-maken city pages; each city page links to its parent service, 3 nearby cities, and the same city in the other dimension (Webdesign ↔ Website) |
| 3 | **Business type** | Commercial + segment: "voor mijn type bedrijf" | `/webshop-laten-maken`, `/landing-page-laten-maken`; future programmatic dimension from `constants/local-businesses.ts` (60+ types) | future: "website voor ZZP", "website voor [branche]" | Add `{ prefix: "website-voor", ... }` to `LOCATION_SERVICES` to scale; link from services hub |
| 4 | **Price (premium reframe)** | Commercial research: budgeting | `/website-laten-maken#pakketten` (transparent tiers + price JSON-LD) | `wat-kost-een-website-laten-maken` | Price post links to Pakketten + landing; landing FAQ answers price questions |

## Cluster detail

### 1. Commercial (core) — highest priority
- **Primary keywords:** website laten maken, website laten bouwen, professionele website laten maken, webdesign Nederland, maatwerk website.
- **Pages:** the 10 existing keyword landing pages (already shipped, schema + canonicals in place).
- **Blog support (shipped):**
  - `website-laten-maken-stappenplan` — informational → routes to commercial landing.
  - `wordpress-of-maatwerk-website` — comparison/commercial; links to WordPress + Next.js pages.
  - `waarom-de-meeste-bureausites-falen` — trust/commercial.
- **Action:** keep one indexable URL per primary keyword (already enforced via 308 redirects + canonicals).

### 2. Location (programmatic) — scale engine
- **Pattern:** `/{service-prefix}-{city}` e.g. `website-laten-maken-amsterdam`, `webdesign-amsterdam`, generated from `constants/locations.ts` (`CITIES` × `LOCATION_SERVICES`).
- **Live now:** 17 cities × 2 dimensions (`website-laten-maken` + `webdesign`) = 34 pages. Each has unique H1, title, meta, intro (city economic angle), 4 city-specific FAQ items, city-narrowed `areaServed` schema, nearby-city links and a cross-dimension link to the same city.
- **Scale to 100+:** add cities to `CITIES`, and/or add `{ prefix: "webshop-laten-maken", … }` to `LOCATION_SERVICES`. Routes, sitemap and internal links update automatically.
- **Duplicate-content guard:** slug-seeded deterministic variation in `lib/programmatic.ts` selects from intro/title/description/FAQ pools, so no two pages share copy. The `website` and `webdesign` page for the same city differ via a different slug seed **and** a different head term (label/keywords). **Cannibalisation watch:** monitor the paired city pages in GSC; if they compete, narrow one dimension's intent or consolidate.

### 3. Business type
- **Keywords:** website laten maken voor ZZP, website voor kleine bedrijven, website voor [branche] (kapper, restaurant, …), webshop laten maken.
- **Now:** partly covered by `/webshop-laten-maken` + the `LocalBusinesses` section on the homepage (`constants/local-businesses.ts`, 60+ types).
- **Next:** introduce a second programmatic dimension reusing the same engine — `website-voor-zzp`, `website-laten-maken-[branche]`.

### 4. Price (premium reframe)
- **Keywords:** website laten maken prijs, wat kost een website (laten maken), kosten website, betaalbare/transparante website. **Excluded:** goedkoop/goedkope (off-positioning).
- **Page:** Pakketten section with visible tiers + price JSON-LD (already shipped).
- **Blog (shipped):** `wat-kost-een-website-laten-maken` — reframes price as value, links to Pakketten + contact.

## Internal-linking map (summary)
- **Landing → Landing:** related-links nav at the foot of each landing page.
- **Landing → City:** `LandingLocalSeo` block (all city pages) on every landing page.
- **City → Service + Cities:** parent service link + 3 nearby-city links per city page.
- **Blog → Money pages:** every post links to `/website-laten-maken`, `/contact`, or `#pakketten`.
- **Blog → Blog:** related-posts block (same cluster first) on each article.
