import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect which section is in view
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Services' },
    { id: 'skills', label: 'About' },
    { id: 'projects', label: 'Projects' },

  ];

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'top-4' : ''
    }`}>
      <div className="bg-[#3d4f3d] px-5 py-4 rounded-[40px]" style={{ width: '88vw', maxWidth: '1400px' }}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2"
          >
            <div className="w-12 h-12 bg-[#f5a623] rounded-full flex items-center justify-center">
              <span className="text-[#3d4f3d] font-black text-2xl">Sh</span>
            </div>
            <span className="text-white font-bold text-2xl">Shamil P</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium text-base transition-colors relative ${
                  activeSection === item.id
                    ? 'text-[#f5a623] after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#f5a623]'
                    : 'text-white hover:text-[#f5a623]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-8 py-3 bg-white text-[#3d4f3d] font-semibold rounded-full hover:bg-[#f5f5f5] transition-all duration-300 text-base"
          >
            Let's Connect
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 mt-6 border-t border-white/20">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium text-left py-2 ${
                    activeSection === item.id ? 'text-[#f5a623]' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-white text-[#3d4f3d] font-semibold rounded-full hover:bg-[#f5f5f5] transition-all mt-4"
              >
                Contact Me
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
