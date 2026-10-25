'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const KEY = 'sws-cookie-consent';
type Consent = 'accepted' | 'rejected' | null;

export function getConsent(): Consent {
  if (typeof window === 'undefined') return null;
  const v = window.localStorage.getItem(KEY);
  return v === 'accepted' || v === 'rejected' ? v : null;
}

/**
 * Runs in <head> before first paint: a visitor who already chose gets
 * html[data-cc], which hides the server-rendered banner via globals.css.
 */
export const consentBootScript = `try{if(localStorage.getItem('${KEY}'))document.documentElement.setAttribute('data-cc','')}catch(e){}`;

export function CookieConsent() {
  // Rendered in the server HTML so it paints with the page instead of
  // popping in after hydration (it was the mobile LCP element, ~2.4s late).
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (getConsent()) setVisible(false);
  }, []);

  if (!visible) return null;

  function decide(value: 'accepted' | 'rejected') {
    window.localStorage.setItem(KEY, value);
    setVisible(false);
    // Notify any listeners (e.g. GA loader) that consent changed.
    window.dispatchEvent(new CustomEvent('sws:consent', { detail: value }));
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="cookie-banner fixed inset-x-3 bottom-3 md:left-auto md:right-5 md:bottom-5 md:max-w-[420px] z-[800] bg-ink-100/95 border border-sun/20 rounded-2xl shadow-[0_18px_44px_-12px_rgba(0,0,0,0.6)] p-5 text-bone"
    >
      <p className="text-sm leading-[1.6] text-bone/85 m-0">
        We use cookies to understand how visitors use our site so we can improve it. None of this is
        used to identify you personally. See our{' '}
        <Link href="/cookie-policy" className="underline text-sun hover:text-clay">
          Cookie Policy
        </Link>
        .
      </p>
      <div className="flex gap-2 mt-4 justify-end">
        <button
          type="button"
          onClick={() => decide('rejected')}
          className="px-4 py-2 rounded-full text-xs font-bold tracking-wide border border-sun/30 text-bone/85 hover:border-sun/60"
        >
          Reject
        </button>
        <button
          type="button"
          onClick={() => decide('accepted')}
          className="px-4 py-2 rounded-full text-xs font-extrabold tracking-wide bg-gradient-to-b from-clay to-terracotta text-bone hover:from-terracotta hover:to-adobe shadow-[0_4px_14px_rgba(194,86,43,0.4)]"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
