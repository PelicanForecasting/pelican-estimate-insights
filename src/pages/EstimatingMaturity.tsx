
import React, { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/sections/Footer';

// Define the question type
type Question = {
  id: number;
  text: string;
  options: string[];
  section: string;
  answer: number | null;
};

// Define the section type
type Section = {
  id: number;
  title: string;
  description: string;
};

const EstimatingMaturity = () => {
  const { toast } = useToast();
  const [currentSection, setCurrentSection] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define the sections
  const sections: Section[] = [
    {
      id: 1,
      title: "Process & Methodology",
      description: "These questions assess how structured and standardized your estimating processes are."
    },
    {
      id: 2,
      title: "Data & Technology",
      description: "These questions evaluate your use of technology and how you manage historical project data."
    },
    {
      id: 3,
      title: "Analysis & Decision Making",
      description: "These questions examine how you analyze data to make estimating decisions."
    },
    {
      id: 4,
      title: "Team & Knowledge",
      description: "These questions assess how knowledge is managed and transferred within your organization."
    }
  ];

  // Define all questions
  const [questions, setQuestions] = useState<Question[]>([
    // Section 1: Process & Methodology
    {
      id: 1,
      text: "How would you describe your current estimating process?",
      options: [
        "Ad-hoc (different approach for each estimate)",
        "Informal (consistent but not documented)",
        "Standardized (documented process followed by all estimators)",
        "Optimized (standardized with continuous improvement)"
      ],
      section: "Process & Methodology",
      answer: null
    },
    {
      id: 2,
      text: "How are estimating standards maintained in your organization?",
      options: [
        "Tribal knowledge (experience-based, not documented)",
        "Basic templates and checklists",
        "Comprehensive estimating manual with standards",
        "Standards with regular review and updates"
      ],
      section: "Process & Methodology",
      answer: null
    },
    {
      id: 3,
      text: "How do you incorporate lessons learned from completed projects?",
      options: [
        "Informally or rarely",
        "Post-project reviews but limited integration into future estimates",
        "Structured feedback process for major projects",
        "Systematic analysis of all projects with database of learnings"
      ],
      section: "Process & Methodology",
      answer: null
    },
    // Section 2: Data & Technology
    {
      id: 4,
      text: "What tools do you currently use for estimating?",
      options: [
        "Spreadsheets (Excel, Google Sheets)",
        "Specialized estimating software (HCSS HeavyBid, etc.)",
        "Custom-built solutions",
        "ERP system with estimating module"
      ],
      section: "Data & Technology",
      answer: null
    },
    {
      id: 5,
      text: "How do you store and access historical project data?",
      options: [
        "Paper records/Filing cabinets",
        "Digital files (folders on server/cloud)",
        "Basic database",
        "Integrated system with search capabilities"
      ],
      section: "Data & Technology",
      answer: null
    },
    {
      id: 6,
      text: "How do your estimating systems connect with other business systems?",
      options: [
        "No integration (manual data transfer)",
        "Limited export/import capabilities",
        "Partial integration with some systems",
        "Full integration across platforms"
      ],
      section: "Data & Technology",
      answer: null
    },
    // Section 3: Analysis & Decision Making
    {
      id: 7,
      text: "How do you analyze the accuracy of past estimates?",
      options: [
        "Limited or no formal analysis",
        "Basic comparison of estimated vs. actual costs",
        "Structured analysis for selected projects",
        "Comprehensive analysis with statistical methods"
      ],
      section: "Analysis & Decision Making",
      answer: null
    },
    {
      id: 8,
      text: "How do you forecast production rates for new projects?",
      options: [
        "Industry standards or rules of thumb",
        "General company experience",
        "Historical averages from similar projects",
        "Statistical analysis with confidence intervals"
      ],
      section: "Analysis & Decision Making",
      answer: null
    },
    {
      id: 9,
      text: "How do you make bid/no-bid decisions?",
      options: [
        "Gut feeling/experience",
        "Basic criteria checklist",
        "Formal scoring system",
        "Data-driven analysis with multiple factors"
      ],
      section: "Analysis & Decision Making",
      answer: null
    },
    // Section 4: Team & Knowledge
    {
      id: 10,
      text: "How is estimating knowledge transferred in your organization?",
      options: [
        "On-the-job learning",
        "Informal mentoring",
        "Structured training program",
        "Comprehensive development with certification"
      ],
      section: "Team & Knowledge",
      answer: null
    },
    {
      id: 11,
      text: "What happens when experienced estimators leave your company?",
      options: [
        "Significant knowledge loss",
        "Some documentation but substantial impact",
        "Key information documented but nuances lost",
        "Minimal impact due to knowledge management systems"
      ],
      section: "Team & Knowledge",
      answer: null
    },
    {
      id: 12,
      text: "How confident are your estimators in their productivity assumptions?",
      options: [
        "Limited confidence (high contingencies)",
        "Moderate confidence for familiar work",
        "Good confidence with some uncertainty",
        "High confidence based on data analysis"
      ],
      section: "Team & Knowledge",
      answer: null
    }
  ]);

  // Get questions for the current section
  const currentQuestions = questions.filter(
    q => q.section === sections[currentSection].title
  );

  // Calculate total score
  const calculateScore = () => {
    const totalScore = questions.reduce((sum, q) => {
      return sum + (q.answer !== null ? q.answer + 1 : 0);
    }, 0);
    setScore(totalScore);
  };

  // Handle answer selection
  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? { ...q, answer: answerIndex } : q
    ));
  };

  // Navigate to the next section
  const nextSection = () => {
    // Check if all questions in the current section are answered
    const unansweredQuestions = currentQuestions.filter(q => q.answer === null);
    
    if (unansweredQuestions.length > 0) {
      toast({
        title: "Please answer all questions",
        description: "You need to answer all questions before proceeding to the next section.",
        variant: "destructive"
      });
      return;
    }

    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo(0, 0);
    } else {
      calculateScore();
      setShowResults(true);
      window.scrollTo(0, 0);
    }
  };

  // Navigate to the previous section
  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo(0, 0);
    }
  };

  // Determine maturity level based on score
  const getMaturityLevel = () => {
    if (score >= 40) return "Optimized Stage";
    if (score >= 30) return "Advanced Stage";
    if (score >= 20) return "Developing Stage";
    return "Foundational Stage";
  };

  // Get description based on maturity level
  const getMaturityDescription = () => {
    switch(getMaturityLevel()) {
      case "Optimized Stage":
        return "Your estimating function is highly mature. Focus on continuous refinement and cutting-edge analytics to maintain your competitive advantage.";
      case "Advanced Stage":
        return "Your estimating capabilities are strong but could be enhanced with predictive analytics and deeper integration. Focus on statistical analysis and strategic intelligence.";
      case "Developing Stage":
        return "You have established basics but could benefit from improved analytics and integration. Focus on connecting your existing data and developing more sophisticated analysis.";
      default:
        return "Your estimating process has significant opportunity for improvement through systematization and data utilization. Focus on documenting processes and centralizing historical information.";
    }
  };

  // Handle form submission for detailed report
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Report request submitted!",
        description: "We'll email your detailed assessment report shortly.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  // Reset the assessment
  const resetAssessment = () => {
    setQuestions(questions.map(q => ({ ...q, answer: null })));
    setCurrentSection(0);
    setShowResults(false);
    setScore(0);
    setEmail('');
    setName('');
    setCompany('');
    window.scrollTo(0, 0);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-pelican-cream">
      <Navbar />
      
      <div className="py-20 bg-pelican-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 reveal">Estimating Maturity Self-Assessment</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto reveal" style={{ transform: 'translateY(20px)' }}>
              Evaluate your current estimating capabilities and discover opportunities for improvement
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {!showResults ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 reveal" style={{ transform: 'translateY(20px)' }}>
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-pelican-navy">
                    Section {currentSection + 1}: {sections[currentSection].title}
                  </h2>
                  <p className="text-pelican-grey mt-2">{sections[currentSection].description}</p>
                </div>
                <div className="text-sm text-pelican-grey">
                  Section {currentSection + 1} of {sections.length}
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-pelican-teal h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="space-y-10">
              {currentQuestions.map((question) => (
                <div key={question.id} className="border-b border-gray-100 pb-8 last:border-0">
                  <h3 className="text-lg md:text-xl font-medium text-pelican-navy mb-4">
                    {question.text}
                  </h3>
                  <div className="space-y-3">
                    {question.options.map((option, index) => (
                      <label 
                        key={index}
                        className={`
                          block p-4 border rounded-lg transition-all cursor-pointer
                          ${question.answer === index 
                            ? 'border-pelican-teal bg-pelican-teal/5 shadow-sm' 
                            : 'border-gray-200 hover:border-pelican-teal/50 hover:bg-gray-50'
                          }
                        `}
                      >
                        <div className="flex items-center">
                          <div className={`
                            w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0
                            ${question.answer === index 
                              ? 'border-pelican-teal' 
                              : 'border-gray-300'
                            }
                          `}>
                            {question.answer === index && (
                              <div className="w-3 h-3 rounded-full bg-pelican-teal"></div>
                            )}
                          </div>
                          <span className="ml-3 text-pelican-navy">{option}</span>
                        </div>
                        <input
                          type="radio"
                          className="sr-only"
                          name={`question-${question.id}`}
                          checked={question.answer === index}
                          onChange={() => handleAnswerSelect(question.id, index)}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex justify-between">
              <button 
                onClick={prevSection}
                disabled={currentSection === 0}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all
                  ${currentSection === 0 
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                    : 'bg-white border border-pelican-navy text-pelican-navy hover:bg-pelican-navy/5'
                  }
                `}
              >
                Previous Section
              </button>
              <button 
                onClick={nextSection}
                className="px-6 py-3 rounded-full font-medium bg-pelican-navy text-white transition-all hover:bg-pelican-teal"
              >
                {currentSection < sections.length - 1 ? 'Next Section' : 'See Results'}
              </button>
            </div>
          </div>
        ) : (
          <div className="reveal" style={{ transform: 'translateY(20px)' }}>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-1 rounded-full bg-pelican-teal/10 text-pelican-teal font-medium text-sm mb-4">
                  Assessment Complete
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-pelican-navy mb-4">
                  Your Estimating Maturity Score: {score}/48
                </h2>
                <p className="text-lg text-pelican-grey">
                  You are at the <span className="font-bold text-pelican-navy">{getMaturityLevel()}</span>
                </p>
              </div>
              
              <div className="mb-8">
                <div className="w-full h-3 bg-gray-200 rounded-full mb-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-1000 bg-gradient-to-r from-pelican-orange to-pelican-teal"
                    style={{ width: `${(score / 48) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-pelican-grey">
                  <span>Foundational</span>
                  <span>Developing</span>
                  <span>Advanced</span>
                  <span>Optimized</span>
                </div>
              </div>
              
              <div className="p-6 bg-pelican-cream/30 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-pelican-navy mb-3">What This Means</h3>
                <p className="text-pelican-grey">
                  {getMaturityDescription()}
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-pelican-navy">Section Breakdown</h3>
                
                {sections.map((section, index) => {
                  const sectionQuestions = questions.filter(q => q.section === section.title);
                  const sectionScore = sectionQuestions.reduce((sum, q) => sum + (q.answer !== null ? q.answer + 1 : 0), 0);
                  const maxScore = sectionQuestions.length * 4;
                  const percentage = (sectionScore / maxScore) * 100;
                  
                  return (
                    <div key={section.id} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium text-pelican-navy">{section.title}</h4>
                        <span className="text-pelican-grey">{sectionScore}/{maxScore} points</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div 
                          className={`h-2 rounded-full ${
                            percentage < 30 ? 'bg-pelican-orange' : 
                            percentage < 60 ? 'bg-yellow-400' : 
                            'bg-pelican-teal'
                          }`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-pelican-navy mb-4">Get Your Detailed Assessment Report</h3>
              <p className="text-pelican-grey mb-6">
                Complete the form below to receive a comprehensive report with personalized recommendations based on your assessment results.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-pelican-navy font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pelican-teal"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-pelican-navy font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pelican-teal"
                    placeholder="Your company name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-pelican-navy font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pelican-teal"
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`pelican-button bg-pelican-navy text-white hover:bg-pelican-teal flex-1 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Get Detailed Report'
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={resetAssessment}
                    className="pelican-button border border-pelican-navy text-pelican-navy hover:bg-pelican-navy/5 flex-1"
                  >
                    Retake Assessment
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-pelican-navy text-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4">Schedule a Free Consultation</h3>
                  <p className="opacity-90 mb-6">
                    Speak with our estimating experts to discuss your assessment results and explore how Pelican Forecasting Group can help you enhance your estimating capabilities.
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-block px-6 py-3 rounded-full font-medium bg-pelican-teal text-white transition-all hover:bg-pelican-orange"
                  >
                    Schedule Now
                  </a>
                </div>
                <div className="md:w-1/3 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                    alt="Construction estimating meeting" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default EstimatingMaturity;
