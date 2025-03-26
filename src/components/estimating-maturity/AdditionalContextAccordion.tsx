
import React from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider"; 
import { Button } from "@/components/ui/button";
import { PenLine, Upload } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Question, SectionQuestions } from './types';

interface AdditionalContextAccordionProps {
  sectionQuestions: SectionQuestions;
  additionalInfo: Record<string, string>;
  confidenceLevels: Record<string, number>;
  onAdditionalInfoChange: (questionId: string, info: string) => void;
  onConfidenceLevelChange: (questionId: string, level: number) => void;
}

const AdditionalContextAccordion: React.FC<AdditionalContextAccordionProps> = ({
  sectionQuestions,
  additionalInfo,
  confidenceLevels,
  onAdditionalInfoChange,
  onConfidenceLevelChange
}) => {
  return (
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
                    onChange={(e) => onAdditionalInfoChange(question.id, e.target.value)}
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
                      onValueChange={(value) => onConfidenceLevelChange(question.id, value[0])}
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
  );
};

export default AdditionalContextAccordion;
