import React from 'react';
import FloatingCard from './FloatingCard';

const Credibility = () => {
  return (
    <FloatingCard delay={0.2} accentBorder="top" bottomBorder>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Crane image - left side */}
        <div className="order-2 md:order-1 rounded-xl overflow-hidden border border-pelican-slate/10">
          <img
            src="/images/crane-field.png"
            alt="Mason on a crane at a construction site"
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Text content - right side */}
        <div className="order-1 md:order-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-pelican-navy mb-6">
            We've Done the Work You're Doing
          </h2>
          <p className="text-lg text-pelican-slate leading-relaxed mb-4">
            Howard Frankland. Tappan Zee. Soo Locks. <strong>$15B+</strong> in marine and heavy civil projects. We've sat in the same bid reviews, fought the same spreadsheet fires, dealt with the same "where did that number come from?" conversations.
          </p>
          <p className="text-pelican-slate leading-relaxed">
            That's why we build tools that fit how this industry actually operates.
          </p>
        </div>
      </div>
    </FloatingCard>
  );
};

export default Credibility;
