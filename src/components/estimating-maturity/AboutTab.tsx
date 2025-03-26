
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, BarChart3, FileText, CheckCircle2, Calendar } from "lucide-react";

interface AboutTabProps {
  onStartAssessment: () => void;
}

const AboutTab = ({
  onStartAssessment
}: AboutTabProps) => {
  return <Card className="border-pelican-teal/20 shadow-sm" animation="fade">
      <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-md">
        <CardTitle className="text-[24px] font-heading font-medium text-slate-50" animation="fade">About the Enhanced Assessment</CardTitle>
        <CardDescription className="text-white/90" animation="delay">
          Our multi-stage approach to evaluating estimating maturity
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3 animate-fade-in">A New Approach to Estimating Maturity</h3>
        <p className="text-pelican-slate mb-6 animate-fade-in animate-delay-200">
          Our enhanced assessment tool provides a personalized evaluation experience, starting with a quick initial assessment 
          that offers immediate insights, followed by an option to continue to a comprehensive assessment tailored to your 
          specific needs and technological sophistication.
        </p>
        
        <div className="mb-8">
          <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3 animate-fade-in">Multi-Stage Assessment Journey</h3>
          <div className="space-y-4 stagger-children">
            <div className="flex items-start gap-4 stagger-item animate-slide-in-right animate-delay-100">
              <div className="bg-accent/10 p-2 rounded-full animate-image-glow">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="text-[18px] font-heading font-medium text-pelican-navy">Initial Quick Assessment</h4>
                <p className="text-pelican-slate text-sm">Complete a 5-minute assessment to receive immediate preliminary insights about your estimating maturity.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 stagger-item animate-slide-in-right animate-delay-200">
              <div className="bg-accent/10 p-2 rounded-full animate-image-glow">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="text-[18px] font-heading font-medium text-pelican-navy">Comprehensive Assessment</h4>
                <p className="text-pelican-slate text-sm">Dive deeper into specific areas of estimating excellence with our full assessment, tailored to your company's profile.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 stagger-item animate-slide-in-right animate-delay-300">
              <div className="bg-accent/10 p-2 rounded-full animate-image-glow">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="text-[18px] font-heading font-medium text-pelican-navy">Detailed Results & Recommendations</h4>
                <p className="text-pelican-slate text-sm">Receive a comprehensive analysis with actionable recommendations prioritized by impact and effort.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 stagger-item animate-slide-in-right animate-delay-400">
              <div className="bg-accent/10 p-2 rounded-full animate-image-glow">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="text-[18px] font-heading font-medium text-pelican-navy">Expert Consultation</h4>
                <p className="text-pelican-slate text-sm">Schedule a consultation with our experts to discuss your results and develop an implementation roadmap.</p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3 animate-fade-in">Assessment Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 stagger-children">
          <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100 stagger-item animate-fade-in animate-delay-100 hover-lift">
            <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-2">Process & Methodology</h4>
            <p className="text-xs text-pelican-slate">
              Evaluates your estimating process structure, documentation, and improvement approaches.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100 stagger-item animate-fade-in animate-delay-200 hover-lift">
            <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-2">Data Architecture</h4>
            <p className="text-xs text-pelican-slate">
              Assesses your data storage, accessibility, and integration between systems.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100 stagger-item animate-fade-in animate-delay-300 hover-lift">
            <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-2">Technology Adoption</h4>
            <p className="text-xs text-pelican-slate">
              Evaluates your technology stack, utilization, and system integrations.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100 stagger-item animate-fade-in animate-delay-400 hover-lift">
            <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-2">Analytics Capabilities</h4>
            <p className="text-xs text-pelican-slate">
              Examines your use of analytics, statistical methods, and decision support.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100 stagger-item animate-fade-in animate-delay-500 hover-lift">
            <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-2">Knowledge Management</h4>
            <p className="text-xs text-pelican-slate">
              Assesses how you capture, transfer, and preserve institutional knowledge.
            </p>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="mt-8 bg-pelican-lightGray/30 p-6 rounded-md border border-pelican-cream animate-fade-in animate-delay-300">
          <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-3">Ready to Assess Your Estimating Maturity?</h3>
          <p className="text-pelican-slate mb-4">
            Start with our quick assessment to receive immediate insights into your estimating processes and identify key opportunities for improvement.
          </p>
          <Button onClick={onStartAssessment} variant="primary" className="group animate-button-pulse">
            Start Quick Assessment
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>;
};

export default AboutTab;
