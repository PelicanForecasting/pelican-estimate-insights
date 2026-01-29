import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const LandingHero = () => {
  const scrollToForm = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-12 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pelican-navy leading-tight mb-6">
          Transform Your Historical Project Data into Estimating Intelligence
        </h1>
        <p className="text-lg sm:text-xl text-pelican-slate mb-8 max-w-2xl mx-auto">
          We help construction companies build data-driven estimating processes through advanced analytics, machine learning, and industry expertise.
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
    </section>
  );
};

export default LandingHero;
