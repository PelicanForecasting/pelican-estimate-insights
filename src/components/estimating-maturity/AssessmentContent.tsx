
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import AssessmentHeader from './AssessmentHeader';
import QuestionSections from './QuestionSections';
import { Question, SectionQuestions, CompanyProfile } from './types';
import { Save, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import InfoBanner from './InfoBanner';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  const [email, setEmail] = useState('');
  const [showSaveForm, setShowSaveForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Calculate completion percentage for progress bar
  const totalQuestions = questions.length;
  const answeredQuestions = questions.filter(q => q.selectedOption !== undefined).length;
  const completionPercentage = totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0;
  
  const handleSaveForLater = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitting(true);
      try {
        await onSaveForLater(email);
        setShowSaveForm(false);
        toast({
          title: "Progress saved",
          description: "We'll email you a link to continue where you left off.",
        });
      } catch (error) {
        toast({
          title: "Save failed",
          description: "There was an error saving your progress. Please try again.",
          variant: "destructive",
        });
      } finally {
        setSubmitting(false);
      }
    }
  };

  const handleSubmitAssessment = async () => {
    setSubmitting(true);
    try {
      await onSubmit();
      toast({
        title: "Assessment submitted",
        description: "Your assessment has been submitted successfully. Generating results...",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your assessment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {assessmentType === 'quick' && (
        <InfoBanner 
          title="Quick Assessment" 
          description="This 5-minute assessment will provide an initial evaluation of your estimating maturity. You'll receive immediate insights and can continue to a more comprehensive assessment if desired."
        />
      )}
      
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
        assessmentType={assessmentType}
        companyName={companyProfile?.companyName}
      />
      
      <QuestionSections 
        sectionQuestions={sectionQuestions} 
        onOptionChange={onOptionChange} 
        assessmentType={assessmentType}
        onAdditionalInfo={onAdditionalInfo}
        onConfidenceLevel={onConfidenceLevel}
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
              <Button type="submit" disabled={submitting}>
                {submitting ? "Saving..." : "Save"}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowSaveForm(false)}
                disabled={submitting}
              >
                Cancel
              </Button>
            </form>
          )}
        </div>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Button 
                  size="lg"
                  onClick={handleSubmitAssessment} 
                  disabled={!allQuestionsAnswered || submitting}
                  variant="primary"
                  className="px-8 py-3"
                >
                  {submitting ? "Processing..." : "View My Results"}
                </Button>
              </div>
            </TooltipTrigger>
            {!allQuestionsAnswered && (
              <TooltipContent>
                <p>Please answer all questions to view your results</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
      
      {!allQuestionsAnswered && (
        <p className="text-center text-orange-500 mt-4">
          <Info className="inline h-4 w-4 mr-1" />
          Please answer all questions to view your results
        </p>
      )}
    </>
  );
};

export default AssessmentContent;
