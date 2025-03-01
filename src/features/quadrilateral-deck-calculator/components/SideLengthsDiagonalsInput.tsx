
import React from 'react';
import { SideLengthsDiagonalsData } from '../types';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface SideLengthsDiagonalsInputProps {
  data: SideLengthsDiagonalsData;
  onDataChange: (field: keyof SideLengthsDiagonalsData, value: string) => void;
}

const SideLengthsDiagonalsInput: React.FC<SideLengthsDiagonalsInputProps> = ({ 
  data, 
  onDataChange 
}) => {
  return (
    <div className="space-y-6">
      <div className="text-xl font-medium text-pelican-navy">Enter Side Lengths and Diagonals</div>
      <p className="text-pelican-slate">
        Enter the length of each side and the diagonals connecting opposite corners.
        All measurements should be in feet.
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
        
        <div className="space-y-2">
          <Label htmlFor="diagonalAC">Diagonal AC (ft)</Label>
          <Input
            id="diagonalAC"
            type="number"
            value={data.diagonalAC}
            onChange={(e) => onDataChange('diagonalAC', e.target.value)}
            step="0.1"
            min="0.1"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="diagonalBD">Diagonal BD (ft)</Label>
          <Input
            id="diagonalBD"
            type="number"
            value={data.diagonalBD}
            onChange={(e) => onDataChange('diagonalBD', e.target.value)}
            step="0.1"
            min="0.1"
          />
        </div>
      </div>
      
      <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-4">
        <p className="text-amber-800 text-sm">
          <strong>Note:</strong> For accurate calculations, ensure that your measurements form a valid quadrilateral.
          The sides and diagonals must satisfy the triangle inequality theorem.
        </p>
      </div>
    </div>
  );
};

export default SideLengthsDiagonalsInput;
