
import React, { useEffect } from 'react';
import SectionHeader from './components/SectionHeader';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import { useContactForm } from './hooks/useContactForm';
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const { isSubmitting, handleSubmit } = useContactForm();
  const isMobile = useIsMobile();

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
    <section id="contact" className="py-20 bg-pelican-cream/30 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-white transform -skew-y-2"></div>
      <div className="section-container relative z-10">
        <SectionHeader 
          title="Ready to Transform Your Estimating Process?" 
          subtitle="Contact us to schedule a consultation and learn how our data-driven approach can help your construction company improve estimating accuracy and win more profitable projects."
        />
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className={`${!isMobile ? 'lg:w-1/3' : ''} reveal`} style={{ transform: 'translateY(20px)' }}>
            <ContactInfo />
          </div>
          
          <div className={`${!isMobile ? 'lg:w-2/3' : ''} reveal`} style={{ transform: 'translateY(20px)' }}>
            <ContactForm 
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
