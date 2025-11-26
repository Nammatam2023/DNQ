import React from 'react';
import { Activity } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100 shadow-sm">
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Representation */}
          <div className="w-10 h-10 md:w-12 md:h-12 bg-dnq-dark rounded-xl flex items-center justify-center relative overflow-hidden shadow-lg">
             <div className="absolute inset-0 bg-dnq-teal opacity-50 transform rotate-45 translate-y-4"></div>
             <span className="relative text-white font-black text-xl tracking-tighter z-10">DNQ</span>
          </div>
          <div>
            <h1 className="font-bold text-lg md:text-xl text-dnq-dark leading-none">Flow Home Ward</h1>
            <p className="text-xs text-gray-500 mt-1">Doctor & Nurse Quality</p>
          </div>
        </div>
        <a 
          href="#"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-dnq-teal/10 text-dnq-teal rounded-lg hover:bg-dnq-teal/20 transition-colors font-medium text-sm"
        >
          <Activity size={16} />
          <span>Dashboard</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
