
import { useBaseAssessmentState } from './useBaseAssessmentState';
import { useQuestionState } from './useQuestionState';
import { useQuestionResponses } from './useQuestionResponses';

export const useAssessmentState = () => {
  const {
    assessmentState,
    updateAssessmentState,
    handleProfileSubmit,
    handleSubmit,
    handleComprehensiveSubmit: baseHandleComprehensiveSubmit,
    continueToComprehensive,
    handleReset: baseHandleReset,
    saveForLater
  } = useBaseAssessmentState();
  
  const {
    questions,
    setQuestions,
    comprehensiveQuestions,
    setComprehensiveQuestions,
    sectionQuestions,
    comprehensiveSectionQuestions,
    allQuestionsAnswered,
    allComprehensiveQuestionsAnswered,
    resetQuestions
  } = useQuestionState(updateAssessmentState);
  
  const {
    handleOptionChange,
    handleAdditionalInfo,
    handleConfidenceLevel,
    calculateComprehensiveTotalScore
  } = useQuestionResponses(
    questions,
    comprehensiveQuestions,
    setQuestions,
    setComprehensiveQuestions,
    assessmentState.stage,
    updateAssessmentState
  );
  
  // Wrap the comprehensive submit to include score calculation
  const handleComprehensiveSubmit = () => {
    const totalScore = calculateComprehensiveTotalScore();
    baseHandleComprehensiveSubmit(totalScore);
  };
  
  // Wrap the reset function to reset questions too
  const handleReset = () => {
    baseHandleReset();
    resetQuestions();
  };

  return {
    questions,
    comprehensiveQuestions,
    assessmentState,
    sectionQuestions,
    comprehensiveSectionQuestions,
    allQuestionsAnswered,
    allComprehensiveQuestionsAnswered,
    handleOptionChange,
    handleSubmit,
    handleComprehensiveSubmit,
    handleProfileSubmit,
    handleReset,
    continueToComprehensive,
    saveForLater,
    handleAdditionalInfo,
    handleConfidenceLevel
  };
};
