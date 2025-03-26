
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { AssessmentCategory } from '../types';

interface CategoryRadarChartProps {
  categoryScores: Record<AssessmentCategory, { score: number, maxPossible: number }>;
}

const CategoryRadarChart: React.FC<CategoryRadarChartProps> = ({ categoryScores }) => {
  const radarData = Object.entries(categoryScores).map(([category, { score, maxPossible }]) => {
    const categoryName = category === 'processMethodology' ? 'Process' :
                        category === 'dataTechnology' ? 'Data' :
                        category === 'analysisDecision' ? 'Analysis' :
                        category === 'teamKnowledge' ? 'Knowledge' :
                        category === 'technologyAdoption' ? 'Technology' : '';
                        
    return {
      subject: categoryName,
      A: (score / maxPossible) * 100, // Convert to percentage
      fullMark: 100
    };
  });

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded-md shadow-sm">
          <p className="font-medium">{`${payload[0].payload.subject}: ${payload[0].value.toFixed(0)}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={80} data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar
            name="Your Score"
            dataKey="A"
            stroke="#2EC4B6"
            fill="#2EC4B6"
            fillOpacity={0.6}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryRadarChart;
