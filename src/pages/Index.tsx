
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

  return (
    <div className="min-h-screen bg-white">
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
