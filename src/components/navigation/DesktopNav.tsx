
import React from 'react';
import { Link } from 'react-router-dom';
import ToolsDropdown from './ToolsDropdown';

interface DesktopNavProps {
  handleSectionLink: (sectionId: string) => void;
  isNavItemActive: (path: string) => boolean;
  isToolsDropdownOpen: boolean;
  setIsToolsDropdownOpen: (isOpen: boolean) => void;
  closeMenu: () => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ 
  handleSectionLink, 
  isNavItemActive, 
  isToolsDropdownOpen, 
  setIsToolsDropdownOpen,
  closeMenu
}) => {
  return (
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
      
      <ToolsDropdown 
        isOpen={isToolsDropdownOpen}
        setIsOpen={setIsToolsDropdownOpen}
        isNavItemActive={isNavItemActive}
        closeMenu={closeMenu}
      />
      
      <button 
        onClick={() => handleSectionLink('contact')} 
        className="btn-primary px-4 py-3 rounded-md"
      >
        Contact Us
      </button>
    </div>
  );
};

export default DesktopNav;
