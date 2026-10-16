# 01 — Source audit report: rasaubudyoga.com

| | |
|---|---|
| Site | https://rasaubudyoga.com/ (“Rasa Ubud Yoga Coliving”) |
| Audit date | 2026-10-16 |
| Phase | 1 of 2: investigation only. No redesign or implementation. |
| Method | Full sitemap crawl (98 URLs), WordPress REST API (pages + 409 media items), CSS and font analysis, headless Chrome captures at 1440px and 390px, external link checks |

## 1. Website overview and coverage

Rasa is a **yoga studio (“shala”) and coliving guesthouse in Ubud, Bali** with five private rooms. It offers yoga and Pilates classes, ceremonies and workshops, community events, and hire of the shala for events, shoots and trainings. All transactions happen off-site: classes and events on **Momoyoga**, rooms on **Airbnb** or a **direct-booking engine**, and enquiries on **WhatsApp**.

The site runs on **WordPress + Elementor with the premium “Ashtanga” yoga theme** (Qode Interactive), hosted on GoDaddy Managed WordPress. The owner imported the entire theme demo in 2023 and customised **only five pages**. The remaining **~93 sitemap URLs are untouched theme-demo content**: lorem-ipsum blog posts, fictional instructors, New York studio addresses, $ pricing plans, a “Peru retreat”, and inactive WooCommerce pages. They are live and indexable but are not Rasa content.

**Coverage achieved:** every sitemap URL was fetched (all HTTP 200) and classified. The 5 real pages and the global Contact popup were analysed section by section, including hidden blocks, responsive visibility, CSS, fonts and behaviour settings. Screenshots of the real pages are in `screenshots/`.

## 2. Pages and routes

| Route | Nav label | Status |
|---|---|---|
| `/` | Main Home | REAL |
| `/about-us/` | About Us | REAL |
| `/yoga-home/` | Book a Room | REAL (theme slug) |
| `/book-a-class/` | Book a Class | REAL |
| `/events/` | Events | REAL |
| (popup #12157) | Contact Us | REAL: map + contact form |
| 93 other URLs | — | Theme demo, WP default or inactive WooCommerce (see `data/routes.csv`) |

There is **no footer** and there are no legal pages. Details are in [02-page-route-inventory.md](02-page-route-inventory.md).

## 3. Page-by-page section inventory (summary)

- **Home:** YouTube video hero (no text) → 4 pillars with line icons → “Your home away from home / In the heart of Ubud” with an arch photo and 4 arrow CTAs → photo pair (desktop) → “ON - SITE SHALA” photo band.
- **About:** YouTube video hero → “Rasa means ‘flavours’ or ‘feelings’…” story → 3-photo slider → “About Our Living Space” (circle photo, Book a Room) → “Our Classes” (stacked photos, 5 class types, Book a Class → Momoyoga).
- **Book a Room:** photo hero “BOOK A ROOM” → five-room intro with amenities → “Room Categories” slider (Room 1–5) → “Yoga & Wellness Perks” + carousel → “Booking Options” (Airbnb / direct).
- **Book a Class:** marquee “The shala and the view” → shala photo masonry (carousel on mobile) → Timetable (5 tabs, TablePress) → 5 class cards slider + “Walk-ins are always welcome!” → Prices (5 IDR prices) → “Host Your Own Event” → venue-hire rates (IDR 100K/h, IDR 1 Million/day).
- **Events:** marquee “JOIN OUR EVENTS AT RASA” → event photo masonry or carousel → Events schedule (Momoyoga + WhatsApp) → “Host Your Own Event” → venue-hire rates (IDR 100K/h, **IDR 900K**/day) → “Upcoming Events” parallax word + CTAs.

Full detail is in [02](02-page-route-inventory.md). Verbatim text is in [content-verbatim.md](content-verbatim.md).

## 4. Content preservation findings

- The real copy is short and specific: brand story, amenities, five class descriptions, timetable, prices and venue-hire rates, booking CTAs. All of it is captured verbatim and checklisted in [03](03-content-preservation-checklist.md).
- Business facts: WhatsApp **+62 813 6736 4684** · Momoyoga `rasa-ubud-yoga` · Airbnb host 194581580 · direct booking `rasaubudyogacoliving` · YouTube `@RasaUbudYogaColiving`. There is **no published address or email**.
- There are **no testimonials, FAQs, team bios or blog posts** that belong to Rasa. Everything of that kind on the site is theme demo and must not be migrated.
- Content conflicts need owner decisions: the Day Rate (1 Million vs 900K), class naming, and a sparse timetable versus the “daily classes” claim.

## 5. Original assets and local availability

- **65 Rasa uploads** (2025) plus the **8 theme files** visibly in use, the **Edensor font** and **5 line-icon SVGs** are downloaded to `source-assets/` (paths mirror `wp-content/uploads/`). Every asset used visibly on the real pages now has a local copy.
- 49 distinct assets are visibly used: 40 Rasa originals, 8 theme-demo files and 1 font. **26 Rasa uploads are unused** but available, including 2 logo drafts.
- Hero media are **YouTube videos** on the owner's channel. No local video files exist.
- Gaps: no vector logo, WhatsApp-compressed photos, mostly missing alt text, and theme-demo artwork whose reuse rights are unconfirmed.

Details are in [04-asset-inventory.md](04-asset-inventory.md) and [data/asset-usage.csv](data/asset-usage.csv).

## 6. Fonts and typography

- **Edensor** (self-hosted OTF, single weight 400) for big atmospheric display words, marquees, hero titles and price numerals. **The licence needs verifying**: the file is “Edensor Free” by FactoryType.
- **Lato** for everything else: body 15px/1.67; headings uppercase, bold 700, tracked .05em (h1 38 / h2 32 / h3 25 / h4 19 / h5 15 / h6 13px); nav and buttons 13px bold uppercase.
- Roboto appears only through Elementor defaults or mis-set widgets and is not a brand font.

Details are in [05-brand-typography-colors.md](05-brand-typography-colors.md).

## 7. Brand colour palette

| Colour | Hex | Status |
|---|---|---|
| Forest (primary, text, dark-page base) | **#3E4939** | Verified |
| Sand (accent, icons, marquees, buttons on dark) | **#AEA17E** | Verified |
| Sand deep (hover) | **#8D8262** | Verified |
| Logo gold | **#948463** | Verified (pixel) |
| Paper (light texture avg.) | ~#FCFBFA | Estimate |
| Forest texture avg. | ~#3F493A | Estimate |
| Olive overlay | rgba(54,64,44,.8/.4/.2/.1) | Verified |
| Sage grey (rules, inputs) | #A7ABA5 | Verified |
| White | #FFFFFF | Verified |

Signature shapes and motifs: the **leaf-cut button radius `15px 0 15px 0`**, arch and circle image masks, 1px hairline cards, sand line-art icons, ginkgo botanical illustrations, and paper-grain textures. Pages split into light (Home, About, Rooms) and forest-dark (Classes, Events).

## 8. Navigation and interactive behaviour

Six menu items with no dropdowns. “Contact Us” opens a popup. There is a sticky slide-down header and a hamburger dropdown on mobile. Interactive components:

- background videos
- Edensor text marquees
- scroll parallax
- Swiper sliders (2.5 and 4.5 per view, autoplay, loop)
- arrow carousels on mobile
- masonry galleries on desktop
- tabbed timetable tables
- appear animations
- hover underline and button fill swaps
- back-to-top button

See [06-functionality-dependencies.md](06-functionality-dependencies.md).

## 9. Responsive observations

- Elementor breakpoints are 1024px and 767px. The theme grid uses 1440 / 1366 / 1024 / 768 / 680 / 480 and a 1300px content grid.
- Desktop masonry galleries are replaced by single-image carousels on mobile (Book a Class, Events). The Home photo pair is hidden on mobile.
- Hero titles scale from 155px to 30–40px. Ginkgo offset decorations are disabled below 1024px. Timetable tabs scroll horizontally on mobile, and the 8-column tables become very cramped.
- Possible horizontal overflow at 390px was seen in headless captures but is **unverified** (it may be a tool artefact).

## 10. Technical dependencies and integrations

These need replacements or decisions in a Next.js front end:

- the **contact form backend** (Elementor AJAX; recipient unknown; no spam protection)
- the **Google Maps** embed
- **YouTube** background videos
- the **timetable data** (TablePress)
- external booking links (**Momoyoga, Airbnb, book-directonline, WhatsApp**), which carry over as links

There are no analytics, no structured data, and no meta descriptions or OG tags. GSAP + ScrollTrigger are already part of the current theme. Image optimisation must be disabled in Next.js per the brief, so assets need pre-sizing.

## 11. Missing assets, inaccessible pages and unresolved questions

See [07-gaps-issues-questions.md](07-gaps-issues-questions.md). Highlights:

- owner inputs needed: address, email and form recipient, social handles, vector logo, Edensor licence, theme-artwork rights, room details and names, current timetable, the Day Rate conflict
- whether to redirect or retire ~93 indexed demo URLs and the `/yoga-home/` slug
- the contact page format

## 12. Recommended implementation considerations (not a design direction)

1. Scope the rebuild to **5 routes + contact**. Keep a redirect map for `/yoga-home/` and the demo URLs.
2. Put **prices, rates, timetable, class list, room list and booking links in one data module**, so the current inconsistencies cannot recur.
3. Self-host **Lato** (via `next/font`) and **Edensor** (once licensed). Avoid em dashes in Edensor strings.
4. Carry over the brand tokens in `data/brand-tokens.json`, and drop the Elementor default colours.
5. Pre-generate responsive image sizes (because `images.unoptimized: true`). Compress the 2.4–2.7 MB textures.
6. Rebuild the motion inventory (marquee, parallax, reveal, sliders) with GSAP/ScrollTrigger. Respect `prefers-reduced-motion`, and add pause controls for autoplay.
7. Fix accessibility: real alt text, and sufficient contrast for sand buttons (white on #AEA17E is 2.56:1).
8. Add the SEO basics the current site lacks: meta descriptions, OG image, LocalBusiness JSON-LD once the address is confirmed.

## 13. Confirmation

- **No redesign, UI components or application code** were created.
- **No packages were installed.** Existing Python and Chrome were used for read-only analysis.
- **No project configuration** was created or replaced.
- **No files were deleted or overwritten.** The workspace was empty. New files exist only in `docs/source-audit/` and `source-assets/`.
- **No git commits, GitHub pushes or Vercel deployments** were made.
- **Nothing was modified on the live website.** The contact form was not submitted.
