
import React from 'react';
import { Coordinates } from '../types';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface CoordinatesInputProps {
  coordinates: Coordinates[];
  onCoordinateChange: (index: number, axis: 'x' | 'y', value: string) => void;
}

const CoordinatesInput: React.FC<CoordinatesInputProps> = ({ 
  coordinates, 
  onCoordinateChange 
}) => {
  return (
    <div className="space-y-6">
      <div className="text-xl font-medium text-pelican-navy">Enter Deck Coordinates</div>
      <p className="text-pelican-slate">
        Enter the four corner points of your deck in a clockwise or counter-clockwise order.
        All measurements should be in feet.
      </p>
      
      <div className="grid grid-cols-2 gap-4">
        {coordinates.map((coord, index) => (
          <div key={index} className="space-y-2">
            <Label>Point {index + 1}</Label>
            <div className="flex gap-2">
              <div className="space-y-1 flex-1">
                <Label htmlFor={`x-${index}`} className="text-xs">X</Label>
                <Input
                  id={`x-${index}`}
                  type="number"
                  value={coord.x}
                  onChange={(e) => onCoordinateChange(index, 'x', e.target.value)}
                  step="0.1"
                />
              </div>
              <div className="space-y-1 flex-1">
                <Label htmlFor={`y-${index}`} className="text-xs">Y</Label>
                <Input
                  id={`y-${index}`}
                  type="number"
                  value={coord.y}
                  onChange={(e) => onCoordinateChange(index, 'y', e.target.value)}
                  step="0.1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoordinatesInput;
