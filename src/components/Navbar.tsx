
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        isScrolled ? "py-4 bg-black-900/90 backdrop-blur-md" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl md:text-3xl font-serif gold-text font-bold">JUNOZY</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gold-500 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gold-500 my-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gold-500 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#collections" className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors">Collections</a>
          <a href="#about" className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors">About</a>
          <a href="#contact" className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors">Contact</a>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-60 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col space-y-4 px-4">
          <a 
            href="#collections" 
            className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Collections
          </a>
          <a 
            href="#about" 
            className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
