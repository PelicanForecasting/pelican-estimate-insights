
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLogoProps {
  closeMenu: () => void;
}

const NavLogo: React.FC<NavLogoProps> = ({ closeMenu }) => {
  return (
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
  );
};

export default NavLogo;
