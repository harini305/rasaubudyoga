import './globals.css';
import { bodyFont, displayFont } from '@/lib/fonts';
import { contact, site, social } from '@/content/site';
import { ContactProvider } from '@/components/contact/ContactProvider';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import MotionController from '@/components/motion/MotionController';

export const metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: { default: site.name, template: `%s – ${site.name}` },
  description:
    'Yoga shala and coliving in the heart of Ubud, Bali. Rooms, classes, events and venue hire at Rasa Ubud Yoga Coliving.',
  applicationName: site.name,
  // Pre-launch: keep this build out of search indexes until the production domain is confirmed.
  robots: site.url ? { index: true, follow: true } : { index: false, follow: false },
  formatDetection: { telephone: false },
};

export const viewport = {
  themeColor: '#3e4939',
  width: 'device-width',
  initialScale: 1,
};

// Minimal structured data with verified values only. No address, hours or geo exist yet.
function OrganizationJsonLd() {
  if (!site.url) return null;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    telephone: '+62-813-6736-4684',
    sameAs: [social.youtube],
    contactPoint: { '@type': 'ContactPoint', telephone: '+62-813-6736-4684', contactType: 'customer service', url: contact.whatsappUrl },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`} suppressHydrationWarning>
      <head>
        {/* Flags JS before first paint so the hero can start hidden for its GSAP entrance. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <OrganizationJsonLd />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ContactProvider>
          <Header />
          {children}
          <Footer />
        </ContactProvider>
        <MotionController />
      </body>
    </html>
  );
}
