// Generates web-ready derivatives from the untouched originals in /source-assets.
//
//   npm run images
//
// - Originals are only READ. Nothing in /source-assets is modified.
// - Each photo gets WebP derivatives at several widths (never upscaled) in /public/images.
// - A manifest (src/content/images.generated.json) records intrinsic size + available widths,
//   which <ResponsiveImage> uses to build srcset/sizes. Next's optimiser is disabled
//   (images.unoptimized), so this is the only resizing step.
//
// Only genuine Rasa uploads (2025) are listed here. Theme-demo artwork is deliberately excluded.

import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const SRC = path.join(ROOT, 'source-assets', 'uploads');
const OUT = path.join(ROOT, 'public', 'images');
const MANIFEST = path.join(ROOT, 'src', 'content', 'images.generated.json');
const WIDTHS = [480, 800, 1200, 1600];
const QUALITY = 72;

const WA = (stamp) => `2025/06/WhatsApp-Image-2025-${stamp}`;

// slug → original file (uploads-relative). Slugs are descriptive; the mapping keeps provenance.
const PHOTOS = {
  // Home
  'shala-open-hall': `${WA('06-12-at-19.57.13_e1395c88.jpg')}`,
  'guest-tea-rattan': '2025/06/Home.png',
  'poolside-coconuts': `${WA('06-12-at-19.57.06_b3add91e.jpg')}`,
  'shala-interior': `${WA('06-13-at-13.33.39_e5e2bb5b.jpg')}`,
  // About
  'guest-reading-rattan': `${WA('06-12-at-20.09.17_c60966e4.jpg')}`,
  'coworking-laptop': `${WA('06-12-at-20.09.17_dc00706e.jpg')}`,
  'class-warrior-line': `${WA('06-12-at-20.09.18_0500ca6e.jpg')}`,
  'bedroom-circle': `${WA('06-13-at-09.03.49_0c9dde8b.jpg')}`,
  // Hi-res originals of the About "stacked images" (1-3.png / 2-2.png are small crops of these)
  'class-shala-flow': `${WA('06-12-at-20.02.02_ba334f2e.jpg')}`,
  'seated-prayer': `${WA('06-12-at-20.02.03_49798876.jpg')}`,
  'bedroom-pool-view': '2025/06/About-Us.jpg',
  // Book a Room
  'room-hero-ricefield': `${WA('06-12-at-20.11.48_ba444616.jpg')}`,
  'room-1': `${WA('06-12-at-20.14.02_4e71524b.jpg')}`,
  'room-2': `${WA('06-12-at-20.14.18_1ad82611.jpg')}`,
  'room-3': `${WA('06-12-at-20.14.47_e2dba7b3.jpg')}`,
  'room-4': `${WA('06-12-at-20.15.08_f25aa012.jpg')}`,
  'room-5': `${WA('06-12-at-20.15.21_ae413fef.jpg')}`,
  'perk-singing-bowl': `${WA('06-12-at-20.16.53_9e461e01.jpg')}`,
  'perk-pilates-balls': `${WA('06-12-at-20.17.00_72e7cd5b.jpg')}`,
  'perk-downward-dog': `${WA('06-12-at-20.17.07_f4f5b9db.jpg')}`,
  // Book a Class — shala gallery
  'shala-marigold-steps': '2025/06/1.png',
  'shala-pilates-balls': '2025/06/2.png',
  'shala-singing-bowl': '2025/06/3.png',
  'shala-class-downdog': '2025/06/4.png',
  'shala-class-warrior': '2025/06/5.png',
  'shala-cork-blocks': '2025/06/6.png',
  'shala-rolled-mats': '2025/06/IMG_6528_jpg-4-scaled.jpg',
  'shala-downdog-close': `${WA('06-13-at-06.04.19.jpeg')}`,
  'class-teacher-assist': `${WA('06-12-at-20.22.28.jpeg')}`,
  // Book a Class — class cards (alt text on the live site names these)
  'class-ashtanga-inspired': `${WA('06-12-at-20.20.41.jpeg')}`,
  'class-power-yoga': `${WA('06-12-at-20.21.20.jpeg')}`,
  'class-yin-somatics': `${WA('06-12-at-20.21.54.jpeg')}`,
  'class-rasa-vinyasa': `${WA('06-12-at-20.19.09-1.jpeg')}`,
  'class-soulful-ceremonies': `${WA('06-12-at-20.23.00.jpeg')}`,
  // Events gallery
  'event-group-circle': `${WA('06-20-at-06.48.46.jpeg')}`,
  'event-embrace': `${WA('06-20-at-06.48.44-1.jpeg')}`,
  'event-healing-session': `${WA('06-20-at-06.48.44.jpeg')}`,
  'event-laughter': `${WA('06-21-at-10.01.23.jpeg')}`,
  'event-gathering': `${WA('06-20-at-06.48.43.jpeg')}`,
  'event-group-downdog': `${WA('06-20-at-06.48.46-1.jpeg')}`,
  'event-low-lunge': `${WA('06-20-at-06.48.45-1.jpeg')}`,
};

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function photos() {
  await fs.mkdir(OUT, { recursive: true });
  const manifest = {};
  for (const [slug, rel] of Object.entries(PHOTOS)) {
    const input = path.join(SRC, rel);
    const meta = await sharp(input).metadata();
    const widths = WIDTHS.filter((w) => w < meta.width);
    if (!widths.length || widths.at(-1) < meta.width) widths.push(Math.min(meta.width, WIDTHS.at(-1)));
    const unique = [...new Set(widths)];
    for (const w of unique) {
      const file = path.join(OUT, `${slug}-${w}.webp`);
      if (await exists(file)) continue;
      await sharp(input).rotate().resize({ width: w, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5 }).toFile(file);
    }
    manifest[slug] = { width: meta.width, height: meta.height, widths: unique, source: rel };
    process.stdout.write(`✓ ${slug} (${unique.join(', ')})\n`);
  }
  await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
}

// Logo: the only master is a 1563² PNG with lots of transparent padding. Crop to the ink and
// export a gold (original ink #948463) and a light variant for dark pages. No vector exists.
async function logo() {
  const dir = path.join(ROOT, 'public', 'brand');
  await fs.mkdir(dir, { recursive: true });
  const input = path.join(SRC, '2025/05/4.png');
  const trimmed = await sharp(input).ensureAlpha().trim().png().toBuffer();
  const { width, height } = await sharp(trimmed).metadata();
  const alpha = await sharp(trimmed).extractChannel('alpha').toBuffer();
  const variants = { gold: '#948463', light: '#E4DCC6' };
  for (const [name, hex] of Object.entries(variants)) {
    for (const w of [240, 480]) {
      const h = Math.round((height / width) * w);
      const tinted = await sharp({ create: { width, height, channels: 3, background: hex } })
        .joinChannel(alpha).png().toBuffer();
      await sharp(tinted).resize({ width: w }).webp({ quality: 90, alphaQuality: 100 })
        .toFile(path.join(dir, `logo-${name}-${w}.webp`));
      if (w === 480) process.stdout.write(`✓ logo-${name} ${w}×${h}\n`);
    }
  }
  return { width, height };
}

// Favicons from the existing site icon (cropped-4.png).
async function icons() {
  const appDir = path.join(ROOT, 'src', 'app');
  await fs.copyFile(path.join(SRC, '2025/05/cropped-4.png'), path.join(appDir, 'icon.png'));
  await fs.copyFile(path.join(SRC, '2025/05/cropped-4-180x180.png'), path.join(appDir, 'apple-icon.png'));
}

// Social share image (used only once a production URL is configured).
async function og() {
  const dir = path.join(ROOT, 'public', 'og');
  await fs.mkdir(dir, { recursive: true });
  await sharp(path.join(SRC, PHOTOS['shala-open-hall']))
    .resize({ width: 1200, height: 630, fit: 'cover' })
    .jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(dir, 'rasa-share.jpg'));
}

await photos();
const logoSize = await logo();
await icons();
await og();
console.log('logo intrinsic', logoSize);
