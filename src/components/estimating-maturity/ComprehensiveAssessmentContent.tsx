
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider"; 
import AssessmentHeader from './AssessmentHeader';
import QuestionSections from './QuestionSections';
import { Question, SectionQuestions, CompanyProfile } from './types';
import { Save, Upload, PenLine, AlertCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  const [email, setEmail] = useState('');
  const [showSaveForm, setShowSaveForm] = useState(false);
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState<Record<string, string>>({});
  const [confidenceLevels, setConfidenceLevels] = useState<Record<string, number>>({});
  
  const handleSaveForLater = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSaveForLater(email);
      setShowSaveForm(false);
    }
  };
  
  const handleAdditionalInfoChange = (questionId: string, info: string) => {
    setAdditionalInfo(prev => ({
      ...prev,
      [questionId]: info
    }));
    
    if (onAdditionalInfo) {
      onAdditionalInfo(questionId, info);
    }
  };
  
  const handleConfidenceLevelChange = (questionId: string, level: number) => {
    setConfidenceLevels(prev => ({
      ...prev,
      [questionId]: level
    }));
    
    if (onConfidenceLevel) {
      onConfidenceLevel(questionId, level);
    }
  };
  
  const handleExpandedChange = (value: string) => {
    setActiveQuestionId(value === activeQuestionId ? null : value);
  };

  return (
    <>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-blue-500" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Comprehensive Assessment</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>This in-depth assessment builds on your initial evaluation to provide more detailed insights and tailored recommendations. Some questions have optional fields for additional context and confidence levels.</p>
            </div>
          </div>
        </div>
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
      />
      
      <div className="mt-8">
        <h3 className="text-xl font-heading font-medium text-pelican-navy mb-4">Additional Context (Optional)</h3>
        <p className="text-pelican-slate mb-4">
          Provide more context about your responses to receive more tailored recommendations.
        </p>
        
        <Accordion type="single" collapsible className="mb-6">
          {Object.entries(sectionQuestions).map(([category, categoryQuestions]) => 
            categoryQuestions.map((question) => (
              <AccordionItem key={question.id} value={question.id}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-start">
                    <PenLine className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-pelican-teal" />
                    <span>{question.text}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <div>
                    <Label htmlFor={`context-${question.id}`}>Additional Information</Label>
                    <Textarea
                      id={`context-${question.id}`}
                      placeholder="Share more details about your current approach..."
                      className="mt-1.5"
                      value={additionalInfo[question.id] || ''}
                      onChange={(e) => handleAdditionalInfoChange(question.id, e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label>Confidence Level</Label>
                    <div className="flex items-center gap-4 mt-1.5">
                      <span className="text-sm text-gray-500">Low</span>
                      <Slider
                        value={confidenceLevels[question.id] ? [confidenceLevels[question.id]] : [3]}
                        min={1}
                        max={5}
                        step={1}
                        onValueChange={(value) => handleConfidenceLevelChange(question.id, value[0])}
                        className="flex-1"
                      />
                      <span className="text-sm text-gray-500">High</span>
                    </div>
                  </div>
                  
                  {question.documentUpload && (
                    <div>
                      <Label htmlFor={`upload-${question.id}`}>Upload Supporting Document (Optional)</Label>
                      <div className="mt-1.5 flex items-center gap-2">
                        <Button variant="outline" className="w-full">
                          <Upload className="mr-2 h-4 w-4" />
                          Select File
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Supported formats: PDF, DOCX, XLSX, JPG, PNG (max 10MB)
                      </p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))
          )}
        </Accordion>
      </div>
      
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
          View My Comprehensive Results
        </Button>
      </div>
      
      {!allQuestionsAnswered && (
        <p className="text-center text-orange-500 mt-4">
          Please answer all questions to view your comprehensive results
        </p>
      )}
    </>
  );
};

export default ComprehensiveAssessmentContent;
