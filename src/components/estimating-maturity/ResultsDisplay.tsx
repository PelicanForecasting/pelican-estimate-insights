
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from 'lucide-react';
import { AssessmentCategory, AssessmentRecommendation, CompanyProfile } from './types';

// Import the refactored components
import MaturityProgressBar from './results/MaturityProgressBar';
import MaturityLevelCard from './results/MaturityLevelCard';
import CategoryRadarChart from './results/CategoryRadarChart';
import BenchmarkChart from './results/BenchmarkChart';
import ChartTypeSelector from './results/ChartTypeSelector';
import EmailReportForm from './results/EmailReportForm';
import AssessmentActionCard from './results/AssessmentActionCard';
import RecommendationsSection from './results/RecommendationsSection';

interface ResultsDisplayProps {
  score: number;
  onReset: () => void;
  maturityLevel?: 'foundational' | 'developing' | 'advanced' | 'optimized';
  companyProfile?: CompanyProfile;
  categoryScores: Record<AssessmentCategory, { score: number, maxPossible: number }>;
  recommendations: AssessmentRecommendation[];
  onContinueToComprehensive: () => void;
  isComprehensiveCompleted?: boolean;
}

const ResultsDisplay = ({ 
  score, 
  onReset, 
  maturityLevel,
  companyProfile,
  categoryScores,
  recommendations,
  onContinueToComprehensive,
  isComprehensiveCompleted = false
}: ResultsDisplayProps) => {
  const [selectedChartType, setSelectedChartType] = useState<'radar' | 'bar' | 'line'>('radar');
  
  const handleEmailSubmit = (email: string) => {
    // In a real implementation, this would send the email to a server
    console.log(`Sending report to ${email}`);
  };

  return (
    <Card className="mb-8 border-pelican-teal/20 shadow-sm bg-white">
      <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-md">
        <CardTitle className="text-[20px] font-heading font-medium">
          {isComprehensiveCompleted ? 'Comprehensive Assessment Results' : 'Assessment Results'}
          {companyProfile?.companyName ? ` for ${companyProfile.companyName}` : ''}
        </CardTitle>
        <CardDescription className="text-white/90">
          Your score: {score} points - {maturityLevel && maturityLevel.charAt(0).toUpperCase() + maturityLevel.slice(1)} Stage
          {isComprehensiveCompleted && ' (Comprehensive Assessment)'}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Maturity Progress Bar */}
        <MaturityProgressBar score={score} isComprehensiveCompleted={isComprehensiveCompleted} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Maturity Level Description */}
          <MaturityLevelCard maturityLevel={maturityLevel} />
          
          {/* Category Performance Radar Chart */}
          <div className="p-4 bg-white rounded-md border border-gray-100">
            <h3 className="text-[18px] font-heading font-medium text-pelican-navy mb-3">Category Performance</h3>
            <CategoryRadarChart categoryScores={categoryScores} />
          </div>
        </div>
        
        {/* Benchmark Comparison Charts */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[20px] font-heading font-medium text-pelican-navy">Industry Benchmark Comparison</h3>
            <ChartTypeSelector selectedChartType={selectedChartType} setSelectedChartType={setSelectedChartType} />
          </div>
          <div className="p-4 bg-white rounded-md border border-gray-100">
            <BenchmarkChart categoryScores={categoryScores} chartType={selectedChartType} />
            <p className="text-sm text-center text-pelican-slate mt-4">
              Comparison against average scores from similar companies in your industry
            </p>
          </div>
        </div>
        
        {/* Recommendations Section */}
        <RecommendationsSection recommendations={recommendations} />
        
        {/* Email Report Form */}
        <EmailReportForm onSubmit={handleEmailSubmit} />
        
        {/* Assessment Action Card */}
        <AssessmentActionCard 
          isComprehensiveCompleted={isComprehensiveCompleted}
          onContinueToComprehensive={onContinueToComprehensive}
        />
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="secondary-outline" onClick={onReset} className="border-secondary text-secondary hover:bg-secondary/5">
            Retake Assessment
          </Button>
          <Button variant="primary">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Schedule Consultation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;
