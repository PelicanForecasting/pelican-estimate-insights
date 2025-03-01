
import React from 'react';
import { SideLengthsAngleData } from '../types';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface SideLengthsAngleInputProps {
  data: SideLengthsAngleData;
  onDataChange: (field: keyof SideLengthsAngleData, value: string) => void;
}

const SideLengthsAngleInput: React.FC<SideLengthsAngleInputProps> = ({ 
  data, 
  onDataChange 
}) => {
  return (
    <div className="space-y-6">
      <div className="text-xl font-medium text-pelican-navy">Enter Side Lengths and Angle</div>
      <p className="text-pelican-slate">
        Enter the length of each side and the angle between sides A and B.
        All lengths should be in feet and angle in degrees.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="sideA">Side A Length (ft)</Label>
          <Input
            id="sideA"
            type="number"
            value={data.sideA}
            onChange={(e) => onDataChange('sideA', e.target.value)}
            step="0.1"
            min="0.1"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="sideB">Side B Length (ft)</Label>
          <Input
            id="sideB"
            type="number"
            value={data.sideB}
            onChange={(e) => onDataChange('sideB', e.target.value)}
            step="0.1"
            min="0.1"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="sideC">Side C Length (ft)</Label>
          <Input
            id="sideC"
            type="number"
            value={data.sideC}
            onChange={(e) => onDataChange('sideC', e.target.value)}
            step="0.1"
            min="0.1"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="sideD">Side D Length (ft)</Label>
          <Input
            id="sideD"
            type="number"
            value={data.sideD}
            onChange={(e) => onDataChange('sideD', e.target.value)}
            step="0.1"
            min="0.1"
          />
        </div>
        
        <div className="space-y-2 col-span-2 md:col-span-1">
          <Label htmlFor="angle">Angle Between A and B (degrees)</Label>
          <Input
            id="angle"
            type="number"
            value={data.angle}
            onChange={(e) => onDataChange('angle', e.target.value)}
            step="1"
            min="1"
            max="179"
          />
        </div>
      </div>
      
      <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-4">
        <p className="text-amber-800 text-sm">
          <strong>Note:</strong> For accurate calculations, make sure the angle and sides form a valid quadrilateral. 
          The diagram will update to show the approximate shape based on your inputs.
        </p>
      </div>
    </div>
  );
};

export default SideLengthsAngleInput;
