
import { Question } from '../types';

export const dataTechnologyQuestions: Question[] = [
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
  }
];

export const comprehensiveDataTechnologyQuestions: Question[] = [
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
  }
];
