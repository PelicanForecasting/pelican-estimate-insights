
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, ChevronRight, Clock } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <Card className="border-pelican-teal/20 shadow-sm">
      <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-md">
        <CardTitle className="text-[24px] font-heading font-medium text-slate-50">Welcome to Our Estimating Maturity Assessment</CardTitle>
        <CardDescription className="text-white/90">
          Gain valuable insights about your estimating processes in just 5 minutes
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">What to Expect</h3>
          <p className="text-pelican-slate mb-4">
            Our assessment provides valuable insights to help you identify strengths and opportunities in your estimating processes. 
            You'll start with a quick assessment that takes about 5 minutes to complete, followed by personalized recommendations.
          </p>
          
          <div className="flex items-center gap-2 text-accent mb-4">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Estimated time: 5 minutes</span>
          </div>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-blue-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Why complete this assessment?</h3>
              <div className="mt-2 text-sm text-blue-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Benchmark your estimating capabilities against industry standards</li>
                  <li>Identify specific opportunities for improvement in your processes</li>
                  <li>Receive personalized recommendations based on your results</li>
                  <li>Get a prioritized action plan to enhance your estimating effectiveness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-pelican-lightGray/30 p-6 rounded-md border border-pelican-cream text-center">
          <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Ready to Get Started?</h3>
          <p className="text-pelican-slate mb-4">
            We'll first collect some basic information about your company to personalize your assessment experience.
          </p>
          <Button onClick={onStart} variant="primary" size="lg" className="group">
            Begin Assessment
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeScreen;
