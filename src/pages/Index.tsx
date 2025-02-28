
import React, { useEffect } from 'react';
import Navbar from '../components/navigation/Navbar';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Benefits from '../components/sections/Benefits';
import CustomerJourney from '../components/sections/CustomerJourney';
import Testimonials from '../components/sections/Testimonials';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
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

  // Scroll to section if URL has hash
  useEffect(() => {
    // Get hash from URL (e.g., #services)
    const hash = window.location.hash;
    
    // If hash exists, scroll to the section
    if (hash) {
      // Remove the # symbol
      const sectionId = hash.substring(1);
      
      // Get the element
      const element = document.getElementById(sectionId);
      
      // If element exists, scroll to it (with a slight delay to ensure all elements are loaded)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <CustomerJourney />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
