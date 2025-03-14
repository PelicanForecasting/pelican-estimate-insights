
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface AboutTabProps {
  onStartAssessment: () => void;
}

const AboutTab = ({ onStartAssessment }: AboutTabProps) => {
  return (
    <Card className="border-pelican-teal/20 shadow-sm">
      <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-md">
        <CardTitle className="text-[24px] font-heading font-medium">About the Assessment Tool</CardTitle>
        <CardDescription className="text-white/90">
          Understanding the evaluation methodology
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Purpose</h3>
        <p className="text-pelican-slate mb-6">
          This assessment tool is designed to help construction companies evaluate their current estimating capabilities
          against industry best practices. It provides a structured framework to identify strengths and areas for improvement
          in your estimating processes.
        </p>
        
        <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Methodology</h3>
        <p className="text-pelican-slate mb-6">
          The assessment is divided into four key areas that contribute to estimating excellence: 
          Process & Methodology, Data & Technology, Analysis & Decision Making, and Team & Knowledge.
          Each question evaluates a specific aspect of estimating maturity on a scale from foundational to optimized practices.
        </p>
        
        <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Scoring System</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <h4 className="text-[18px] font-heading font-medium text-pelican-navy mb-2">Foundational Stage (12-19 points)</h4>
            <p className="text-sm text-pelican-slate">
              Your estimating process has significant opportunity for improvement through systematization 
              and data utilization. Focus on documenting processes and centralizing historical information.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <h4 className="text-[18px] font-heading font-medium text-pelican-navy mb-2">Developing Stage (20-29 points)</h4>
            <p className="text-sm text-pelican-slate">
              You have established basics but could benefit from improved analytics and integration. 
              Focus on connecting your existing data and developing more sophisticated analysis.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <h4 className="text-[18px] font-heading font-medium text-pelican-navy mb-2">Advanced Stage (30-39 points)</h4>
            <p className="text-sm text-pelican-slate">
              Your estimating capabilities are strong but could be enhanced with predictive analytics 
              and deeper integration. Focus on statistical analysis and strategic intelligence.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <h4 className="text-[18px] font-heading font-medium text-pelican-navy mb-2">Optimized Stage (40-48 points)</h4>
            <p className="text-sm text-pelican-slate">
              Your estimating function is highly mature. Focus on continuous refinement and 
              cutting-edge analytics to maintain your competitive advantage.
            </p>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Benefits</h3>
            <ul className="space-y-2 text-pelican-slate list-disc pl-5">
              <li>Identify strengths and weaknesses in your estimating processes</li>
              <li>Benchmark your capabilities against industry best practices</li>
              <li>Develop a roadmap for estimating improvement</li>
              <li>Gain insights into potential technology investments</li>
              <li>Prioritize process improvements that will yield the greatest returns</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Next Steps</h3>
            <ul className="space-y-2 text-pelican-slate list-disc pl-5">
              <li>Complete the assessment to receive your score and recommendations</li>
              <li>Request a detailed report with personalized improvement strategies</li>
              <li>Schedule a consultation to discuss your results with an expert</li>
              <li>Develop an action plan based on the assessment findings</li>
              <li>Implement targeted improvements to enhance your estimating capabilities</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-pelican-lightGray/30 p-6 rounded-md border border-pelican-cream">
          <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Ready to Assess Your Estimating Maturity?</h3>
          <p className="text-pelican-slate mb-4">
            Switch to the Self-Assessment tab to evaluate your current estimating processes and identify opportunities for improvement.
          </p>
          <Button 
            onClick={onStartAssessment}
            variant="primary"
          >
            Start Assessment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutTab;
