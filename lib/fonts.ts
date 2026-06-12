import localFont from "next/font/local";

/**
 * DM Sans — body font (sans-serif).
 * Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold).
 * Only latin subset, normal style.
 */
export const dmSans = localFont({
  src: [
    {
      path: "../fonts/dm-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/dm-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/dm-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/dm-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
});

/**
 * Playfair Display — heading / display font (serif).
 *
 * Only the variants the design actually renders are shipped:
 *   - normal: 400, 600, 700, 800 (headings + the 800 pricing-modal term)
 *   - italic: 400, 600 (accent words in headings/pricing)
 * The 700- and 800-italic files were dropped because no rule pairs `italic`
 * with those weights, trimming two unused `.woff2` files from the payload.
 *
 * `preload: false` is deliberate: preloading the display face issues high-
 * priority font requests that compete with the hero image for bandwidth and
 * hurt mobile LCP. The body font stays preloaded; headings self-host and paint
 * immediately via the metric-matched Georgia fallback (`display: "swap"`), then
 * upgrade to Playfair with negligible layout shift.
 */
export const playfair = localFont({
  src: [
    {
      path: "../fonts/playfair-display-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/playfair-display-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/playfair-display-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/playfair-display-latin-600-italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../fonts/playfair-display-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/playfair-display-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
  preload: false,
  fallback: ["Georgia", "serif"],
});
