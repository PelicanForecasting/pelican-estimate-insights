
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Question } from './types';

interface AssessmentHeaderProps {
  questions: Question[];
  score: number;
}

const AssessmentHeader = ({ questions, score }: AssessmentHeaderProps) => {
  return (
    <Card className="border-pelican-teal/20 shadow-sm bg-white">
      <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-md">
        <CardTitle className="text-[24px] font-heading font-medium text-white">Estimating Maturity Self-Assessment</CardTitle>
        <CardDescription className="text-white/90">
          Answer all questions to receive your personalized assessment
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-pelican-slate mb-6">
          This interactive questionnaire helps you evaluate your current estimating capabilities 
          and identify areas for improvement. Select the option that best describes your organization's 
          current practice for each question.
        </p>
        
        <div className="mb-2 flex justify-between text-sm text-pelican-slate">
          <div>Your progress: {questions.filter(q => q.selectedOption).length} of 12 questions answered</div>
          <div>Current score: {score} points</div>
        </div>
        
        <div className="w-full bg-pelican-lightGray rounded-full h-2 mb-8">
          <div 
            className="h-2 rounded-full bg-gradient-to-r from-pelican-navy to-pelican-teal"
            style={{ width: `${(questions.filter(q => q.selectedOption).length / questions.length) * 100}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssessmentHeader;
