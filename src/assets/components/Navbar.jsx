import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { IoIosNotifications } from "react-icons/io";
import { AuthContext } from "../../../AuthProvider";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Simulates user login state
  const { user } = useContext(AuthContext);
console.log(user)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-2xl font-bold">ALOCH🌎NA</span>
        </div>

        {/* Mobile Menu Toggle for smaller screens */}
        <button
          className="md:hidden text-slate-400"
          onClick={toggleMobileMenu}
        >
          <div className="space-y-2">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className="text-lg hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="/membership"
            className="text-lg hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Membership
          </a>
          <a
            href="/addpost"
            className="text-lg hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Add post
          </a>
          <button className="relative">
            <span className="material-icons text-lg hover:text-gray-300 transition duration-300 ease-in-out">
              notifications
            </span>
            {/* Notification Badge (if needed) */}
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          {loggedIn ? (
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
            />
          ) : (
            <Link to="/login">
            <a
              className="bg-blue-500 text-white px-4 py-2 rounded block text-center hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Join Us
            </a>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu Links (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4">
          <ul className="space-y-4">
            <li>
              <a href="/" className="text-white text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="/membership" className="text-white text-lg">
                Membership
              </a>
            </li>
            <li>
              <a href="/notifications" className="text-white text-lg">
                Notifications
              </a>
            </li>
            {loggedIn ? (
              <li>
                <a href="/profile" className="text-white text-lg">
                  Profile
                </a>
              </li>
            ) : (
              <li>
                  <Link to="/login">
                <a
                  className="bg-blue-500 text-white px-4 py-2 rounded block text-center hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Join Us
                </a>
                </Link>
              </li>

            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;