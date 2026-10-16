import manifest from '@/content/images.generated.json';

export function getImage(slug) {
  const entry = manifest[slug];
  if (!entry) throw new Error(`Unknown image "${slug}". Run \`npm run images\` or check the slug.`);
  const widths = entry.widths;
  const largest = widths[widths.length - 1];
  return {
    src: `/images/${slug}-${largest}.webp`,
    srcSet: widths.map((w) => `/images/${slug}-${w}.webp ${w}w`).join(', '),
    width: entry.width,
    height: entry.height,
  };
}
