
import React from 'react';
import { Check, Target, Lightbulb, FileBarChart, Rocket, ChartBarIcon, Handshake } from 'lucide-react';

const StageCard = ({ 
  stage, 
  title, 
  description, 
  icon,
  index
}: { 
  stage: string; 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div 
      className="pelican-card reveal glass p-8 relative overflow-hidden" 
      style={{ 
        transitionDelay: `${index * 100}ms`,
        transform: 'translateY(20px)'
      }}
    >
      <div className="absolute -right-5 -top-5 bg-pelican-navy/5 w-20 h-20 rounded-full flex items-center justify-center">
        <div className="text-pelican-teal">{icon}</div>
      </div>
      <div className="inline-block px-3 py-1 rounded-full bg-pelican-teal/10 text-pelican-teal text-sm font-medium mb-3">
        {stage}
      </div>
      <h3 className="text-xl font-bold text-pelican-navy mb-3">{title}</h3>
      <p className="text-pelican-grey">{description}</p>
    </div>
  );
};

const CustomerJourney = () => {
  const stages = [
    {
      stage: "Stage 1",
      title: "Awareness & Discovery",
      description: "Initial contact as you recognize data challenges and explore solutions through our educational resources and case studies.",
      icon: <Lightbulb size={28} />
    },
    {
      stage: "Stage 2",
      title: "Initial Consultation",
      description: "Discovery call where we understand your specific situation and share relevant experiences to provide preliminary insights.",
      icon: <Target size={28} />
    },
    {
      stage: "Stage 3",
      title: "Needs Assessment",
      description: "On-site visits and stakeholder interviews to document processes, analyze sample data, and identify opportunities.",
      icon: <FileBarChart size={28} />
    },
    {
      stage: "Stage 4",
      title: "Solution Proposal",
      description: "Detailed plan with customized solutions, implementation roadmap, and clearly defined success metrics and timelines.",
      icon: <Rocket size={28} />
    },
    {
      stage: "Stage 5",
      title: "Implementation",
      description: "Active transformation with minimal disruption, including digitizing historical data, building custom analytics, and training your team.",
      icon: <ChartBarIcon size={28} />
    },
    {
      stage: "Stage 6",
      title: "Value Realization",
      description: "Measuring results against success metrics, refining systems based on user feedback, and documenting best practices.",
      icon: <Check size={28} />
    },
    {
      stage: "Stage 7",
      title: "Ongoing Partnership",
      description: "Continued optimization with regular check-ins, strategic reviews, and development of additional capabilities as needs evolve.",
      icon: <Handshake size={28} />
    }
  ];

  return (
    <section id="customer-journey" className="py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block px-4 py-1 rounded-full bg-pelican-navy/10 text-pelican-navy font-medium text-sm mb-4">
            Customer Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-6">
            What to Expect When Working With Us
          </h2>
          <p className="text-pelican-grey text-lg">
            Our systematic approach ensures we deliver measurable value at every step of your estimating transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <StageCard
              key={index}
              stage={stage.stage}
              title={stage.title}
              description={stage.description}
              icon={stage.icon}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 rounded-full bg-pelican-navy text-white hover:bg-pelican-teal transition-all"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourney;
