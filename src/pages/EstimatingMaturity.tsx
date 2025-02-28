
import React, { useState } from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/sections/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

type Question = {
  id: number;
  text: string;
  options: {
    value: string;
    label: string;
    score: number;
  }[];
};

type Category = {
  id: number;
  title: string;
  description: string;
  questions: Question[];
};

type MaturityLevel = {
  level: string;
  range: [number, number];
  description: string;
  recommendations: string[];
};

const EstimatingMaturity = () => {
  const { toast } = useToast();
  const [currentCategory, setCurrentCategory] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentStep, setCurrentStep] = useState<'intro' | 'assessment' | 'results'>('intro');

  // Assessment categories
  const categories: Category[] = [
    {
      id: 1,
      title: "Organizational Structure & Strategy",
      description: "How your estimating department is organized and integrated with other business functions",
      questions: [
        {
          id: 1,
          text: "How is your estimating function structured within your organization?",
          options: [
            { value: "a", label: "No dedicated estimating resources; project managers or executives handle estimates ad-hoc", score: 1 },
            { value: "b", label: "Part-time estimator(s) who also perform other duties", score: 2 },
            { value: "c", label: "Dedicated estimating staff, but no formal department structure", score: 3 },
            { value: "d", label: "Formal estimating department with defined roles and reporting structure", score: 4 },
            { value: "e", label: "Strategic estimating department that informs business development and company direction", score: 5 },
          ]
        },
        {
          id: 2,
          text: "How does estimating integrate with other business functions?",
          options: [
            { value: "a", label: "Little to no formal integration with other departments", score: 1 },
            { value: "b", label: "Basic handoff procedures between estimating and operations", score: 2 },
            { value: "c", label: "Regular coordination with operations, purchasing, and project management", score: 3 },
            { value: "d", label: "Formal integration processes with all relevant departments", score: 4 },
            { value: "e", label: "Full integration in a collaborative environment with shared goals and metrics", score: 5 },
          ]
        },
        {
          id: 3,
          text: "How are estimating goals aligned with organizational strategy?",
          options: [
            { value: "a", label: "No clear connection between estimating and company strategy", score: 1 },
            { value: "b", label: "Basic understanding of how estimating supports business goals", score: 2 },
            { value: "c", label: "Estimating department has defined goals tied to company objectives", score: 3 },
            { value: "d", label: "Estimating strategy is a key component of overall business planning", score: 4 },
            { value: "e", label: "Estimating is viewed as a strategic function that drives company direction and growth", score: 5 },
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Process & Methodology",
      description: "The systems and approaches used to develop estimates",
      questions: [
        {
          id: 4,
          text: "What level of standardization exists in your estimating processes?",
          options: [
            { value: "a", label: "No standardized processes; each estimate is approached differently", score: 1 },
            { value: "b", label: "Basic templates exist but are inconsistently used", score: 2 },
            { value: "c", label: "Standardized processes for most estimate types", score: 3 },
            { value: "d", label: "Comprehensive, documented processes with quality control steps", score: 4 },
            { value: "e", label: "Fully standardized, continuously improved processes with regular audits", score: 5 },
          ]
        },
        {
          id: 5,
          text: "How do you develop and maintain estimating cost databases?",
          options: [
            { value: "a", label: "No formal cost database; rely primarily on vendor quotes", score: 1 },
            { value: "b", label: "Basic cost library with minimal updating", score: 2 },
            { value: "c", label: "Maintained cost database updated at regular intervals", score: 3 },
            { value: "d", label: "Comprehensive cost database with formal update procedures and validation", score: 4 },
            { value: "e", label: "Dynamic cost database integrated with historical project data and external indices", score: 5 },
          ]
        },
        {
          id: 6,
          text: "How do you approach risk assessment and contingency development?",
          options: [
            { value: "a", label: "No formal risk assessment; standard markup used for all projects", score: 1 },
            { value: "b", label: "Basic risk consideration with simple contingency percentages", score: 2 },
            { value: "c", label: "Identified risks with appropriate contingencies for each project", score: 3 },
            { value: "d", label: "Formal risk register with quantified impacts and tailored contingencies", score: 4 },
            { value: "e", label: "Advanced risk modeling with statistical methods and scenario analysis", score: 5 },
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Technology & Tools",
      description: "The software and technical resources used to support estimating functions",
      questions: [
        {
          id: 7,
          text: "What estimating software do you currently utilize?",
          options: [
            { value: "a", label: "Spreadsheets only (Excel or similar)", score: 1 },
            { value: "b", label: "Basic estimating software with limited features", score: 2 },
            { value: "c", label: "Industry-standard estimating software", score: 3 },
            { value: "d", label: "Advanced estimating software with integration to other systems", score: 4 },
            { value: "e", label: "Enterprise-level integrated estimating platform with business intelligence capabilities", score: 5 },
          ]
        },
        {
          id: 8,
          text: "How do you leverage technology for takeoffs and quantity development?",
          options: [
            { value: "a", label: "Manual takeoffs from paper plans", score: 1 },
            { value: "b", label: "Basic digital takeoff tools with limited functionality", score: 2 },
            { value: "c", label: "Standard digital takeoff software regularly used", score: 3 },
            { value: "d", label: "Advanced takeoff tools integrated with estimating software", score: 4 },
            { value: "e", label: "Automated quantity extraction from BIM models with verification workflows", score: 5 },
          ]
        },
        {
          id: 9,
          text: "How are estimating data and insights shared across the organization?",
          options: [
            { value: "a", label: "Manual distribution of PDFs or printed estimates", score: 1 },
            { value: "b", label: "Digital file sharing with basic organization", score: 2 },
            { value: "c", label: "Centralized digital repository with structured access", score: 3 },
            { value: "d", label: "Integrated systems allowing controlled access across departments", score: 4 },
            { value: "e", label: "Real-time dashboards and analytics accessible to all stakeholders", score: 5 },
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Talent & Training",
      description: "The skills, capabilities, and development of estimating personnel",
      questions: [
        {
          id: 10,
          text: "What is the experience level of your estimating team?",
          options: [
            { value: "a", label: "Limited estimating experience; primarily learning on the job", score: 1 },
            { value: "b", label: "Mix of entry-level and moderately experienced estimators", score: 2 },
            { value: "c", label: "Solid team with good industry experience", score: 3 },
            { value: "d", label: "Highly experienced team with specialized expertise", score: 4 },
            { value: "e", label: "Industry-leading experts with diverse experience and specializations", score: 5 },
          ]
        },
        {
          id: 11,
          text: "What professional development exists for estimating personnel?",
          options: [
            { value: "a", label: "No formal training program; learn through experience only", score: 1 },
            { value: "b", label: "Occasional training when requested", score: 2 },
            { value: "c", label: "Regular internal and external training opportunities", score: 3 },
            { value: "d", label: "Structured development program with clear advancement paths", score: 4 },
            { value: "e", label: "Comprehensive talent development strategy with mentoring, certification support, and leadership preparation", score: 5 },
          ]
        },
        {
          id: 12,
          text: "How do you measure and incentivize estimator performance?",
          options: [
            { value: "a", label: "No formal performance metrics for estimators", score: 1 },
            { value: "b", label: "Basic productivity metrics (estimates completed, etc.)", score: 2 },
            { value: "c", label: "Performance measured against established standards", score: 3 },
            { value: "d", label: "Comprehensive performance metrics tied to project outcomes", score: 4 },
            { value: "e", label: "Sophisticated performance evaluation system with both individual and team incentives tied to company success", score: 5 },
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Performance & Analytics",
      description: "How estimate accuracy is measured and improved over time",
      questions: [
        {
          id: 13,
          text: "How do you track and analyze estimate accuracy?",
          options: [
            { value: "a", label: "Little to no tracking of estimate vs. actual costs", score: 1 },
            { value: "b", label: "Basic comparison of final costs to estimates", score: 2 },
            { value: "c", label: "Regular cost analysis with organized variance tracking", score: 3 },
            { value: "d", label: "Detailed variance analysis by cost category with root cause assessment", score: 4 },
            { value: "e", label: "Sophisticated analytics system that identifies patterns and automatically suggests process improvements", score: 5 },
          ]
        },
        {
          id: 14,
          text: "How are estimating lessons learned captured and applied?",
          options: [
            { value: "a", label: "No formal process for capturing lessons learned", score: 1 },
            { value: "b", label: "Occasional informal discussions about past projects", score: 2 },
            { value: "c", label: "Regular post-project reviews with documented lessons", score: 3 },
            { value: "d", label: "Structured knowledge management system for estimating insights", score: 4 },
            { value: "e", label: "Comprehensive continuous improvement program with measurable implementation of lessons learned", score: 5 },
          ]
        },
        {
          id: 15,
          text: "How do you evaluate bid performance and market position?",
          options: [
            { value: "a", label: "Minimal awareness of competitive position", score: 1 },
            { value: "b", label: "Basic tracking of win rates", score: 2 },
            { value: "c", label: "Regular analysis of bid results with market comparisons", score: 3 },
            { value: "d", label: "Detailed competitive analysis with strategic bid positioning", score: 4 },
            { value: "e", label: "Advanced market intelligence system that informs strategic bidding and identifies optimal project opportunities", score: 5 },
          ]
        }
      ]
    }
  ];

  // Maturity levels with descriptions
  const maturityLevels: MaturityLevel[] = [
    {
      level: "Level 1: Initial",
      range: [1, 1.8],
      description: "Estimating processes are largely ad-hoc and reactive. Success depends primarily on individual effort rather than established systems.",
      recommendations: [
        "Designate dedicated estimating resources",
        "Develop basic templates and checklists",
        "Invest in basic estimating software",
        "Begin tracking estimate accuracy"
      ]
    },
    {
      level: "Level 2: Developing",
      range: [1.81, 2.6],
      description: "Basic estimating processes exist but may be inconsistently applied. Some standardization is present but significant variation remains.",
      recommendations: [
        "Formalize estimating procedures and standards",
        "Develop a structured cost database",
        "Implement regular team training sessions",
        "Establish a basic bid/no-bid decision process"
      ]
    },
    {
      level: "Level 3: Defined",
      range: [2.61, 3.4],
      description: "Standard estimating processes are defined and generally followed. Consistent approaches are used across most projects.",
      recommendations: [
        "Integrate estimating with other business functions",
        "Enhance risk assessment methodologies",
        "Implement more advanced software solutions",
        "Develop formal performance metrics"
      ]
    },
    {
      level: "Level 4: Managed",
      range: [3.41, 4.2],
      description: "Estimating processes are well-defined and measured. Data-driven decisions inform continuous improvements.",
      recommendations: [
        "Implement advanced analytics for estimate performance",
        "Develop specialized expertise within the team",
        "Create strategic integration with business development",
        "Establish sophisticated knowledge management systems"
      ]
    },
    {
      level: "Level 5: Optimizing",
      range: [4.21, 5],
      description: "Estimating is a strategic function with continuous optimization. Innovative approaches drive competitive advantage and business growth.",
      recommendations: [
        "Develop predictive analytics capabilities",
        "Pioneer new estimation methodologies",
        "Create industry thought leadership",
        "Invest in cutting-edge technology solutions"
      ]
    }
  ];

  const handleOptionChange = (questionId: number, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    // Find the option to get the score
    const category = categories.find(cat => 
      cat.questions.some(q => q.id === questionId)
    );
    
    if (category) {
      const question = category.questions.find(q => q.id === questionId);
      if (question) {
        const option = question.options.find(opt => opt.value === value);
        if (option) {
          const newScores = { ...scores, [questionId]: option.score };
          setScores(newScores);
        }
      }
    }
  };

  const handleNext = () => {
    const categoryQuestions = categories[currentCategory].questions;
    const allAnswered = categoryQuestions.every(q => answers[q.id]);
    
    if (!allAnswered) {
      toast({
        title: "Please answer all questions",
        description: "All questions in this section must be answered before proceeding.",
        variant: "destructive"
      });
      return;
    }
    
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
      window.scrollTo(0, 0);
    } else {
      setShowResults(true);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
      window.scrollTo(0, 0);
    }
  };

  const startAssessment = () => {
    setCurrentStep('assessment');
    window.scrollTo(0, 0);
  };

  const viewResults = () => {
    setCurrentStep('results');
    window.scrollTo(0, 0);
  };

  // Calculate scores by category and overall
  const calculateCategoryScore = (categoryId: number) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return 0;
    
    let totalScore = 0;
    let answeredQuestions = 0;
    
    category.questions.forEach(question => {
      if (scores[question.id]) {
        totalScore += scores[question.id];
        answeredQuestions++;
      }
    });
    
    return answeredQuestions > 0 ? totalScore / answeredQuestions : 0;
  };

  const calculateOverallScore = () => {
    let totalScore = 0;
    let totalQuestions = 0;
    
    categories.forEach(category => {
      category.questions.forEach(question => {
        if (scores[question.id]) {
          totalScore += scores[question.id];
          totalQuestions++;
        }
      });
    });
    
    return totalQuestions > 0 ? totalScore / totalQuestions : 0;
  };

  const getMaturityLevel = (score: number) => {
    return maturityLevels.find(level => 
      score >= level.range[0] && score <= level.range[1]
    ) || maturityLevels[0];
  };

  const overallScore = calculateOverallScore();
  const maturityLevel = getMaturityLevel(overallScore);
  const percentageScore = (overallScore / 5) * 100;

  const isCurrentCategoryComplete = () => {
    const categoryQuestions = categories[currentCategory].questions;
    return categoryQuestions.every(q => answers[q.id]);
  };

  const calculateProgress = () => {
    const totalQuestions = categories.reduce((sum, cat) => sum + cat.questions.length, 0);
    const answeredQuestions = Object.keys(answers).length;
    return (answeredQuestions / totalQuestions) * 100;
  };

  const renderIntroduction = () => (
    <div className="max-w-3xl mx-auto">
      <Card className="mb-8 border-pelican-teal/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white">
          <CardTitle className="text-2xl">Estimating Maturity Assessment</CardTitle>
          <CardDescription className="text-white/80">
            Evaluate your organization's estimating capabilities and identify opportunities for improvement
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <p>
              Welcome to the Pelican Forecasting Estimating Maturity Assessment. This tool helps construction companies 
              evaluate their current estimating practices across five key dimensions and identify opportunities for improvement.
            </p>
            
            <h3 className="text-lg font-medium text-pelican-navy">What This Assessment Covers:</h3>
            <ul className="list-disc pl-5 space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <span className="font-medium">{category.title}</span>: {category.description}
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-medium text-pelican-navy">How It Works:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Answer 15 questions across five categories</li>
              <li>Receive a detailed maturity rating on a 1-5 scale</li>
              <li>Get customized recommendations based on your results</li>
              <li>Use insights to develop an improvement roadmap</li>
            </ol>
            
            <p className="text-sm text-gray-500 mt-4">
              Your responses are confidential and will only be used to generate your assessment results.
              The assessment takes approximately 10-15 minutes to complete.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-gray-100 pt-6">
          <Button 
            onClick={startAssessment}
            className="bg-gradient-to-r from-pelican-navy to-pelican-teal hover:opacity-90 text-white px-8 py-2"
          >
            Start Assessment
          </Button>
        </CardFooter>
      </Card>
    </div>
  );

  const renderAssessment = () => (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-pelican-navy mb-2">
          {categories[currentCategory].title}
        </h2>
        <p className="text-gray-600 mb-4">
          {categories[currentCategory].description}
        </p>
        <div className="mb-6">
          <Progress value={calculateProgress()} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Progress: {Math.round(calculateProgress())}%</span>
            <span>Category {currentCategory + 1} of {categories.length}</span>
          </div>
        </div>
      </div>
      
      <Card className="mb-8 border-pelican-teal/20 shadow-md">
        <CardContent className="pt-6">
          {categories[currentCategory].questions.map((question, index) => (
            <div key={question.id} className={index > 0 ? "mt-8 pt-8 border-t border-gray-100" : ""}>
              <h3 className="text-lg font-medium text-pelican-navy mb-4">
                {index + 1}. {question.text}
              </h3>
              
              <RadioGroup
                value={answers[question.id] || ""}
                onValueChange={(value) => handleOptionChange(question.id, value)}
                className="space-y-3"
              >
                {question.options.map((option) => (
                  <div key={option.value} className="flex items-start space-x-2 rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                    <RadioGroupItem value={option.value} id={`q${question.id}-${option.value}`} className="mt-1" />
                    <Label
                      htmlFor={`q${question.id}-${option.value}`}
                      className="flex-grow cursor-pointer text-gray-700"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between border-t border-gray-100 pt-6">
          <Button
            onClick={handlePrevious}
            variant="outline"
            disabled={currentCategory === 0}
          >
            Previous
          </Button>
          
          {currentCategory < categories.length - 1 ? (
            <Button 
              onClick={handleNext}
              disabled={!isCurrentCategoryComplete()}
              className="bg-gradient-to-r from-pelican-navy to-pelican-teal hover:opacity-90 text-white"
            >
              Next
            </Button>
          ) : (
            <Button 
              onClick={viewResults}
              disabled={!isCurrentCategoryComplete()}
              className="bg-gradient-to-r from-pelican-navy to-pelican-teal hover:opacity-90 text-white"
            >
              View Results
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );

  const renderResults = () => (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8 border-pelican-teal/20 shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white">
          <CardTitle className="text-2xl">Your Estimating Maturity Results</CardTitle>
          <CardDescription className="text-white/80">
            Based on your responses to the assessment questions
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-pelican-navy mb-2">Overall Maturity Level</h3>
            <div className="text-3xl font-bold text-pelican-teal mb-3">
              {maturityLevel.level}
            </div>
            <div className="max-w-md mx-auto mb-4">
              <Progress value={percentageScore} className="h-3" />
              <div className="flex justify-between mt-1 text-sm">
                <span>Basic</span>
                <span>Developing</span>
                <span>Advanced</span>
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {maturityLevel.description}
            </p>
          </div>
          
          <Separator className="my-8" />
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-pelican-navy mb-4">Category Breakdown</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const score = calculateCategoryScore(category.id);
                const categoryLevel = getMaturityLevel(score);
                return (
                  <Card key={category.id} className="border border-gray-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Score: {score.toFixed(1)}</span>
                        <span className="text-sm font-medium">Level {Math.ceil(score)}</span>
                      </div>
                      <Progress value={(score / 5) * 100} className="h-2" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div>
            <h3 className="text-xl font-bold text-pelican-navy mb-4">Recommendations</h3>
            <p className="text-gray-600 mb-6">
              Based on your assessment results, we recommend focusing on these areas to improve your estimating maturity:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {maturityLevel.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-pelican-cream/30">
                  <div className="rounded-full bg-pelican-teal/10 p-1">
                    <svg className="w-5 h-5 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span>{recommendation}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-500 text-center">
            Want to discuss these results and develop a customized improvement plan?
          </p>
          <Button className="bg-gradient-to-r from-pelican-navy to-pelican-teal hover:opacity-90 text-white w-full sm:w-auto sm:self-center">
            <a href="/#contact">Contact Our Consultants</a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-pelican-cream/30">
      <Navbar />
      <main className="flex-grow pt-24 px-4 pb-16">
        {currentStep === 'intro' && renderIntroduction()}
        {currentStep === 'assessment' && renderAssessment()}
        {currentStep === 'results' && renderResults()}
      </main>
      <Footer />
    </div>
  );
};

export default EstimatingMaturity;
