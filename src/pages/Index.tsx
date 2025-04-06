
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import BrandPartners from '@/components/BrandPartners';
import Press from '@/components/Press';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-black-950">
      <FloatingElements />
      <Navbar />
      <Hero />
      <Collections />
      
      {/* Divider line with fade-out effect on sides */}
      <div className="w-full flex justify-center my-8">
        <div className="w-full max-w-6xl px-8 relative">
          <div className="h-[0.25px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        </div>
      </div>
      
      <BrandPartners />
      <Press />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
