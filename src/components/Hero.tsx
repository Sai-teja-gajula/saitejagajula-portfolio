
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 mb-8">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-600">ST</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Sai Teja Gajula
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4">
          Data Analyst & Business Intelligence Expert
        </p>
        
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Transforming complex data into actionable insights with 2+ years of experience 
          in fintech and logistics. Specialized in SQL, Python, Power BI, and cloud analytics.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={scrollToAbout}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View My Work
          </button>
          
          <a 
            href="mailto:gajulasaiteja8601@gmail.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/Sai-teja-gajula" target="_blank" rel="noopener noreferrer" 
             className="text-gray-600 hover:text-blue-600 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/sai-teja-gajula-24a770258/" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:gajulasaiteja8601@gmail.com"
             className="text-gray-600 hover:text-blue-600 transition-colors">
            <Mail size={28} />
          </a>
        </div>
        
        <button onClick={scrollToAbout} className="animate-bounce">
          <ArrowDown size={32} className="text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
