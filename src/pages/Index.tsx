
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black-950">
      <Navbar />
      <Hero />
      <Collections />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
