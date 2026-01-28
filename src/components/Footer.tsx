import React from 'react';
import { Heart, ArrowUp, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#3d4f3d] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Left side - Logo and description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#f5a623] rounded-full flex items-center justify-center">
                  <span className="text-[#3d4f3d] font-black text-xl">S</span>
                </div>
                <span className="text-2xl font-black">Shamil.</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                UI/UX Designer & Developer creating beautiful digital experiences.
              </p>
            </div>

            {/* Middle - Quick links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white/70 hover:text-[#f5a623] transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/70 hover:text-[#f5a623] transition-colors">Services</a></li>
                <li><a href="#projects" className="text-white/70 hover:text-[#f5a623] transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-[#f5a623] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Right side - Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <a href="mailto:shamilpofficial@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-[#f5a623] transition-colors">
                  <Mail size={16} />
                  <span className="text-sm">shamilpofficial@gmail.com</span>
                </a>
                <a href="tel:+918848037794" className="flex items-center gap-2 text-white/70 hover:text-[#f5a623] transition-colors">
                  <Phone size={16} />
                  <span className="text-sm">+91 8848037794</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 gap-4">
            <p className="text-white/70 flex items-center gap-2">
              Made with <Heart size={16} className="text-red-400 fill-red-400" /> by Shamil P © 2026
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-6 py-3 bg-[#f5a623] text-[#3d4f3d] font-bold rounded-full hover:bg-white transition-all"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
