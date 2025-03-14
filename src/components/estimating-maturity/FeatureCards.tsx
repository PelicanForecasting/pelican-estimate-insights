
import React from 'react';
import { FileText, Award, Users } from 'lucide-react';

const FeatureCards = () => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
        <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
          <FileText className="h-6 w-6 text-pelican-navy" />
        </div>
        <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-2">Self-Assessment</h3>
        <p className="text-pelican-slate">Complete the questionnaire to evaluate your current estimating capabilities</p>
      </div>
      
      <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
        <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
          <Award className="h-6 w-6 text-pelican-navy" />
        </div>
        <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-2">Detailed Report</h3>
        <p className="text-pelican-slate">Receive personalized recommendations based on your assessment results</p>
      </div>
      
      <div className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
        <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
          <Users className="h-6 w-6 text-pelican-navy" />
        </div>
        <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-2">Expert Consultation</h3>
        <p className="text-pelican-slate">Schedule a session with an estimating expert to discuss improvement strategies</p>
      </div>
    </div>
  );
};

export default FeatureCards;
