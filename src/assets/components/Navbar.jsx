import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../AuthProvider";

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext); // Access user and logOut from AuthContext

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("Logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-2xl font-bold">ALOCH🌎NA</span>
        </div>

        {/* Mobile Menu Toggle */}
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
            Add Post
          </a>
          <a
            href="/myposts"
            className="text-lg hover:text-gray-300 transition duration-300 ease-in-out"
          >
            My Post
          </a>
        
          {user ? (
            <div className="flex items-center space-x-3">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-lg font-medium">      {user.displayName ? user.displayName.split(" ")[0] : "User"}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-300 ease-in-out">
                Join Us
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu Links */}
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
              <a href="/addpost" className="text-white text-lg">
                Add Post
              </a>
            </li>
            <li>
              <a href="/myposts" className="text-white text-lg">
                My Post
              </a>
            </li>
         
            {user ? (
              <div className="space-y-2 text-center">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt={user.displayName || "User"}
                  className="w-16 h-16 mx-auto rounded-full object-cover"
                />
                <span className="block text-lg font-medium">
                  {user.displayName || "User"}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out w-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <li>
                <Link to="/login">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition duration-300 ease-in-out w-full text-center">
                    Join Us
                  </button>
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