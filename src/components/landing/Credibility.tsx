import React from 'react';
import FloatingCard from './FloatingCard';

const Credibility = () => {
  return (
    <FloatingCard delay={0.2} accentBorder="top" bottomBorder>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image placeholder - left side */}
        <div className="aspect-[4/3] bg-gradient-to-br from-pelican-navy/5 to-pelican-teal/10 rounded-xl flex items-center justify-center order-2 md:order-1 border border-pelican-slate/10 overflow-hidden">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-pelican-navy/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-pelican-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-pelican-slate/40 text-sm font-medium">Project image coming soon</span>
          </div>
        </div>
        
        {/* Text content - right side */}
        <div className="order-1 md:order-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-pelican-navy mb-6">
            I've Been in Your Shoes
          </h2>
          <p className="text-lg text-pelican-slate leading-relaxed mb-4">
            Over <strong>$15 billion</strong> in project exposure across marine infrastructure, heavy civil, and complex civil works. I've estimated these projects, managed their data, and learned firsthand what information actually drives better outcomes.
          </p>
          <p className="text-pelican-slate leading-relaxed">
            I understand your world because I've lived it—and I know where the real opportunities for improvement are hiding.
          </p>
        </div>
      </div>
    </FloatingCard>
  );
};

export default Credibility;
