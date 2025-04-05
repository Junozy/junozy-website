
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Partner = {
  id: number;
  name: string;
  image: string;
};

// Brand partners data
const PARTNERS: Partner[] = [
  {
    id: 1,
    name: "Essence",
    image: "/lovable-uploads/a9798156-578b-4d7b-8a13-62978d6dc5b2.png"
  },
  {
    id: 2,
    name: "JADE",
    image: "/lovable-uploads/6bea946c-5f53-48af-ab93-2d12d0b3cd35.png"
  },
  {
    id: 3,
    name: "The Wild Robot",
    image: "/lovable-uploads/f0e52323-f434-496b-a5f1-8ada9fe1c266.png"
  },
  {
    id: 4,
    name: "The Olympics",
    image: "/lovable-uploads/3f6f2183-b2f3-4fb0-b5e5-01575636490c.png"
  },
  {
    id: 5,
    name: "NLE Choppa",
    image: "/lovable-uploads/24987cf4-fa58-4019-9e93-006ee1a4b9dd.png"
  },
  {
    id: 6,
    name: "The Hunger Games",
    image: "/lovable-uploads/e90bacb4-6aeb-4a6e-809e-9fdfde88b855.png"
  },
  {
    id: 7,
    name: "The US Open",
    image: "/lovable-uploads/f9dcd2cf-512a-4faf-9e0b-1ac626062bde.png"
  },
  {
    id: 8,
    name: "Paris Hilton",
    image: "/lovable-uploads/95a07612-6fda-4c2e-b038-750f983ec9e3.png"
  },
  {
    id: 9,
    name: "Imagine Dragons",
    image: "/lovable-uploads/e3c5b19f-6879-4df9-872b-15eb5c26801e.png"
  },
  {
    id: 10,
    name: "NYX Cosmetics",
    image: "/lovable-uploads/5912bf98-e3dd-4ce5-a53c-eadfa7edd30e.png"
  },
  {
    id: 11,
    name: "Urban Decay",
    image: "/lovable-uploads/909ba671-346e-4c04-bfc8-160cb9512f38.png"
  },
  {
    id: 12,
    name: "Karlie Kloss",
    image: "/lovable-uploads/a9bcca12-8d22-4780-8919-6739d9e9e077.png"
  },
  {
    id: 13,
    name: "Elton John",
    image: "/lovable-uploads/ae2e28c8-403f-4edc-b57f-393716cb7159.png"
  },
  {
    id: 14,
    name: "Walmart",
    image: "/lovable-uploads/f9e8a9d6-ce24-476f-bd6c-da3942cdd7e7.png"
  },
  {
    id: 15,
    name: "Hot Topic",
    image: "/lovable-uploads/fddeeebf-c988-46a7-a24b-4b042095f4b5.png"
  },
  {
    id: 16,
    name: "Tommy Hilfiger",
    image: "/lovable-uploads/b32b91e9-347a-4350-9234-377fd95af771.png"
  },
  {
    id: 17,
    name: "The Grammy Awards",
    image: "/lovable-uploads/30257aae-5c5c-4d3f-9fd1-a3a1e10ba42e.png"
  },
  {
    id: 18,
    name: "Catalog Avatar Creator",
    image: "/lovable-uploads/76343655-1d04-471c-aa2d-90c182c09e52.png"
  },
  {
    id: 19,
    name: "Samsung",
    image: "/lovable-uploads/fd060f58-b583-4c80-ab2d-6f89b001930f.png"
  },
  {
    id: 20,
    name: "NCT 127",
    image: "/lovable-uploads/cdf524fb-0180-4aa7-a3c3-62f6339d3d7a.png"
  }
];

// Logos for the multi-row carousel 
const LOGO_BRANDS = [
  "Elton John", "Imagine Dragons", "Charli XCX", "NCT 127", "NLE Choppa", "The Backstreet Boys", 
  "Monstercat", "Jade Thirlwall", "Mimi Webb", "Kerwin Frost", "Camilo", "Forever 21", 
  "Tommy Hilfiger", "Hot Topic", "Paris Hilton", "Karlie Kloss", "Urban Decay", "Lancôme", 
  "L'Oréal", "Nyx Cosmetics", "essence", "NIVEA", "The Hunger Games", "The Wild Robot", 
  "Star Trek", "The Grammy Awards", "The 2024 Paris Olympics", "The US Open", "Samsung", 
  "Beats By Dre", "Mastercard", "FreshCut", "Walmart", "Care Bears", "Barbie", 
  "Singapore Changi Airport", "Sawhorse Productions", "Dubit", "Super League Gaming", 
  "The Gang Sweden", "GEEIQ", "Infinite Canvas", "Virtual Brand Group", "Exclusible", 
  "Fullflower Studio", "Simple Games", "Offpath Games", "Catalog Avatar Creator", "Roblox"
];

// Group logos into sets of 3 for the triple-row carousel
const GROUPED_LOGOS = (() => {
  const groups = [];
  for (let i = 0; i < LOGO_BRANDS.length; i += 3) {
    groups.push(LOGO_BRANDS.slice(i, i + 3));
  }
  return groups;
})();

const BrandPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const logoCarouselRef = useRef<HTMLDivElement>(null);
  
  // Main partners carousel controls
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PARTNERS.length);
    setAutoplay(false);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + PARTNERS.length) % PARTNERS.length);
    setAutoplay(false);
  };
  
  // Autoplay for main carousel
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PARTNERS.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  return (
    <section id="brand-partners" className="py-24 bg-black-950 relative">
      {/* Gold liquid gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[35%] h-[40%] rounded-full blur-[120px] bg-gold-500/5 animate-blob" style={{animationDuration: "20s"}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-[30%] h-[35%] rounded-full blur-[100px] bg-gold-500/5 animate-blob" style={{animationDuration: "15s", animationDelay: "5s"}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="gold-text">Brand</span> <span className="text-white">Partners</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto"></div>
        </div>
        
        {/* Partners Carousel */}
        <div className="relative h-[400px] mb-20">
          <div 
            ref={carouselRef}
            className="absolute w-full h-full overflow-hidden rounded-lg"
          >
            {PARTNERS.map((partner, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + PARTNERS.length) % PARTNERS.length;
              const isNext = index === (currentIndex + 1) % PARTNERS.length;
              const isSecondNext = index === (currentIndex + 2) % PARTNERS.length;
              const isSecondPrev = index === (currentIndex - 2 + PARTNERS.length) % PARTNERS.length;
              
              let position = "hidden";
              let transform = "";
              let opacity = 0;
              let scale = 0.7;
              let zIndex = 0;
              
              if (isActive) {
                position = "block";
                transform = "translateX(0)";
                opacity = 1;
                scale = 1;
                zIndex = 30;
              } else if (isPrev) {
                position = "block";
                transform = "translateX(-75%)";
                opacity = 0.7;
                zIndex = 20;
              } else if (isNext) {
                position = "block";
                transform = "translateX(75%)";
                opacity = 0.7;
                zIndex = 20;
              } else if (isSecondPrev) {
                position = "block";
                transform = "translateX(-150%)";
                opacity = 0.4;
                scale = 0.65;
                zIndex = 10;
              } else if (isSecondNext) {
                position = "block";
                transform = "translateX(150%)";
                opacity = 0.4;
                scale = 0.65;
                zIndex = 10;
              }
              
              return (
                <div
                  key={partner.id}
                  className={`absolute top-0 left-0 right-0 bottom-0 transition-all duration-700 ease-out ${position}`}
                  style={{ 
                    transform: transform, 
                    opacity: opacity, 
                    scale: scale.toString(),
                    zIndex: zIndex
                  }}
                >
                  <div className="bg-black-900 border border-gold-500/30 rounded-lg overflow-hidden h-full shadow-xl">
                    <div className="relative h-full">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black-950/60 flex items-center justify-center">
                        <h3 className="text-4xl text-gold-500 font-serif font-bold">{partner.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-black-950/50 text-white flex items-center justify-center border border-gold-500/30 hover:bg-gold-500 hover:text-black-950 transition-all focus:outline-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-black-950/50 text-white flex items-center justify-center border border-gold-500/30 hover:bg-gold-500 hover:text-black-950 transition-all focus:outline-none"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Navigation Dots */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {PARTNERS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-gold-500 scale-125" : "bg-gold-500/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Three-row Logo Carousel - Now with smooth infinite scrolling */}
        <div className="mt-24 relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-10">
            <span className="text-white">Our</span> <span className="gold-text">Collaborations</span>
          </h3>
          
          <div 
            ref={logoCarouselRef}
            className="py-8 relative"
          >
            {/* Row 1 - Moves left to right */}
            <div className="flex space-x-8 animate-infinite-scroll whitespace-nowrap">
              {/* First set of logos */}
              {GROUPED_LOGOS.slice(0, Math.ceil(GROUPED_LOGOS.length / 3)).map((group, index) => (
                <div key={`row1-${index}`} className="flex space-x-8">
                  {group.map((brand, idx) => (
                    <div 
                      key={`row1-${index}-${idx}`} 
                      className="flex items-center justify-center min-w-[150px] h-12 bg-black-900 border border-gold-500/20 rounded-lg px-4"
                    >
                      <span className="text-gold-500 text-sm font-medium truncate">{brand}</span>
                    </div>
                  ))}
                </div>
              ))}
              {/* Duplicate set for seamless scrolling */}
              {GROUPED_LOGOS.slice(0, Math.ceil(GROUPED_LOGOS.length / 3)).map((group, index) => (
                <div key={`row1-dup-${index}`} className="flex space-x-8">
                  {group.map((brand, idx) => (
                    <div 
                      key={`row1-dup-${index}-${idx}`} 
                      className="flex items-center justify-center min-w-[150px] h-12 bg-black-900 border border-gold-500/20 rounded-lg px-4"
                    >
                      <span className="text-gold-500 text-sm font-medium truncate">{brand}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            {/* Row 2 - Moves right to left */}
            <div className="flex space-x-8 animate-infinite-scroll-reverse whitespace-nowrap mt-8">
              {/* First set of logos */}
              {GROUPED_LOGOS.slice(
                Math.ceil(GROUPED_LOGOS.length / 3), 
                Math.ceil(GROUPED_LOGOS.length / 3) * 2
              ).map((group, index) => (
                <div key={`row2-${index}`} className="flex space-x-8">
                  {group.map((brand, idx) => (
                    <div 
                      key={`row2-${index}-${idx}`} 
                      className="flex items-center justify-center min-w-[150px] h-12 bg-black-900 border border-gold-500/20 rounded-lg px-4"
                    >
                      <span className="text-gold-500 text-sm font-medium truncate">{brand}</span>
                    </div>
                  ))}
                </div>
              ))}
              {/* Duplicate set for seamless scrolling */}
              {GROUPED_LOGOS.slice(
                Math.ceil(GROUPED_LOGOS.length / 3), 
                Math.ceil(GROUPED_LOGOS.length / 3) * 2
              ).map((group, index) => (
                <div key={`row2-dup-${index}`} className="flex space-x-8">
                  {group.map((brand, idx) => (
                    <div 
                      key={`row2-dup-${index}-${idx}`} 
                      className="flex items-center justify-center min-w-[150px] h-12 bg-black-900 border border-gold-500/20 rounded-lg px-4"
                    >
                      <span className="text-gold-500 text-sm font-medium truncate">{brand}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            {/* Row 3 - Moves left to right */}
            <div className="flex space-x-8 animate-infinite-scroll whitespace-nowrap mt-8">
              {/* First set of logos */}
              {GROUPED_LOGOS.slice(
                Math.ceil(GROUPED_LOGOS.length / 3) * 2
              ).map((group, index) => (
                <div key={`row3-${index}`} className="flex space-x-8">
                  {group.map((brand, idx) => (
                    <div 
                      key={`row3-${index}-${idx}`} 
                      className="flex items-center justify-center min-w-[150px] h-12 bg-black-900 border border-gold-500/20 rounded-lg px-4"
                    >
                      <span className="text-gold-500 text-sm font-medium truncate">{brand}</span>
                    </div>
                  ))}
                </div>
              ))}
              {/* Duplicate set for seamless scrolling */}
              {GROUPED_LOGOS.slice(
                Math.ceil(GROUPED_LOGOS.length / 3) * 2
              ).map((group, index) => (
                <div key={`row3-dup-${index}`} className="flex space-x-8">
                  {group.map((brand, idx) => (
                    <div 
                      key={`row3-dup-${index}-${idx}`} 
                      className="flex items-center justify-center min-w-[150px] h-12 bg-black-900 border border-gold-500/20 rounded-lg px-4"
                    >
                      <span className="text-gold-500 text-sm font-medium truncate">{brand}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for seamless effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black-950 to-transparent z-10"></div>
        </div>
      </div>
      
      {/* Separator line between sections */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-30"></div>
    </section>
  );
};

export default BrandPartners;
