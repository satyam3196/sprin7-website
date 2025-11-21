import Link from 'next/link';
import { FaCopyright, FaGooglePlay, FaApple, FaRegistered, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-deep-teal text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-electric-lime">Company</h3>
            <div className="flex items-center mb-2 space-x-2">
              <FaCopyright className="text-lg" />
              <span className="flex items-center space-x-1">
                <span>Newmint Technologies Ltd 2025</span>
              </span>
            </div>
            <div className="flex items-center mb-2 space-x-1">
              <span className="text-sm text-white/90">Sprin7</span>
              <FaRegistered className="text-sm opacity-90" />
              <span className="text-sm text-white/90">is a registered trademark</span>
            </div>
            <p className="text-sm text-white/90">
              Registered in England and Wales<br />
              Email: team@sprin7.com
              {/* Phone: +44 xxxxxxxxxx<br /> */}
            </p>
          </div>

          {/* Coming Soon */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-electric-lime">Coming Soon</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-white/90">
                <FaApple size={24} />
                <span>Available soon on iOS</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <FaGooglePlay size={24} />
                <span>Available soon on Google Play</span>
              </div>
              <a 
                href="https://www.linkedin.com/company/sprin7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/90 hover:text-electric-lime transition mt-4"
              >
                <FaLinkedin size={24} />
                <span>Follow us on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} NEWMINT TECHNOLOGIES LTD. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-white/90 hover:text-electric-lime transition">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
