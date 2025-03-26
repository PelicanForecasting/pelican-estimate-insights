
import React, { useEffect } from 'react';
import Navigation from '../components/navigation/Navigation';
import Hero from '../components/sections/NewHero';
import Benefits from '../components/sections/Benefits';
import NewServices from '../components/sections/NewServices';
import CallToAction from '../components/sections/CallToAction';
import Testimonials from '../components/sections/Testimonials';
import CustomerJourney from '../components/sections/CustomerJourney';
import Footer from '../components/sections/Footer';

const Index = () => {
  // Enhanced Intersection Observer for scroll animations with thresholds
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Add staggered animation for children with delay
          if (entry.target.classList.contains('stagger-children')) {
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('active');
              }, index * 100); // 100ms stagger between each item
            });
          }
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  // Handler for URL hash navigation with smooth scrolling
  useEffect(() => {
    // Handle hash navigation after page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      
      if (hash) {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Call once on mount
    handleHashNavigation();

    // Set up event listener for hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);
  
  // Performance optimization for animations on mobile
  useEffect(() => {
    const handleResize = () => {
      // If on mobile, reduce animation complexity
      if (window.innerWidth < 768) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    };
    
    // Initial check
    handleResize();
    
    // Set up listener
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <Navigation />
      <Hero />
      <Benefits />
      <NewServices />
      <Testimonials />
      <CustomerJourney />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
