
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);

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

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsToolsDropdownOpen(false);
  };

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
              onClick={closeMenu}
            >
              <img 
                src="/lovable-uploads/a37be70b-5b36-4a3a-a3be-8d9bb25fbbb0.png" 
                alt="Pelican Forecasting Logo" 
                className="h-10 mr-2" 
              />
              <span>Pelican Forecasting</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/#services" className="text-pelican-navy hover:text-pelican-teal transition-colors link-underline">
              Services
            </Link>
            <Link to="/#customer-journey" className="text-pelican-navy hover:text-pelican-teal transition-colors link-underline">
              Process
            </Link>
            <Link to="/#about" className="text-pelican-navy hover:text-pelican-teal transition-colors link-underline">
              About Us
            </Link>
            
            {/* Tools Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                className="text-pelican-navy hover:text-pelican-teal transition-colors link-underline flex items-center"
              >
                Tools
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${isToolsDropdownOpen ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isToolsDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link 
                    to="/estimating-maturity" 
                    className="block px-4 py-2 text-pelican-navy hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Estimating Maturity Assessment
                  </Link>
                  <Link 
                    to="/labor-burden-calculator" 
                    className="block px-4 py-2 text-pelican-navy hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Labor Burden Calculator
                  </Link>
                  <Link 
                    to="/quadrilateral-deck-calculator" 
                    className="block px-4 py-2 text-pelican-navy hover:bg-gray-100"
                    onClick={closeMenu}
                  >
                    Quadrilateral Deck Calculator
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/#contact" 
              className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-pelican-navy to-pelican-teal text-white hover:opacity-90 transition-colors"
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
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/#customer-journey" 
              className="block py-3 text-pelican-navy hover:text-pelican-teal border-b border-gray-100"
              onClick={closeMenu}
            >
              Process
            </Link>
            <Link 
              to="/#about" 
              className="block py-3 text-pelican-navy hover:text-pelican-teal border-b border-gray-100"
              onClick={closeMenu}
            >
              About Us
            </Link>
            
            {/* Tools Section */}
            <div className="border-b border-gray-100">
              <button
                className="w-full text-left py-3 text-pelican-navy hover:text-pelican-teal flex justify-between items-center"
                onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
              >
                Tools
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${isToolsDropdownOpen ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isToolsDropdownOpen && (
                <div className="pl-4 pb-2">
                  <Link 
                    to="/estimating-maturity" 
                    className="block py-2 text-pelican-navy hover:text-pelican-teal"
                    onClick={closeMenu}
                  >
                    Estimating Maturity Assessment
                  </Link>
                  <Link 
                    to="/labor-burden-calculator" 
                    className="block py-2 text-pelican-navy hover:text-pelican-teal"
                    onClick={closeMenu}
                  >
                    Labor Burden Calculator
                  </Link>
                  <Link 
                    to="/quadrilateral-deck-calculator" 
                    className="block py-2 text-pelican-navy hover:text-pelican-teal"
                    onClick={closeMenu}
                  >
                    Quadrilateral Deck Calculator
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/#contact" 
              className="block py-3 mt-2 text-center rounded-full bg-gradient-to-r from-pelican-navy to-pelican-teal text-white hover:opacity-90"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
      
      {/* Click outside to close dropdown on desktop */}
      {isToolsDropdownOpen && (
        <div 
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setIsToolsDropdownOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
