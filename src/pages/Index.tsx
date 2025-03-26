
import React, { useEffect } from 'react';
import Navigation from '../components/navigation/Navigation';
import Hero from '../components/sections/NewHero';
import Benefits from '../components/sections/Benefits';
import Features from '../components/sections/Features';
import NewServices from '../components/sections/NewServices';
import CallToAction from '../components/sections/CallToAction';
import Testimonials from '../components/sections/Testimonials';
import CustomerJourney from '../components/sections/CustomerJourney';
import Footer from '../components/sections/Footer';

const Index = () => {
  // Intersection Observer for scroll animations
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

  // Handler for URL hash navigation
  useEffect(() => {
    // Handle hash navigation after page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      
      if (hash) {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        window.scrollTo(0, 0);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <Navigation />
      <Hero />
      <Benefits />
      <Features />
      <NewServices />
      <Testimonials />
      <CustomerJourney />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
