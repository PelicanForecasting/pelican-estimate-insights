
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/sections/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const LaborBurdenCalculator = () => {
  const { toast } = useToast();
  const [baseHourlyRate, setBaseHourlyRate] = useState<number>(0);
  const [federalTaxRate, setFederalTaxRate] = useState<number>(7.65); // Default FICA rate
  const [stateTaxRate, setStateTaxRate] = useState<number>(3.0);
  const [workersCompRate, setWorkersCompRate] = useState<number>(10.0);
  const [healthInsurance, setHealthInsurance] = useState<number>(0);
  const [retirement, setRetirement] = useState<number>(0);
  const [trainingCosts, setTrainingCosts] = useState<number>(0);
  const [otherBenefits, setOtherBenefits] = useState<number>(0);
  const [burdenedRate, setBurdenedRate] = useState<number>(0);
  const [burdenPercentage, setBurdenPercentage] = useState<number>(0);

  useEffect(() => {
    calculateBurden();
  }, [baseHourlyRate, federalTaxRate, stateTaxRate, workersCompRate, healthInsurance, retirement, trainingCosts, otherBenefits]);

  const calculateBurden = () => {
    if (!baseHourlyRate) return;

    // Calculate burden costs per hour
    const taxes = baseHourlyRate * ((federalTaxRate + stateTaxRate) / 100);
    const workersComp = baseHourlyRate * (workersCompRate / 100);
    const totalBurden = taxes + workersComp + healthInsurance + retirement + trainingCosts + otherBenefits;
    
    // Calculate total burdened rate
    const newBurdenedRate = baseHourlyRate + totalBurden;
    setBurdenedRate(newBurdenedRate);
    
    // Calculate burden as percentage of base rate
    const newBurdenPercentage = (totalBurden / baseHourlyRate) * 100;
    setBurdenPercentage(newBurdenPercentage);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBurden();
    toast({
      title: "Calculation Complete",
      description: `Fully burdened hourly rate: $${burdenedRate.toFixed(2)}`,
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="baseRate">Base Hourly Rate ($)</Label>
                  <Input 
                    id="baseRate" 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    value={baseHourlyRate || ''}
                    onChange={(e) => setBaseHourlyRate(parseFloat(e.target.value) || 0)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="federalTax">Federal Payroll Taxes (%)</Label>
                  <Input 
                    id="federalTax" 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    value={federalTaxRate || ''}
                    onChange={(e) => setFederalTaxRate(parseFloat(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stateTax">State Payroll Taxes (%)</Label>
                  <Input 
                    id="stateTax" 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    value={stateTaxRate || ''}
                    onChange={(e) => setStateTaxRate(parseFloat(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workersComp">Workers' Compensation (%)</Label>
                  <Input 
                    id="workersComp" 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    value={workersCompRate || ''}
                    onChange={(e) => setWorkersCompRate(parseFloat(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="healthInsurance">Health Insurance ($/hr)</Label>
                  <Input 
                    id="healthInsurance" 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    value={healthInsurance || ''}
                    onChange={(e) => setHealthInsurance(parseFloat(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="retirement">Retirement Contributions ($/hr)</Label>
                  <Input 
                    id="retirement" 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    value={retirement || ''}
                    onChange={(e) => setRetirement(parseFloat(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="training">Training Costs ($/hr)</Label>
                  <Input 
                    id="training" 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    value={trainingCosts || ''}
                    onChange={(e) => setTrainingCosts(parseFloat(e.target.value) || 0)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="otherBenefits">Other Benefits ($/hr)</Label>
                  <Input 
                    id="otherBenefits" 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    value={otherBenefits || ''}
                    onChange={(e) => setOtherBenefits(parseFloat(e.target.value) || 0)}
                  />
                </div>

                <Button type="submit" className="w-full">Calculate Burden</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Your labor burden calculation results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg">Base Hourly Rate</h3>
                  <p className="text-2xl font-bold">${baseHourlyRate.toFixed(2)}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg">Burden Amount</h3>
                  <p className="text-2xl font-bold">${(burdenedRate - baseHourlyRate).toFixed(2)}</p>
                </div>

                <div>
                  <h3 className="font-medium text-lg">Burden Percentage</h3>
                  <p className="text-2xl font-bold">{burdenPercentage.toFixed(1)}%</p>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-medium text-lg">Fully Burdened Hourly Rate</h3>
                  <p className="text-3xl font-bold text-blue-600">${burdenedRate.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">Use this rate for accurate labor cost estimating in your bids.</p>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Why This Matters</h2>
          <p>Many contractors significantly underestimate true labor costs by only considering the base hourly rate. A proper burden calculation ensures:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>More accurate project estimates</li>
            <li>Proper recovery of indirect labor costs</li>
            <li>Improved profitability tracking</li>
            <li>Compliance with government contracting requirements</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LaborBurdenCalculator;
