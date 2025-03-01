
import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/sections/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const QuadrilateralDeckCalculator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <Navbar />
      
      <main className="container max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-pelican-navy mb-4 text-center">
          Quadrilateral Deck Calculator
        </h1>
        <p className="text-pelican-slate text-center mb-8 max-w-3xl mx-auto text-lg">
          Calculate area and materials for non-rectangular decks with precision.
        </p>
        
        <Card className="shadow-lg border-pelican-teal/20 bg-white hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-navy/90 text-white rounded-t-lg">
            <CardTitle className="text-xl font-heading">Quadrilateral Deck Calculator</CardTitle>
            <CardDescription className="text-white/80">
              Coming soon - A powerful tool for calculating irregular deck shapes
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="py-16 text-center">
              <h3 className="text-xl font-heading font-medium text-pelican-navy mb-4">Feature Under Development</h3>
              <p className="text-pelican-slate mb-6">
                Our team is currently building this advanced calculator to help you with precise measurements 
                for non-rectangular decks. Check back soon for this valuable estimating tool.
              </p>
              <div className="mx-auto w-24 h-24 rounded-full bg-pelican-lightGray flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pelican-teal animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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

export default QuadrilateralDeckCalculator;
