
import { useState } from 'react';
import { 
  AssessmentState, 
  CompanyProfile 
} from '../types';
import { calculateMaturityLevel } from '../assessmentUtils';

export const useBaseAssessmentState = () => {
  // Initialize assessment state
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    stage: 'welcome',
    companyProfile: {},
    quickAssessmentCompleted: false,
    comprehensiveAssessmentCompleted: false,
    score: 0,
    maxPossibleScore: 0, // Will be calculated in useQuestionState
    categoryScores: {
      processMethodology: { score: 0, maxPossible: 12 },
      dataTechnology: { score: 0, maxPossible: 12 },
      analysisDecision: { score: 0, maxPossible: 12 },
      teamKnowledge: { score: 0, maxPossible: 12 },
      technologyAdoption: { score: 0, maxPossible: 12 }
    }
  });

  // Update assessment state
  const updateAssessmentState = (updates: Partial<AssessmentState>) => {
    setAssessmentState(prev => ({
      ...prev,
      ...updates
    }));
  };

  // Handle company profile submission
  const handleProfileSubmit = (profile: CompanyProfile) => {
    updateAssessmentState({
      companyProfile: profile,
      stage: 'quickAssessment'
    });
  };

  // Handle assessment submit
  const handleSubmit = () => {
    const maturityLevel = calculateMaturityLevel(assessmentState.score);
    
    updateAssessmentState({
      stage: 'results',
      quickAssessmentCompleted: true,
      maturityLevel
    });
  };
  
  // Handle comprehensive assessment submission
  const handleComprehensiveSubmit = (totalScore: number) => {
    const maturityLevel = calculateMaturityLevel(totalScore);
    
    updateAssessmentState({
      stage: 'results',
      comprehensiveAssessmentCompleted: true,
      score: totalScore,
      maturityLevel
    });
  };

  // Continue to comprehensive assessment
  const continueToComprehensive = () => {
    updateAssessmentState({
      stage: 'comprehensiveAssessment'
    });
  };

  // Reset assessment
  const handleReset = () => {
    setAssessmentState({
      stage: 'welcome',
      companyProfile: {},
      quickAssessmentCompleted: false,
      comprehensiveAssessmentCompleted: false,
      score: 0,
      maxPossibleScore: 0, // Will be recalculated
      categoryScores: {
        processMethodology: { score: 0, maxPossible: 12 },
        dataTechnology: { score: 0, maxPossible: 12 },
        analysisDecision: { score: 0, maxPossible: 12 },
        teamKnowledge: { score: 0, maxPossible: 12 },
        technologyAdoption: { score: 0, maxPossible: 12 }
      }
    });
  };

  // Save progress for later
  const saveForLater = (email: string) => {
    // In a real implementation, this would save to a database
    console.log("Saving progress for:", email);
    
    // For demo purposes, just show an alert
    alert(`Your progress has been saved. We'll email you at ${email} with a link to continue.`);
  };

  return {
    assessmentState,
    updateAssessmentState,
    handleProfileSubmit,
    handleSubmit,
    handleComprehensiveSubmit,
    continueToComprehensive,
    handleReset,
    saveForLater
  };
};
