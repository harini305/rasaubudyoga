import { site } from '@/content/site';

// Pre-launch default: disallow everything until NEXT_PUBLIC_SITE_URL (the confirmed production
// domain) is set. This keeps local/preview builds out of search engines.
export default function robots() {
  if (!site.url) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
