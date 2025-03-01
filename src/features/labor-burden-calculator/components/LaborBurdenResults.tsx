
import React from 'react';
import { CardFooter } from "@/components/ui/card";
import { LaborBurdenInputs, LaborBurdenOutputs } from '../types';

interface LaborBurdenResultsProps {
  inputs: LaborBurdenInputs;
  outputs: LaborBurdenOutputs;
}

const LaborBurdenResults = ({ inputs, outputs }: LaborBurdenResultsProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-pelican-lightGray/50 p-4 rounded-lg">
        <h3 className="font-medium text-lg font-heading text-pelican-navy mb-1">Base Hourly Rate</h3>
        <p className="text-2xl font-bold font-display">${inputs.baseHourlyRate.toFixed(2)}</p>
      </div>
      
      <div className="bg-pelican-lightGray/50 p-4 rounded-lg">
        <h3 className="font-medium text-lg font-heading text-pelican-navy mb-1">Burden Amount</h3>
        <p className="text-2xl font-bold font-display">${(outputs.burdenedRate - inputs.baseHourlyRate).toFixed(2)}</p>
        <p className="text-sm text-pelican-slate mt-1">Additional cost per hour</p>
      </div>

      <div className="bg-pelican-lightGray/50 p-4 rounded-lg">
        <h3 className="font-medium text-lg font-heading text-pelican-navy mb-1">Burden Percentage</h3>
        <p className="text-2xl font-bold font-display">{outputs.burdenPercentage.toFixed(1)}%</p>
        <p className="text-sm text-pelican-slate mt-1">Percentage increase over base rate</p>
      </div>

      <div className="pt-6 border-t-2 border-pelican-teal/20">
        <h3 className="font-medium text-lg font-heading text-pelican-navy mb-2">Fully Burdened Hourly Rate</h3>
        <div className="flex items-end gap-2">
          <p className="text-4xl font-bold text-gradient bg-gradient-to-r from-pelican-navy to-pelican-teal font-display">
            ${outputs.burdenedRate.toFixed(2)}
          </p>
          <p className="text-sm text-pelican-slate mb-1">per hour</p>
        </div>
      </div>

      <CardFooter className="px-0 pt-4 pb-0 justify-start">
        <div className="flex items-center gap-2 text-pelican-slate">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pelican-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm">Use this rate for accurate labor cost estimating in your bids.</p>
        </div>
      </CardFooter>
    </div>
  );
};

export default LaborBurdenResults;
