
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MailIcon, CheckIcon } from 'lucide-react';

interface EmailReportFormProps {
  onSubmit: (email: string) => void;
}

const EmailReportForm: React.FC<EmailReportFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubmitted(true);
    onSubmit(email);
    // In a real implementation, this would send the email to a server
  };

  if (emailSubmitted) {
    return (
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
        <CheckIcon className="text-green-500 mt-0.5 mr-2 h-5 w-5 flex-shrink-0" />
        <div>
          <h4 className="text-green-800 font-medium">Report Request Received</h4>
          <p className="text-green-700 text-sm">Your detailed assessment report will be sent to {email} shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h4 className="text-[18px] font-heading font-medium text-pelican-navy mb-3">Get Your Detailed Assessment Report</h4>
      <form onSubmit={handleSubmitEmail} className="space-y-4">
        <div>
          <Label htmlFor="email">Email Address</Label>
          <div className="flex gap-2 mt-1.5">
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-sm"
              required
            />
            <Button type="submit" variant="primary">
              <MailIcon className="mr-2 h-4 w-4" />
              Send Report
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailReportForm;
