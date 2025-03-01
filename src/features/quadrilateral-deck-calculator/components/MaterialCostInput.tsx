
import React from 'react';
import { MaterialCost } from '../types';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface MaterialCostInputProps {
  materials: MaterialCost;
  onMaterialChange: (key: keyof MaterialCost, value: string) => void;
}

const MaterialCostInput: React.FC<MaterialCostInputProps> = ({
  materials,
  onMaterialChange
}) => {
  return (
    <div className="w-full space-y-6">
      <div className="text-xl font-medium text-pelican-navy">Enter Material Costs</div>
      <p className="text-pelican-slate">
        Enter the cost of each material to calculate the total project cost.
        All costs should be in USD.
      </p>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="deckingCost">Decking Cost (per sq ft)</Label>
          <Input
            id="deckingCost"
            type="number"
            value={materials.deckingCostPerSqFt}
            onChange={(e) => onMaterialChange('deckingCostPerSqFt', e.target.value)}
            step="0.01"
            min="0"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="joistCost">Joist Cost (per linear ft)</Label>
          <Input
            id="joistCost"
            type="number"
            value={materials.joistCostPerFt}
            onChange={(e) => onMaterialChange('joistCostPerFt', e.target.value)}
            step="0.01"
            min="0"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="fasciaCost">Fascia Cost (per linear ft)</Label>
          <Input
            id="fasciaCost"
            type="number"
            value={materials.fasciaCostPerFt}
            onChange={(e) => onMaterialChange('fasciaCostPerFt', e.target.value)}
            step="0.01"
            min="0"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="screwsCost">Screws Cost (per 100)</Label>
          <Input
            id="screwsCost"
            type="number"
            value={materials.screwsCostPer100}
            onChange={(e) => onMaterialChange('screwsCostPer100', e.target.value)}
            step="0.01"
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default MaterialCostInput;
