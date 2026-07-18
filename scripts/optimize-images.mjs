/**
 * Build-time image optimization script.
 * Converts PNG/JPG images to WebP format using Sharp.
 * Run: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs';

const INPUT_DIR = 'public/images';
const QUALITY = 80;

async function optimizeImages() {
  const files = await glob(`${INPUT_DIR}/**/*.{png,jpg,jpeg}`, { nodir: true });

  console.log(`Found ${files.length} images to process...\n`);

  let converted = 0;
  let skipped = 0;
  let totalSaved = 0;

  for (const file of files) {
    const ext = path.extname(file);
    const webpPath = file.replace(ext, '.webp');

    // Skip if WebP already exists and is newer than source
    if (fs.existsSync(webpPath)) {
      const srcStat = fs.statSync(file);
      const webpStat = fs.statSync(webpPath);
      if (webpStat.mtimeMs > srcStat.mtimeMs) {
        skipped++;
        continue;
      }
    }

    try {
      const metadata = await sharp(file).metadata();
      const width = metadata.width || 1920;

      // Generate WebP at original resolution (capped at 1920px)
      await sharp(file)
        .resize({ width: Math.min(width, 1920), withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(webpPath);

      const srcSize = fs.statSync(file).size;
      const webpSize = fs.statSync(webpPath).size;
      const saved = srcSize - webpSize;
      totalSaved += saved;

      console.log(
        `✓ ${path.basename(file)} (${(srcSize / 1024).toFixed(0)} KB) → ${path.basename(webpPath)} (${(webpSize / 1024).toFixed(0)} KB) — saved ${(saved / 1024).toFixed(0)} KB`
      );
      converted++;
    } catch (err) {
      console.error(`✗ Failed: ${file} — ${err.message}`);
    }
  }

  console.log(`\n── Summary ──`);
  console.log(`Converted: ${converted}`);
  console.log(`Skipped (up-to-date): ${skipped}`);
  console.log(`Total saved: ${(totalSaved / (1024 * 1024)).toFixed(1)} MB`);
}

optimizeImages();
