# SEO Keyword Strategy — Sarte Global (nieuwewebsite-latenmaken.nl)

Netherlands / Dutch-language SEO. **Premium positioning** — we never target
"goedkoop". Price intent is captured with *prijs / wat kost / transparante prijzen*
instead. Semantic SEO over keyword stuffing.

## Cluster overview

| # | Cluster | Search intent | Target page(s) | Supporting blog | Internal-link strategy |
|---|---------|---------------|----------------|-----------------|------------------------|
| 1 | **Commercial (core)** | High-intent commercial: ready to hire | `/website-laten-maken`, `/wordpress-website-laten-maken`, `/nextjs-website-laten-maken`, `/webshop-laten-maken` (+ 6 more) | `website-laten-maken-stappenplan`, `wordpress-of-maatwerk-website`, `waarom-de-meeste-bureausites-falen` | Landing pages cross-link via the related-links nav; blog posts link up to the matching landing page |
| 2 | **Location (programmatic)** | Commercial + local: "in mijn stad" | `/website-laten-maken-amsterdam`, `/website-laten-maken-rotterdam`, … (15 cities, scalable to 100+) | — (city pages carry their own city FAQ) | `LandingLocalSeo` block on every landing page links to all city pages; each city page links to its parent service + 3 nearby cities |
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
- **Pattern:** `/{service-prefix}-{city}` e.g. `website-laten-maken-amsterdam`, generated from `constants/locations.ts` (`CITIES` × `LOCATION_SERVICES`).
- **Live now:** 15 cities × 1 service = 15 pages. Each has unique H1, title, meta, intro (city economic angle), 4 city-specific FAQ items, city-narrowed `areaServed` schema, and nearby-city internal links.
- **Scale to 100+:** add cities to `CITIES`, and/or add `{ prefix: "webdesign", … }` / `{ prefix: "webshop-laten-maken", … }` to `LOCATION_SERVICES`. Routes, sitemap and internal links update automatically.
- **Duplicate-content guard:** slug-seeded deterministic variation in `lib/programmatic.ts` selects from intro/title/description/FAQ pools, so no two pages share copy.

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
