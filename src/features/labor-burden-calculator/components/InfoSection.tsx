
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoSection = () => {
  return (
    <div className="mt-8">
      <div className="border-t border-pelican-teal/20 pt-6 mb-4">
        <h3 className="font-heading font-medium text-white text-xl mb-4">What is Labor Burden?</h3>
        <p className="text-pelican-slate mb-5 leading-relaxed">
          Labor burden includes all costs associated with employing workers beyond their base hourly rate. These additional costs can significantly impact your project budgets and bids.
        </p>
        
        <h4 className="font-heading font-medium text-white text-lg mb-3">Common burden components:</h4>
        
        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <div className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-pelican-teal/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-pelican-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-pelican-slate leading-relaxed"><strong className="text-white">Payroll taxes:</strong> FICA, FUTA, SUTA, Medicare</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-pelican-teal/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-pelican-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-pelican-slate leading-relaxed"><strong className="text-white">Insurance:</strong> Workers' comp, liability, health, disability</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-pelican-teal/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-pelican-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-pelican-slate leading-relaxed"><strong className="text-white">Benefits:</strong> Retirement, paid time off, training</span>
          </li>
        </ul>
        
        <div className="bg-pelican-lightGray/50 p-4 rounded-lg shadow-sm text-sm text-pelican-slate">
          <strong className="text-white block mb-2">Pro Tip:</strong>
          <p className="leading-relaxed">
            Review and update your burden calculations at least once a year to account for changes in tax rates, insurance premiums, and benefit costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
