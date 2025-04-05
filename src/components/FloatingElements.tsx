
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gold sparkle elements */}
      <div className="absolute top-[10%] left-[15%] animate-float opacity-70">
        <div className="w-56 h-56 sparkle-animation">
          <img src="/lovable-uploads/a9798156-578b-4d7b-8a13-62978d6dc5b2.png" alt="" className="w-full h-full object-contain gold-filter" />
        </div>
      </div>
      <div className="absolute top-[60%] right-[10%] animate-float opacity-60" style={{animationDelay: "1.2s"}}>
        <div className="w-36 h-36 sparkle-animation" style={{animationDelay: "0.7s"}}>
          <img src="/lovable-uploads/cdf524fb-0180-4aa7-a3c3-62f6339d3d7a.png" alt="" className="w-full h-full object-contain gold-filter" />
        </div>
      </div>
      <div className="absolute top-[30%] right-[25%] animate-float-reverse opacity-40" style={{animationDelay: "0.7s"}}>
        <div className="w-48 h-48 sparkle-animation" style={{animationDelay: "1.2s"}}>
          <img src="/lovable-uploads/6bea946c-5f53-48af-ab93-2d12d0b3cd35.png" alt="" className="w-full h-full object-contain gold-filter" />
        </div>
      </div>
      <div className="absolute bottom-[15%] left-[20%] animate-float-reverse opacity-50" style={{animationDelay: "1.5s"}}>
        <div className="w-40 h-40 sparkle-animation" style={{animationDelay: "0.4s"}}>
          <img src="/lovable-uploads/f0e52323-f434-496b-a5f1-8ada9fe1c266.png" alt="" className="w-full h-full object-contain gold-filter" />
        </div>
      </div>
      <div className="absolute top-[80%] right-[30%] animate-float opacity-30" style={{animationDelay: "2s"}}>
        <div className="w-32 h-32 sparkle-animation" style={{animationDelay: "1.6s"}}>
          <img src="/lovable-uploads/3f6f2183-b2f3-4fb0-b5e5-01575636490c.png" alt="" className="w-full h-full object-contain gold-filter" />
        </div>
      </div>
      
      {/* Animated liquid gradient backgrounds */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        {/* Primary gradient blob */}
        <div className="absolute top-1/4 left-1/4 w-[60%] h-[60%] rounded-full blur-[120px] bg-gold-500/5 animate-blob"></div>
        {/* Secondary gradient blob */}
        <div className="absolute bottom-1/3 right-1/4 w-[45%] h-[50%] rounded-full blur-[100px] bg-gold-500/3 animate-blob" style={{animationDelay: "3s"}}></div>
        {/* Tertiary gradient blob */}
        <div className="absolute top-1/2 -right-[10%] w-[40%] h-[40%] rounded-full blur-[150px] bg-gold-500/4 animate-blob" style={{animationDelay: "5s"}}></div>
        {/* Deep background blob */}
        <div className="absolute bottom-[10%] left-[5%] w-[50%] h-[30%] rounded-full blur-[120px] bg-gold-500/3 animate-blob" style={{animationDelay: "7s"}}></div>
      </div>
    </div>
  );
};

export default FloatingElements;
