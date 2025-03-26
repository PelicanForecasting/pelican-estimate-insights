
import React, { useEffect } from 'react';
import QuestionSection from './QuestionSection';
import { SectionQuestions } from './types';
import { trackSectionNavigation } from './utils/formSubmission';

interface QuestionSectionsProps {
  sectionQuestions: SectionQuestions;
  onOptionChange: (questionId: string, value: string, points: number) => void;
  assessmentType?: 'quick' | 'comprehensive';
  onAdditionalInfo?: (questionId: string, info: string) => void;
  onConfidenceLevel?: (questionId: string, level: number) => void;
}

const QuestionSections = ({ 
  sectionQuestions, 
  onOptionChange,
  assessmentType = 'quick',
  onAdditionalInfo,
  onConfidenceLevel
}: QuestionSectionsProps) => {
  
  useEffect(() => {
    // Track when all sections are loaded
    trackSectionNavigation('all-sections', 'view');
  }, []);

  const handleSectionInView = (sectionId: string) => {
    // Track when a specific section comes into view
    trackSectionNavigation(sectionId, 'view');
  };

  return (
    <div className="space-y-6 lg:space-y-[24px]">
      <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 1: Process & Methodology</h2>
      <QuestionSection 
        title="Process Structure and Documentation" 
        questions={sectionQuestions.processMethodology}
        onChange={onOptionChange}
        assessmentType={assessmentType}
        onAdditionalInfo={onAdditionalInfo}
        onConfidenceLevel={onConfidenceLevel}
        onSectionInView={() => handleSectionInView('processMethodology')}
      />
      
      <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 2: Data & Technology</h2>
      <QuestionSection 
        title="Tools and Systems" 
        questions={sectionQuestions.dataTechnology}
        onChange={onOptionChange}
        assessmentType={assessmentType}
        onAdditionalInfo={onAdditionalInfo}
        onConfidenceLevel={onConfidenceLevel}
        onSectionInView={() => handleSectionInView('dataTechnology')}
      />
      
      <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 3: Analysis & Decision Making</h2>
      <QuestionSection 
        title="Analytical Approaches" 
        questions={sectionQuestions.analysisDecision}
        onChange={onOptionChange}
        assessmentType={assessmentType}
        onAdditionalInfo={onAdditionalInfo}
        onConfidenceLevel={onConfidenceLevel}
        onSectionInView={() => handleSectionInView('analysisDecision')}
      />
      
      <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 4: Team & Knowledge</h2>
      <QuestionSection 
        title="Knowledge Management" 
        questions={sectionQuestions.teamKnowledge}
        onChange={onOptionChange}
        assessmentType={assessmentType}
        onAdditionalInfo={onAdditionalInfo}
        onConfidenceLevel={onConfidenceLevel}
        onSectionInView={() => handleSectionInView('teamKnowledge')}
      />

      {assessmentType === 'comprehensive' && sectionQuestions.technologyAdoption && (
        <>
          <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 5: Technology Adoption</h2>
          <QuestionSection 
            title="Technology Stack Evaluation" 
            questions={sectionQuestions.technologyAdoption}
            onChange={onOptionChange}
            assessmentType={assessmentType}
            onAdditionalInfo={onAdditionalInfo}
            onConfidenceLevel={onConfidenceLevel}
            onSectionInView={() => handleSectionInView('technologyAdoption')}
          />
        </>
      )}
    </div>
  );
};

export default QuestionSections;
