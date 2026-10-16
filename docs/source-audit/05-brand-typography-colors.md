# 05 — Brand identity: typography, colour and visual language

Source: rasaubudyoga.com, captured 2026-10-16. Values are labelled:

- **VERIFIED**: read directly from served CSS, HTML, font files or image pixels.
- **ESTIMATE**: inferred visually or by averaging, and needs confirmation.

The WordPress theme is **Ashtanga v1.1.1** by Mikado/Qode Interactive (`themes/ashtanga22`). The page builder is Elementor 3.32.4 with Elementor Pro (PRO Elements build 3.29.2).

> **Important:** the Elementor “global kit” (`post-7.css`) still holds Elementor's factory defaults: primary `#6EC1E4`, secondary `#54595F`, text `#7A7A7A`, accent `#61CE70`, fonts Roboto and Roboto Slab. These are **not** brand values. They leak into a few places, such as the active tab colour (see §2.4). Do **not** carry them into the rebuild.

---

## 1. Typography

### 1.1 Font families

| Role | Family | Source on live site | Weights used | Status |
|---|---|---|---|---|
| Display / decorative headlines (marquees, hero titles, big section words, prices) | **Edensor** (“Edensor Free”, FactoryType, designer Wahyu Setiya Rahmawan, v1.007) | Self-hosted OTF: `wp-content/themes/ashtanga22/assets/fonts/edensor.otf` (declared `@font-face{font-family:Edensor; font-weight:400}`). Local copy: `source-assets/theme/fonts/edensor.otf` | 400 only (single style) | VERIFIED |
| Headings h1–h6, nav, buttons, body copy, labels | **Lato** | Google Fonts (theme also requests 100–900 + italics) | 300, 400, 500, 600, 700 seen | VERIFIED |
| Elementor fallback / mis-set widgets | Roboto, Roboto Slab | Elementor local Google-font CSS | 400/500/600 | VERIFIED as present; **not a brand font** |
| Requested but unused | Open Sans | Google Fonts request | — | VERIFIED request; no usage found |

**Licensing flag (unresolved):** the embedded licence field of the Edensor file only says “Free”. FactoryType's free versions are commonly limited to personal use. **Confirm the commercial licence before shipping Edensor in the rebuild.** Lato is SIL OFL (free for commercial use).

**Glyph gaps (VERIFIED from the font cmap):** Edensor has no em dash (U+2014) or en dash (U+2013), and 220 mapped glyphs in total. Keep display-font strings to basic Latin.

Edensor is applied in two ways on the live site:

1. Theme “custom font” widgets with inline `font-family: Edensor`.
2. Per-widget custom CSS overrides (`font-family: Edensor!important`) on top of headings that Elementor declares as Roboto, e.g. the hero titles “ON - SITE SHALA” and “BOOK A ROOM”, and the price figures.

### 1.2 Type scale (VERIFIED from theme `main.min.css`, desktop)

| Element | Family | Size / line-height | Weight | Letter-spacing | Transform | Colour |
|---|---|---|---|---|---|---|
| body | Lato | 15px / 1.66667em (25px) | 400 | — | none | #3E4939 |
| h1 | Lato | 38px / 1.21053em | 700 | .05em | uppercase | #3E4939 |
| h2 | Lato | 32px / 1.25em | 700 | .05em | uppercase | #3E4939 |
| h3 | Lato | 25px / 1.52em | 700 | .05em | uppercase | #3E4939 |
| h4 | Lato | 19px / 1.36842em | 700 | .05em | uppercase | #3E4939 |
| h5 | Lato | 15px / 1.4em | 700 | .05em | uppercase | #3E4939 |
| h6 | Lato | 13px / 1.38462em | 700 | .05em | uppercase | #3E4939 |
| Section-title subtitle | Lato | 18px / 1.5em | 400 | — | none | #3E4939 |
| Header nav links | Lato | 13px / 1.38462em | 700 | .05em | uppercase | #3E4939 (white on light-skin pages) |
| Buttons (theme) | Lato | 13px | 700 | .05em | uppercase | — |
| Form inputs | inherit (Lato) | 15px / 25px | inherit | — | — | — |
| Blockquote | Lato | 18px / 1.5em | 400 | — | — | #3E4939 on #FAFAFA |

### 1.3 Page-level display sizes (VERIFIED from page CSS / inline styles)

| Usage | Family | Size / line-height (desktop) | Transform | Colour |
|---|---|---|---|---|
| Text marquees (“The shala and the view”, “JOIN OUR EVENTS AT RASA”) | Edensor | 200px | uppercase | #AEA17E |
| “Upcoming Events” parallax word (Events) | Edensor | 200px / 246px | uppercase | #AEA17E |
| “Room Categories” (Book a Room) | Edensor | 100px / 100px | uppercase | — |
| Hero titles “ON - SITE / SHALA” (Home), “BOOK / A ROOM” | Edensor (override) | 155px desktop → 30px (Home) / 40px (Book a Room) on mobile | uppercase | #FFFFFF |
| “Host Your Own Event” textual showcase | Edensor (theme widget) | large display (ESTIMATE ~100px desktop) | uppercase | #FFFFFF on dark |
| Price figures (“IDR 150K” …) | Edensor (override) | 60px | — | #FFFFFF |
| Price labels (“DROP-IN”, “HOURLY RATE” …) | Lato | 25px | 600 | #FFFFFF |
| Price sub-notes (“minimum 2-hour booking”, “12 hours”) | Roboto | 12px | 600 | #FFFFFF |
| Home pillar labels (“Yoga + Movement” …) | Lato | 15px | 600 | #3E4939 |
| Home “On-site Shala” paragraph | Lato | 17px desktop / 15px mobile, letter-spacing .03em | 400 | #FFFFFF |
| About intro paragraph | Lato | 24px desktop / 15px mobile, line-height 1.3em | 300 | #3E4939 |
| Book a Room intro (h6) | Lato | 20px desktop / 15px mobile | 400 | — |
| Timetable header cells | Lato | 18px | normal | white |

The overall pattern pairs a high-contrast Art-Nouveau-style display serif (Edensor) for big atmospheric words with tracked, uppercase Lato bold for functional headings. Body copy is small (15px) Lato.

---

## 2. Colour palette

### 2.1 Core brand colours

| Token (suggested name) | Value | Where it is used | Status |
|---|---|---|---|
| `forest` (primary) | **#3E4939** | Theme `--qode-main-color`; body text and headings; filled buttons; links; dark-page base | VERIFIED |
| `forest-texture` | `green-noise-1920x1200-1.jpg`, average **#3F493A** | Tiled body background on Book a Class and Events | VERIFIED file; average ESTIMATE |
| `sand` (accent) | **#AEA17E** | All line icons (SVG stroke), marquee text, “Upcoming Events” word, sand buttons on dark pages, inactive timetable tabs, page-loader colour rgb(174,161,126) | VERIFIED |
| `sand-deep` | **#8D8262** | Timetable tab hover | VERIFIED |
| `logo-gold` | **#948463** | Ink colour of the logo PNG (`2025/05/4.png`) | VERIFIED (pixel sample) |
| `paper` | `light-noise-1920x1200-1.jpg`, average **#FCFBFA** | Tiled body background on Home, About, Book a Room | VERIFIED file; average ESTIMATE |
| `white` | #FFFFFF | Text on dark/photo sections, theme base background | VERIFIED |
| `olive-overlay` | **rgba(54, 64, 44, α)** = #36402C at 0.8 / 0.4 / 0.2 / 0.1 | Timetable header (0.8), time column (0.4), row tints | VERIFIED |
| `sage-grey` | **#A7ABA5** | Input underline borders, mobile-menu divider, theme rules | VERIFIED |
| `mist` | #FAFAFA | Blockquote background (theme) | VERIFIED |
| `ink` | #020101 | About “Our Classes” paragraph and list text (near-black) | VERIFIED |
| Hairline on dark | rgba(255,255,255,0.2–0.3) | Timetable grid lines; price-card borders (white 1px) | VERIFIED |

### 2.2 Non-brand values to ignore

`#6EC1E4`, `#54595F`, `#7A7A7A`, `#61CE70`, `#FFBC7D` come from the Elementor default kit. `#32373C` comes from the WordPress core button. `#CB2027`, `#3B5998`, `#00ACED` and similar are theme social-icon colours and are not used visibly.

### 2.3 Light and dark page themes (VERIFIED)

| Page | Body background | Header skin |
|---|---|---|
| Home | light-noise (paper) | default (dark text). Content sits behind the transparent header over the video |
| About Us | light-noise | default |
| Book a Room | light-noise | default. Content sits behind the header over the hero photo |
| Book a Class | **green-noise (forest)** | **light** (white nav text) |
| Events | **green-noise (forest)** | **light** |

### 2.4 Interaction states (VERIFIED from CSS)

| Component | Default | Hover / active |
|---|---|---|
| Filled button (theme) | bg #3E4939, white text, 1px transparent border | bg transparent, text and border #3E4939 |
| Filled button on dark pages | bg #AEA17E (page-level override), white text | as above (theme) |
| Outlined button (Events “Event Information”, “Chat with us to book”) | override: bg #AEA17E, text #3E4939, border #3E4939 | theme: bg #3E4939, white text |
| Textual button (Home CTAs) | text #3E4939 with a thin arrow SVG | text colour → main colour; arrow-head strokes rotate ±10° |
| Text links | #3E4939 | underline grows left→right (scaleX 0→1, .32s cubic-bezier(.31,.29,.05,.96)) |
| Nav link | #3E4939 uppercase | same underline-grow animation; active page is underlined |
| Timetable tabs | inactive bg #AEA17E | hover #8D8262. Active uses Elementor `--e-global-color-accent` (**#61CE70 green**, a leaked default; the screenshot shows the active tab as a slightly deeper sand, so verify in-browser) |
| Inputs | transparent, bottom border 1px #A7ABA5 | colour and border transitions .2s |

---

## 3. Shape, border and motif language (VERIFIED)

- **Leaf-shaped button radius:** `border-radius: 15px 0 15px 0` (top-left and bottom-right rounded only). This is the theme's signature shape. Buttons pad 14px 52px.
- **Arch / dome image mask:** the Home intro photo has a rounded top-left arch (theme single-image layout). About “Living Space” uses a full **circle** crop. The “Host Your Own Event” inline image is circular.
- **Thin 1px line work:** price cards and the timetable use 1px white or white-alpha hairlines. Icons are single-stroke line art in sand #AEA17E (stroke-width 1, round caps/joins).
- **Line-art icons** (5 inline SVGs, saved in `source-assets/icons-inline-svg/`): an organic hexagon ripple (Yoga + Movement), a leaf in overlapping circles (Soulful Workshops), a four-petal cross (Community Living), a lotus/wings form (Host Your Own Event), and a three-petal lotus (above “Timetable” and “Events schedule”). A small sand lotus PNG (`2023/04/testimonials-img1.png`, 53×48) sits above the About and Book a Room intro paragraphs.
- **Botanical decoration:** watercolour-and-line **ginkgo leaf** illustrations (`main-home-offset-img-2.png`, `main-home-img-3.png`) bleed off the section edges on desktop.
- **Paper-grain textures:** subtle noise tiles on both the light and the dark themes. There are no hard flat fills.
- **Shadows:** essentially none. The only one is a text-shadow on the class “Book a Class” button (0 0 10px rgba(0,0,0,.3)).
- **Imagery treatment:** warm, natural-light lifestyle photography (teak wood, rattan, terracotta, rice-field greens, linen whites). People shots are candid. Images are shown unfiltered, with full-bleed background video heroes.

## 4. Logo usage (VERIFIED)

- Active logo: `2025/05/4.png`, a 1563×1563 transparent PNG showing the **“RASA”** wordmark in custom flared serif letterforms with **“UBUD YOGA COLIVING”** spaced small caps beneath. The ink is #948463. The same file serves as the main, dark and light logo variants, and the header displays it at **68px** high.
- Site icon: `2025/05/cropped-4.png` (512×512) with generated 32/180/192/270px variants.
- No SVG or vector logo is available. **Request a vector master from the owner.** The PNG has a large transparent canvas, so crop it for header use.
- Unused logo explorations in the media library (do not use without owner confirmation): a gold gradient-circle mark reading “RASA / UBUD COLIVING” (`2025/03/Black-And-White-Minimalist-Typography-Personal-Logo.png`), and white “RASA / YOGA COLIVING” lettering (`2025/03/the-16th-annual-ascot*.png`).

## 5. Tone and personality (observational)

The site feels calm, earthy, boutique and soulful. Its copy is warm and inclusive (“Come as you are. Leave nourished, soft, and centered.”, “Walk-ins are always welcome!”). It describes Bali and Ubud culturally and community-first (“Rasa means ‘flavours’ or ‘feelings’ in Bahasa Indonesia”). British/Commonwealth spelling is used: travellers, flavours, cosy, centred/centered (mixed), harmonising.

A machine-readable token file is in `data/brand-tokens.json`.
