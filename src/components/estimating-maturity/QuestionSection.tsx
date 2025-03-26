
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Upload } from "lucide-react";
import { Question } from './types';

interface QuestionSectionProps {
  title: string;
  questions: Question[];
  onChange: (questionId: string, value: string, points: number) => void;
  assessmentType?: 'quick' | 'comprehensive';
}

const QuestionSection = ({ 
  title, 
  questions, 
  onChange,
  assessmentType = 'quick'
}: QuestionSectionProps) => {
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  
  const toggleExpand = (questionId: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };
  
  return (
    <Card className="mb-6 lg:mb-[24px] border-pelican-teal/20 shadow-sm">
      <CardContent className="pt-6">
        <h3 className="text-xl font-heading font-medium text-pelican-navy mb-4">{title}</h3>
        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="bg-white rounded-md p-4 border border-gray-100">
              <div className="mb-3 font-medium text-pelican-slate">{question.text}</div>
              <RadioGroup
                value={question.selectedOption}
                onValueChange={(value) => {
                  const option = question.options.find(opt => opt.value === value);
                  if (option) {
                    onChange(question.id, value, option.points);
                  }
                }}
                className="space-y-2"
              >
                {question.options.map((option) => (
                  <div key={option.value} className="flex items-start space-x-2">
                    <RadioGroupItem
                      id={`${question.id}-${option.value}`}
                      value={option.value}
                      className="mt-1"
                    />
                    <Label
                      htmlFor={`${question.id}-${option.value}`}
                      className="text-base text-pelican-slate cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              {assessmentType === 'comprehensive' && (
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-pelican-navy text-sm p-0 h-auto flex items-center"
                    onClick={() => toggleExpand(question.id)}
                  >
                    {expandedQuestions[question.id] ? (
                      <>
                        <ChevronUp className="mr-1 h-4 w-4" />
                        Hide additional details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-1 h-4 w-4" />
                        Tell us more
                      </>
                    )}
                  </Button>
                  
                  {expandedQuestions[question.id] && (
                    <div className="mt-3 space-y-4">
                      <div>
                        <Label htmlFor={`${question.id}-additionalInfo`} className="text-sm text-pelican-slate mb-1 block">
                          Additional context or details (optional)
                        </Label>
                        <Textarea
                          id={`${question.id}-additionalInfo`}
                          placeholder="Provide any additional details about your current practices..."
                          className="min-h-[100px]"
                        />
                      </div>
                      
                      {question.documentUpload && (
                        <div>
                          <Label htmlFor={`${question.id}-upload`} className="text-sm text-pelican-slate mb-1 block">
                            Upload supporting documentation (optional)
                          </Label>
                          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                            <Upload className="mx-auto h-8 w-8 text-gray-400" />
                            <p className="mt-1 text-sm text-gray-500">
                              Drag and drop files, or
                              <Button variant="link" className="px-1">browse</Button>
                            </p>
                            <p className="mt-1 text-xs text-gray-400">
                              PDF, Word, Excel, or image files (max 10MB)
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionSection;
