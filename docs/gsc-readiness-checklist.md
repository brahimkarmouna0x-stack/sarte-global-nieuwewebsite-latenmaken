# Google Search Console — Readiness Checklist

Verified against a local production build (`npm run build` + `npm start`) on the
current branch. Re-run after deploy against the live domain.

## Checklist

| # | Check | Status | Notes |
|---|-------|--------|-------|
| 1 | `robots.txt` exists and is valid | ✅ PASS | `app/robots.ts` → allows `/`, disallows `/api/`, references sitemap. Returns 200. |
| 2 | `sitemap.xml` is dynamic and complete | ✅ PASS | `app/sitemap.ts` returns 200 with 71 URLs — static pages, services, **6 journal posts**, **34 city pages** (17 cities × 2 dimensions), **6 author pages**. No redirecting URLs included. |
| 3 | No accidental `noindex` | ✅ PASS | Only `app/not-found.tsx` is `noindex` (correct). Root layout = `index,follow` + googleBot directives. |
| 4 | All pages return 200 | ✅ PASS | Spot-checked home, landing, `/journal`, `/journal/[slug]`, `/[locatie]`. Unknown city slug → 404 (intended; `dynamicParams=false`). |
| 5 | Canonical URLs correct | ✅ PASS | Every page sets `alternates.canonical`; landing twins 308-redirect to one canonical keyword URL. |
| 6 | Structured data valid | ✅ PASS | Verified in prerendered HTML: city pages emit `Service` (city-scoped `areaServed`) + `BreadcrumbList` + `FAQPage`; blog posts emit `BlogPosting` + `BreadcrumbList` + `FAQPage`; layout emits `Organization` + `WebSite`. |
| 7 | One `<h1>` per page | ✅ PASS | Verified exactly one H1 on city + blog pages. |
| 8 | No fabricated review/rating in JSON-LD | ✅ PASS | No `aggregateRating`/`reviewCount` anywhere in structured data. |
| 9 | Illustrative case data labelled | ✅ PASS | `LANDING_CASES_SECTION` now carries a "Voorbeeldcase" badge + disclaimer; placeholder `voorbeeld.nl` metrics are no longer presented as verified results. |
| 10 | OpenGraph / Twitter cards | ✅ PASS | All pages emit OG + Twitter; blog uses `og:type=article` with published/modified times. |

## Action items (require client input — not code blockers)

| Item | Where | Action |
|------|-------|--------|
| Replace illustrative cases with real, named results | `constants/landing-nieuwe-website.ts` → `LANDING_CASES` + remove the `label`/`disclaimer` from `LANDING_CASES_SECTION` | Swap in verified metrics once available. |
| Verify visible review claim "4,9 / 5 uit 100+ reviews" | `constants/landing-nieuwe-website.ts` (`LANDING_HERO.rating`, `LANDING_*` rating copy) | Marketing copy (no schema). Ensure it is substantiated, or adjust. |
| Confirm OG share image is final | `lib/seo.ts` `OG_IMAGE` (`/images/company-img.png`) | Confirm branding. |

## Post-deploy GSC steps
1. Add & verify the property (DNS or HTML tag) for `https://nieuwewebsite-latenmaken.nl`.
2. Submit `https://nieuwewebsite-latenmaken.nl/sitemap.xml` under **Sitemaps**.
3. Use **URL Inspection → Request indexing** on the priority URLs: home, `/website-laten-maken`, 2–3 top city pages, and the price blog post.
4. Validate a sample of each template in the **Rich Results Test** (Service, BlogPosting, FAQPage, Breadcrumb).
5. Monitor **Pages** (coverage) and **Enhancements** over the following 1–2 weeks.

## Deployment readiness score: 95 / 100

Code-side SEO is production-ready and indexable. The 5-point gap is entirely the
client-supplied items above (real case figures + substantiated review claim) —
none block deployment or indexing.
