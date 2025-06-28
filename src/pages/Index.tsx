
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
      {/* Background Data Visualization Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
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
