import React from 'react';

const HerokuSection: React.FC = () => (
  <section id="heroku" className="w-full max-w-2xl md:max-w-5xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col items-center relative bg-gradient-to-br from-[#0f172a] via-blue-900 to-[#1e293b]">
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg width="100%" height="100%" className="opacity-10 animate-pulse" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="60" width="200" height="120" rx="40" fill="#e5e7eb" />
        <ellipse cx="400" cy="180" rx="80" ry="40" fill="#f3f4f6" />
        <ellipse cx="700" cy="100" rx="60" ry="30" fill="#e5e7eb" />
      </svg>
    </div>
    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-700 shadow-lg z-10 animate-bounce">
      {/* Heroku icon */}
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#70806bff" strokeWidth="2" fill="#fff"/><path d="M8 8h8M8 16l8-8" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/></svg>
    </span>
    {/* Heading removed for deduplication; handled by SectionHeading */}
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 w-full text-center z-10 animate-fade-in">
      <p className="text-base md:text-lg text-gray-700">
        I have extensive experience deploying, managing, and scaling applications on Heroku. From CI/CD pipelines to environment configuration and add-on integration, I leverage Heroku's platform to deliver robust, production-ready web solutions.
      </p>
      <ul className="text-left list-disc list-inside text-gray-700">
        <li>Automated deployments with GitHub integration</li>
        <li>Custom buildpacks and environment variables</li>
        <li>Scaling dynos and optimizing performance</li>
        <li>Integrating add-ons: Postgres, Redis, and more</li>
        <li>Monitoring, logging, and troubleshooting</li>
      </ul>
    </div>
  </section>
);

export default HerokuSection;
