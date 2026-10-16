import { about } from '@/content/pages';
import { booking, films } from '@/content/site';
import { pageMetadata } from '@/lib/seo';
import Button, { ArrowLink } from '@/components/Button';
import ResponsiveImage from '@/components/ResponsiveImage';
import Botanical from '@/components/Botanical';
import FilmButton from '@/components/media/FilmButton';
import ReviewFlag from '@/components/ReviewFlag';
import styles from './about.module.css';

export const metadata = pageMetadata({ ...about.meta, path: '/about-us/' });

export default function AboutPage() {
  return (
    <main id="main" data-theme="light" className="themed">
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <h1 id="about-title" className="sr-only">
              About Us
            </h1>
            <p className={`display ${styles.word}`} data-hero-item>
              Rasa
            </p>
            <dl className={styles.definition} data-hero-item>
              <dt className="sr-only">Meaning</dt>
              <dd>
                <em>“flavours”</em> or <em>“feelings”</em>
                <span className={styles.lang}>in Bahasa Indonesia</span>
              </dd>
            </dl>
            <div data-hero-item>
              <FilmButton id={films.about.id} title={films.about.title} label="Watch our film" />
            </div>
          </div>
          <div className={styles.heroMedia} data-hero-item>
            <div className={styles.heroArch}>
              <ResponsiveImage
                slug="seated-prayer"
                alt="A student seated in prayer pose at the open edge of the shala, palms above"
                priority
                sizes="(min-width: 900px) 42vw, 92vw"
                data-hero-media
              />
            </div>
            <Botanical name="frangipani" className={styles.heroFlower} />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={`section ${styles.story}`} aria-label="Our story">
        <div className="container-narrow">
          <Botanical name="lotus" className={styles.lotus} />
          <p className={styles.storyText} data-reveal>
            {about.story}
          </p>
          <ReviewFlag>Original reads “{about.storyOriginalFragment}”. “daily” is removed pending owner confirmation.</ReviewFlag>
        </div>
      </section>

      {/* Gallery trio */}
      <section aria-label="Moments at Rasa" className={styles.gallery}>
        <div className={`container ${styles.galleryGrid}`}>
          {about.gallery.map((g, i) => (
            <figure key={g.image} className={styles[`g${i}`]} data-reveal-image>
              <ResponsiveImage
                slug={g.image}
                alt={g.alt}
                sizes={i === 0 ? '(min-width: 900px) 58vw, 92vw' : '(min-width: 900px) 34vw, 92vw'}
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Living space */}
      <section className={`section ${styles.living}`} aria-labelledby="living-title">
        <div className={`container ${styles.livingGrid}`}>
          <div className={styles.livingMedia}>
            <div className={styles.circle} data-reveal-image>
              <ResponsiveImage slug="bedroom-circle" alt="A bedroom at Rasa with a double bed and garden doors" sizes="(min-width: 900px) 36vw, 80vw" />
            </div>
            <Botanical name="sprig" className={styles.livingSprig} />
          </div>
          <div className={styles.livingText} data-reveal>
            <h2 id="living-title" className={`display ${styles.h2}`}>
              {about.living.heading}
            </h2>
            <p className="lede">{about.living.text}</p>
            <Button href="/yoga-home/">Book a Room</Button>
          </div>
        </div>
      </section>

      {/* Our classes */}
      <section className={`section ${styles.classes}`} aria-labelledby="classes-title">
        <div className={`container ${styles.classesGrid}`}>
          <div className={styles.classesText} data-reveal>
            <h2 id="classes-title" className={`display ${styles.h2}`}>
              {about.classes.heading}
            </h2>
            <p>{about.classes.text}</p>
            <ol role="list" className={styles.classList} data-reveal-stagger>
              {about.classes.list.map((c, i) => (
                <li key={c}>
                  <span className={styles.classNum} aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className={`display ${styles.className}`}>{c}</span>
                </li>
              ))}
            </ol>
            <div className={styles.classesActions}>
              <Button href={booking.classSchedule} external service="Momoyoga">
                Book a Class
              </Button>
              <ArrowLink href="/book-a-class/">Timetable &amp; prices</ArrowLink>
            </div>
            <p className={styles.externalNote}>Class booking takes place on Momoyoga.</p>
            <ReviewFlag>“daily” removed from the classes paragraph. Class names on this page (“Yin &amp; Somatic”) differ slightly from Book a Class (“Yin &amp; Somatics”).</ReviewFlag>
          </div>
          <div className={styles.stack}>
            <div className={styles.stackBack} data-reveal-image>
              <ResponsiveImage slug="class-shala-flow" alt="A teacher guiding a class in the open-air shala" sizes="(min-width: 900px) 30vw, 70vw" />
            </div>
            <div className={styles.stackFront} data-reveal-image>
              <ResponsiveImage slug="class-teacher-assist" alt="A teacher moving between students during a class" sizes="(min-width: 900px) 20vw, 46vw" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
