import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4"><span className="text-blue-400">Francis Daryl Gatoc</span></h3>
            <p className="text-gray-400 mb-4">
              Software Engineer specializing in web development with Laravel and React.
            </p>
            <p className="text-gray-400">
              Let's build something amazing together.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition duration-300">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-blue-400 transition duration-300">Experience</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition duration-300">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition duration-300">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">fdgatoc25@gmail.com</p>
            <p className="text-gray-400 mb-2">+63 945 966 8800</p>
            <p className="text-gray-400">Negros Occidental, Philippines</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Francis Daryl Gatoc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;