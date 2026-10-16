import ResponsiveImage from '@/components/ResponsiveImage';
import styles from './GalleryMosaic.module.css';

/**
 * Masonry-style mosaic (live site: 5-column masonry with one large tile on desktop, single-image
 * carousel on mobile). Here: CSS grid on desktop/tablet, a swipeable snap row on mobile.
 */
export default function GalleryMosaic({ items, label }) {
  return (
    <ul className={styles.mosaic} role="list" aria-label={label} tabIndex={0} data-reveal-stagger>
      {items.map((item, i) => (
        <li key={item.image} className={styles.tile} data-large={i === 0 ? 'true' : undefined}>
          <ResponsiveImage
            slug={item.image}
            alt={item.alt}
            sizes={i === 0 ? '(min-width: 1100px) 40vw, (min-width: 768px) 50vw, 80vw' : '(min-width: 1100px) 20vw, (min-width: 768px) 25vw, 80vw'}
          />
        </li>
      ))}
    </ul>
  );
}
