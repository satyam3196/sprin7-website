import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-purple-900/95 to-violet-900/95 backdrop-blur-sm z-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      {/* <nav className="fixed top-0 left-0 right-0 bg-gray-900 backdrop-blur-sm z-50"> 
      <div className="absolute bg-gray-900 "></div> */}
      <div className="flex justify-between items-center h-16 px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center relative">
          <h1 className="text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">Sprin7</h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 relative">
          <Link href="/about" className="text-purple-200 hover:text-white transition duration-150">
            About
          </Link>
          <Link href="/services" className="text-purple-200 hover:text-white transition duration-150">
            Services
          </Link>
          <Link href="/become-sprin7er" className="text-purple-200 hover:text-white transition duration-150">
            Become a Sprin7er
          </Link>
          <Link href="/business" className="text-purple-200 hover:text-white transition duration-150">
            Business Solutions
          </Link>
          <Link href="/sustainability" className="text-purple-200 hover:text-white transition duration-150">
            Sustainability
          </Link>
          <Link href="/security" className="text-purple-200 hover:text-white transition duration-150">
            Security
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden relative">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-purple-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
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
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-gray-900 to-purple-900/95 relative">
          <Link href="/about" onClick={closeMenu} className="block px-3 py-2 text-purple-200 hover:text-white transition duration-150">
            About
          </Link>
          <Link href="/services" onClick={closeMenu} className="block px-3 py-2 text-purple-200 hover:text-white transition duration-150">
            Services
          </Link>
          <Link href="/become-sprin7er" onClick={closeMenu} className="block px-3 py-2 text-purple-200 hover:text-white transition duration-150">
            Become a Sprin7er
          </Link>
          <Link href="/business" onClick={closeMenu} className="block px-3 py-2 text-purple-200 hover:text-white transition duration-150">
            Business Solutions
          </Link>
          <Link href="/sustainability" onClick={closeMenu} className="block px-3 py-2 text-purple-200 hover:text-white transition duration-150">
            Sustainability
          </Link>
          <Link href="/security" onClick={closeMenu} className="block px-3 py-2 text-purple-200 hover:text-white transition duration-150">
            Security
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 