
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LaborBurdenInputs } from '../types';

interface LaborBurdenFormProps {
  inputs: LaborBurdenInputs;
  onInputChange: (field: keyof LaborBurdenInputs, value: number) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const LaborBurdenForm = ({ inputs, onInputChange, onSubmit }: LaborBurdenFormProps) => {
  const handleInputChange = (field: keyof LaborBurdenInputs) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(field, parseFloat(e.target.value) || 0);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="baseRate" className="text-pelican-navy font-medium">Base Hourly Rate ($)</Label>
        <Input 
          id="baseRate" 
          type="number" 
          step="0.01" 
          min="0" 
          value={inputs.baseHourlyRate || ''}
          onChange={handleInputChange('baseHourlyRate')}
          className="border-pelican-mediumGray focus:border-pelican-teal"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="federalTax" className="text-pelican-navy font-medium">Federal Payroll Taxes (%)</Label>
          <Input 
            id="federalTax" 
            type="number" 
            step="0.01" 
            min="0" 
            value={inputs.federalTaxRate || ''}
            onChange={handleInputChange('federalTaxRate')}
            className="border-pelican-mediumGray focus:border-pelican-teal"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="stateTax" className="text-pelican-navy font-medium">State Payroll Taxes (%)</Label>
          <Input 
            id="stateTax" 
            type="number" 
            step="0.01" 
            min="0" 
            value={inputs.stateTaxRate || ''}
            onChange={handleInputChange('stateTaxRate')}
            className="border-pelican-mediumGray focus:border-pelican-teal"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="workersComp" className="text-pelican-navy font-medium">Workers' Compensation (%)</Label>
          <Input 
            id="workersComp" 
            type="number" 
            step="0.01" 
            min="0" 
            value={inputs.workersCompRate || ''}
            onChange={handleInputChange('workersCompRate')}
            className="border-pelican-mediumGray focus:border-pelican-teal"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="healthInsurance" className="text-pelican-navy font-medium">Health Insurance ($/hr)</Label>
          <Input 
            id="healthInsurance" 
            type="number" 
            step="0.01" 
            min="0" 
            value={inputs.healthInsurance || ''}
            onChange={handleInputChange('healthInsurance')}
            className="border-pelican-mediumGray focus:border-pelican-teal"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="retirement" className="text-pelican-navy font-medium">Retirement Contributions ($/hr)</Label>
          <Input 
            id="retirement" 
            type="number" 
            step="0.01" 
            min="0" 
            value={inputs.retirement || ''}
            onChange={handleInputChange('retirement')}
            className="border-pelican-mediumGray focus:border-pelican-teal"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="training" className="text-pelican-navy font-medium">Training Costs ($/hr)</Label>
          <Input 
            id="training" 
            type="number" 
            step="0.01" 
            min="0" 
            value={inputs.trainingCosts || ''}
            onChange={handleInputChange('trainingCosts')}
            className="border-pelican-mediumGray focus:border-pelican-teal"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="otherBenefits" className="text-pelican-navy font-medium">Other Benefits ($/hr)</Label>
        <Input 
          id="otherBenefits" 
          type="number" 
          step="0.01" 
          min="0" 
          value={inputs.otherBenefits || ''}
          onChange={handleInputChange('otherBenefits')}
          className="border-pelican-mediumGray focus:border-pelican-teal"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-pelican-navy hover:bg-pelican-navy/90 text-white font-medium mt-4 transition-colors"
      >
        Calculate Burden
      </Button>
    </form>
  );
};

export default LaborBurdenForm;
