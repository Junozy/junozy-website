import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Box } from 'lucide-react';
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
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12", isScrolled ? "py-3 bg-black-950/90 backdrop-blur-md" : "py-5 bg-transparent")}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img alt="JUNOZY" className="h-10 md:h-12" src="/lovable-uploads/c0716380-3c6d-4d5c-89d9-5da8dfe8643c.png" />
        </a>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`block w-6 h-0.5 bg-gold-500 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gold-500 my-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gold-500 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => handleNavClick('featured-creations')} className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors flex items-center">
            <span>Creations</span>
          </button>
          <button onClick={() => handleNavClick('brand-partners')} className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors flex items-center">
            <span>Partners</span>
          </button>
          <button onClick={() => handleNavClick('press')} className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors flex items-center">
            <span>Press</span>
          </button>
          <button onClick={() => handleNavClick('contact')} className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors flex items-center">
            <span>Contact</span>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-60 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col space-y-4 px-4">
          <button onClick={() => handleNavClick('featured-creations')} className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors">
            Creations
          </button>
          <button onClick={() => handleNavClick('brand-partners')} className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors">
            Partners
          </button>
          <button onClick={() => handleNavClick('press')} className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors">
            Press
          </button>
          <button onClick={() => handleNavClick('contact')} className="text-white hover:text-gold-500 text-sm uppercase tracking-widest transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>;
};
export default Navbar;