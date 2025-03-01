
import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  const testimonials: Testimonial[] = [
    {
      quote: "Pelican Forecasting has transformed how we approach our estimating process. Their data analysis identified patterns we'd never noticed before, leading to a 22% improvement in our bid accuracy.",
      name: "Michael Thompson",
      position: "Chief Estimator",
      company: "Westbrook Construction"
    },
    {
      quote: "The custom forecasting models developed by Pelican have given us a competitive edge in the market. We're winning more bids while maintaining our profit margins, something we struggled with before.",
      name: "Sarah Reynolds",
      position: "VP of Operations",
      company: "Summit Builders"
    },
    {
      quote: "Not only did Pelican help us optimize our estimating department, but they also provided training that empowered our team to better understand and leverage our historical data.",
      name: "David Chen",
      position: "President",
      company: "Meridian Contractors"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-pelican-cream/30 to-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-pelican-teal/20 to-pelican-teal/5 text-pelican-teal font-medium text-sm mb-4">
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-pelican-navy mb-6">
            What Our Clients Say
          </h2>
          <p className="text-pelican-grey text-lg font-body">
            We've helped construction companies across the industry transform their estimating processes and achieve measurable results.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-10 left-0 transform -translate-x-4 -translate-y-4 animate-pulse-slow">
            <svg className="w-20 h-20 text-pelican-teal/10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <div className="bg-gradient-to-br from-white to-pelican-cream/30 rounded-2xl shadow-xl p-8 md:p-10 reveal glass">
            <div className="min-h-[200px] flex flex-col justify-between">
              <p className="text-lg md:text-xl text-pelican-grey italic mb-8 font-body">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pelican-navy to-pelican-teal rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                  {testimonials[currentIndex].name[0]}
                </div>
                <div className="ml-4">
                  <h4 className="text-pelican-navy font-heading font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-pelican-grey text-sm font-body">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-gradient-to-r from-pelican-teal to-pelican-navy' 
                        : 'w-2 bg-pelican-grey/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-pelican-grey/20 flex items-center justify-center text-pelican-navy hover:bg-pelican-navy hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-pelican-grey/20 flex items-center justify-center text-pelican-navy hover:bg-pelican-navy hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
