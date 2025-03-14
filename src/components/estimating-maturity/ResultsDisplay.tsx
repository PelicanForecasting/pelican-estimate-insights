
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckIcon, MailIcon, CalendarIcon } from "lucide-react";

interface ResultsDisplayProps {
  score: number;
  onReset: () => void;
}

const ResultsDisplay = ({ score, onReset }: ResultsDisplayProps) => {
  const [email, setEmail] = React.useState('');
  const [emailSubmitted, setEmailSubmitted] = React.useState(false);
  
  let category = '';
  let description = '';
  
  if (score >= 12 && score <= 19) {
    category = 'Foundational Stage';
    description = 'Your estimating process has significant opportunity for improvement through systematization and data utilization. Focus on documenting processes and centralizing historical information.';
  } else if (score >= 20 && score <= 29) {
    category = 'Developing Stage';
    description = 'You have established basics but could benefit from improved analytics and integration. Focus on connecting your existing data and developing more sophisticated analysis.';
  } else if (score >= 30 && score <= 39) {
    category = 'Advanced Stage';
    description = 'Your estimating capabilities are strong but could be enhanced with predictive analytics and deeper integration. Focus on statistical analysis and strategic intelligence.';
  } else if (score >= 40 && score <= 48) {
    category = 'Optimized Stage';
    description = 'Your estimating function is highly mature. Focus on continuous refinement and cutting-edge analytics to maintain your competitive advantage.';
  }

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubmitted(true);
    // In a real implementation, this would send the email to a server
  };

  return (
    <Card className="mb-8 border-pelican-teal/20 shadow-sm bg-white">
      <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-md">
        <CardTitle className="text-[20px] font-heading font-medium">Your Assessment Results</CardTitle>
        <CardDescription className="text-white/90">
          Your score: {score} points - {category}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="w-full bg-pelican-lightGray rounded-full h-4 mb-4">
            <div 
              className="h-4 rounded-full bg-gradient-to-r from-pelican-navy to-pelican-teal"
              style={{ width: `${(score / 48) * 100}%` }}
            ></div>
          </div>
          
          <div className="grid grid-cols-4 text-xs text-center text-pelican-slate">
            <div>Foundational<br/>(12-19)</div>
            <div>Developing<br/>(20-29)</div>
            <div>Advanced<br/>(30-39)</div>
            <div>Optimized<br/>(40-48)</div>
          </div>
        </div>
        
        <div className="mb-8 p-4 bg-pelican-cream rounded-md">
          <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-2">{category}</h3>
          <p className="text-pelican-slate">{description}</p>
        </div>
        
        {!emailSubmitted ? (
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
        ) : (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
            <CheckIcon className="text-green-500 mt-0.5 mr-2 h-5 w-5 flex-shrink-0" />
            <div>
              <h4 className="text-green-800 font-medium">Report Request Received</h4>
              <p className="text-green-700 text-sm">Your detailed assessment report will be sent to {email} shortly.</p>
            </div>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="secondary-outline" onClick={onReset} className="border-secondary text-secondary hover:bg-secondary/5">
            Retake Assessment
          </Button>
          <Button variant="primary">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Schedule Consultation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;
