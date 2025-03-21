
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
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-3">
        <Label htmlFor="baseRate" className="text-pelican-navy font-medium text-base">Base Hourly Rate ($)</Label>
        <Input 
          id="baseRate" 
          type="number" 
          step="0.01" 
          min="0" 
          value={inputs.baseHourlyRate || ''}
          onChange={handleInputChange('baseHourlyRate')}
          className="border-pelican-mediumGray focus:border-pelican-teal rounded-sm h-11"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="federalTax" className="text-pelican-navy font-medium text-base">Federal Payroll Taxes (%)</Label>
          <Input 
            id="federalTax" 
            type="number" 
            step="0.01" 
            min="0" 
            value={inputs.federalTaxRate || ''}
            onChange={handleInputChange('federalTaxRate')}
            className="border-pelican-mediumGray focus:border-pelican-teal rounded-sm h-11"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="stateTax" className="text-pelican-navy font-medium text-base">State Payroll Taxes (%)</Label>
          <Input 
            id="stateTax" 
            type="number" 
            step="0.01" 
            min="0" 
            value={inputs.stateTaxRate || ''}
            onChange={handleInputChange('stateTaxRate')}
            className="border-pelican-mediumGray focus:border-pelican-teal rounded-sm h-11"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="workersComp" className="text-pelican-navy font-medium text-base">Workers' Compensation (%)</Label>
          <Input 
            id="workersComp" 
            type="number" 
            step="0.01" 
            min="0" 
            value={inputs.workersCompRate || ''}
            onChange={handleInputChange('workersCompRate')}
            className="border-pelican-mediumGray focus:border-pelican-teal rounded-sm h-11"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="healthInsurance" className="text-pelican-navy font-medium text-base">Health Insurance ($/hr)</Label>
          <Input 
            id="healthInsurance" 
            type="number" 
            step="0.01" 
            min="0" 
            value={inputs.healthInsurance || ''}
            onChange={handleInputChange('healthInsurance')}
            className="border-pelican-mediumGray focus:border-pelican-teal rounded-sm h-11"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="retirement" className="text-pelican-navy font-medium text-base">Retirement Contributions ($/hr)</Label>
          <Input 
            id="retirement" 
            type="number" 
            step="0.01" 
            min="0" 
            value={inputs.retirement || ''}
            onChange={handleInputChange('retirement')}
            className="border-pelican-mediumGray focus:border-pelican-teal rounded-sm h-11"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="training" className="text-pelican-navy font-medium text-base">Training Costs ($/hr)</Label>
          <Input 
            id="training" 
            type="number" 
            step="0.01" 
            min="0" 
            value={inputs.trainingCosts || ''}
            onChange={handleInputChange('trainingCosts')}
            className="border-pelican-mediumGray focus:border-pelican-teal rounded-sm h-11"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Label htmlFor="otherBenefits" className="text-pelican-navy font-medium text-base">Other Benefits ($/hr)</Label>
        <Input 
          id="otherBenefits" 
          type="number" 
          step="0.01" 
          min="0" 
          value={inputs.otherBenefits || ''}
          onChange={handleInputChange('otherBenefits')}
          className="border-pelican-mediumGray focus:border-pelican-teal rounded-sm h-11"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full h-12 px-6 py-3 mt-6 bg-pelican-teal hover:bg-pelican-teal/90 text-white font-medium rounded-md transition-colors"
      >
        Calculate Burden
      </Button>
    </form>
  );
};

export default LaborBurdenForm;
