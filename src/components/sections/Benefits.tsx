
import React from 'react';
import { BarChart3, Database, Brain, Filter, TrendingUp } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-4">
            Turn Historical Data Into Estimating Intelligence
          </h2>
          <p className="text-lg text-pelican-slate max-w-3xl mx-auto">
            Our data-driven approach helps construction companies leverage past project data to improve estimating accuracy and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-pelican-navy/5 p-4 inline-block rounded-xl mb-4">
              <BarChart3 className="w-8 h-8 text-pelican-teal" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Production Rate Analysis</h3>
            <p className="text-pelican-slate">
              Transform scattered historical data into reliable production rate benchmarks for more accurate estimates.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-pelican-navy/5 p-4 inline-block rounded-xl mb-4">
              <Database className="w-8 h-8 text-pelican-teal" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Data Integration</h3>
            <p className="text-pelican-slate">
              Connect disparate systems to create a unified data environment that preserves institutional knowledge.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-pelican-navy/5 p-4 inline-block rounded-xl mb-4">
              <Brain className="w-8 h-8 text-pelican-teal" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Decision Frameworks</h3>
            <p className="text-pelican-slate">
              Develop objective bid/no-bid decision matrices and risk assessment tools based on your historical performance.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-pelican-navy/5 p-4 inline-block rounded-xl mb-4">
              <Filter className="w-8 h-8 text-pelican-teal" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Process Optimization</h3>
            <p className="text-pelican-slate">
              Streamline estimating workflows and standardize methodologies to improve efficiency and consistency.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-pelican-navy/5 p-4 inline-block rounded-xl mb-4">
              <TrendingUp className="w-8 h-8 text-pelican-teal" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Performance Analytics</h3>
            <p className="text-pelican-slate">
              Gain insights into estimating accuracy and identify opportunities for improvement through comprehensive analytics.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="bg-pelican-navy/5 p-4 inline-block rounded-xl mb-4">
              <svg className="w-8 h-8 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Risk Quantification</h3>
            <p className="text-pelican-slate">
              Replace blanket contingencies with data-driven risk assessment to price work more competitively while managing exposure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
