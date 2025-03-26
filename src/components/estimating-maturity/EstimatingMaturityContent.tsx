
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutTab from '@/components/estimating-maturity/AboutTab';
import FeatureCards from '@/components/estimating-maturity/FeatureCards';
import AssessmentContainer from '@/components/estimating-maturity/AssessmentContainer';
import { useAssessmentState } from '@/components/estimating-maturity/hooks/useAssessmentState';

interface EstimatingMaturityContentProps {
  defaultTab?: string;
}

const EstimatingMaturityContent: React.FC<EstimatingMaturityContentProps> = ({ defaultTab = "assessment" }) => {
  const [currentTab, setCurrentTab] = useState<string>(defaultTab);
  
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
      
      <FeatureCards />
    </Tabs>
  );
};

export default EstimatingMaturityContent;
