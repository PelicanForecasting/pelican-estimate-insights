
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

  // Check if a nav item is active
  const isNavItemActive = (path: string) => {
    if (path.startsWith('#')) {
      return location.hash === path;
    }
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white shadow-md' : 'py-4 bg-transparent'
      }`}
    >
      <div className="content-container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold text-primary flex items-center"
              onClick={closeMenu}
            >
              <img 
                src="/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png" 
                alt="Pelican Forecasting Group Logo" 
                className="h-10 mr-2" 
              />
              <span className="font-heading">Pelican Forecasting Group</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <button 
              onClick={() => handleSectionLink('services')} 
              className={`text-gray-800 hover:text-secondary transition-colors ${isNavItemActive('#services') ? 'border-b-2 border-secondary' : ''}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleSectionLink('customer-journey')} 
              className={`text-gray-800 hover:text-secondary transition-colors ${isNavItemActive('#customer-journey') ? 'border-b-2 border-secondary' : ''}`}
            >
              Process
            </button>
            <button 
              onClick={() => handleSectionLink('about')} 
              className={`text-gray-800 hover:text-secondary transition-colors ${isNavItemActive('#about') ? 'border-b-2 border-secondary' : ''}`}
            >
              About Us
            </button>
            
            {/* Tools Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                className={`text-gray-800 hover:text-secondary transition-colors flex items-center ${
                  location.pathname.includes('/labor-burden-calculator') || 
                  location.pathname.includes('/estimating-maturity') ||
                  location.pathname.includes('/quadrilateral-deck-calculator') 
                    ? 'border-b-2 border-secondary' : ''
                }`}
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
                    className={`block px-4 py-2 text-gray-800 hover:bg-pelican-lightGray ${isNavItemActive('/estimating-maturity') ? 'border-l-4 border-secondary pl-3' : ''}`}
                    onClick={closeMenu}
                  >
                    Estimating Maturity Assessment
                  </Link>
                  <Link 
                    to="/labor-burden-calculator" 
                    className={`block px-4 py-2 text-gray-800 hover:bg-pelican-lightGray ${isNavItemActive('/labor-burden-calculator') ? 'border-l-4 border-secondary pl-3' : ''}`}
                    onClick={closeMenu}
                  >
                    Labor Burden Calculator
                  </Link>
                  <Link 
                    to="/quadrilateral-deck-calculator" 
                    className={`block px-4 py-2 text-gray-800 hover:bg-pelican-lightGray ${isNavItemActive('/quadrilateral-deck-calculator') ? 'border-l-4 border-secondary pl-3' : ''}`}
                    onClick={closeMenu}
                  >
                    Quadrilateral Deck Calculator
                  </Link>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => handleSectionLink('contact')} 
              className="btn-primary px-4 py-3 rounded-md"
            >
              Contact Us
            </button>
          </div>
          
          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-800 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="pt-2 pb-4 space-y-1 px-4">
          <button 
            onClick={() => handleSectionLink('services')} 
            className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('#services') ? 'border-l-4 border-secondary pl-3' : ''}`}
          >
            Services
          </button>
          <button 
            onClick={() => handleSectionLink('customer-journey')} 
            className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('#customer-journey') ? 'border-l-4 border-secondary pl-3' : ''}`}
          >
            Process
          </button>
          <button 
            onClick={() => handleSectionLink('about')} 
            className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('#about') ? 'border-l-4 border-secondary pl-3' : ''}`}
          >
            About Us
          </button>
          
          {/* Tools Section */}
          <div className="border-b border-pelican-lightGray">
            <button
              className="w-full text-left py-3 text-gray-800 hover:text-secondary flex justify-between items-center"
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
            
            <div className={`pl-4 pb-2 space-y-2 overflow-hidden transition-all duration-300 ${isToolsDropdownOpen ? 'max-h-[200px]' : 'max-h-0'}`}>
              <Link 
                to="/estimating-maturity" 
                className={`block py-2 text-gray-800 hover:text-secondary ${isNavItemActive('/estimating-maturity') ? 'border-l-4 border-secondary pl-3' : ''}`}
                onClick={closeMenu}
              >
                Estimating Maturity Assessment
              </Link>
              <Link 
                to="/labor-burden-calculator" 
                className={`block py-2 text-gray-800 hover:text-secondary ${isNavItemActive('/labor-burden-calculator') ? 'border-l-4 border-secondary pl-3' : ''}`}
                onClick={closeMenu}
              >
                Labor Burden Calculator
              </Link>
              <Link 
                to="/quadrilateral-deck-calculator" 
                className={`block py-2 text-gray-800 hover:text-secondary ${isNavItemActive('/quadrilateral-deck-calculator') ? 'border-l-4 border-secondary pl-3' : ''}`}
                onClick={closeMenu}
              >
                Quadrilateral Deck Calculator
              </Link>
            </div>
          </div>
          
          <button 
            onClick={() => handleSectionLink('contact')} 
            className="block py-3 mt-2 text-center btn-primary w-full"
          >
            Contact Us
          </button>
        </div>
      </div>
      
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
