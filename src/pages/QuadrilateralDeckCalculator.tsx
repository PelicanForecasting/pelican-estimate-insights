
import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/sections/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuadrilateralDeckCalculator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <Navbar />
      
      <main className="container max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gradient bg-gradient-to-r from-pelican-navy to-pelican-teal mb-4">
            Quadrilateral Deck Calculator
          </h1>
          <p className="text-pelican-slate text-center mb-8 max-w-3xl mx-auto text-lg">
            Calculate area and materials for non-rectangular decks with precision
          </p>
        </div>
        
        <Card className="shadow-xl border-pelican-teal/20 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-lg p-6">
            <CardTitle className="text-2xl font-heading">Quadrilateral Deck Calculator</CardTitle>
            <CardDescription className="text-white/90 text-lg">
              Coming soon - A powerful tool for calculating irregular deck shapes
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="py-16 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pelican-softTeal to-pelican-teal/40 flex items-center justify-center mx-auto mb-8 animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-heading font-medium text-pelican-navy mb-6">Advanced Calculator Under Development</h3>
              <p className="text-pelican-slate mb-8 max-w-2xl mx-auto">
                Our team is building this innovative calculator to help you measure and estimate materials 
                for non-rectangular deck shapes. This tool will enable you to input the dimensions of 
                irregular quadrilateral shapes and receive accurate area calculations and material estimations.
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
                  See Example
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pelican-cream">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Accurate Measurements</h3>
            <p className="text-pelican-slate">Calculate precise areas for irregular quadrilateral shapes</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pelican-cream">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Material Estimates</h3>
            <p className="text-pelican-slate">Get detailed breakdowns of decking, framing, and fasteners needed</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pelican-cream">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Time Savings</h3>
            <p className="text-pelican-slate">Save hours on complex calculations and reduce material waste</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuadrilateralDeckCalculator;
