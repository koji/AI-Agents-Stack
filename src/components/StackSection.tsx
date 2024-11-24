import React from 'react';
import {
  Box,
  Boxes,
  Brain,
  Database,
  FlaskConical,
  HardDrive,
  Library,
  Share2
} from 'lucide-react';

interface StackItem {
  name: string;
  logos: string[];
  url: string;
}

interface StackSectionProps {
  title: string;
  items: StackItem[];
  icon: React.ReactNode;
}

export function StackSection({ title, items, icon }: StackSectionProps) {
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
            <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
              <img
                src={item.logos[0]}
                alt={item.name}
                className="h-8 object-contain"
                loading="lazy"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export const sectionIcons = {
  vertical: <Box size={20} />,
  hosting: <Share2 size={20} />,
  observability: <Brain size={20} />,
  frameworks: <Library size={20} />,
  memory: <HardDrive size={20} />,
  tools: <Boxes size={20} />,
  sandboxes: <FlaskConical size={20} />,
  serving: <Database size={20} />,
  storage: <Database size={20} />,
};