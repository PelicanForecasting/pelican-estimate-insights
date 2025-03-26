
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/sections/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResultsDisplay from '@/components/estimating-maturity/ResultsDisplay';
import AboutTab from '@/components/estimating-maturity/AboutTab';
import AssessmentContent from '@/components/estimating-maturity/AssessmentContent';
import FeatureCards from '@/components/estimating-maturity/FeatureCards';
import { assessmentQuestions, comprehensiveAssessmentQuestions } from '@/components/estimating-maturity/assessmentQuestions';
import { 
  Question, 
  SectionQuestions, 
  AssessmentState, 
  CompanyProfile 
} from '@/components/estimating-maturity/types';
import CompanyProfileForm from '@/components/estimating-maturity/CompanyProfileForm';
import WelcomeScreen from '@/components/estimating-maturity/WelcomeScreen';
import { calculateMaturityLevel, getRecommendationsForScore } from '@/components/estimating-maturity/assessmentUtils';
import ComprehensiveAssessmentContent from '@/components/estimating-maturity/ComprehensiveAssessmentContent';

const EstimatingMaturity = () => {
  const [currentTab, setCurrentTab] = useState<string>("assessment");
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

  // Start assessment from welcome or about tab
  const startAssessment = () => {
    setCurrentTab("assessment");
    setAssessmentState(prev => ({
      ...prev,
      stage: 'companyProfile'
    }));
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/dcbc1815-252a-4087-a2de-8ce2ba0406ad.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <Navbar />
      
      <main className="container max-w-[1200px] mx-auto py-20 md:py-[80px] px-6 animate-fade-in">
        <div className="text-center mb-12 lg:mb-[48px]">
          <h1 className="text-3xl md:text-4xl lg:text-[32px] font-heading font-medium text-gradient bg-gradient-to-r from-pelican-navy to-pelican-teal mb-4">
            Estimating Maturity Assessment
          </h1>
          <p className="text-pelican-slate text-center mb-8 max-w-3xl mx-auto text-base">
            Evaluate your construction estimating processes against industry best practices
          </p>
        </div>
        
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-pelican-lightGray/50">
            <TabsTrigger value="assessment" className="text-base">Self-Assessment</TabsTrigger>
            <TabsTrigger value="about" className="text-base">About the Tool</TabsTrigger>
          </TabsList>
          
          <TabsContent value="assessment" className="space-y-6">
            {assessmentState.stage === 'welcome' && (
              <WelcomeScreen onStart={startAssessment} />
            )}
            
            {assessmentState.stage === 'companyProfile' && (
              <CompanyProfileForm onSubmit={handleProfileSubmit} />
            )}
            
            {assessmentState.stage === 'quickAssessment' && !assessmentState.quickAssessmentCompleted && (
              <AssessmentContent 
                questions={questions}
                sectionQuestions={sectionQuestions}
                score={assessmentState.score}
                allQuestionsAnswered={allQuestionsAnswered}
                onOptionChange={handleOptionChange}
                onSubmit={handleSubmit}
                companyProfile={assessmentState.companyProfile}
                assessmentType="quick"
                onSaveForLater={saveForLater}
                onAdditionalInfo={handleAdditionalInfo}
                onConfidenceLevel={handleConfidenceLevel}
              />
            )}
            
            {assessmentState.stage === 'comprehensiveAssessment' && (
              <ComprehensiveAssessmentContent
                questions={comprehensiveQuestions}
                sectionQuestions={comprehensiveSectionQuestions}
                score={assessmentState.score}
                allQuestionsAnswered={allComprehensiveQuestionsAnswered}
                onOptionChange={handleOptionChange}
                onSubmit={handleComprehensiveSubmit}
                companyProfile={assessmentState.companyProfile}
                onSaveForLater={saveForLater}
                onAdditionalInfo={handleAdditionalInfo}
                onConfidenceLevel={handleConfidenceLevel}
              />
            )}
            
            {assessmentState.stage === 'results' && (
              <ResultsDisplay 
                score={assessmentState.score} 
                onReset={handleReset}
                maturityLevel={assessmentState.maturityLevel}
                companyProfile={assessmentState.companyProfile}
                categoryScores={assessmentState.categoryScores}
                recommendations={getRecommendationsForScore(assessmentState.score)}
                onContinueToComprehensive={continueToComprehensive}
                isComprehensiveCompleted={assessmentState.comprehensiveAssessmentCompleted}
              />
            )}
          </TabsContent>
          
          <TabsContent value="about">
            <AboutTab onStartAssessment={startAssessment} />
          </TabsContent>
        </Tabs>
        
        <FeatureCards />
      </main>
      
      <Footer />
    </div>
  );
};

export default EstimatingMaturity;
