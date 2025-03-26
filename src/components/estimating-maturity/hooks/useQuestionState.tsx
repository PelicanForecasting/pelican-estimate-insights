
import { useState, useEffect } from 'react';
import { Question, SectionQuestions, AssessmentCategory } from '../types';
import { assessmentQuestions, comprehensiveAssessmentQuestions } from '../assessmentQuestions';

export const useQuestionState = (updateAssessmentState: (updates: any) => void) => {
  const [questions, setQuestions] = useState<Question[]>(assessmentQuestions);
  const [comprehensiveQuestions, setComprehensiveQuestions] = useState<Question[]>(comprehensiveAssessmentQuestions);
  
  // Structure questions by section
  const sectionQuestions: SectionQuestions = {
    processMethodology: questions.filter(q => q.category === 'processMethodology'),
    dataTechnology: questions.filter(q => q.category === 'dataTechnology'),
    analysisDecision: questions.filter(q => q.category === 'analysisDecision'),
    teamKnowledge: questions.filter(q => q.category === 'teamKnowledge'),
    technologyAdoption: questions.filter(q => q.category === 'technologyAdoption')
  };

  // Structure comprehensive questions by section
  const comprehensiveSectionQuestions: SectionQuestions = {
    processMethodology: [...sectionQuestions.processMethodology, ...comprehensiveQuestions.filter(q => q.category === 'processMethodology')],
    dataTechnology: [...sectionQuestions.dataTechnology, ...comprehensiveQuestions.filter(q => q.category === 'dataTechnology')],
    analysisDecision: [...sectionQuestions.analysisDecision, ...comprehensiveQuestions.filter(q => q.category === 'analysisDecision')],
    teamKnowledge: [...sectionQuestions.teamKnowledge, ...comprehensiveQuestions.filter(q => q.category === 'teamKnowledge')],
    technologyAdoption: [...sectionQuestions.technologyAdoption, ...comprehensiveQuestions.filter(q => q.category === 'technologyAdoption')],
  };

  // Update max possible score when questions change
  useEffect(() => {
    updateAssessmentState({
      maxPossibleScore: questions.length * 4 // Assuming 4 points max per question
    });
  }, [questions, updateAssessmentState]);

  // Check if all questions for quick assessment are answered
  const allQuestionsAnswered = questions.every(q => q.selectedOption !== undefined);
  
  // Check if all comprehensive questions are answered
  const allComprehensiveQuestionsAnswered = 
    questions.every(q => q.selectedOption !== undefined) &&
    comprehensiveQuestions.every(q => q.selectedOption !== undefined);

  // Reset questions
  const resetQuestions = () => {
    const resetQuestionsList = questions.map(q => ({ 
      ...q, 
      selectedOption: undefined, 
      additionalInfo: undefined, 
      confidenceLevel: undefined, 
      impactLevel: undefined 
    }));
    setQuestions(resetQuestionsList);
    
    const resetComprehensiveQuestionsList = comprehensiveQuestions.map(q => ({ 
      ...q, 
      selectedOption: undefined, 
      additionalInfo: undefined, 
      confidenceLevel: undefined, 
      impactLevel: undefined 
    }));
    setComprehensiveQuestions(resetComprehensiveQuestionsList);
  };

  return {
    questions,
    setQuestions,
    comprehensiveQuestions,
    setComprehensiveQuestions,
    sectionQuestions,
    comprehensiveSectionQuestions,
    allQuestionsAnswered,
    allComprehensiveQuestionsAnswered,
    resetQuestions
  };
};
