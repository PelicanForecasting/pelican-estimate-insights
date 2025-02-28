
import React, { useEffect } from 'react';

const BenefitCard = ({ 
  title, 
  description, 
  iconPath,
  index
}: { 
  title: string; 
  description: string; 
  iconPath: string;
  index: number;
}) => {
  return (
    <div 
      className="flex items-start space-x-5 reveal" 
      style={{ 
        transitionDelay: `${index * 150}ms`,
        transform: 'translateY(20px)'
      }}
    >
      <div className="flex-shrink-0 mt-1">
        <div className="h-12 w-12 rounded-full bg-pelican-teal/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath}></path>
          </svg>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-pelican-navy mb-2">{title}</h3>
        <p className="text-pelican-grey">{description}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
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

  const benefits = [
    {
      title: "Increased Estimating Accuracy",
      description: "Reduce variance between estimated and actual costs by up to 25% through data-powered forecasting models.",
      iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Time Savings",
      description: "Cut estimating time by 40% with streamlined processes and automated data analysis tools.",
      iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Competitive Advantage",
      description: "Win more bids with strategically priced estimates based on accurate cost forecasting and market insights.",
      iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    },
    {
      title: "Risk Reduction",
      description: "Identify potential cost overruns before they occur with predictive analytics and risk assessment tools.",
      iconPath: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    },
    {
      title: "Resource Optimization",
      description: "Allocate your estimating department resources more effectively with data-driven insights and workflow improvements.",
      iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Strategic Decision Support",
      description: "Make informed decisions about project selection, resource allocation, and business strategy with comprehensive analytics.",
      iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="reveal" style={{ transform: 'translateY(20px)' }}>
              <div className="inline-block px-4 py-1 rounded-full bg-pelican-orange/10 text-pelican-orange font-medium text-sm mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-6">
                Turning Construction Data into Strategic Advantage
              </h2>
              <p className="text-pelican-grey text-lg mb-8">
                Our data-driven approach transforms how construction companies estimate, bid, and execute projects, creating measurable benefits across your organization.
              </p>
            </div>
            
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-pelican-navy to-pelican-teal reveal" style={{ transform: 'translateY(20px)' }}>
              <div className="bg-white p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-pelican-cream rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-pelican-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pelican-navy mb-2">Average Client Results</h3>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <p className="text-sm text-pelican-grey">Cost Accuracy Improvement</p>
                        <p className="text-2xl font-bold text-pelican-navy">+25%</p>
                      </div>
                      <div>
                        <p className="text-sm text-pelican-grey">Estimating Time Reduction</p>
                        <p className="text-2xl font-bold text-pelican-navy">40%</p>
                      </div>
                      <div>
                        <p className="text-sm text-pelican-grey">Bid Win Rate Increase</p>
                        <p className="text-2xl font-bold text-pelican-navy">+18%</p>
                      </div>
                      <div>
                        <p className="text-sm text-pelican-grey">Project Profit Improvement</p>
                        <p className="text-2xl font-bold text-pelican-navy">15%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="grid grid-cols-1 gap-y-8">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                  iconPath={benefit.iconPath}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
