import React from 'react';
import { MapPin, Calendar, Award, Code, Database, Smartphone, Shield, Palette, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a versatile Full Stack Developer with expertise in web and mobile application development, specializing in React, React Native, 
                Node.js, and AI/ML integration. I have hands-on experience building cross-platform mobile apps, real-time systems, and AI-powered 
                applications with modern technologies like Docker, AWS, and various databases.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I hold a Bachelor's degree in Computer Applications (CGPA: 7.62/10) from Krupanidhi Degree College, Bangalore, 
                and a Diploma in Instrumentation Engineering from Government Polytechnic College, Kerala. 
                My recent internship at Prinston Smart involved developing real-time AI/ML systems, and I have experience creating 
                cross-platform mobile applications and full-stack web solutions.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                I excel at combining technical expertise with creative problem-solving to build innovative digital solutions. 
                My experience spans from mobile app development with React Native to AI/ML model integration, containerization 
                with Docker, and cloud deployment on AWS and Netlify.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">Bangalore, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Calendar className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-semibold">Fresh Graduate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Code className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Full-Stack Development</h4>
                    <p className="text-gray-600 text-sm">React.js, Node.js, JavaScript ES6+, TypeScript, Python, PHP, HTML5, CSS3</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Machine Learning & AI</h4>
                    <p className="text-gray-600 text-sm">Python, TensorFlow/Keras, Computer Vision, Data Analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="text-red-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Cybersecurity</h4>
                    <p className="text-gray-600 text-sm">Ethical Hacking, Network Security, Vulnerability Assessment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Palette className="text-orange-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">UI/UX Design</h4>
                    <p className="text-gray-600 text-sm">Figma, Adobe Creative Suite, Responsive Design</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Database className="text-green-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Database Management</h4>
                    <p className="text-gray-600 text-sm">MySQL, MongoDB, Database Design, Query Optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;