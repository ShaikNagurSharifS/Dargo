import React, { useState } from 'react';

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === items.length - 1 ? 0 : i + 1));
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-center mb-2">
        <button onClick={prev} className="px-2 py-1 text-blue-600">&#8592;</button>
        <div className="flex-1 mx-2">{items[idx]}</div>
        <button onClick={next} className="px-2 py-1 text-blue-600">&#8594;</button>
      </div>
      <div className="flex justify-center gap-1">
        {items.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === idx ? 'bg-blue-600' : 'bg-blue-200'}`}></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
