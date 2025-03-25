
import React from 'react';

const ContactInfo = () => {
  return (
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
            <p className="text-pelican-grey">(318) 308-4826</p>
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
            <p className="text-pelican-grey">201 Rue Beauregard STE 202<br />Lafayette, LA 70508</p>
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
  );
};

export default ContactInfo;
