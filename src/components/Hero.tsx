
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Database, BarChart3, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get the base path for GitHub Pages deployment
  const basePath = import.meta.env.PROD ? '/saitejagajula-portfolio' : '';

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Data Visualization Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 border-2 border-purple-400 rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 mb-8 shadow-2xl">
            <img 
              src={`${basePath}/lovable-uploads/1615c7a8-cec1-45a6-a4de-a62026564e90.png`}
              alt="Sai Teja Gajula" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Sai Teja Gajula
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full">
            <Database className="text-blue-600" size={20} />
            <span className="text-xl md:text-2xl text-gray-700 font-semibold">Data Analyst</span>
          </div>
          <div className="text-gray-400">•</div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-2 rounded-full">
            <BarChart3 className="text-purple-600" size={20} />
            <span className="text-xl md:text-2xl text-gray-700 font-semibold">BI Expert</span>
          </div>
        </div>
        
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Transforming complex data into actionable insights with 2+ years of experience 
          in fintech and logistics. Specialized in SQL, Python, Power BI, and cloud analytics.
        </p>

        {/* Data Metrics Display */}
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-8">
          <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="text-blue-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">100K+</div>
            <div className="text-sm text-gray-600">Records Analyzed</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-purple-500">
            <div className="flex items-center justify-center mb-2">
              <BarChart3 className="text-purple-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">30%</div>
            <div className="text-sm text-gray-600">Efficiency Boost</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-green-500">
            <div className="flex items-center justify-center mb-2">
              <Database className="text-green-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">2+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105"
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
             className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/sai-teja-gajula-24a770258/" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href="mailto:gajulasaiteja8601@gmail.com"
             className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
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
