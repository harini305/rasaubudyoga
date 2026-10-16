// Prices and venue-hire rates, exactly as published on the live site (03 §6–7).
// Centralised so they can't drift apart again.

export const classPrices = [
  { label: 'Drop-in', price: 'IDR 150K' },
  { label: 'mysore drop in', price: 'IDR 150K' },
  { label: 'kitas/ktp', price: 'IDR 90K' },
  { label: '4-class package mysore', price: 'IDR 520K' },
  { label: '10-class package regular', price: 'IDR 1.2 Mill' },
];

/*
 * ⚠ UNRESOLVED CONFLICT: owner approval required before launch.
 * The Day Rate is published as "IDR 1 Million" on /book-a-class/ but "IDR 900K" on /events/.
 * The rebuild does NOT pick one. Each page shows the value it published, both isolated here.
 * Once the owner confirms, replace both entries with a single value.
 */
export const DAY_RATE_CONFLICT = true;
export const dayRateAsPublished = {
  'book-a-class': 'IDR 1 Million',
  events: 'IDR 900K',
};

export function venueHireRates(page) {
  return [
    { label: 'Hourly Rate', note: 'minimum 2-hour booking', price: 'IDR 100K' },
    { label: 'Day Rate', note: '12 hours', price: dayRateAsPublished[page] },
  ];
}

export const venueHire = {
  heading: 'Events | Workshops | Shoots | Trainings',
  props: 'Includes props: bolsters, straps, blocks, blankets, yoga mats, weights, Pilates balls.',
  showcase: ['Host', 'Your', 'Own', 'Event'],
};
