
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced Background Data Visualization Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        {/* Animated Data Points */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
        
        {/* Data Grid Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="grid grid-cols-12 grid-rows-12 gap-8 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-blue-300 rounded-full opacity-30"></div>
            ))}
          </div>
        </div>
        
        {/* Chart-like Bars */}
        <div className="absolute bottom-10 left-10 flex items-end gap-2 opacity-30">
          <div className="w-4 h-12 bg-blue-400 rounded-t"></div>
          <div className="w-4 h-20 bg-purple-400 rounded-t"></div>
          <div className="w-4 h-8 bg-green-400 rounded-t"></div>
          <div className="w-4 h-16 bg-orange-400 rounded-t"></div>
          <div className="w-4 h-24 bg-cyan-400 rounded-t"></div>
        </div>
        
        <div className="absolute top-20 right-10 flex items-end gap-2 opacity-30">
          <div className="w-4 h-16 bg-pink-400 rounded-t"></div>
          <div className="w-4 h-12 bg-indigo-400 rounded-t"></div>
          <div className="w-4 h-20 bg-yellow-400 rounded-t"></div>
          <div className="w-4 h-8 bg-red-400 rounded-t"></div>
        </div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <path d="M100,100 Q200,50 300,100 T500,100" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M200,200 Q400,150 600,200 T900,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M150,300 Q350,250 550,300 T850,300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
