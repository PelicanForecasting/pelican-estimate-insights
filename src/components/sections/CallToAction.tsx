
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-pelican-navy/95"></div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.05] pointer-events-none"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pelican-teal/10 rounded-l-3xl transform -skew-x-12"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/10 rounded-tr-3xl transform skew-x-12"></div>
      
      <div className="content-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Ready to Transform Your Estimating Process?
            </h2>
            <p className="text-white/80 text-lg">
              Our free assessment will reveal opportunities to improve accuracy, efficiency, and profitability in your preconstruction processes.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="mr-2 h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span>Identify strengths and improvement areas in your estimating process</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span>Receive personalized recommendations based on your responses</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span>Get a roadmap for improving your estimating capabilities</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span>Benchmark against industry best practices</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" variant="accent" className="font-medium text-base shadow-md hover:shadow-lg">
                <Link to="/estimating-maturity" className="flex items-center">
                  Take Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild size="lg">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 text-white">
            <h3 className="text-2xl font-bold mb-6">What You'll Discover</h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-bold">Process Maturity Score</h4>
                </div>
                <p className="text-white/80 text-sm">
                  Learn where your estimating process stands compared to industry benchmarks.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <Workflow className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-bold">Improvement Roadmap</h4>
                </div>
                <p className="text-white/80 text-sm">
                  Receive actionable steps to enhance your estimating capabilities.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <Database className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-bold">Technology Assessment</h4>
                </div>
                <p className="text-white/80 text-sm">
                  Identify gaps and opportunities in your technology utilization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
