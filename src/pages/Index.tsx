import React from 'react';
import SimpleHeader from '@/components/landing/SimpleHeader';
import LandingHero from '@/components/landing/LandingHero';
import WhatWeDo from '@/components/landing/WhatWeDo';
import Differentiator from '@/components/landing/Differentiator';
import Credibility from '@/components/landing/Credibility';
import ConsultationForm from '@/components/landing/ConsultationForm';
import SimpleFooter from '@/components/landing/SimpleFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-body">
      <SimpleHeader />
      <main>
        <LandingHero />
        <WhatWeDo />
        <Differentiator />
        <Credibility />
        <ConsultationForm />
      </main>
      <SimpleFooter />
    </div>
  );
};

export default Index;
