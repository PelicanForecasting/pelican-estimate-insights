import React from 'react';
import FloatingCard from './FloatingCard';

const Differentiator = () => {
  return (
    <FloatingCard accentBorder="left" delay={0.15}>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-pelican-navy leading-tight">
            Enterprise Capabilities, Fractional Engagement
          </h2>
        </div>
        <div className="space-y-4 text-pelican-slate leading-relaxed">
          <p>
            I spent years deploying technology on billion-dollar infrastructure projects like the Howard Frankland Bridge, Tappan Zee, Mobile River Bridge, Soo Locks. I've seen what works in the field and what dies in a PowerPoint.
          </p>
          <p>
            I recently completed Palantir's American Tech Fellowship, building production ML systems for construction operations. I bring that same rigor to your company, with a dedication for solving hard problems on the edge.
          </p>
          <p>
            Whether you need a one-time data cleanup, a custom forecasting model, or a long-term technology partner, I scale to fit your needs.
          </p>
        </div>
      </div>
    </FloatingCard>
  );
};

export default Differentiator;
