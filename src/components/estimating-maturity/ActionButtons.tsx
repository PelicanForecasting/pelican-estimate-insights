
import React from 'react';
import { Button } from "@/components/ui/button";
import SaveForLaterForm from './SaveForLaterForm';

interface ActionButtonsProps {
  allQuestionsAnswered: boolean;
  onSubmit: () => void;
  onSaveForLater: (email: string) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  allQuestionsAnswered, 
  onSubmit, 
  onSaveForLater 
}) => {
  return (
    <>
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <SaveForLaterForm onSaveForLater={onSaveForLater} />
        
        <Button 
          size="lg"
          onClick={onSubmit} 
          disabled={!allQuestionsAnswered}
          variant="primary"
          className="px-8 py-3"
        >
          View My Comprehensive Results
        </Button>
      </div>
      
      {!allQuestionsAnswered && (
        <p className="text-center text-orange-500 mt-4">
          Please answer all questions to view your comprehensive results
        </p>
      )}
    </>
  );
};

export default ActionButtons;
