
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
