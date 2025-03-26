
import { AssessmentCategory } from '../types';

// Separate utility function for calculating category scores
const calculateCategoryScores = (
  questions: any[]
): Record<AssessmentCategory, { score: number; maxPossible: number }> => {
  const categoryScores: Record<AssessmentCategory, { score: number; maxPossible: number }> = {
    processMethodology: { score: 0, maxPossible: 0 },
    dataTechnology: { score: 0, maxPossible: 0 },
    analysisDecision: { score: 0, maxPossible: 0 },
    teamKnowledge: { score: 0, maxPossible: 0 },
    technologyAdoption: { score: 0, maxPossible: 0 }
  };

  // Calculate score for each category
  Object.keys(categoryScores).forEach(categoryKey => {
    const category = categoryKey as AssessmentCategory;
    const categoryQuestions = questions.filter(q => q.category === category);
    const categoryScore = categoryQuestions.reduce((total, q) => {
      if (q.selectedOption) {
        const option = q.options.find((opt: any) => opt.value === q.selectedOption);
        return total + (option ? option.points : 0);
      }
      return total;
    }, 0);
    
    const maxPossible = categoryQuestions.length * 4; // Assuming 4 points max per question
    
    categoryScores[category] = {
      score: categoryScore,
      maxPossible
    };
  });

  return categoryScores;
};

export const useQuestionResponses = (
  questions: any[],
  comprehensiveQuestions: any[],
  setQuestions: (questions: any[]) => void,
  setComprehensiveQuestions: (questions: any[]) => void,
  assessmentStage: string,
  updateAssessmentState: (updates: any) => void
) => {
  // Handle question responses
  const handleOptionChange = (questionId: string, value: string, points: number) => {
    // Determine if we're in quick or comprehensive assessment mode
    const currentQuestions = assessmentStage === 'comprehensiveAssessment' 
      ? [...questions, ...comprehensiveQuestions]
      : questions;
    
    const updatedQuestions = currentQuestions.map(q => 
      q.id === questionId ? { ...q, selectedOption: value } : q
    );
    
    // Update the appropriate question set
    if (assessmentStage === 'comprehensiveAssessment') {
      // Find where the question belongs
      const isInQuickAssessment = questions.some(q => q.id === questionId);
      const isInComprehensive = comprehensiveQuestions.some(q => q.id === questionId);
      
      if (isInQuickAssessment) {
        setQuestions(questions.map(q => q.id === questionId ? { ...q, selectedOption: value } : q));
      }
      
      if (isInComprehensive) {
        setComprehensiveQuestions(comprehensiveQuestions.map(q => q.id === questionId ? { ...q, selectedOption: value } : q));
      }
    } else {
      setQuestions(questions.map(q => q.id === questionId ? { ...q, selectedOption: value } : q));
    }
    
    // Calculate new scores
    const newScore = updatedQuestions.reduce((total, q) => {
      if (q.selectedOption) {
        const option = q.options.find((opt: any) => opt.value === q.selectedOption);
        return total + (option ? option.points : 0);
      }
      return total;
    }, 0);
    
    // Calculate category scores using the separated function
    const updatedCategoryScores = calculateCategoryScores(updatedQuestions);
    
    // Update assessment state
    updateAssessmentState({
      score: newScore,
      categoryScores: updatedCategoryScores
    });
  };

  // Add additional information to a question response
  const handleAdditionalInfo = (questionId: string, info: string) => {
    // Determine which question set to update
    if (assessmentStage === 'comprehensiveAssessment') {
      const isInQuickAssessment = questions.some(q => q.id === questionId);
      const isInComprehensive = comprehensiveQuestions.some(q => q.id === questionId);
      
      if (isInQuickAssessment) {
        setQuestions(questions.map(q => q.id === questionId ? { ...q, additionalInfo: info } : q));
      }
      
      if (isInComprehensive) {
        setComprehensiveQuestions(comprehensiveQuestions.map(q => q.id === questionId ? { ...q, additionalInfo: info } : q));
      }
    } else {
      setQuestions(questions.map(q => q.id === questionId ? { ...q, additionalInfo: info } : q));
    }
  };
  
  // Set confidence level for a question
  const handleConfidenceLevel = (questionId: string, level: number) => {
    // Similar implementation to handleAdditionalInfo
    if (assessmentStage === 'comprehensiveAssessment') {
      const isInQuickAssessment = questions.some(q => q.id === questionId);
      const isInComprehensive = comprehensiveQuestions.some(q => q.id === questionId);
      
      if (isInQuickAssessment) {
        setQuestions(questions.map(q => q.id === questionId ? { ...q, confidenceLevel: level } : q));
      }
      
      if (isInComprehensive) {
        setComprehensiveQuestions(comprehensiveQuestions.map(q => q.id === questionId ? { ...q, confidenceLevel: level } : q));
      }
    } else {
      setQuestions(questions.map(q => q.id === questionId ? { ...q, confidenceLevel: level } : q));
    }
  };

  // Calculate total score for comprehensive assessment
  const calculateComprehensiveTotalScore = () => {
    const allAnsweredQuestions = [...questions, ...comprehensiveQuestions].filter(q => q.selectedOption);
    return allAnsweredQuestions.reduce((total, q) => {
      const option = q.options.find((opt: any) => opt.value === q.selectedOption);
      return total + (option ? option.points : 0);
    }, 0);
  };

  return {
    handleOptionChange,
    handleAdditionalInfo,
    handleConfidenceLevel,
    calculateComprehensiveTotalScore
  };
};
