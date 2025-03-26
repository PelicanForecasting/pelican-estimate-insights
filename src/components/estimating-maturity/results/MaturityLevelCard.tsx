
import React from 'react';

interface MaturityLevelCardProps {
  maturityLevel?: 'foundational' | 'developing' | 'advanced' | 'optimized';
}

const MaturityLevelCard: React.FC<MaturityLevelCardProps> = ({ maturityLevel }) => {
  let description = '';
  let nextSteps = '';
  
  if (maturityLevel === 'foundational') {
    description = 'Your estimating process has significant opportunity for improvement through systematization and data utilization. Focus on documenting processes and centralizing historical information.';
    nextSteps = 'Start by documenting your current processes and creating a central repository for historical project data.';
  } else if (maturityLevel === 'developing') {
    description = 'You have established basics but could benefit from improved analytics and integration. Focus on connecting your existing data and developing more sophisticated analysis.';
    nextSteps = 'Focus on improving data connections between systems and implementing basic statistical analysis.';
  } else if (maturityLevel === 'advanced') {
    description = 'Your estimating capabilities are strong but could be enhanced with predictive analytics and deeper integration. Focus on statistical analysis and strategic intelligence.';
    nextSteps = 'Implement more advanced statistical methods and explore predictive analytics capabilities.';
  } else if (maturityLevel === 'optimized') {
    description = 'Your estimating function is highly mature. Focus on continuous refinement and cutting-edge analytics to maintain your competitive advantage.';
    nextSteps = 'Explore advanced analytics, machine learning applications, and continuous optimization.';
  }

  return (
    <div className="p-4 bg-pelican-cream/30 rounded-md border border-pelican-cream">
      <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-2">
        {maturityLevel && maturityLevel.charAt(0).toUpperCase() + maturityLevel.slice(1)} Stage
      </h3>
      <p className="text-pelican-slate">{description}</p>
      <div className="mt-3 text-sm text-pelican-slate font-medium">
        Recommended next steps:
        <p className="font-normal mt-1">{nextSteps}</p>
      </div>
    </div>
  );
};

export default MaturityLevelCard;
