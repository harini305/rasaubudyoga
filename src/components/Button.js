import Link from 'next/link';
import styles from './Button.module.css';

export function ExternalIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" focusable="false">
      <path d="M5 3h8v8M13 3 3 13" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Leaf-cut button (two opposite rounded corners).
 * variant: 'solid' (forest) | 'sand' (light sand + forest text) | 'outline' | 'light' (outline on photos)
 * external: opens in a new tab and announces the destination service to screen readers.
 */
export default function Button({ href, children, variant = 'solid', external, service, className = '', ...rest }) {
  const cls = `${styles.button} ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>
        <span>{children}</span>
        <ExternalIcon />
        <span className="sr-only">{service ? ` (opens ${service} in a new tab)` : ' (opens in a new tab)'}</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      <span>{children}</span>
    </Link>
  );
}

export function ArrowLink({ href, children, external, service }) {
  const content = (
    <>
      <span className={styles.arrowText}>{children}</span>
      <svg className={styles.arrow} viewBox="0 0 48 12" width="48" height="12" aria-hidden="true" focusable="false">
        <path d="M0 6h46" stroke="currentColor" strokeWidth="1" />
        <path className={styles.arrowHead} d="M41 1.5 46.5 6 41 10.5" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
  if (external) {
    return (
      <a href={href} className={styles.arrowLink} target="_blank" rel="noopener noreferrer">
        {content}
        <span className="sr-only">{service ? ` (opens ${service} in a new tab)` : ' (opens in a new tab)'}</span>
      </a>
    );
  }
  return (
    <Link href={href} className={styles.arrowLink}>
      {content}
    </Link>
  );
}
