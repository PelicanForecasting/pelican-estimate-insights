
import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/sections/Footer';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Resources = () => {
  // Sample blog articles with updated images
  const articles = [
    {
      title: "Are Your Production Rates Real or Wishful Thinking?",
      excerpt: "Many estimators use production rates based on gut feel rather than data. Here's how to establish accurate, data-backed rates for more competitive bids.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      readTime: "5 min read",
      slug: "#"
    },
    {
      title: "When Your Chief Estimator Retires: Preserving Institutional Knowledge",
      excerpt: "The impending retirement of experienced estimators represents a significant risk. Learn how to capture their expertise before it walks out the door.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      readTime: "7 min read",
      slug: "#"
    },
    {
      title: "From Data Rich to Insight Poor: Why Construction Companies Struggle with Analytics",
      excerpt: "Construction generates massive amounts of data, but few companies effectively leverage it. Discover how to turn your data into competitive advantage.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      readTime: "6 min read",
      slug: "#"
    },
    {
      title: "Bid Smart, Not Often: Creating an Objective Project Pursuit Strategy",
      excerpt: "Many contractors bid everything that comes across their desk. Learn how to develop a data-driven approach to project selection that increases win rates.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      readTime: "8 min read",
      slug: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 relative">
        <div className="content-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-pelican-navy mb-6">Construction Estimating Insights</h1>
            <p className="text-lg text-pelican-slate">
              Practical resources, articles, and tools to help you improve your construction estimating processes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Articles Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="content-container">
          <h2 className="text-3xl font-bold text-pelican-navy mb-8">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-pelican-slate mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-pelican-navy mb-3">
                    <a href={article.slug} className="hover:text-secondary transition-colors">
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-pelican-slate mb-4">{article.excerpt}</p>
                  <a 
                    href={article.slug} 
                    className="inline-flex items-center text-secondary font-medium hover:text-pelican-navy transition-colors"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Resource Library Coming Soon */}
          <div className="bg-pelican-navy/5 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-pelican-navy mb-4">Resource Library</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <p className="text-pelican-slate mb-4">
                  Coming soon! Our resource library will feature downloadable templates, checklists, 
                  and guides to help you implement best practices in your estimating department.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Estimating process templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Production rate tracking spreadsheets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Bid/no-bid decision matrices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Risk assessment frameworks</span>
                  </li>
                </ul>
                <Button variant="primary">Join Waitlist</Button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-full"></div>
                  <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                    <img 
                      src="/lovable-uploads/f931ac31-6ce6-4f64-a3dd-0b091a39367a.png" 
                      alt="Resource Library" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Assessment CTA */}
          <div className="text-center max-w-2xl mx-auto bg-pelican-navy/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-pelican-navy mb-4">
              Get Your Free Estimating Maturity Assessment
            </h3>
            <p className="text-pelican-slate mb-6">
              Take our 5-minute assessment to benchmark your estimating capabilities and receive personalized recommendations.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/estimating-maturity">Start Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Resources;
