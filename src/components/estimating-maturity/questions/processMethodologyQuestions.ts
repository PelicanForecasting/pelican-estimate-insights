
import { Question } from '../types';

export const processMethodologyQuestions: Question[] = [
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
  }
];

export const comprehensiveProcessMethodologyQuestions: Question[] = [
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
  }
];
