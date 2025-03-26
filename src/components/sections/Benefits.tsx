
import React from 'react';
import { BarChart3, Database, Brain, Filter, TrendingUp } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="features" className="py-8 bg-white">
      <div className="content-container">
        <div className="text-center mb-10 reveal fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-4">Turn Data Challenges into Competitive Advantages</h2>
          <p className="text-lg text-pelican-slate max-w-2xl mx-auto">
            We help construction companies transform disconnected historical data into powerful estimating intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg stagger-item">
            <div className="h-12 w-12 bg-pelican-teal/10 rounded-lg flex items-center justify-center mb-4 group transition-all duration-300">
              <BarChart3 className="h-6 w-6 text-pelican-teal group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Production Rate Accuracy</h3>
            <p className="text-pelican-slate">Transform subjective estimates into data-driven production rates for more accurate bids.</p>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
              <TrendingUp className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm text-accent font-medium">22% improved bid accuracy</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg stagger-item">
            <div className="h-12 w-12 bg-pelican-teal/10 rounded-lg flex items-center justify-center mb-4 group transition-all duration-300">
              <Database className="h-6 w-6 text-pelican-teal group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Historical Data Access</h3>
            <p className="text-pelican-slate">Unlock the value in your past project data with integrated systems that make information accessible.</p>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
              <TrendingUp className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm text-accent font-medium">100% data utilization</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg stagger-item">
            <div className="h-12 w-12 bg-pelican-teal/10 rounded-lg flex items-center justify-center mb-4 group transition-all duration-300">
              <Brain className="h-6 w-6 text-pelican-teal group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Knowledge Preservation</h3>
            <p className="text-pelican-slate">Capture and preserve institutional knowledge when experienced estimators leave your company.</p>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
              <TrendingUp className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm text-accent font-medium">75% reduction in knowledge loss</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg stagger-item">
            <div className="h-12 w-12 bg-pelican-teal/10 rounded-lg flex items-center justify-center mb-4 group transition-all duration-300">
              <Filter className="h-6 w-6 text-pelican-teal group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Project Selection Strategy</h3>
            <p className="text-pelican-slate">Develop data-driven frameworks to identify the right projects to pursue and win.</p>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
              <TrendingUp className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm text-accent font-medium">34% higher win rates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
