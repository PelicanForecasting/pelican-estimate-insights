
import React from 'react';
import { Button } from "@/components/ui/button";
import AssessmentHeader from './AssessmentHeader';
import QuestionSections from './QuestionSections';
import { Question, SectionQuestions } from './types';

interface AssessmentContentProps {
  questions: Question[];
  sectionQuestions: SectionQuestions;
  score: number;
  allQuestionsAnswered: boolean;
  onOptionChange: (questionId: string, value: string, points: number) => void;
  onSubmit: () => void;
}

const AssessmentContent = ({ 
  questions, 
  sectionQuestions, 
  score, 
  allQuestionsAnswered, 
  onOptionChange, 
  onSubmit 
}: AssessmentContentProps) => {
  return (
    <>
      <AssessmentHeader questions={questions} score={score} />
      
      <QuestionSections 
        sectionQuestions={sectionQuestions} 
        onOptionChange={onOptionChange} 
      />
      
      <div className="mt-8 flex justify-center">
        <Button 
          size="lg"
          onClick={onSubmit} 
          disabled={!allQuestionsAnswered}
          variant="primary"
          className="px-8 py-3"
        >
          View My Results
        </Button>
      </div>
      
      {!allQuestionsAnswered && (
        <p className="text-center text-orange-500 mt-4">
          Please answer all questions to view your results
        </p>
      )}
    </>
  );
};

export default AssessmentContent;
