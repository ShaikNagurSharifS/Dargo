import React from 'react';

interface SectionHeadingProps {
  text: string;
  color?: string; // Tailwind gradient color classes
}
// , color = 'from-blue-500 to-indigo-600'
const SectionHeading: React.FC<SectionHeadingProps> = ({ text }) => (
  <h2
    className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-8 mt-8 sm:mt-12 md:mt-16 text-white text-shadow-2xl text-center tracking-wide animate-fade-in`}
    style={{textShadow: '0 2px 16px #000, 0 1px 0 #222'}}
  >
    {text}
  </h2>
);

export default SectionHeading;
