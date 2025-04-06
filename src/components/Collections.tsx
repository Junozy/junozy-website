
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

type Creation = {
  id: number;
  title: string;
  sales: string;
  created: string;
  image: string;
  link: string;
  note?: string;
};

const CREATIONS: Creation[] = [
  {
    id: 1,
    title: "Strawberry Cow Hood",
    sales: "1,300,000+",
    created: "2020",
    image: "https://tr.rbxcdn.com/180DAY-0d3598cd3538501fc88e91de054c5bed/420/420/Hat/Webp/noFilter",
    link: "/images/cowhood.png"
  },
  {
    id: 2,
    title: "Blonde Popular Shoulder Braids",
    sales: "1,350,000+",
    created: "2021",
    image: "/images/braids.png",
    link: "https://www.roblox.com/catalog/7062036000/Blonde-Popular-Shoulder-Braids"
  },
  {
    id: 3,
    title: "White Luxury Heart Purse",
    sales: "1,000,000+",
    created: "2022",
    image: "/images/heartpurse.png",
    link: "https://www.roblox.com/catalog/5355719986/Strawberry-Cow-Hood"
  },
  {
    id: 4,
    title: "Luxury 1/1 Gold Bling",
    sales: "1",
    created: "2023",
    image: "/images/goldchain.png",
    link: "https://www.roblox.com/catalog/14835081494/Luxury-1-1-Gold-Bling",
    note: "ONLY 1 IN EXISTENCE"
  },
  {
    id: 5,
    title: "Black Baggy Cargo Pants w/ Shoes & Straps",
    sales: "TRENDING NOW",
    created: "2024",
    image: "/images/cargopants.png",
    link: "https://www.roblox.com/catalog/73475435911852/Black-Baggy-Cargo-Pants-w-Shoes-Straps"
  }
];

const Collections = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  
  return (
    <section id="featured-creations" className="py-24 bg-black-950 relative">
      {/* Gold liquid gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-[30%] h-[40%] rounded-full blur-[120px] bg-gold-500/5 animate-float" style={{animationDuration: "18s"}}></div>
        <div className="absolute top-1/3 right-1/4 w-[25%] h-[35%] rounded-full blur-[100px] bg-gold-500/5 animate-float" style={{animationDuration: "15s", animationDelay: "3s"}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="gold-text">Featured</span> <span className="text-white">Creations</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {CREATIONS.map((creation) => (
            <a 
              key={creation.id}
              href={creation.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-black-900 border border-gold-500/10 hover:border-gold-500/50 rounded-xl overflow-hidden transition-all duration-300 h-full"
              onMouseEnter={() => setHovered(creation.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative overflow-hidden">
                <AspectRatio ratio={1} className="bg-black-900">
                  <img 
                    src={creation.image} 
                    alt={creation.title} 
                    className={cn(
                      "w-full h-full object-contain transition-all duration-500 ease-out p-2",
                      hovered === creation.id ? "scale-110 rotate-3" : ""
                    )}
                  />
                </AspectRatio>
                
                {/* Hover overlay */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black-950 to-transparent opacity-0 transition-opacity duration-300",
                  hovered === creation.id ? "opacity-80" : ""
                )}></div>
                
                {/* Special note for exclusive items */}
                {creation.note && (
                  <div className="absolute top-2 right-2 bg-gold-500 text-black-950 text-xs font-bold px-2 py-1 rounded-sm">
                    {creation.note}
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-white font-medium text-lg mb-1 line-clamp-1">{creation.title}</h3>
                
                <div className="flex flex-col text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-white/60">Sales:</span>
                    <span className="text-gold-500 font-medium">{creation.sales}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Created:</span>
                    <span className="text-white">{creation.created}</span>
                  </div>
                </div>
                
                {/* View button that appears on hover */}
                <div className={cn(
                  "mt-3 text-center transition-all duration-300 transform",
                  hovered === creation.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  <span className="inline-block text-sm text-gold-500 hover:text-gold-400 border-b border-gold-500 pb-0.5">
                    View on Roblox
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
