
import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const FloatingElements = () => {
  // State to track which sparkles are actively shimmering
  const [activeShimmer, setActiveShimmer] = useState<number[]>([]);

  // Randomly trigger shimmer effect on sparkles
  useEffect(() => {
    const shimmerInterval = setInterval(() => {
      const sparkleIndex = Math.floor(Math.random() * 7);
      setActiveShimmer(prev => {
        if (prev.includes(sparkleIndex)) {
          return prev.filter(i => i !== sparkleIndex);
        } else {
          return [...prev, sparkleIndex];
        }
      });
      
      // Reset shimmer after a short duration
      setTimeout(() => {
        setActiveShimmer(prev => prev.filter(i => i !== sparkleIndex));
      }, 800);
    }, 2000);

    return () => clearInterval(shimmerInterval);
  }, []);

  // Create a shimmer class based on active state
  const getShimmerClass = (index: number) => {
    return activeShimmer.includes(index) ? "animate-pulse gold-glow brightness-150" : "";
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gold sparkle elements */}
      <div className="absolute top-[10%] left-[15%] animate-float opacity-70">
        <div className={`w-16 h-16 ${getShimmerClass(0)}`}>
          <img src="/images/sparkle1.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="absolute top-[60%] right-[10%] animate-float opacity-60" style={{animationDelay: "1.2s"}}>
        <div className={`w-20 h-20 ${getShimmerClass(1)}`} style={{animationDelay: "0.7s"}}>
          <img src="/images/sparkle2.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="absolute top-[30%] right-[25%] animate-float-reverse opacity-40" style={{animationDelay: "0.7s"}}>
        <div className={`w-12 h-12 ${getShimmerClass(2)}`} style={{animationDelay: "1.2s"}}>
          <Sparkles className="w-full h-full text-gold-500/70" />
        </div>
      </div>
      <div className="absolute bottom-[15%] left-[20%] animate-float-reverse opacity-50" style={{animationDelay: "1.5s"}}>
        <div className={`w-16 h-16 ${getShimmerClass(3)}`} style={{animationDelay: "0.4s"}}>
          <img src="/images/sparkle1.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="absolute top-[80%] right-[30%] animate-float opacity-30" style={{animationDelay: "2s"}}>
        <div className={`w-14 h-14 ${getShimmerClass(4)}`} style={{animationDelay: "1.6s"}}>
          <img src="/images/sparkle2.png" alt="" className="w-full h-full object-contain rotate-45" />
        </div>
      </div>
      <div className="absolute top-[20%] right-[50%] animate-float opacity-50" style={{animationDelay: "1s"}}>
        <div className={`w-16 h-16 ${getShimmerClass(5)}`} style={{animationDelay: "0.9s"}}>
          <Sparkles className="w-full h-full text-gold-500/60" />
        </div>
      </div>
      <div className="absolute top-[40%] left-[30%] animate-float-reverse opacity-60" style={{animationDelay: "1.8s"}}>
        <div className={`w-20 h-20 ${getShimmerClass(6)}`} style={{animationDelay: "1.3s"}}>
          <img src="/images/sparkle1.png" alt="" className="w-full h-full object-contain -rotate-45" />
        </div>
      </div>
      
      {/* Animated liquid gradient backgrounds - improved with deeper colors and more dynamic movement */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        {/* Primary gradient blob - more gold hue */}
        <div className="absolute top-1/4 left-1/4 w-[65%] h-[65%] rounded-full blur-[120px] bg-gradient-to-br from-gold-500/15 to-gold-600/10 animate-blob" 
             style={{animationDuration: "30s"}}></div>
        
        {/* Secondary gradient blob - deeper gold */}
        <div className="absolute bottom-1/3 right-1/4 w-[50%] h-[55%] rounded-full blur-[150px] bg-gradient-to-tl from-gold-400/8 to-gold-600/5 animate-blob" 
             style={{animationDuration: "25s", animationDelay: "3s"}}></div>
        
        {/* Tertiary gradient blob - warmer tones */}
        <div className="absolute top-1/2 -right-[10%] w-[45%] h-[45%] rounded-full blur-[130px] bg-gradient-to-l from-gold-500/7 to-gold-300/4 animate-blob" 
             style={{animationDuration: "32s", animationDelay: "5s"}}></div>
        
        {/* Deep background blob - subtle accent */}
        <div className="absolute bottom-[10%] left-[5%] w-[60%] h-[40%] rounded-full blur-[180px] bg-gradient-to-tr from-gold-600/6 to-gold-400/3 animate-blob" 
             style={{animationDuration: "28s", animationDelay: "7s"}}></div>
        
        {/* Additional ambient blob for richness */}
        <div className="absolute top-[5%] right-[15%] w-[40%] h-[30%] rounded-full blur-[100px] bg-gradient-to-bl from-gold-300/5 to-gold-500/3 animate-blob" 
             style={{animationDuration: "35s", animationDelay: "2s"}}></div>
      </div>
    </div>
  );
};

export default FloatingElements;
