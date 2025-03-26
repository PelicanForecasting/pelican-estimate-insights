
import React from 'react';
import { QuoteIcon } from 'lucide-react';

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  company,
  index 
}: { 
  quote: string; 
  author: string; 
  role: string; 
  company: string;
  index: number;
}) => {
  return (
    <div 
      className="bg-white rounded-xl p-8 shadow-md border border-gray-100 reveal" 
      style={{ 
        transitionDelay: `${index * 150}ms`,
        transform: 'translateY(20px)'
      }}
    >
      <QuoteIcon className="h-8 w-8 text-pelican-teal/40 mb-4" />
      <p className="text-pelican-slate mb-6 italic">{quote}</p>
      <div className="border-t border-gray-100 pt-4">
        <div className="font-bold text-pelican-navy">{author}</div>
        <div className="text-sm text-pelican-slate">
          {role}, {company}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Pelican's data-driven approach transformed our estimating process, improving our win rate by 28% while maintaining healthy margins.",
      author: "Michael Johnson",
      role: "Chief Estimator",
      company: "West Coast Construction"
    },
    {
      quote: "We uncovered insights in our historical data that we never knew existed. Now our estimators have powerful tools to make more accurate bids.",
      author: "Sarah Williams",
      role: "Operations Director",
      company: "Meridian Builders"
    },
    {
      quote: "When our senior estimator retired, we were worried about losing decades of knowledge. Pelican helped us capture and systemize that expertise.",
      author: "David Chen",
      role: "President",
      company: "Skyline Contractors"
    }
  ];

  return (
    <section className="py-16 bg-pelican-cream/20 relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.03] pointer-events-none"></div>
      
      <div className="content-container">
        <div className="text-center mb-12 reveal fade-in">
          <div className="inline-block px-4 py-1 rounded-full bg-pelican-navy/10 text-pelican-navy font-medium text-sm mb-4">
            Client Success
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-pelican-slate max-w-2xl mx-auto">
            Hear from construction companies that have transformed their estimating processes with our data-driven approach.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
