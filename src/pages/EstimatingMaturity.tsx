
import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/sections/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResultsDisplay from '@/components/estimating-maturity/ResultsDisplay';
import AboutTab from '@/components/estimating-maturity/AboutTab';
import AssessmentContent from '@/components/estimating-maturity/AssessmentContent';
import FeatureCards from '@/components/estimating-maturity/FeatureCards';
import { assessmentQuestions } from '@/components/estimating-maturity/assessmentQuestions';
import { Question, SectionQuestions } from '@/components/estimating-maturity/types';

const EstimatingMaturity = () => {
  const [currentTab, setCurrentTab] = useState<string>("assessment");
  const [questions, setQuestions] = useState<Question[]>(assessmentQuestions);
  const [score, setScore] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState<boolean>(false);

  const sectionQuestions: SectionQuestions = {
    processMethodology: questions.slice(0, 3),
    dataTechnology: questions.slice(3, 6),
    analysisDecision: questions.slice(6, 9),
    teamKnowledge: questions.slice(9, 12)
  };

  const handleOptionChange = (questionId: string, value: string, points: number) => {
    const updatedQuestions = questions.map(q => 
      q.id === questionId ? { ...q, selectedOption: value } : q
    );
    
    setQuestions(updatedQuestions);
    
    const newScore = updatedQuestions.reduce((total, q) => {
      if (q.selectedOption) {
        const option = q.options.find(opt => opt.value === q.selectedOption);
        return total + (option ? option.points : 0);
      }
      return total;
    }, 0);
    
    setScore(newScore);
    
    const allAnswered = updatedQuestions.every(q => q.selectedOption !== undefined);
    setAllQuestionsAnswered(allAnswered);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    const resetQuestions = questions.map(q => ({ ...q, selectedOption: undefined }));
    setQuestions(resetQuestions);
    setScore(0);
    setShowResults(false);
    setAllQuestionsAnswered(false);
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
            {!showResults ? (
              <AssessmentContent 
                questions={questions}
                sectionQuestions={sectionQuestions}
                score={score}
                allQuestionsAnswered={allQuestionsAnswered}
                onOptionChange={handleOptionChange}
                onSubmit={handleSubmit}
              />
            ) : (
              <ResultsDisplay score={score} onReset={handleReset} />
            )}
          </TabsContent>
          
          <TabsContent value="about">
            <AboutTab onStartAssessment={() => setCurrentTab("assessment")} />
          </TabsContent>
        </Tabs>
        
        <FeatureCards />
      </main>
      
      <Footer />
    </div>
  );
};

export default EstimatingMaturity;
