
import { useState } from 'react';
import { 
  Question, 
  SectionQuestions, 
  AssessmentState, 
  CompanyProfile 
} from '../types';
import { calculateMaturityLevel } from '../assessmentUtils';
import { assessmentQuestions, comprehensiveAssessmentQuestions } from '../assessmentQuestions';

export const useAssessmentState = () => {
  const [questions, setQuestions] = useState<Question[]>(assessmentQuestions);
  const [comprehensiveQuestions, setComprehensiveQuestions] = useState<Question[]>(comprehensiveAssessmentQuestions);
  
  // Initialize assessment state
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    stage: 'welcome',
    companyProfile: {},
    quickAssessmentCompleted: false,
    comprehensiveAssessmentCompleted: false,
    score: 0,
    maxPossibleScore: questions.length * 4, // Assuming 4 points max per question
    categoryScores: {
      processMethodology: { score: 0, maxPossible: 12 },
      dataTechnology: { score: 0, maxPossible: 12 },
      analysisDecision: { score: 0, maxPossible: 12 },
      teamKnowledge: { score: 0, maxPossible: 12 },
      technologyAdoption: { score: 0, maxPossible: 12 }
    }
  });

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

  // Handle question responses
  const handleOptionChange = (questionId: string, value: string, points: number) => {
    // Determine if we're in quick or comprehensive assessment mode
    const currentQuestions = assessmentState.stage === 'comprehensiveAssessment' 
      ? [...questions, ...comprehensiveQuestions]
      : questions;
    
    const updatedQuestions = currentQuestions.map(q => 
      q.id === questionId ? { ...q, selectedOption: value } : q
    );
    
    // Update the appropriate question set
    if (assessmentState.stage === 'comprehensiveAssessment') {
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
        const option = q.options.find(opt => opt.value === q.selectedOption);
        return total + (option ? option.points : 0);
      }
      return total;
    }, 0);
    
    // Update category scores
    const updatedCategoryScores = { ...assessmentState.categoryScores };
    const question = currentQuestions.find(q => q.id === questionId);
    
    if (question?.category) {
      const category = question.category;
      const categoryQuestions = updatedQuestions.filter(q => q.category === category);
      const categoryScore = categoryQuestions.reduce((total, q) => {
        if (q.selectedOption) {
          const option = q.options.find(opt => opt.value === q.selectedOption);
          return total + (option ? option.points : 0);
        }
        return total;
      }, 0);
      
      const maxPossible = categoryQuestions.length * 4; // Assuming 4 points max per question
      
      updatedCategoryScores[category] = {
        score: categoryScore,
        maxPossible
      };
    }
    
    // Update assessment state
    setAssessmentState(prev => ({
      ...prev,
      score: newScore,
      categoryScores: updatedCategoryScores
    }));
  };

  // Add additional information to a question response
  const handleAdditionalInfo = (questionId: string, info: string) => {
    // Determine which question set to update
    if (assessmentState.stage === 'comprehensiveAssessment') {
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
    if (assessmentState.stage === 'comprehensiveAssessment') {
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

  // Check if all questions for quick assessment are answered
  const allQuestionsAnswered = questions.every(q => q.selectedOption !== undefined);
  
  // Check if all comprehensive questions are answered
  const allComprehensiveQuestionsAnswered = 
    questions.every(q => q.selectedOption !== undefined) &&
    comprehensiveQuestions.every(q => q.selectedOption !== undefined);

  // Handle form submission
  const handleSubmit = () => {
    const maturityLevel = calculateMaturityLevel(assessmentState.score);
    
    setAssessmentState(prev => ({
      ...prev,
      stage: 'results',
      quickAssessmentCompleted: true,
      maturityLevel
    }));
  };
  
  // Handle comprehensive assessment submission
  const handleComprehensiveSubmit = () => {
    // Calculate full score including comprehensive questions
    const allAnsweredQuestions = [...questions, ...comprehensiveQuestions].filter(q => q.selectedOption);
    const totalScore = allAnsweredQuestions.reduce((total, q) => {
      const option = q.options.find(opt => opt.value === q.selectedOption);
      return total + (option ? option.points : 0);
    }, 0);
    
    const maturityLevel = calculateMaturityLevel(totalScore);
    
    setAssessmentState(prev => ({
      ...prev,
      stage: 'results',
      comprehensiveAssessmentCompleted: true,
      score: totalScore,
      maturityLevel
    }));
  };

  // Handle company profile submission
  const handleProfileSubmit = (profile: CompanyProfile) => {
    setAssessmentState(prev => ({
      ...prev,
      companyProfile: profile,
      stage: 'quickAssessment'
    }));
  };

  // Reset assessment
  const handleReset = () => {
    const resetQuestions = questions.map(q => ({ ...q, selectedOption: undefined, additionalInfo: undefined, confidenceLevel: undefined, impactLevel: undefined }));
    setQuestions(resetQuestions);
    
    const resetComprehensiveQuestions = comprehensiveQuestions.map(q => ({ ...q, selectedOption: undefined, additionalInfo: undefined, confidenceLevel: undefined, impactLevel: undefined }));
    setComprehensiveQuestions(resetComprehensiveQuestions);
    
    setAssessmentState({
      stage: 'welcome',
      companyProfile: {},
      quickAssessmentCompleted: false,
      comprehensiveAssessmentCompleted: false,
      score: 0,
      maxPossibleScore: questions.length * 4,
      categoryScores: {
        processMethodology: { score: 0, maxPossible: 12 },
        dataTechnology: { score: 0, maxPossible: 12 },
        analysisDecision: { score: 0, maxPossible: 12 },
        teamKnowledge: { score: 0, maxPossible: 12 },
        technologyAdoption: { score: 0, maxPossible: 12 }
      }
    });
  };

  // Continue to comprehensive assessment
  const continueToComprehensive = () => {
    setAssessmentState(prev => ({
      ...prev,
      stage: 'comprehensiveAssessment'
    }));
  };

  // Save progress for later
  const saveForLater = (email: string) => {
    // In a real implementation, this would save to a database
    console.log("Saving progress for:", email);
    
    // For demo purposes, just show an alert
    alert(`Your progress has been saved. We'll email you at ${email} with a link to continue.`);
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
