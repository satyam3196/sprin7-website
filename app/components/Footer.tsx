import Link from 'next/link';
import { FaLinkedin, FaTiktok, FaTwitter, FaInstagram, FaCopyright, FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="flex items-center mb-2">
              <FaCopyright className="mr-2" />
              <span>NEWMINT TECHNOLOGIES LTD 2025</span>
            </div>
            <p className="text-sm">
              Registered in England and Wales<br />
              Contact: support@sprin7.com<br />
              Phone: +44 (0)20 XXXX XXXX <br />
              Support hours: 8am-10pm, 7 days a week 
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white transition">Cookie Policy</Link></li>
              <li><Link href="/acceptable-use" className="hover:text-white transition">Acceptable Use Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" className="hover:text-white transition">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://tiktok.com" className="hover:text-white transition">
                <FaTiktok size={24} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-white transition">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-white transition">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>

          {/* App Downloads */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <div className="space-y-3">
              <Link href="#" className="flex items-center space-x-2 hover:text-white transition">
                <FaApple size={24} />
                <span>Download on App Store</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 hover:text-white transition">
                <FaGooglePlay size={24} />
                <span>Get it on Google Play</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} NEWMINT TECHNOLOGIES LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 