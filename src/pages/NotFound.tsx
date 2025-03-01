
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <Navbar />
      
      <main className="container max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center animate-fade-in">
        <div className="text-center">
          <h1 className="text-9xl font-display font-bold text-pelican-navy">404</h1>
          <h2 className="mt-4 text-3xl font-heading font-semibold text-pelican-teal">Page Not Found</h2>
          <p className="mt-6 text-pelican-slate text-lg max-w-md mx-auto">
            We couldn't find the page you're looking for. Perhaps it's been moved or no longer exists.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="bg-pelican-navy hover:bg-pelican-navy/90 text-white font-medium px-6 py-3">
              <Link to="/">Return Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-pelican-teal text-pelican-teal hover:bg-pelican-teal/10">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 w-full max-w-lg">
          <div className="relative w-full h-64">
            <div className="absolute inset-0 bg-pelican-lightGray rounded-lg overflow-hidden flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-pelican-slate/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
