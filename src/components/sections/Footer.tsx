
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pelican-navy text-white py-12">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="text-white flex items-center mb-6">
              <img 
                src="/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png" 
                alt="Pelican Forecasting Group Logo" 
                className="h-10 mr-2" 
              />
              <span className="text-white font-heading text-2xl font-bold">
                Pelican<span className="text-secondary">Forecasting</span>
              </span>
            </Link>
            <p className="text-white/70 mb-6">
              Transforming construction estimating through data-driven insights and analytics.
            </p>
            <div>
              <a 
                href="https://www.linkedin.com/in/mason-hennings-409a8113b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-secondary transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-medium text-[18px] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-secondary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/estimating-maturity" className="text-white/70 hover:text-secondary transition-colors">Assessment</Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/70 hover:text-secondary transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-secondary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-medium text-[18px] mb-5">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-white/70 hover:text-secondary transition-colors">Data Integration</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-secondary transition-colors">Analytics & Intelligence</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-secondary transition-colors">Process Enhancement</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-secondary transition-colors">Knowledge Transfer</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-medium text-[18px] mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span className="text-white/70">
                  201 Rue Beauregard STE 202<br />
                  Lafayette, LA 70508
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-white/70">(318) 308-4826</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-white/70">info@pelicanforecasting.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} Pelican Forecasting Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-secondary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-secondary transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
