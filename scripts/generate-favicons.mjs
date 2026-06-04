/**
 * Favicon suite generator for Sarte Global.
 *
 * Source: public/images/logo-fivicon.png — the official company mark
 *         (gold SG-globe monogram on a transparent background, 2000x1722).
 * Output: public/favicon/* plus root-level favicon.ico & apple-touch-icon.png
 *         for fixed-path discovery by browsers/crawlers.
 *
 * Zero external dependencies: uses `sharp` (bundled with Next 16) for all raster
 * work and a tiny inline PNG-in-ICO encoder for favicon.ico.
 *
 * Note: no Safari pinned-tab `safari-pinned-tab.svg` is emitted. That asset must
 * be a hand-traceable monochrome vector (needs a raster tracer), and modern Safari
 * falls back to the regular favicon for pinned tabs — which shows the correct mark.
 *
 * Run: node scripts/generate-favicons.mjs
 */
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { mkdir, writeFile, rm } from "node:fs/promises";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");
const OUT = join(PUBLIC, "favicon");

// Brand palette (matches SITE.themeColor and the gold logo mark).
const DARK = "#0D0D0D";
const GOLD = "#C8A848";
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

const SRC = join(PUBLIC, "images", "logo-fivicon.png");

/** Trim the transparent margin off the source once and reuse it. */
async function loadTrimmedLogo() {
  // 2000x1722 RGBA source rasterised by sharp — ~4x the largest (512px) icon,
  // so every size stays crisp. trim() removes the transparent border for
  // consistent, predictable framing across all icons.
  return sharp(SRC).ensureAlpha().trim({ threshold: 1 }).toBuffer();
}

/**
 * Compose the logo onto a square (or rect) canvas.
 * @param logo trimmed logo buffer
 * @param w canvas width
 * @param h canvas height
 * @param frac fraction of the *smaller* dimension the logo should occupy
 * @param bg background color (css string) — null = transparent
 */
async function compose(logo, w, h, frac, bg) {
  const inner = Math.round(Math.min(w, h) * frac);
  const resized = await sharp(logo)
    .resize(inner, inner, { fit: "contain", background: TRANSPARENT })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: w,
      height: h,
      channels: 4,
      background: bg ?? TRANSPARENT,
    },
  })
    .composite([{ input: resized, gravity: "centre" }])
    .png()
    .toBuffer();
}

async function writePng(name, buffer) {
  await writeFile(join(OUT, name), buffer);
  console.log("  ✓", name);
}

/** Wrap PNG buffers into a valid multi-image .ico (PNG-in-ICO: Vista+/all modern browsers). */
function pngsToIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4); // image count
  const entries = [];
  const blobs = [];
  let offset = 6 + images.length * 16;
  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width  (0 => 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 => 256)
    entry.writeUInt8(0, 2); // palette colours
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8); // bytes in resource
    entry.writeUInt32LE(offset, 12); // offset to data
    entries.push(entry);
    blobs.push(data);
    offset += data.length;
  }
  return Buffer.concat([header, ...entries, ...blobs]);
}

async function main() {
  // Fresh output dir (also clears the now-obsolete old-logo safari-pinned-tab.svg).
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const logo = await loadTrimmedLogo();

  console.log("Standard favicons (gold on transparent):");
  const sizes = {};
  for (const s of [16, 32, 48, 64]) {
    const buf = await compose(logo, s, s, 0.92, null);
    sizes[s] = buf;
    await writePng(`favicon-${s}x${s}.png`, buf);
  }

  console.log("favicon.ico (16/32/48):");
  const ico = pngsToIco([16, 32, 48].map((size) => ({ size, data: sizes[size] })));
  await writeFile(join(OUT, "favicon.ico"), ico);
  await writeFile(join(PUBLIC, "favicon.ico"), ico); // root fallback for /favicon.ico
  console.log("  ✓ favicon.ico (+ root copy)");

  console.log("Apple touch icons (gold on dark, opaque):");
  for (const s of [152, 167, 180]) {
    await writePng(`apple-touch-icon-${s}x${s}.png`, await compose(logo, s, s, 0.78, DARK));
  }
  const appleDefault = await compose(logo, 180, 180, 0.78, DARK);
  await writePng("apple-touch-icon.png", appleDefault);
  await writeFile(join(PUBLIC, "apple-touch-icon.png"), appleDefault); // root fallback (iOS auto-discovery)
  console.log("  ✓ apple-touch-icon.png root copy");

  console.log("Android / PWA icons:");
  await writePng("android-chrome-192x192.png", await compose(logo, 192, 192, 0.8, DARK));
  await writePng("android-chrome-512x512.png", await compose(logo, 512, 512, 0.8, DARK));
  // Maskable: logo kept within the inner 80% safe zone (use ~0.66 for margin).
  await writePng("maskable-icon-192x192.png", await compose(logo, 192, 192, 0.66, DARK));
  await writePng("maskable-icon-512x512.png", await compose(logo, 512, 512, 0.66, DARK));

  console.log("Microsoft tiles (gold on transparent, shown on TileColor):");
  await writePng("mstile-70x70.png", await compose(logo, 70, 70, 0.7, null));
  await writePng("mstile-144x144.png", await compose(logo, 144, 144, 0.7, null));
  await writePng("mstile-150x150.png", await compose(logo, 150, 150, 0.7, null));
  await writePng("mstile-310x150.png", await compose(logo, 310, 150, 0.7, null));
  await writePng("mstile-310x310.png", await compose(logo, 310, 310, 0.7, null));

  console.log("\nDone. Brand colors -> dark:", DARK, "gold:", GOLD);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
