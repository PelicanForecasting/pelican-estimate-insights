
import React from 'react';

interface ChartTypeSelectorProps {
  selectedChartType: 'radar' | 'bar' | 'line';
  setSelectedChartType: (type: 'radar' | 'bar' | 'line') => void;
}

const ChartTypeSelector: React.FC<ChartTypeSelectorProps> = ({ 
  selectedChartType, 
  setSelectedChartType 
}) => {
  return (
    <div className="flex items-center space-x-2 bg-gray-50 p-1 rounded-md border border-gray-100">
      <button 
        onClick={() => setSelectedChartType('radar')} 
        className={`px-3 py-1 rounded text-sm ${selectedChartType === 'radar' ? 'bg-white shadow-sm border border-gray-200' : 'text-gray-600'}`}
      >
        Radar
      </button>
      <button 
        onClick={() => setSelectedChartType('bar')} 
        className={`px-3 py-1 rounded text-sm ${selectedChartType === 'bar' ? 'bg-white shadow-sm border border-gray-200' : 'text-gray-600'}`}
      >
        Bar
      </button>
      <button 
        onClick={() => setSelectedChartType('line')} 
        className={`px-3 py-1 rounded text-sm ${selectedChartType === 'line' ? 'bg-white shadow-sm border border-gray-200' : 'text-gray-600'}`}
      >
        Line
      </button>
    </div>
  );
};

export default ChartTypeSelector;
