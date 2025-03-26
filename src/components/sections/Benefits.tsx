
import React from 'react';
import { BarChart3, Database, Brain, Filter } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="py-16 bg-white">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy">Turn Data Challenges into Competitive Advantages</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal fade-in">
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 bg-pelican-teal/10 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-pelican-teal" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Production Rate Accuracy</h3>
            <p className="text-pelican-slate">Transform subjective estimates into data-driven production rates for more accurate bids.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 bg-pelican-teal/10 rounded-lg flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-pelican-teal" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Historical Data Access</h3>
            <p className="text-pelican-slate">Unlock the value in your past project data with integrated systems that make information accessible.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 bg-pelican-teal/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-pelican-teal" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Knowledge Preservation</h3>
            <p className="text-pelican-slate">Capture and preserve institutional knowledge when experienced estimators leave your company.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 bg-pelican-teal/10 rounded-lg flex items-center justify-center mb-4">
              <Filter className="h-6 w-6 text-pelican-teal" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Project Selection Strategy</h3>
            <p className="text-pelican-slate">Develop data-driven frameworks to identify the right projects to pursue and win.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
