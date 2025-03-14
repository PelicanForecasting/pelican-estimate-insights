
import React, { useEffect, useState } from 'react';
import { CardFooter } from "@/components/ui/card";
import { LaborBurdenInputs, LaborBurdenOutputs } from '../types';
import InfoSection from './InfoSection';

interface LaborBurdenResultsProps {
  inputs: LaborBurdenInputs;
  outputs: LaborBurdenOutputs;
}

const LaborBurdenResults = ({ inputs, outputs }: LaborBurdenResultsProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({
        x: clientX / window.innerWidth,
        y: clientY / window.innerHeight,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate gradient angle based on mouse position
  const gradientAngle = Math.round(mousePosition.x * 360);
  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}deg, #1A3A5A 0%, #38A3B8 100%)`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-pelican-lightGray/50 p-4 rounded-lg">
          <h3 className="font-medium text-lg font-heading text-white mb-1">Base Hourly Rate</h3>
          <p className="text-2xl font-bold font-display">${inputs.baseHourlyRate.toFixed(2)}</p>
        </div>
        
        <div className="bg-pelican-lightGray/50 p-4 rounded-lg">
          <h3 className="font-medium text-lg font-heading text-white mb-1">Burden Amount</h3>
          <p className="text-2xl font-bold font-display">${(outputs.burdenedRate - inputs.baseHourlyRate).toFixed(2)}</p>
          <p className="text-sm text-pelican-slate mt-1">Additional cost per hour</p>
        </div>
      </div>

      <div className="bg-pelican-lightGray/50 p-4 rounded-lg">
        <h3 className="font-medium text-lg font-heading text-white mb-1">Burden Percentage</h3>
        <p className="text-2xl font-bold font-display">{outputs.burdenPercentage.toFixed(1)}%</p>
        <p className="text-sm text-pelican-slate mt-1">Percentage increase over base rate</p>
      </div>

      <div className="pt-5 border-t-2 border-pelican-teal/20">
        <h3 className="font-medium text-lg font-heading text-white mb-2">Fully Burdened Hourly Rate</h3>
        <div className="flex items-end gap-2">
          <p className="text-4xl font-bold font-display" style={gradientStyle}>
            ${outputs.burdenedRate.toFixed(2)}
          </p>
          <p className="text-sm text-pelican-slate mb-1">per hour</p>
        </div>
      </div>

      <CardFooter className="px-0 py-3 justify-start">
        <div className="flex items-center gap-2 text-pelican-slate bg-pelican-cream/50 p-3 rounded-lg w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pelican-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm">Use this rate for accurate labor cost estimating in your bids.</p>
        </div>
      </CardFooter>
      
      <InfoSection />
    </div>
  );
};

export default LaborBurdenResults;
