'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './Marquee.module.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Giant scrolling display line (live site: Edensor 200px, sand, continuous left scroll).
 * - Text is exposed once to assistive tech; the moving copies are aria-hidden.
 * - Pause control (WCAG 2.2.2). Pauses automatically when off screen.
 * - Reduced motion: static, wrapped text.
 */
export default function Marquee({ text, speed = 32, size = 'xl' }) {
  const root = useRef(null);
  const track = useRef(null);
  const tween = useRef(null);
  const paused = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        tween.current = gsap.to(track.current, { xPercent: -50, ease: 'none', duration: speed, repeat: -1 });
        ScrollTrigger.create({
          trigger: root.current,
          start: 'top bottom',
          end: 'bottom top',
          onToggle: (self) => {
            if (paused.current) return;
            if (self.isActive) tween.current?.play();
            else tween.current?.pause();
          },
        });
        return () => {
          tween.current = null;
        };
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const toggle = () => {
    paused.current = !paused.current;
    setIsPaused(paused.current);
    if (paused.current) tween.current?.pause();
    else tween.current?.play();
  };

  const copy = (
    <span className={styles.copy}>
      {[0, 1].map((i) => (
        <span key={i} className={styles.item}>
          {text}
          <svg className={styles.star} viewBox="-10 -10 20 20" aria-hidden="true">
            <path d="M0-9C1 -2 2 -1 9 0 2 1 1 2 0 9-1 2-2 1-9 0-2-1-1-2 0-9Z" fill="currentColor" />
          </svg>
        </span>
      ))}
    </span>
  );

  return (
    <div ref={root} className={styles.marquee} data-size={size}>
      <p className="sr-only">{text}</p>
      <div ref={track} className={styles.track} aria-hidden="true">
        {copy}
        {copy}
      </div>
      <button type="button" className={styles.pause} onClick={toggle} aria-pressed={isPaused}>
        <span className="sr-only">{isPaused ? 'Play' : 'Pause'} scrolling text</span>
        <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
          {isPaused ? (
            <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
          ) : (
            <path d="M4.5 2.5v11M11.5 2.5v11" stroke="currentColor" strokeWidth="1.6" />
          )}
        </svg>
      </button>
    </div>
  );
}
