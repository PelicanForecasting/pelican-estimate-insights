
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsToolsDropdownOpen(false);
  };

  // Function to handle smooth scrolling to sections on the home page
  const handleSectionLink = (sectionId: string) => {
    closeMenu();
    
    // If we're not on the home page, navigate to home first then scroll
    if (location.pathname !== '/') {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    } else {
      // If we're already on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
                src="/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png" 
                alt="Pelican Forecasting Group Logo" 
                className="h-10 mr-2" 
              />
              <span>Pelican Forecasting Group</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <button 
              onClick={() => handleSectionLink('services')} 
              className="text-pelican-navy hover:text-pelican-teal transition-colors link-underline"
            >
              Services
            </button>
            <button 
              onClick={() => handleSectionLink('customer-journey')} 
              className="text-pelican-navy hover:text-pelican-teal transition-colors link-underline"
            >
              Process
            </button>
            <button 
              onClick={() => handleSectionLink('about')} 
              className="text-pelican-navy hover:text-pelican-teal transition-colors link-underline"
            >
              About Us
            </button>
            
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
                    className="block px-4 py-2 text-pelican-navy hover:bg-pelican-lightGray"
                    onClick={closeMenu}
                  >
                    Estimating Maturity Assessment
                  </Link>
                  <Link 
                    to="/labor-burden-calculator" 
                    className="block px-4 py-2 text-pelican-navy hover:bg-pelican-lightGray"
                    onClick={closeMenu}
                  >
                    Labor Burden Calculator
                  </Link>
                  <Link 
                    to="/quadrilateral-deck-calculator" 
                    className="block px-4 py-2 text-pelican-navy hover:bg-pelican-lightGray"
                    onClick={closeMenu}
                  >
                    Quadrilateral Deck Calculator
                  </Link>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => handleSectionLink('contact')} 
              className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-pelican-navy to-pelican-teal text-white hover:opacity-90 transition-colors"
            >
              Contact Us
            </button>
          </div>
          
          {/* Mobile menu toggle */}
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
            <button 
              onClick={() => handleSectionLink('services')} 
              className="block py-3 text-pelican-navy hover:text-pelican-teal border-b border-pelican-lightGray w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => handleSectionLink('customer-journey')} 
              className="block py-3 text-pelican-navy hover:text-pelican-teal border-b border-pelican-lightGray w-full text-left"
            >
              Process
            </button>
            <button 
              onClick={() => handleSectionLink('about')} 
              className="block py-3 text-pelican-navy hover:text-pelican-teal border-b border-pelican-lightGray w-full text-left"
            >
              About Us
            </button>
            
            {/* Tools Section */}
            <div className="border-b border-pelican-lightGray">
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
            
            <button 
              onClick={() => handleSectionLink('contact')} 
              className="block py-3 mt-2 text-center rounded-full bg-gradient-to-r from-pelican-navy to-pelican-teal text-white hover:opacity-90 w-full"
            >
              Contact Us
            </button>
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
