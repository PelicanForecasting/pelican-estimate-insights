import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const LandingHero = () => {
  const scrollToForm = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-8 pb-24 overflow-hidden min-h-[90vh] flex flex-col">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/dither-bg.webm" type="video/webm" />
      </video>
      
      {/* Overlay for additional contrast */}
      <div className="absolute inset-0 bg-white/30 z-[1]" />
      
      {/* Logo overlaid directly on video - centered in upper area */}
      <div className="relative z-10 flex-1 flex items-center justify-center max-h-[200px] sm:max-h-[240px]">
        <div className="flex items-center justify-center">
          <img 
            src="/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png" 
            alt="Pelican Forecasting Group Logo" 
            className="h-20 sm:h-28 md:h-32 mr-3" 
          />
          <span className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-pelican-navy drop-shadow-sm">
            Pelican<span className="text-secondary">Forecasting</span>
          </span>
        </div>
      </div>
      
      {/* Content Card */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 flex-1 flex items-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-xl border border-white/50">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pelican-navy leading-tight mb-6">
              Forward-Deployed Excellence. Transform Your Existing Data into Organizational Intelligence
            </h1>
            <p className="text-lg sm:text-xl text-pelican-slate mb-8 max-w-2xl mx-auto">
              I help construction companies build the systems they need to make better decisions, faster, and backed by evidence. From data architecture to AI-powered forecasting—I meet you where you are and deliver custom solutions that work.
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              variant="accent" 
              className="font-medium text-base px-8 py-6 shadow-md hover:shadow-lg"
            >
              Schedule Free Consultation
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
