
import React from 'react';
import { Link } from 'react-router-dom';

interface ToolsDropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isNavItemActive: (path: string) => boolean;
  closeMenu: () => void;
}

const ToolsDropdown: React.FC<ToolsDropdownProps> = ({ 
  isOpen, 
  setIsOpen, 
  isNavItemActive,
  closeMenu
}) => {
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`text-gray-800 hover:text-secondary transition-colors flex items-center ${
          isNavItemActive('/labor-burden-calculator') || 
          isNavItemActive('/estimating-maturity') ||
          isNavItemActive('/quadrilateral-deck-calculator') 
            ? 'border-b-2 border-secondary' : ''
        }`}
      >
        Tools
        <svg 
          className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
          <Link 
            to="/estimating-maturity" 
            className={`block px-4 py-2 text-gray-800 hover:bg-pelican-lightGray ${isNavItemActive('/estimating-maturity') ? 'border-l-4 border-secondary pl-3' : ''}`}
            onClick={closeMenu}
          >
            <div className="flex justify-between items-center">
              <span>Estimating Maturity Assessment</span>
              <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full">Featured</span>
            </div>
            <p className="text-xs text-pelican-slate mt-1">Benchmark your estimating capabilities</p>
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
  );
};

export default ToolsDropdown;
