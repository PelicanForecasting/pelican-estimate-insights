
import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import CompanyProfileForm from './CompanyProfileForm';
import AssessmentContent from './AssessmentContent';
import ComprehensiveAssessmentContent from './ComprehensiveAssessmentContent';
import ResultsDisplay from './ResultsDisplay';
import { getRecommendationsForScore } from './assessmentUtils';
import { AssessmentState, CompanyProfile } from './types';

interface AssessmentContainerProps {
  assessmentState: AssessmentState;
  allQuestionsAnswered: boolean;
  allComprehensiveQuestionsAnswered: boolean;
  sectionQuestions: any;
  comprehensiveSectionQuestions: any;
  questions: any;
  comprehensiveQuestions: any;
  onOptionChange: (questionId: string, value: string, points: number) => void;
  onSubmit: () => void;
  onComprehensiveSubmit: () => void;
  onProfileSubmit: (profile: CompanyProfile) => void;
  onReset: () => void;
  onContinueToComprehensive: () => void;
  onSaveForLater: (email: string) => void;
  onAdditionalInfo: (questionId: string, info: string) => void;
  onConfidenceLevel: (questionId: string, level: number) => void;
  startAssessment: () => void;
}

const AssessmentContainer: React.FC<AssessmentContainerProps> = ({
  assessmentState,
  allQuestionsAnswered,
  allComprehensiveQuestionsAnswered,
  sectionQuestions,
  comprehensiveSectionQuestions,
  questions,
  comprehensiveQuestions,
  onOptionChange,
  onSubmit,
  onComprehensiveSubmit,
  onProfileSubmit,
  onReset,
  onContinueToComprehensive,
  onSaveForLater,
  onAdditionalInfo,
  onConfidenceLevel,
  startAssessment
}) => {
  // Render the appropriate component based on the assessment stage
  if (assessmentState.stage === 'welcome') {
    return <WelcomeScreen onStart={startAssessment} />;
  }

  if (assessmentState.stage === 'companyProfile') {
    return <CompanyProfileForm onSubmit={onProfileSubmit} />;
  }

  if (assessmentState.stage === 'quickAssessment' && !assessmentState.quickAssessmentCompleted) {
    return (
      <AssessmentContent 
        questions={questions}
        sectionQuestions={sectionQuestions}
        score={assessmentState.score}
        allQuestionsAnswered={allQuestionsAnswered}
        onOptionChange={onOptionChange}
        onSubmit={onSubmit}
        companyProfile={assessmentState.companyProfile}
        assessmentType="quick"
        onSaveForLater={onSaveForLater}
        onAdditionalInfo={onAdditionalInfo}
        onConfidenceLevel={onConfidenceLevel}
      />
    );
  }

  if (assessmentState.stage === 'comprehensiveAssessment') {
    return (
      <ComprehensiveAssessmentContent
        questions={comprehensiveQuestions}
        sectionQuestions={comprehensiveSectionQuestions}
        score={assessmentState.score}
        allQuestionsAnswered={allComprehensiveQuestionsAnswered}
        onOptionChange={onOptionChange}
        onSubmit={onComprehensiveSubmit}
        companyProfile={assessmentState.companyProfile}
        onSaveForLater={onSaveForLater}
        onAdditionalInfo={onAdditionalInfo}
        onConfidenceLevel={onConfidenceLevel}
      />
    );
  }

  if (assessmentState.stage === 'results') {
    return (
      <ResultsDisplay 
        score={assessmentState.score} 
        onReset={onReset}
        maturityLevel={assessmentState.maturityLevel}
        companyProfile={assessmentState.companyProfile}
        categoryScores={assessmentState.categoryScores}
        recommendations={getRecommendationsForScore(assessmentState.score)}
        onContinueToComprehensive={onContinueToComprehensive}
        isComprehensiveCompleted={assessmentState.comprehensiveAssessmentCompleted}
      />
    );
  }

  // Fallback, should not reach here with proper state management
  return <WelcomeScreen onStart={startAssessment} />;
};

export default AssessmentContainer;
