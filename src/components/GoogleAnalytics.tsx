'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { getConsent } from './CookieConsent';

export function GoogleAnalytics({ id }: { id: string }) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(getConsent() === 'accepted');
    const onConsent = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setAllowed(detail === 'accepted');
    };
    window.addEventListener('sws:consent', onConsent);
    return () => window.removeEventListener('sws:consent', onConsent);
  }, []);

  if (!id || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
