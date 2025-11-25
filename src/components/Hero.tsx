import React from 'react';
import { ChevronDown, Download, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src="/IMG_2711.jpeg" 
              alt="Shamil P - Full Stack Developer" 
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Hello, I'm</span>
            <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Shamil P
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-2xl mx-auto">
            Full Stack Developer | MERN | Cybersecurity Enthusiast
          </p>
          
          <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
            Passionate about building cross-platform mobile apps, AI-powered web applications, and real-time systems with modern technologies
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-blue-100">
            <div className="flex items-center justify-center gap-2">
              <Phone size={16} />
              <span>+91 8848037794</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={16} />
              <span>Shamilpofficial@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin size={16} />
              <span>Bangalore, India</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-1">
              <Download size={20} />
              <a href="/Shamil_P_Resume_2025.pdf" download="Shamil_P_Resume_2025.pdf">
                Download Resume
              </a>
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:text-blue-200 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;