
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-auto">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png" 
                alt="Pelican Forecasting Group Logo" 
                className="h-12 mr-2" 
              />
              <span className="font-heading font-bold text-lg text-pelican-navy">
                Pelican Forecasting Group
              </span>
            </Link>
            <p className="text-pelican-slate mb-6">
              Transforming construction data into estimating intelligence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/mason-hennings-409a8113b/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-pelican-navy hover:text-pelican-teal transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-pelican-navy mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-pelican-slate hover:text-pelican-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-pelican-slate hover:text-pelican-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-pelican-slate hover:text-pelican-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-pelican-navy mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-pelican-slate hover:text-pelican-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/estimating-maturity" className="text-pelican-slate hover:text-pelican-teal transition-colors">
                  Assessment
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="font-bold text-pelican-navy mb-4">Schedule a Consultation</h3>
            <p className="text-pelican-slate mb-4">
              Ready to transform your estimating process? Let's talk about how we can help.
            </p>
            <Button variant="secondary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-pelican-slate mb-4 md:mb-0">
            &copy; {currentYear} Pelican Forecasting Group. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-pelican-slate hover:text-pelican-teal transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-pelican-slate hover:text-pelican-teal transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
