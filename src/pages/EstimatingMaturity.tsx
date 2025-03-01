
import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/sections/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EstimatingMaturity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <Navbar />
      
      <main className="container max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gradient bg-gradient-to-r from-pelican-navy to-pelican-teal mb-4">
            Estimating Maturity Assessment
          </h1>
          <p className="text-pelican-slate text-center mb-8 max-w-3xl mx-auto text-lg">
            Evaluate your construction estimating processes against industry best practices
          </p>
        </div>
        
        <Card className="shadow-xl border-pelican-teal/20 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-lg p-6">
            <CardTitle className="text-2xl font-heading">Estimating Maturity Assessment</CardTitle>
            <CardDescription className="text-white/90 text-lg">
              Coming soon - Benchmark your estimating processes against industry standards
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="py-16 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pelican-softTeal to-pelican-teal/40 flex items-center justify-center mx-auto mb-8 animate-pulse-slow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-heading font-medium text-pelican-navy mb-6">Assessment Tool Under Development</h3>
              <p className="text-pelican-slate mb-8 max-w-2xl mx-auto">
                Our team is creating a comprehensive assessment tool to help you evaluate your current estimating 
                practices and identify opportunities for improvement. This tool will enable you to benchmark your 
                processes against industry leaders and develop a roadmap for enhancing your estimating capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white hover:opacity-90"
                >
                  Join Waitlist
                </Button>
                <Button 
                  variant="outline" 
                  className="border-pelican-teal text-pelican-navy hover:bg-pelican-teal/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pelican-cream">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Benchmarking</h3>
            <p className="text-pelican-slate">Compare your processes to industry standards and identify improvement areas</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pelican-cream">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Customized Roadmap</h3>
            <p className="text-pelican-slate">Receive tailored recommendations based on your assessment results</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pelican-cream">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Implementation Support</h3>
            <p className="text-pelican-slate">Access resources and guidance to help you implement improvements</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EstimatingMaturity;
