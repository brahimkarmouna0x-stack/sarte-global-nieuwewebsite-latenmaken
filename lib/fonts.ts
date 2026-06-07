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
 * Weights: 400, 600, 700, 800. Both normal + italic.
 * Only latin subset.
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
      path: "../fonts/playfair-display-latin-700-italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/playfair-display-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/playfair-display-latin-800-italic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});
