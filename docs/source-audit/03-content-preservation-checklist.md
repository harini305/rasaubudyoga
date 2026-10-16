# 03 — Content preservation checklist

Use this checklist during implementation. Every item below is **real, visible Rasa content** from the live site (captured 2026-10-16). The exact wording, punctuation and source block for each item are in [content-verbatim.md](content-verbatim.md). Copy from that file rather than retyping.

Rules for the rebuild:
- Keep wording and meaning. Fix nothing silently. Typo or consistency fixes need owner approval (they are listed in §9).
- Do **not** add testimonials, team bios, FAQs, ratings, awards, addresses or claims that are not listed here.
- Do **not** reuse anything from the theme-demo pages (lorem ipsum, fictional instructors, NY studio addresses, $ pricing plans, “Peru retreat”, demo testimonials).

---

## 1. Business facts (single source of truth)

| Fact | Value as published | Where | Status |
|---|---|---|---|
| Brand name | Rasa Ubud Yoga Coliving (site title). The logo reads “RASA / UBUD YOGA COLIVING”. The YouTube channel is “Rasa Ubud Yoga and Coliving” | `<title>`, logo, YouTube | VERIFIED |
| Meaning of the name | “Rasa means "flavours" or "feelings" in Bahasa Indonesia” | About | VERIFIED |
| Location | “In the heart of Ubud” (Bali). Map query “Rasa Ubud Yoga” | Home, map | VERIFIED. **No street address published** |
| WhatsApp / phone | +62 813 6736 4684 (`api.whatsapp.com/send/?phone=6281367364684`) | Book a Class, Events | VERIFIED (number only; owner name not shown) |
| Email | **none published** | — | GAP |
| Social | YouTube channel `@RasaUbudYogaColiving` (source of the hero videos; not linked on the site). Instagram links on the site point to `instagram.com/` root only (in hidden demo blocks) | — | Instagram handle unknown |
| Class booking platform | Momoyoga: `https://www.momoyoga.com/rasa-ubud-yoga/schedule` and `/events` | About, Book a Class, Events | VERIFIED (HTTP 200) |
| Room booking | Airbnb host profile `https://www.airbnb.co.nz/users/show/194581580`; direct booking `https://book-directonline.com/properties/rasaubudyogacoliving` | Book a Room | VERIFIED (HTTP 200) |
| Number of rooms | five | Book a Room intro | VERIFIED |

## 2. Navigation labels (preserve)

- [ ] Main Home · About Us · Book a Room · Book a Class · Events · Contact Us

## 3. Home `/`

- [ ] Pillars: “Yoga + Movement”, “Soulful Workshops”, “Community Living”, “Host Your Own Event”
- [ ] H2 “Your home away from home”
- [ ] Subtitle “In the heart of Ubud”
- [ ] Paragraph “A community living space for long-term and short-term travellers seeking a place to call home, solitude to explore, a remote working sanctuary, and a desire to discover the local culture while being inspired by the magic of the island.”
- [ ] CTAs “Book a Room”, “Book a Class”, “Upcoming Event”, “Host Your Event”
- [ ] “ON - SITE SHALA” heading
- [ ] “We offer daily Yoga, Pilates, soulful ceremonies, workshops, and cultural activities to help you move, grow, and live well—inside and out.”

## 4. About Us `/about-us/`

- [ ] Story paragraph beginning “Rasa means "flavours" or "feelings" in Bahasa Indonesia…” and ending “…Unwind, connect, and feel at home at Rasa!” (verbatim; mixed straight and curly quotes in the source)
- [ ] H2 “About Our Living Space” + paragraph “Our private bedrooms blend modern design with a touch of local charm… + access to pool during your stay.”
- [ ] CTA “Book a Room”
- [ ] H2 “Our Classes” + paragraph “Our shala offers a variety of daily yoga and Pilates classes designed for all levels… Led by experienced teachers, our offerings include:”
- [ ] List: Rasa Vinyasa Flow · Power Yoga · Ashtanga Inspired · Yin & Somatic · Soulful Ceremonies & Workshops
- [ ] CTA “Book a Class” (→ Momoyoga)

## 5. Book a Room `/yoga-home/`

- [ ] Hero “BOOK A ROOM”
- [ ] Intro “Your Home Away from Home Sanctuary in Ubud: Each of our five thoughtfully designed rooms offers a peaceful retreat with modern comforts and a touch of local charm. Every room includes air conditioning, a double bed, an ensuite bathroom, smart tv, working desks , fresh linens, towels, and stunning views—either overlooking the lush rice fields or the inviting poolside.”
- [ ] Amenity facts to keep: air conditioning · double bed · ensuite bathroom · smart TV · working desk(s) · fresh linens · towels · rice-field or pool views · (About:) communal areas · fully equipped modern kitchen · pool access
- [ ] “Room Categories”; captions “Room 1”–“Room 5” (room names Rasa/Aruna/Lumi/Sari exist only on the orphan `/retreats/` page; use them only if the owner confirms)
- [ ] “YOGA & WELLNESS PERKS:” + “While yoga classes are not included in the stay, guests receive exclusive discounted vouchers to join our wellness offerings, allowing for a more personalised experience based on their needs.”
- [ ] H2 “Booking Options”; “Secure your stay via Airbnb” → “Book via AIRBNB”; “Secure your stay via direct bookings” → “Book via this link”

## 6. Book a Class `/book-a-class/`

- [ ] Marquee “The shala and the view”
- [ ] “Timetable” + tab labels “All Classes”, “Vinyasa”, “Power Yoga”, “Pilates”, “Yin Class”
- [ ] Timetable data exactly as published (owner must confirm it is current; see 07):

| Tab | Time | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|---|---|---|---|---|---|---|---|---|
| All Classes | 7:45 am | – | – | – | – | – | – | – |
| | 9:00 am | Ashtanga Mysore (Booking is mandatory, no walk in) | – | – | – | – | – | – |
| | 9:30 am | – | Vinyasa All Levels | Vinyasa All Levels | private events | private events | private event | private event |
| | 10:00 am | – | – | – | – | – | – | – |
| | 6:00 pm | – | – | – | – | – | – | – |
| Vinyasa | 7:45 am | (all empty) | | | | | | |
| Power Yoga | 9:30 am | (all empty) | | | | | | |
| Pilates | 9:30 am | DONATION Mat Pilates | – | – | – | – | – | – |
| Yin Class | 4:30 pm | – | – | – | – | Yin class (75 Mins) | – | – |

- [ ] Class descriptions (verbatim, five): **Ashtanga Inspired**, **Power Yoga**, **Yin & Somatics**, **Rasa Vinyasa Flow**, **Soulful Ceremonies & Workshops**
- [ ] CTA “BOOK A CLASS” and note “*Walk-ins are always welcome!”
- [ ] **Prices** (verbatim labels):

| Label (as published) | Price |
|---|---|
| Drop-in | IDR 150K |
| mysore drop in | IDR 150K |
| kitas/ktp | IDR 90K |
| 4-class package mysore | IDR 520K |
| 10-class package regular | IDR 1.2 Mill |

- [ ] “view more” (→ Momoyoga)
- [ ] “Host Your Own Event”
- [ ] H2 “Events | Workshops | Shoots | Trainings” + “Includes props: bolsters, straps, blocks, blankets, yoga mats, weights, Pilates balls.”
- [ ] Venue hire: Hourly Rate, “minimum 2-hour booking”, IDR 100K · Day Rate, “12 hours”, **IDR 1 Million** (conflicts with Events; see 07)
- [ ] CTA “Contact Us” (→ WhatsApp)

## 7. Events `/events/`

- [ ] Marquee “JOIN OUR EVENTS AT RASA”
- [ ] “Events schedule”; “Click Here For Schedule”; “Walk ins always welcome”; “Ask a Question”
- [ ] “Host Your Own Event”; “Events | Workshops | Shoots | Trainings”; props sentence
- [ ] Venue hire: Hourly Rate IDR 100K (minimum 2-hour booking) · Day Rate IDR **900K** (12 hours)
- [ ] “Upcoming Events”; “View our upcoming events and book your spot now!”; “Event Information”; “Chat with us to book”

## 8. Contact (global popup)

- [ ] Heading “Contact us”; fields “Full Name”, “Email” (required), “Message”; button “Send Message”
- [ ] Embedded map (query “Rasa Ubud Yoga”)

## 9. Content issues to raise with the owner (do NOT silently change)

| # | Issue | Location |
|---|---|---|
| 1 | Day Rate is **IDR 1 Million** on Book a Class but **IDR 900K** on Events | Book a Class #9 vs Events #6 |
| 2 | Timetable is sparse, has empty rows (7:45 am, 10:00 am, 6:00 pm) and empty tabs (Vinyasa, Power Yoga); “private event(s)” fills Thu–Sun 9:30; it does not match the “daily” classes claimed elsewhere | Book a Class #5 |
| 3 | Class names vary: “Yin & Somatic” (About) vs “Yin & Somatics” (Book a Class) vs “Yin Class”; “Ashtanga Inspired” vs “Ashtanga Mysore” | About, Book a Class |
| 4 | Inconsistent price-label casing (“Drop-in” vs “mysore drop in”, “kitas/ktp”), and “IDR 1.2 Mill” vs “IDR 1 Million” notation | Book a Class |
| 5 | Minor copy typos: “working desks ,” (stray space), “smart tv”, “ON - SITE”, “Walk ins” vs “Walk-ins”, “centered” vs British spelling elsewhere | various |
| 6 | Home CTA “Upcoming Event” (singular) | Home |
| 7 | The direct-booking link carries hard-coded past dates (check-in 2026-03-07) | Book a Room |
| 8 | “Host Your Event” on Home links to `/events/` (no dedicated hosting page or anchor) | Home |
