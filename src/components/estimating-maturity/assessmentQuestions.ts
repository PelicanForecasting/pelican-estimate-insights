import { Question } from './types';

export const assessmentQuestions: Question[] = [
  {
    id: 'q1',
    text: 'How would you describe your current estimating process?',
    category: 'processMethodology',
    options: [
      { label: 'Ad-hoc with little formal structure', value: 'adhoc', points: 1 },
      { label: 'Basic structure but varies by estimator', value: 'basic', points: 2 },
      { label: 'Standardized process with some exceptions', value: 'standardized', points: 3 },
      { label: 'Fully defined and consistently followed process', value: 'advanced', points: 4 }
    ]
  },
  {
    id: 'q2',
    text: 'How do you document your estimating approach?',
    category: 'processMethodology',
    options: [
      { label: 'Minimal documentation, mostly in estimators\' heads', value: 'minimal', points: 1 },
      { label: 'Basic checklists or guides for some project types', value: 'basic', points: 2 },
      { label: 'Comprehensive documentation for most project types', value: 'comprehensive', points: 3 },
      { label: 'Fully documented with continuous refinement', value: 'advanced', points: 4 }
    ]
  },
  {
    id: 'q3',
    text: 'How do you manage estimating risk and contingency?',
    category: 'processMethodology',
    options: [
      { label: 'Subjective judgment with flat contingency', value: 'subjective', points: 1 },
      { label: 'Basic risk categories with varied contingency', value: 'basic', points: 2 },
      { label: 'Formal risk register with quantified impacts', value: 'formal', points: 3 },
      { label: 'Statistical analysis with probabilistic modeling', value: 'statistical', points: 4 }
    ]
  },
  {
    id: 'q4',
    text: 'How do you store and access historical project data?',
    category: 'dataTechnology',
    options: [
      { label: 'Scattered across personal files and systems', value: 'scattered', points: 1 },
      { label: 'Centralized but not well organized', value: 'centralized', points: 2 },
      { label: 'Structured database with basic search capabilities', value: 'structured', points: 3 },
      { label: 'Integrated system with advanced query capabilities', value: 'integrated', points: 4 }
    ]
  },
  {
    id: 'q5',
    text: 'How are your estimating systems integrated with other business systems?',
    category: 'dataTechnology',
    options: [
      { label: 'No integration, manual data transfer', value: 'none', points: 1 },
      { label: 'Basic integration with some systems', value: 'basic', points: 2 },
      { label: 'Significant integration across key systems', value: 'significant', points: 3 },
      { label: 'Full integration with automated data flow', value: 'full', points: 4 }
    ]
  },
  {
    id: 'q6',
    text: 'How do you handle data standardization across projects?',
    category: 'dataTechnology',
    options: [
      { label: 'No standardization, varies by project/estimator', value: 'none', points: 1 },
      { label: 'Basic templates with some standardization', value: 'basic', points: 2 },
      { label: 'Standardized approach for most project types', value: 'standardized', points: 3 },
      { label: 'Fully standardized with enforced data governance', value: 'advanced', points: 4 }
    ]
  },
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
  },
  {
    id: 'q10',
    text: 'How do you transfer knowledge between estimators?',
    category: 'teamKnowledge',
    options: [
      { label: 'Informal mentoring and on-the-job training', value: 'informal', points: 1 },
      { label: 'Basic documentation and structured training', value: 'basic', points: 2 },
      { label: 'Comprehensive knowledge sharing system', value: 'comprehensive', points: 3 },
      { label: 'Formal knowledge management program', value: 'formal', points: 4 }
    ]
  },
  {
    id: 'q11',
    text: 'How do you ensure consistent estimating approaches across the team?',
    category: 'teamKnowledge',
    options: [
      { label: 'Limited consistency, varies by estimator', value: 'limited', points: 1 },
      { label: 'Basic guidelines with some variation allowed', value: 'basic', points: 2 },
      { label: 'Standardized approach with peer reviews', value: 'standardized', points: 3 },
      { label: 'Fully consistent with continuous calibration', value: 'advanced', points: 4 }
    ]
  },
  {
    id: 'q12',
    text: 'How do you capture and preserve institutional knowledge?',
    category: 'teamKnowledge',
    options: [
      { label: 'Minimal documentation, mostly in people\'s heads', value: 'minimal', points: 1 },
      { label: 'Basic documentation of key processes', value: 'basic', points: 2 },
      { label: 'Comprehensive documentation and training', value: 'comprehensive', points: 3 },
      { label: 'Knowledge base with continuous updates', value: 'advanced', points: 4 }
    ]
  },
  {
    id: 'q13',
    text: 'What is your primary estimating technology platform?',
    category: 'technologyAdoption',
    options: [
      { label: 'Primarily spreadsheets (Excel, Google Sheets)', value: 'spreadsheets', points: 1 },
      { label: 'Basic estimating software', value: 'basic-software', points: 2 },
      { label: 'Advanced estimating software with integrations', value: 'advanced-software', points: 3 },
      { label: 'Enterprise-grade platform with full integration', value: 'enterprise', points: 4 }
    ]
  },
  {
    id: 'q14',
    text: 'How extensively do you utilize your estimating software\'s features?',
    category: 'technologyAdoption',
    options: [
      { label: 'Basic features only (10-25% of capabilities)', value: 'basic', points: 1 },
      { label: 'Moderate usage (25-50% of capabilities)', value: 'moderate', points: 2 },
      { label: 'Advanced usage (50-75% of capabilities)', value: 'advanced', points: 3 },
      { label: 'Expert usage (75-100% of capabilities)', value: 'expert', points: 4 }
    ]
  },
  {
    id: 'q15',
    text: 'How do you approach technology adoption and upgrades?',
    category: 'technologyAdoption',
    options: [
      { label: 'Reactive, only when necessary', value: 'reactive', points: 1 },
      { label: 'Periodic reviews with occasional upgrades', value: 'periodic', points: 2 },
      { label: 'Proactive with regular software evaluations', value: 'proactive', points: 3 },
      { label: 'Strategic roadmap with continuous improvement', value: 'strategic', points: 4 }
    ]
  }
];

export const comprehensiveAssessmentQuestions: Question[] = [
  {
    id: 'comp1',
    text: 'How do you validate quantities during the takeoff process?',
    category: 'processMethodology',
    options: [
      { label: 'Limited verification, primarily estimator judgment', value: 'limited', points: 1 },
      { label: 'Basic cross-checks on major quantities', value: 'basic', points: 2 },
      { label: 'Systematic verification with standardized approach', value: 'systematic', points: 3 },
      { label: 'Multi-level verification with automated checks', value: 'advanced', points: 4 }
    ]
  },
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
  },
  {
    id: 'comp3',
    text: 'How do you integrate BIM/3D models with your estimating process?',
    category: 'technologyAdoption',
    options: [
      { label: 'Limited or no BIM integration', value: 'limited', points: 1 },
      { label: 'Basic quantity extraction from models', value: 'basic', points: 2 },
      { label: 'Integrated BIM-based takeoff process', value: 'integrated', points: 3 },
      { label: 'Full 5D BIM integration with cost and schedule', value: 'full', points: 4 }
    ]
  },
  {
    id: 'comp4',
    text: 'How do you handle data security and access control?',
    category: 'dataTechnology',
    options: [
      { label: 'Basic file permissions, limited controls', value: 'basic', points: 1 },
      { label: 'Standard security protocols with user roles', value: 'standard', points: 2 },
      { label: 'Advanced permission structure and auditing', value: 'advanced', points: 3 },
      { label: 'Enterprise-grade security framework', value: 'enterprise', points: 4 }
    ]
  },
  {
    id: 'comp5',
    text: 'How do you approach continuous learning for estimating staff?',
    category: 'teamKnowledge',
    options: [
      { label: 'Ad-hoc training, primarily on-the-job', value: 'adhoc', points: 1 },
      { label: 'Periodic training sessions as needed', value: 'periodic', points: 2 },
      { label: 'Structured development program with goals', value: 'structured', points: 3 },
      { label: 'Comprehensive learning paths with certification', value: 'comprehensive', points: 4 }
    ]
  }
];
