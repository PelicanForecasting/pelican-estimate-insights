import React from 'react';
import { Database, BrainCircuit, Workflow } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: "Data Architecture & Integration",
    description: "Unify scattered project data into structured, queryable systems. Connect your estimating tools, accounting software, and project controls into a single source of truth."
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Production-ready ML models trained on your historical data. Cost forecasting, risk identification, and anomaly detection that actually deploys—not just a proof of concept."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Eliminate manual data entry and repetitive tasks. Automate the tail so your team can focus on the high-judgment work that wins projects."
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-16 bg-pelican-cream/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-pelican-navy text-center mb-4">
          How I Help
        </h2>
        <p className="text-pelican-slate text-center mb-12 max-w-2xl mx-auto">
          Whether you're drowning in spreadsheets or ready to deploy machine learning, I design and build solutions matched to your current capabilities and future ambitions.
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
      </div>
    </section>
  );
};

export default WhatWeDo;
