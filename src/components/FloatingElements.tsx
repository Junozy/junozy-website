
import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated liquid gradient backgrounds - improved with deeper, more dynamic movement */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        {/* Primary gradient blob - enhanced gold hue */}
        <div className="absolute top-1/4 left-1/4 w-[75%] h-[65%] rounded-full blur-[150px] bg-gradient-to-br from-gold-500/15 to-gold-600/10 animate-blob" 
             style={{animationDuration: "38s"}}></div>
        
        {/* Secondary gradient blob - deeper gold with slower movement */}
        <div className="absolute bottom-1/3 right-1/4 w-[60%] h-[55%] rounded-full blur-[180px] bg-gradient-to-tl from-gold-400/12 to-gold-600/8 animate-blob" 
             style={{animationDuration: "42s", animationDelay: "3s"}}></div>
        
        {/* Tertiary gradient blob - warmer tones with wider spread */}
        <div className="absolute top-1/2 -right-[5%] w-[50%] h-[45%] rounded-full blur-[160px] bg-gradient-to-l from-gold-500/10 to-gold-300/6 animate-blob" 
             style={{animationDuration: "45s", animationDelay: "5s"}}></div>
        
        {/* Deep background blob - subtle accent with very slow movement */}
        <div className="absolute bottom-[5%] left-[5%] w-[70%] h-[40%] rounded-full blur-[200px] bg-gradient-to-tr from-gold-600/9 to-gold-400/5 animate-blob" 
             style={{animationDuration: "50s", animationDelay: "7s"}}></div>
        
        {/* Additional ambient blob for richness with different direction */}
        <div className="absolute top-[5%] right-[15%] w-[45%] h-[35%] rounded-full blur-[130px] bg-gradient-to-bl from-gold-300/8 to-gold-500/4 animate-blob" 
             style={{animationDuration: "55s", animationDelay: "2s"}}></div>
             
        {/* Small subtle moving light spots */}
        <div className="absolute top-[20%] left-[40%] w-[10%] h-[10%] rounded-full blur-[50px] bg-gold-400/10 animate-float" 
             style={{animationDuration: "15s"}}></div>
             
        <div className="absolute top-[70%] left-[20%] w-[8%] h-[8%] rounded-full blur-[40px] bg-gold-500/15 animate-float-reverse" 
             style={{animationDuration: "18s", animationDelay: "2s"}}></div>
             
        <div className="absolute top-[30%] right-[15%] w-[12%] h-[12%] rounded-full blur-[60px] bg-gold-300/10 animate-float" 
             style={{animationDuration: "20s", animationDelay: "4s"}}></div>
      </div>
      
      {/* Small glowing sparks scattered throughout */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top section sparks */}
        <div className="absolute top-[10%] left-[15%] w-1.5 h-1.5 rotate-45 bg-gold-400/80 blur-[2px] animate-twinkle" style={{animationDuration: "3s"}}></div>
        <div className="absolute top-[8%] left-[45%] w-1 h-1 rotate-45 bg-gold-300/70 blur-[2px] animate-twinkle" style={{animationDuration: "4s", animationDelay: "1s"}}></div>
        <div className="absolute top-[15%] right-[20%] w-1.5 h-1.5 rotate-45 bg-gold-500/90 blur-[2px] animate-twinkle" style={{animationDuration: "3.5s", animationDelay: "0.5s"}}></div>
        <div className="absolute top-[12%] right-[35%] w-0.5 h-0.5 rotate-45 bg-gold-400/60 blur-[2px] animate-twinkle" style={{animationDuration: "4.5s", animationDelay: "2s"}}></div>
        
        {/* Middle section sparks */}
        <div className="absolute top-[35%] left-[10%] w-1 h-1 rotate-45 bg-gold-300/70 blur-[2px] animate-twinkle" style={{animationDuration: "3.8s", animationDelay: "1.5s"}}></div>
        <div className="absolute top-[40%] left-[25%] w-1.5 h-1.5 rotate-45 bg-gold-500/80 blur-[2px] animate-twinkle" style={{animationDuration: "4.2s"}}></div>
        <div className="absolute top-[38%] right-[15%] w-0.5 h-0.5 rotate-45 bg-gold-400/65 blur-[2px] animate-twinkle" style={{animationDuration: "3.3s", animationDelay: "2.5s"}}></div>
        <div className="absolute top-[45%] right-[40%] w-1 h-1 rotate-45 bg-gold-300/75 blur-[2px] animate-twinkle" style={{animationDuration: "4s", animationDelay: "1s"}}></div>
        <div className="absolute top-[42%] left-[50%] w-1.5 h-1.5 rotate-45 bg-gold-500/70 blur-[2px] animate-twinkle" style={{animationDuration: "3.6s", animationDelay: "0.8s"}}></div>
        
        {/* Lower middle section sparks */}
        <div className="absolute top-[55%] left-[20%] w-0.5 h-0.5 rotate-45 bg-gold-400/60 blur-[2px] animate-twinkle" style={{animationDuration: "4.5s", animationDelay: "2.2s"}}></div>
        <div className="absolute top-[60%] left-[35%] w-1 h-1 rotate-45 bg-gold-300/80 blur-[2px] animate-twinkle" style={{animationDuration: "3.2s", animationDelay: "1.8s"}}></div>
        <div className="absolute top-[58%] right-[25%] w-1.5 h-1.5 rotate-45 bg-gold-500/75 blur-[2px] animate-twinkle" style={{animationDuration: "4.8s"}}></div>
        <div className="absolute top-[62%] right-[10%] w-1 h-1 rotate-45 bg-gold-400/70 blur-[2px] animate-twinkle" style={{animationDuration: "3.5s", animationDelay: "1.3s"}}></div>
        
        {/* Bottom section sparks */}
        <div className="absolute top-[75%] left-[30%] w-1.5 h-1.5 rotate-45 bg-gold-300/85 blur-[2px] animate-twinkle" style={{animationDuration: "4s", animationDelay: "0.5s"}}></div>
        <div className="absolute top-[80%] left-[12%] w-0.5 h-0.5 rotate-45 bg-gold-500/65 blur-[2px] animate-twinkle" style={{animationDuration: "3.7s", animationDelay: "2s"}}></div>
        <div className="absolute top-[78%] right-[30%] w-1 h-1 rotate-45 bg-gold-400/75 blur-[2px] animate-twinkle" style={{animationDuration: "4.3s", animationDelay: "1.2s"}}></div>
        <div className="absolute top-[85%] right-[18%] w-1.5 h-1.5 rotate-45 bg-gold-300/70 blur-[2px] animate-twinkle" style={{animationDuration: "3.9s"}}></div>
        
        {/* Additional scattered sparks */}
        <div className="absolute top-[25%] left-[60%] w-0.5 h-0.5 rotate-45 bg-gold-500/60 blur-[2px] animate-twinkle" style={{animationDuration: "4.6s", animationDelay: "1.5s"}}></div>
        <div className="absolute top-[50%] left-[8%] w-1 h-1 rotate-45 bg-gold-400/80 blur-[2px] animate-twinkle" style={{animationDuration: "3.4s", animationDelay: "0.7s"}}></div>
        <div className="absolute top-[68%] left-[55%] w-1.5 h-1.5 rotate-45 bg-gold-300/65 blur-[2px] animate-twinkle" style={{animationDuration: "4.1s", animationDelay: "2.3s"}}></div>
        <div className="absolute top-[90%] left-[45%] w-0.5 h-0.5 rotate-45 bg-gold-500/75 blur-[2px] animate-twinkle" style={{animationDuration: "3.8s", animationDelay: "1.6s"}}></div>
      </div>
    </div>
  );
};

export default FloatingElements;
