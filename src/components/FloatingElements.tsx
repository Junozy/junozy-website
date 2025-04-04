
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gold sparkle elements */}
      <div className="absolute top-[10%] left-[15%] animate-float opacity-70">
        <div className="w-56 h-56 sparkle-animation">
          <img src="/images/sparkle1.png" alt="" className="w-full h-full object-contain gold-filter" />
        </div>
      </div>
      <div className="absolute top-[60%] right-[10%] animate-float opacity-60" style={{animationDelay: "1.2s"}}>
        <div className="w-36 h-36 sparkle-animation" style={{animationDelay: "0.7s"}}>
          <img src="/images/sparkle2.png" alt="" className="w-full h-full object-contain gold-filter" />
        </div>
      </div>
      <div className="absolute top-[30%] right-[25%] animate-float-reverse opacity-40" style={{animationDelay: "0.7s"}}>
        <div className="w-48 h-48 sparkle-animation" style={{animationDelay: "1.2s"}}>
          <img src="/images/sparkle1.png" alt="" className="w-full h-full object-contain gold-filter" />
        </div>
      </div>
      <div className="absolute bottom-[15%] left-[20%] animate-float-reverse opacity-50" style={{animationDelay: "1.5s"}}>
        <div className="w-40 h-40 sparkle-animation" style={{animationDelay: "0.4s"}}>
          <img src="/images/sparkle2.png" alt="" className="w-full h-full object-contain gold-filter" />
        </div>
      </div>
      <div className="absolute top-[80%] right-[30%] animate-float opacity-30" style={{animationDelay: "2s"}}>
        <div className="w-32 h-32 sparkle-animation" style={{animationDelay: "1.6s"}}>
          <img src="/images/sparkle1.png" alt="" className="w-full h-full object-contain gold-filter" />
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;
