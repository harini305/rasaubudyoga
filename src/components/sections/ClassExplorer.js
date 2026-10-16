'use client';

import { useId, useRef, useState } from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';
import styles from './ClassExplorer.module.css';

/**
 * Tabbed class browser: class names on the left, photo + description on the right.
 * All panels are in the HTML (inactive ones use `hidden`), so every description stays crawlable.
 * Keyboard: arrow keys / Home / End move between tabs (WAI-ARIA tabs pattern).
 */
export default function ClassExplorer({ classes }) {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const id = useId();

  const focusTab = (i) => {
    const n = (i + classes.length) % classes.length;
    setActive(n);
    tabs.current[n]?.focus();
  };

  const onKeyDown = (e) => {
    const map = { ArrowDown: active + 1, ArrowRight: active + 1, ArrowUp: active - 1, ArrowLeft: active - 1, Home: 0, End: classes.length - 1 };
    if (e.key in map) {
      e.preventDefault();
      focusTab(map[e.key]);
    }
  };

  return (
    <div className={styles.explorer}>
      <div role="tablist" aria-label="Classes" aria-orientation="vertical" className={styles.tabs} onKeyDown={onKeyDown}>
        {classes.map((c, i) => (
          <button
            key={c.name}
            ref={(el) => (tabs.current[i] = el)}
            role="tab"
            type="button"
            id={`${id}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(i)}
          >
            <span className={styles.num} aria-hidden="true">
              0{i + 1}
            </span>
            <span className={`display ${styles.name}`}>{c.name}</span>
            <svg className={styles.arrow} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </div>

      {classes.map((c, i) => (
        <div
          key={c.name}
          role="tabpanel"
          id={`${id}-panel-${i}`}
          aria-labelledby={`${id}-tab-${i}`}
          hidden={active !== i}
          className={styles.panel}
        >
          <div className={styles.media}>
            <ResponsiveImage slug={c.image} alt={c.name} sizes="(min-width: 900px) 30vw, 90vw" />
          </div>
          <div className={styles.copy}>
            <h3 className={`display ${styles.panelTitle}`}>{c.name}</h3>
            <p>{c.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
