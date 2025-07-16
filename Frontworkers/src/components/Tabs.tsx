import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex border-b mb-4">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`px-4 py-2 font-semibold focus:outline-none ${i === active ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
};

export default Tabs;
