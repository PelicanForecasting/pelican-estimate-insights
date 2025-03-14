
import React from 'react';
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Question } from './types';

interface QuestionSectionProps {
  title: string;
  questions: Question[];
  onChange: (questionId: string, value: string, points: number) => void;
}

const QuestionSection = ({ title, questions, onChange }: QuestionSectionProps) => {
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionSection;
