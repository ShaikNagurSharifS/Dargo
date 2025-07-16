import React from 'react';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => (
  <nav className={`text-sm text-blue-700 mb-4 ${className}`} aria-label="Breadcrumb">
    <ol className="flex space-x-2">
      {items.map((item, idx) => (
        <li key={item.label} className="flex items-center">
          {item.href ? (
            <a href={item.href} className="hover:underline text-blue-600">{item.label}</a>
          ) : (
            <span>{item.label}</span>
          )}
          {idx < items.length - 1 && <span className="mx-2">/</span>}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
