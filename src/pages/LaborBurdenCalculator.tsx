
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold mb-6">Labor Burden Calculator</h1>
        <p className="mb-6">Calculate the true cost of labor by accounting for all indirect costs beyond base wages. Ensure accurate labor costing for your construction estimates.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Labor Burden Inputs</CardTitle>
              <CardDescription>Enter your labor cost details below</CardDescription>
            </CardHeader>
            <CardContent>
              <LaborBurdenForm 
                inputs={inputs} 
                onInputChange={handleInputChange} 
                onSubmit={handleSubmit} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Your labor burden calculation results</CardDescription>
            </CardHeader>
            <CardContent>
              <LaborBurdenResults 
                inputs={inputs} 
                outputs={outputs} 
              />
            </CardContent>
          </Card>
        </div>

        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default LaborBurdenCalculator;
