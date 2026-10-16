# 07 — Missing assets, inaccessible pages, issues and unresolved questions

## 1. Audit limitations (what could not be done)

| Limitation | Effect |
|---|---|
| No WordPress admin access | Form recipients, popup triggers, unpublished drafts, plugin settings and the original Elementor JSON could not be inspected. All findings come from public HTML, CSS, REST and sitemaps. |
| The contact form was not submitted | Done on purpose, so no real message reached the business. Submission behaviour and the success/error messages are unconfirmed. |
| Headless screenshots | Full-length captures used a very tall window, so 100vh heroes look stretched. Background videos render blank in headless Chrome. The 390px captures look cut off on the right, which may be a headless-Chrome minimum-width artefact. **Mobile horizontal overflow is unverified** and should be checked on a real device. |
| Momoyoga is JS-rendered | The external schedule and prices could not be read to cross-check the on-site timetable and prices. |
| Interaction states | Hover, active and animation states were read from CSS, not exercised in a live browser session (except one live screenshot). |

## 2. Inaccessible / broken / non-functional

| Item | Finding |
|---|---|
| Broken internal links on the real pages | None found. All nav, CTA and external booking links return HTTP 200. |
| WooCommerce pages `/cart/`, `/checkout/`, `/my-account/`, `/shop/` | The plugin is inactive. Pages are empty or print a raw shortcode. They are in the sitemap. |
| Hidden demo blocks still in the HTML | 2 on About, 11 on Book a Room. They are shipped to every visitor (extra weight, lorem ipsum visible to crawlers) and are invisible on screen. |
| Hot-linked vendor assets | The ginkgo offset images are configured with URLs on `ashtanga.qodeinteractive.com`. They load from the theme vendor's demo server, which is a third-party dependency. Local copies exist and were saved. |
| Demo pages that link to the vendor | `/landing/`, `/studio-shop/`, `/studio-home/`, `/retreats/`, `/coming-soon/` link to `ashtanga.qodeinteractive.com`. |
| Direct-booking link | Hard-codes past dates (2026-03-07 → 2026-03-10). |
| Visual bug | “IDR 1.2 Mill” renders in a fallback sans-serif while the other prices render in Edensor (CSS overrides look identical; root cause unconfirmed). |
| Leaked Elementor default | The active timetable tab is styled with `--e-global-color-accent` (#61CE70 default). Verify its actual appearance in a browser. |

## 3. Missing information and assets (request from the owner)

1. **Street address** and Google Maps place link. The map only searches “Rasa Ubud Yoga”.
2. **Business email** (none is published) and the **contact-form destination**.
3. **Instagram / social handles.** YouTube `@RasaUbudYogaColiving` exists but is not linked.
4. **Vector logo** (SVG/AI/PDF) and any brand guidelines.
5. **Edensor commercial licence** (the file is “Edensor Free”).
6. **Theme-artwork rights**: confirm whether the Ashtanga demo illustrations, lotus mark, line icons, the round meditation photo (`h3-textual-img1.png`) and the botanical photo (`main-home-img-2.jpg`) may be used outside the WordPress theme, or supply replacements.
7. **Original hero video files** (MP4), if self-hosting is preferred over YouTube.
8. **Higher-resolution photography.** Most images are WhatsApp-compressed (≤1600px).
9. **Room details**: names (Rasa / Aruna / Lumi / Sari appear only on an orphan page; Room 5 unnamed), floor and view per room, prices, capacity, minimum stay, and which photo belongs to which room.
10. **Current timetable**: the published grid is sparse and partly placeholder (empty rows and tabs).
11. **Teachers / facilitators**: none on the site. Should the rebuild include them? (Do not reuse the demo instructors.)
12. **Legal pages**: no privacy policy, terms, house rules or cancellation policy exist.
13. **Analytics** requirements (none installed).

## 4. Content conflicts to resolve

| # | Conflict | Pages |
|---|---|---|
| 1 | Day Rate: **IDR 1 Million** vs **IDR 900K** | Book a Class vs Events |
| 2 | Class naming: “Yin & Somatic” / “Yin & Somatics” / “Yin Class”; “Ashtanga Inspired” / “Ashtanga Mysore” | About, Book a Class |
| 3 | “Daily” classes are claimed (Home, About), but the timetable shows only Mon–Wed plus a Friday Yin class | Home, About, Book a Class |
| 4 | The About “Book a Class” button goes straight to Momoyoga; the nav “Book a Class” goes to the on-site page | About |
| 5 | The Pilates tab shows “DONATION Mat Pilates” Mon 9:30 while the All Classes tab shows no Pilates | Book a Class |
| 6 | Copy polish items (spacing, casing, “Walk ins” / “Walk-ins”) | various |

## 5. Unresolved questions for the next phase

1. Should `/yoga-home/` keep its URL (SEO continuity) or move to e.g. `/rooms/` with a 301 redirect?
2. Should the ~93 demo URLs currently indexed be 301-redirected (to Home or the relevant page) or return 410?
3. Should the Contact popup become a dedicated `/contact` page, a section, or remain a modal? The current `/contact-us/` URL holds demo content and is indexed.
4. Should the timetable stay hand-maintained in the site, or should the rebuild defer to Momoyoga (link or embed widget) to avoid stale data?
5. Is a light/dark page split (light for Home/About/Rooms, forest for Classes/Events) part of the identity to keep, or just a page-level choice?
6. Keep YouTube-hosted hero videos or self-host?
7. Is the venue-hire offer (“Events | Workshops | Shoots | Trainings”) important enough for its own page?

## 6. Accessibility observations (current site)

- Alt text is mostly empty or meaningless (`alt="a"`, filenames).
- The Message field is a single-line input. Labels exist for all fields.
- White text sits over photo and video heroes without visible overlays (contrast depends on the image).
- Contrast (calculated with the WCAG 2.x formula):
  - white on sand #AEA17E = **2.56:1** (fails AA for button text)
  - forest #3E4939 on sand = 3.70:1 (fails AA for normal text)
  - sand on forest = 3.70:1 (passes only for large text such as the 200px marquees)
  - forest on paper #FCFBFA = 9.17:1 (passes)
  - white on forest = 9.47:1 (passes)
- Autoplaying sliders, marquees and background videos have no visible pause control (the theme adds a play/pause control on the video only).
