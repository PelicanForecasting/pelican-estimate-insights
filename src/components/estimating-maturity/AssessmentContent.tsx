
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AssessmentHeader from './AssessmentHeader';
import QuestionSections from './QuestionSections';
import { Question, SectionQuestions, CompanyProfile } from './types';
import { Save } from "lucide-react";

interface AssessmentContentProps {
  questions: Question[];
  sectionQuestions: SectionQuestions;
  score: number;
  allQuestionsAnswered: boolean;
  onOptionChange: (questionId: string, value: string, points: number) => void;
  onSubmit: () => void;
  companyProfile?: CompanyProfile;
  assessmentType: 'quick' | 'comprehensive';
  onSaveForLater: (email: string) => void;
  onAdditionalInfo?: (questionId: string, info: string) => void;
  onConfidenceLevel?: (questionId: string, level: number) => void;
}

const AssessmentContent = ({ 
  questions, 
  sectionQuestions, 
  score, 
  allQuestionsAnswered, 
  onOptionChange, 
  onSubmit,
  companyProfile,
  assessmentType,
  onSaveForLater,
  onAdditionalInfo,
  onConfidenceLevel
}: AssessmentContentProps) => {
  const [email, setEmail] = React.useState('');
  const [showSaveForm, setShowSaveForm] = React.useState(false);
  
  const handleSaveForLater = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSaveForLater(email);
      setShowSaveForm(false);
    }
  };

  return (
    <>
      <AssessmentHeader 
        questions={questions} 
        score={score} 
        assessmentType={assessmentType}
        companyName={companyProfile?.companyName}
      />
      
      <QuestionSections 
        sectionQuestions={sectionQuestions} 
        onOptionChange={onOptionChange} 
        assessmentType={assessmentType}
      />
      
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          {!showSaveForm ? (
            <Button 
              variant="outline" 
              className="text-pelican-slate" 
              onClick={() => setShowSaveForm(true)}
            >
              <Save className="mr-2 h-4 w-4" />
              Save for Later
            </Button>
          ) : (
            <form onSubmit={handleSaveForLater} className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit">Save</Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowSaveForm(false)}
              >
                Cancel
              </Button>
            </form>
          )}
        </div>
        
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
