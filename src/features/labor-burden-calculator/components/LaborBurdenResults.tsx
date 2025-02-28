
import React from 'react';
import { CardFooter } from "@/components/ui/card";
import { LaborBurdenInputs, LaborBurdenOutputs } from '../types';

interface LaborBurdenResultsProps {
  inputs: LaborBurdenInputs;
  outputs: LaborBurdenOutputs;
}

const LaborBurdenResults = ({ inputs, outputs }: LaborBurdenResultsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-medium text-lg">Base Hourly Rate</h3>
        <p className="text-2xl font-bold">${inputs.baseHourlyRate.toFixed(2)}</p>
      </div>
      
      <div>
        <h3 className="font-medium text-lg">Burden Amount</h3>
        <p className="text-2xl font-bold">${(outputs.burdenedRate - inputs.baseHourlyRate).toFixed(2)}</p>
      </div>

      <div>
        <h3 className="font-medium text-lg">Burden Percentage</h3>
        <p className="text-2xl font-bold">{outputs.burdenPercentage.toFixed(1)}%</p>
      </div>

      <div className="pt-4 border-t">
        <h3 className="font-medium text-lg">Fully Burdened Hourly Rate</h3>
        <p className="text-3xl font-bold text-blue-600">${outputs.burdenedRate.toFixed(2)}</p>
      </div>

      <CardFooter className="px-0">
        <p className="text-sm text-gray-500">Use this rate for accurate labor cost estimating in your bids.</p>
      </CardFooter>
    </div>
  );
};

export default LaborBurdenResults;
