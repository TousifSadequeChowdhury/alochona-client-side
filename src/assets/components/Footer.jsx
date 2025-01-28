import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Alochona</h2>
            <p className="text-sm leading-relaxed opacity-90">
              Connecting minds through meaningful conversations. Join our community of curious thinkers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Explore</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="opacity-90 hover:opacity-100 hover:text-white transition-opacity duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {['Documentation', 'Guides', 'API Status', 'Help Center'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="opacity-90 hover:opacity-100 hover:text-white transition-opacity duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-90">
              © {new Date().getFullYear()} Alochona. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-white transition-opacity duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;