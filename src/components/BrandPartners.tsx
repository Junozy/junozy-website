
import React, { useState, useEffect, useRef } from 'react';

type Partner = {
  id: number;
  name: string;
  image: string;
};

type Feature = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const PARTNERS: Partner[] = [
  {
    id: 1,
    name: "Partner 1",
    image: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Partner 2",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1950&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Partner 3",
    image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Partner 4",
    image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=1936&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Partner 5",
    image: "https://images.unsplash.com/photo-1531053270060-6643c9e70715?q=80&w=1974&auto=format&fit=crop"
  }
];

const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Game Developer Conference",
    description: "Junozy showcased virtual fashion innovations at GDC 2023",
    image: "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1974&auto=format&fit=crop",
    link: "https://example.com/feature1"
  },
  {
    id: 2,
    title: "Metaverse Fashion Week",
    description: "Our digital couture collection was featured in MVFW",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1950&auto=format&fit=crop",
    link: "https://example.com/feature2"
  },
  {
    id: 3,
    title: "Virtual Reality Expo",
    description: "Junozy's innovations in virtual wearables highlighted at VRX",
    image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1470&auto=format&fit=crop",
    link: "https://example.com/feature3"
  }
];

const BrandPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PARTNERS.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="brand-partners" className="py-24 bg-black-950">
      <div className="container mx-auto px-6">
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
            className="absolute w-full h-full perspective-1000"
          >
            {PARTNERS.map((partner, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + PARTNERS.length) % PARTNERS.length;
              const isNext = index === (currentIndex + 1) % PARTNERS.length;
              
              let position = "hidden";
              let transform = "";
              
              if (isActive) {
                position = "block z-20";
                transform = "rotateY(0) scale(1) translateZ(0)";
              } else if (isPrev) {
                position = "block z-10";
                transform = "rotateY(45deg) scale(0.8) translateZ(-300px) translateX(-300px)";
              } else if (isNext) {
                position = "block z-10";
                transform = "rotateY(-45deg) scale(0.8) translateZ(-300px) translateX(300px)";
              }
              
              return (
                <div
                  key={partner.id}
                  className={`absolute top-0 left-0 right-0 bottom-0 transition-all duration-700 ${position}`}
                  style={{ transform }}
                >
                  <div className="bg-black-800 border border-gold-500/50 rounded-lg overflow-hidden h-full shadow-xl">
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
          
          {/* Navigation Dots */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {PARTNERS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-gold-500 scale-125" : "bg-gold-500/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mb-20">
          {PARTNERS.map((partner) => (
            <div 
              key={partner.id} 
              className="flex items-center justify-center p-4 bg-black-900 border border-gold-500/20 rounded-lg hover:border-gold-500/60 transition-all"
            >
              <img 
                src={partner.image} 
                alt={partner.name} 
                className="max-h-16 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all" 
              />
            </div>
          ))}
        </div>
        
        {/* Featured In Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="gold-text">Featured</span> <span className="text-white">In</span>
            </h2>
            <div className="w-20 h-1 bg-gold-gradient mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <a 
                href={feature.link} 
                key={feature.id}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black-900 rounded-lg overflow-hidden border border-gold-500/20 hover:border-gold-500 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white font-serif mb-2 group-hover:text-gold-500 transition-colors">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
