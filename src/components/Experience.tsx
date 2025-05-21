import React from 'react';
import { CalendarDays, Star, Award } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey as a software engineer and web developer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 sm:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

            {/* Experience 1 */}
            <div className="mb-16 relative">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full sm:w-1/2 sm:pr-8">
                  <div className="sm:text-right">
                    <div className="flex items-center justify-end mb-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mr-3">Software Engineer & Web Developer</h3>
                      <div className="sm:hidden flex items-center justify-center w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full shadow-md">
                        <CalendarDays className="text-white" size={20} />
                      </div>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Exocoder Inc.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">July 2024 - February 2025</p>
                    <div className="hidden sm:block mt-4 space-y-2">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Developed and optimized Getko, an online ordering platform using Laravel</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Implemented wishlist and shopping cart systems with AJAX for smooth frontend interaction</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Enhanced UI/UX for mobile-first design, ensuring responsiveness across devices</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Built user authentication and role-based access control for Admin, Merchant, and Rider roles</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Managed sessions in Docker, enabling seamless cross-device user experience</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 shadow-md">
                  <CalendarDays className="text-white" size={24} />
                </div>

                <div className="sm:w-1/2 sm:pl-8 mt-4 sm:mt-0">
                  <div className="sm:hidden space-y-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Developed and optimized Getko, an online ordering platform using Laravel</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Implemented wishlist and shopping cart systems with AJAX for smooth frontend interaction</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Enhanced UI/UX for mobile-first design, ensuring responsiveness across devices</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Built user authentication and role-based access control for Admin, Merchant, and Rider roles</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Managed sessions in Docker, enabling seamless cross-device user experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="mb-16 relative">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full sm:w-1/2 sm:pr-8 order-1 sm:order-none">
                  <div className="sm:hidden mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Assisted in frontend and backend development using Laravel and Tailwind CSS</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Learned and developed interactive features using AJAX for real-time interactions</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Worked with MySQL, Laravel, and Tailwind CSS to build scalable web applications</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Gained experience in Git version control and collaborative development workflows</p>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 shadow-md">
                  <CalendarDays className="text-white" size={24} />
                </div>

                <div className="flex justify-start w-full sm:w-1/2 sm:pl-8 order-none sm:order-1">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="sm:hidden flex items-center justify-center w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full shadow-md mr-3">
                        <CalendarDays className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">Software Development Intern</h3>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Exocoder Inc.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">February - June 2024</p>
                    <div className="hidden sm:block mt-4 space-y-2">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Assisted in frontend and backend development using Laravel and Tailwind CSS</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Learned and developed interactive features using AJAX for real-time interactions</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Worked with MySQL, Laravel, and Tailwind CSS to build scalable web applications</p>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Gained experience in Git version control and collaborative development workflows</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full sm:w-1/2 sm:pr-8">
                  <div className="sm:text-right">
                    <div className="flex items-center justify-end mb-2">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mr-3">Awards & Recognition</h3>
                      <div className="sm:hidden flex items-center justify-center w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full shadow-md">
                        <Award className="text-white" size={20} />
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Best Intern Award - Exocoder Inc.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">June 2024</p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center justify-center w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 shadow-md">
                  <Award className="text-white" size={24} />
                </div>

                <div className="sm:w-1/2 sm:pl-8 mt-4 sm:mt-0">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center mb-2">
                      <Star className="text-yellow-400" size={20} />
                      <span className="ml-2 text-gray-700 dark:text-gray-300 font-medium">Recognition for outstanding performance</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Awarded for exceptional contributions, technical skills, and collaborative approach during the internship period.
                    </p>
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

export default Experience;