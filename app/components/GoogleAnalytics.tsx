'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-CY5S612NZT';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Check if user has consented to cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      if (cookieConsent === 'accepted') {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      } else if (cookieConsent === 'rejected') {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'denied'
        });
      }
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Set default consent mode to 'denied' for GDPR compliance
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
            
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
