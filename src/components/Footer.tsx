import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Shamil P</h3>
              <p className="text-gray-400">
                Full Stack Developer - Building amazing digital experiences
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart className="text-red-500" size={16} />
                <span>using React & Tailwind CSS</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shamil P. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;