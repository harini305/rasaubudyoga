'use client';

import { createContext, useCallback, useContext, useEffect, useRef } from 'react';
import ContactDialog from './ContactDialog';

const ContactContext = createContext({ open: () => {} });

export function ContactProvider({ children }) {
  const dialog = useRef(null);
  const open = useCallback(() => dialog.current?.open(), []);

  // Deep link: /any-page/#contact opens the dialog.
  useEffect(() => {
    if (window.location.hash === '#contact') open();
  }, [open]);

  return (
    <ContactContext.Provider value={{ open }}>
      {children}
      <ContactDialog ref={dialog} />
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}

/** Opens the contact dialog. Without JS it is a plain link to the footer contact block. */
export function ContactTrigger({ children, className, onBeforeOpen, ...rest }) {
  const { open } = useContact();
  return (
    <a
      href="#contact"
      className={className}
      aria-haspopup="dialog"
      onClick={(e) => {
        e.preventDefault();
        onBeforeOpen?.();
        open();
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
