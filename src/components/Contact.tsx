
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together to drive data-driven insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-blue-600 p-3 rounded-full mr-4">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <a href="mailto:gajulasaiteja8601@gmail.com" className="text-blue-600 hover:text-blue-800">
                  gajulasaiteja8601@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-600 p-3 rounded-full mr-4">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <a href="tel:425-269-6504" className="text-gray-600">
                  425-269-6504
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-purple-600 p-3 rounded-full mr-4">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Chicago, Illinois</p>
              </div>
            </div>
            
            <div className="pt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Sai-teja-gajula" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sai-teja-gajula-24a770258/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Work Together</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell me about your project or opportunity"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
