import React from 'react';
import { Calendar, MapPin, GraduationCap, Mail, Phone, Github, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Detail-oriented and results-driven Software Engineer with experience in developing web applications using Laravel, React, MySQL, and other modern web technologies. Proficient in building responsive, scalable solutions with a strong focus on UI/UX and backend architecture.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Skilled in secure authentication systems, role-based access, and optimizing user experiences across devices. Committed to continuous learning and collaborative development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Recently graduated with a Bachelor of Science in Information Technology and gained valuable experience during my internship and subsequent role at Exocoder Inc.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Personal Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-700 dark:text-gray-300">fdgatoc25@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-gray-700 dark:text-gray-300">+63 945 966 8800</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-700 dark:text-gray-300">Negros Occidental, Philippines</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Education</p>
                  <p className="text-gray-700 dark:text-gray-300">BS in Information Technology</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Fellowship Baptist College</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Year Graduated</p>
                  <p className="text-gray-700 dark:text-gray-300">2024</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-600 mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Connect with me</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/fdgatoc03" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/francis-daryl-gatoc-043392291/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
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