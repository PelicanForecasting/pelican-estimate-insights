
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ClipboardCheck } from 'lucide-react';

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
  isNavItemActive
}) => {
  return (
    <div 
      className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-[600px]' : 'max-h-0'
      }`}
    >
      <div className="pt-2 pb-4 space-y-1 px-4">
        {/* Enhanced Assessment CTA */}
        <div className="py-3 mb-3">
          <div className="bg-pelican-lightGray/30 rounded-lg p-3 mb-3">
            <div className="flex items-center gap-1.5 mb-1">
              <ClipboardCheck className="h-4 w-4 text-accent" />
              <span className="text-sm text-pelican-slate">5-minute assessment</span>
            </div>
            <h4 className="font-medium text-base mb-1">Discover your estimating maturity score</h4>
            <p className="text-xs text-pelican-slate mb-3">Get your personalized report with actionable insights</p>
            <Button variant="accent" size="default" className="w-full flex items-center justify-center gap-1.5" asChild>
              <Link to="/estimating-maturity" onClick={closeMenu}>
                <ClipboardCheck className="h-4 w-4" />
                <span>Take Free Assessment</span>
              </Link>
            </Button>
          </div>
        </div>
      
        {/* Navigation Links */}
        <Link 
          to="/" 
          className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('/') && !isNavItemActive('/#services') ? 'border-l-4 border-secondary pl-3' : ''}`}
          onClick={closeMenu}
        >
          Home
        </Link>
        
        <Link 
          to="/services" 
          className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('/services') ? 'border-l-4 border-secondary pl-3' : ''}`}
          onClick={closeMenu}
        >
          Services
        </Link>
        
        {/* Assessment Dropdown */}
        <div className="border-b border-pelican-lightGray">
          <button
            className="w-full text-left py-3 text-gray-800 hover:text-secondary flex justify-between items-center"
            onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
          >
            Assessment
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
              <div className="flex items-center gap-1.5">
                <ClipboardCheck className="h-4 w-4 text-accent" />
                <span>Estimating Maturity Assessment</span>
              </div>
              <p className="text-xs text-pelican-slate mt-1">Benchmark your estimating capabilities</p>
            </Link>
          </div>
        </div>
        
        <Link 
          to="/resources" 
          className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('/resources') ? 'border-l-4 border-secondary pl-3' : ''}`}
          onClick={closeMenu}
        >
          Resources
        </Link>
        
        <Link 
          to="/about" 
          className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('/about') ? 'border-l-4 border-secondary pl-3' : ''}`}
          onClick={closeMenu}
        >
          About
        </Link>
        
        <Link 
          to="/contact" 
          className={`block py-3 text-gray-800 hover:text-secondary border-b border-pelican-lightGray w-full text-left ${isNavItemActive('/contact') ? 'border-l-4 border-secondary pl-3' : ''}`}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
