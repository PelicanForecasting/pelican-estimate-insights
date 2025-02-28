
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  index 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  index: number;
}) => {
  return (
    <div 
      className="pelican-card glass p-8 reveal" 
      style={{ 
        transitionDelay: `${index * 100}ms`,
        transform: 'translateY(20px)'
      }}
    >
      <div className="bg-pelican-navy/5 p-4 inline-block rounded-xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-pelican-navy mb-4">{title}</h3>
      <p className="text-pelican-grey">{description}</p>
    </div>
  );
};

const Services = () => {
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

  const services = [
    {
      title: "Historic Data Analysis",
      description: "We transform your years of untapped cost data into actionable insights, revealing patterns and trends that inform future estimating decisions.",
      icon: (
        <svg className="w-8 h-8 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      ),
    },
    {
      title: "Cost Forecasting Models",
      description: "Using advanced analytics, we develop tailored forecasting models that predict future project costs with increased accuracy, reducing estimating uncertainty.",
      icon: (
        <svg className="w-8 h-8 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
        </svg>
      ),
    },
    {
      title: "Estimating Process Optimization",
      description: "We streamline your estimating workflow by implementing data-driven methodologies that save time and improve accuracy across your estimating department.",
      icon: (
        <svg className="w-8 h-8 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
    },
    {
      title: "Performance Benchmarking",
      description: "Compare your estimating performance against industry standards and identify opportunities for improvement with our comprehensive benchmarking services.",
      icon: (
        <svg className="w-8 h-8 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
    },
    {
      title: "Estimator Training & Development",
      description: "Empower your team with data literacy skills and advanced estimating techniques through our customized training programs designed for construction professionals.",
      icon: (
        <svg className="w-8 h-8 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
    },
    {
      title: "Custom Analytics Solutions",
      description: "We develop tailored analytics dashboards and tools that integrate with your existing systems, providing real-time insights for informed decision-making.",
      icon: (
        <svg className="w-8 h-8 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pelican-cream to-white z-0"></div>
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block px-4 py-1 rounded-full bg-pelican-navy/10 text-pelican-navy font-medium text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-6">
            Data-Driven Solutions for Construction Estimating
          </h2>
          <p className="text-pelican-grey text-lg">
            We help construction companies transform their estimating processes through advanced data analytics and industry expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-pelican-teal/5 p-8 rounded-xl reveal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-pelican-navy mb-4">
                Free Construction Estimating Tools
              </h3>
              <p className="text-pelican-grey mb-4">
                Try our free online calculators designed specifically for construction estimators and project managers. 
                These tools can help you improve accuracy and save time on your next project.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/labor-burden-calculator" className="inline-flex items-center text-pelican-teal hover:text-pelican-navy">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Labor Burden Calculator
                </Link>
                <span className="text-gray-300 mx-1">•</span>
                <Link to="/quadrilateral-deck-calculator" className="inline-flex items-center text-pelican-teal hover:text-pelican-navy">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Quadrilateral Deck Calculator
                </Link>
                <span className="text-gray-300 mx-1">•</span>
                <Link to="/estimating-maturity" className="inline-flex items-center text-pelican-teal hover:text-pelican-navy">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Estimating Maturity Assessment
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Link to="/estimating-maturity" className="pelican-button bg-pelican-navy text-white hover:bg-pelican-teal">
                Try Our Free Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
