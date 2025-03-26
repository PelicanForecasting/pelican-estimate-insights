
import React from 'react';
import MainNavigation from '../navigation/MainNavigation';
import Footer from '../sections/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <MainNavigation />
      
      <main className={`content-top-spacing ${className}`}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
