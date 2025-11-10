import React from "react";
import { Twitter, Youtube, Mail, Box } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-black">
      {/* Background gradient overlay with liquid gold effect */}
      <div className="absolute inset-0 bg-black z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[30%] rounded-full blur-[100px] bg-gold-500/10 animate-blob"></div>
        <div
          className="absolute bottom-[20%] right-[10%] w-[35%] h-[25%] rounded-full blur-[100px] bg-gold-500/10 animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-5xl md:text-6xl font-bold text-center text-white mb-12 animate-fade-in opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            Contact Us
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="text-white animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
                <h3 className="text-2xl font-bold mb-4">Our Information</h3>
                <p className="text-gold-200">
                  A leading digital fashion brand, Junozy crafts a wide range of UGC—from timeless essentials to bold
                  statement pieces. With 50 million+ sales and counting, our pieces are worn by millions across the
                  metaverse.
                </p>
              </div>

              <div className="text-white animate-fade-in opacity-0" style={{ animationDelay: "0.75s" }}>
                <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
                <p className="text-gold-200 flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <span>junozy.business@gmail.com</span>
                </p>
              </div>

              <div className="text-white animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <p className="text-gold-200">Stay up to date with our latest creations and news.</p>
              </div>

              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.roblox.com/users/32958887/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-gold-500/30 hover:border-gold-500 hover:bg-black-800 transition-all group"
                  aria-label="Roblox"
                >
                  <Box className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors" />
                </a>
                <a
                  href="https://twitter.com/junozy_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-gold-500/30 hover:border-gold-500 hover:bg-black-800 transition-all group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gold-500 group-hover:text-gold-400 transition-colors" />
                </a>
                <a
                  href="https://www.youtube.com/@Junozy"
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
