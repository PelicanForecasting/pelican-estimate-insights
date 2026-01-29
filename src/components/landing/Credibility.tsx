import React from 'react';
import FloatingCard from './FloatingCard';

const Credibility = () => {
  return (
    <FloatingCard delay={0.2}>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image placeholder - left side */}
        <div className="aspect-[4/3] bg-pelican-slate/10 rounded-xl flex items-center justify-center order-2 md:order-1">
          <span className="text-pelican-slate/40 text-sm font-medium">Image coming soon</span>
        </div>
        
        {/* Text content - right side */}
        <div className="order-1 md:order-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-pelican-navy mb-6">
            Built on Real Project Experience
          </h2>
          <p className="text-lg text-pelican-slate leading-relaxed">
            Over $15 billion in project exposure across marine infrastructure, heavy civil, and complex civil works. I've estimated these projects, managed their data, and learned what information actually drives better outcomes.
          </p>
        </div>
      </div>
    </FloatingCard>
  );
};

export default Credibility;
