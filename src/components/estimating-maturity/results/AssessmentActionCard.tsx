
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Award, CalendarIcon } from 'lucide-react';

interface AssessmentActionCardProps {
  isComprehensiveCompleted?: boolean;
  onContinueToComprehensive: () => void;
}

const AssessmentActionCard: React.FC<AssessmentActionCardProps> = ({ 
  isComprehensiveCompleted = false,
  onContinueToComprehensive 
}) => {
  if (!isComprehensiveCompleted) {
    return (
      <div className="p-4 bg-accent/10 rounded-md border border-accent/20 mb-6">
        <div className="flex items-start">
          <FileText className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-1">Continue Your Assessment Journey</h4>
            <p className="text-sm text-pelican-slate mb-3">
              This initial assessment gives you a foundational understanding of your estimating maturity. 
              For a more comprehensive analysis with tailored recommendations, continue to our detailed assessment.
            </p>
            <Button variant="accent" className="group" onClick={onContinueToComprehensive}>
              Continue to Comprehensive Assessment
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-blue-50 rounded-md border border-blue-200 mb-6">
      <div className="flex items-start">
        <Award className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
        <div>
          <h4 className="text-[16px] font-heading font-medium text-blue-800 mb-1">Your Next Steps</h4>
          <p className="text-sm text-blue-700 mb-3">
            Congratulations on completing the comprehensive assessment! Based on your results, we've prepared a custom implementation roadmap for your organization.
          </p>
          <Button variant="primary" className="group">
            Schedule Implementation Consultation
            <CalendarIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentActionCard;
