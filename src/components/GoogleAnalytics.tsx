
'use client';

import { useConsentManager  } from '@c15t/nextjs';
import Script from 'next/script';

export function GoogleAnalytics() {
  const { hasConsented } = useConsentManager();

  return (
    <>
      {hasConsented() && (
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WHMB6FQ3ZC"
          strategy="afterInteractive"
        />
      )}
      {hasConsented() && (
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WHMB6FQ3ZC');
          `}
        </Script>
      )}
    </>
  );
}
