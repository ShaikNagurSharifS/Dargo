import React from 'react';

interface HeroSectionProps {
  name?: string;
  avatarUrl?: string;
  title?: string;
  contactButtonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name = 'Shaik Nagur',
  avatarUrl = 'src/assets/fantastic-detailed-dragon.jpg',
  title = 'SDET & AI Enthusiast',
  contactButtonText = 'Contact Me',
}) => (
  <section id="hero" className="relative w-full flex flex-col items-center justify-center min-h-[350px] px-4 md:px-8 bg-gradient-to-br from-[#0f172a] via-blue-900 to-[#1e293b] text-white rounded-b-3xl shadow-2xl overflow-hidden border-b-4 border-blue-800">
    {/* Animated background shapes */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-30 animate-pulse" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="100" r="80" fill="#6366f1" />
        <circle cx="700" cy="200" r="120" fill="#a5b4fc" />
        <circle cx="1200" cy="80" r="100" fill="#3b82f6" />
      </svg>
    </div>
    <img src={avatarUrl} alt="Profile" className="relative z-10 mx-auto rounded-full w-28 h-28 md:w-36 md:h-36 border-4 border-white shadow-lg mb-4 object-cover animate-fade-in" />
    <h1 className="relative z-10 text-3xl md:text-4xl font-extrabold mb-2 drop-shadow-lg animate-fade-in">{name}</h1>
    <p className="relative z-10 text-base md:text-lg mb-4 font-medium opacity-90 animate-fade-in delay-100">{title}</p>
    <a href="#contact" className="relative z-10 inline-block bg-white text-blue-700 font-semibold px-5 py-2 md:px-8 md:py-2 rounded shadow hover:bg-blue-100 transition animate-fade-in delay-200">{contactButtonText}</a>
  </section>
);

export default HeroSection;
