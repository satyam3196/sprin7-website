'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    // Enable Google Analytics or other tracking here
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    // Disable tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-deep-teal shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-deep-teal mb-2">
              🍪 We use cookies
            </h3>
            <p className="text-gray-700 text-sm">
              We use cookies to improve your experience on our site, analyze site traffic, and provide personalized content. 
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
              <Link href="/privacy-policy" className="text-deep-teal underline font-semibold hover:text-signal-blue">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleReject}
              className="px-6 py-2 border-2 border-deep-teal text-deep-teal rounded-full font-semibold hover:bg-cloud-gray transition"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-deep-teal text-white rounded-full font-semibold hover:bg-deep-teal/90 transition"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
