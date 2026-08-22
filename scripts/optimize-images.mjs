/**
 * Bild-Optimierung für public/assets/images/.
 *
 * Rechnet jedes Rasterbild auf max. 1600 px lange Kante herunter und schreibt es
 * als WebP (Qualität 82) neu. Dateinamen werden dabei auf ASCII normalisiert
 * (ä→ae, ö→oe, ü→ue, ß→ss) — Umlaute in URLs sind bei GitHub Pages unnötiges Risiko.
 * SVGs bleiben unangetastet.
 *
 * Idempotent: Eine Datei, die bereits WebP ist, einen ASCII-Namen hat und deren
 * lange Kante ≤ 1600 px ist, wird übersprungen (kein erneutes Encoding, keine
 * schleichende Qualitätsverschlechterung bei wiederholten Läufen).
 *
 * Aufruf: npm run optimize:images
 * Nach dem Lauf die ausgegebenen Maße in src/content/extras.ts nachziehen.
 */
import { readdir, stat, unlink, writeFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import sharp from "sharp";

const DIR = "public/assets/images";
const MAX_EDGE = 1600;
const QUALITY = 82;
const RASTER = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".tif", ".tiff"]);

/** Dateiname auf ASCII normalisieren; alles außer [A-Za-z0-9._-] wird zu "_". */
function asciiName(name) {
  return name
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
    .replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Ue")
    .replace(/ß/g, "ss")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9._-]/g, "_");
}

const files = (await readdir(DIR)).sort();
const results = [];
let converted = 0;
let skipped = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!RASTER.has(ext)) continue;

  const src = join(DIR, file);
  const target = asciiName(`${basename(file, extname(file))}.webp`);
  const dst = join(DIR, target);

  const meta = await sharp(src).metadata();
  const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0);
  const needsRotate = (meta.orientation ?? 1) > 1;

  if (src === dst && ext === ".webp" && longEdge <= MAX_EDGE && !needsRotate) {
    results.push({ file: target, width: meta.width, height: meta.height, bytes: (await stat(src)).size, status: "übersprungen" });
    skipped += 1;
    continue;
  }

  const buf = await sharp(src)
    .rotate() // EXIF-Orientierung anwenden, bevor die Maße festgeschrieben werden
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer();

  if (src !== dst) await unlink(src);
  await writeFile(dst, buf);

  const out = await sharp(dst).metadata();
  results.push({ file: target, width: out.width, height: out.height, bytes: buf.length, status: "neu geschrieben" });
  converted += 1;
}

const total = results.reduce((sum, r) => sum + r.bytes, 0);
const pad = Math.max(...results.map((r) => r.file.length));
for (const r of results) {
  console.log(
    `${r.file.padEnd(pad)}  ${String(r.width).padStart(5)}×${String(r.height).padEnd(5)}  ` +
      `${(r.bytes / 1024).toFixed(0).padStart(5)} KB  ${r.status}`
  );
}
console.log(`\n${converted} neu geschrieben, ${skipped} übersprungen — gesamt ${(total / 1024 / 1024).toFixed(2)} MB`);

const tooBig = results.filter((r) => r.bytes > 400 * 1024);
if (tooBig.length) {
  console.warn(`\nWarnung: über 400 KB — ${tooBig.map((r) => r.file).join(", ")}`);
}
