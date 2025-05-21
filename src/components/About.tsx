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
              <span className="font-semibold text-indigo-600">Detail-oriented</span> and 
              <span className="font-semibold text-indigo-600"> results-driven Software Engineer</span> with hands-on experience in developing dynamic web applications using 
              <span className="font-semibold text-indigo-600"> Laravel, React, MySQL</span>, and other modern web technologies. Proficient in crafting 
              <span className="font-semibold text-indigo-600"> responsive, scalable solutions</span> with a strong emphasis on 
              <span className="font-semibold text-indigo-600"> UI/UX design</span> and 
              <span className="font-semibold text-indigo-600"> robust backend architecture</span>.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Experienced in implementing 
              <span className="font-semibold text-indigo-600"> secure authentication systems</span>, 
              <span className="font-semibold text-indigo-600"> role-based access control</span>, and optimizing performance across devices for 
              <span className="font-semibold text-indigo-600"> seamless user experiences</span>. Demonstrates a strong commitment to 
              <span className="font-semibold text-indigo-600"> continuous learning</span>, 
              <span className="font-semibold text-indigo-600"> clean code practices</span>, and 
              <span className="font-semibold text-indigo-600"> collaborative team development</span>.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Recently earned a 
              <span className="font-semibold text-indigo-600">Bachelor of Science in Information Technology</span>, gaining practical experience during an internship and subsequent employment at 
              <span className="font-semibold text-indigo-600">Exocoder Inc.</span>, where I contributed to both 
              <span className="font-semibold text-indigo-600"> web and game development projects</span> using tools such as 
              <span className="font-semibold text-indigo-600"> Unity</span> alongside web technologies.
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
