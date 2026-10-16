# 04 — Asset inventory and page mapping

**Machine-readable mapping:** [`data/asset-usage.csv`](data/asset-usage.csv) has one row per asset × page × section. Columns: source URL, visibility, usage type, alt text, local path, origin.

## 1. Where the assets are

| Location | Contents |
|---|---|
| Project workspace before this audit | **Empty.** No assets had been downloaded and there was no existing code. |
| `source-assets/uploads/2025/…` | **All 65 Rasa uploads** from the WordPress media library (original full-size files), downloaded 2026-10-16. Paths mirror `wp-content/uploads/`. |
| `source-assets/uploads/2023/…` | The **8 theme-demo files** that are visibly used on the real pages (textures, decorative ginkgo art, lotus mark, one photo, one round image, header pattern). |
| `source-assets/theme/fonts/edensor.otf` | Display font file. |
| `source-assets/icons-inline-svg/` | 5 line icons extracted from inline SVG markup. |
| `docs/source-audit/screenshots/` | Reference captures of the live site (not production assets). |

All downloads succeeded (76 files, ~23 MB, plus 2 offset images and 5 SVGs). The originals were only read; nothing on the live site was modified.

The media library holds **409 items** (REST API `/wp-json/wp/v2/media`): 342 from 2023 (Ashtanga theme demo import), 65 from 2025 (Rasa), and 2 plugin files (an Elementor screenshot and a Qi Addons placeholder). Only 2025 files and the 8 listed 2023 files appear on visible parts of the real pages.

## 2. Brand assets

| Asset | File | Size | Use | Notes |
|---|---|---|---|---|
| Logo (primary) | `uploads/2025/05/4.png` | 1563×1563 PNG, transparent | Header (all variants), 68px high | Sand/gold #948463 wordmark “RASA” + “UBUD YOGA COLIVING”. **No SVG/vector source available.** Large transparent padding |
| Site icon | `uploads/2025/05/cropped-4.png` + `cropped-4-32x32/180x180/192x192/270x270.png` | 512² and variants | favicon, apple-touch-icon, MS tile | — |
| Logo draft A (unused) | `uploads/2025/03/Black-And-White-Minimalist-Typography-Personal-Logo.png` | 1563² | none | Gold gradient circle, “RASA / UBUD COLIVING” |
| Logo draft B (unused) | `uploads/2025/03/the-16th-annual-ascot.png`, `…-1-1.png` | 3375², 844² | none | White “RASA / YOGA COLIVING” lettering |
| Display font | `theme/fonts/edensor.otf` | 242 KB | all Edensor headlines | **Licence unverified** (“Edensor Free”, FactoryType) |
| Line icons | `icons-inline-svg/icon-33675883.svg` (Yoga + Movement), `icon-15df7dcb.svg` (Soulful Workshops), `icon-fa2a8051.svg` (Community Living), `icon-e5fe53ca.svg` (Host Your Own Event), `icon-87f5a945.svg` (lotus above Timetable / Events schedule) | 42–58px | Home pillars, section markers | Stroke #AEA17E, 1px. Theme-supplied artwork |
| Lotus mark (PNG) | `uploads/2023/04/testimonials-img1.png` | 53×48 | About and Book a Room intro | Theme demo asset |

## 3. Video

| Video | URL | Page | Ownership |
|---|---|---|---|
| Home hero background | `https://youtu.be/ESDOoJyjQr4` | Home block 1 | Owner's channel “Rasa Ubud Yoga and Coliving” (oEmbed verified) |
| About hero background | `https://youtu.be/tc9c3HtYPSk` | About block 1 | Same channel |

**No local video files exist.** The rebuild should get MP4/WebM masters from the owner, or keep the YouTube embeds. Vimeo links on hidden blocks (`vimeo.com/220274260`, `367061765`, `826018424`, `ondemand/asy/827040565`) are theme-demo videos and must not be reused.

## 4. Photography by page (visible usage)

Filenames are under `source-assets/uploads/`. “WA-” abbreviates `WhatsApp-Image-`.

### Home
| File | Section | Subject |
|---|---|---|
| `2025/06/Home.png` (800×916) | Intro (arch mask) | Woman with tea on a rattan chair |
| `2025/06/WA-2025-06-12-at-19.57.06_b3add91e.jpg` | Image pair (hidden on mobile) | Couple drinking coconuts poolside |
| `2023/04/main-home-img-2.jpg` (885×455) | Image pair (hidden on mobile) | **Theme demo** soft-focus botanical |
| `2025/06/WA-2025-06-13-at-13.33.39_e5e2bb5b.jpg` | “On-site Shala” CSS background | Shala interior |
| `2023/04/main-home-offset-img-2.png` | Intro decorative ginkgo (desktop) | **Theme demo** illustration; configured URL hot-links `ashtanga.qodeinteractive.com` |

### About Us
| File | Section | Subject |
|---|---|---|
| `2025/06/WA-2025-06-12-at-20.09.17_c60966e4.jpg` | Gallery slider | Woman reading on a rattan chair |
| `2025/06/WA-2025-06-12-at-20.09.17_dc00706e.jpg` | Gallery slider | Couple working on a laptop (coworking) |
| `2025/06/WA-2025-06-12-at-20.09.18_0500ca6e.jpg` | Gallery slider | Yoga class close-up |
| `2025/06/WA-2025-06-13-at-09.03.49_0c9dde8b.jpg` (800²) | Living Space (circle) | Bedroom |
| `2025/06/1-3.png`, `2025/06/2-2.png` | Our Classes stacked images | Shala class; seated prayer pose |

### Book a Room
| File | Section | Subject |
|---|---|---|
| `2025/06/WA-2025-06-12-at-20.11.48_ba444616.jpg` | Hero CSS background | Bedroom with balcony and rice-field view |
| `2025/06/WA-2025-06-12-at-20.14.02_4e71524b.jpg` → `…20.15.21_ae413fef.jpg` (5 files) | Rooms slider “Room 1”–“Room 5” | Bedrooms |
| `2025/06/WA-2025-06-12-at-20.16.53_9e461e01.jpg`, `…20.17.00_72e7cd5b.jpg`, `…20.17.07_f4f5b9db.jpg` | Perks carousel | Singing bowl; Pilates balls; downward-dog class |

### Book a Class
| File | Section | Subject |
|---|---|---|
| `2025/06/1.png`–`6.png` (650² each), `WA-2025-06-13-at-06.04.19.jpeg` (961²), `IMG_6528_jpg-4-scaled.jpg` (served as 650×650 crop) | Masonry (desktop) / carousel (mobile) | Shala details: steps with flowers, singing bowl, cork blocks, rolled mats, classes |
| `2025/06/WA-2025-06-12-at-20.20.41.jpeg` | Classes slider: Ashtanga Inspired | alt “Ashtanga Inspired” |
| `2025/06/WA-2025-06-12-at-20.21.20.jpeg` | Power Yoga | alt “Power Yoga” |
| `2025/06/WA-2025-06-12-at-20.21.54.jpeg` | Yin & Somatics | alt “Yin & Somatics” |
| `2025/06/WA-2025-06-12-at-20.19.09-1.jpeg` | Rasa Vinyasa Flow | alt “Rasa Vinyasa Flow” |
| `2025/06/WA-2025-06-12-at-20.23.00.jpeg` | Soulful Ceremonies & Workshops | alt “Soulful Ceremonies & Workshops” (Balinese offering ceremony) |
| `2023/05/h3-textual-img1.png` (104²) | “Host Your Own Event” inline round image | **Theme demo** photo |
| `2023/04/main-home-img-3.png` | Ginkgo decoration (desktop) | **Theme demo** illustration; configured URL hot-links the vendor domain |

### Events
| File | Section | Subject |
|---|---|---|
| `2025/06/WA-2025-06-20-at-06.48.43.jpeg`, `…06.48.44.jpeg`, `…06.48.44-1.jpeg`, `…06.48.45-1.jpeg`, `…06.48.46.jpeg`, `…06.48.46-1.jpeg`, `2025/06/WA-2025-06-21-at-10.01.23.jpeg` | Masonry (desktop) / carousel (mobile) | Community event photos (group classes, embrace, healing session with flower mandala) |
| `2023/05/h3-textual-img1.png` | Host showcase | **Theme demo** |

### Global textures
| File | Use |
|---|---|
| `2023/04/light-noise-1920x1200-1.jpg` (2.4 MB) | Light page background tile |
| `2023/04/green-noise-1920x1200-1.jpg` (2.7 MB) | Dark page background tile |
| `2023/05/transparent-header.png` | Header pattern (fully transparent; not needed) |

## 5. Rasa uploads not used on any visible page (still available)

These 26 files can serve as additional original photography. Several are duplicates.

`2025/06/About-Us.jpg` · `WA-2025-06-12-at-19.57.13_e1395c88.jpg` · `WA-…20.02.02_ba334f2e.jpg` · `WA-…20.02.03_49798876.jpg` · `WA-…20.11.48_ba444616-1.jpg` (re-upload/variant of the Book a Room hero; not byte-identical) · `WA-…20.19.07.jpeg` · `WA-…20.19.08.jpeg` · `WA-…20.19.08-1.jpeg` · `WA-…20.19.08-1-1.jpeg` · `WA-…20.19.09.jpeg` · `WA-…20.19.10.jpeg` · `WA-…20.19.11.jpeg` · `WA-…20.19.11-1.jpeg` · `WA-…20.22.28.jpeg` · `WA-2025-06-20-at-06.48.45.jpeg` · `WA-2025-06-20-at-11.04.24.jpeg` · `2025/06/2-2-1.png` (variant of 2-2.png) · `IMG_6528_jpg-scaled.jpg` and `-1` … `-5-scaled.jpg` (six byte-identical 1920×2560 copies of one photo; `-4` is the one used) · plus the two logo drafts in §2.

## 6. Asset quality notes for the rebuild

- **Most photos arrived via WhatsApp** (filenames `WhatsApp-Image-…`). They are 1080–1600px wide and recompressed, which is adequate for web but soft for full-bleed hero use on large screens. Ask the owner for the photographer's originals.
- **Alt text is missing** on almost all images. Only the five class images have meaningful alt text. Theme items carry `alt="a"`, and some galleries use the filename as alt.
- Filenames are not descriptive. Rename them on import (keep a mapping) for maintainability and SEO.
- The noise textures are 2.4–2.7 MB JPEGs. Re-tile them at a smaller size or recreate them as a lightweight CSS/SVG grain.
- **Theme-demo artwork** (the ginkgo illustrations, lotus PNG, round meditation photo `h3-textual-img1.png`, botanical `main-home-img-2.jpg`, and the line icons) comes from the Ashtanga theme demo. Its licence typically covers use within the purchased theme only. **Confirm usage rights before carrying it into a new non-WordPress build, or replace it with owner-supplied artwork.** These are the only items where substitution may be needed.

## 7. Missing / unavailable assets

| Item | Status |
|---|---|
| Vector logo (SVG/AI/PDF) | Not available. Only a PNG |
| Video source files | Not available. YouTube-hosted only |
| Brand guidelines document | None found |
| Room-specific photos mapped to room names | Room 1–5 photos exist but are not labelled with names, features or prices |
| Team / teacher photos and bios | None (team pages are theme demo) |
| Instagram feed / handle | Not available |
| Open Graph / social share image | None configured |
