import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ChevronDown, Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200`}>
      <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Francis Daryl Gatoc
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a onClick={() => scrollToSection('home')} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Home</a>
            <a onClick={() => scrollToSection('about')} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">About</a>
            <a onClick={() => scrollToSection('experience')} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Experience</a>
            <a onClick={() => scrollToSection('skills')} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Skills</a>
            <a onClick={() => scrollToSection('projects')} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Contact</a>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              <a onClick={() => scrollToSection('home')} className="py-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Home</a>
              <a onClick={() => scrollToSection('about')} className="py-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">About</a>
              <a onClick={() => scrollToSection('experience')} className="py-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Experience</a>
              <a onClick={() => scrollToSection('skills')} className="py-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Skills</a>
              <a onClick={() => scrollToSection('projects')} className="py-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Projects</a>
              <a onClick={() => scrollToSection('contact')} className="py-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;