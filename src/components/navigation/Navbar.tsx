
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold text-pelican-navy flex items-center"
            >
              <svg 
                className="w-8 h-8 mr-2 text-pelican-teal" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span>Pelican Forecasting</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/#services" className="text-pelican-navy hover:text-pelican-teal transition-colors link-underline">
              Services
            </Link>
            <Link to="/#benefits" className="text-pelican-navy hover:text-pelican-teal transition-colors link-underline">
              Benefits
            </Link>
            <Link to="/#about" className="text-pelican-navy hover:text-pelican-teal transition-colors link-underline">
              About Us
            </Link>
            <Link to="/estimating-maturity" className="text-pelican-navy hover:text-pelican-teal transition-colors link-underline">
              Assessment
            </Link>
            <Link 
              to="/#contact" 
              className="ml-2 px-5 py-2 rounded-full bg-pelican-navy text-white hover:bg-pelican-teal transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              className="text-pelican-navy p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <Link 
              to="/#services" 
              className="block py-3 text-pelican-navy hover:text-pelican-teal border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/#benefits" 
              className="block py-3 text-pelican-navy hover:text-pelican-teal border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link 
              to="/#about" 
              className="block py-3 text-pelican-navy hover:text-pelican-teal border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/estimating-maturity" 
              className="block py-3 text-pelican-navy hover:text-pelican-teal border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Assessment
            </Link>
            <Link 
              to="/#contact" 
              className="block py-3 mt-2 text-center rounded-full bg-pelican-navy text-white hover:bg-pelican-teal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
