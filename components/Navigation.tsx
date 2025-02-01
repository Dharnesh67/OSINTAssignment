import React from 'react';
import { ChevronDown } from 'lucide-react';
export const Navigation = () => {
  const navItems = [
    { name: 'Industries', hasDropdown: true },
    { name: 'Products', hasDropdown: true },
    { name: 'Insights', hasDropdown: true },
    { name: 'Training', hasDropdown: false },
    { name: 'Pricing', hasDropdown: false },
  ];
  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <div key={item.name} className="relative group">
          <button className="text-gray-300 hover:text-white flex items-center space-x-1 py-2">
            <span>{item.name}</span>
            {item.hasDropdown && (
              <ChevronDown className="w-4 h-4 group-hover:text-primary transition-colors" />
            )}
          </button>
        </div>
      ))}
    </nav>
  );
};