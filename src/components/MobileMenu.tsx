'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Меню"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-2 animate-fadeIn border-t border-gray-100">
          <div className="flex flex-col gap-2">
            <a href="#about" 
               className="text-gray-600 hover:text-black transition-colors px-4 py-3 hover:bg-gray-50 rounded-lg text-sm sm:text-base"
               onClick={() => setIsMenuOpen(false)}>
              О нас
            </a>
            <a href="#cars" 
               className="text-gray-600 hover:text-black transition-colors px-4 py-3 hover:bg-gray-50 rounded-lg text-sm sm:text-base"
               onClick={() => setIsMenuOpen(false)}>
              Автомобили
            </a>
            <a href="#contact" 
               className="text-gray-600 hover:text-black transition-colors px-4 py-3 hover:bg-gray-50 rounded-lg text-sm sm:text-base"
               onClick={() => setIsMenuOpen(false)}>
              Контакты
            </a>
            <a href="tel:+79622699148" 
               className="sm:hidden text-gray-600 hover:text-black transition-colors px-4 py-3 hover:bg-gray-50 rounded-lg text-sm"
               onClick={() => setIsMenuOpen(false)}>
              +7 (962) 269-91-48
            </a>
          </div>
        </div>
      )}
    </>
  );
} 