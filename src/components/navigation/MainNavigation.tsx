
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavLogo from './NavLogo';

const MainNavigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close the mobile menu when route changes
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="content-container flex justify-between items-center">
        {/* Logo */}
        <NavLogo closeMenu={closeMenu} />

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-pelican-navy p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-pelican-navy hover:text-pelican-teal transition-colors ${isActive('/') && !location.pathname.includes('services') ? 'border-b-2 border-pelican-teal' : ''}`}
          >
            Home
          </Link>
          
          <Link
            to="/services"
            className={`text-pelican-navy hover:text-pelican-teal transition-colors ${isActive('/services') ? 'border-b-2 border-pelican-teal' : ''}`}
          >
            Services
          </Link>
          
          <div className="relative">
            <button
              onClick={() => toggleDropdown('tools')}
              className={`flex items-center space-x-1 text-pelican-navy hover:text-pelican-teal transition-colors ${isActive('/estimating-maturity') ? 'border-b-2 border-pelican-teal' : ''}`}
            >
              <span>Assessment</span>
              <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'tools' && (
              <div className="absolute mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 animate-fade-in">
                <Link
                  to="/estimating-maturity"
                  className={`block px-4 py-2 text-pelican-navy hover:bg-pelican-cream transition-colors ${isActive('/estimating-maturity') ? 'bg-pelican-cream/50 border-l-4 border-pelican-teal pl-3' : ''}`}
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center gap-1.5">
                    <ClipboardCheck className="h-4 w-4 text-accent" />
                    <span>Estimating Maturity Assessment</span>
                  </div>
                  <p className="text-xs text-pelican-slate mt-1">Benchmark your estimating capabilities</p>
                </Link>
              </div>
            )}
          </div>
          
          <Link
            to="/resources"
            className={`text-pelican-navy hover:text-pelican-teal transition-colors ${isActive('/resources') ? 'border-b-2 border-pelican-teal' : ''}`}
          >
            Resources
          </Link>
          
          <Link
            to="/about"
            className={`text-pelican-navy hover:text-pelican-teal transition-colors ${isActive('/about') ? 'border-b-2 border-pelican-teal' : ''}`}
          >
            About
          </Link>
          
          <Link
            to="/contact"
            className={`text-pelican-navy hover:text-pelican-teal transition-colors ${isActive('/contact') ? 'border-b-2 border-pelican-teal' : ''}`}
          >
            Contact
          </Link>
          
          <Button variant="accent" size="sm" asChild className="shadow-sm hover:shadow-md">
            <Link to="/estimating-maturity">Take Assessment</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4 animate-slide-up">
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
            
            <Link
              to="/"
              className={`block py-3 text-pelican-navy hover:text-pelican-teal border-b border-pelican-lightGray w-full text-left ${isActive('/') && !location.pathname.includes('services') ? 'border-l-4 border-pelican-teal pl-3' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            
            <Link
              to="/services"
              className={`block py-3 text-pelican-navy hover:text-pelican-teal border-b border-pelican-lightGray w-full text-left ${isActive('/services') ? 'border-l-4 border-pelican-teal pl-3' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            
            {/* Assessment Dropdown */}
            <div className="border-b border-pelican-lightGray">
              <button
                className="w-full text-left py-3 text-pelican-navy hover:text-pelican-teal flex justify-between items-center"
                onClick={() => toggleDropdown('assessment-mobile')}
              >
                Assessment
                <ChevronDown 
                  className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === 'assessment-mobile' ? 'transform rotate-180' : ''}`}
                />
              </button>
              
              <div className={`pl-4 pb-2 space-y-2 overflow-hidden transition-all duration-300 ${activeDropdown === 'assessment-mobile' ? 'max-h-[200px]' : 'max-h-0'}`}>
                <Link 
                  to="/estimating-maturity" 
                  className={`block py-2 text-pelican-navy hover:text-pelican-teal ${isActive('/estimating-maturity') ? 'border-l-4 border-pelican-teal pl-3' : ''}`}
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
              className={`block py-3 text-pelican-navy hover:text-pelican-teal border-b border-pelican-lightGray w-full text-left ${isActive('/resources') ? 'border-l-4 border-pelican-teal pl-3' : ''}`}
              onClick={closeMenu}
            >
              Resources
            </Link>
            
            <Link
              to="/about"
              className={`block py-3 text-pelican-navy hover:text-pelican-teal border-b border-pelican-lightGray w-full text-left ${isActive('/about') ? 'border-l-4 border-pelican-teal pl-3' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className={`block py-3 text-pelican-navy hover:text-pelican-teal border-b border-pelican-lightGray w-full text-left ${isActive('/contact') ? 'border-l-4 border-pelican-teal pl-3' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        )}
        
        {/* Click outside to close dropdown on desktop */}
        {activeDropdown && (
          <div 
            className="fixed inset-0 z-40 bg-transparent"
            onClick={() => setActiveDropdown(null)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;
