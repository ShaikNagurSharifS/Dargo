import React from 'react';
import type { Experience } from '../components/PortfolioProfile';

interface JourneySectionProps {
  experiences: Experience[];
}

const JourneySection: React.FC<JourneySectionProps> = ({ experiences }) => (
  <section id="journey" className="w-full max-w-2xl md:max-w-5xl mx-auto py-6 sm:py-8 md:py-16 px-2 sm:px-4 md:px-8 flex flex-col items-center bg-gradient-to-br from-[#0f172a] via-blue-900 to-[#1e293b]">
    {/* Heading removed for deduplication; handled by SectionHeading */}
    <div className="relative w-full flex flex-col items-center">
      <svg className="hidden md:block absolute left-1/2 top-0 h-full w-10 -translate-x-1/2 z-0" height="100%" width="40" viewBox="0 0 40 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <rect x="18" y="0" width="4" height="1000" rx="2" fill="url(#lineGradient)">
          <animate attributeName="height" from="0" to="1000" dur="1.2s" fill="freeze" />
        </rect>
      </svg>
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className={`relative z-10 flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} w-full${idx !== experiences.length - 1 ? ' mb-8 md:mb-16' : ''}`}
        >
          <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'}`}>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-2xl p-8 border-l-8 border-blue-500 min-w-[240px] max-w-md transition-transform duration-300 hover:scale-105 hover:shadow-blue-200">
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shadow-lg mr-3 animate-bounce">
                  {idx % 2 === 0 ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12v2m0 4h.01M6 8V6a2 2 0 012-2h8a2 2 0 012 2v2m2 0a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2h16z" /></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487a2.5 2.5 0 013.535 3.535L7.5 20.414l-4 1 1-4L16.862 4.487z" /></svg>
                  )}
                </span>
                <h3 className="text-xl font-bold text-blue-700">{exp.role}</h3>
              </div>
              <span className="block text-base text-gray-700 font-semibold mb-1">{exp.company}</span>
              <span className="block text-xs text-indigo-500 mb-2 font-mono">{exp.period}</span>
              <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
            </div>
          </div>
          <div className="hidden md:flex absolute left-1/2 top-1/2 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full border-4 border-white shadow-xl -translate-x-1/2 -translate-y-1/2 z-20 animate-pulse items-center justify-center">
            <span className="block w-3 h-3 bg-white rounded-full"></span>
          </div>
          {/* Connector line between dots (only on md+ and not after last card) */}
          {idx !== experiences.length - 1 && (
            <div
              className="hidden md:block absolute left-1/2 top-full w-1 h-12 bg-gradient-to-b from-blue-500 to-indigo-500 -translate-x-1/2 z-10"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  </section>
);

export default JourneySection;
