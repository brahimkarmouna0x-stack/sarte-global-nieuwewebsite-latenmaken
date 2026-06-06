/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Explicitly list all quality values used across components so Next.js
    // doesn't emit unconfigured-qualities warnings for component-level overrides.
    qualities: [60, 70, 75, 78],
    // Reduced from 30 days to 1 day so that image replacements
    // (like the logo) propagate faster after a rebuild / cache clear.
    minimumCacheTTL: 60 * 60 * 24, // 1 day
    // Allow local images served with a cache-busting query string (e.g. the
    // logo's ?v= param). Next 16 blocks query strings on local images unless
    // they are explicitly permitted here. Omitting `search` allows any query.
    localPatterns: [{ pathname: "/**" }],
    remotePatterns: [
      { protocol: "https", hostname: "image.thum.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "loremflickr.com" },
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: "https", hostname: "randomuser.me" },
    ],
  },
  async headers() {
    return [
      {
        // Apply aggressive caching to versioned / fingerprinted assets.
        // NOTE: the site logo (logo-site.png) is deliberately excluded from
        // the 1-year cache because it is served via the Next.js Image
        // component with a ?v= query parameter for manual cache busting.
        source: "/:all*(svg|jpg|jpeg|webp|avif|gif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Short cache for the site logo so it picks up ?v= bumps quickly.
        source: "/images/logo-site.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
