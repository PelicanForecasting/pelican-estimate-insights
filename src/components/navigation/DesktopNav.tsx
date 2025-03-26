
import React from 'react';
import { Link } from 'react-router-dom';
import ToolsDropdown from './ToolsDropdown';
import { Button } from '@/components/ui/button';
import { ClipboardCheck } from 'lucide-react';

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
      <Link 
        to="/" 
        className={`text-gray-800 hover:text-secondary transition-colors ${isNavItemActive('/') && !isNavItemActive('/#services') && !isNavItemActive('/#about') ? 'border-b-2 border-secondary' : ''}`}
      >
        Home
      </Link>
      
      <Link 
        to="/services" 
        className={`text-gray-800 hover:text-secondary transition-colors ${isNavItemActive('/services') ? 'border-b-2 border-secondary' : ''}`}
      >
        Services
      </Link>
      
      <ToolsDropdown 
        isOpen={isToolsDropdownOpen}
        setIsOpen={setIsToolsDropdownOpen}
        isNavItemActive={isNavItemActive}
        closeMenu={closeMenu}
      />
      
      <Link 
        to="/resources" 
        className={`text-gray-800 hover:text-secondary transition-colors ${isNavItemActive('/resources') ? 'border-b-2 border-secondary' : ''}`}
      >
        Resources
      </Link>
      
      <Link 
        to="/about" 
        className={`text-gray-800 hover:text-secondary transition-colors ${isNavItemActive('/about') ? 'border-b-2 border-secondary' : ''}`}
      >
        About
      </Link>
      
      <Link 
        to="/contact" 
        className={`text-gray-800 hover:text-secondary transition-colors ${isNavItemActive('/contact') ? 'border-b-2 border-secondary' : ''}`}
      >
        Contact
      </Link>
      
      <Button 
        variant="accent"
        size="default"
        asChild
        className="flex items-center gap-1.5 shadow-md hover:shadow-lg"
      >
        <Link to="/estimating-maturity" onClick={closeMenu}>
          <ClipboardCheck className="h-4 w-4" />
          <span>Take Assessment</span>
        </Link>
      </Button>
    </div>
  );
};

export default DesktopNav;
