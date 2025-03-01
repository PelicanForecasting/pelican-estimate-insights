
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
      
      <main className="container max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-pelican-navy mb-4 text-center">
          Labor Burden Calculator
        </h1>
        <p className="text-pelican-slate text-center mb-8 max-w-3xl mx-auto text-lg">
          Calculate the true cost of labor for your construction projects with our precise labor burden calculator.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <div className="lg:col-span-7">
            <Card className="shadow-lg border-pelican-teal/20 bg-white hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-navy/90 text-white rounded-t-lg">
                <CardTitle className="text-xl font-heading">Input Labor Data</CardTitle>
                <CardDescription className="text-white/80">
                  Enter hourly labor rates and associated costs
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <LaborBurdenForm 
                  inputs={inputs}
                  onInputChange={handleInputChange}
                  onSubmit={handleSubmit}
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-5">
            <Card className="shadow-lg border-pelican-teal/20 bg-white hover:shadow-xl transition-shadow h-full">
              <CardHeader className="bg-gradient-to-r from-pelican-teal to-pelican-teal/90 text-white rounded-t-lg">
                <CardTitle className="text-xl font-heading">Results</CardTitle>
                <CardDescription className="text-white/80">
                  Your fully burdened labor rate
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default LaborBurdenCalculator;
