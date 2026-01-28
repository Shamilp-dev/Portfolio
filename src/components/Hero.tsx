import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-white pt-28 sm:pt-24 md:pt-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 pb-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text */}
          <div className="space-y-4 sm:space-y-6 lg:pr-12 text-center lg:text-left">
            {/* Hello Badge */}
            <div className="inline-block">
              <div className="relative">
                <div className="px-3 py-2 sm:px-4 sm:py-2 bg-white border-2 border-[#3d4f3d] inline-block">
                  <span className="text-[#3d4f3d] font-semibold text-sm sm:text-base">Hello There!</span>
                </div>
                {/* Decorative corner brackets */}
                <div className="absolute -top-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-l-2 border-[#f5a623]"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-[#f5a623]"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-[#f5a623]"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-r-2 border-[#f5a623]"></div>
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-[#2d2d2d]">I'm </span>
                <span className="text-[#f5a623]">Shamil P,</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d2d]">
                Frontend Developer
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2d2d2d]">
                UI/UX Designer
              </h3>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#2d2d2d]">
                Based in India.
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I'm a Frontend Developer specializing in building intuitive, responsive web applications with modern frameworks like React, Next.js, and TypeScript. With strong UI/UX design skills and knowledge in full-stack development, I create seamless digital experiences that combine aesthetic design with robust functionality.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start pb-8 sm:pb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#3d4f3d] to-[#2d3d2d] text-white font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 rounded-full text-sm sm:text-base"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0">
                  <Play size={14} className="fill-[#3d4f3d] text-[#3d4f3d] ml-0.5 sm:w-4 sm:h-4" />
                </div>
                View My Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#3d4f3d] text-[#3d4f3d] font-bold rounded-full hover:bg-[#3d4f3d] hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Hire Me
              </button>
            </div>
          </div>

          {/* Right side - Image with curved shapes - RESPONSIVE */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mb-0">
            {/* Three-point organic yellow background - Responsive */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[350px] lg:h-[350px] bg-[#f5a623]"
              style={{
                borderRadius: "60% 20% 15% 15% / 75% 50% 40% 15%",
                transform: "translate(-50%, -35%) rotate(8deg)",
              }}
            />

            {/* Main image container - Responsive */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-10">
              <img 
                src="/portfoliomain0.png" 
                alt="Shamil P"
                className="w-full h-auto object-contain mx-auto"
                style={{ 
                  maxHeight: '800px',
                  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))'
                }}
              />
            </div>

            {/* Floating "HIRE ME" circular badge - Responsive */}
            <div className="absolute top-8 sm:top-12 md:top-16 right-2 sm:right-4 md:right-8 lg:right-12 z-20">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#3d4f3d] rounded-full flex items-center justify-center animate-spin-slow">
                <div className="absolute inset-1 sm:inset-2 bg-[#3d4f3d] rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <path
                      id="circlePath"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[6px] sm:text-[7px] md:text-[8px] fill-white font-semibold">
                      <textPath href="#circlePath" startOffset="0%">
                        HIRE ME  •  HIRE ME  •  HIRE ME  •  HIRE ME  •  HIRE ME  •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#f5a623] rounded-full flex items-center justify-center">
                      <span className="text-[#3d4f3d] font-bold text-sm sm:text-base md:text-lg">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UI/UX Designer badge - Responsive */}
            <div className="absolute top-[40%] sm:top-1/2 right-0 sm:right-1 z-20 transform translate-x-0 sm:translate-x-0">
              <div className="bg-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-lg">
                <span className="text-[#2d2d2d] font-bold text-xs sm:text-sm">UI/UX Designer</span>
              </div>
            </div>

            {/* Frontend Developer badge - Responsive */}
            <div className="absolute top-[55%] sm:top-1/2 sm:mt-16 md:mt-20 left-0 sm:left-4 md:left-8 z-20">
              <div className="bg-[#3d4f3d] px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-lg">
                <span className="text-white font-bold text-xs sm:text-sm">Frontend Developer</span>
              </div>
            </div>

            {/* Full Stack badge - Responsive */}
            <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 right-0 sm:right-4 md:right-8 z-20">
              <div className="bg-[#f5a623] px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-lg">
                <span className="text-white font-bold text-xs sm:text-sm">Full Stack Knowledge</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orange separator */}
      <div className="relative overflow-hidden bg-[#f5a623] py-1 sm:py-2 mt-0"></div>

      {/* Bottom scrolling banner - Responsive */}
      <div className="relative overflow-hidden bg-[#3d4f3d] py-2 sm:py-3 mt-0">
        <div className="scroll-container">
          <div className="scroll-content">
            {[...Array(12)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Frontend Development</span>
                <span className="text-[#f5a623] text-base sm:text-lg md:text-xl">✦</span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">UI/UX Design</span>
                <span className="text-[#f5a623] text-base sm:text-lg md:text-xl">✦</span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Responsive Web Apps</span>
                <span className="text-[#f5a623] text-base sm:text-lg md:text-xl">✦</span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Modern Frameworks</span>
                <span className="text-[#f5a623] text-base sm:text-lg md:text-xl">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scroll-container {
          display: flex;
          overflow: hidden;
          width: 100%;
        }
        
        .scroll-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          white-space: nowrap;
          animation: scroll-banner 55s linear infinite;
          will-change: transform;
        }
        
        @media (min-width: 640px) {
          .scroll-content {
            gap: 1.5rem;
          }
        }
        
        @media (min-width: 768px) {
          .scroll-content {
            gap: 2rem;
          }
        }
        
        @keyframes scroll-banner {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
