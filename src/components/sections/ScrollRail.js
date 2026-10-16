'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ScrollRail.module.css';

/**
 * Horizontal, swipeable, keyboard-scrollable rail with previous/next controls.
 * Replaces the live site's autoplaying Swiper sliders: no autoplay, native scroll-snap.
 * Children must be <li> elements.
 */
export default function ScrollRail({ label, children, size = 'md', controls = true, header }) {
  const track = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  }, []);

  useEffect(() => {
    measure();
    const el = track.current;
    el?.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      el?.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const step = (dir) => {
    const el = track.current;
    const item = el?.querySelector(':scope > li');
    if (!el || !item) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * (item.getBoundingClientRect().width + gap), behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div className={styles.rail} data-size={size}>
      {(controls || header) && (
        <div className={styles.controls}>
          {header && <div className={styles.header}>{header}</div>}
          {controls && (
          <div className={styles.buttons}>
          <button type="button" onClick={() => step(-1)} disabled={edges.start} aria-label={`Previous: ${label}`}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" onClick={() => step(1)} disabled={edges.end} aria-label={`Next: ${label}`}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          </div>
          )}
        </div>
      )}
      {/* tabIndex lets keyboard users scroll the rail with arrow keys. */}
      <ul ref={track} className={styles.track} role="list" aria-label={label} tabIndex={0}>
        {children}
      </ul>
    </div>
  );
}
