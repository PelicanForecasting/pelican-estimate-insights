
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, BarChart3, Database, Workflow, Trophy } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-pelican-navy/5 relative">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-pelican-navy mb-6">
                Ready to transform your estimating process?
              </h2>
              <p className="text-pelican-slate mb-8">
                Schedule a free consultation to discuss how our data-driven approach can help improve your estimating accuracy and efficiency.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-pelican-teal" />
                  </div>
                  <p className="ml-3 text-pelican-slate">
                    No commitment required - just a conversation about your needs
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-pelican-teal" />
                  </div>
                  <p className="ml-3 text-pelican-slate">
                    Get actionable insights you can implement immediately
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-pelican-teal" />
                  </div>
                  <p className="ml-3 text-pelican-slate">
                    Learn how other construction companies are leveraging their data
                  </p>
                </li>
              </ul>
              
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <Button variant="default" size="lg" className="w-full sm:w-auto bg-pelican-navy text-white hover:bg-pelican-navy/90" asChild>
                  <Link to="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-pelican-navy text-pelican-navy" asChild>
                  <Link to="/estimating-maturity">Take Assessment</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-pelican-teal/10 p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-xl font-bold text-pelican-navy mb-6">
                  Our process delivers results
                </h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pelican-teal/20 text-pelican-teal">
                        <Database className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-pelican-navy">Data Assessment</h4>
                      <p className="mt-1 text-sm text-pelican-slate">
                        We analyze your current data environment and estimating processes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pelican-teal/20 text-pelican-teal">
                        <BarChart3 className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-pelican-navy">Solution Design</h4>
                      <p className="mt-1 text-sm text-pelican-slate">
                        We develop a tailored approach based on your specific needs and goals
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pelican-teal/20 text-pelican-teal">
                        <Workflow className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-pelican-navy">Implementation</h4>
                      <p className="mt-1 text-sm text-pelican-slate">
                        We work with your team to implement and integrate new systems and processes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pelican-teal/20 text-pelican-teal">
                        <Trophy className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-pelican-navy">Continuous Improvement</h4>
                      <p className="mt-1 text-sm text-pelican-slate">
                        We provide ongoing support and optimization to ensure long-term success
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
