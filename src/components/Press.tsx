
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

type Article = {
  id: number;
  title: string;
  publisher: string;
  image: string;
  link: string;
};

const PRESS_ARTICLES: Article[] = [
  {
    id: 1,
    title: "What teen brands can teach us about fashion in the metaverse",
    publisher: "Vogue Business",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2670&auto=format&fit=crop",
    link: "https://www.voguebusiness.com/technology/what-teen-brands-can-teach-us-about-fashion-in-the-metaverse"
  },
  {
    id: 2,
    title: "Not a Game: Walmart's Latest E-Commerce Platform Is Roblox",
    publisher: "Inc.",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2215&auto=format&fit=crop",
    link: "https://www.inc.com/sydney-sladovnik/not-a-game-walmarts-latest-e-commerce-platform-is-robox.html"
  },
  {
    id: 3,
    title: "Hot Topic brings goth fashion to Roblox",
    publisher: "Venturebeat",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1950&auto=format&fit=crop",
    link: "https://venturebeat.com/games/hot-topic-brings-goth-fashion-to-roblox/"
  },
  {
    id: 4,
    title: "The Recording Academy And MasterCard Are Bringing Grammy Week Into Roblox",
    publisher: "Forbes",
    image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1470&auto=format&fit=crop",
    link: "https://www.forbes.com/sites/martyswant/2022/03/30/the-recording-academy-and-mastercard-are-bringing-grammy-week-into-roblox/?sh=7d75baf66865"
  },
  {
    id: 5,
    title: "Insider Tips from a Roblox UGC Designer Who Has Sold 35 Million Items",
    publisher: "Max Power Gaming",
    image: "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?q=80&w=2670&auto=format&fit=crop",
    link: "https://www.maxpowergaming.co/post/insider-tips-from-a-roblox-ugc-designer-who-has-sold-35-million-items"
  },
  {
    id: 6,
    title: "Walmart and Roblox are teaming up to make virtual e-commerce a reality",
    publisher: "Digiday",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2670&auto=format&fit=crop",
    link: "https://digiday.com/marketing/walmart-and-roblox-are-teaming-up-to-make-virtual-e-commerce-a-reality/"
  },
  {
    id: 7,
    title: "Top Roblox creators don't view brand deals as a significant revenue stream",
    publisher: "Digiday",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    link: "https://digiday.com/media/top-roblox-creators-dont-view-brand-deals-as-a-significant-revenue-stream/"
  }
];

const Press = () => {
  const [hovered, setHovered] = React.useState<number | null>(null);
  
  return (
    <section id="press" className="py-24 bg-black-950 relative">
      {/* Gold liquid gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-[10%] w-[45%] h-[50%] rounded-full blur-[120px] bg-gold-500/5 animate-float" style={{animationDuration: "15s"}}></div>
        <div className="absolute bottom-1/3 -right-[5%] w-[40%] h-[40%] rounded-full blur-[100px] bg-gold-500/5 animate-float" style={{animationDuration: "20s", animationDelay: "2s"}}></div>
      </div>
    
      {/* Gold accent diagonal line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="gold-text">Featured</span> <span className="text-white">In</span>
          </h2>
          <div className="w-20 h-1 bg-gold-gradient mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRESS_ARTICLES.map((article) => (
            <a 
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              key={article.id}
              className="group relative bg-black-900 border border-gold-500/10 hover:border-gold-500/50 rounded-lg overflow-hidden transition-all duration-300 h-full"
              onMouseEnter={() => setHovered(article.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700", 
                    hovered === article.id ? "scale-110 filter brightness-110" : "scale-100"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-950 via-black-950/70 to-transparent"></div>
                
                {/* Publisher badge */}
                <div className="absolute top-4 left-4 bg-black-900/80 border border-gold-500/30 px-3 py-1 text-xs font-medium text-gold-500">
                  {article.publisher}
                </div>
                
                {/* External link icon */}
                <div className={cn(
                  "absolute top-4 right-4 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center opacity-0 transition-all duration-300 transform translate-y-2",
                  hovered === article.id ? "opacity-100 translate-y-0" : ""
                )}>
                  <ExternalLink className="w-4 h-4 text-black-950" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl text-white font-serif mb-2 group-hover:text-gold-500 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <div className={cn(
                  "mt-4 border-t border-gold-500/10 pt-4 flex justify-between items-center opacity-0 transform translate-y-4 transition-all duration-300",
                  hovered === article.id ? "opacity-100 translate-y-0" : ""
                )}>
                  <span className="text-sm text-white/60">Read Article</span>
                  <div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <ExternalLink className="w-3 h-3 text-gold-500" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
