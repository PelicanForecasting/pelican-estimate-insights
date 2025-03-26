
import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/sections/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutTab from '@/components/estimating-maturity/AboutTab';
import FeatureCards from '@/components/estimating-maturity/FeatureCards';
import AssessmentContainer from '@/components/estimating-maturity/AssessmentContainer';
import { useAssessmentState } from '@/components/estimating-maturity/hooks/useAssessmentState';

const EstimatingMaturity = () => {
  const [currentTab, setCurrentTab] = useState<string>("assessment");
  
  const {
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
  } = useAssessmentState();

  // Start assessment from welcome or about tab
  const startAssessment = () => {
    setCurrentTab("assessment");
    handleProfileSubmit({});
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
            <AssessmentContainer 
              assessmentState={assessmentState}
              allQuestionsAnswered={allQuestionsAnswered}
              allComprehensiveQuestionsAnswered={allComprehensiveQuestionsAnswered}
              sectionQuestions={sectionQuestions}
              comprehensiveSectionQuestions={comprehensiveSectionQuestions}
              questions={questions}
              comprehensiveQuestions={comprehensiveQuestions}
              onOptionChange={handleOptionChange}
              onSubmit={handleSubmit}
              onComprehensiveSubmit={handleComprehensiveSubmit}
              onProfileSubmit={handleProfileSubmit}
              onReset={handleReset}
              onContinueToComprehensive={continueToComprehensive}
              onSaveForLater={saveForLater}
              onAdditionalInfo={handleAdditionalInfo}
              onConfidenceLevel={handleConfidenceLevel}
              startAssessment={startAssessment}
            />
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
