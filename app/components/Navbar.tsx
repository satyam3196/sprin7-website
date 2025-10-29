import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ComingSoonModal from './ComingSoonModal';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="flex justify-between items-center h-16 md:px-4 lg:px-6 xl:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center relative h-12">
          <Image
            src="/Sprin7_logo_transparent.PNG"
            alt="Sprin7 Logo"
            width={120}
            height={48}
            className="object-contain h-12 w-auto md:h-10 lg:h-12"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center md:space-x-3 lg:space-x-6 xl:space-x-8 relative">
          <Link href="/" className="text-gray-700 hover:text-deep-teal transition duration-150 md:text-sm lg:text-base">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-deep-teal transition duration-150 md:text-sm lg:text-base">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-deep-teal transition duration-150 md:text-sm lg:text-base">
            Services
          </Link>
          <Link href="/product" className="text-gray-700 hover:text-deep-teal transition duration-150 md:text-sm lg:text-base">
            Product
          </Link>
          <Link href="/events-programs" className="text-gray-700 hover:text-deep-teal transition duration-150 md:text-sm lg:text-base">
            Events & Programs
          </Link>
          <Link href="/learning-hub" className="text-gray-700 hover:text-deep-teal transition duration-150 md:text-sm lg:text-base">
            Learning Hub
          </Link>
          <Link href="/become-sprin7er" className="text-gray-700 hover:text-deep-teal transition duration-150 md:text-sm lg:text-base">
            Build Income
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-deep-teal transition duration-150 md:text-sm lg:text-base">
            Contact Support
          </Link>
        </div>

        {/* Right side: Try our app button and language selector */}
        <div className="hidden md:flex items-center md:space-x-2 lg:space-x-4 relative">
          {/* Try our app button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1 md:gap-2 md:px-3 md:py-1.5 lg:px-5 xl:px-6 lg:py-2 bg-deep-teal text-white rounded-full font-medium hover:bg-deep-teal/90 transition md:text-sm lg:text-base whitespace-nowrap"
          >
            <span className="hidden md:inline lg:hidden">Try app</span>
            <span className="hidden lg:inline">Try our app</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 lg:h-5 lg:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>

          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1 text-gray-700 hover:text-deep-teal transition"
            >
              eng
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200">
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg">
                  English
                </button>
                <button className="block w-full text-left px-4 py-2 text-gray-400 hover:bg-gray-100 rounded-b-lg" disabled>
                  More languages coming soon
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden relative">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-deep-teal focus:outline-none focus:ring-2 focus:ring-inset focus:ring-deep-teal"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div ref={mobileMenuRef} className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 relative">
          <Link href="/" onClick={closeMenu} className="block px-3 py-2 text-gray-700 hover:text-deep-teal transition duration-150">
            Home
          </Link>
          <Link href="/about" onClick={closeMenu} className="block px-3 py-2 text-gray-700 hover:text-deep-teal transition duration-150">
            About
          </Link>
          <Link href="/services" onClick={closeMenu} className="block px-3 py-2 text-gray-700 hover:text-deep-teal transition duration-150">
            Services
          </Link>
          <Link href="/product" onClick={closeMenu} className="block px-3 py-2 text-gray-700 hover:text-deep-teal transition duration-150">
            Product
          </Link>
          <Link href="/events-programs" onClick={closeMenu} className="block px-3 py-2 text-gray-700 hover:text-deep-teal transition duration-150">
            Events & Programs
          </Link>
          <Link href="/learning-hub" onClick={closeMenu} className="block px-3 py-2 text-gray-700 hover:text-deep-teal transition duration-150">
            Learning Hub
          </Link>
          <Link href="/become-sprin7er" onClick={closeMenu} className="block px-3 py-2 text-gray-700 hover:text-deep-teal transition duration-150">
            Build Income
          </Link>
          <Link href="/contact" onClick={closeMenu} className="block px-3 py-2 text-gray-700 hover:text-deep-teal transition duration-150">
            Contact Support
          </Link>
          <button
            onClick={() => {
              setIsModalOpen(true);
              closeMenu();
            }}
            className="block w-full text-left px-3 py-2 text-deep-teal font-semibold hover:text-deep-teal/80 transition duration-150"
          >
            Try our app
          </button>
        </div>
      </div>
    </nav>

    {/* Coming Soon Modal */}
    <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar; 