import { about, bookAClass } from '@/content/pages';
import { classes } from '@/content/classes';
import { classPrices } from '@/content/pricing';
import { booking } from '@/content/site';
import { pageMetadata } from '@/lib/seo';
import Button, { ArrowLink } from '@/components/Button';
import ResponsiveImage from '@/components/ResponsiveImage';
import Botanical from '@/components/Botanical';
import Price from '@/components/Price';
import Marquee from '@/components/motion/Marquee';
import SplitHero from '@/components/sections/SplitHero';
import GalleryMosaic from '@/components/sections/GalleryMosaic';
import ClassExplorer from '@/components/sections/ClassExplorer';
import Timetable from '@/components/sections/Timetable';
import { HostVenue } from '@/components/sections/Venue';
import ReviewFlag from '@/components/ReviewFlag';
import styles from './classes.module.css';

export const metadata = pageMetadata({ ...bookAClass.meta, path: '/book-a-class/' });

const dropIn = classPrices.find((p) => p.label === 'Drop-in');

export default function BookAClassPage() {
  return (
    <main id="main" data-theme="dark" className="themed">
      <SplitHero
        eyebrow="Book a Class"
        title={
          <>
            Yoga &amp; Pilates <em>at the shala</em>
          </>
        }
        facts={[
          { label: 'Drop-in', value: dropIn.price },
          { label: 'Class styles', value: String(classes.length) },
          { label: 'Walk-ins', value: 'Welcome' },
        ]}
        media={
          <div className={styles.heroArch}>
            <ResponsiveImage
              slug="shala-interior"
              alt="A student meditating in the shala, with the rice-field edge behind"
              priority
              sizes="(min-width: 900px) 44vw, 92vw"
              data-hero-media
            />
          </div>
        }
      >
        <p className="lede muted">{about.classes.text.split('. ')[0]}.</p>
        <div className={styles.actions}>
          <Button href={booking.classSchedule} variant="sand" external service="Momoyoga">
            {bookAClass.bookLabel}
          </Button>
          <ArrowLink href="#timetable">Timetable</ArrowLink>
        </div>
      </SplitHero>

      {/* The shala and the view */}
      <section className={styles.shala} aria-label="The shala">
        <Marquee text={bookAClass.marquee} size="md" />
        <div className={`container ${styles.galleryWrap}`}>
          <GalleryMosaic items={bookAClass.gallery} label="Photos of the shala" />
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="section" aria-labelledby="classes-title">
        <div className="container">
          <div className={styles.head} data-reveal>
            <div>
              <h2 id="classes-title" className={`display ${styles.h2}`}>
                Our <em>classes</em>
              </h2>
            </div>
            <p className={`display ${styles.walkIns}`}>{bookAClass.walkIns}</p>
          </div>
          <div data-reveal>
            <ClassExplorer classes={classes} />
          </div>
        </div>
      </section>

      {/* Timetable */}
      <section id="timetable" className={`section ${styles.timetable}`} aria-labelledby="timetable-title">
        <div className="container">
          <div className={styles.head} data-reveal>
            <div>
              <Botanical name="lotus" className={styles.lotus} />
              <h2 id="timetable-title" className={`display ${styles.h2}`}>
                {bookAClass.timetableHeading}
              </h2>
            </div>
            <div className={styles.headAside}>
              <p className="muted">The weekly timetable as published. The live schedule and availability are on Momoyoga.</p>
              <Button href={booking.classSchedule} variant="sand" external service="Momoyoga">
                {bookAClass.bookLabel}
              </Button>
            </div>
          </div>
          <div data-reveal>
            <Timetable />
          </div>
          <ReviewFlag>
            Please confirm the timetable is current. The published grid is sparse: Power Yoga has no sessions, and the
            “All Classes” tab left out the Pilates and Yin sessions (shown here). “Walk-ins are always welcome!” sits
            alongside “Ashtanga Mysore: booking is mandatory, no walk in”.
          </ReviewFlag>
        </div>
      </section>

      {/* Prices */}
      <section className="section" aria-labelledby="prices-title">
        <div className={`container ${styles.prices}`}>
          <div className={styles.priceMedia} data-reveal-image>
            <ResponsiveImage slug="shala-rolled-mats" alt="Rolled yoga mats ready for class" sizes="(min-width: 900px) 34vw, 92vw" />
          </div>
          <div className={styles.priceText} data-reveal>
            <h2 id="prices-title" className={`display ${styles.h2}`}>
              {bookAClass.pricesHeading}
            </h2>
            <ul role="list" className={styles.priceList}>
              {classPrices.map((p) => (
                <li key={p.label}>
                  <h3 className={styles.priceLabel}>{p.label}</h3>
                  <span className={styles.leader} aria-hidden="true" />
                  <p className={`display ${styles.priceValue}`}>
                    <Price value={p.price} />
                  </p>
                </li>
              ))}
            </ul>
            <div className={styles.actions}>
              <Button href={booking.classSchedule} variant="sand" external service="Momoyoga">
                {bookAClass.bookLabel}
              </Button>
              <ArrowLink href={booking.classSchedule} external service="Momoyoga">
                {bookAClass.pricesMore}
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <HostVenue page="book-a-class" />
    </main>
  );
}
