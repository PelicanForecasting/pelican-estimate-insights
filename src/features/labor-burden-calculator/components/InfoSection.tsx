
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoSection = () => {
  return (
    <div className="mt-6">
      <div className="border-t border-pelican-teal/20 pt-6 mb-4">
        <h3 className="font-heading font-medium text-pelican-navy text-xl mb-3">What is Labor Burden?</h3>
        <p className="text-pelican-slate mb-4">
          Labor burden includes all costs associated with employing workers beyond their base hourly rate. These additional costs can significantly impact your project budgets and bids.
        </p>
        
        <h4 className="font-heading font-medium text-pelican-navy text-lg mb-2">Common burden components:</h4>
        
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-2">
            <div className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-pelican-teal/10 flex items-center justify-center">
              <svg className="w-3 h-3 text-pelican-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-pelican-slate"><strong className="text-pelican-navy">Payroll taxes:</strong> FICA, FUTA, SUTA, Medicare</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-pelican-teal/10 flex items-center justify-center">
              <svg className="w-3 h-3 text-pelican-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-pelican-slate"><strong className="text-pelican-navy">Insurance:</strong> Workers' comp, liability, health, disability</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-pelican-teal/10 flex items-center justify-center">
              <svg className="w-3 h-3 text-pelican-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-pelican-slate"><strong className="text-pelican-navy">Benefits:</strong> Retirement, paid time off, training</span>
          </li>
        </ul>
        
        <div className="bg-pelican-lightGray/50 p-3 rounded-md text-sm text-pelican-slate">
          <strong className="text-pelican-navy block mb-1">Pro Tip:</strong>
          Review and update your burden calculations at least once a year to account for changes in tax rates, insurance premiums, and benefit costs.
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
