import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Twitter, Youtube, Mail, Box } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-black">
      {/* Background gradient overlay with liquid gold effect */}
      <div className="absolute inset-0 bg-black z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[30%] rounded-full blur-[100px] bg-gold-500/10 animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[25%] rounded-full blur-[100px] bg-gold-500/10 animate-float" style={{animationDelay: "2s"}}></div>
      </div>
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-12 animate-fade-in opacity-0" style={{animationDelay: "0.3s"}}>
            Contact Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in opacity-0" style={{animationDelay: "0.45s"}}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gold-500 uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-3 w-full bg-black-800 border border-gold-500/30 text-white rounded-md focus:ring-gold-500 focus:border-gold-500"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gold-500 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-3 w-full bg-black-800 border border-gold-500/30 text-white rounded-md focus:ring-gold-500 focus:border-gold-500"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gold-500 uppercase tracking-widest">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 p-3 w-full bg-black-800 border border-gold-500/30 text-white rounded-md focus:ring-gold-500 focus:border-gold-500"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="relative inline-block px-6 py-3 font-sans text-sm font-medium uppercase tracking-wider text-black-950 overflow-hidden group"
                >
                  {/* Animated gradient background */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 group-hover:bg-gradient-to-l transition-all duration-500 ease-out bg-[length:200%_100%] group-hover:duration-1000 animate-gradient-x"></span>
                  
                  {/* Glowing border effect */}
                  <span className="absolute inset-0 w-full h-full border border-gold-500/50 group-hover:border-gold-500 opacity-70 group-hover:opacity-100 scale-105 group-hover:scale-100 rounded-sm transition-all duration-500"></span>
                  
                  {/* Inner border animation */}
                  <span className="absolute inset-[3px] border border-gold-400/30 rounded-none group-hover:border-gold-400/80 scale-100 group-hover:scale-105 transition-all duration-500"></span>
                  
                  {/* Button text */}
                  <span className="relative text-black-950 group-hover:text-black-950 font-bold transition-colors duration-200 ease-in-out">
                    Send Message
                  </span>
                </button>
                {isSubmitted && <p className="mt-4 text-green-500">Message sent successfully!</p>}
              </div>
            </form>
            
            <div className="space-y-8">
              <div className="text-white animate-fade-in opacity-0" style={{animationDelay: "0.6s"}}>
                <h3 className="text-2xl font-bold mb-4">Our Information</h3>
                <p className="text-gold-200">
                  We are a luxury virtual fashion brand creating exquisite digital garments at the intersection of haute couture and technology.
                </p>
              </div>
              
              <div className="text-white animate-fade-in opacity-0" style={{animationDelay: "0.75s"}}>
                <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
                <p className="text-gold-200 flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <span>info@junozy.com</span>
                </p>
              </div>
              
              <div className="text-white animate-fade-in opacity-0" style={{animationDelay: "0.9s"}}>
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <p className="text-gold-200">
                  Stay up to date with our latest creations and news.
                </p>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a 
                  href="https://www.roblox.com/users/1335079524/profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-gold-500/30 hover:border-gold-500 hover:bg-black-800 transition-all group"
                  aria-label="Roblox"
                >
                  <Box className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors" />
                </a>
                <a 
                  href="https://twitter.com/junozy_official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-gold-500/30 hover:border-gold-500 hover:bg-black-800 transition-all group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors" />
                </a>
                <a 
                  href="https://www.youtube.com/@JunozyOfficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-gold-500/30 hover:border-gold-500 hover:bg-black-800 transition-all group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
