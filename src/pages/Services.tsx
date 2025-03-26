import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const Services = () => {
  return (
    <PageLayout>
      <div className="container max-w-[1200px] mx-auto px-6 py-12 lg:py-[48px] animate-fade-in">
        <div className="text-center mb-12 lg:mb-[48px]">
          <h1 className="text-3xl md:text-4xl lg:text-[32px] font-heading font-medium text-gradient bg-gradient-to-r from-pelican-navy to-pelican-teal mb-4">
            Our Services
          </h1>
          <p className="text-pelican-slate text-center mb-8 max-w-3xl mx-auto text-base">
            Data-driven solutions for construction estimating excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service cards would go here */}
          <p className="col-span-full text-center text-pelican-slate italic">
            Detailed service descriptions coming soon
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;
