
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import EstimatingMaturityContent from '@/components/estimating-maturity/EstimatingMaturityContent';

const EstimatingMaturity = () => {
  return (
    <PageLayout>
      <div className="container max-w-[1200px] mx-auto px-6 animate-fade-in">
        <div className="text-center mb-12 lg:mb-[48px]">
          <h1 className="text-3xl md:text-4xl lg:text-[32px] font-heading font-medium text-gradient bg-gradient-to-r from-pelican-navy to-pelican-teal mb-4">
            Estimating Maturity Assessment
          </h1>
          <p className="text-pelican-slate text-center mb-8 max-w-3xl mx-auto text-base">
            Evaluate your construction estimating processes against industry best practices
          </p>
        </div>
        
        <EstimatingMaturityContent />
      </div>
    </PageLayout>
  );
};

export default EstimatingMaturity;
