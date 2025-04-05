
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
      
      {/* Gold separator line between Collections and Brand Partners */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-gold-gradient opacity-70"></div>
      </div>
      
      <BrandPartners />
      <Press />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
