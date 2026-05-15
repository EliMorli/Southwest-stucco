'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { getConsent } from './CookieConsent';

/**
 * Consent-gated Microsoft Clarity loader.
 * Active only when NEXT_PUBLIC_CLARITY_ID is set and the visitor
 * has accepted cookies.
 */
export function MicrosoftClarity({ id }: { id: string }) {
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
    <Script id="clarity-init" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${id}");
      `}
    </Script>
  );
}
