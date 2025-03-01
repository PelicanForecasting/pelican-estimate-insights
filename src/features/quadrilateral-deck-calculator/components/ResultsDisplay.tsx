
import React from 'react';
import { DeckResults, MaterialCost } from '../types';
import { Separator } from "@/components/ui/separator";
import { calculateMaterialCosts } from '../utils/calculations';

interface ResultsDisplayProps {
  results: DeckResults;
  materials: MaterialCost;
  canvasWidth: number;
  canvasHeight: number;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ 
  results, 
  materials,
  canvasWidth,
  canvasHeight
}) => {
  if (!results) return null;
  
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 space-y-6">
        <div className="text-xl font-medium text-pelican-navy">Deck Measurements</div>
        
        <div className="bg-pelican-lightGray/10 p-4 rounded-lg space-y-2">
          <div className="flex justify-between">
            <span className="text-pelican-slate">Area:</span>
            <span className="font-medium">{results.area} sq ft</span>
          </div>
          <div className="flex justify-between">
            <span className="text-pelican-slate">Perimeter:</span>
            <span className="font-medium">{results.perimeter} ft</span>
          </div>
        </div>
        
        <div className="text-xl font-medium text-pelican-navy mt-4">Material Estimates</div>
        
        <div className="bg-pelican-lightGray/10 p-4 rounded-lg space-y-2">
          <div className="flex justify-between">
            <span className="text-pelican-slate">Decking Boards:</span>
            <span className="font-medium">{results.deckingBoards} pcs</span>
          </div>
          <div className="flex justify-between">
            <span className="text-pelican-slate">Joists:</span>
            <span className="font-medium">{results.joist} linear ft</span>
          </div>
          <div className="flex justify-between">
            <span className="text-pelican-slate">Fascia:</span>
            <span className="font-medium">{results.fascia} linear ft</span>
          </div>
          <div className="flex justify-between">
            <span className="text-pelican-slate">Screws:</span>
            <span className="font-medium">{results.screws} pcs</span>
          </div>
        </div>
        
        <div className="bg-pelican-navy/5 p-6 rounded-lg">
          <div className="text-xl font-medium text-pelican-navy mb-2">Estimated Total Cost</div>
          <div className="text-3xl font-bold text-pelican-navy">
            ${calculateMaterialCosts(results, materials).toFixed(2)}
          </div>
          <div className="text-sm text-pelican-slate mt-2">
            Based on the material costs entered
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 bg-pelican-lightGray/20 rounded-lg p-4">
        <div className="text-xl font-medium text-pelican-navy mb-4">Deck Visualization</div>
        <div className="bg-white border border-pelican-lightGray rounded-lg overflow-hidden">
          <canvas 
            id="resultCanvas" 
            width={canvasWidth} 
            height={canvasHeight}
            className="mx-auto"
          ></canvas>
        </div>
        <div className="mt-6 space-y-4">
          <div className="text-lg font-medium text-pelican-navy">Material Breakdown</div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Decking (${materials.deckingCostPerSqFt.toFixed(2)}/sq ft):</span>
              <span>${(results.area * materials.deckingCostPerSqFt).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Joists (${materials.joistCostPerFt.toFixed(2)}/ft):</span>
              <span>${(results.joist * materials.joistCostPerFt).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Fascia (${materials.fasciaCostPerFt.toFixed(2)}/ft):</span>
              <span>${(results.fascia * materials.fasciaCostPerFt).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Screws (${materials.screwsCostPer100.toFixed(2)}/100):</span>
              <span>${((results.screws / 100) * materials.screwsCostPer100).toFixed(2)}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-medium">
              <span>Total Cost:</span>
              <span>${calculateMaterialCosts(results, materials).toFixed(2)}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-pelican-slate mt-6">
          This calculator provides estimates for planning purposes. Actual material needs may vary based on specific design requirements and waste factors.
        </p>
      </div>
    </div>
  );
};

export default ResultsDisplay;
