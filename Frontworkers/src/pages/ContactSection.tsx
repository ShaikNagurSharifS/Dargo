import React from 'react';

const ContactSection: React.FC = () => (
  <section id="contact" className="w-full max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-8 xl:px-0 flex flex-col items-center relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-blue-900 to-[#1e293b]">
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg width="100%" height="100%" className="opacity-20 animate-pulse" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="60" fill="#6366f1" />
        <circle cx="400" cy="200" r="100" fill="#3b82f6" />
        <circle cx="700" cy="100" r="80" fill="#a5b4fc" />
      </svg>
    </div>
    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 shadow-lg mb-4 z-10 animate-bounce">
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
    </span>
    {/* Heading removed for deduplication; handled by SectionHeading */}
    <div className="w-full flex justify-center z-10">
      <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border-l-8 border-blue-500 w-full max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl transition-transform duration-300 hover:scale-105 hover:shadow-blue-200">
        <form className="space-y-4 mt-2">
          <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
          <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" />
          <textarea placeholder="Your Message" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded hover:bg-blue-700 transition text-sm md:text-base">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
