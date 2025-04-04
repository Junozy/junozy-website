
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Twitter, Youtube, Mail, Cube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-black-950 relative">
      {/* Gold liquid gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-[10%] w-[35%] h-[45%] rounded-full blur-[120px] bg-gold-500/5 animate-float" style={{animationDuration: "18s"}}></div>
        <div className="absolute bottom-1/4 -right-[10%] w-[40%] h-[40%] rounded-full blur-[100px] bg-gold-500/5 animate-float" style={{animationDuration: "15s", animationDelay: "3s"}}></div>
      </div>
      
      {/* Gold accent diagonal line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="gold-text">Connect</span> <span className="text-white">With Us</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Interested in commissioning a custom digital piece or collaborating with Junozy? 
            We'd love to hear from you.
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://x.com/Junozy_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center border border-gold-500/30 hover:border-gold-500 hover:bg-black-800 transition-all group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors" />
            </a>
            <a 
              href="https://www.roblox.com/users/32958887/profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center border border-gold-500/30 hover:border-gold-500 hover:bg-black-800 transition-all group"
              aria-label="Roblox"
            >
              <Cube className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors" />
            </a>
            <a 
              href="https://www.youtube.com/c/Junozy/featured" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center border border-gold-500/30 hover:border-gold-500 hover:bg-black-800 transition-all group"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors" />
            </a>
            <a 
              href="mailto:junozy.business@gmail.com" 
              className="w-12 h-12 rounded-full flex items-center justify-center border border-gold-500/30 hover:border-gold-500 hover:bg-black-800 transition-all group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white/90 text-sm uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black-900 border border-black-800 focus:border-gold-500 text-white p-3 transition-colors outline-none rounded-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-white/90 text-sm uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black-900 border border-black-800 focus:border-gold-500 text-white p-3 transition-colors outline-none rounded-sm"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-white/90 text-sm uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-black-900 border border-black-800 focus:border-gold-500 text-white p-3 transition-colors outline-none resize-none rounded-sm"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={cn(
                  "relative inline-block px-6 py-3 font-sans text-sm font-medium uppercase tracking-wider text-black-950 overflow-hidden group min-w-[180px]",
                  (formStatus === 'submitting' || formStatus === 'success') ? "opacity-90" : ""
                )}
              >
                {/* Animated gradient background */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 group-hover:bg-gradient-to-l transition-all duration-500 ease-out bg-[length:200%_100%] group-hover:duration-1000 animate-gradient-x"></span>
                
                {/* Glowing border effect */}
                <span className="absolute inset-0 w-full h-full border border-gold-500/50 group-hover:border-gold-500 opacity-70 group-hover:opacity-100 scale-105 group-hover:scale-100 rounded-sm transition-all duration-500"></span>
                
                {/* Inner border animation */}
                <span className="absolute inset-[3px] border border-gold-400/30 rounded-none group-hover:border-gold-400/80 scale-100 group-hover:scale-105 transition-all duration-500"></span>
                
                {/* Button states */}
                <span className={cn(
                  "relative text-black-950 group-hover:text-black-950 font-bold transition-all duration-300",
                  formStatus === 'submitting' ? "opacity-0" : formStatus === 'success' ? "opacity-0" : "opacity-100"
                )}>
                  Send Message
                </span>
                
                <span className={cn(
                  "absolute inset-0 flex items-center justify-center transition-all duration-300",
                  formStatus === 'submitting' ? "opacity-100" : "opacity-0"
                )}>
                  <svg className="animate-spin h-5 w-5 text-black-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
                
                <span className={cn(
                  "absolute inset-0 flex items-center justify-center transition-all duration-300",
                  formStatus === 'success' ? "opacity-100" : "opacity-0"
                )}>
                  <svg className="h-5 w-5 text-black-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
