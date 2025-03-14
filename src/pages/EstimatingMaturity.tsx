import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/sections/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import QuestionSection from '@/components/estimating-maturity/QuestionSection';
import ResultsDisplay from '@/components/estimating-maturity/ResultsDisplay';
import { Award, FileText, Users } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  options: {
    label: string;
    value: string;
    points: number;
  }[];
  selectedOption?: string;
}

const EstimatingMaturity = () => {
  const [currentTab, setCurrentTab] = useState<string>("assessment");
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "q1",
      text: "How would you describe your current estimating process?",
      options: [
        { label: "Ad-hoc (different approach for each estimate)", value: "ad-hoc", points: 1 },
        { label: "Informal (consistent but not documented)", value: "informal", points: 2 },
        { label: "Standardized (documented process followed by all estimators)", value: "standardized", points: 3 },
        { label: "Optimized (standardized with continuous improvement)", value: "optimized", points: 4 },
      ]
    },
    {
      id: "q2",
      text: "How are estimating standards maintained in your organization?",
      options: [
        { label: "Tribal knowledge (experience-based, not documented)", value: "tribal", points: 1 },
        { label: "Basic templates and checklists", value: "basic", points: 2 },
        { label: "Comprehensive estimating manual with standards", value: "comprehensive", points: 3 },
        { label: "Standards with regular review and updates", value: "regular-updates", points: 4 },
      ]
    },
    {
      id: "q3",
      text: "How do you incorporate lessons learned from completed projects?",
      options: [
        { label: "Informally or rarely", value: "rarely", points: 1 },
        { label: "Post-project reviews but limited integration into future estimates", value: "limited", points: 2 },
        { label: "Structured feedback process for major projects", value: "structured", points: 3 },
        { label: "Systematic analysis of all projects with database of learnings", value: "systematic", points: 4 },
      ]
    },
    {
      id: "q4",
      text: "What tools do you currently use for estimating? (Select the most advanced option that applies)",
      options: [
        { label: "Spreadsheets (Excel, Google Sheets)", value: "spreadsheets", points: 1 },
        { label: "Specialized estimating software (HCSS HeavyBid, etc.)", value: "specialized", points: 2 },
        { label: "Custom-built solutions", value: "custom", points: 3 },
        { label: "ERP system with estimating module", value: "erp", points: 4 },
      ]
    },
    {
      id: "q5",
      text: "How do you store and access historical project data?",
      options: [
        { label: "Paper records/Filing cabinets", value: "paper", points: 1 },
        { label: "Digital files (folders on server/cloud)", value: "digital", points: 2 },
        { label: "Basic database", value: "database", points: 3 },
        { label: "Integrated system with search capabilities", value: "integrated", points: 4 },
      ]
    },
    {
      id: "q6",
      text: "How do your estimating systems connect with other business systems?",
      options: [
        { label: "No integration (manual data transfer)", value: "none", points: 1 },
        { label: "Limited export/import capabilities", value: "limited", points: 2 },
        { label: "Partial integration with some systems", value: "partial", points: 3 },
        { label: "Full integration across platforms", value: "full", points: 4 },
      ]
    },
    {
      id: "q7",
      text: "How do you analyze the accuracy of past estimates?",
      options: [
        { label: "Limited or no formal analysis", value: "limited", points: 1 },
        { label: "Basic comparison of estimated vs. actual costs", value: "basic", points: 2 },
        { label: "Structured analysis for selected projects", value: "structured", points: 3 },
        { label: "Comprehensive analysis with statistical methods", value: "comprehensive", points: 4 },
      ]
    },
    {
      id: "q8",
      text: "How do you forecast production rates for new projects?",
      options: [
        { label: "Industry standards or rules of thumb", value: "industry", points: 1 },
        { label: "General company experience", value: "general", points: 2 },
        { label: "Historical averages from similar projects", value: "historical", points: 3 },
        { label: "Statistical analysis with confidence intervals", value: "statistical", points: 4 },
      ]
    },
    {
      id: "q9",
      text: "How do you make bid/no-bid decisions?",
      options: [
        { label: "Gut feeling/experience", value: "gut", points: 1 },
        { label: "Basic criteria checklist", value: "basic", points: 2 },
        { label: "Formal scoring system", value: "formal", points: 3 },
        { label: "Data-driven analysis with multiple factors", value: "data-driven", points: 4 },
      ]
    },
    {
      id: "q10",
      text: "How is estimating knowledge transferred in your organization?",
      options: [
        { label: "On-the-job learning", value: "on-job", points: 1 },
        { label: "Informal mentoring", value: "mentoring", points: 2 },
        { label: "Structured training program", value: "structured", points: 3 },
        { label: "Comprehensive development with certification", value: "comprehensive", points: 4 },
      ]
    },
    {
      id: "q11",
      text: "What happens when experienced estimators leave your company?",
      options: [
        { label: "Significant knowledge loss", value: "significant", points: 1 },
        { label: "Some documentation but substantial impact", value: "substantial", points: 2 },
        { label: "Key information documented but nuances lost", value: "documented", points: 3 },
        { label: "Minimal impact due to knowledge management systems", value: "minimal", points: 4 },
      ]
    },
    {
      id: "q12",
      text: "How confident are your estimators in their productivity assumptions?",
      options: [
        { label: "Limited confidence (high contingencies)", value: "limited", points: 1 },
        { label: "Moderate confidence for familiar work", value: "moderate", points: 2 },
        { label: "Good confidence with some uncertainty", value: "good", points: 3 },
        { label: "High confidence based on data analysis", value: "high", points: 4 },
      ]
    },
  ]);
  
  const [score, setScore] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState<boolean>(false);

  const sectionQuestions = {
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
              <>
                <Card className="border-pelican-teal/20 shadow-sm bg-white">
                  <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-md">
                    <CardTitle className="text-[24px] font-heading font-medium">Estimating Maturity Self-Assessment</CardTitle>
                    <CardDescription className="text-white/90">
                      Answer all questions to receive your personalized assessment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-pelican-slate mb-6">
                      This interactive questionnaire helps you evaluate your current estimating capabilities 
                      and identify areas for improvement. Select the option that best describes your organization's 
                      current practice for each question.
                    </p>
                    
                    <div className="mb-2 flex justify-between text-sm text-pelican-slate">
                      <div>Your progress: {questions.filter(q => q.selectedOption).length} of 12 questions answered</div>
                      <div>Current score: {score} points</div>
                    </div>
                    
                    <div className="w-full bg-pelican-lightGray rounded-full h-2 mb-8">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-pelican-navy to-pelican-teal"
                        style={{ width: `${(questions.filter(q => q.selectedOption).length / questions.length) * 100}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-6 lg:space-y-[24px]">
                  <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 1: Process & Methodology</h2>
                  <QuestionSection 
                    title="Process Structure and Documentation" 
                    questions={sectionQuestions.processMethodology}
                    onChange={handleOptionChange}
                  />
                  
                  <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 2: Data & Technology</h2>
                  <QuestionSection 
                    title="Tools and Systems" 
                    questions={sectionQuestions.dataTechnology}
                    onChange={handleOptionChange}
                  />
                  
                  <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 3: Analysis & Decision Making</h2>
                  <QuestionSection 
                    title="Analytical Approaches" 
                    questions={sectionQuestions.analysisDecision}
                    onChange={handleOptionChange}
                  />
                  
                  <h2 className="text-2xl lg:text-[24px] font-heading font-medium text-pelican-navy mb-4">Section 4: Team & Knowledge</h2>
                  <QuestionSection 
                    title="Knowledge Management" 
                    questions={sectionQuestions.teamKnowledge}
                    onChange={handleOptionChange}
                  />
                  
                  <div className="mt-8 flex justify-center">
                    <Button 
                      size="lg"
                      onClick={handleSubmit} 
                      disabled={!allQuestionsAnswered}
                      variant="primary"
                      className="px-8 py-3"
                    >
                      View My Results
                    </Button>
                  </div>
                  
                  {!allQuestionsAnswered && (
                    <p className="text-center text-orange-500 mt-4">
                      Please answer all questions to view your results
                    </p>
                  )}
                </div>
              </>
            ) : (
              <ResultsDisplay score={score} onReset={handleReset} />
            )}
          </TabsContent>
          
          <TabsContent value="about">
            <Card className="border-pelican-teal/20 shadow-sm">
              <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-md">
                <CardTitle className="text-[24px] font-heading font-medium">About the Assessment Tool</CardTitle>
                <CardDescription className="text-white/90">
                  Understanding the evaluation methodology
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Purpose</h3>
                <p className="text-pelican-slate mb-6">
                  This assessment tool is designed to help construction companies evaluate their current estimating capabilities
                  against industry best practices. It provides a structured framework to identify strengths and areas for improvement
                  in your estimating processes.
                </p>
                
                <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Methodology</h3>
                <p className="text-pelican-slate mb-6">
                  The assessment is divided into four key areas that contribute to estimating excellence: 
                  Process & Methodology, Data & Technology, Analysis & Decision Making, and Team & Knowledge.
                  Each question evaluates a specific aspect of estimating maturity on a scale from foundational to optimized practices.
                </p>
                
                <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Scoring System</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                    <h4 className="text-[18px] font-heading font-medium text-pelican-navy mb-2">Foundational Stage (12-19 points)</h4>
                    <p className="text-sm text-pelican-slate">
                      Your estimating process has significant opportunity for improvement through systematization 
                      and data utilization. Focus on documenting processes and centralizing historical information.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                    <h4 className="text-[18px] font-heading font-medium text-pelican-navy mb-2">Developing Stage (20-29 points)</h4>
                    <p className="text-sm text-pelican-slate">
                      You have established basics but could benefit from improved analytics and integration. 
                      Focus on connecting your existing data and developing more sophisticated analysis.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                    <h4 className="text-[18px] font-heading font-medium text-pelican-navy mb-2">Advanced Stage (30-39 points)</h4>
                    <p className="text-sm text-pelican-slate">
                      Your estimating capabilities are strong but could be enhanced with predictive analytics 
                      and deeper integration. Focus on statistical analysis and strategic intelligence.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                    <h4 className="text-[18px] font-heading font-medium text-pelican-navy mb-2">Optimized Stage (40-48 points)</h4>
                    <p className="text-sm text-pelican-slate">
                      Your estimating function is highly mature. Focus on continuous refinement and 
                      cutting-edge analytics to maintain your competitive advantage.
                    </p>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Benefits</h3>
                    <ul className="space-y-2 text-pelican-slate list-disc pl-5">
                      <li>Identify strengths and weaknesses in your estimating processes</li>
                      <li>Benchmark your capabilities against industry best practices</li>
                      <li>Develop a roadmap for estimating improvement</li>
                      <li>Gain insights into potential technology investments</li>
                      <li>Prioritize process improvements that will yield the greatest returns</li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Next Steps</h3>
                    <ul className="space-y-2 text-pelican-slate list-disc pl-5">
                      <li>Complete the assessment to receive your score and recommendations</li>
                      <li>Request a detailed report with personalized improvement strategies</li>
                      <li>Schedule a consultation to discuss your results with an expert</li>
                      <li>Develop an action plan based on the assessment findings</li>
                      <li>Implement targeted improvements to enhance your estimating capabilities</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-pelican-lightGray/30 p-6 rounded-md border border-pelican-cream">
                  <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Ready to Assess Your Estimating Maturity?</h3>
                  <p className="text-pelican-slate mb-4">
                    Switch to the Self-Assessment tab to evaluate your current estimating processes and identify opportunities for improvement.
                  </p>
                  <Button 
                    onClick={() => setCurrentTab("assessment")}
                    variant="primary"
                  >
                    Start Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-pelican-navy" />
            </div>
            <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-2">Self-Assessment</h3>
            <p className="text-pelican-slate">Complete the questionnaire to evaluate your current estimating capabilities</p>
          </div>
          
          <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-pelican-navy" />
            </div>
            <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-2">Detailed Report</h3>
            <p className="text-pelican-slate">Receive personalized recommendations based on your assessment results</p>
          </div>
          
          <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-pelican-navy" />
            </div>
            <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-2">Expert Consultation</h3>
            <p className="text-pelican-slate">Schedule a session with an estimating expert to discuss improvement strategies</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EstimatingMaturity;
