import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blackDeep text-white py-12 border-t border-grayMid/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Shamil P</h3>
              <p className="text-gray-400">
                Full Stack Developer & UI/UX Designer - Building amazing digital experiences
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6 md:mt-0">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart size={16} className="text-primary fill-primary" />
                <span>using React & Tailwind CSS</span>
              </div>

              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary hover:bg-primaryDark rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>

          <div className="border-t border-grayMid/20 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Shamil P. All rights reserved. | Designed & Developed with passion</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
