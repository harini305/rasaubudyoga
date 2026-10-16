'use client';

import { useRef, useState } from 'react';
import styles from './FilmButton.module.css';

/**
 * The owner's YouTube films (verified IDs from the audit) as a click-to-play modal instead of a
 * heavy autoplaying background iframe. Nothing loads from YouTube until the visitor asks.
 * Without JS the link simply opens the film on YouTube.
 */
export default function FilmButton({ id, title, label = 'Watch the film', tone = 'light' }) {
  const dialog = useRef(null);
  const [playing, setPlaying] = useState(false);

  const open = (e) => {
    e.preventDefault();
    setPlaying(true);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();

  return (
    <>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        className={styles.trigger}
        data-tone={tone}
        onClick={open}
        aria-haspopup="dialog"
      >
        <span className={styles.disc} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14">
            <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
          </svg>
        </span>
        <span className={styles.label}>{label}</span>
      </a>

      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label={`Film: ${title}`}
        onClose={() => setPlaying(false)}
        onClick={(e) => e.target === dialog.current && close()}
      >
        <button type="button" className={styles.close} onClick={close}>
          Close
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </button>
        <div className={styles.frame}>
          {playing && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
        </div>
      </dialog>
    </>
  );
}
