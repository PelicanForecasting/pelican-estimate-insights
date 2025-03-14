
import React from 'react';
import QuestionSection from './QuestionSection';
import { SectionQuestions } from './types';

interface QuestionSectionsProps {
  sectionQuestions: SectionQuestions;
  onOptionChange: (questionId: string, value: string, points: number) => void;
}

const QuestionSections = ({ sectionQuestions, onOptionChange }: QuestionSectionsProps) => {
  return (
    <div className="space-y-6 lg:space-y-[24px]">
      <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 1: Process & Methodology</h2>
      <QuestionSection 
        title="Process Structure and Documentation" 
        questions={sectionQuestions.processMethodology}
        onChange={onOptionChange}
      />
      
      <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 2: Data & Technology</h2>
      <QuestionSection 
        title="Tools and Systems" 
        questions={sectionQuestions.dataTechnology}
        onChange={onOptionChange}
      />
      
      <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 3: Analysis & Decision Making</h2>
      <QuestionSection 
        title="Analytical Approaches" 
        questions={sectionQuestions.analysisDecision}
        onChange={onOptionChange}
      />
      
      <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 4: Team & Knowledge</h2>
      <QuestionSection 
        title="Knowledge Management" 
        questions={sectionQuestions.teamKnowledge}
        onChange={onOptionChange}
      />
    </div>
  );
};

export default QuestionSections;
