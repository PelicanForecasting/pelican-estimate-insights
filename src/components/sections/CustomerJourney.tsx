
import React from 'react';
import { 
  Search, 
  FileCheck, 
  BarChart3, 
  Settings, 
  Trophy, 
  RepeatIcon 
} from 'lucide-react';

const JourneyStep = ({ 
  step, 
  title, 
  description, 
  icon, 
  index 
}: { 
  step: number;
  title: string; 
  description: string; 
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div className="flex items-start reveal" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="mr-4 flex-shrink-0">
        <div className="rounded-full bg-pelican-teal/10 h-14 w-14 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-sm text-pelican-teal font-medium mb-1">Step {step}</div>
        <h3 className="text-xl font-bold text-pelican-navy mb-2">{title}</h3>
        <p className="text-pelican-slate">{description}</p>
      </div>
    </div>
  );
};

const CustomerJourney = () => {
  const journeySteps = [
    {
      step: 1,
      title: "Discover & Assess",
      description: "Take our free Estimating Maturity Assessment to identify areas for improvement in your preconstruction processes.",
      icon: <Search className="h-7 w-7 text-pelican-teal" />
    },
    {
      step: 2,
      title: "Consultation & Planning",
      description: "Meet with our team to discuss your specific challenges and develop a tailored roadmap for your organization.",
      icon: <FileCheck className="h-7 w-7 text-pelican-teal" />
    },
    {
      step: 3,
      title: "Data Analysis",
      description: "We analyze your historical project data to identify patterns, risks, and opportunities for better estimating.",
      icon: <BarChart3 className="h-7 w-7 text-pelican-teal" />
    },
    {
      step: 4,
      title: "Implementation",
      description: "Together, we implement process improvements, data integrations, and training to elevate your estimating capabilities.",
      icon: <Settings className="h-7 w-7 text-pelican-teal" />
    },
    {
      step: 5,
      title: "Results & Value",
      description: "Experience measurable improvements in estimating accuracy, efficiency, and profitability in your construction business.",
      icon: <Trophy className="h-7 w-7 text-pelican-teal" />
    },
    {
      step: 6,
      title: "Ongoing Partnership",
      description: "Continue to optimize your estimating processes with ongoing support, training, and data-driven insights.",
      icon: <RepeatIcon className="h-7 w-7 text-pelican-teal" />
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="content-container">
        <div className="text-center mb-12 reveal fade-in">
          <div className="inline-block px-4 py-1 rounded-full bg-pelican-navy/10 text-pelican-navy font-medium text-sm mb-4">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-4">
            Your Journey to Data-Driven Estimating
          </h2>
          <p className="text-lg text-pelican-slate max-w-2xl mx-auto">
            We guide you through a structured process to transform your estimating capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {journeySteps.map((step, index) => (
            <JourneyStep
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerJourney;
