
import React, { useState } from 'react';
import { Menu, Download, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">
            Sai Teja Gajula
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Sai-teja-gajula" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sai-teja-gajula-24a770258/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gajulasaiteja8601@gmail.com"
               className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 text-left">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 text-left">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 text-left">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 text-left">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 text-left">Contact</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
