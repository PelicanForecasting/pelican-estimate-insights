
import React from 'react';
import { CalculationMethod } from '../types';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface MethodSelectorProps {
  method: CalculationMethod;
  onChange: (method: CalculationMethod) => void;
}

const MethodSelector: React.FC<MethodSelectorProps> = ({ method, onChange }) => {
  return (
    <div className="space-y-2 mb-6">
      <Label htmlFor="calculationMethod">Calculation Method</Label>
      <Select 
        value={method} 
        onValueChange={(value) => onChange(value as CalculationMethod)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select calculation method" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="coordinates">Coordinates of corners</SelectItem>
          <SelectItem value="sideLengthsDiagonals">Side lengths + diagonals</SelectItem>
          <SelectItem value="sideLengthsAngle">Side lengths + one angle</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default MethodSelector;
