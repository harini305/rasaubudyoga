import Link from 'next/link';
import { booking, contact, nav, site, social } from '@/content/site';
import { ContactTrigger } from '@/components/contact/ContactProvider';
import { ExternalIcon } from '@/components/Button';
import styles from './Footer.module.css';

function External({ href, children, service }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`link-line ${styles.link}`}>
      {children}
      <ExternalIcon />
      <span className="sr-only"> (opens {service} in a new tab)</span>
    </a>
  );
}

// The live site had no footer. This one only states verified facts. No address, email,
// Instagram or legal links exist yet (owner questions 07 §3).
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} data-theme="dark" id="contact">
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-light-240.webp"
            srcSet="/brand/logo-light-240.webp 240w, /brand/logo-light-480.webp 480w"
            sizes="8rem"
            width="240"
            height="108"
            alt="Rasa Ubud Yoga Coliving"
            loading="lazy"
            className={styles.logo}
          />
          <p className={`display ${styles.tagline}`}>
            Your home away from home, <em>in the heart of Ubud</em>
          </p>
        </div>

        <nav aria-label="Footer" className={styles.col}>
          <h2 className={styles.heading}>Explore</h2>
          <ul role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={`link-line ${styles.link}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <h2 className={styles.heading}>Book online</h2>
          <ul role="list">
            <li>
              <External href={booking.classSchedule} service="Momoyoga">
                Class schedule
              </External>
            </li>
            <li>
              <External href={booking.eventSchedule} service="Momoyoga">
                Events schedule
              </External>
            </li>
            <li>
              <External href={booking.airbnb} service="Airbnb">
                Rooms on Airbnb
              </External>
            </li>
            <li>
              <External href={booking.direct} service="the direct booking site">
                Rooms, direct booking
              </External>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h2 className={styles.heading}>Contact</h2>
          <ul role="list">
            <li>
              <External href={contact.whatsappUrl} service="WhatsApp">
                WhatsApp {contact.whatsappDisplay}
              </External>
            </li>
            <li>
              <ContactTrigger className={`link-line ${styles.link}`}>Contact form</ContactTrigger>
            </li>
            <li>
              <External href={social.youtube} service="YouTube">
                YouTube
              </External>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottom}`}>
          <p>
            © {year} {site.name} · {site.region}
          </p>
          <p>Bookings are completed on Momoyoga, Airbnb or our direct-booking page.</p>
        </div>
      </div>
    </footer>
  );
}
