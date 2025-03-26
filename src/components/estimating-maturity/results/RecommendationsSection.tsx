
import React from 'react';
import { AssessmentRecommendation } from '../types';

interface RecommendationsSectionProps {
  recommendations: AssessmentRecommendation[];
}

const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({ recommendations }) => {
  const lowEffortRecommendations = recommendations.filter(rec => rec.effort === 'low');
  const mediumEffortRecommendations = recommendations.filter(rec => rec.effort === 'medium');
  const highEffortRecommendations = recommendations.filter(rec => rec.effort === 'high');
  
  const getImpactClass = (impact: 'low' | 'medium' | 'high') => {
    if (impact === 'high') return 'bg-green-50 border-green-200 text-green-800';
    if (impact === 'medium') return 'bg-yellow-50 border-yellow-200 text-yellow-800';
    return 'bg-gray-50 border-gray-200 text-gray-800';
  };
  
  const getEffortClass = (effort: 'low' | 'medium' | 'high') => {
    if (effort === 'low') return 'bg-green-50 border-green-200 text-green-800';
    if (effort === 'medium') return 'bg-yellow-50 border-yellow-200 text-yellow-800';
    return 'bg-red-50 border-red-200 text-red-800';
  };

  return (
    <div className="mb-8">
      <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-4">Prioritized Recommendations</h3>
      
      {lowEffortRecommendations.length > 0 && (
        <div className="mb-6">
          <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-2">Quick Wins (High Impact, Low Effort)</h4>
          <div className="space-y-3">
            {lowEffortRecommendations.map(rec => (
              <div key={rec.id} className="p-3 border rounded-md bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-[14px] font-medium text-pelican-navy">{rec.title}</h5>
                  <div className="flex gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full border ${getImpactClass(rec.impact)}`}>
                      {rec.impact.charAt(0).toUpperCase() + rec.impact.slice(1)} Impact
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full border ${getEffortClass(rec.effort)}`}>
                      {rec.effort.charAt(0).toUpperCase() + rec.effort.slice(1)} Effort
                    </span>
                  </div>
                </div>
                <p className="text-sm text-pelican-slate">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {mediumEffortRecommendations.length > 0 && (
        <div className="mb-6">
          <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-2">Strategic Initiatives (Medium Effort)</h4>
          <div className="space-y-3">
            {mediumEffortRecommendations.map(rec => (
              <div key={rec.id} className="p-3 border rounded-md bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-[14px] font-medium text-pelican-navy">{rec.title}</h5>
                  <div className="flex gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full border ${getImpactClass(rec.impact)}`}>
                      {rec.impact.charAt(0).toUpperCase() + rec.impact.slice(1)} Impact
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full border ${getEffortClass(rec.effort)}`}>
                      {rec.effort.charAt(0).toUpperCase() + rec.effort.slice(1)} Effort
                    </span>
                  </div>
                </div>
                <p className="text-sm text-pelican-slate">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {highEffortRecommendations.length > 0 && (
        <div>
          <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-2">Transformational Changes (High Effort)</h4>
          <div className="space-y-3">
            {highEffortRecommendations.map(rec => (
              <div key={rec.id} className="p-3 border rounded-md bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-[14px] font-medium text-pelican-navy">{rec.title}</h5>
                  <div className="flex gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full border ${getImpactClass(rec.impact)}`}>
                      {rec.impact.charAt(0).toUpperCase() + rec.impact.slice(1)} Impact
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full border ${getEffortClass(rec.effort)}`}>
                      {rec.effort.charAt(0).toUpperCase() + rec.effort.slice(1)} Effort
                    </span>
                  </div>
                </div>
                <p className="text-sm text-pelican-slate">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationsSection;
