import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div>
      {items.map((item, idx) => (
        <div key={item.title} className="mb-2">
          <button
            className="w-full text-left font-semibold py-2 px-4 bg-blue-100 rounded-t focus:outline-none"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            {item.title}
          </button>
          {openIdx === idx && (
            <div className="p-4 bg-white border border-t-0 border-blue-200 rounded-b">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
