import React from 'react';

interface SocialLinksProps {
  links: { href: string; icon: React.ReactNode; label: string }[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = '' }) => (
  <div className={`flex gap-4 ${className}`}>
    {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className="text-blue-500 hover:text-blue-700 text-2xl"
      >
        {link.icon}
      </a>
    ))}
  </div>
);

export default SocialLinks;
