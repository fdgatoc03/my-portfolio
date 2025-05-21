import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center py-16">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 animate-fadeIn">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slideUp">
              Francis Daryl Gatoc
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6 animate-slideUp animation-delay-100">
              Software Engineer / Game Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg animate-slideUp animation-delay-200">
            Crafting seamless web and game experiences with Laravel, React, Unity, and modern technologies. Focused on building responsive, user-centered solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 animate-slideUp animation-delay-300">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition duration-300"
              >
                See My Work
              </a>
            </div>
            <div className="flex gap-4 animate-slideUp animation-delay-400">
              <a 
                href="https://github.com/fdgatoc03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition duration-300"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/francis-daryl-gatoc-043392291/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:fdgatoc25@gmail.com" 
                className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-float">
                <img 
                  src="image/Francis.jpg"
                  alt="Francis Daryl Gatoc"
                  className="w-full h-full object-cover rounded-full p-2"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md">
                <span className="text-blue-600 dark:text-blue-400 font-medium">Software Engineer / Game Developer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="p-2 rounded-full border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
