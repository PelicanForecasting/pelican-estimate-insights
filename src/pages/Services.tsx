import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/sections/Footer';
import { Database, LineChart, ArrowRight, Workflow, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 relative">
        <div className="content-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-pelican-navy mb-6">Our Services</h1>
            <p className="text-lg text-pelican-slate">
              We help construction companies transform their estimating processes through 
              advanced data analytics and industry expertise.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-pelican-navy/5 p-4 inline-flex rounded-xl mb-4">
                <Database className="w-8 h-8 text-pelican-teal" />
              </div>
              <h3 className="text-2xl font-bold text-pelican-navy mb-4">Data Integration & Environment Development</h3>
              <p className="text-pelican-slate mb-6">
                Transform disconnected data into unified intelligence. We help you create integrated 
                systems that connect your estimating, operations, and accounting data.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Centralized historical project databases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Custom data architecture aligned with your workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Connecting estimating software with operational systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Automated data extraction and transformation</span>
                </li>
              </ul>
              <Button variant="outline" className="border-pelican-teal text-pelican-teal hover:bg-pelican-teal/5">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-pelican-navy/5 p-4 inline-flex rounded-xl mb-4">
                <LineChart className="w-8 h-8 text-pelican-teal" />
              </div>
              <h3 className="text-2xl font-bold text-pelican-navy mb-4">Analytics & Intelligence Development</h3>
              <p className="text-pelican-slate mb-6">
                Convert raw data into actionable insights. We develop custom analytics tools and 
                dashboards that reveal patterns in your historical project data.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Production rate analytics and benchmarking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Cost variance analysis and prediction models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Bid performance analytics and feedback loops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Custom dashboards and visual analysis tools</span>
                </li>
              </ul>
              <Button variant="outline" className="border-pelican-teal text-pelican-teal hover:bg-pelican-teal/5">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-pelican-navy/5 p-4 inline-flex rounded-xl mb-4">
                <svg className="w-8 h-8 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-pelican-navy mb-4">Estimating Process Enhancement</h3>
              <p className="text-pelican-slate mb-6">
                Streamline and optimize your estimating workflow. We implement data-driven methodologies 
                that improve accuracy, efficiency, and consistency.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Standardized estimation templates and workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Risk assessment and contingency frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Bid/no-bid decision matrix development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Quality control and review processes</span>
                </li>
              </ul>
              <Button variant="outline" className="border-pelican-teal text-pelican-teal hover:bg-pelican-teal/5">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-pelican-navy/5 p-4 inline-flex rounded-xl mb-4">
                <Lightbulb className="w-8 h-8 text-pelican-teal" />
              </div>
              <h3 className="text-2xl font-bold text-pelican-navy mb-4">Knowledge Transfer & Training</h3>
              <p className="text-pelican-slate mb-6">
                Preserve institutional knowledge and build team capabilities. We help you capture expertise and 
                develop your team's skills to ensure long-term success.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Estimating expertise documentation and systemization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Data literacy and analytics training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Custom process manuals and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Cross-training and knowledge sharing frameworks</span>
                </li>
              </ul>
              <Button variant="outline" className="border-pelican-teal text-pelican-teal hover:bg-pelican-teal/5">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Approach Section */}
          <div className="bg-pelican-navy/5 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-pelican-navy mb-6">Our Approach</h2>
            <p className="text-pelican-slate mb-8">
              We follow a proven methodology that combines construction industry expertise with data science principles, 
              ensuring practical solutions that deliver real value.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h4 className="text-lg font-bold text-pelican-navy mb-2">Assessment & Discovery</h4>
                <p className="text-sm text-pelican-slate">
                  We evaluate your current processes, data environment, and goals to identify opportunities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h4 className="text-lg font-bold text-pelican-navy mb-2">Data Integration</h4>
                <p className="text-sm text-pelican-slate">
                  We develop unified data environments that connect estimating with operations and accounting.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h4 className="text-lg font-bold text-pelican-navy mb-2">Process Enhancement</h4>
                <p className="text-sm text-pelican-slate">
                  We implement data-driven workflows and tools that improve accuracy and efficiency.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">4</div>
                <h4 className="text-lg font-bold text-pelican-navy mb-2">Knowledge Transfer</h4>
                <p className="text-sm text-pelican-slate">
                  We ensure your team is equipped with the skills and documentation to maintain success.
                </p>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-pelican-navy mb-4">
              Ready to explore how these services can benefit your company?
            </h3>
            <Button variant="accent" size="lg" asChild className="mt-4">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
