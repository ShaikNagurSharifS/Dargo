import React from 'react';
import type { Project } from '../components/PortfolioProfile';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => (
  <section id="projects" className="w-full max-w-2xl md:max-w-5xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col items-center bg-gradient-to-br from-[#0f172a] via-blue-900 to-[#1e293b]">
    <div className="relative w-full flex flex-col items-center">
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 shadow-lg mb-4">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
      </span>
      {/* Heading removed for deduplication; handled by SectionHeading */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-8 w-full">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border-l-8 border-blue-500 w-full md:w-[calc(33.333%-1.5rem)] max-w-md transition-transform duration-500 hover:scale-105 hover:shadow-blue-200 animate-slide-in">
            <div className="flex items-center mb-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white shadow-lg mr-3 animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
              </span>
              <h3 className="text-xl font-bold text-indigo-700">{project.name}</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">{project.description}</p>
            <a href={project.link} className="text-indigo-600 hover:underline font-medium">View Project</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
