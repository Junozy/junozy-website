
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

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
    <section id="contact" className="py-24 bg-black-900 relative">
      {/* Gold accent diagonal line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="gold-text">Connect</span> <span className="text-white">With Us</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Interested in commissioning a custom digital piece or collaborating with Junozy? 
            We'd love to hear from you.
          </p>
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
                  className="w-full bg-black-800 border border-black-700 focus:border-gold-500 text-white p-3 transition-colors outline-none"
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
                  className="w-full bg-black-800 border border-black-700 focus:border-gold-500 text-white p-3 transition-colors outline-none"
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
                className="w-full bg-black-800 border border-black-700 focus:border-gold-500 text-white p-3 transition-colors outline-none resize-none"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={cn(
                  "gold-button min-w-[180px] relative overflow-hidden",
                  (formStatus === 'submitting' || formStatus === 'success') ? "opacity-90" : ""
                )}
              >
                <span className={cn(
                  "inline-block transition-all duration-300",
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
