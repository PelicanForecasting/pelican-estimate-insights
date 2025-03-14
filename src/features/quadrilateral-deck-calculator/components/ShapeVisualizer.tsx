
import React, { useEffect } from 'react';
import { Coordinates, CanvasParams } from '../types';

interface ShapeVisualizerProps {
  coordinates: Coordinates[];
  canvasParams: CanvasParams;
  canvasId: string;
}

const ShapeVisualizer: React.FC<ShapeVisualizerProps> = ({ 
  coordinates, 
  canvasParams,
  canvasId 
}) => {
  useEffect(() => {
    renderQuadrilateral();
  }, [coordinates, canvasParams]);

  // Render the quadrilateral on canvas
  const renderQuadrilateral = () => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the quadrilateral
    if (coordinates.length === 4) {
      ctx.beginPath();
      
      // Move to the first point
      const firstX = coordinates[0].x * canvasParams.scale + canvasParams.offsetX;
      const firstY = coordinates[0].y * canvasParams.scale + canvasParams.offsetY;
      ctx.moveTo(firstX, firstY);
      
      // Draw lines to each subsequent point
      for (let i = 1; i < coordinates.length; i++) {
        const canvasX = coordinates[i].x * canvasParams.scale + canvasParams.offsetX;
        const canvasY = coordinates[i].y * canvasParams.scale + canvasParams.offsetY;
        ctx.lineTo(canvasX, canvasY);
      }
      
      // Close the path back to the first point
      ctx.lineTo(firstX, firstY);
      
      // Style and stroke the shape
      ctx.strokeStyle = '#26809D'; // pelican-teal
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Fill with semi-transparent color
      ctx.fillStyle = 'rgba(38, 128, 157, 0.2)'; // pelican-teal with transparency
      ctx.fill();
      
      // Draw and label points
      coordinates.forEach((coord, index) => {
        const canvasX = coord.x * canvasParams.scale + canvasParams.offsetX;
        const canvasY = coord.y * canvasParams.scale + canvasParams.offsetY;
        
        // Draw point
        ctx.fillStyle = '#2D4654'; // pelican-navy
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Label point
        ctx.fillStyle = '#2D4654';
        ctx.font = '12px sans-serif';
        ctx.fillText(`P${index+1} (${coord.x.toFixed(1)}, ${coord.y.toFixed(1)})`, canvasX + 10, canvasY - 10);
      });
    }
  };

  return (
    <div className="w-full bg-pelican-lightGray/20 rounded-lg p-4">
      <div className="text-xl font-medium text-pelican-navy mb-4">Deck Preview</div>
      <div className="bg-white border border-pelican-lightGray rounded-lg overflow-hidden">
        <canvas 
          id={canvasId} 
          width={canvasParams.canvasWidth} 
          height={canvasParams.canvasHeight}
          className="mx-auto"
        ></canvas>
      </div>
      <p className="text-sm text-pelican-slate mt-4">
        This preview shows the shape of your deck based on the coordinates entered.
        Points are labeled P1-P4 with their coordinates.
      </p>
    </div>
  );
};

export default ShapeVisualizer;
