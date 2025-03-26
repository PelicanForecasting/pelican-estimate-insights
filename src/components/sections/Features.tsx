
import React, { useEffect } from 'react';
import { Database, BarChart3, Workflow, GraduationCap, TrendingUp } from 'lucide-react';

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  metric,
  index 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  metric?: {value: string, label: string};
  index: number;
}) => {
  return (
    <div 
      className="bg-white rounded-xl p-8 shadow-md border border-gray-100 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-pelican-navy/5 p-4 inline-flex rounded-xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-pelican-navy mb-4">{title}</h3>
      <p className="text-pelican-slate">{description}</p>
      
      {metric && (
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-accent mr-2">{metric.value}</span>
            <span className="text-sm text-pelican-slate">{metric.label}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const Features = () => {
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

  const features = [
    {
      title: "Data Integration & Environment",
      description: "Transform disconnected data into unified intelligence. We help you create integrated systems that connect your estimating, operations, and accounting data.",
      icon: <Database className="w-8 h-8 text-pelican-teal" />,
      metric: {value: "85%", label: "reduction in data silos"}
    },
    {
      title: "Analytics & Intelligence",
      description: "Convert raw data into actionable insights. We develop custom analytics tools and dashboards that reveal patterns in your historical project data.",
      icon: <BarChart3 className="w-8 h-8 text-pelican-teal" />,
      metric: {value: "3.2x", label: "return on estimating investment"}
    },
    {
      title: "Estimating Process Enhancement",
      description: "Streamline and optimize your estimating workflow. We implement data-driven methodologies that improve accuracy, efficiency, and consistency.",
      icon: <Workflow className="w-8 h-8 text-pelican-teal" />,
      metric: {value: "40%", label: "faster estimating process"}
    },
    {
      title: "Knowledge Transfer & Training",
      description: "Preserve institutional knowledge and build team capabilities. We help you capture expertise and develop your team's skills to ensure long-term success.",
      icon: <GraduationCap className="w-8 h-8 text-pelican-teal" />,
      metric: {value: "90%", label: "knowledge retention rate"}
    }
  ];

  return (
    <section className="py-20 bg-pelican-cream/30 relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.03] pointer-events-none"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal fade-in">
          <div className="inline-block px-4 py-1 rounded-full bg-pelican-navy/10 text-pelican-navy font-medium text-sm mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-6">
            Construction Challenges We Solve
          </h2>
          <p className="text-pelican-slate text-lg">
            We help construction companies transform their historical project data into actionable insights that improve estimating accuracy and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              metric={feature.metric}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
