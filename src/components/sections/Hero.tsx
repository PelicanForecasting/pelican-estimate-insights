
import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-pelican-cream to-pelican-cream/60 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-pelican-teal/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pelican-orange/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 reveal" style={{ transform: 'translateY(20px)' }}>
            <div className="inline-block px-4 py-1 rounded-full bg-pelican-teal/10 text-pelican-teal font-medium text-sm mb-4">
              Construction Estimating Analytics
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-pelican-navy">
              Transform Your <span className="text-gradient">Construction Data</span> Into Profitable Insights
            </h1>
            <p className="text-lg text-pelican-grey mt-6">
              Pelican Forecasting Group helps construction companies leverage historic production data to predict future costs, saving time and money while converting unused data into valuable insights.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#services" className="pelican-button bg-pelican-navy text-white hover:bg-pelican-teal">
                Explore Services
              </a>
              <a href="#contact" className="pelican-button border-2 border-pelican-navy text-pelican-navy hover:bg-pelican-navy hover:text-white">
                Schedule Consultation
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-pelican-grey mt-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-pelican-teal" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Data-Driven Approach</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-pelican-teal" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Construction Focused</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 reveal flex justify-center items-center" style={{ transform: 'translateY(20px)' }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-pelican-cream rounded-lg shadow-lg flex items-center justify-center animate-float">
                <svg className="w-10 h-10 text-pelican-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pelican-cream rounded-lg shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <svg className="w-12 h-12 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div className="glass rounded-2xl p-1 shadow-lg max-w-md">
                <img 
                  src="/lovable-uploads/76943e31-cad5-458c-9154-29d5b44c13f9.png" 
                  alt="Pelican Forecasting Group logo" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
