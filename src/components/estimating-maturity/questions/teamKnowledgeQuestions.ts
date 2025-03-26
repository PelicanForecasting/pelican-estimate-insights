
import { Question } from '../types';

export const teamKnowledgeQuestions: Question[] = [
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
  }
];

export const comprehensiveTeamKnowledgeQuestions: Question[] = [
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
