import { rooms } from '@/content/pages';
import { booking } from '@/content/site';
import { pageMetadata } from '@/lib/seo';
import Button, { ArrowLink } from '@/components/Button';
import ResponsiveImage from '@/components/ResponsiveImage';
import Botanical from '@/components/Botanical';
import PhotoHero from '@/components/sections/PhotoHero';
import ScrollRail from '@/components/sections/ScrollRail';
import ReviewFlag from '@/components/ReviewFlag';
import styles from './rooms.module.css';

export const metadata = pageMetadata({ ...rooms.meta, path: '/yoga-home/' });

export default function BookARoomPage() {
  return (
    <main id="main" data-theme="light" className="themed">
      <PhotoHero image="room-hero-ricefield" alt="A bedroom at Rasa with a balcony looking out over the rice fields" position="50% 55%" size="tall">
        <div className={styles.heroInner}>
          <h1 className={`display ${styles.heroTitle}`} data-hero-item>
            <span>Book</span> <span>a Room</span>
          </h1>
          <div className={styles.heroActions} data-hero-item>
            <Button href="#booking" variant="sand">
              Booking Options
            </Button>
            <a href="#rooms" className={styles.heroLink}>
              See the rooms
            </a>
          </div>
        </div>
      </PhotoHero>

      {/* Intro + amenities */}
      <section className={`section ${styles.intro}`} aria-labelledby="rooms-intro">
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introText} data-reveal>
            <Botanical name="lotus" className={styles.lotus} />
            <h2 id="rooms-intro" className="sr-only">
              Your Home Away from Home Sanctuary in Ubud
            </h2>
            <p className={styles.introLede}>{rooms.intro}</p>
          </div>
          <div className={styles.amenities} data-reveal-stagger>
            <div className={styles.amenityCol}>
              <h3 className={styles.amenityHead}>In every room</h3>
              <ul role="list">
                {rooms.inRoom.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <div className={styles.amenityCol}>
              <h3 className={styles.amenityHead}>Shared spaces</h3>
              <ul role="list">
                {rooms.shared.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className={styles.rooms} aria-labelledby="rooms-title">
        <div className="container">
          <ScrollRail
            label="Rooms"
            size="lg"
            header={
              <div className={styles.roomsHead}>
                <h2 id="rooms-title" className={`display ${styles.roomsTitle}`}>
                  {rooms.categoriesHeading}
                </h2>
                <p className={styles.roomsCount}>
                  <span className="display">5</span> private rooms
                </p>
              </div>
            }
          >
            {rooms.list.map((r) => (
              <li key={r.name}>
                <figure className={styles.room}>
                  <div className={styles.roomMedia}>
                    <ResponsiveImage slug={r.image} alt={`${r.name} at Rasa`} sizes="(min-width: 768px) 38rem, 84vw" />
                  </div>
                  <figcaption className={styles.roomCaption}>
                    <span className="display">{r.name}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ScrollRail>
          <ReviewFlag>
            Rooms are captioned “Room 1–5” as on the live page. The names Rasa / Aruna / Lumi / Sari exist only on an
            orphan demo page. Per-room details (view, floor, price) are not published.
          </ReviewFlag>
        </div>
      </section>

      {/* Perks */}
      <section className={`section ${styles.perks}`} aria-labelledby="perks-title">
        <div className={`container ${styles.perksGrid}`}>
          <div className={styles.perksText} data-reveal>
            <h2 id="perks-title" className={styles.perksTitle}>
              {rooms.perks.heading}
            </h2>
            <p className="lede">{rooms.perks.text}</p>
            <ArrowLink href="/book-a-class/">Our classes</ArrowLink>
          </div>
          <ul role="list" className={styles.perkImages} data-reveal-stagger>
            {rooms.perks.images.map((p) => (
              <li key={p.image}>
                <ResponsiveImage slug={p.image} alt={p.alt} sizes="(min-width: 900px) 20vw, 30vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Booking options */}
      <section id="booking" className={styles.booking} data-theme="dark" aria-labelledby="booking-title">
        <div className={`container ${styles.bookingInner}`}>
          <div className={styles.bookingHead} data-reveal>
            <h2 id="booking-title" className={`display ${styles.bookingTitle}`}>
              {rooms.booking.heading}
            </h2>
            <p className={styles.bookingNote}>
              Both options open an external site in a new tab, where availability and the reservation are handled.
            </p>
          </div>
          <ul role="list" className={styles.options} data-reveal-stagger>
            <li className={styles.option}>
              <p className={styles.optionService}>Airbnb</p>
              <p className={`display ${styles.optionLead}`}>{rooms.booking.airbnb.lead}</p>
              <Button href={booking.airbnb} variant="sand" external service="Airbnb">
                {rooms.booking.airbnb.label}
              </Button>
            </li>
            <li className={styles.option}>
              <p className={styles.optionService}>Direct booking</p>
              <p className={`display ${styles.optionLead}`}>{rooms.booking.direct.lead}</p>
              <Button href={booking.direct} variant="sand" external service="the direct booking site">
                {rooms.booking.direct.label}
              </Button>
            </li>
          </ul>
          <ReviewFlag>
            The live direct-booking link pinned past dates (7–10 March 2026). Those parameters were removed, so guests pick their
            own dates. Confirm any preferred defaults.
          </ReviewFlag>
        </div>
      </section>
    </main>
  );
}
