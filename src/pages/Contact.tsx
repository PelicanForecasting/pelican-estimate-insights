import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  return (
    <PageLayout>
      {/* Hero Section with improved spacing */}
      <section className="content-top-spacing pb-16 relative">
        <div className="content-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-pelican-navy mb-6">Get in Touch</h1>
            <p className="text-lg text-pelican-slate">
              Have questions about our services or want to schedule a consultation? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="content-container">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-pelican-navy mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name*</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name*</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name*</Label>
                    <Input id="company" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address*</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message*</Label>
                    <Textarea id="message" rows={5} required />
                  </div>
                  
                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 mb-8">
                <h2 className="text-2xl font-bold text-pelican-navy mb-6">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="bg-pelican-navy/5 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-pelican-teal" />
                    </div>
                    <div>
                      <h4 className="font-bold text-pelican-navy">Address</h4>
                      <p className="text-pelican-slate">
                        201 Rue Beauregard STE 202<br />
                        Lafayette, LA 70508
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-4">
                    <div className="bg-pelican-navy/5 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-pelican-teal" />
                    </div>
                    <div>
                      <h4 className="font-bold text-pelican-navy">Phone</h4>
                      <p className="text-pelican-slate">(318) 308-4826</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start space-x-4">
                    <div className="bg-pelican-navy/5 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-pelican-teal" />
                    </div>
                    <div>
                      <h4 className="font-bold text-pelican-navy">Email</h4>
                      <p className="text-pelican-slate">info@pelicanforecasting.com</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-pelican-navy mb-6">Schedule a Consultation</h2>
                <div className="flex items-start space-x-4">
                  <div className="bg-pelican-navy/5 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-pelican-teal" />
                  </div>
                  <div>
                    <p className="text-pelican-slate mb-4">
                      Book a 30-minute consultation with our team to discuss your specific estimating challenges.
                    </p>
                    <Button variant="primary" className="w-full">Book a Time</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
