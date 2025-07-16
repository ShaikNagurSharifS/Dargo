import React from 'react';

interface AboutSectionProps {
  about: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ about }) => (
  <section id="about" className="w-full max-w-2xl md:max-w-5xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col items-center bg-gradient-to-br from-[#0f172a] via-blue-900 to-[#1e293b]">
    <div className="relative w-full flex flex-col items-center animate-fade-in">
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 shadow-lg mb-4">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      </span>
      {/* Heading removed for deduplication; handled by SectionHeading */}
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-l-8 border-blue-500 w-full text-center transition-transform duration-500 hover:scale-105">
        <p className="mt-2 text-base md:text-lg text-gray-700">{about}</p>
      </div>
    </div>
  </section>
);

export default AboutSection;
