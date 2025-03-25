
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  tag?: string;
}

const SectionHeader = ({ title, subtitle, tag = "Get In Touch" }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 reveal">
      <div className="inline-block px-4 py-1 rounded-full bg-pelican-orange/10 text-pelican-orange font-medium text-sm mb-4">
        {tag}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-6">
        {title}
      </h2>
      <p className="text-pelican-grey text-lg">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
