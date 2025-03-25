
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ClipboardCheck, BarChart, LineChart, FileText, MessageSquare } from 'lucide-react';

const AssessmentHighlight = () => {
  // Animation for sections
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

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-pelican-cream/20 z-0"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Free Assessment
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-6">
            Transform Your Estimating Capabilities
          </h2>
          <p className="text-pelican-grey text-lg">
            Our assessment helps construction companies identify opportunities to improve their 
            estimating processes through data-driven insights and industry benchmarks.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <ClipboardCheck className="w-10 h-10 text-accent" />,
              title: "Complete the Assessment",
              description: "Answer questions about your current estimating practices in just 5 minutes."
            },
            {
              icon: <BarChart className="w-10 h-10 text-accent" />,
              title: "Get Your Maturity Score",
              description: "Receive your personalized score benchmarked against industry standards."
            },
            {
              icon: <MessageSquare className="w-10 h-10 text-accent" />,
              title: "Review Results Together",
              description: "Schedule a complimentary session to discuss your improvement opportunities."
            }
          ].map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md reveal transition-transform hover:translate-y-[-5px]" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="bg-accent/10 p-4 inline-block rounded-xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-pelican-navy mb-3">Step {index + 1}: {step.title}</h3>
              <p className="text-pelican-grey">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Benefits and Preview */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Benefits List */}
          <div className="lg:w-1/2 space-y-5 reveal">
            <h3 className="text-2xl font-bold text-pelican-navy mb-4">Assessment Benefits</h3>
            
            {[
              {
                icon: <BarChart className="w-6 h-6 text-secondary" />,
                title: "Benchmark Against Industry Standards",
                description: "See how your estimating processes compare to industry best practices."
              },
              {
                icon: <LineChart className="w-6 h-6 text-secondary" />,
                title: "Identify Improvement Opportunities",
                description: "Discover specific areas where your estimating processes can be enhanced."
              },
              {
                icon: <FileText className="w-6 h-6 text-secondary" />,
                title: "Receive Actionable Recommendations",
                description: "Get tailored guidance based on your specific situation and goals."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-pelican-navy">{benefit.title}</h4>
                  <p className="text-pelican-grey">{benefit.description}</p>
                </div>
              </div>
            ))}
            
            <div className="pt-5">
              <Button variant="accent" size="lg" className="w-full md:w-auto" asChild>
                <Link to="/estimating-maturity">Start Free Assessment</Link>
              </Button>
            </div>
          </div>
          
          {/* Testimonial and Preview */}
          <div className="lg:w-1/2 reveal">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-pelican-navy/10 rounded-full flex items-center justify-center text-xl font-bold text-pelican-navy">
                  JD
                </div>
                <div>
                  <h4 className="font-bold text-pelican-navy">John Doe</h4>
                  <p className="text-sm text-pelican-grey">Chief Estimator, ABC Construction</p>
                </div>
              </div>
              
              <blockquote className="text-pelican-grey italic mb-5">
                "The estimating maturity assessment highlighted key areas where we were falling behind industry standards. 
                After implementing the recommendations, we've seen a 15% improvement in estimating accuracy and reduced 
                our bid preparation time by 20%."
              </blockquote>
              
              <div className="bg-pelican-cream/30 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-accent" />
                  <h5 className="font-semibold text-pelican-navy">Sample Assessment Report</h5>
                </div>
                <div className="aspect-[16/9] bg-white rounded-md shadow-sm overflow-hidden flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/76943e31-cad5-458c-9154-29d5b44c13f9.png" 
                    alt="Sample Assessment Report" 
                    className="w-full object-cover"
                  />
                </div>
                <p className="text-sm text-pelican-grey mt-2">
                  Your personalized report includes detailed analysis and actionable recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentHighlight;
