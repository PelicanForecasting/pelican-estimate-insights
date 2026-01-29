import React from 'react';

const SimpleFooter = () => {
  return (
    <footer className="py-8 bg-pelican-navy text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-3 text-sm text-center">
          <div className="flex flex-wrap justify-center gap-4 text-white/70">
            <a href="mailto:mason@pelicanforecasting.com" className="hover:text-white transition-colors">
              mason@pelicanforecasting.com
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <p className="text-white/50">
            © 2026 Pelican Forecasting Group LLC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
