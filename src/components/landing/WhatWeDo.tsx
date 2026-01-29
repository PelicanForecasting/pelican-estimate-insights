import React from 'react';
import { ClipboardList, TrendingUp, Zap } from 'lucide-react';

const services = [
  {
    icon: ClipboardList,
    title: "Historic Data Analysis",
    description: "We transform your years of untapped cost data into actionable insights, revealing patterns that inform future estimating decisions."
  },
  {
    icon: TrendingUp,
    title: "Cost Forecasting Models",
    description: "Using machine learning, we develop tailored models that predict future project costs with increased accuracy."
  },
  {
    icon: Zap,
    title: "Process Optimization",
    description: "We streamline your estimating workflow by implementing data-driven methodologies that save time and improve accuracy."
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-16 bg-pelican-cream/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-pelican-navy text-center mb-12">
          What We Do
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-pelican-navy mb-2">
                {service.title}
              </h3>
              <p className="text-pelican-slate text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
