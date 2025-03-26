
import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/sections/Footer';
import { Database, LineChart, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 relative">
        <div className="content-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-pelican-navy to-pelican-teal mb-6">About Pelican Forecasting Group</h1>
            <p className="text-lg text-pelican-slate">
              We bridge the gap between construction expertise and data science, helping companies leverage their historical project data.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Story Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="content-container">
          <div className="flex flex-col md:flex-row gap-12 mb-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-pelican-navy mb-6">Our Story</h2>
              <p className="text-pelican-slate mb-4">
                Pelican Forecasting Group was founded by Mason Hennings, an experienced construction estimator with extensive expertise in data analytics and database architecture. After years of working in the construction industry, Mason recognized a critical gap: construction companies were "data-rich but insight-poor."
              </p>
              <p className="text-pelican-slate mb-4">
                Despite generating valuable production and cost data through completed projects, this information typically remains trapped in disconnected systems, spreadsheets, and institutional knowledge. As a result, estimators often rely on subjective methods rather than data-driven approaches.
              </p>
              <p className="text-pelican-slate">
                PFG was created to help established construction companies transform their historical project data into actionable estimating intelligence, improving accuracy, efficiency, and profitability in the preconstruction process.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pelican-teal/10 rounded-full"></div>
                
                <div className="relative z-10 glass-card max-w-sm mx-auto">
                  <img src="/lovable-uploads/55ba6c29-7c4a-4f43-b063-49a9051b315a.png" alt="Construction crane on a waterfront project" className="w-full h-auto object-cover max-h-[280px]" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Expertise Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-pelican-navy mb-8 text-center">Our Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card text-center">
                <div className="bg-pelican-navy/5 p-4 inline-flex rounded-full mb-4">
                  <Award className="w-8 h-8 text-pelican-teal" />
                </div>
                <h4 className="text-lg font-bold text-pelican-navy mb-2">Construction Estimating</h4>
                <p className="text-sm text-pelican-slate">
                  Years of hands-on estimating experience across diverse construction sectors.
                </p>
              </div>
              
              <div className="glass-card text-center">
                <div className="bg-pelican-navy/5 p-4 inline-flex rounded-full mb-4">
                  <Database className="w-8 h-8 text-pelican-teal" />
                </div>
                <h4 className="text-lg font-bold text-pelican-navy mb-2">Database Architecture</h4>
                <p className="text-sm text-pelican-slate">
                  Expert in designing and implementing construction-specific database systems.
                </p>
              </div>
              
              <div className="glass-card text-center">
                <div className="bg-pelican-navy/5 p-4 inline-flex rounded-full mb-4">
                  <LineChart className="w-8 h-8 text-pelican-teal" />
                </div>
                <h4 className="text-lg font-bold text-pelican-navy mb-2">Statistical Analysis</h4>
                <p className="text-sm text-pelican-slate">
                  Advanced analytics expertise applied to construction production rates and costs.
                </p>
              </div>
              
              <div className="glass-card text-center">
                <div className="bg-pelican-navy/5 p-4 inline-flex rounded-full mb-4">
                  <Users className="w-8 h-8 text-pelican-teal" />
                </div>
                <h4 className="text-lg font-bold text-pelican-navy mb-2">Process Optimization</h4>
                <p className="text-sm text-pelican-slate">
                  Streamlining estimating workflows for improved accuracy and efficiency.
                </p>
              </div>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-pelican-navy mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card">
                <h4 className="text-xl font-bold text-pelican-navy mb-3">Data-Driven Decisions</h4>
                <p className="text-pelican-slate">
                  We believe in the power of objective data to drive better business decisions. Our solutions 
                  are grounded in statistical analysis rather than gut feel.
                </p>
              </div>
              
              <div className="glass-card">
                <h4 className="text-xl font-bold text-pelican-navy mb-3">Practical Implementation</h4>
                <p className="text-pelican-slate">
                  We focus on real-world applications, not theoretical models. Our solutions are designed 
                  to be practical, accessible, and immediately valuable.
                </p>
              </div>
              
              <div className="glass-card">
                <h4 className="text-xl font-bold text-pelican-navy mb-3">Knowledge Transfer</h4>
                <p className="text-pelican-slate">
                  We believe in empowering our clients with the skills and understanding to maintain and 
                  build upon the solutions we develop together.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-pelican-navy mb-8 text-center">Our Team</h2>
            <div className="max-w-3xl mx-auto glass-panel">
              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-pelican-teal/20 flex-shrink-0">
                  <img alt="Mason Hennings" src="/lovable-uploads/bb6df2e4-5c08-47ce-86c9-f8801514e861.png" className="w-full h-full object-cover object-center" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-pelican-navy mb-1">Mason Hennings</h4>
                  <p className="text-secondary font-medium mb-3">Founder & Principal Consultant</p>
                  <p className="text-pelican-slate mb-3">
                    With over 12 years of experience in construction estimating and data analytics, 
                    Mason brings a unique combination of industry knowledge and technical expertise 
                    to help construction companies leverage their data assets.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-pelican-navy hover:text-secondary transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center max-w-2xl mx-auto glass-panel bg-pelican-navy/5">
            <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-pelican-navy to-pelican-teal mb-4">
              Ready to transform your estimating process?
            </h3>
            <p className="text-pelican-slate mb-6">
              Let's talk about how we can help you leverage your historical data to improve 
              estimating accuracy and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="primary-button" asChild>
                <Link to="/estimating-maturity">Take Assessment</Link>
              </Button>
              <Button className="secondary-button" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};

export default About;
