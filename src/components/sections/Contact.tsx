
import React, { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

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

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Updated Formspree form ID
      const response = await fetch("https://formspree.io/f/xvgkqbke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-pelican-cream/30 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-white transform -skew-y-2"></div>
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <div className="inline-block px-4 py-1 rounded-full bg-pelican-orange/10 text-pelican-orange font-medium text-sm mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pelican-navy mb-6">
            Ready to Transform Your Estimating Process?
          </h2>
          <p className="text-pelican-grey text-lg">
            Contact us to schedule a consultation and learn how our data-driven approach can help your construction company improve estimating accuracy and win more profitable projects.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3 reveal" style={{ transform: 'translateY(20px)' }}>
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h3 className="text-xl font-bold text-pelican-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-pelican-teal/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-pelican-navy">Phone</h4>
                    <p className="text-pelican-grey">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-pelican-teal/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-pelican-navy">Email</h4>
                    <p className="text-pelican-grey">info@pelicanforecasting.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-pelican-teal/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pelican-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-pelican-navy">Location</h4>
                    <p className="text-pelican-grey">1234 Construction Way<br />Building Suite 500<br />Portland, OR 97201</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-pelican-navy mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  <a href="#" className="h-10 w-10 rounded-full bg-pelican-navy/5 flex items-center justify-center text-pelican-navy hover:bg-pelican-navy hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-pelican-navy/5 flex items-center justify-center text-pelican-navy hover:bg-pelican-navy hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-pelican-navy/5 flex items-center justify-center text-pelican-navy hover:bg-pelican-navy hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 reveal" style={{ transform: 'translateY(20px)' }}>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-pelican-navy mb-6">Send Us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-pelican-navy font-medium">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="w-full px-4 py-3 rounded-lg border border-pelican-navy/10 focus:outline-none focus:ring-2 focus:ring-pelican-teal" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-pelican-navy font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email address" 
                              className="w-full px-4 py-3 rounded-lg border border-pelican-navy/10 focus:outline-none focus:ring-2 focus:ring-pelican-teal" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-pelican-navy font-medium">Company</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your company name" 
                              className="w-full px-4 py-3 rounded-lg border border-pelican-navy/10 focus:outline-none focus:ring-2 focus:ring-pelican-teal" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-pelican-navy font-medium">Phone</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your phone number" 
                              className="w-full px-4 py-3 rounded-lg border border-pelican-navy/10 focus:outline-none focus:ring-2 focus:ring-pelican-teal" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-pelican-navy font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project and needs" 
                            className="w-full px-4 py-3 rounded-lg border border-pelican-navy/10 focus:outline-none focus:ring-2 focus:ring-pelican-teal" 
                            rows={5}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="pelican-button bg-pelican-navy text-white hover:bg-pelican-teal"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
