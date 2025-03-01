
import React from 'react';

const CalculationGuide: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 bg-pelican-lightGray/20 rounded-lg p-4">
      <div className="text-xl font-medium text-pelican-navy mb-4">Calculation Guide</div>
      <div className="space-y-4 text-pelican-slate">
        <p>
          <strong>Decking Boards:</strong> Calculated based on standard 5.5" wide deck boards and the total square footage.
        </p>
        <p>
          <strong>Joists:</strong> Calculated based on 16" on center spacing with a 15% waste factor.
        </p>
        <p>
          <strong>Fascia:</strong> Calculated based on the perimeter of the deck with a 10% waste factor.
        </p>
        <p>
          <strong>Screws:</strong> Calculated at approximately 4 screws per square foot.
        </p>
        <p className="italic text-sm mt-4">
          Note: These calculations provide estimates only and may vary based on specific design requirements.
          Always consult with a professional before purchasing materials.
        </p>
      </div>
    </div>
  );
};

export default CalculationGuide;
