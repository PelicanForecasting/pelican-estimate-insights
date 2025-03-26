
import { processMethodologyQuestions, comprehensiveProcessMethodologyQuestions } from './processMethodologyQuestions';
import { dataTechnologyQuestions, comprehensiveDataTechnologyQuestions } from './dataTechnologyQuestions';
import { analysisDecisionQuestions, comprehensiveAnalysisDecisionQuestions } from './analysisDecisionQuestions';
import { teamKnowledgeQuestions, comprehensiveTeamKnowledgeQuestions } from './teamKnowledgeQuestions';
import { technologyAdoptionQuestions, comprehensiveTechnologyAdoptionQuestions } from './technologyAdoptionQuestions';
import { Question } from '../types';

// Combine all quick assessment questions
export const assessmentQuestions: Question[] = [
  ...processMethodologyQuestions,
  ...dataTechnologyQuestions,
  ...analysisDecisionQuestions,
  ...teamKnowledgeQuestions,
  ...technologyAdoptionQuestions
];

// Combine all comprehensive assessment questions
export const comprehensiveAssessmentQuestions: Question[] = [
  ...comprehensiveProcessMethodologyQuestions,
  ...comprehensiveDataTechnologyQuestions,
  ...comprehensiveAnalysisDecisionQuestions,
  ...comprehensiveTeamKnowledgeQuestions,
  ...comprehensiveTechnologyAdoptionQuestions
];
