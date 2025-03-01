
import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";

interface Option {
  label: string;
  value: string;
  points: number;
}

interface Question {
  id: string;
  text: string;
  options: Option[];
  selectedOption?: string;
}

interface QuestionSectionProps {
  title: string;
  questions: Question[];
  onChange: (questionId: string, value: string, points: number) => void;
}

const QuestionSection = ({ title, questions, onChange }: QuestionSectionProps) => {
  return (
    <Card className="mb-8 border-pelican-teal/20 shadow-md">
      <CardContent className="pt-6">
        <h3 className="text-xl font-heading font-bold text-pelican-navy mb-4">{title}</h3>
        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="bg-white rounded-lg p-4">
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
                  <div key={option.value} className="flex items-start">
                    <input
                      type="radio"
                      id={`${question.id}-${option.value}`}
                      name={question.id}
                      value={option.value}
                      checked={question.selectedOption === option.value}
                      onChange={() => {
                        onChange(question.id, option.value, option.points);
                      }}
                      className="mr-2 mt-1 h-4 w-4 text-pelican-teal border-gray-300 focus:ring-pelican-teal"
                    />
                    <Label
                      htmlFor={`${question.id}-${option.value}`}
                      className="text-sm text-pelican-slate cursor-pointer"
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
