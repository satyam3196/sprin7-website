import Link from 'next/link';
import { FaCopyright, FaGooglePlay, FaApple } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="flex items-center mb-2">
              <FaCopyright className="mr-2" />
              <span>NEWMINT TECHNOLOGIES LTD 2025</span>
            </div>
            <p className="text-sm">
              Registered in England and Wales<br />
              {/* Contact: support@sprin7.com<br /> */}
              Phone: +44 7466469098 <br />
              {/* Support hours: 8am-10pm, 7 days a week  */}
            </p>
          </div>

          {/* Coming Soon */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Coming Soon</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-purple-200">
                <FaApple size={24} />
                <span>Available soon on iOS</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-200">
                <FaGooglePlay size={24} />
                <span>Available soon on Google Play</span>
              </div>
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