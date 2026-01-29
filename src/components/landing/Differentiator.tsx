import React from 'react';
import FloatingCard from './FloatingCard';

const Differentiator = () => {
  return (
    <FloatingCard accentBorder="top" bottomBorder delay={0.15} className="!p-0 overflow-hidden">
      <div className="relative min-h-[400px] md:min-h-[500px]">
        {/* Full background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/ascii-hatch.webm" type="video/webm" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

        {/* Text overlay - split top/bottom */}
        <div className="relative z-10 p-8 md:p-12 min-h-[400px] md:min-h-[500px] flex flex-col justify-between">
          {/* Heading at top */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-lg">
            Built Systems. Built Different.
          </h2>

          {/* Body at bottom */}
          <div className="space-y-3 max-w-2xl">
            <p className="text-white/90 leading-relaxed text-base md:text-lg drop-shadow">
              $15B+ in project exposure. Production AI systems. Enterprise database architecture. We've estimated billion-dollar infrastructure and built the technology that transforms how contractors operate.
            </p>
            <p className="text-white/90 leading-relaxed text-base md:text-lg drop-shadow">
              One-time rescue mission or long-term partnership—we scale to fit.
            </p>
            <p className="text-white font-semibold text-base md:text-lg drop-shadow-lg">
              Your hardest problems are exactly where we start.
            </p>
          </div>
        </div>
      </div>
    </FloatingCard>
  );
};

export default Differentiator;
