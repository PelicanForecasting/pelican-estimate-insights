
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.03] pointer-events-none"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pelican-teal/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="content-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 reveal fade-in space-y-6">
            <div className="inline-block rounded-full bg-pelican-teal/10 px-4 py-1.5 text-sm font-medium text-pelican-teal mb-2">
              Construction Data Intelligence
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pelican-navy leading-tight">
              Transform Your Historical <span className="text-pelican-teal">Data</span> Into Forecasting Power
            </h1>
            
            <p className="text-lg md:text-xl text-pelican-slate max-w-2xl">
              Meet your construction company where it is today. Build the systems for tomorrow's success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" variant="accent" className="font-medium text-base px-6 py-6 shadow-md hover:shadow-lg">
                <Link to="/estimating-maturity" className="flex items-center">
                  Take Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-pelican-navy text-pelican-navy" asChild size="lg">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-2/5 reveal fade-in" style={{
            transitionDelay: '200ms'
          }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pelican-teal/10 rounded-full"></div>
              
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <img 
                  src="/lovable-uploads/44565eeb-2f67-4a29-b5f8-ad2c444cefa3.png" 
                  alt="Construction Estimating Data Analysis" 
                  className="w-full h-auto" 
                />
                
                <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-md">
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-pelican-navy">38%</span>
                    <span className="text-sm text-green-500 font-medium">↑ 12%</span>
                  </div>
                  <div className="text-xs text-pelican-slate">Project Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
