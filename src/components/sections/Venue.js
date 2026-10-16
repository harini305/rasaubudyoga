import Button from '@/components/Button';
import ResponsiveImage from '@/components/ResponsiveImage';
import ReviewFlag from '@/components/ReviewFlag';
import Price from '@/components/Price';
import { contact } from '@/content/site';
import { DAY_RATE_CONFLICT, venueHire, venueHireRates } from '@/content/pricing';
import styles from './Venue.module.css';

/**
 * "Host Your Own Event" + venue-hire rates in one section (shared by Book a Class and Events).
 * `page` selects the Day Rate exactly as that page published it (see content/pricing.js).
 * The live site's theme-demo round photo is replaced by genuine Rasa photography.
 */
export function HostVenue({ page, id = 'host' }) {
  const rates = venueHireRates(page);
  return (
    <section id={id} className={`section ${styles.venue}`} aria-labelledby={`${id}-title`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.media} data-reveal-image>
          <div className={styles.mainImg}>
            <ResponsiveImage slug="shala-open-hall" alt="The open-air shala, empty and ready to host" sizes="(min-width: 900px) 44vw, 92vw" />
          </div>
          <div className={styles.circle} aria-hidden="true">
            <ResponsiveImage slug="event-group-circle" alt="" sizes="10rem" />
          </div>
        </div>

        <div className={styles.text} data-reveal>
          <h2 id={`${id}-title`} className={`display ${styles.title}`}>
            {venueHire.showcase.slice(0, 2).join(' ')} <em>{venueHire.showcase.slice(2).join(' ')}</em>
          </h2>
          <h3 className={styles.uses}>{venueHire.heading}</h3>
          <p className={styles.props}>{venueHire.props}</p>

          <ul role="list" className={styles.rates}>
            {rates.map((r) => (
              <li key={r.label} className={styles.rate}>
                <div>
                  <h4 className={styles.rateLabel}>{r.label}</h4>
                  <p className={styles.rateNote}>{r.note}</p>
                </div>
                <p className={`display ${styles.ratePrice}`}>
                  <Price value={r.price} />
                </p>
              </li>
            ))}
          </ul>

          <Button href={contact.whatsappUrl} variant="sand" external service="WhatsApp">
            Contact Us
          </Button>
          {DAY_RATE_CONFLICT && (
            <ReviewFlag>
              Day Rate conflict: “IDR 1 Million” (Book a Class) vs “IDR 900K” (Events). Each page shows its published
              value from <code>src/content/pricing.js</code>. Confirm one value before launch.
            </ReviewFlag>
          )}
        </div>
      </div>
    </section>
  );
}
