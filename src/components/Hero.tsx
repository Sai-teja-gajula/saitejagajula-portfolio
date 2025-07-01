
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Database, BarChart3, TrendingUp, PieChart, LineChart } from 'lucide-react';

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
      {/* Enhanced Background Data Visualization Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 border-2 border-purple-400 rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
        
        {/* Data Analytics Visual Elements */}
        <div className="absolute top-32 left-1/3 w-16 h-16 border-2 border-cyan-400 transform rotate-45"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-orange-400 rounded-full"></div>
        <div className="absolute top-1/2 left-16 w-12 h-32 bg-gradient-to-t from-blue-300 to-purple-300 opacity-30"></div>
        <div className="absolute top-1/2 right-16 w-12 h-24 bg-gradient-to-t from-green-300 to-blue-300 opacity-30"></div>
      </div>

      {/* Floating Data Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <BarChart3 className="absolute top-1/4 left-1/6 text-blue-300 opacity-20 animate-pulse" size={32} />
        <PieChart className="absolute top-1/3 right-1/6 text-purple-300 opacity-20 animate-pulse delay-300" size={28} />
        <LineChart className="absolute bottom-1/3 left-1/5 text-green-300 opacity-20 animate-pulse delay-700" size={30} />
        <Database className="absolute bottom-1/4 right-1/5 text-orange-300 opacity-20 animate-pulse delay-1000" size={26} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-4">
          {/* Professional Rectangular Profile Picture */}
          <div className="w-40 h-48 mx-auto mb-4 relative">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 rounded-xl shadow-2xl transform rotate-3">
              <div className="w-full h-full transform -rotate-3 rounded-lg overflow-hidden">
                <img 
                  src={`${basePath}/lovable-uploads/1615c7a8-cec1-45a6-a4de-a62026564e90.png`}
                  alt="Sai Teja Gajula" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            {/* Data Analytics Badge */}
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2 shadow-lg">
              <BarChart3 className="text-white" size={20} />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-3">
          Sai Teja Gajula
        </h1>
        
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-200 shadow-lg">
            <Database className="text-blue-600" size={18} />
            <span className="text-lg md:text-xl text-gray-700 font-semibold">Data Analyst</span>
          </div>
          <div className="text-gray-400 text-xl">•</div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-cyan-50 px-4 py-2 rounded-full border border-purple-200 shadow-lg">
            <BarChart3 className="text-purple-600" size={18} />
            <span className="text-lg md:text-xl text-gray-700 font-semibold">BI Expert</span>
          </div>
        </div>
        
        <p className="text-base text-gray-500 mb-5 max-w-2xl mx-auto">
          Transforming complex data into actionable insights with 2+ years of experience 
          in fintech and logistics. Specialized in SQL, Python, Power BI, and cloud analytics.
        </p>

        {/* Enhanced Data Metrics Display */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-5">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-2">
              <div className="bg-blue-100 rounded-full p-2">
                <TrendingUp className="text-blue-600" size={20} />
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900">100K+</div>
            <div className="text-xs text-gray-600 font-medium">Records Analyzed</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-2">
              <div className="bg-purple-100 rounded-full p-2">
                <BarChart3 className="text-purple-600" size={20} />
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900">30%</div>
            <div className="text-xs text-gray-600 font-medium">Efficiency Boost</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-2">
              <div className="bg-green-100 rounded-full p-2">
                <Database className="text-green-600" size={20} />
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900">2+</div>
            <div className="text-xs text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
        
        {/* Data Analytics Process Flow */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-5 shadow-xl border border-white/50 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-2 text-sm">
            <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
              <Database size={14} />
              Data Collection
            </div>
            <div className="text-gray-400 text-lg">→</div>
            <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">
              <TrendingUp size={14} />
              Analysis
            </div>
            <div className="text-gray-400 text-lg">→</div>
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
              <BarChart3 size={14} />
              Visualization
            </div>
            <div className="text-gray-400 text-lg">→</div>
            <div className="flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">
              <PieChart size={14} />
              Insights
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 flex items-center gap-2"
          >
            <BarChart3 size={16} />
            View My Work
          </button>
          
          <a 
            href="mailto:gajulasaiteja8601@gmail.com"
            className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold flex items-center gap-2"
          >
            <Mail size={16} />
            Get In Touch
          </a>
        </div>
        
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://github.com/Sai-teja-gajula" target="_blank" rel="noopener noreferrer" 
             className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110 bg-white/50 backdrop-blur-sm p-2 rounded-full shadow-lg">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sai-teja-gajula-24a770258/" target="_blank" rel="noopener noreferrer"
             className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110 bg-white/50 backdrop-blur-sm p-2 rounded-full shadow-lg">
            <Linkedin size={24} />
          </a>
          <a href="mailto:gajulasaiteja8601@gmail.com"
             className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110 bg-white/50 backdrop-blur-sm p-2 rounded-full shadow-lg">
            <Mail size={24} />
          </a>
        </div>
        
        <button onClick={scrollToAbout} className="animate-bounce">
          <ArrowDown size={28} className="text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
