import styles from './SplitHero.module.css';

/**
 * Opening section of the forest-green pages: text column + photo column.
 * `media` is any node (single arch image or a small collage).
 */
export default function SplitHero({ eyebrow, title, children, media, facts }) {
  return (
    <section className={styles.hero} aria-labelledby="page-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <h1 id="page-title" className="sr-only">
            {eyebrow}
          </h1>
          <p className={`display ${styles.title}`} data-hero-item>
            {title}
          </p>
          <div className={styles.body} data-hero-item>
            {children}
          </div>
          {facts && (
            <dl className={styles.facts} data-hero-item>
              {facts.map((f) => (
                <div key={f.label} className={styles.fact}>
                  <dt>{f.label}</dt>
                  <dd className="display">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        <div className={styles.media} data-hero-item>
          {media}
        </div>
      </div>
    </section>
  );
}
