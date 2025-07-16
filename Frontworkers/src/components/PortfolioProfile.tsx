import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import HeroSection from '../pages/HeroSection';
import AboutSection from '../pages/AboutSection';
import JourneySection from '../pages/JourneySection';
import ProjectsSection from '../pages/ProjectsSection';
import HerokuSection from '../pages/HerokuSection';
import SectionHeading from './SectionHeading';
import Button from './Button';
import Card from './Card';
import Tabs from './Tabs';
import Accordion from './Accordion';
import Tooltip from './Tooltip';
import Toast from './Toast';
import ProgressBar from './ProgressBar';
import Carousel from './Carousel';
import SocialLinks from './SocialLinks';
// import ThemeSwitcher from './ThemeSwitcher';

import Modal from './Modal';
import ErrorBoundary from './ErrorBoundary';

import SearchBar from './SearchBar';
import Breadcrumbs from './Breadcrumbs';
import Loader from './Loader';
import Footer from './Footer';

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  link: string;
}

interface ContactFormWithUXProps {
  loading: boolean;
  setLoading: (v: boolean) => void;
  setShowModal: (v: boolean) => void;
}


const ContactFormWithUX: React.FC<ContactFormWithUXProps> = ({ loading, setLoading, setShowModal }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setShowModal(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 2000);
    }, 1500);
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto flex flex-col gap-4 relative">
      <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="border p-2 rounded" />
      <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="border p-2 rounded" />
      <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Message" className="border p-2 rounded" />
      <div className="flex items-center gap-4 mt-2">
        <Tooltip text="Send Message">
          <Button type="submit" disabled={loading}>{loading ? <Loader /> : 'Send'}</Button>
        </Tooltip>
        {sent && <span className="text-green-600">Sent!</span>}
      </div>
    </form>
  );
};

const defaultExperiences: Experience[] = [
  {
    company: 'Infosys',
    role: 'System Engineer',
    period: '2022 - 2023',
    description: 'Building scalable web applications with React, TypeScript, and TailwindCSS.'
  },
  {
    company: 'Infosys',
    role: 'SDET',
    period: '2023 - Present',
    description: 'Designed and prototyped user interfaces for SaaS products.'
  },{
    company: 'Infosys',
    role: 'System Engineer',
    period: '2022 - 2023',
    description: 'Building scalable web applications with React, TypeScript, and TailwindCSS.'
  },
  {
    company: 'Infosys',
    role: 'SDET',
    period: '2023 - Present',
    description: 'Designed and prototyped user interfaces for SaaS products.'
  }
];

const defaultProjects: Project[] = [
  {
    name: 'Project Atlas',
    description: 'A platform for real-time data visualization.',
    link: '#'
  },
  {
    name: 'Portfolio Builder',
    description: 'A tool to create and manage personal portfolios.',
    link: '#'
  },
  {
    name: 'Project Atlas',
    description: 'A platform for real-time data visualization.',
    link: '#'
  },
  {
    name: 'Portfolio Builder',
    description: 'A tool to create and manage personal portfolios.',
    link: '#'
  }
];


export interface PortfolioProfileProps {
  about?: string;
  experiences?: Experience[];
  projects?: Project[];
}


export default function PortfolioProfile({
  about = 'I am a passionate Software Development Engineer in Test (SDET) with hands-on experience in manual testing, automation, and end-to-end quality engineering. My journey includes delivering robust manual test strategies, building scalable automation frameworks, and driving quality as a core member of SDET teams. I thrive on ensuring software reliability, collaborating with cross-functional teams, and continuously learning new technologies to enhance product quality. My portfolio showcases successful projects in manual testing, automation, and SDET roles, reflecting my commitment to excellence and innovation in software quality assurance.',
  experiences = defaultExperiences,
  projects = defaultProjects,
}: PortfolioProfileProps) {
  // Example data for Tabs, Accordion, Carousel, SocialLinks, Breadcrumbs
  const skillsTabs = [
    { label: 'Frontend', content: <ul className="list-disc ml-6 text-left"><li>React</li><li>TypeScript</li><li>TailwindCSS</li></ul> },
    { label: 'Backend', content: <ul className="list-disc ml-6 text-left"><li>Node.js</li><li>Express</li><li>PostgreSQL</li></ul> },
    { label: 'Testing', content: <ul className="list-disc ml-6 text-left"><li>Jest</li><li>Cypress</li><li>Playwright</li></ul> },
  ];
  const faqAccordion = [
    { title: 'What is your main expertise?', content: 'SDET, Automation, Manual Testing, Frontend.' },
    { title: 'Are you open to freelance?', content: 'Yes, open to freelance and contract work.' },
    { title: 'How to contact you?', content: 'Use the contact form below or email me.' },
  ];
  // SearchBar state example
  const [searchQuery, setSearchQuery] = useState('');
  // Filtered projects for carousel (search)
  const filteredProjects = projects.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  // Always show all projects in ProjectsSection, but filter carousel on search
  const carouselProjects = searchQuery ? filteredProjects : projects;
  // Group projects into slides of 3 for the carousel
  const groupSize = 3;
  const carouselItems = [];
  for (let i = 0; i < carouselProjects.length; i += groupSize) {
    const group = carouselProjects.slice(i, i + groupSize);
    carouselItems.push(
      <div
        key={i}
        className="flex flex-wrap gap-4 justify-center items-stretch px-2 sm:px-0"
      >
        {group.map((project, idx) => (
          <div
            key={project.name + idx}
            className="flex flex-col items-center justify-center p-3 sm:p-4 w-full sm:w-80 bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-lg mb-4 sm:mb-0 transition-colors"
            style={{ maxWidth: '100%', minWidth: 0 }}
          >
            <img
              src={`https://placehold.co/300x180?text=${encodeURIComponent(project.name)}`}
              alt={project.name}
              className="rounded-xl mb-2 w-full h-auto object-cover"
              style={{ maxWidth: 320 }}
            />
            <div className="text-center">
              <div className="font-semibold break-words text-gray-900 dark:text-gray-100">{project.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-300 mb-2 break-words">{project.description}</div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (carouselItems.length === 0) {
    carouselItems.push(<div key="no-projects" className="text-center text-gray-500 p-8">No projects found.</div>);
  }
  const socialLinks = [
    { href: 'https://github.com/', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" /></svg>, label: 'GitHub' },
    { href: 'https://linkedin.com/', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" /></svg>, label: 'LinkedIn' },
  ];
  const breadcrumbs = [
    { label: 'Home', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Current' },
  ];
  // Toast state example
  const [showToast, setShowToast] = useState(false);
  // Loader state for contact form
  const [loading, setLoading] = useState(false);
  // Modal state for contact form success
  const [showModal, setShowModal] = useState(false);
  return (
    <ErrorBoundary>
      <MainLayout>
        <div className="flex justify-between items-center w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0 py-4">
          <Breadcrumbs items={breadcrumbs} className="text-white" />
        </div>
        <HeroSection />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 xl:px-0 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="space-y-8 sm:space-y-10">
            <SectionHeading text="About Me" />
            <Card>
              <AboutSection about={about} />
              <div className="mt-4 flex flex-col md:flex-row gap-4 items-center justify-center">
                <Tooltip text="Click to greet!">
                  <Button onClick={() => setShowToast(true)}>Say Hello</Button>
                </Tooltip>
                <Tooltip text="Download Resume">
                  <Button variant="secondary">Download CV</Button>
                </Tooltip>
              </div>
              <div className="mt-6">
                <Tabs tabs={skillsTabs} />
              </div>
              <div className="mt-6">
                <Accordion items={faqAccordion} />
              </div>
              <div className="mt-6">
                <ProgressBar value={90} label="Manual Testing" />
                <ProgressBar value={80} label="Automation" />
                <ProgressBar value={75} label="SDET" />
              </div>
            </Card>
            <SectionHeading text="My Journey" />
            <Card>
              <JourneySection experiences={experiences} />
            </Card>
            <SectionHeading text="Projects" />
            <Card>
              <div className="mb-6">
                <SearchBar onSearch={setSearchQuery} placeholder="Search projects..." />
              </div>
              <Carousel items={carouselItems} />
              <div className="mt-6">
                {projects.length > 0 ? (
                  <ProjectsSection projects={projects} />
                ) : (
                  <div className="text-center text-gray-500">No projects found.</div>
                )}
              </div>
            </Card>
            <SectionHeading text="Experience" />
            <Card>
              <HerokuSection />
            </Card>
            <SectionHeading text="Contact" />
            <Card>
              {/* Enhanced ContactForm with loader and modal */}
              <ContactFormWithUX 
                loading={loading} 
                setLoading={setLoading} 
                setShowModal={setShowModal} 
              />
              <SocialLinks 
                links={socialLinks.map(link => ({
                  ...link,
                  icon: <Tooltip text={link.label}>{link.icon}</Tooltip>
                }))}
              />
            </Card>
          </div>
          {showToast && <Toast message="Hello! Thanks for visiting." type="success" />}
        </div>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Thank you!</h3>
            <p>Your message has been sent successfully.</p>
            <Button className="mt-4" onClick={() => setShowModal(false)}>Close</Button>
          </div>
        </Modal>
        {/* Only one Footer at the bottom! */}
        <Footer />
      </MainLayout>
    </ErrorBoundary>
  );
}
