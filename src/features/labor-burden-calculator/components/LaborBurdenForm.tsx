
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
        <Label htmlFor="baseRate">Base Hourly Rate ($)</Label>
        <Input 
          id="baseRate" 
          type="number" 
          step="0.01" 
          min="0" 
          value={inputs.baseHourlyRate || ''}
          onChange={handleInputChange('baseHourlyRate')}
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
          value={inputs.federalTaxRate || ''}
          onChange={handleInputChange('federalTaxRate')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="stateTax">State Payroll Taxes (%)</Label>
        <Input 
          id="stateTax" 
          type="number" 
          step="0.01" 
          min="0" 
          value={inputs.stateTaxRate || ''}
          onChange={handleInputChange('stateTaxRate')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="workersComp">Workers' Compensation (%)</Label>
        <Input 
          id="workersComp" 
          type="number" 
          step="0.01" 
          min="0" 
          value={inputs.workersCompRate || ''}
          onChange={handleInputChange('workersCompRate')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="healthInsurance">Health Insurance ($/hr)</Label>
        <Input 
          id="healthInsurance" 
          type="number" 
          step="0.01" 
          min="0" 
          value={inputs.healthInsurance || ''}
          onChange={handleInputChange('healthInsurance')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="retirement">Retirement Contributions ($/hr)</Label>
        <Input 
          id="retirement" 
          type="number" 
          step="0.01" 
          min="0" 
          value={inputs.retirement || ''}
          onChange={handleInputChange('retirement')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="training">Training Costs ($/hr)</Label>
        <Input 
          id="training" 
          type="number" 
          step="0.01" 
          min="0" 
          value={inputs.trainingCosts || ''}
          onChange={handleInputChange('trainingCosts')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="otherBenefits">Other Benefits ($/hr)</Label>
        <Input 
          id="otherBenefits" 
          type="number" 
          step="0.01" 
          min="0" 
          value={inputs.otherBenefits || ''}
          onChange={handleInputChange('otherBenefits')}
        />
      </div>

      <Button type="submit" className="w-full">Calculate Burden</Button>
    </form>
  );
};

export default LaborBurdenForm;
