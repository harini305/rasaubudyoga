import ResponsiveImage from '@/components/ResponsiveImage';
import styles from './PhotoHero.module.css';

/** Full-bleed photographic hero. The header overlays it (see overlayRoutes in content/site.js). */
export default function PhotoHero({ image, alt, position = '50% 50%', children, size = 'full' }) {
  return (
    <section className={styles.hero} data-size={size}>
      <div className={styles.media}>
        <ResponsiveImage slug={image} alt={alt} priority sizes="100vw" style={{ objectPosition: position }} data-hero-media />
      </div>
      <div className={styles.scrim} aria-hidden="true" />
      <div className={`container ${styles.content}`}>{children}</div>
    </section>
  );
}
