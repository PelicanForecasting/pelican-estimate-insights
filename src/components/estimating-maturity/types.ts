
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
}

export interface SectionQuestions {
  processMethodology: Question[];
  dataTechnology: Question[];
  analysisDecision: Question[];
  teamKnowledge: Question[];
}
