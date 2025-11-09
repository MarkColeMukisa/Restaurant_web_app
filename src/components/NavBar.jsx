// components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menus', label: 'Menus' },
    { path: '/restaurants', label: 'Restaurants' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors duration-300 z-50"
        >
          RestaurantFinder
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex flex-col space-y-1 z-50 p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>

        {/* Navigation Links - Centered */}
        <div className={`absolute md:static top-0 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex-1 md:flex md:justify-center transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:transition-none min-h-screen md:min-h-0`}>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 pt-20 md:pt-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActiveLink(link.path)
                    ? 'text-red-600 font-semibold relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-red-600 after:rounded-full'
                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/login" 
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300"
          >
            Register
          </Link>
        </div>

        {/* Mobile Auth Buttons */}
        <div className={`absolute bottom-8 left-0 w-full flex justify-center space-x-4 md:hidden ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        }`}>
          <Link 
            to="/login" 
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;