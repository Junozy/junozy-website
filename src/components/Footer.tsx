import React from 'react';
import { Twitter, Youtube, Mail, Gamepad2 } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <footer className="py-16 bg-black-950 relative">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="object-fill">
            <a href="/" className="inline-block mb-6">
              <img alt="JUNOZY" src="/lovable-uploads/3291dfdd-e301-410e-a303-e4a6e498c7ec.png" className="h-12 px-[20px]" />
            </a>
            <p className="text-white/70 max-w-xs">
              Pushing the boundaries of digital fashion with bold ideas and creative freedom.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleScroll('featured-creations')} className="text-white/70 hover:text-gold-500 transition-colors">
                  Creations
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('brand-partners')} className="text-white/70 hover:text-gold-500 transition-colors">
                  Partners
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('press')} className="text-white/70 hover:text-gold-500 transition-colors">
                  Press
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('contact')} className="text-white/70 hover:text-gold-500 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Connect</h4>
            <p className="text-white/70 mb-4">junozy.business@gmail.com</p>
            <div className="flex space-x-4">
              <a href="https://x.com/Junozy_" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.roblox.com/users/32958887/profile" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold-500 transition-colors" aria-label="Roblox">
                <Gamepad2 className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/c/Junozy/featured" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold-500 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:junozy.business@gmail.com" className="text-white/70 hover:text-gold-500 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-black-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© {currentYear} Junozy. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;