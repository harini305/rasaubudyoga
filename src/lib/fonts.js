import { Cormorant_Garamond, Lato } from 'next/font/google';

// Lato (SIL OFL): the live site's body/UI face.
export const bodyFont = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
  display: 'swap',
});

/*
 * DISPLAY FONT: TEMPORARY STAND-IN
 *
 * The live site uses "Edensor" (file: source-assets/theme/fonts/edensor.otf, embedded licence
 * field: "Free", FactoryType). Its commercial licence is NOT verified (docs/source-audit 05 §1.1,
 * 07 §3.5), so it is not shipped. Cormorant Garamond (SIL OFL) stands in.
 *
 * To switch once the owner provides a commercial licence:
 *   1. Copy the licensed file to src/fonts/edensor.otf
 *   2. Replace the export below with:
 *        import localFont from 'next/font/local';
 *        export const displayFont = localFont({
 *          src: '../fonts/edensor.otf', weight: '400', variable: '--font-display', display: 'swap',
 *        });
 *   3. Edensor has no en/em dash glyphs. Keep display strings to basic Latin.
 */
export const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});
