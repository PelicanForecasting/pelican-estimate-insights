
import React, { useEffect } from 'react';
import { ArrowRight, CalendarCheck, FileText, BarChart4, Handshake, Users, CheckCircle2 } from 'lucide-react';

interface JourneyStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const JourneyStep: React.FC<JourneyStepProps> = ({ number, title, description, icon, isLast = false }) => {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center mr-4">
        <div className="w-12 h-12 rounded-full bg-pelican-teal flex items-center justify-center text-white shadow-lg">
          {icon}
        </div>
        {!isLast && (
          <div className="w-1 h-full bg-pelican-teal/20 my-2"></div>
        )}
      </div>
      <div className="flex-1 pb-12">
        <div className="mb-2 flex items-center">
          <span className="text-pelican-orange font-bold mr-2">{number}</span>
          <h3 className="text-xl font-bold text-pelican-navy">{title}</h3>
        </div>
        <p className="text-pelican-grey">{description}</p>
      </div>
    </div>
  );
};

const CustomerJourney = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="customer-journey" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pelican-cream rounded-full opacity-50 filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pelican-teal/10 rounded-full opacity-40 filter blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal" style={{ transform: 'translateY(20px)' }}>
          <div className="inline-block px-4 py-1 rounded-full bg-pelican-orange/10 text-pelican-orange font-medium text-sm mb-4">
            What to Expect
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-6">
            Your Customer Journey
          </h2>
          <p className="text-pelican-grey text-lg">
            Our collaborative process is designed to transform your estimating capabilities through a proven step-by-step approach
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto reveal" style={{ transform: 'translateY(20px)' }}>
          <JourneyStep 
            number={1}
            title="Awareness & Discovery"
            description="We'll introduce you to what's possible with your existing data and provide educational materials relevant to your sector."
            icon={<FileText className="w-6 h-6" />}
          />
          
          <JourneyStep 
            number={2}
            title="Initial Consultation"
            description="Through a discovery call, we'll discuss your current processes, identify specific pain points, and share relevant case studies."
            icon={<CalendarCheck className="w-6 h-6" />}
          />
          
          <JourneyStep 
            number={3}
            title="Needs Assessment"
            description="We'll perform a deeper analysis of your data environment through on-site visits and stakeholder interviews to identify improvement opportunities."
            icon={<Users className="w-6 h-6" />}
          />
          
          <JourneyStep 
            number={4}
            title="Solution Proposal"
            description="We'll develop a customized solution with a clear implementation roadmap, timeline, and defined success metrics."
            icon={<BarChart4 className="w-6 h-6" />}
          />
          
          <JourneyStep 
            number={5}
            title="Implementation"
            description="We'll transform your data environment with minimal disruption, providing regular updates and training for your team."
            icon={<ArrowRight className="w-6 h-6" />}
          />
          
          <JourneyStep 
            number={6}
            title="Value Realization"
            description="You'll begin using the new systems and seeing initial results, with verification against promised value and refinement based on feedback."
            icon={<CheckCircle2 className="w-6 h-6" />}
          />
          
          <JourneyStep 
            number={7}
            title="Ongoing Partnership"
            description="We'll provide continued system optimization, incorporate new data, and deliver advanced analytics capabilities with strategic guidance."
            icon={<Handshake className="w-6 h-6" />}
            isLast={true}
          />
        </div>
        
        <div className="mt-12 text-center reveal" style={{ transform: 'translateY(20px)' }}>
          <a href="#contact" className="pelican-button bg-pelican-navy text-white hover:bg-pelican-teal">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourney;
