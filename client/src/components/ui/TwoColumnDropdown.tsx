'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface TwoColumnDropdownProps {
  data: Record<string, string[]>;
}

const TwoColumnDropdown: React.FC<TwoColumnDropdownProps> = ({ data }) => {
  const categories = Object.keys(data);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div
      className="flex w-[650px] max-h-[350px] bg-white rounded shadow-lg border"
      style={{
        margin: '10px', // spacing from the edges
      }}
    >
      {/* Left Column - Categories */}
      <ul className="w-1/3 border-r p-4 space-y-2 text-sm font-medium text-gray-700 overflow-y-auto">
        {categories.map((category) => (
          <li
            key={category}
            onMouseOver={() => setActiveCategory(category)}
            className={`cursor-pointer p-2 rounded ${
              activeCategory === category
                ? 'bg-blue-50 text-blue-600 font-semibold'
                : 'hover:bg-blue-50'
            }`}
          >
            {category}
          </li>
        ))}
      </ul>

      {/* Right Column - Scrollable Items */}
      <div className="w-2/3 p-4 space-y-2 text-sm text-gray-800 overflow-y-auto max-h-[350px]">
        {data[activeCategory]?.map((item) => (
          <Link
            key={item}
            href="#"
            className="block hover:text-blue-600 transition"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TwoColumnDropdown;
