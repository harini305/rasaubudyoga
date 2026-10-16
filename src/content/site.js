// Single source of truth for business facts, links and navigation.
// Every value here is VERIFIED in docs/source-audit (03-content-preservation-checklist.md §1).
// Do not add an address, email, social handle or opening hours until the owner supplies them.

export const site = {
  name: 'Rasa Ubud Yoga Coliving',
  shortName: 'Rasa',
  location: 'In the heart of Ubud', // No street address is published (owner question 07 §3.1)
  region: 'Ubud, Bali',
  // Production domain is NOT confirmed for the rebuild. Canonical/OG/sitemap/indexing switch on
  // only when NEXT_PUBLIC_SITE_URL is set (see src/lib/seo.js).
  url: process.env.NEXT_PUBLIC_SITE_URL || null,
};

const WHATSAPP_NUMBER = '6281367364684';

export const contact = {
  whatsappDisplay: '+62 813 6736 4684',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  // Contact form delivery is NOT approved yet (no recipient, no backend).
  // While false, the form validates but never claims to send; it hands off to WhatsApp instead.
  formDeliveryEnabled: false,
};

export function whatsappLink(text) {
  return text
    ? `${contact.whatsappUrl}?text=${encodeURIComponent(text)}`
    : contact.whatsappUrl;
}

export const booking = {
  classSchedule: 'https://www.momoyoga.com/rasa-ubud-yoga/schedule',
  eventSchedule: 'https://www.momoyoga.com/rasa-ubud-yoga/events',
  airbnb: 'https://www.airbnb.co.nz/users/show/194581580',
  // The live link pinned past dates (checkInDate=2026-03-07 → 2026-03-10) and 2 adults.
  // Those parameters are removed so guests pick their own dates on the booking engine.
  // OWNER TO CONFIRM: preferred default parameters, if any. (docs/source-audit 07 §2)
  direct: 'https://book-directonline.com/properties/rasaubudyogacoliving?locale=en&currency=IDR',
};

// Verified owner channel (oEmbed author "Rasa Ubud Yoga and Coliving"). It was not linked on the
// live site; listed in the footer pending owner confirmation.
export const social = {
  youtube: 'https://www.youtube.com/@RasaUbudYogaColiving',
};

export const films = {
  home: { id: 'ESDOoJyjQr4', title: 'Rasa Ubud Yoga and Coliving' },
  about: { id: 'tc9c3HtYPSk', title: 'Rasa Ubud Yoga and Coliving' },
};

// Labels as published in the live header (03 §2). Routes keep their original slugs.
export const nav = [
  { label: 'Main Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Book a Room', href: '/yoga-home/' },
  { label: 'Book a Class', href: '/book-a-class/' },
  { label: 'Events', href: '/events/' },
];

// Light pages vs forest-green pages (05 §2.3).
export const darkRoutes = ['/book-a-class/', '/events/'];
// Pages whose first section is a full-bleed photo, so the header starts transparent over it.
export const overlayRoutes = ['/', '/yoga-home/'];
