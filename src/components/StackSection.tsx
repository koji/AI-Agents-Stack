import { FaBoxOpen, FaDatabase, FaBrain, FaRegHardDrive, FaFlask,FaShareNodes ,FaBoxesStacked, FaSwatchbook       } from "react-icons/fa6";

import type { ReactNode } from 'react';

interface StackItem {
  name: string;
  logos: string[];
  url: string;
}

interface StackSectionProps {
  title: string;
  items: StackItem[];
  icon: ReactNode;
}

export function StackSection({ title, items, icon }: StackSectionProps) {
  console.log(items);
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="text-red-500 w-2 h-2 rounded-full" />
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          {icon}
          {title}
        </h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex justify-between items-center gap-x-2 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
              <img
                src={item.logos[0]}
                alt={item.name}
                className="flex-auto h-8 object-contain"
                loading="lazy"
              />
              <p className="flex-auto rounded-lg p-2 bg-slate-600 text-white">{item.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export const sectionIcons = {
  vertical: <FaBoxOpen size={20} />,
  hosting: <FaShareNodes  size={20} />,
  observability: <FaBrain  size={20} />,
  frameworks: <FaSwatchbook  size={20} />,
  memory: <FaRegHardDrive  size={20} />,
  tools: <FaBoxesStacked  size={20} />,
  sandboxes: <FaFlask size={20} />,
  serving: <FaDatabase  size={20} />,
  storage: <FaDatabase  size={20} />,
};
