
import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/sections/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EstimatingMaturity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <Navbar />
      
      <main className="container max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-pelican-navy mb-4 text-center">
          Estimating Maturity Assessment
        </h1>
        <p className="text-pelican-slate text-center mb-8 max-w-3xl mx-auto text-lg">
          Evaluate and improve your construction estimating processes
        </p>
        
        <Card className="shadow-lg border-pelican-teal/20 bg-white hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-navy/90 text-white rounded-t-lg">
            <CardTitle className="text-xl font-heading">Estimating Maturity Assessment</CardTitle>
            <CardDescription className="text-white/80">
              Coming soon - Benchmark your estimating processes against industry best practices
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="py-16 text-center">
              <h3 className="text-xl font-heading font-medium text-pelican-navy mb-4">Tool Under Development</h3>
              <p className="text-pelican-slate mb-6">
                Our team is creating a comprehensive assessment tool to help you evaluate your current estimating 
                practices and identify opportunities for improvement. Check back soon for this valuable resource.
              </p>
              <div className="mx-auto w-24 h-24 rounded-full bg-pelican-lightGray flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pelican-orange animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default EstimatingMaturity;
