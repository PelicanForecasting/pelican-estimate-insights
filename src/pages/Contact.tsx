
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ContactFeature from '@/features/contact/Contact';

const Contact = () => {
  return (
    <PageLayout>
      <div className="container max-w-[1200px] mx-auto px-6 py-12 lg:py-[48px] animate-fade-in">
        <ContactFeature />
      </div>
    </PageLayout>
  );
};

export default Contact;
