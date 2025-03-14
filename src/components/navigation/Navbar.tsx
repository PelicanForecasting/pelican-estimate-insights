
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavLogo from './NavLogo';
import DesktopNav from './DesktopNav';
import MobileMenuToggle from './MobileMenuToggle';
import MobileMenu from './MobileMenu';

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
            <NavLogo closeMenu={closeMenu} />
          </div>
          
          <DesktopNav 
            handleSectionLink={handleSectionLink}
            isNavItemActive={isNavItemActive}
            isToolsDropdownOpen={isToolsDropdownOpen}
            setIsToolsDropdownOpen={setIsToolsDropdownOpen}
            closeMenu={closeMenu}
          />
          
          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <MobileMenuToggle 
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </div>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        isToolsDropdownOpen={isToolsDropdownOpen}
        setIsToolsDropdownOpen={setIsToolsDropdownOpen}
        closeMenu={closeMenu}
        handleSectionLink={handleSectionLink}
        isNavItemActive={isNavItemActive}
      />
      
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
