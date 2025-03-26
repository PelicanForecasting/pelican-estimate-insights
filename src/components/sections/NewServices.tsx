
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database, BarChart3, Workflow, GraduationCap, ArrowRight } from 'lucide-react';

const ServiceCard = ({
  title,
  description,
  icon,
  index,
  link
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string;
}) => {
  return (
    <div 
      className="pelican-card glass p-8 reveal" 
      style={{
        transitionDelay: `${index * 100}ms`,
        transform: 'translateY(20px)'
      }}
    >
      <div className="bg-pelican-navy/5 p-4 inline-block rounded-xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-pelican-navy mb-4">{title}</h3>
      <p className="text-pelican-grey mb-6">{description}</p>
      <Link 
        to={link} 
        className="text-pelican-teal hover:text-pelican-navy transition-colors flex items-center font-medium no-underline"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

const NewServices = () => {
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

  const services = [
    {
      title: "Data Integration & Environment",
      description: "We transform disconnected data into unified intelligence, creating integrated systems that connect all aspects of your business.",
      icon: <Database className="w-8 h-8 text-pelican-teal" />,
      link: "/services"
    },
    {
      title: "Analytics & Intelligence",
      description: "Converting raw data into actionable insights through custom analytics tools and dashboards that reveal patterns in your project data.",
      icon: <BarChart3 className="w-8 h-8 text-pelican-teal" />,
      link: "/services"
    },
    {
      title: "Process Enhancement",
      description: "Streamlining your estimating workflow through data-driven methodologies that improve accuracy, efficiency, and consistency.",
      icon: <Workflow className="w-8 h-8 text-pelican-teal" />,
      link: "/services"
    },
    {
      title: "Knowledge Transfer & Training",
      description: "Preserving institutional knowledge and building team capabilities to ensure long-term success and development.",
      icon: <GraduationCap className="w-8 h-8 text-pelican-teal" />,
      link: "/services"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pelican-cream to-white z-0"></div>
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block px-4 py-1 rounded-full bg-pelican-navy/10 text-pelican-navy font-medium text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-6">
            Data-Driven Solutions for Construction Estimating
          </h2>
          <p className="text-pelican-grey text-lg">
            We help construction companies transform their estimating processes through advanced data analytics and industry expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
              index={index}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServices;
