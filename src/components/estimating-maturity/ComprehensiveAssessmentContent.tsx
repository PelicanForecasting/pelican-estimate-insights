
import React, { useState } from 'react';
import AssessmentHeader from './AssessmentHeader';
import QuestionSections from './QuestionSections';
import { Question, SectionQuestions, CompanyProfile } from './types';
import InfoBanner from './InfoBanner';
import AdditionalContextAccordion from './AdditionalContextAccordion';
import ActionButtons from './ActionButtons';
import { Progress } from "@/components/ui/progress";

interface ComprehensiveAssessmentContentProps {
  questions: Question[];
  sectionQuestions: SectionQuestions;
  score: number;
  allQuestionsAnswered: boolean;
  onOptionChange: (questionId: string, value: string, points: number) => void;
  onSubmit: () => void;
  companyProfile?: CompanyProfile;
  onSaveForLater: (email: string) => void;
  onAdditionalInfo?: (questionId: string, info: string) => void;
  onConfidenceLevel?: (questionId: string, level: number) => void;
}

const ComprehensiveAssessmentContent = ({ 
  questions, 
  sectionQuestions, 
  score, 
  allQuestionsAnswered, 
  onOptionChange, 
  onSubmit,
  companyProfile,
  onSaveForLater,
  onAdditionalInfo,
  onConfidenceLevel
}: ComprehensiveAssessmentContentProps) => {
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState<Record<string, string>>({});
  const [confidenceLevels, setConfidenceLevels] = useState<Record<string, number>>({});
  
  // Calculate visible questions based on conditional logic
  const visibleQuestions = questions.filter(question => {
    if (!question.conditionalDisplay) return true;
    
    const { dependsOn, showIfValue } = question.conditionalDisplay;
    const dependentQuestion = questions.find(q => q.id === dependsOn);
    
    if (!dependentQuestion || !dependentQuestion.selectedOption) return false;
    
    return showIfValue.includes(dependentQuestion.selectedOption);
  });
  
  // Calculate completion percentage for progress bar
  const totalQuestions = visibleQuestions.length;
  const answeredQuestions = visibleQuestions.filter(q => q.selectedOption !== undefined).length;
  const completionPercentage = totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0;
  
  return (
    <>
      <InfoBanner 
        title="Comprehensive Assessment"
        description="This in-depth assessment builds on your initial evaluation to provide more detailed insights and tailored recommendations. Some questions have optional fields for additional context and confidence levels."
      />
    
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-pelican-slate font-medium">Assessment Progress</span>
          <span className="text-sm text-pelican-slate">{answeredQuestions}/{totalQuestions} questions answered</span>
        </div>
        <Progress value={completionPercentage} className="h-2" />
      </div>
    
      <AssessmentHeader 
        questions={questions} 
        score={score} 
        assessmentType="comprehensive"
        companyName={companyProfile?.companyName}
      />
      
      <QuestionSections 
        sectionQuestions={sectionQuestions} 
        onOptionChange={onOptionChange} 
        assessmentType="comprehensive"
        onAdditionalInfo={onAdditionalInfo}
        onConfidenceLevel={onConfidenceLevel}
        allQuestions={questions}
      />
      
      <AdditionalContextAccordion 
        sectionQuestions={sectionQuestions}
        additionalInfo={additionalInfo}
        confidenceLevels={confidenceLevels}
        onAdditionalInfoChange={(questionId, info) => {
          setAdditionalInfo(prev => ({
            ...prev,
            [questionId]: info
          }));
          
          if (onAdditionalInfo) {
            onAdditionalInfo(questionId, info);
          }
        }}
        onConfidenceLevelChange={(questionId, level) => {
          setConfidenceLevels(prev => ({
            ...prev,
            [questionId]: level
          }));
          
          if (onConfidenceLevel) {
            onConfidenceLevel(questionId, level);
          }
        }}
      />
      
      <ActionButtons 
        allQuestionsAnswered={allQuestionsAnswered}
        onSubmit={onSubmit}
        onSaveForLater={onSaveForLater}
      />
    </>
  );
};

export default ComprehensiveAssessmentContent;
