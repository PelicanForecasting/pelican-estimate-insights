
import { Question } from '../types';

export const technologyAdoptionQuestions: Question[] = [
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

export const comprehensiveTechnologyAdoptionQuestions: Question[] = [
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
  }
];
