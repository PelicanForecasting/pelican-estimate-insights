
export interface Option {
  label: string;
  value: string;
  points: number;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  selectedOption?: string;
  category?: AssessmentCategory;
  additionalInfo?: string;  // For "Tell us more" responses
  confidenceLevel?: number; // How confident user is in their response (1-5)
  impactLevel?: number;     // How significant this is to operations (1-5)
  conditionalDisplay?: {    // For conditional logic
    dependsOn: string;      // Question ID this depends on
    showIfValue: string[];  // Show if the dependsOn question has one of these values
  };
  documentUpload?: boolean; // Whether this question supports document upload
}

export interface SectionQuestions {
  processMethodology: Question[];
  dataTechnology: Question[];
  analysisDecision: Question[];
  teamKnowledge: Question[];
  technologyAdoption: Question[]; // Now required, not optional
}

export type AssessmentCategory = 
  | 'processMethodology' 
  | 'dataTechnology' 
  | 'analysisDecision' 
  | 'teamKnowledge'
  | 'technologyAdoption';

export interface CompanyProfile {
  companyName?: string;
  companySize?: string;
  industrySector?: string;
  yearsInBusiness?: string;
  userRole?: string;
  topPainPoints?: string[];
  technologyStack?: string[];
}

export interface AssessmentState {
  stage: 'welcome' | 'companyProfile' | 'quickAssessment' | 'comprehensiveAssessment' | 'results';
  companyProfile: CompanyProfile;
  quickAssessmentCompleted: boolean;
  comprehensiveAssessmentCompleted: boolean;
  maturityLevel?: 'foundational' | 'developing' | 'advanced' | 'optimized';
  score: number;
  maxPossibleScore: number;
  categoryScores: Record<AssessmentCategory, { score: number, maxPossible: number }>;
}

export interface AssessmentRecommendation {
  id: string;
  title: string;
  description: string;
  category: AssessmentCategory;
  impact: 'low' | 'medium' | 'high';
  effort: 'low' | 'medium' | 'high';
  priority: number; // Calculated based on impact/effort
}
