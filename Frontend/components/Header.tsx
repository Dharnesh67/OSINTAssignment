import React from "react";
import { Navigation } from "./Navigation";
import { Sun } from "lucide-react";
import { Coins } from "lucide-react";
export const Header = () => {
  return (
    <div className="main w-full flex justify-center p-5 ">
      <header className="bg-black-bg border border-white/10 rounded-xl w-3/4 border-opacity-50 overflow-scroll scrollbar-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <span className="text-white text-2xl font-bold">OSINT</span>
              </a>
            </div>
            {/* Main Navigation */}
            <Navigation />
            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <button className="bg-[rgb(26,26,30)] text-white px-5 py-3 rounded-lg flex items-center space-x-2 border border-white/20 border-opacity-50">
                <span>Account</span>
              </button>
              <button >
                <div className="bg-[#5925DC] px-4 py-3 rounded-lg flex items-center space-x-2">
                  <span className="text-white">12</span>
                  <Coins className="w-5 h-5 text-white" />
                </div>
              </button>
              <button className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-nav-hover">
                <Sun className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
