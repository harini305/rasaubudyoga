# 06 — Functionality and technical dependencies

Labels:
- **VERIFIED**: confirmed by request, response or markup.
- **OBSERVED**: present in the UI or markup, but the behaviour behind it was not exercised.
- **UNCONFIRMED**: cannot be determined from outside.

## 1. Current platform (VERIFIED from markup, REST API and asset URLs)

| Layer | Detail |
|---|---|
| CMS | WordPress 7.1.3 (generator meta) |
| Hosting | GoDaddy Managed WordPress (`wpaas` REST namespace, GoDaddy mu-plugins, `wp-site-designer`) |
| Theme | Ashtanga 1.1.1 by Mikado/Qode Interactive (directory `ashtanga22`) + `ashtanga-core2` plugin |
| Page builder | Elementor 3.32.4 + Elementor Pro / PRO Elements 3.29.2 (popups, forms, nested tabs) |
| Other plugins seen | Qi Addons for Elementor 1.9.5, Qi Blocks 1.4.3, Slider Revolution 6.7.19 (only on demo pages), Timetable Responsive Schedule (only on demo/hidden blocks), TablePress 3.2.3 (live timetable), Two-Factor, object cache |
| Inactive | WooCommerce. Its pages exist but `/cart/` prints the raw shortcode `[woocommerce_cart]` |
| Front-end libraries loaded | jQuery + jQuery UI tabs, Swiper (Elementor and Qi 8.4.5), Magnific Popup, GSAP + ScrollTrigger (loaded by the theme), parallax-scroll, hoverIntent, Modernizr, qTip2, carouFredSel |
| Fonts | Lato (Google Fonts), Edensor (self-hosted OTF), Roboto / Roboto Slab (Elementor local Google-fonts), Open Sans (requested, unused) |

None of this needs to carry over. The rebuild is a static/SSR Next.js front end.

## 2. Navigation and routing

| Item | Status | Notes |
|---|---|---|
| 5 page routes + popup | VERIFIED | See 02. No sub-menus. |
| Mobile menu | OBSERVED | Hamburger toggles a dropdown panel under a 70px mobile header |
| Sticky header | OBSERVED | Separate sticky header slides in on scroll down |
| Anchor/hash routing | VERIFIED | The “Contact Us” menu item is an Elementor action hash (`#elementor-action:action=popup:open&settings=…id 12157`), not a URL |
| URL slugs | VERIFIED | “Book a Room” lives at `/yoga-home/` (a theme-demo slug). Decide whether to keep it or 301-redirect it to a clearer slug |
| Archive/date URLs | VERIFIED | `/2023/05/`, `/category/…`, `/tag/…`, `/author/…` resolve (200) and expose demo posts and usernames (`developer`, `evosyah`) |
| 404 handling | VERIFIED | Unknown paths return a 404 |

## 3. Forms

| Form | Fields | Validation | Submission | Status |
|---|---|---|---|---|
| Contact popup (Elementor Pro form `2cdf6e3`, popup post 12157) | Full Name (text), Email (type=email, `required`), Message (**single-line text input**, not a textarea) | Browser-native: Email required + email format. No other client rules visible | AJAX POST to `/wp-admin/admin-ajax.php` (Elementor Pro forms). Recipient, email delivery, spam protection (no reCAPTCHA or honeypot visible) and success message are **UNCONFIRMED**. The form was deliberately **not** submitted during the audit, to avoid sending messages to the business | OBSERVED |

**Rebuild consideration:** a Next.js front end cannot reuse the Elementor endpoint. A replacement is required. Options include a Next.js Route Handler with an email provider, a third-party form service, or a WhatsApp/mailto fallback. The owner must state the destination email address, which is not published anywhere.

## 4. Booking and commerce journeys

All transactions are **off-site**. The website only links out.

| Journey | Entry points | Destination | Status |
|---|---|---|---|
| Book a class / see the class schedule | About “Book a Class”, Book a Class “BOOK A CLASS” and “view more” | `https://www.momoyoga.com/rasa-ubud-yoga/schedule` | VERIFIED 200. The page is JS-rendered (Momoyoga app) |
| See and book events | Events “Click Here For Schedule”, “Event Information” | `https://www.momoyoga.com/rasa-ubud-yoga/events` | VERIFIED 200 |
| Book a room (Airbnb) | Book a Room “Book via AIRBNB” | `https://www.airbnb.co.nz/users/show/194581580` (host profile, NZ domain) | VERIFIED 200 |
| Book a room (direct) | Book a Room “Book via this link” | `https://book-directonline.com/properties/rasaubudyogacoliving?…&currency=IDR&checkInDate=2026-03-07&checkOutDate=2026-03-10` | VERIFIED 200. **Query string pins past dates.** Recommend dropping the date params |
| Ask a question / book an event / hire the venue | Events “Ask a Question”, “Chat with us to book”; Book a Class + Events “Contact Us” | `https://api.whatsapp.com/send/?phone=6281367364684` (no pre-filled text) | VERIFIED 200 |
| Shop / cart / account | none (not linked) | WooCommerce pages, plugin inactive | VERIFIED non-functional |
| Search | none | — | No search UI exists |
| Login / accounts | none on the front end | WordPress login only (`/wp-admin/`) | Not in scope |

## 5. Interactive UI components (to re-implement)

| Component | Where | Behaviour (live) | Status |
|---|---|---|---|
| Background YouTube video | Home, About heroes | Muted autoplay loop, also on mobile (Elementor background video) | OBSERVED |
| Text marquee | Book a Class, Events | Continuous horizontal scroll to the left, Edensor 200px | OBSERVED |
| Scroll parallax headline | Events “Upcoming Events” | Horizontal parallax on scroll | OBSERVED |
| Parallax images | Home image pair | Theme parallax items | OBSERVED |
| Swiper sliders | About gallery, Book a Room rooms (2.5 per view); Book a Class classes (4.5 per view) | loop, autoplay, pagination dots, 105px gap (70px ≤1024px) | VERIFIED (data-options) |
| Image carousels | Book a Room perks; Book a Class and Events galleries (mobile only) | 1 slide, arrows, autoplay 5000ms, speed 500ms, pause on hover/interaction, infinite | VERIFIED (data-settings) |
| Masonry galleries | Book a Class, Events (desktop/tablet only) | 5 columns, tiny gutter, one large square tile | VERIFIED |
| Nested tabs + tables | Book a Class timetable | 5 tabs; horizontal tab scroll on mobile; TablePress tables | VERIFIED |
| Appear animations | Stacked images (About), “Host Your Own Event” showcase | Reveal on scroll | OBSERVED |
| Popup | Contact | slideInDown, closable | OBSERVED |
| Link and nav hover underline | Global | scaleX underline .32s | VERIFIED (CSS) |
| Button hover | Global | Fill/outline swap .2s; textual-button arrow-head rotate | VERIFIED (CSS) |
| Gallery image links | About, Book a Room, Events galleries | Images link to the full-size JPG. Lightbox behaviour UNCONFIRMED (Elementor's global lightbox may intercept) | OBSERVED |
| Back to top | Global | Fixed button | OBSERVED |

## 6. External embeds and third parties

| Service | Usage | Privacy / performance note |
|---|---|---|
| YouTube | 2 background videos | Heavy third-party payload. Consider `youtube-nocookie` or self-hosted MP4 |
| Google Maps (classic embed, no API key) | Contact popup | Iframe query by place name; no exact coordinates or address |
| Google Fonts | Lato (+ unused Open Sans, Roboto) | Self-host via `next/font` in the rebuild |
| Momoyoga | Class/event booking | Off-site |
| Airbnb, book-directonline.com | Room booking | Off-site |
| WhatsApp | Enquiries | Off-site |
| Analytics / tag managers / pixels | **None detected** (no GA, GTM or Meta Pixel in the page source) | Ask the owner whether analytics are wanted |

## 7. SEO and metadata (VERIFIED)

| Item | Current state |
|---|---|
| `<title>` | “Rasa Ubud Yoga Coliving” (home); “{Page} – Rasa Ubud Yoga Coliving” elsewhere |
| Meta description | **None** on any page |
| Open Graph / Twitter cards | **None** |
| Canonical | Present (self-referencing) |
| `lang` | `en-US` |
| Structured data (JSON-LD) | **None** |
| robots.txt | Disallows `/wp-admin/`; points to `/wp-sitemap.xml` |
| Sitemap | WordPress core sitemap, 98 URLs, ~93 of which are demo content |
| Site tagline | Empty |
| Favicon | `cropped-4` set (32/180/192/270) |

## 8. Backend / integration items that need special treatment in a front-end rebuild

1. **Contact form backend**: needs a new handler and a destination address (§3).
2. **Timetable data**: currently hand-edited TablePress tables. Decide whether the rebuild should (a) hard-code it, (b) read from a CMS/JSON file, or (c) link or embed Momoyoga as the single source of truth.
3. **Prices and rates**: hand-entered and inconsistent across pages. Centralise them in one data file.
4. **Event listings**: none on the site; everything is on Momoyoga.
5. **Redirects**: plan 301s for `/yoga-home/` (if renamed) and decide how to handle ~93 indexed demo URLs (410 or 301 to relevant pages).
6. **Image optimisation**: the brief requires disabling Next.js image optimisation (`images.unoptimized: true`). Pre-size and compress assets at build time instead, because many source files are 1–2.7 MB.
7. **Animation stack**: the live site already loads GSAP + ScrollTrigger (through the theme), which matches the planned stack. The marquee, parallax, appear and slider behaviours above are the motion inventory to reinterpret.
