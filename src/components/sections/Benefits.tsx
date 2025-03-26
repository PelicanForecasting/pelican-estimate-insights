
import React, { useEffect } from 'react';
import { BarChart3, Database, Brain, Filter, TrendingUp, Target, Clock, ChartBar } from 'lucide-react';

const BenefitCard = ({ 
  icon, 
  title, 
  description,
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <div 
      className="p-6 bg-white rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-300 reveal" 
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  );
};

const Benefits = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const benefits = [
    {
      icon: <Database className="h-6 w-6 text-secondary" />,
      title: "Unified Data Environment",
      description: "Connect estimating, operations, and accounting systems to create a single source of truth for project data."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-secondary" />,
      title: "Data-Driven Decisions",
      description: "Replace gut feelings with statistical confidence using your own historical production rates."
    },
    {
      icon: <Brain className="h-6 w-6 text-secondary" />,
      title: "Knowledge Preservation",
      description: "Capture institutional expertise before it walks out the door with retiring estimators."
    },
    {
      icon: <Target className="h-6 w-6 text-secondary" />,
      title: "Strategic Project Selection",
      description: "Improve bid/no-bid decisions with objective frameworks that identify your optimal projects."
    },
    {
      icon: <Clock className="h-6 w-6 text-secondary" />,
      title: "Accelerated Estimating",
      description: "Cut estimating time by 30-50% through streamlined workflows and automated calculations."
    },
    {
      icon: <ChartBar className="h-6 w-6 text-secondary" />,
      title: "Improved Win Rates",
      description: "Balance competitiveness and profitability with data-backed confidence in your numbers."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Why Choose Pelican
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Transform Your Estimating Process
          </h2>
          <p className="text-foreground/80 text-lg">
            We help construction companies leverage their historical project data to improve bidding accuracy, efficiency, and profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
