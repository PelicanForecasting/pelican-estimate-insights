
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CompanyProfile } from './types';
import { Building2, Users, Calendar, Briefcase } from "lucide-react";

interface CompanyProfileFormProps {
  onSubmit: (profile: CompanyProfile) => void;
}

const CompanyProfileForm = ({ onSubmit }: CompanyProfileFormProps) => {
  const [profile, setProfile] = useState<CompanyProfile>({
    topPainPoints: [],
    technologyStack: []
  });
  
  const handleInputChange = (field: keyof CompanyProfile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };
  
  const handlePainPointToggle = (value: string) => {
    setProfile(prev => {
      const currentPainPoints = prev.topPainPoints || [];
      
      if (currentPainPoints.includes(value)) {
        return {
          ...prev,
          topPainPoints: currentPainPoints.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          topPainPoints: [...currentPainPoints, value]
        };
      }
    });
  };
  
  const handleTechStackToggle = (value: string) => {
    setProfile(prev => {
      const currentTechStack = prev.technologyStack || [];
      
      if (currentTechStack.includes(value)) {
        return {
          ...prev,
          technologyStack: currentTechStack.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          technologyStack: [...currentTechStack, value]
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(profile);
  };
  
  // Define pain points
  const painPoints = [
    { id: 'production-rates', label: 'Determining accurate production rates' },
    { id: 'historical-data', label: 'Finding and accessing historical project data' },
    { id: 'knowledge-transfer', label: 'Knowledge transfer when estimators leave' },
    { id: 'bid-nobid', label: 'Making objective bid/no-bid decisions' },
    { id: 'dept-disconnect', label: 'Disconnect between estimating and operations' },
    { id: 'spreadsheet-risk', label: 'Risks associated with complex spreadsheets' },
    { id: 'risk-assessment', label: 'Quantifying risk and determining contingency' },
    { id: 'software-utilization', label: 'Underutilization of estimating software' },
    { id: 'takeoff-consistency', label: 'Inconsistent quantity takeoff approaches' },
    { id: 'experience-gap', label: 'Gap between veteran and newer estimators' },
    { id: 'analysis-paralysis', label: 'Analysis paralysis when estimating complex jobs' },
    { id: 'data-silos', label: 'Data silos across departments' }
  ];
  
  // Define technology stack options
  const techStackOptions = [
    { id: 'excel', label: 'Microsoft Excel' },
    { id: 'heavybid', label: 'HCSS HeavyBid' },
    { id: 'proest', label: 'ProEst' },
    { id: 'planswift', label: 'PlanSwift' },
    { id: 'on-screen', label: 'On-Screen Takeoff' },
    { id: 'bluebeam', label: 'Bluebeam Revu' },
    { id: 'sage', label: 'Sage Estimating' },
    { id: 'viewpoint', label: 'Viewpoint Estimating' },
    { id: 'primavera', label: 'Oracle Primavera' },
    { id: 'custom', label: 'Custom-built solution' },
    { id: 'power-bi', label: 'Power BI' },
    { id: 'tableau', label: 'Tableau' }
  ];

  return (
    <Card className="border-pelican-teal/20 shadow-sm">
      <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-md">
        <CardTitle className="text-[24px] font-heading font-medium text-slate-50">Company Profile</CardTitle>
        <CardDescription className="text-white/90">
          Tell us about your organization to personalize your assessment
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="companyName" className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-pelican-navy" />
                Company Name
              </Label>
              <Input 
                id="companyName" 
                placeholder="Enter your company name"
                value={profile.companyName || ''}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companySize" className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-pelican-navy" />
                  Company Size
                </Label>
                <Select 
                  onValueChange={(value) => handleInputChange('companySize', value)}
                  value={profile.companySize}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (1-50 employees)</SelectItem>
                    <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                    <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="yearsInBusiness" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-pelican-navy" />
                  Years in Business
                </Label>
                <Select 
                  onValueChange={(value) => handleInputChange('yearsInBusiness', value)}
                  value={profile.yearsInBusiness}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select years in business" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-5">0-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="11-20">11-20 years</SelectItem>
                    <SelectItem value="21+">21+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="industrySector" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-pelican-navy" />
                  Industry Sector
                </Label>
                <Select 
                  onValueChange={(value) => handleInputChange('industrySector', value)}
                  value={profile.industrySector}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select primary sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="commercial">Commercial Construction</SelectItem>
                    <SelectItem value="residential">Residential Construction</SelectItem>
                    <SelectItem value="highway">Highway/Transportation</SelectItem>
                    <SelectItem value="industrial">Industrial Construction</SelectItem>
                    <SelectItem value="utilities">Utilities/Energy</SelectItem>
                    <SelectItem value="specialty">Specialty Contractor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="userRole" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-pelican-navy" />
                  Your Role
                </Label>
                <Select 
                  onValueChange={(value) => handleInputChange('userRole', value)}
                  value={profile.userRole}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="estimator">Estimator</SelectItem>
                    <SelectItem value="chief-estimator">Chief Estimator</SelectItem>
                    <SelectItem value="preconstruction">Preconstruction Manager</SelectItem>
                    <SelectItem value="project-manager">Project Manager</SelectItem>
                    <SelectItem value="executive">Executive (VP, Director)</SelectItem>
                    <SelectItem value="owner">Owner/Principal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-[18px] font-heading font-medium text-pelican-navy mb-3">Top Pain Points</h3>
            <p className="text-sm text-pelican-slate mb-3">Select the top challenges your estimating team faces (select up to 3):</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
              {painPoints.map((point) => (
                <div key={point.id} className="flex items-start space-x-2">
                  <Checkbox 
                    id={point.id} 
                    checked={(profile.topPainPoints || []).includes(point.id)}
                    onCheckedChange={() => handlePainPointToggle(point.id)}
                    disabled={(profile.topPainPoints || []).length >= 3 && !(profile.topPainPoints || []).includes(point.id)}
                  />
                  <Label 
                    htmlFor={point.id} 
                    className="text-sm text-pelican-slate cursor-pointer"
                  >
                    {point.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-[18px] font-heading font-medium text-pelican-navy mb-3">Technology Stack</h3>
            <p className="text-sm text-pelican-slate mb-3">Select the technologies your team currently uses (select all that apply):</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
              {techStackOptions.map((tech) => (
                <div key={tech.id} className="flex items-start space-x-2">
                  <Checkbox 
                    id={`tech-${tech.id}`} 
                    checked={(profile.technologyStack || []).includes(tech.id)}
                    onCheckedChange={() => handleTechStackToggle(tech.id)}
                  />
                  <Label 
                    htmlFor={`tech-${tech.id}`} 
                    className="text-sm text-pelican-slate cursor-pointer"
                  >
                    {tech.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-4 flex justify-end">
            <Button type="submit" variant="primary">
              Continue to Assessment
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CompanyProfileForm;
