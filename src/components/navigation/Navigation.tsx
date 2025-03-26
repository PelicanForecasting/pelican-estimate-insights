
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
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

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Assessment', 
      path: '/estimating-maturity',
      isDropdown: true,
      dropdownItems: [
        { name: 'Estimating Maturity Assessment', path: '/estimating-maturity' }
      ]
    },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="content-container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png" 
            alt="Pelican Forecasting Group Logo" 
            className="h-10 mr-2" 
          />
          <span className={`font-heading font-bold text-lg ${isScrolled ? 'text-pelican-navy' : 'text-pelican-navy'}`}>
            Pelican Forecasting Group
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-pelican-navy p-2"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              {link.isDropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`flex items-center space-x-1 text-pelican-navy hover:text-pelican-teal transition-colors`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === link.name && (
                    <div className="absolute mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                      {link.dropdownItems?.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="block px-4 py-2 text-pelican-navy hover:bg-pelican-cream transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className="text-pelican-navy hover:text-pelican-teal transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Button variant="accent" size="sm" asChild>
            <Link to="/estimating-maturity">Take Assessment</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.isDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="flex items-center justify-between w-full text-pelican-navy hover:text-pelican-teal transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={16} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 mt-2 border-l-2 border-pelican-teal/20 space-y-2">
                        {link.dropdownItems?.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="block py-1 text-pelican-navy hover:text-pelican-teal transition-colors"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block text-pelican-navy hover:text-pelican-teal transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Button variant="accent" size="sm" asChild className="mt-4" onClick={() => setIsOpen(false)}>
              <Link to="/estimating-maturity">Take Assessment</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
