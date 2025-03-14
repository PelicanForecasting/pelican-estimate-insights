
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-primary to-primary/90 text-white py-12">
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
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-medium text-[18px] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#services" className="text-white/70 hover:text-secondary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/#customer-journey" className="text-white/70 hover:text-secondary transition-colors">Process</Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-white/70 hover:text-secondary transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/#about" className="text-white/70 hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/#contact" className="text-white/70 hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-medium text-[18px] mb-5">Our Tools</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/estimating-maturity" className="text-white/70 hover:text-secondary transition-colors">Estimating Maturity Assessment</Link>
              </li>
              <li>
                <Link to="/labor-burden-calculator" className="text-white/70 hover:text-secondary transition-colors">Labor Burden Calculator</Link>
              </li>
              <li>
                <Link to="/quadrilateral-deck-calculator" className="text-white/70 hover:text-secondary transition-colors">Quadrilateral Deck Calculator</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-medium text-[18px] mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span className="text-white/70">
                  1234 Construction Way<br />
                  Portland, OR 97201
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-white/70">(555) 123-4567</span>
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
