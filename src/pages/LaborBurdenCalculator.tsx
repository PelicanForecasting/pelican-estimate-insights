
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LaborBurdenForm from '@/features/labor-burden-calculator/components/LaborBurdenForm';
import LaborBurdenResults from '@/features/labor-burden-calculator/components/LaborBurdenResults';
import InfoSection from '@/features/labor-burden-calculator/components/InfoSection';
import { calculateLaborBurden } from '@/features/labor-burden-calculator/utils/calculationUtils';
import { LaborBurdenInputs, LaborBurdenOutputs } from '@/features/labor-burden-calculator/types';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/sections/Footer';

const LaborBurdenCalculator = () => {
  const [inputs, setInputs] = useState<LaborBurdenInputs>({
    baseHourlyRate: 25,
    federalTaxRate: 7.65,
    stateTaxRate: 3.5,
    workersCompRate: 5.2,
    healthInsurance: 3.75,
    retirement: 1.25,
    trainingCosts: 0.50,
    otherBenefits: 0.75
  });

  const [outputs, setOutputs] = useState<LaborBurdenOutputs>(calculateLaborBurden(inputs));
  
  const handleInputChange = (field: keyof LaborBurdenInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOutputs(calculateLaborBurden(inputs));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <Navbar />
      
      <main className="container max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gradient bg-gradient-to-r from-pelican-navy to-pelican-teal mb-4">
            Labor Burden Calculator
          </h1>
          <p className="text-pelican-slate text-center mb-8 max-w-3xl mx-auto text-lg">
            Calculate the true cost of labor for your construction projects with precision
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <div className="lg:col-span-7">
            <Card className="shadow-xl border-pelican-teal/20 bg-white hover:shadow-2xl transition-all duration-500 h-full">
              <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-navy/90 text-white rounded-t-lg p-6">
                <CardTitle className="text-2xl font-heading">Input Labor Data</CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Enter hourly labor rates and associated costs
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <LaborBurdenForm 
                  inputs={inputs}
                  onInputChange={handleInputChange}
                  onSubmit={handleSubmit}
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-5">
            <Card className="shadow-xl border-pelican-teal/20 bg-white hover:shadow-2xl transition-all duration-500 h-full">
              <CardHeader className="bg-gradient-to-r from-pelican-teal to-pelican-teal/90 text-white rounded-t-lg p-6">
                <CardTitle className="text-2xl font-heading">Results</CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Your fully burdened labor rate
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <LaborBurdenResults 
                  inputs={inputs}
                  outputs={outputs}
                />
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <InfoSection />
            </div>
          </div>
        </div>
        
        <div className="mt-16 mb-12 bg-white p-8 rounded-xl shadow-lg border border-pelican-teal/10">
          <h2 className="text-2xl font-heading font-bold text-pelican-navy mb-6">Why Calculate Labor Burden?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Accurate Bidding</h3>
              <p className="text-pelican-slate">Ensure your bids cover the true cost of labor, helping maintain profitability</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Budget Planning</h3>
              <p className="text-pelican-slate">Better predict labor costs for improved project budgeting and cash flow management</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Competitive Edge</h3>
              <p className="text-pelican-slate">Make informed decisions about labor pricing to stay competitive while maintaining margins</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LaborBurdenCalculator;
