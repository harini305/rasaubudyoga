'use client';

import { useId, useImperativeHandle, useRef, useState } from 'react';
import { contact, whatsappLink } from '@/content/site';
import { ExternalIcon } from '@/components/Button';
import Botanical from '@/components/Botanical';
import styles from './ContactDialog.module.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { name: '', email: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address, like name@example.com.';
  return errors;
}

function composeWhatsApp({ name, email, message }) {
  const lines = ['Hi Rasa,'];
  if (message.trim()) lines.push(message.trim());
  const sig = [name.trim(), email.trim()].filter(Boolean).join(' · ');
  if (sig) lines.push(`— ${sig}`);
  return whatsappLink(lines.join('\n\n'));
}

export default function ContactDialog({ ref }) {
  const dialogRef = useRef(null);
  const formRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'not-sent'
  const id = useId();

  useImperativeHandle(ref, () => ({
    open() {
      setStatus('idle');
      dialogRef.current?.showModal();
    },
  }));

  const close = () => dialogRef.current?.close();

  const update = (field) => (e) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (errors[field]) setErrors(validate(next));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      // Focus directly: aria-invalid isn't in the DOM until React re-renders.
      formRef.current?.elements.namedItem(firstInvalid)?.focus();
      return;
    }
    // Delivery is not connected (contact.formDeliveryEnabled === false). Never claim success.
    setStatus('not-sent');
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={`${id}-title`}
      onClick={(e) => {
        if (e.target === dialogRef.current) close(); // backdrop click
      }}
    >
      <div className={styles.panel} data-theme="light">
        <button type="button" className={styles.close} onClick={close} aria-label="Close contact dialog">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </button>

        <div className={styles.aside} data-theme="dark">
          <Botanical name="frangipani" className={styles.flower} />
          <h2 id={`${id}-title`} className={`display ${styles.title}`}>
            Contact us
          </h2>
          <p className={styles.asideText}>The quickest way to reach Rasa is WhatsApp.</p>
          <a className={styles.whatsapp} href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <span className={styles.waLabel}>WhatsApp</span>
            <span className={styles.waNumber}>{contact.whatsappDisplay}</span>
            <span className={styles.waCta}>
              Chat with us <ExternalIcon />
            </span>
            <span className="sr-only"> (opens WhatsApp in a new tab)</span>
          </a>
        </div>

        <div className={styles.formWrap}>
          {status === 'not-sent' ? (
            <div className={styles.result} role="status" aria-live="polite">
              <p className={styles.resultTitle}>Your message hasn’t been sent.</p>
              <p className="muted">
                Online delivery for this form isn’t set up yet. Send the same message on WhatsApp instead. We’ve
                pre-filled it for you.
              </p>
              <div className={styles.resultActions}>
                <a className={styles.submit} href={composeWhatsApp(values)} target="_blank" rel="noopener noreferrer">
                  Continue on WhatsApp <ExternalIcon />
                  <span className="sr-only"> (opens WhatsApp in a new tab)</span>
                </a>
                <button type="button" className={styles.textButton} onClick={() => setStatus('idle')}>
                  Back to form
                </button>
              </div>
            </div>
          ) : (
            <form ref={formRef} className={styles.form} noValidate onSubmit={onSubmit}>
              <div className={styles.field}>
                <label htmlFor={`${id}-name`}>Full Name</label>
                <input id={`${id}-name`} name="name" type="text" autoComplete="name" value={values.name} onChange={update('name')} />
              </div>
              <div className={styles.field}>
                <label htmlFor={`${id}-email`}>
                  Email <span aria-hidden="true">*</span>
                  <span className="sr-only"> (required)</span>
                </label>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={values.email}
                  onChange={update('email')}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? `${id}-email-error` : undefined}
                />
                {errors.email && (
                  <p id={`${id}-email-error`} className={styles.error}>
                    {errors.email}
                  </p>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor={`${id}-message`}>Message</label>
                <textarea id={`${id}-message`} name="message" rows={4} value={values.message} onChange={update('message')} />
              </div>
              {!contact.formDeliveryEnabled && (
                <p className={styles.notice} id={`${id}-notice`}>
                  <strong>Form not connected yet.</strong> Messages can’t be delivered from this form for now. Use
                  WhatsApp to reach us.
                </p>
              )}
              <button type="submit" className={styles.submit} aria-describedby={`${id}-notice`}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
