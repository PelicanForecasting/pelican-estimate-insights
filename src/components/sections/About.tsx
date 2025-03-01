
import React, { useEffect } from 'react';

const About = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="reveal" style={{ transform: 'translateY(20px)' }}>
              <div className="inline-block px-4 py-1 rounded-full bg-pelican-navy/10 text-pelican-navy font-medium text-sm mb-4">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-6">
                Construction Estimating Experts with Data Science Expertise
              </h2>
              <p className="text-pelican-slate text-lg mb-6">
                Pelican Forecasting Group was founded by construction estimating professionals who recognized that the industry was sitting on a goldmine of unused historical data.
              </p>
              <p className="text-pelican-slate text-lg mb-6">
                Our team combines deep construction industry knowledge with advanced data analytics expertise to help companies transform their estimating processes and improve project outcomes.
              </p>
              
              <div className="grid grid-cols-2 gap-6 my-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-pelican-teal font-display">25+</span>
                  <span className="text-pelican-slate">Years of Combined Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-pelican-teal font-display">50+</span>
                  <span className="text-pelican-slate">Successful Client Projects</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-pelican-teal font-display">18%</span>
                  <span className="text-pelican-slate">Average Bid Win Rate Increase</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-pelican-teal font-display">$150M+</span>
                  <span className="text-pelican-slate">Project Value Analyzed</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a href="#contact" className="pelican-button bg-pelican-navy text-white hover:bg-pelican-teal">
                  Contact Us
                </a>
                <a href="#services" className="pelican-button border-2 border-pelican-navy text-pelican-navy hover:bg-pelican-navy hover:text-white">
                  Our Services
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative reveal" style={{ transform: 'translateY(20px)' }}>
              <div className="absolute -top-5 -left-5 w-full h-full rounded-2xl border-2 border-pelican-teal/30"></div>
              <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl border-2 border-pelican-navy/30"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-lg z-10">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-pelican-navy mb-4">Our Approach</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-pelican-teal/10 flex items-center justify-center">
                        <span className="text-pelican-teal font-bold">1</span>
                      </div>
                      <p className="text-pelican-slate"><span className="font-medium text-pelican-navy">Analyze</span> your historical project data</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-pelican-teal/10 flex items-center justify-center">
                        <span className="text-pelican-teal font-bold">2</span>
                      </div>
                      <p className="text-pelican-slate"><span className="font-medium text-pelican-navy">Identify</span> patterns and cost drivers</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-pelican-teal/10 flex items-center justify-center">
                        <span className="text-pelican-teal font-bold">3</span>
                      </div>
                      <p className="text-pelican-slate"><span className="font-medium text-pelican-navy">Develop</span> tailored forecasting models</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-pelican-teal/10 flex items-center justify-center">
                        <span className="text-pelican-teal font-bold">4</span>
                      </div>
                      <p className="text-pelican-slate"><span className="font-medium text-pelican-navy">Implement</span> optimized estimating processes</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-pelican-teal/10 flex items-center justify-center">
                        <span className="text-pelican-teal font-bold">5</span>
                      </div>
                      <p className="text-pelican-slate"><span className="font-medium text-pelican-navy">Measure</span> results and continuously improve</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-pelican-navy/5 rounded-xl">
                  <h4 className="font-bold text-pelican-navy mb-2">Industries We Serve</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-white text-sm text-pelican-navy border border-pelican-navy/10">Commercial</span>
                    <span className="px-3 py-1 rounded-full bg-white text-sm text-pelican-navy border border-pelican-navy/10">Residential</span>
                    <span className="px-3 py-1 rounded-full bg-white text-sm text-pelican-navy border border-pelican-navy/10">Infrastructure</span>
                    <span className="px-3 py-1 rounded-full bg-white text-sm text-pelican-navy border border-pelican-navy/10">Industrial</span>
                    <span className="px-3 py-1 rounded-full bg-white text-sm text-pelican-navy border border-pelican-navy/10">Healthcare</span>
                    <span className="px-3 py-1 rounded-full bg-white text-sm text-pelican-navy border border-pelican-navy/10">Education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
