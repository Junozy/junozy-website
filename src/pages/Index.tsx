
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
      <BrandPartners />
      <Press />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
