import React from 'react';
import { Database, BrainCircuit, Workflow } from 'lucide-react';
import FloatingCard from './FloatingCard';

const services = [
  {
    icon: Database,
    title: "Data Architecture & Integration",
    description: "Your bid data's in Accubid, costs are in Sage, schedules are in P6. We connect them so you can pull what you need without digging through folders or rebuilding pivot tables every time."
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Models trained on your actual project history. Cost forecasting, anomaly detection, risk flags. Stuff that runs in production, not a demo that dies after the sales call."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "If your estimators are spending hours copying numbers between systems or reformatting exports, that's fixable. We automate the repetitive stuff so they can focus on judgment calls."
  }
];

const WhatWeDo = () => {
  return (
    <FloatingCard delay={0.1} accentBorder="top" bottomBorder>
      <h2 className="text-2xl sm:text-3xl font-bold text-pelican-navy text-center mb-4">
        What We Actually Build
      </h2>
      <p className="text-pelican-slate text-center mb-10 max-w-2xl mx-auto">
        Every contractor's situation is different. Some need their data cleaned up and organized. Others are ready for ML models. We figure out what makes sense for where you are now.
      </p>
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
    </FloatingCard>
  );
};

export default WhatWeDo;
