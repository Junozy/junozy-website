
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
    </div>
  );
};

export default FloatingElements;
