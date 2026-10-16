import { nav, site } from '@/content/site';

// Only the five genuine pages. Empty until the production domain is confirmed.
export default function sitemap() {
  if (!site.url) return [];
  return nav.map((item) => ({
    url: `${site.url}${item.href}`,
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.8,
  }));
}
