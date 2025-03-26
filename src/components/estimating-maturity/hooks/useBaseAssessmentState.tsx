
import { useState } from 'react';
import { 
  AssessmentState, 
  CompanyProfile 
} from '../types';
import { calculateMaturityLevel } from '../assessmentUtils';
import { submitAssessmentData } from '../utils/formSubmission';

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

  // Start assessment by moving to company profile
  const startAssessment = () => {
    updateAssessmentState({
      stage: 'companyProfile'
    });
  };

  // Handle company profile submission
  const handleProfileSubmit = async (profile: CompanyProfile) => {
    // Submit company profile data to Formspree
    await submitAssessmentData({
      formType: 'companyProfile',
      ...profile
    });
    
    updateAssessmentState({
      companyProfile: profile,
      stage: 'quickAssessment'
    });
  };

  // Handle assessment submit
  const handleSubmit = async () => {
    const maturityLevel = calculateMaturityLevel(assessmentState.score);
    
    // Submit quick assessment data to Formspree
    await submitAssessmentData({
      formType: 'quickAssessment',
      companyProfile: assessmentState.companyProfile,
      score: assessmentState.score,
      maturityLevel,
      categoryScores: assessmentState.categoryScores
    });
    
    updateAssessmentState({
      stage: 'results',
      quickAssessmentCompleted: true,
      maturityLevel
    });
  };
  
  // Handle comprehensive assessment submission
  const handleComprehensiveSubmit = async (totalScore: number) => {
    const maturityLevel = calculateMaturityLevel(totalScore);
    
    // Submit comprehensive assessment data to Formspree
    await submitAssessmentData({
      formType: 'comprehensiveAssessment',
      companyProfile: assessmentState.companyProfile,
      score: totalScore,
      maturityLevel,
      categoryScores: assessmentState.categoryScores
    });
    
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
  const saveForLater = async (email: string) => {
    // Submit saved assessment data to Formspree
    await submitAssessmentData({
      formType: 'saveForLater',
      email,
      stage: assessmentState.stage,
      companyProfile: assessmentState.companyProfile,
      score: assessmentState.score,
      categoryScores: assessmentState.categoryScores
    });
  };

  return {
    assessmentState,
    updateAssessmentState,
    startAssessment,
    handleProfileSubmit,
    handleSubmit,
    handleComprehensiveSubmit,
    continueToComprehensive,
    handleReset,
    saveForLater
  };
};
