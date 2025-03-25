'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Меню"
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isMenuOpen && (
        <div className={cn(
          "md:hidden fixed inset-x-0 top-16 sm:top-20 p-4 space-y-2 bg-background/95 backdrop-blur-sm border-b",
          "animate-in slide-in-from-top duration-300"
        )}>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              О нас
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#cars" onClick={() => setIsMenuOpen(false)}>
              Автомобили
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Контакты
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start sm:hidden" asChild>
            <a href="tel:+79622699148" onClick={() => setIsMenuOpen(false)}>
              +7 (962) 269-91-48
            </a>
          </Button>
        </div>
      )}
    </>
  );
} 