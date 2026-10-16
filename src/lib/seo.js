import { site } from '@/content/site';

// Canonical URLs, Open Graph URLs/images and indexing are enabled only once the production
// domain is confirmed via NEXT_PUBLIC_SITE_URL. Until then pages carry title + description only.
export function pageMetadata({ title, description, path }) {
  const meta = { title, description };
  if (site.url) {
    meta.alternates = { canonical: path };
    meta.openGraph = {
      title: title === site.name ? site.name : `${title} – ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      type: 'website',
      images: [{ url: '/og/rasa-share.jpg', width: 1200, height: 630, alt: 'The open-air shala at Rasa, Ubud' }],
    };
  }
  return meta;
}
