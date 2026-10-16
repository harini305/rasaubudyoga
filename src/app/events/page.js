import { events } from '@/content/pages';
import { booking, contact } from '@/content/site';
import { pageMetadata } from '@/lib/seo';
import Button from '@/components/Button';
import ResponsiveImage from '@/components/ResponsiveImage';
import Botanical from '@/components/Botanical';
import Marquee from '@/components/motion/Marquee';
import SplitHero from '@/components/sections/SplitHero';
import GalleryMosaic from '@/components/sections/GalleryMosaic';
import { HostVenue } from '@/components/sections/Venue';
import styles from './events.module.css';

export const metadata = pageMetadata({ ...events.meta, path: '/events/' });

// Gallery opens with the healing session (first tile is the large one).
const gallery = [events.gallery[2], ...events.gallery.filter((_, i) => i !== 2)];

export default function EventsPage() {
  return (
    <main id="main" data-theme="dark" className="themed">
      <SplitHero
        eyebrow="Events"
        title={
          <>
            Join our events <em>at Rasa</em>
          </>
        }
        media={
          <div className={styles.collage}>
            <div className={styles.collageMain}>
              <ResponsiveImage
                slug="event-group-downdog"
                alt="A full group class in downward-facing dog at a Rasa event"
                priority
                sizes="(min-width: 900px) 36vw, 80vw"
                data-hero-media
              />
            </div>
            <div className={styles.collageSmall}>
              <ResponsiveImage slug="event-embrace" alt="Two friends embracing and smiling at an event" sizes="(min-width: 900px) 18vw, 40vw" />
            </div>
            <Botanical name="frangipani" className={styles.collageFlower} />
          </div>
        }
      >
        <p className="lede muted">{events.upcoming.text}</p>
        <div className={styles.actions}>
          <Button href={booking.eventSchedule} variant="sand" external service="Momoyoga">
            {events.schedule.cta}
          </Button>
          <Button href={contact.whatsappUrl} variant="outline" external service="WhatsApp">
            {events.schedule.ask}
          </Button>
        </div>
      </SplitHero>

      {/* Schedule strip */}
      <section className={styles.strip} aria-labelledby="schedule-title">
        <div className={`container ${styles.stripGrid}`} data-reveal-stagger>
          <div className={styles.stripItem}>
            <span className={`display ${styles.stripNum}`} aria-hidden="true">
              01
            </span>
            <h2 id="schedule-title" className={styles.stripTitle}>
              {events.schedule.heading}
            </h2>
            <p className="muted">
              Event listings and booking are on{' '}
              <a href={booking.eventSchedule} target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                Momoyoga
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>
          <div className={styles.stripItem}>
            <span className={`display ${styles.stripNum}`} aria-hidden="true">
              02
            </span>
            <h3 className={styles.stripTitle}>{events.schedule.walkIns}</h3>
            <p className="muted">Or reserve your spot ahead on Momoyoga.</p>
          </div>
          <div className={styles.stripItem}>
            <span className={`display ${styles.stripNum}`} aria-hidden="true">
              03
            </span>
            <h3 className={styles.stripTitle}>{events.schedule.ask}</h3>
            <p className="muted">
              Message us on WhatsApp:{' '}
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                {contact.whatsappDisplay}
                <span className="sr-only"> (opens WhatsApp in a new tab)</span>
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery} aria-label="Moments from Rasa events">
        <Marquee text={events.marquee} size="md" />
        <div className={`container ${styles.galleryWrap}`}>
          <GalleryMosaic items={gallery} label="Photos from events at Rasa" />
        </div>
      </section>

      <HostVenue page="events" />

      {/* Upcoming */}
      <section className={`section ${styles.upcoming}`} aria-labelledby="upcoming-title">
        <div className={`container ${styles.upcomingGrid}`} data-reveal>
          <h2 id="upcoming-title" className={`display ${styles.upcomingTitle}`}>
            Upcoming <em>Events</em>
          </h2>
          <div className={styles.upcomingText}>
            <div className={styles.actions}>
              <Button href={booking.eventSchedule} variant="sand" external service="Momoyoga">
                {events.upcoming.info}
              </Button>
              <Button href={contact.whatsappUrl} variant="outline" external service="WhatsApp">
                {events.upcoming.chat}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
