
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, BarChart3, Database, Workflow, Trophy, Calendar } from 'lucide-react';

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-2 mb-3">
    <div className="mt-1">
      <Check className="h-5 w-5 text-secondary" />
    </div>
    <p className="text-foreground/80">{children}</p>
  </div>
);

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-background/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 reveal fade-in">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Ready to Transform Your Estimating Process?
            </h2>
            <p className="text-lg text-foreground/80">
              Schedule a free consultation to discuss how we can help you leverage your project data to improve estimating accuracy and efficiency.
            </p>
            
            <div className="space-y-4 pt-2">
              <FeatureItem>
                Comprehensive needs assessment
              </FeatureItem>
              <FeatureItem>
                Customized data strategy roadmap
              </FeatureItem>
              <FeatureItem>
                ROI projection for your specific company
              </FeatureItem>
              <FeatureItem>
                Clear next steps with no obligation
              </FeatureItem>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary text-primary">
                <Link to="/estimating-maturity">
                  Take Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-border reveal fade-in" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-bold mb-6 text-primary">How We Deliver Value</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/5 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Database className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Data Integration</h4>
                  <p className="text-foreground/80">We connect your systems to create a unified data environment for estimating intelligence.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/5 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Analytics Development</h4>
                  <p className="text-foreground/80">We transform raw data into actionable insights with custom analytics tools and dashboards.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/5 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Workflow className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Process Enhancement</h4>
                  <p className="text-foreground/80">We streamline your estimating workflow with data-driven methodologies.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/5 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Knowledge Transfer</h4>
                  <p className="text-foreground/80">We build team capabilities to ensure long-term success with your new systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
