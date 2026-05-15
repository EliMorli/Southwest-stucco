'use client';

import { useEffect } from 'react';
import { track } from '@/lib/analytics';

/**
 * Global click listener that fires GA4 / Clarity events for
 * phone (tel:) and email (mailto:) links anywhere on the page.
 * Lets us measure conversion intent without refactoring every anchor.
 */
export function AnalyticsListener() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      if (href.startsWith('tel:')) {
        track('phone_click', { label: href.slice(4), location: window.location.pathname });
      } else if (href.startsWith('mailto:')) {
        track('email_click', {
          label: href.slice(7).split('?')[0],
          location: window.location.pathname,
        });
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
