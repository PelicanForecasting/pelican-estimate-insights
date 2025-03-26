
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import SaveForLaterForm from './SaveForLaterForm';
import { useToast } from "@/hooks/use-toast";

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
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await onSubmit();
      toast({
        title: "Assessment submitted",
        description: "Your comprehensive assessment has been submitted successfully. Generating results...",
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your assessment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleSaveForLater = async (email: string) => {
    try {
      await onSaveForLater(email);
      toast({
        title: "Progress saved",
        description: "We'll email you a link to continue your comprehensive assessment.",
      });
      return true;
    } catch (error) {
      toast({
        title: "Save failed",
        description: "There was an error saving your progress. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  return (
    <>
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <SaveForLaterForm onSaveForLater={handleSaveForLater} />
        
        <Button 
          size="lg"
          onClick={handleSubmit} 
          disabled={!allQuestionsAnswered || submitting}
          variant="primary"
          className="px-8 py-3"
        >
          {submitting ? "Processing..." : "View My Comprehensive Results"}
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
