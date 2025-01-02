import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-1 px-1">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" className="h-24 object-contain" alt="HireLink Logo" />
        </div>

        <div className="text-center sm:text-left mt-4 sm:mt-0 max-w-md">
          <div className="text-2xl font-semibold text-cyan-400">
            HireLink
          </div>
          <p className="text-sm mt-2">
            HireLink connects talented job seekers with top employers. Find your ideal career opportunity and take the next step with us.
          </p>
        </div>

        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-blue-600">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-blue-700">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-400">
        <p>&copy; {year} HireLink. All rights reserved. Developed by Sriram P.</p>
      </div>
    </footer>
  );
};

export default Footer;
