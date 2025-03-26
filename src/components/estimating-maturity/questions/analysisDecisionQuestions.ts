
import { Question } from '../types';

export const analysisDecisionQuestions: Question[] = [
  {
    id: 'q7',
    text: 'How do you analyze the accuracy of past estimates?',
    category: 'analysisDecision',
    options: [
      { label: 'Minimal formal analysis of past estimates', value: 'minimal', points: 1 },
      { label: 'Basic comparison of estimated vs actual costs', value: 'basic', points: 2 },
      { label: 'Detailed analysis by cost category', value: 'detailed', points: 3 },
      { label: 'Statistical analysis with root cause identification', value: 'statistical', points: 4 }
    ]
  },
  {
    id: 'q8',
    text: 'How do you determine production rates for estimates?',
    category: 'analysisDecision',
    options: [
      { label: 'Primarily based on estimator judgment', value: 'judgment', points: 1 },
      { label: 'Reference to published guides with adjustments', value: 'guides', points: 2 },
      { label: 'Analysis of company historical performance', value: 'historical', points: 3 },
      { label: 'Statistical analysis with confidence intervals', value: 'statistical', points: 4 }
    ]
  },
  {
    id: 'q9',
    text: 'How do you make bid/no-bid decisions?',
    category: 'analysisDecision',
    options: [
      { label: 'Primarily gut feel and relationship based', value: 'gut', points: 1 },
      { label: 'Basic criteria but largely subjective', value: 'basic', points: 2 },
      { label: 'Formal scoring system with multiple factors', value: 'formal', points: 3 },
      { label: 'Data-driven decision framework with analytics', value: 'data-driven', points: 4 }
    ]
  }
];

export const comprehensiveAnalysisDecisionQuestions: Question[] = [
  {
    id: 'comp2',
    text: 'What analytics capabilities do you use for historical data?',
    category: 'analysisDecision',
    options: [
      { label: 'Basic reporting and manual comparison', value: 'basic', points: 1 },
      { label: 'Standard reports with some trend analysis', value: 'standard', points: 2 },
      { label: 'Advanced analytics with statistical methods', value: 'advanced', points: 3 },
      { label: 'Predictive modeling with machine learning', value: 'predictive', points: 4 }
    ]
  }
];
