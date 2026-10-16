import { getImage } from '@/lib/images';

/**
 * Plain <img> with a srcset of pre-generated WebP derivatives.
 * Next's built-in optimiser is disabled (images.unoptimized), so next/image would not produce a
 * srcset. This component does, from src/content/images.generated.json.
 *
 * - `priority` → eager + fetchpriority=high (use once per page, for the hero).
 * - `alt=""` marks decorative images.
 */
export default function ResponsiveImage({ slug, alt, sizes = '100vw', priority = false, className, style, ...rest }) {
  const img = getImage(slug);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={img.src}
      srcSet={img.srcSet}
      sizes={sizes}
      width={img.width}
      height={img.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding={priority ? 'sync' : 'async'}
      className={className}
      style={style}
      {...rest}
    />
  );
}
