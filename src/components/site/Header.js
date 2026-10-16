'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { contact, darkRoutes, nav, overlayRoutes } from '@/content/site';
import { ContactTrigger } from '@/components/contact/ContactProvider';
import { ExternalIcon } from '@/components/Button';
import Botanical from '@/components/Botanical';
import styles from './Header.module.css';

const withSlash = (p) => (p.endsWith('/') ? p : `${p}/`);

function Logo({ light, lazy }) {
  const tone = light ? 'light' : 'gold';
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/brand/logo-${tone}-240.webp`}
      srcSet={`/brand/logo-${tone}-240.webp 240w, /brand/logo-${tone}-480.webp 480w`}
      sizes="10rem"
      width="240"
      height="108"
      alt="Rasa Ubud Yoga Coliving"
      className={styles.logoImg}
      loading={lazy ? 'lazy' : undefined}
    />
  );
}

export default function Header() {
  const path = withSlash(usePathname() || '/');
  const isDark = darkRoutes.includes(path);
  const isOverlay = overlayRoutes.includes(path);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 360 && y > last + 4 && !menuRef.current?.open);
      if (y < last - 4 || y <= 360) setHidden(false);
      last = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [path]);

  // Close the mobile menu after navigating.
  useEffect(() => {
    menuRef.current?.close();
  }, [path]);

  const tone = isOverlay && !scrolled ? 'photo' : isDark ? 'dark' : 'light';
  const lightLogo = tone !== 'light';

  const openMenu = () => menuRef.current?.showModal();
  const closeMenu = () => menuRef.current?.close();

  return (
    <>
      <header
        className={styles.header}
        data-tone={tone}
        data-solid={scrolled ? 'true' : 'false'}
        data-hidden={hidden ? 'true' : 'false'}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="Rasa Ubud Yoga Coliving, home">
            <Logo light={lightLogo} />
          </Link>

          <nav className={styles.nav} aria-label="Main">
            <ul role="list" className={styles.links}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`link-line ${styles.link}`}
                    aria-current={path === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ContactTrigger className={styles.contact}>Contact Us</ContactTrigger>

          <button type="button" className={styles.menuButton} onClick={openMenu} aria-haspopup="dialog">
            <span className={styles.menuLabel}>Menu</span>
            <span className={styles.burger} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <dialog ref={menuRef} className={styles.menu} aria-label="Site menu" data-theme="dark">
        <div className={styles.menuTop}>
          <Link href="/" className={styles.logo} onClick={closeMenu} aria-label="Rasa Ubud Yoga Coliving, home">
            <Logo light lazy />
          </Link>
          <button type="button" className={styles.menuClose} onClick={closeMenu}>
            <span className={styles.menuLabel}>Close</span>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile">
          <ul role="list" className={styles.menuLinks}>
            {nav.map((item, i) => (
              <li key={item.href} style={{ '--i': i }}>
                <Link
                  href={item.href}
                  className={styles.menuLink}
                  aria-current={path === item.href ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  <span className={styles.menuIndex} aria-hidden="true">
                    0{i + 1}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
            <li style={{ '--i': nav.length }}>
              <ContactTrigger className={styles.menuLink} onBeforeOpen={closeMenu}>
                <span className={styles.menuIndex} aria-hidden="true">
                  0{nav.length + 1}
                </span>
                Contact Us
              </ContactTrigger>
            </li>
          </ul>
        </nav>
        <div className={styles.menuFoot}>
          <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.menuWa}>
            WhatsApp {contact.whatsappDisplay} <ExternalIcon />
            <span className="sr-only"> (opens WhatsApp in a new tab)</span>
          </a>
          <Botanical name="sprig" className={styles.menuSprig} />
        </div>
      </dialog>
    </>
  );
}
