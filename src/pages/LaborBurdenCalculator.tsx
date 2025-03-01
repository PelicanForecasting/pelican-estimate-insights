
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/sections/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Import the new components and utilities
import LaborBurdenForm from '../features/labor-burden-calculator/components/LaborBurdenForm';
import LaborBurdenResults from '../features/labor-burden-calculator/components/LaborBurdenResults';
import InfoSection from '../features/labor-burden-calculator/components/InfoSection';
import { calculateLaborBurden } from '../features/labor-burden-calculator/utils/calculationUtils';
import { LaborBurdenInputs } from '../features/labor-burden-calculator/types';

const LaborBurdenCalculator = () => {
  const { toast } = useToast();
  const [inputs, setInputs] = useState<LaborBurdenInputs>({
    baseHourlyRate: 0,
    federalTaxRate: 7.65, // Default FICA rate
    stateTaxRate: 3.0,
    workersCompRate: 10.0,
    healthInsurance: 0,
    retirement: 0,
    trainingCosts: 0,
    otherBenefits: 0
  });
  
  const [outputs, setOutputs] = useState({
    burdenedRate: 0,
    burdenPercentage: 0
  });

  useEffect(() => {
    const results = calculateLaborBurden(inputs);
    setOutputs(results);
  }, [inputs]);

  const handleInputChange = (field: keyof LaborBurdenInputs, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const results = calculateLaborBurden(inputs);
    setOutputs(results);
    toast({
      title: "Calculation Complete",
      description: `Fully burdened hourly rate: $${results.burdenedRate.toFixed(2)}`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-pelican-cream/30">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="text-center mb-8 reveal" style={{ transform: 'translateY(20px)' }}>
          <h1 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-4 font-heading">Labor Burden Calculator</h1>
          <p className="text-pelican-slate max-w-3xl mx-auto">
            Calculate the true cost of labor by accounting for all indirect costs beyond base wages. 
            Ensure accurate labor costing for your construction estimates.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="overflow-hidden border-pelican-lightGray shadow-lg bg-gradient-to-br from-white to-pelican-cream/20 reveal" style={{ transform: 'translateY(20px)' }}>
            <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal/80 text-white">
              <CardTitle>Labor Burden Inputs</CardTitle>
              <CardDescription className="text-white/80">Enter your labor cost details below</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <LaborBurdenForm 
                inputs={inputs} 
                onInputChange={handleInputChange} 
                onSubmit={handleSubmit} 
              />
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-pelican-lightGray shadow-lg bg-gradient-to-br from-white to-pelican-cream/20 reveal" style={{ transform: 'translateY(20px)', animationDelay: '0.2s' }}>
            <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal/80 text-white">
              <CardTitle>Results</CardTitle>
              <CardDescription className="text-white/80">Your labor burden calculation results</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <LaborBurdenResults 
                inputs={inputs} 
                outputs={outputs} 
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 reveal" style={{ transform: 'translateY(20px)', animationDelay: '0.3s' }}>
          <InfoSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LaborBurdenCalculator;
