import React from 'react';
import FloatingCard from './FloatingCard';

const Differentiator = () => {
  return (
    <FloatingCard accentBorder="top" bottomBorder delay={0.15}>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-pelican-navy leading-tight">
            Enterprise Capabilities, Fractional Engagement
          </h2>
          {/* Media placeholder - ready for image or video */}
          <div className="aspect-video bg-gradient-to-br from-pelican-slate/5 to-pelican-teal/10 rounded-xl flex items-center justify-center border border-pelican-slate/10">
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-pelican-teal/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-pelican-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-pelican-slate/50 text-sm">Video coming soon</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-pelican-slate leading-relaxed">
          <p>
            You don't need to hire a full-time data team to get enterprise-grade capabilities. I spent years deploying technology on billion-dollar infrastructure projects—Howard Frankland Bridge, Tappan Zee, Mobile River Bridge, Soo Locks—so I know what actually works in the field versus what dies in a PowerPoint.
          </p>
          <p>
            Fresh from Palantir's American Tech Fellowship building production ML systems for construction operations, I bring that same rigor to your company.
          </p>
          <p>
            <strong>Need a one-time data cleanup?</strong> Done. <strong>Custom forecasting model?</strong> Built. <strong>Long-term technology partner?</strong> I scale to fit your needs and budget.
          </p>
        </div>
      </div>
    </FloatingCard>
  );
};

export default Differentiator;
