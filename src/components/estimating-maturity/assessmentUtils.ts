
import { AssessmentRecommendation, AssessmentCategory } from './types';

export const calculateMaturityLevel = (score: number): 'foundational' | 'developing' | 'advanced' | 'optimized' => {
  if (score >= 40) return 'optimized';
  if (score >= 30) return 'advanced';
  if (score >= 20) return 'developing';
  return 'foundational';
};

export const getRecommendationsForScore = (score: number): AssessmentRecommendation[] => {
  const recommendations: AssessmentRecommendation[] = [];
  
  // Foundational recommendations (relevant for all)
  recommendations.push(
    {
      id: 'rec1',
      title: 'Document Your Estimating Process',
      description: 'Create a standardized, documented process for all estimators to follow, including templates and checklists.',
      category: 'processMethodology',
      impact: 'high',
      effort: 'medium',
      priority: 1
    },
    {
      id: 'rec2',
      title: 'Centralize Historical Project Data',
      description: 'Create a centralized repository for historical project data that is easily searchable and accessible to all estimators.',
      category: 'dataTechnology',
      impact: 'high',
      effort: 'medium',
      priority: 2
    },
    {
      id: 'rec3',
      title: 'Implement Basic Analytics for Bid Analysis',
      description: 'Develop basic analytics capabilities to analyze bid results and identify patterns in successful vs. unsuccessful bids.',
      category: 'analysisDecision',
      impact: 'medium',
      effort: 'low',
      priority: 3
    }
  );
  
  // Add developing stage recommendations
  if (score < 20) {
    recommendations.push(
      {
        id: 'rec4',
        title: 'Establish Formal Knowledge Transfer Program',
        description: 'Create a structured mentoring program to transfer knowledge from experienced estimators to newer team members.',
        category: 'teamKnowledge',
        impact: 'high',
        effort: 'medium',
        priority: 4
      },
      {
        id: 'rec5',
        title: 'Develop Basic Bid/No-Bid Decision Framework',
        description: 'Create a simple scoring system to evaluate potential projects and make objective bid/no-bid decisions.',
        category: 'analysisDecision',
        impact: 'medium',
        effort: 'low',
        priority: 5
      }
    );
  }
  
  // Add advanced stage recommendations
  if (score >= 20 && score < 30) {
    recommendations.push(
      {
        id: 'rec6',
        title: 'Implement Production Rate Analysis',
        description: 'Develop statistical analysis capabilities to better understand production rate variations and improve accuracy.',
        category: 'analysisDecision',
        impact: 'high',
        effort: 'medium',
        priority: 1
      },
      {
        id: 'rec7',
        title: 'Integrate Estimating and Operations Systems',
        description: 'Create data connections between estimating and project management systems to enable better feedback loops.',
        category: 'dataTechnology',
        impact: 'high',
        effort: 'high',
        priority: 2
      }
    );
  }
  
  // Add optimized stage recommendations
  if (score >= 30) {
    recommendations.push(
      {
        id: 'rec8',
        title: 'Develop Predictive Analytics Capabilities',
        description: 'Implement machine learning models to predict cost overruns and schedule delays based on historical patterns.',
        category: 'analysisDecision',
        impact: 'high',
        effort: 'high',
        priority: 1
      },
      {
        id: 'rec9',
        title: 'Create Advanced Risk Quantification Models',
        description: 'Develop Monte Carlo simulation capabilities to better quantify risk and determine appropriate contingency.',
        category: 'processMethodology',
        impact: 'high',
        effort: 'medium',
        priority: 2
      }
    );
  }
  
  return recommendations;
};
