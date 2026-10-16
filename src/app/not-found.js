import Button, { ArrowLink } from '@/components/Button';
import Botanical from '@/components/Botanical';
import { nav } from '@/content/site';
import styles from './not-found.module.css';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" data-theme="light" className={`themed ${styles.main}`}>
      <div className={`container ${styles.inner}`}>
        <Botanical name="frangipani" className={styles.flower} />
        <h1 className={`display ${styles.title}`}>
          This path has <em>wandered off</em>
        </h1>
        <p className={`lede ${styles.text}`}>
          The page you’re looking for isn’t here. Some older pages from the previous website were removed.
        </p>
        <div className={styles.actions}>
          <Button href="/">Main Home</Button>
        </div>
        <ul role="list" className={styles.links}>
          {nav.slice(1).map((n) => (
            <li key={n.href}>
              <ArrowLink href={n.href}>{n.label}</ArrowLink>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
