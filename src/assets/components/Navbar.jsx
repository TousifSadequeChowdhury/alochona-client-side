import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
  
          <span className="text-2xl font-bold">ALOCHONA</span>
      

        {/* Mobile Menu Toggle for smaller screens */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          <div className="space-y-2">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-lg hover:text-gray-300 transition duration-300 ease-in-out">Home</a>
          <a href="/about" className="text-lg hover:text-gray-300 transition duration-300 ease-in-out">About</a>
          <a href="/services" className="text-lg hover:text-gray-300 transition duration-300 ease-in-out">Services</a>
          <a href="/contact" className="text-lg hover:text-gray-300 transition duration-300 ease-in-out">Contact</a>
        </div>
      </div>

      {/* Mobile Menu Links (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-4">
          <ul className="space-y-4">
            <li><a href="/" className="text-white text-lg">Home</a></li>
            <li><a href="/about" className="text-white text-lg">About</a></li>
            <li><a href="/services" className="text-white text-lg">Services</a></li>
            <li><a href="/contact" className="text-white text-lg">Contact</a></li>
            <li><a href="/login" className="text-white text-lg">Login</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
