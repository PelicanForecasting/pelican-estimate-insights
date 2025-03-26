
import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck } from 'lucide-react';

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
          isNavItemActive('/estimating-maturity') ? 'border-b-2 border-secondary' : ''
        }`}
      >
        Assessment
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
            className={`block px-4 py-3 text-gray-800 hover:bg-pelican-lightGray transition-colors ${isNavItemActive('/estimating-maturity') ? 'border-l-4 border-secondary pl-3 bg-pelican-lightGray/50' : ''}`}
            onClick={closeMenu}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <ClipboardCheck className="h-4 w-4 text-accent" />
                <span className="font-medium">Estimating Maturity Assessment</span>
              </div>
              <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full font-medium">Featured</span>
            </div>
            <p className="text-xs text-pelican-slate mt-1">Benchmark your estimating capabilities in 5 minutes</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ToolsDropdown;
