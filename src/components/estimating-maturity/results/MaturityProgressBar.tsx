
import React from 'react';

interface MaturityProgressBarProps {
  score: number;
  isComprehensiveCompleted?: boolean;
}

const MaturityProgressBar: React.FC<MaturityProgressBarProps> = ({ 
  score, 
  isComprehensiveCompleted = false 
}) => {
  return (
    <div className="mb-6">
      <div className="w-full bg-pelican-lightGray rounded-full h-4 mb-4">
        <div 
          className="h-4 rounded-full bg-gradient-to-r from-pelican-navy to-pelican-teal"
          style={{ width: `${(score / (isComprehensiveCompleted ? 80 : 48)) * 100}%` }}
        ></div>
      </div>
      
      <div className="grid grid-cols-4 text-xs text-center text-pelican-slate">
        <div>Foundational<br/>{isComprehensiveCompleted ? '(20-35)' : '(12-19)'}</div>
        <div>Developing<br/>{isComprehensiveCompleted ? '(36-50)' : '(20-29)'}</div>
        <div>Advanced<br/>{isComprehensiveCompleted ? '(51-65)' : '(30-39)'}</div>
        <div>Optimized<br/>{isComprehensiveCompleted ? '(66-80)' : '(40-48)'}</div>
      </div>
    </div>
  );
};

export default MaturityProgressBar;
