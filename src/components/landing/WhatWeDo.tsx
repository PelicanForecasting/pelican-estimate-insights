import React from 'react';
import { Database, BrainCircuit, Workflow } from 'lucide-react';
import FloatingCard from './FloatingCard';

const services = [
  {
    icon: Database,
    title: "Data Architecture & Integration",
    description: "Stop hunting through folders and spreadsheets for the numbers you need. Connect your estimating tools, accounting software, and project controls into a single source of truth you can actually query."
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Move beyond gut-feel pricing. Production-ready ML models trained on your historical data give you cost forecasting, risk flags, and anomaly detection that actually deploys—not just another proof of concept."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Your estimators shouldn't waste hours on data entry. Automate the repetitive tasks so your team can focus on the high-judgment work that actually wins projects."
  }
];

const WhatWeDo = () => {
  return (
    <FloatingCard delay={0.1} accentBorder="top" bottomBorder>
      <h2 className="text-2xl sm:text-3xl font-bold text-pelican-navy text-center mb-4">
        Solutions That Meet You Where You Are
      </h2>
      <p className="text-pelican-slate text-center mb-10 max-w-2xl mx-auto">
        Whether you're drowning in spreadsheets or ready to deploy machine learning, I design and build solutions matched to your current capabilities—and scale with your ambitions.
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
