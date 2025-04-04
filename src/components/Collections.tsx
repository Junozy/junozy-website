
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type Collection = {
  id: number;
  title: string;
  description: string;
  image: string;
  featured: boolean;
};

const COLLECTIONS: Collection[] = [
  {
    id: 1,
    title: "ETHEREAL AURA",
    description: "A collection of flowing digital garments inspired by the interplay of light and shadow.",
    image: "https://images.unsplash.com/photo-1531053270060-6643c9e70715?q=80&w=1974&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "NEON DYNASTY",
    description: "Bold, futuristic pieces that blend cyberpunk aesthetics with traditional royal garments.",
    image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=1936&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "DIGITAL COUTURE",
    description: "Meticulously crafted virtual haute couture that pushes the boundaries of digital fashion.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1950&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 4,
    title: "QUANTUM ELEGANCE",
    description: "Where quantum physics meets fashion design in an exploration of possibility and form.",
    image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1470&auto=format&fit=crop",
    featured: true,
  }
];

const Collections = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  
  return (
    <section id="collections" className="py-24 bg-black-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="gold-text">Featured</span> <span className="text-white">Collections</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLLECTIONS.map((collection) => (
            <div 
              key={collection.id}
              className="group relative overflow-hidden"
              onMouseEnter={() => setHovered(collection.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div 
                className="absolute inset-0 bg-black-950/30 group-hover:bg-black-950/10 transition-all duration-500 z-10"
              ></div>
              
              <img 
                src={collection.image} 
                alt={collection.title} 
                className={cn(
                  "w-full h-[500px] object-cover transition-all duration-700 ease-in-out",
                  hovered === collection.id ? "scale-105" : ""
                )}
              />
              
              {/* Gold border overlay that appears on hover */}
              <div className={cn(
                "absolute inset-4 border border-gold-500/0 transition-all duration-500 z-20",
                hovered === collection.id ? "border-gold-500/80" : ""
              )}></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-30">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">{collection.title}</h3>
                <p className={cn(
                  "text-white/80 mb-5 transform transition-all duration-500",
                  hovered === collection.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}>
                  {collection.description}
                </p>
                <a 
                  href="#" 
                  className={cn(
                    "inline-block text-sm uppercase tracking-wider text-gold-500 border-b border-gold-500/0 transition-all duration-300 w-fit",
                    hovered === collection.id ? "border-gold-500" : ""
                  )}
                >
                  Explore Collection
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
