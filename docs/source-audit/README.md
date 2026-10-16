# Source audit: rasaubudyoga.com (Phase 1)

This is an evidence-based audit of the existing Rasa Ubud Yoga Coliving website, captured on 2026-10-16. It prepares a frontend rebuild in Next.js (App Router, JavaScript, GSAP/ScrollTrigger). **It contains no implementation.**

## Start here

1. [01-audit-report.md](01-audit-report.md): the executive report covering every required section.
2. [02-page-route-inventory.md](02-page-route-inventory.md): all routes, global components, and a section-by-section breakdown of the 5 real pages.
3. [03-content-preservation-checklist.md](03-content-preservation-checklist.md): business facts and the content to carry over, as checkboxes.
4. [content-verbatim.md](content-verbatim.md): exact text of every block, generated from the live HTML. **Copy from here.**
5. [04-asset-inventory.md](04-asset-inventory.md): logos, photos, video, icons, textures and font, mapped to pages.
6. [05-brand-typography-colors.md](05-brand-typography-colors.md): fonts, type scale, palette, interaction states and motifs.
7. [06-functionality-dependencies.md](06-functionality-dependencies.md): forms, booking journeys, embeds, SEO and the platform.
8. [07-gaps-issues-questions.md](07-gaps-issues-questions.md): limitations, missing assets, conflicts and questions for the owner.

## Data files

| File | Contents |
|---|---|
| [data/routes.csv](data/routes.csv) | All 98 sitemap URLs with HTTP status, classification and recommendation |
| [data/asset-usage.csv](data/asset-usage.csv) | Asset × page × section mapping, with local path and origin |
| [data/brand-tokens.json](data/brand-tokens.json) | Colours, fonts, type scale, shape, motion and layout tokens (verified vs estimate) |

## Screenshots

`screenshots/` holds `{page}-desktop.jpg` (1440 wide) and `{page}-mobile.jpg` (390 wide) for full-length captures, plus `{page}-fold-desktop.jpg` (1440×900) and `{page}-fold-mobile.jpg` (390×844) for above-the-fold views. Page names are home, about-us, book-a-room, book-a-class and events.

The full-length captures used a very tall window, so viewport-height sections look stretched, and background videos render blank in headless Chrome.

## Original assets

Downloaded originals are in [`/source-assets/`](../../source-assets/README.md). Their paths mirror `wp-content/uploads/` on the live site.

## Key facts at a glance

- **Only 5 pages are real:** `/`, `/about-us/`, `/yoga-home/` (Book a Room), `/book-a-class/`, `/events/`, plus a Contact popup. The other ~93 sitemap URLs are leftover theme-demo content.
- **Fonts:** Edensor (display; licence to verify) and Lato (everything else).
- **Colours:** forest `#3E4939`, sand `#AEA17E`, sand-deep `#8D8262`, logo gold `#948463`, paper texture ~`#FCFBFA`.
- **Bookings are all external:** Momoyoga (classes and events), Airbnb and book-directonline (rooms), WhatsApp +62 813 6736 4684 (enquiries).
- There is no footer, no address, no email, no legal pages, no analytics and no meta descriptions.
