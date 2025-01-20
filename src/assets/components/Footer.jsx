import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">
              We are committed to providing the best platform for sharing knowledge and connecting communities. Stay tuned for updates!
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-white transition duration-200">Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-white transition duration-200">About</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-white transition duration-200">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition duration-200">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition duration-200">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition duration-200">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="hover:text-pink-500 transition duration-200">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="hover:text-red-600 transition duration-200">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm">
            &copy; 2025 Alochona. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
