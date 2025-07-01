
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Sai Teja Gajula</h3>
          <p className="text-gray-400 mb-4 text-sm">
            Data Analyst & Business Intelligence Expert
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://github.com/Sai-teja-gajula" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sai-teja-gajula-24a770258/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:gajulasaiteja8601@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-400 text-xs">
              © 2025 Sai Teja Gajula. All rights reserved. Built with ❤️ using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
