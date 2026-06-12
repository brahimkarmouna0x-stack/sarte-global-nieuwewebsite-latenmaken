// One-off asset optimizer. Run with `node scripts/optimize-assets.mjs`.
// Shrinks oversized source images so the Next.js image optimizer has a light,
// correctly-sized source to work from (and the repo stops carrying multi-MB art).
//
//  - company-img: a 1536x1024 photo wrongly stored as a 2.2 MB PNG. We emit two
//    files from it: company-img.webp (1200px, used by the on-page hero <Image>)
//    and an optimized 1200x800 company-img.png re-written in place (kept as PNG
//    because it is the Open Graph / JSON-LD social-share image referenced across
//    many routes, and social crawlers want PNG/JPEG, not WebP).
//  - logo-site:   a 2500x589 logo (with transparency) -> resized to 600px wide
//    (4x its 150px display) and re-compressed as a quantized PNG. Kept as .png
//    so the `?v=` cache-busting path and its dedicated cache header still apply.
import { readFile, writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const img = (p) => path.join(root, "public", "images", p);

const kb = (n) => (n / 1024).toFixed(1) + " KB";
async function size(p) {
  try {
    return (await stat(p)).size;
  } catch {
    return 0;
  }
}

async function run() {
  // company-img.png (photo) -> company-img.webp (on-page) + optimized .png (OG)
  {
    const src = img("company-img.png");
    const before = await size(src);
    const input = await readFile(src);

    const webp = await sharp(input)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();
    await writeFile(img("company-img.webp"), webp);

    const png = await sharp(input)
      .resize({ width: 1200, height: 800, fit: "cover", withoutEnlargement: true })
      .png({ palette: true, quality: 82, compressionLevel: 9, effort: 10 })
      .toBuffer();
    await writeFile(src, png);

    console.log(
      `company-img: ${kb(before)} (png) -> ${kb(webp.length)} (webp, on-page) + ${kb(png.length)} (png, OG)`,
    );
  }

  // logo-site.png -> resized, quantized png (overwrite in place)
  {
    const src = img("logo-site.png");
    const before = await size(src);
    const input = await readFile(src);
    const buf = await sharp(input)
      .resize({ width: 600, withoutEnlargement: true })
      .png({ palette: true, quality: 90, compressionLevel: 9, effort: 10 })
      .toBuffer();
    await writeFile(src, buf);
    console.log(`logo-site:  ${kb(before)} -> ${kb(buf.length)} (png)`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
