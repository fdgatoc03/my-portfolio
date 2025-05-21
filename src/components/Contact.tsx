import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column: Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">fdgatoc25@gmail.com</p>
                  <p className="text-gray-600 dark:text-gray-400">francis1935_gatoc@yahoo.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+63 945 966 8800</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Brgy. Andulauan, Ilog, Negros Occidental, Philippines 6109</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Connect With Me */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/francis-daryl-gatoc-043392291/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/fdgatoc03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:fdgatoc25@gmail.com" 
                className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
