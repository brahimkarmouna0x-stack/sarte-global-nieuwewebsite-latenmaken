# Competitor Gap Analysis — "website laten maken" (NL)

Action-oriented gap analysis for Sarte Global / nieuwewebsite-latenmaken.nl against
the top Dutch SERPs for the core terms. **Scope note:** exact ranking positions,
keyword volumes and backlink counts must be pulled from live tools (GSC + Ahrefs/
SEMrush) — they are **not** invented here. This doc gives the method, the gap
*categories* grounded in our actual codebase, and a prioritised action plan.

## Target SERPs
- `website laten maken` · `professionele website laten maken` · `nieuwe website laten maken`
- `webdesign bureau` · `webdesigner [stad]`
- `website bouwer` · `website laten bouwen`
- `webshop laten maken` · `wordpress website laten maken`

## Competitor archetypes (verify against the live SERP)
1. **National web agencies** — broad service bureaus with large content libraries,
   named case studies, and many referring domains.
2. **DIY / template platforms** — (one.com, Strato, Wix-type) ranking on volume and
   brand; weak on bespoke/premium intent — our differentiation opportunity.
3. **Local/regional studios** — strong Google Business Profile + local citations per
   city; the direct competitor for our programmatic city pages.
4. **Marketplaces / lead-gen** — (Sortlist, offerte-portalen) capturing commercial
   intent via aggregation; a backlink + listing opportunity for us.

## How to run this properly (live data)
1. **GSC** → Performance → Queries: export where we already impress but rank #5–20
   (striking-distance) — fastest wins.
2. **Ahrefs/SEMrush** → Content Gap: enter 3–5 ranking competitors → keywords they
   rank for and we don't.
3. **Backlinks** → Referring Domains for each competitor; filter for repeatable
   sources (directories, partners, press, guest posts).
4. **SERP features** → note People-Also-Ask, FAQ rich results, and review stars to
   target with schema/content.

---

## Gap analysis by category

### 1. Keyword gaps
**Where we're strong:** 10 keyword landing pages, 17 cities × 2 dimensions (website +
webdesign) = 34 local pages, and a 4-cluster blog strategy. We own the core
commercial + local intent.

**Likely gaps to fill (confirm in Content Gap report):**
| Gap | Evidence / where to add |
|-----|-------------------------|
| Informational top-of-funnel ("hoe", "wat kost", "stappenplan", "vs") | Largely planned in [content-map-100-topics.md](content-map-100-topics.md) — execute the ⭐ rows |
| Branch/segment intent ("website voor [branche]", "website voor ZZP") | Add a 3rd programmatic dimension reusing `constants/local-businesses.ts` (60+ types) |
| `webdesigner [stad]` long-tail | Now partly covered by the new `webdesign-[stad]` dimension |
| Comparison terms ("WordPress vs Next.js", "WooCommerce vs Shopify") | Content map #30, #90 — high commercial value |

### 2. Content gaps
- Competitors with topical authority publish consistently and have **named case
  studies**. Our biggest content gap is **real, quantified cases** (currently a
  disclaimed "Voorbeeldcase") and **publishing cadence** (6 posts vs. competitors'
  50–200+). → Execute the content map at 2–4 quality posts/month; replace the
  illustrative case as soon as real data exists.
- **Author expertise** is now addressed: posts attribute to real team members with
  `/team/[slug]` Person profiles (E-E-A-T).

### 3. Backlink gaps
We control on-page; off-page is the largest external gap. **No fabricated numbers** —
pull referring domains per competitor, then pursue the repeatable sources:
| Tactic | Why it works for us |
|--------|---------------------|
| Agency directories / marketplaces (Sortlist, Clutch, DesignRush, offerte-portalen) | Competitors rank partly via these listings; low-effort citations |
| Local citations / NAP consistency | Supports the city pages; note we are online-only/national (no street address) — use national business directories, not map-pin-only ones |
| Digital PR / data posts | The price + "why bureausites fail" angles are linkable; pitch to NL ondernemers media |
| Partner & supplier links | Hosting, payment (iDEAL/Stripe), tooling partners |
| Guest articles in NL MKB/ondernemers blogs | Authorship by named team members strengthens E-E-A-T of the links |

### 4. Schema gaps
**Where we're ahead:** Organization + ProfessionalService, WebSite, Service (with
city-scoped `areaServed`), BlogPosting, FAQPage, BreadcrumbList, Offer/price, and now
Person (authors). Many local competitors emit far less.

| Schema | Status | Note |
|--------|--------|------|
| Organization / ProfessionalService | ✅ | Single `@id` node, referenced everywhere |
| Service + Offer (price) | ✅ | Per landing + city page |
| FAQPage / BreadcrumbList | ✅ | All landing/city/blog pages |
| BlogPosting + Person (author) | ✅ | Author linked by `@id` to `/team/[slug]` |
| **Review / AggregateRating** | ⛔ Deliberately omitted | Only add with **verified** reviews — never fabricate (current policy) |
| **LocalBusiness** | ⛔ Deliberately omitted | No physical address (online/national); ProfessionalService is the correct type |
| **HowTo** | ○ Opportunity | The `website-laten-maken-stappenplan` post is an ideal HowTo candidate |
| **VideoObject** | ○ Opportunity | Add if/when case or explainer video exists |

### 5. Technical & UX gaps
This is a **competitive advantage**, not a gap: Core Web Vitals/perf and accessibility
are at 100 (mobile + desktop), CLS 0 — most local competitors are not. Keep it; cite
it in sales copy and the SEO landing page.

---

## Prioritised action plan
| # | Action | Impact | Effort | Depends on |
|---|--------|--------|--------|-----------|
| 1 | Replace "Voorbeeldcase" with 1–3 real, quantified case studies | High | Med | Client data |
| 2 | Execute ⭐ content-map posts (2–4/mo), real authors | High | Med | — |
| 3 | List in agency directories / marketplaces (backlinks) | High | Low | Client sign-off |
| 4 | Pull GSC striking-distance queries; optimise those pages | High | Low | GSC access |
| 5 | Add `HowTo` schema to the stappenplan post | Med | Low | — |
| 6 | Add 3rd programmatic dimension (`website-voor-[branche]`) | Med | Low | — |
| 7 | Substantiate or adjust the visible "4,9/5" review claim | Med (trust) | Low | Client data |
| 8 | Digital-PR the price / "bureausites" angles for links | Med | Med | — |

## What needs live data (cannot be done from code alone)
- Exact competitor ranking positions, keyword volumes, and the Content Gap keyword list.
- Referring-domain lists per competitor (for the backlink plan).
- Striking-distance queries (GSC, post-launch).

Re-run this analysis with Ahrefs/SEMrush + GSC after the site has 4–8 weeks of live
impressions for concrete, prioritised targets.
