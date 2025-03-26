
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save } from "lucide-react";

interface SaveForLaterFormProps {
  onSaveForLater: (email: string) => void;
}

const SaveForLaterForm: React.FC<SaveForLaterFormProps> = ({ onSaveForLater }) => {
  const [email, setEmail] = useState('');
  const [showSaveForm, setShowSaveForm] = useState(false);
  
  const handleSaveForLater = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSaveForLater(email);
      setShowSaveForm(false);
    }
  };
  
  return (
    <div>
      {!showSaveForm ? (
        <Button 
          variant="outline" 
          className="text-pelican-slate" 
          onClick={() => setShowSaveForm(true)}
        >
          <Save className="mr-2 h-4 w-4" />
          Save for Later
        </Button>
      ) : (
        <form onSubmit={handleSaveForLater} className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Save</Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => setShowSaveForm(false)}
          >
            Cancel
          </Button>
        </form>
      )}
    </div>
  );
};

export default SaveForLaterForm;
