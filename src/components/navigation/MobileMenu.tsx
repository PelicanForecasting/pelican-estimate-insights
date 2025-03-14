
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  isToolsDropdownOpen: boolean;
  setIsToolsDropdownOpen: (isOpen: boolean) => void;
  closeMenu: () => void;
  handleSectionLink: (sectionId: string) => void;
  isNavItemActive: (path: string) => boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  isToolsDropdownOpen,
  setIsToolsDropdownOpen,
  closeMenu,
  handleSectionLink,
  isNavItemActive
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Helper function to handle section links
  const handleSectionClick = (sectionId: string) => {
    if (isHomePage) {
      // If on home page, use the provided function to scroll to section
      handleSectionLink(sectionId);
    } else {
      // If not on home page, navigate to home page with hash
      closeMenu();
    }
  };
  
  return (
    <div 
      className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-[500px]' : 'max-h-0'
      }`}
    >
      <div className="pt-2 pb-4 space-y-1 px-4">
        {/* Services link */}
        {isHomePage ? (
          <button 
            onClick={() => handleSectionClick('services')} 
            className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('#services') ? 'border-l-4 border-secondary pl-3' : ''}`}
          >
            Services
          </button>
        ) : (
          <Link 
            to="/#services" 
            className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('#services') ? 'border-l-4 border-secondary pl-3' : ''}`}
            onClick={closeMenu}
          >
            Services
          </Link>
        )}
        
        {/* Process link */}
        {isHomePage ? (
          <button 
            onClick={() => handleSectionClick('customer-journey')} 
            className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('#customer-journey') ? 'border-l-4 border-secondary pl-3' : ''}`}
          >
            Process
          </button>
        ) : (
          <Link 
            to="/#customer-journey" 
            className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('#customer-journey') ? 'border-l-4 border-secondary pl-3' : ''}`}
            onClick={closeMenu}
          >
            Process
          </Link>
        )}
        
        {/* About Us link */}
        {isHomePage ? (
          <button 
            onClick={() => handleSectionClick('about')} 
            className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('#about') ? 'border-l-4 border-secondary pl-3' : ''}`}
          >
            About Us
          </button>
        ) : (
          <Link 
            to="/#about" 
            className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('#about') ? 'border-l-4 border-secondary pl-3' : ''}`}
            onClick={closeMenu}
          >
            About Us
          </Link>
        )}
        
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
        
        {/* Contact Us link */}
        {isHomePage ? (
          <button 
            onClick={() => handleSectionClick('contact')} 
            className="block py-3 mt-2 text-center btn-primary w-full"
          >
            Contact Us
          </button>
        ) : (
          <Link 
            to="/#contact" 
            className="block py-3 mt-2 text-center btn-primary w-full"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
