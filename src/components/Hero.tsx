
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Auto-play failed:", err);
      });
    }
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay with liquid gold effect */}
      <div className="absolute inset-0 bg-black z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[30%] rounded-full blur-[100px] bg-gold-500/10 animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[25%] rounded-full blur-[100px] bg-gold-500/10 animate-float" style={{animationDelay: "2s"}}></div>
      </div>
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-30"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-12 relative">
            {/* Replace with video if available, otherwise use static image */}
            <video 
              ref={videoRef}
              src="/images/JunozyAnimation - Alpha.mov" 
              poster="/images/JunozyLogoText_NoLogo.png"
              className="w-full max-w-2xl animate-fade-in opacity-0 mx-auto"
              style={{animationDelay: "0.3s"}}
              autoPlay
              muted
              loop
              playsInline
              onError={(e) => {
                // Fallback to image if video fails
                const target = e.target as HTMLVideoElement;
                target.style.display = 'none';
                const img = document.createElement('img');
                img.src = '/images/JunozyLogoText_NoLogo.png';
                img.className = 'w-full max-w-2xl animate-fade-in mx-auto';
                img.alt = 'JUNOZY';
                target.parentNode?.appendChild(img);
              }}
            >
              <source src="/images/JunozyAnimation - Alpha.mov" type="video/mp4" />
              <img 
                src="/images/JunozyLogoText_NoLogo.png" 
                alt="JUNOZY" 
                className="w-full max-w-2xl mx-auto"
              />
            </video>
          </div>
          
          <div className="animate-fade-up opacity-0" style={{animationDelay: "0.6s"}}>
            <button 
              onClick={() => handleScroll('featured-creations')} 
              className="relative inline-block px-6 py-3 font-sans text-sm font-medium uppercase tracking-wider text-black-950 overflow-hidden group"
            >
              {/* Animated gradient background */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 group-hover:bg-gradient-to-l transition-all duration-500 ease-out bg-[length:200%_100%] group-hover:duration-1000 animate-gradient-x"></span>
              
              {/* Glowing border effect */}
              <span className="absolute inset-0 w-full h-full border border-gold-500/50 group-hover:border-gold-500 opacity-70 group-hover:opacity-100 scale-105 group-hover:scale-100 rounded-sm transition-all duration-500"></span>
              
              {/* Inner border animation */}
              <span className="absolute inset-[3px] border border-gold-400/30 rounded-none group-hover:border-gold-400/80 scale-100 group-hover:scale-105 transition-all duration-500"></span>
              
              {/* Button text */}
              <span className="relative text-black-950 group-hover:text-black-950 font-bold transition-colors duration-200 ease-in-out">
                Explore Creations
              </span>
            </button>
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
