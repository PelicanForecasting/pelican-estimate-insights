import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

// Array of slideshow images
const slideshowImages = ['/lovable-uploads/7d7e9bc1-b414-48f1-864f-d0bc3c45e0bb.jpg', '/lovable-uploads/f20b7968-02c4-4f80-aa24-00c1ec8fb0c7.jpg', '/lovable-uploads/af6d144b-9c89-4514-ad4b-06982fe45170.png', '/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png'];
const Hero = () => {
  // State for slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle slideshow transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % slideshowImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Animation for sections
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
  return <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Base gradient background - reducing opacity */}
      <div className="absolute inset-0 bg-gradient-radial from-pelican-cream/70 to-pelican-cream/40 z-0"></div>
      
      {/* Watermark logo in background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-no-repeat bg-right-top bg-contain opacity-5"></div>
      
      {/* Slideshow background - increasing image opacity and adjusting z-index */}
      <div className="absolute inset-0 z-0">
        {slideshowImages.map((image, index) => <div key={index} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-25' : 'opacity-0'}`} style={{
        backgroundImage: `url('${image}')`
      }}></div>)}
        {/* Reducing the opacity of the overlay to let more of the image show through */}
        <div className="absolute inset-0 bg-gradient-to-r from-pelican-cream/60 via-pelican-cream/50 to-pelican-cream/40"></div>
      </div>
      
      {/* Animated decorative elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-pelican-teal/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pelican-orange/10 rounded-full filter blur-3xl animate-pulse-slow" style={{
      animationDelay: '1.5s'
    }}></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pelican-navy/5 rounded-full filter blur-2xl animate-float" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 reveal" style={{
          transform: 'translateY(20px)'
        }}>
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-pelican-teal/20 to-pelican-navy/10 text-pelican-teal font-medium text-sm mb-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              Construction Estimating Analytics
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-pelican-navy animate-fade-in" style={{
            animationDelay: '0.5s'
          }}>
              Transform Your <span className="text-gradient">Construction Data</span> Into Profitable Insights
            </h1>
            <p className="text-lg text-pelican-grey mt-6 font-body animate-fade-in" style={{
            animationDelay: '0.7s'
          }}>
              Pelican Forecasting Group helps construction companies leverage historic production data to predict future costs, saving time and money while converting unused data into valuable insights.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in" style={{
            animationDelay: '0.9s'
          }}>
              <Button variant="default" rounded="full" size="lg" asChild>
                <a href="#services">Explore Services</a>
              </Button>
              
              <Button variant="outline" rounded="full" size="lg" asChild>
                <a href="#contact">Schedule Consultation</a>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-pelican-grey mt-8 animate-fade-in" style={{
            animationDelay: '1.1s'
          }}>
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
            
            {/* Enhanced Free Tools Section with gradients */}
            <div className="mt-6 p-4 bg-gradient-to-br from-white/80 to-pelican-cream/80 backdrop-blur-sm rounded-lg border border-pelican-teal/20 shadow-sm animate-fade-in" style={{
            animationDelay: '1.3s'
          }}>
              <h3 className="text-pelican-navy font-heading font-bold text-lg mb-2">Free Construction Tools</h3>
              <p className="text-sm text-pelican-grey mb-3 font-body">Access our suite of free estimating and forecasting tools:</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <a href="/labor-burden-calculator" className="flex items-center text-pelican-teal hover:underline transition-all duration-300 hover:translate-x-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  Labor Burden Calculator
                </a>
                <a href="/estimating-maturity" className="flex items-center text-pelican-teal hover:underline transition-all duration-300 hover:translate-x-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                  Estimating Maturity Assessment
                </a>
                
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default Hero;