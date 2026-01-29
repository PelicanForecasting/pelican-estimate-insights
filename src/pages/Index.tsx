import React from 'react';
import FixedVideoBackground from '@/components/landing/FixedVideoBackground';
import LandingHero from '@/components/landing/LandingHero';
import WhatWeDo from '@/components/landing/WhatWeDo';
import Differentiator from '@/components/landing/Differentiator';
import Credibility from '@/components/landing/Credibility';
import ConsultationForm from '@/components/landing/ConsultationForm';
import SimpleFooter from '@/components/landing/SimpleFooter';

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      {/* Fixed video background that stays behind everything */}
      <FixedVideoBackground />
      
      {/* All content scrolls over the fixed background */}
      <div className="relative z-10">
        <LandingHero />
        
        {/* Floating cards container */}
        <div className="relative">
          {/* Cards section with negative margin to overlap hero */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-24 space-y-16 md:space-y-20 pb-20">
            <WhatWeDo />
            <Differentiator />
            <Credibility />
            <ConsultationForm />
          </div>
        </div>
        
        {/* Footer anchors the page */}
        <SimpleFooter />
      </div>
    </div>
  );
};

export default Index;
