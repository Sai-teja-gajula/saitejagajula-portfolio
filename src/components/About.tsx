
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Summary</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              Analytical and detail-oriented Data Analyst with 2+ years of experience in fintech and logistics, 
              skilled in SQL, Python, Power BI, and Excel. Proven ability to extract insights from large datasets, 
              automate reporting, and support risk modeling, compliance, and performance optimization.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              Strong collaborator experienced in Agile teams, requirement gathering, and delivering data-driven 
              solutions that drive business impact. Currently pursuing Masters in Computer/Information Technology 
              Administration and Management at Lindsey Wilson College.
            </p>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-semibold text-gray-900">Location:</span>
                <p className="text-gray-600">Chicago, Illinois</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Education:</span>
                <p className="text-gray-600">Masters in IT (2023-2025)</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Experience:</span>
                <p className="text-gray-600">2+ Years</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Focus:</span>
                <p className="text-gray-600">Data Analytics & BI</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Core Competencies</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700 text-sm">Advanced SQL & Database Management</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                <span className="text-gray-700 text-sm">Python Data Analysis & Machine Learning</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                <span className="text-gray-700 text-sm">Power BI & Tableau Visualization</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
                <span className="text-gray-700 text-sm">AWS & Azure Cloud Analytics</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <span className="text-gray-700 text-sm">ETL Pipeline Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
                <span className="text-gray-700 text-sm">Business Intelligence & Reporting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
