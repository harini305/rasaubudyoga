# 02 — Page and route inventory

Captured 2026-10-16 from https://rasaubudyoga.com/. Discovery used `robots.txt`, `wp-sitemap.xml` (12 sub-sitemaps), the WordPress REST API (`/wp-json/wp/v2/pages`: 28 pages) and the in-page links. **All 98 sitemap URLs returned HTTP 200.** The full list with classification is in [`data/routes.csv`](data/routes.csv).

## 1. Summary of what is real and what is leftover demo

The site was built by importing the full **Ashtanga** theme demo (April–August 2023 content). The owner then customised **only five pages** in March 2025 – April 2026. The REST API “modified” dates confirm this:

| WP page ID | Slug | Last modified | Linked from nav? | Verdict |
|---|---|---|---|---|
| 52 | `/` (main-home) | 2025-10-08 | ✅ Main Home | **REAL** |
| 2087 | `/about-us/` | 2025-09-30 | ✅ About Us | **REAL** (some hidden demo blocks) |
| 269 | `/yoga-home/` | 2026-03-07 | ✅ Book a Room | **REAL** (slug is a theme leftover; many hidden demo blocks) |
| 12118 | `/book-a-class/` | 2026-04-29 | ✅ Book a Class | **REAL** |
| 12499 | `/events/` | 2025-10-08 | ✅ Events | **REAL** |
| popup 12157 | (popup, no URL) | — | ✅ Contact Us | **REAL** (map + contact form) |
| all other 23 pages | e.g. `/contact-us/`, `/retreats/`, `/pricing-plans/`, `/our-team/`, `/classes/`, `/timetable/`, `/studio-home/`, `/studio-shop/`, `/landing/`, `/coming-soon/`, blog layouts, column layouts | 2023-03 to 2023-05 (`sample-page` 2025-03-06 is the WP default) | ❌ orphans | **Theme demo** — do not migrate |
| 20 blog posts, 15 team members, 5 “events” CPT posts, 27 archives | various | 2023 | ❌ | **Theme demo / lorem ipsum** — do not migrate |
| `/cart/`, `/checkout/`, `/my-account/`, `/shop/` | — | 2023-03-22 | ❌ | WooCommerce pages; plugin inactive (`/cart/` prints raw `[woocommerce_cart]`) |

**Rebuild scope = 5 routes plus a global Contact popup/section.** The rest of the sitemap is discoverable by search engines but is not real business content. See [07-gaps-issues-questions.md](07-gaps-issues-questions.md) for the SEO and redirect implications.

### Route counts by sitemap

| Sitemap | URLs | Nature |
|---|---|---|
| posts-post | 20 | demo blog posts (lorem ipsum; 1 is WP “Hello world!”) |
| posts-page | 28 | 5 real + 23 demo/WooCommerce/default |
| posts-team | 15 | fictional instructors (Amy Cline, Ashley Neal, … Sophie, Paul, Anna) |
| posts-events | 5 | demo class posts (Ashtanga, Vinyasa, Hatha, Prenatal, Stretching) |
| taxonomies (category 6, post_tag 9, post_format 5, clients-category 1, team-category 3, testimonials-category 2, events_category 2) | 28 | archives of demo content |
| users | 2 | `/author/developer/`, `/author/evosyah/` (author archives expose usernames) |
| **Total** | **98** | |

---

## 2. Global/shared components

### 2.1 Header (all pages) — VERIFIED

- **Desktop:** a standard header 70px high with 50px side padding. The logo is on the left (68px high) and the menu sits centred (`qodef-header-standard--center`). The header has a transparent background. On Home and Book a Room the content runs behind it, over the hero media.
- **Skin:** dark text by default. Book a Class and Events use the light skin (white text).
- **Sticky behaviour:** a second sticky header (`qodef-header-sticky`, `qodef-appearance--down`) slides down when you scroll. It repeats the same logo and menu.
- **Mobile header:** a separate `#qodef-page-mobile-header` with the logo and a hamburger opener. The menu opens as a full-width dropdown panel below the header: white background, 1px #A7ABA5 bottom border, max-height `calc(100vh - 70px)`, scrollable.
- **Menu (identical on desktop, sticky and mobile):**

| # | Label | Target | Type |
|---|---|---|---|
| 1 | Main Home | `/` | page |
| 2 | About Us | `/about-us/` | page |
| 3 | Book a Room | `/yoga-home/` | page |
| 4 | Book a Class | `/book-a-class/` | page |
| 5 | Events | `/events/` | custom link |
| 6 | Contact Us | opens Elementor popup #12157 | popup trigger (no URL) |

There are no dropdown sub-menus. The active item is underlined.

### 2.2 Contact popup (all pages) — VERIFIED

This is an Elementor Pro popup with a slideInDown entrance and keyboard (a11y) navigation enabled. It contains:

1. an embedded Google Map (`maps.google.com/maps?q=Rasa%20Ubud%20Yoga%20&t=m&z=15&output=embed`)
2. the heading “Contact us”
3. an Elementor Pro form (`form_id 2cdf6e3`) with these fields:
   - Full Name (text, optional)
   - Email (email, **required**)
   - Message (single-line **text input**, optional)
   - the button “Send Message”

The form submits by AJAX to `wp-admin/admin-ajax.php`. Where submissions go (email or database) **cannot be verified** from outside.

### 2.3 Footer — VERIFIED ABSENT

No footer is rendered on any page. The theme CSS still styles a footer with a green-noise background, but it is disabled. There is **no** footer navigation, address, email, phone, social links, copyright or legal links anywhere on the site.

### 2.4 Other global elements

- **Back-to-top button** (`#qodef-back-to-top`): present on all pages.
- **Body texture:** light-noise tile on Home, About and Book a Room; green-noise tile on Book a Class and Events.
- No cookie banner, no newsletter, no search UI and no side area are rendered.
- Page-title bars are disabled on the 5 real pages. They appear only on demo blog pages.

---

## 3. Page-by-page report (the 5 real pages)

Exact text for every block is in [content-verbatim.md](content-verbatim.md). Desktop (1440px) and mobile (390px) captures are in [screenshots/](screenshots/). The full-length captures were taken with a very tall window, so 100vh sections look stretched. The `*-fold-*` files show true above-the-fold views.

Notation: **[V]** = visible on the live site. **[H]** = present in the HTML but hidden on all devices (not seen by visitors). **[H-mobile]**, **[desktop-only]** and similar give partial visibility.

---

### 3.1 Main Home — `/`

- **Purpose:** brand introduction and a hub to the four conversion paths (room, class, events, host an event).
- **HTML title:** “Rasa Ubud Yoga Coliving” (no meta description, no Open Graph tags).
- **Theme:** light (paper texture). The header overlays the hero video.

| # | Section (Elementor id) | Content | Assets | Interactions / notes |
|---|---|---|---|---|
| 1 | Hero video `e35c401` [V] | No text. Full-width section, min-height ≈ viewport, padding 100px | YouTube background video `ESDOoJyjQr4` (“Rasa Ubud Yoga and Coliving”, owner's channel). Plays on mobile (`background_play_on_mobile: yes`) | Autoplaying muted background video. **No headline or CTA in the hero.** |
| 2 | Pillars `7f6843b` [V] | 4 icon + label items: “Yoga + Movement”, “Soulful Workshops”, “Community Living”, “Host Your Own Event” | 4 inline SVG line icons, sand #AEA17E | Static. The labels are not links |
| 3 | Intro `e3fb4aa` [V] | H2 “Your home away from home”; subtitle “In the heart of Ubud”; paragraph; 4 textual arrow CTAs | `2025/06/Home.png` (arch-masked photo, 800×916); decorative ginkgo offset image (desktop) | CTAs: Book a Room → `/yoga-home/`, Book a Class → `/book-a-class/`, Upcoming Event → `/events/`, Host Your Event → `/events/` |
| 4 | Image pair `1b587c7` [H-mobile] | none | `2023/04/main-home-img-2.jpg` (theme demo: soft-focus botanical) + `2025/06/WhatsApp-Image-2025-06-12-at-19.57.06_b3add91e.jpg` (couple with coconuts by pool) | Parallax image items; hidden on mobile |
| 5 | On-site Shala `8c9f892` [V] | H2 “ON - SITE / SHALA” (Edensor, white); 2-line paragraph | CSS background photo `2025/06/WhatsApp-Image-2025-06-13-at-13.33.39_e5e2bb5b.jpg` (shala interior), cover | Text overlaid on the photo |

Responsive: on mobile the pillars become a 2×2 grid; the intro image stacks above the text; the hero title shrinks to 30px.

---

### 3.2 About Us — `/about-us/`

- **Purpose:** brand story, the living space and the class offering.
- **Title:** “About Us – Rasa Ubud Yoga Coliving”. **Theme:** light.

| # | Section | Content | Assets | Notes |
|---|---|---|---|---|
| 1 | Hero video `63dddaf` [V] | none | YouTube background `tc9c3HtYPSk` (owner's channel) | Autoplay background video |
| 2 | Story `e050c72` [V] | The “Rasa means ‘flavours’ or ‘feelings’…” paragraph (Lato 300, 24px, centred) | lotus mark `2023/04/testimonials-img1.png` | Key brand narrative |
| 3 | `60560d7` [H] | Demo: “Healthy body / Calm mind / Spirituality / Relations” + lorem ipsum | — | Do not migrate |
| 4 | Gallery slider `2b08f98` [V] | none | 3 photos `2025/06/WhatsApp-Image-2025-06-12-at-20.09.17_c60966e4.jpg`, `…20.09.17_dc00706e.jpg`, `…20.09.18_0500ca6e.jpg` | Swiper: 2.5 slides per view, loop, autoplay, pagination dots, 105px gap (70px under 1024px) |
| 5 | `69e9db1` [H] | demo client logos | 2023 demo logos | Do not migrate |
| 6 | Living space `ab68a85` [V] | H2 “About Our Living Space”, paragraph, “Book a Room” button → `/yoga-home/` | circle-cropped room photo `2025/06/WhatsApp-Image-2025-06-13-at-09.03.49_0c9dde8b.jpg` | Filled forest button |
| 7 | Our Classes `bf4975a` [V] | H2 “Our Classes”, paragraph, 5-item list (Rasa Vinyasa Flow, Power Yoga, Ashtanga Inspired, Yin & Somatic, Soulful Ceremonies & Workshops), “Book a Class” button → **Momoyoga schedule** (external) | stacked images `2025/06/1-3.png`, `2025/06/2-2.png` | Stacked images with an appear animation. **This button goes to Momoyoga directly, while the nav “Book a Class” goes to `/book-a-class/`.** |
| 8–10 | `b01370e`, `72c2b4e`, `9d150bf` [H] | demo “Contact us” map, marquee “Treat your body * Nurture your spirit * Calm your mind *”, Instagram grid (demo images → instagram.com root) | demo | Do not migrate (the marquee wording could be reused only with owner approval) |

---

### 3.3 Book a Room — `/yoga-home/`

- **Purpose:** coliving accommodation: room features, gallery and booking channels.
- **Title:** “Book a Room – Rasa Ubud Yoga Coliving”. **Theme:** light. The header overlays the hero.

| # | Section | Content | Assets | Notes |
|---|---|---|---|---|
| 1 | Hero `27fe259` [V] | H2 “BOOK / A ROOM” (Edensor, white, 155px → 40px on mobile) | CSS background `2025/06/WhatsApp-Image-2025-06-12-at-20.11.48_ba444616.jpg` (bedroom with rice-field view) | Padding 100px |
| 2 | Intro `0b36e7c` [V] | H6 paragraph “Your Home Away from Home Sanctuary in Ubud: Each of our five thoughtfully designed rooms…” | lotus mark `testimonials-img1.png` | Lists the in-room amenities |
| 3 | `6e34bb8` [V] | “Room Categories” (Edensor 100px) | — | Section heading |
| 4 | Rooms slider `0ebf5b2` [V] | captions “Room 1” … “Room 5” | 5 room photos `2025/06/WhatsApp-Image-2025-06-12-at-20.14.02_4e71524b.jpg`, `…20.14.18_1ad82611.jpg`, `…20.14.47_e2dba7b3.jpg`, `…20.15.08_f25aa012.jpg`, `…20.15.21_ae413fef.jpg` | Swiper 2.5 per view, loop, autoplay, dots; captions below. Images are wrapped in links to the full-size file (whether a lightbox opens is not verified). **No per-room descriptions or prices.** |
| 5 | Perks `c05d939` [V] | “YOGA & WELLNESS PERKS:” + paragraph | carousel of `…20.16.53_9e461e01.jpg` (singing bowl), `…20.17.00_72e7cd5b.jpg` (Pilates balls), `…20.17.07_f4f5b9db.jpg` (downward dog) | Elementor image carousel: 1 slide, arrows, autoplay 5s, pause on hover, infinite. Reversed column order on mobile |
| 6 | Booking options `184d61f` [V] | H2 “Booking Options”; “Secure your stay via Airbnb” + button “Book via AIRBNB”; “Secure your stay via direct bookings” + button “Book via this link” | — | External: Airbnb host profile `airbnb.co.nz/users/show/194581580`; direct-booking engine `book-directonline.com/properties/rasaubudyogacoliving` with **hard-coded past dates (2026-03-07 → 2026-03-10)** and currency IDR |
| 7–17 | `9bc4228` … `a534578` [H] | demo blog list, “Personal and group lessons”, demo timetable (“No events available!”), Vimeo video gallery, “benefits” lorem list, “shop our products”, Healthy body…, demo contact/map, marquee, Instagram grid | 2023 demo images; vimeo.com demo videos | **11 hidden demo blocks.** Do not migrate |

---

### 3.4 Book a Class — `/book-a-class/`

- **Purpose:** class schedule, class descriptions, drop-in and package prices, and hiring out the shala.
- **Title:** “Book a Class – Rasa Ubud Yoga Coliving”. **Theme:** dark (forest texture, light header).

| # | Section | Content | Assets | Notes |
|---|---|---|---|---|
| 1 | Marquee `c6f0f29` [V] | “The shala and the view” | — | Edensor 200px sand, scrolling left continuously |
| 2 | Masonry gallery `1976185` [desktop/tablet] | — | `2025/06/1.png`, `…13-at-06.04.19.jpeg`, `6.png`, `IMG_6528_jpg-4-650x650.jpg`, `3.png`, `5.png`, `4.png` | 5-column masonry with one large square tile |
| 3 | Carousel `29774bb` [mobile only] | — | `1.png`, `6.png`, `5.png`, `4.png`, `3.png`, `2.png`, `…06.04.19.jpeg` | Mobile replacement for #2: 1 slide, arrows, autoplay 5s |
| 4 | `2a26109` [V] | lotus icon + “Timetable” | inline SVG lotus | — |
| 5 | Timetable tabs `36a9532` [V] | Tabs: **All Classes · Vinyasa · Power Yoga · Pilates · Yin Class**, each showing a TablePress weekly grid (Mon–Sun) | — | Elementor nested tabs; horizontal scroll on mobile. Tables are TablePress #1–#5 styled with custom CSS (white text, olive-alpha header, 1px white-alpha grid). **Data is sparse and partly contradictory** (see §4 below and file 07) |
| 6 | Classes slider `5a5b675` [V] | 5 cards with heading and description: Ashtanga Inspired, Power Yoga, Yin & Somatics, Rasa Vinyasa Flow, Soulful Ceremonies & Workshops; button “BOOK A CLASS” → Momoyoga schedule; H2 “*Walk-ins are always welcome!” | `…20.20.41.jpeg` (Ashtanga Inspired), `…20.21.20.jpeg` (Power Yoga), `…20.21.54.jpeg` (Yin & Somatics), `…20.19.09-1.jpeg` (Rasa Vinyasa Flow), `…20.23.00.jpeg` (Soulful Ceremonies) | Swiper 4.5 per view, loop, autoplay. Images carry useful alt text |
| 7 | Prices `1a695ce` [V] | H2 “Prices”, button “view more” → Momoyoga; price cards: Drop-in IDR 150K · mysore drop in IDR 150K · kitas/ktp IDR 90K · 4-class package mysore IDR 520K · 10-class package regular IDR 1.2 Mill | ginkgo offset decoration (desktop) | Cards drawn with 1px white borders. “IDR 1.2 Mill” renders in a fallback sans, not Edensor (visual bug) |
| 8 | Host showcase `c915d19` [V] | “Host / Your / Own / Event” (large display text with inline circular image) | `2023/05/h3-textual-img1.png` (104×104, theme demo photo of a woman meditating) | Appear animation |
| 9 | Hire the shala `7df7ced` [V] | H2 “Events | Workshops | Shoots | Trainings”; props list; button “Contact Us” → WhatsApp; cards: Hourly Rate (minimum 2-hour booking) IDR 100K; Day Rate (12 hours) **IDR 1 Million** | ginkgo offset decoration (desktop) | **Day Rate differs from the Events page (IDR 900K)** |

---

### 3.5 Events — `/events/`

- **Purpose:** event gallery, the events schedule (external) and venue-hire pricing.
- **Title:** “Events – Rasa Ubud Yoga Coliving”. **Theme:** dark (forest texture, light header).

| # | Section | Content | Assets | Notes |
|---|---|---|---|---|
| 1 | Marquee `0996215` [V] | “JOIN OUR EVENTS AT RASA” | — | Edensor 200px sand, scrolling |
| 2 | Masonry gallery `50967bf` [desktop/tablet] | — | 7 photos `2025/06/WhatsApp-Image-2025-06-20-at-06.48.46.jpeg`, `…06.48.44-1.jpeg`, `…06.48.44.jpeg`, `…06-21-at-10.01.23.jpeg`, `…06.48.43.jpeg`, `…06.48.46-1.jpeg`, `…06.48.45-1.jpeg` | Images link to the full-size file |
| 3 | Carousel `c216a6c` [mobile only] | — | same 7 photos | 1 slide, arrows, autoplay 5s |
| 4 | Schedule `2a26109` [V] | lotus icon; H “Events schedule”; button “Click Here For Schedule” → Momoyoga events; “Walk ins always welcome”; button “Ask a Question” → WhatsApp | inline SVG | Sand filled buttons |
| 5 | Host showcase `c915d19` [V] | “Host / Your / Own / Event” | `2023/05/h3-textual-img1.png` | same component as Book a Class |
| 6 | Hire the shala `81b37a3` [V] | same copy as Book a Class #9, but **Day Rate IDR 900K** | (offset image hidden via custom CSS) | Button “Contact Us” → WhatsApp |
| 7 | `b6baa20` [V] | “Upcoming Events” | — | Edensor 200px sand with horizontal scroll-parallax |
| 8 | CTA `7b47ec7` [V] | “View our upcoming events and book your spot now!”; buttons “Event Information” → Momoyoga events, “Chat with us to book” → WhatsApp | — | Outlined buttons overridden to sand fill |

There are **no individual events listed on the site.** All event information lives on Momoyoga.

---

## 4. Orphan pages containing salvageable information

| URL | What is real | What is demo |
|---|---|---|
| `/retreats/` | Image captions: “Room 1: Rasa — Top Floor, Rice Field & Pool View”, “Room 2: Aruna — Top Floor, Rice Field & Pool View”, “Room 3: Lumi — Top Floor, Rice Field & Pool View”, “Room 4: Sari — Bottom Floor, Pool View” | The page title “Retreats”, the testimonial quotes, the photos (2023 demo), the “Next retreat… Peru” block, Vimeo demo video, links to `ashtanga.qodeinteractive.com` |

Room 5 has no name or description anywhere. **Owner confirmation is needed before using these room names.**

Every other orphan page (`/contact-us/` with New York “studio manhattan / new jersey / soho / la” addresses and `ashtanga@example.com`; `/pricing-plans/` with $49–$89 plans; `/our-team/`; `/studio-home/`; `/studio-shop/` with fictional testimonials “Debora Williams”, “Claudia Rocher”; `/retreat-single/` “Peru… $2900”; `/landing/` theme sales page; `/coming-soon/`; blog layouts) is **pure theme demo**. It must not be treated as Rasa content.

---

## 5. Repeated / shared component patterns (for the rebuild)

| Pattern | Appears on |
|---|---|
| Full-bleed background-video hero (YouTube) | Home, About |
| Full-bleed photo hero with giant Edensor title | Book a Room, (Home “On-site Shala” band) |
| Giant scrolling Edensor marquee (sand) | Book a Class, Events |
| Desktop masonry gallery ↔ mobile single-slide carousel | Book a Class, Events |
| Swiper slider (2.5 / 4.5 per view, autoplay, loop, dots) | About gallery, Book a Room rooms, Book a Class classes |
| Lotus icon + uppercase section heading | About, Book a Room, Book a Class, Events |
| “Host Your Own Event” showcase + venue-hire rate cards | Book a Class, Events (identical apart from the Day Rate) |
| 1px-bordered price cards with Edensor numerals | Book a Class (prices), Book a Class + Events (rates) |
| External booking CTAs (Momoyoga, WhatsApp, Airbnb, direct booking) | About, Book a Room, Book a Class, Events |
| Contact (map + form) | Global popup |
