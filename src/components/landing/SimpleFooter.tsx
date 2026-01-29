import React from 'react';

const SimpleFooter = () => {
  return (
    <footer className="py-8 bg-pelican-navy text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/70">
            © 2025 Pelican Forecasting Group LLC
          </p>
          <div className="flex gap-4 text-white/70">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>|</span>
            <a href="mailto:info@pelicanforecasting.com" className="hover:text-white transition-colors">
              Contact: info@pelicanforecasting.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
