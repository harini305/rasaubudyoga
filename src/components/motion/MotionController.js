'use client';

import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * One place for page motion. Pages stay server components and opt in with data attributes:
 *
 *   data-hero-item       hero entrance (staggered, on load)
 *   data-hero-media      slow settle-in scale on the hero photo
 *   data-reveal          fade-and-rise when scrolled into view
 *   data-reveal-stagger  staggers its direct children
 *   data-reveal-image    frame rises in while the inner image settles from a slight zoom
 *   data-parallax        gentle vertical drift (desktop only; image must sit in a clipped frame)
 *   data-drift           horizontal drift on scroll (large display words)
 *
 * Content is visible by default. Animations only set "from" states at runtime, so if JS or GSAP
 * fails nothing stays hidden (hero items also have a CSS fail-safe in globals.css).
 * Everything is reverted and rebuilt per route, so ScrollTriggers never duplicate.
 */
export default function MotionController() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const html = document.documentElement;
      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: '(prefers-reduced-motion: no-preference)',
          desktop: '(min-width: 768px)',
        },
        ({ conditions }) => {
          const { motion, desktop } = conditions;
          html.classList.add('motion-ready');
          if (!motion) {
            const items = gsap.utils.toArray('[data-hero-item]');
            if (items.length) gsap.set(items, { opacity: 1 });
            return;
          }

          const rise = desktop ? 36 : 18;

          const hero = gsap.utils.toArray('[data-hero-item]');
          if (hero.length) {
            gsap.fromTo(
              hero,
              { opacity: 0, y: rise },
              { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.12, delay: 0.1 },
            );
          }

          gsap.utils.toArray('[data-hero-media]').forEach((el) => {
            gsap.fromTo(el, { scale: 1.08 }, { scale: 1, duration: 2, ease: 'power2.out' });
          });

          gsap.utils.toArray('[data-reveal]').forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: rise,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 88%', once: true },
            });
          });

          gsap.utils.toArray('[data-reveal-stagger]').forEach((group) => {
            gsap.from(group.children, {
              opacity: 0,
              y: rise * 0.8,
              duration: 0.9,
              ease: 'power3.out',
              stagger: 0.09,
              scrollTrigger: { trigger: group, start: 'top 86%', once: true },
            });
          });

          gsap.utils.toArray('[data-reveal-image]').forEach((frame) => {
            const img = frame.querySelector('img:not([data-parallax])');
            const tl = gsap.timeline({ scrollTrigger: { trigger: frame, start: 'top 88%', once: true } });
            tl.from(frame, { opacity: 0, y: rise * 1.2, duration: 1.2, ease: 'power3.out' });
            if (img) tl.from(img, { scale: 1.14, duration: 1.6, ease: 'power2.out' }, 0);
          });

          if (desktop) {
            gsap.utils.toArray('[data-parallax]').forEach((el) => {
              const amount = Number(el.dataset.parallax) || 6;
              gsap.fromTo(
                el,
                { yPercent: -amount },
                {
                  yPercent: amount,
                  ease: 'none',
                  scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
                },
              );
            });
          }

          gsap.utils.toArray('[data-drift]').forEach((el) => {
            gsap.fromTo(
              el,
              { xPercent: desktop ? 12 : 6 },
              {
                xPercent: desktop ? -12 : -6,
                ease: 'none',
                scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
              },
            );
          });
        },
      );

      // Lazy images and web fonts change layout after init; re-measure trigger positions.
      const refresh = () => ScrollTrigger.refresh();
      document.fonts?.ready.then(refresh);
      window.addEventListener('load', refresh, { once: true });
      const imgs = Array.from(document.querySelectorAll('main img[loading="lazy"]'));
      let pending = 0;
      const onImg = () => {
        clearTimeout(pending);
        pending = setTimeout(refresh, 200);
      };
      imgs.forEach((img) => img.addEventListener('load', onImg, { once: true }));

      return () => {
        mm.revert();
        clearTimeout(pending);
        window.removeEventListener('load', refresh);
        imgs.forEach((img) => img.removeEventListener('load', onImg));
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
