
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 border border-gold-500 transform translate-x-4 translate-y-4 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1974&auto=format&fit=crop" 
              alt="Junozy Brand Vision" 
              className="w-full h-auto relative z-10 shadow-xl"
            />
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gold-gradient z-5"></div>
          </div>
          
          {/* Text Side */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8">
              <span className="gold-text">The Junozy</span> <span className="text-white">Vision</span>
            </h2>
            
            <div className="space-y-6 text-white/80">
              <p>
                Founded in 2023, Junozy emerged as a pioneering force in the virtual fashion landscape, 
                merging the artistry of traditional couture with the boundless possibilities of digital design.
              </p>
              
              <p>
                Our creations exist at the intersection of art, technology, and fashion, crafted by a team of 
                visionary designers and 3D artists who push the boundaries of what's possible in the digital realm.
              </p>
              
              <p>
                Each Junozy piece is meticulously designed with the same attention to detail and craftsmanship as 
                physical haute couture, resulting in virtual garments that are both aesthetically stunning and 
                technically innovative.
              </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-6">
              <div>
                <p className="text-gold-500 text-4xl font-serif font-bold">100%</p>
                <p className="text-white/70 text-sm uppercase tracking-wider mt-2">Digital Craftsmanship</p>
              </div>
              
              <div>
                <p className="text-gold-500 text-4xl font-serif font-bold">35+</p>
                <p className="text-white/70 text-sm uppercase tracking-wider mt-2">Digital Collections</p>
              </div>
              
              <div>
                <p className="text-gold-500 text-4xl font-serif font-bold">12K+</p>
                <p className="text-white/70 text-sm uppercase tracking-wider mt-2">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
