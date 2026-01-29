import React from 'react';
import { Link } from 'react-router-dom';

const SimpleHeader = () => {
  return (
    <header className="py-6 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png" 
            alt="Pelican Forecasting Group Logo" 
            className="h-10 mr-2" 
          />
          <span className="font-heading text-xl font-bold text-pelican-navy">
            Pelican<span className="text-secondary">Forecasting</span>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default SimpleHeader;
