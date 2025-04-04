
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-950 via-black-900/90 to-black-950 z-0"></div>
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-30"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-in opacity-0" style={{animationDelay: "0.3s"}}>
            <span className="gold-text">VIRTUAL</span> <span className="text-white">ELEGANCE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl animate-fade-up opacity-0" style={{animationDelay: "0.6s"}}>
            Redefining luxury fashion in the digital realm. Junozy creates exquisite virtual garments crafted at the intersection of haute couture and technology.
          </p>
          
          <div className="animate-fade-up opacity-0" style={{animationDelay: "0.9s"}}>
            <a href="#collections" className="gold-button rounded-sm">
              Explore Collections
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in opacity-0" style={{animationDelay: "1.2s"}}>
        <span className="text-gold-500 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
