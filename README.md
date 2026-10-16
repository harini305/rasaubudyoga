# Rasa Ubud Yoga Coliving: frontend rebuild (Phase 2)

Next.js (App Router, JavaScript) rebuild of the five genuine pages of rasaubudyoga.com.
It is grounded in the Phase 1 audit in [`docs/source-audit/`](docs/source-audit/README.md).

> Deployed to Vercel (Hobby) as a fully static site. No custom domain is connected, and the build stays `noindex` until `NEXT_PUBLIC_SITE_URL` is set.

## Run

```bash
npm install
npm run dev        # http://localhost:3000  (shows dev-only "Owner review" flags)
npm run build && npm run start   # production build at http://localhost:3000
npm run images     # regenerate WebP derivatives from source-assets/ (only after adding photos)
```

## Routes (original slugs preserved, trailing slashes kept)

| Route | Page | Theme |
|---|---|---|
| `/` | Main Home | light |
| `/about-us/` | About Us | light |
| `/yoga-home/` | Book a Room | light |
| `/book-a-class/` | Book a Class | forest |
| `/events/` | Events | forest |
| Contact Us | modal dialog from header, menu and footer. `/#contact` deep-links to it | — |
| anything else | branded 404 | light |

## Where things live

| Path | What |
|---|---|
| `src/content/site.js` | Business facts, booking URLs, WhatsApp, nav, film IDs. **Single source of truth** |
| `src/content/pricing.js` | Class prices and venue-hire rates (incl. the isolated Day Rate conflict) |
| `src/content/classes.js` | Class descriptions and the published timetable |
| `src/content/pages.js` | Page copy (verbatim; edited fields keep the original alongside) |
| `src/content/images.generated.json` | Image manifest written by `npm run images` |
| `src/components/` | Reusable UI: header, footer, contact, motion, sections |
| `src/lib/fonts.js` | Font setup. **The Edensor swap point is documented here** |
| `scripts/optimize-images.mjs` | Builds `public/images/*.webp`, logo variants, favicon and share image |
| `docs/source-audit/` | Phase 1 audit. **Read-only; never modified** |
| `source-assets/` | Original downloads (local only, **not in the repo**: unlicensed font + theme-demo art). Needed only to re-run `npm run images` |

## Images

- `next.config.js` sets `images.unoptimized: true` (no Vercel Image Optimization usage).
- 41 genuine Rasa photos → 130 WebP derivatives at 480/800/1200/1600 px (never upscaled), quality 72.
  Total size 5.3 MB, against ~23 MB of originals. A typical hero at 1600 px is ~116 KB.
- `<ResponsiveImage>` emits `srcset`, `sizes`, intrinsic `width`/`height` (no layout shift) and lazy-loads everything except each page's hero.
- The 2.4–2.7 MB theme noise textures are replaced by an inline SVG grain (under 1 KB).

## Owner decisions still open

The UI is built around all of these, so none of them blocks the frontend. In `npm run dev`, a dashed **"Owner review"** note marks each one on the page. These notes never render in production builds.

1. **Day Rate conflict:** IDR 1 Million (Book a Class) vs IDR 900K (Events). Each page shows the value it published. Both values are isolated in `src/content/pricing.js`. Pick one before launch.
2. **"Daily" classes claim:** "daily" was removed from three sentences, because the timetable doesn't show classes every day. The originals are kept in `pages.js`.
3. **Timetable currency:** the published grid is sparse, and Power Yoga has no sessions. The "All Classes" view now includes the Pilates and Yin sessions that the old tab left out.
4. **Contact form backend:** there is no recipient and no endpoint. The form validates but says plainly that nothing was sent, then offers a pre-filled WhatsApp message. To connect it, set `contact.formDeliveryEnabled` and add a handler.
5. **Edensor licence:** not verified, so **Cormorant Garamond** (OFL) stands in. See `src/lib/fonts.js`.
6. **Theme-demo artwork** (ginkgo, lotus PNG, line icons, demo photos): not used. Original SVG botanicals and icons replace them.
7. **Address and map:** none is published, and the old map query was unreliable. No map is shown.
8. **Email and Instagram:** none published, so none is shown. The verified YouTube channel is linked in the footer; please confirm.
9. **Room names and details:** captions are "Room 1–5" as on the live page. Rasa, Aruna, Lumi and Sari exist only on a demo page.
10. **Direct-booking link:** the stale `checkInDate=2026-03-07` parameters were removed. Confirm any preferred defaults.
11. **Production domain:** set `NEXT_PUBLIC_SITE_URL` to switch on canonical URLs, Open Graph, the sitemap, JSON-LD and indexing. Until then, `robots.txt` disallows everything and pages are `noindex`.
12. **Legal pages:** privacy, terms, house rules and cancellation policy don't exist. None were invented.
13. **Redirects:** whether to 301 or 410 the ~93 demo URLs that are still indexed. A list is in `docs/source-audit/data/routes.csv`.
14. **Logo:** a raster only (cropped PNG master). A light-tinted variant is used on forest backgrounds. Please supply a vector logo.
15. **Copy polish** left as published: "smart tv", "working desks ,", "Walk ins" vs "Walk-ins", "ON - SITE", label casing.
