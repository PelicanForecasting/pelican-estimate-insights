
import React, { useState } from 'react';
import AssessmentHeader from './AssessmentHeader';
import QuestionSections from './QuestionSections';
import { Question, SectionQuestions, CompanyProfile } from './types';
import InfoBanner from './InfoBanner';
import AdditionalContextAccordion from './AdditionalContextAccordion';
import ActionButtons from './ActionButtons';

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
  
  return (
    <>
      <InfoBanner 
        title="Comprehensive Assessment"
        description="This in-depth assessment builds on your initial evaluation to provide more detailed insights and tailored recommendations. Some questions have optional fields for additional context and confidence levels."
      />
    
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
