
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardCheck, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 pb-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.03] pointer-events-none"></div>
      
      {/* Enhanced decorative elements with animations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pelican-teal/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="content-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 space-y-6 animate-fade-in">
            <div className="inline-block rounded-full bg-pelican-teal/10 px-4 py-1.5 text-sm font-medium text-pelican-teal mb-2 animate-slide-in-left animate-delay-200">
              Construction Data Intelligence
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight animate-fade-in animate-delay-300">
              Transform Your Historical <span className="text-gradient">Data</span> Into Forecasting Power
            </h1>
            
            <p className="text-lg md:text-xl text-black max-w-2xl animate-fade-in animate-delay-400">
              Meet your construction company where it is today. Build the systems for tomorrow's success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in animate-delay-500">
              <Button asChild size="lg" variant="accent" className="font-medium text-base px-6 py-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-button-pulse">
                <Link to="/estimating-maturity" className="flex items-center">
                  <ClipboardCheck className="ml-1 h-5 w-5 mr-2" />
                  Take Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black/5 hover:-translate-y-1 transition-all duration-300" asChild size="lg">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>

            <div className="pt-8 hidden md:block animate-fade-in animate-delay-700">
              <button 
                onClick={scrollToFeatures}
                className="flex items-center text-pelican-slate hover:text-pelican-teal transition-colors group"
              >
                <span className="mr-2">Discover how we help</span>
                <ChevronDown className="h-4 w-4 animate-bounce group-hover:animate-float" />
              </button>
            </div>
          </div>
          
          <div className="lg:w-2/5 animate-slide-in-right" style={{
            animationDelay: '300ms'
          }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pelican-teal/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
              
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover-glow transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] animate-image-glow">
                <img 
                  src="/lovable-uploads/f931ac31-6ce6-4f64-a3dd-0b091a39367a.png" 
                  alt="Construction Estimating Data Analysis" 
                  className="w-full h-auto" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pelican-navy/90 to-transparent text-white p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">Free Assessment</span>
                    <span className="text-white/80 text-sm">5-minute completion</span>
                  </div>
                  <h3 className="text-xl font-bold">Estimating Maturity Assessment</h3>
                  <p className="text-white/90 text-sm mt-1">Get your personalized report with actionable insights</p>
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
