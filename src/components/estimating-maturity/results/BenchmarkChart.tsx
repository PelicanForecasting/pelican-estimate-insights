
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend, LineChart, Line, LabelList } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AssessmentCategory } from '../types';

interface BenchmarkChartProps {
  categoryScores: Record<AssessmentCategory, { score: number, maxPossible: number }>;
  chartType: 'radar' | 'bar' | 'line';
}

const BenchmarkChart: React.FC<BenchmarkChartProps> = ({ categoryScores, chartType }) => {
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
  
  const benchmarkData = [
    { category: 'Process', yourScore: (categoryScores.processMethodology.score / categoryScores.processMethodology.maxPossible) * 100, industryAvg: 65 },
    { category: 'Data', yourScore: (categoryScores.dataTechnology.score / categoryScores.dataTechnology.maxPossible) * 100, industryAvg: 58 },
    { category: 'Analysis', yourScore: (categoryScores.analysisDecision.score / categoryScores.analysisDecision.maxPossible) * 100, industryAvg: 62 },
    { category: 'Knowledge', yourScore: (categoryScores.teamKnowledge.score / categoryScores.teamKnowledge.maxPossible) * 100, industryAvg: 70 },
    { category: 'Technology', yourScore: (categoryScores.technologyAdoption.score / categoryScores.technologyAdoption.maxPossible) * 100, industryAvg: 55 }
  ];

  const chartConfig = {
    yourScore: {
      label: "Your Score",
      color: "#2EC4B6"
    },
    industryAvg: {
      label: "Industry Average",
      color: "#0F3460"
    }
  };

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

  if (chartType === 'radar') {
    return (
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius={90} data={radarData}>
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
  }
  
  if (chartType === 'bar') {
    return (
      <div className="h-[300px]">
        <ChartContainer
          config={chartConfig}
          className="h-full"
        >
          <BarChart
            data={benchmarkData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis domain={[0, 100]} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="yourScore" name="Your Score" fill="#2EC4B6" radius={[4, 4, 0, 0]}>
              <LabelList dataKey="yourScore" position="top" formatter={(value: number) => `${value.toFixed(0)}%`} />
            </Bar>
            <Bar dataKey="industryAvg" name="Industry Average" fill="#0F3460" radius={[4, 4, 0, 0]} fillOpacity={0.7}>
              <LabelList dataKey="industryAvg" position="top" formatter={(value: number) => `${value.toFixed(0)}%`} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
    );
  }
  
  return (
    <div className="h-[300px]">
      <ChartContainer
        config={chartConfig}
        className="h-full"
      >
        <LineChart
          data={benchmarkData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis domain={[0, 100]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="yourScore" 
            name="Your Score" 
            stroke="#2EC4B6" 
            activeDot={{ r: 8 }} 
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="industryAvg" 
            name="Industry Average" 
            stroke="#0F3460" 
            strokeDasharray="5 5" 
            strokeWidth={2}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default BenchmarkChart;
