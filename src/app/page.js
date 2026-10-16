import Link from 'next/link';
import { home, about, events } from '@/content/pages';
import { films } from '@/content/site';
import { pageMetadata } from '@/lib/seo';
import Button, { ArrowLink } from '@/components/Button';
import ResponsiveImage from '@/components/ResponsiveImage';
import Botanical, { PillarIcon } from '@/components/Botanical';
import PhotoHero from '@/components/sections/PhotoHero';
import FilmButton from '@/components/media/FilmButton';
import ReviewFlag from '@/components/ReviewFlag';
import styles from './home.module.css';

export const metadata = pageMetadata({ ...home.meta, path: '/' });

// Three paths, each in the source's own words (Book a Room intro, About classes copy, Events CTA).
const paths = [
  {
    title: 'Book a Room',
    href: '/yoga-home/',
    image: 'bedroom-pool-view',
    alt: 'A bright bedroom at Rasa opening onto the pool',
    text: 'Each of our five thoughtfully designed rooms offers a peaceful retreat with modern comforts and a touch of local charm.',
  },
  {
    title: 'Book a Class',
    href: '/book-a-class/',
    image: 'class-shala-flow',
    alt: 'A teacher guiding students through a flow in the open-air shala',
    text: about.classes.text.split('. ')[0] + '.',
  },
  {
    title: 'Events',
    href: '/events/',
    image: 'event-group-circle',
    alt: 'A group seated on mats in the shala, facing the rice-field view',
    text: events.upcoming.text,
  },
];

export default function HomePage() {
  return (
    <main id="main" data-theme="light" className="themed">
      <PhotoHero image="shala-open-hall" alt="The open-air shala at Rasa with its timber roof, set for practice" position="50% 60%">
        <div className={styles.heroInner}>
          <h1 className={`display ${styles.heroTitle}`} data-hero-item>
            Your home <em>away</em> from home
          </h1>
          <div className={styles.heroActions} data-hero-item>
            <Button href="/yoga-home/" variant="sand">
              Book a Room
            </Button>
            <Button href="/book-a-class/" variant="light">
              Book a Class
            </Button>
            <FilmButton id={films.home.id} title={films.home.title} tone="photo" />
          </div>
        </div>
      </PhotoHero>

      {/* Pillars */}
      <section aria-label="What Rasa offers" className={styles.pillarsWrap}>
        <ul role="list" className={`container ${styles.pillars}`} data-reveal-stagger>
          {home.pillars.map((p) => (
            <li key={p.label}>
              <Link href={p.href} className={styles.pillar}>
                <PillarIcon name={p.icon} className={styles.pillarIcon} />
                <span>{p.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Intro */}
      <section className={`section ${styles.intro}`} aria-labelledby="intro-title">
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introMedia}>
            <div className={styles.arch} data-reveal-image>
              <ResponsiveImage
                slug="guest-tea-rattan"
                alt="A guest with a cup of tea in a rattan chair by the open doors"
                sizes="(min-width: 900px) 34vw, 86vw"
              />
            </div>
            <Botanical name="sprig" className={styles.introSprig} />
          </div>
          <div className={styles.introText}>
            <h2 id="intro-title" className="sr-only">
              Rasa Ubud Yoga Coliving
            </h2>
            <p className={`display ${styles.introLede}`} data-reveal>
              {home.intro}
            </p>
            <ul role="list" className={styles.ctaList} data-reveal-stagger>
              {home.ctas.map((c) => (
                <li key={c.label}>
                  <ArrowLink href={c.href}>{c.label}</ArrowLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Life at Rasa: text panel + two photos, one shared height */}
      <section aria-labelledby="life-title" className={styles.life}>
        <div className={`container ${styles.lifeGrid}`}>
          <div className={styles.lifeText} data-reveal>
            <Botanical name="frangipani" className={styles.lifeFlower} />
            <h2 id="life-title" className={`display ${styles.lifeTitle}`}>
              {home.subtitle.split(' of ')[0]} <em>of {home.subtitle.split(' of ')[1]}</em>
            </h2>
            <p className="muted">{home.life}</p>
            <ArrowLink href="/about-us/">About Us</ArrowLink>
          </div>
          <figure className={styles.lifeMain} data-reveal-image>
            <ResponsiveImage
              slug="poolside-coconuts"
              alt="Two guests sharing fresh coconuts by the pool"
              sizes="(min-width: 900px) 46vw, 92vw"
              data-parallax="5"
            />
          </figure>
          <figure className={styles.lifeSide} data-reveal-image>
            <ResponsiveImage slug="shala-marigold-steps" alt="Marigold offerings on the steps up to the shala" sizes="(min-width: 900px) 20vw, 40vw" />
          </figure>
        </div>
      </section>

      {/* On-site shala */}
      <section className={styles.shala} aria-labelledby="shala-title" data-theme="dark">
        <div className={styles.shalaMedia}>
          <ResponsiveImage slug="shala-interior" alt="" sizes="100vw" data-parallax="8" />
        </div>
        <div className={`container ${styles.shalaInner}`}>
          <h2 id="shala-title" className={`display ${styles.shalaTitle}`} data-reveal>
            <span>{home.shala.heading[0]}</span>
            <span>{home.shala.heading[1]}</span>
          </h2>
          <div className={styles.shalaText} data-reveal>
            <p className="lede">{home.shala.text}</p>
            <Button href="/book-a-class/" variant="sand">
              Book a Class
            </Button>
            <ReviewFlag>“daily” removed from this sentence. The published timetable doesn’t show classes every day.</ReviewFlag>
          </div>
        </div>
      </section>

      {/* Paths */}
      <section className={`section ${styles.paths}`} aria-labelledby="paths-title">
        <div className={`container ${styles.pathsLayout}`}>
          <div className={styles.pathsHead} data-reveal>
            <h2 id="paths-title" className={`display ${styles.pathsTitle}`}>
              Stay, practise, <em>gather</em>
            </h2>
          </div>
          <ul role="list" className={styles.pathGrid} data-reveal-stagger>
            {paths.map((p) => (
              <li key={p.title}>
                <Link href={p.href} className={styles.pathCard}>
                  <div className={styles.pathMedia}>
                    <ResponsiveImage slug={p.image} alt={p.alt} sizes="(min-width: 900px) 24vw, 90vw" />
                  </div>
                  <h3 className={`display ${styles.pathTitle}`}>{p.title}</h3>
                  <p className={styles.pathText}>{p.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

