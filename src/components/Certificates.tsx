
import React from 'react';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Google Data Analytics Professional Certificate",
      provider: "Coursera",
      status: "Completed",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/DJLRFE3V6T19",
      description: "Comprehensive program covering data analysis, visualization, and statistical analysis using industry-standard tools."
    },
    {
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      status: "In Progress",
      description: "Foundational certification covering AWS cloud concepts, services, security, and pricing."
    },
    {
      title: "Microsoft Power BI Certification",
      provider: "Microsoft",
      status: "In Progress",
      description: "Advanced certification focusing on data modeling, visualization, and business intelligence with Power BI."
    }
  ];

  return (
    <section id="certificates" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  {cert.status === "Completed" ? (
                    <CheckCircle className="text-green-600 mr-2" size={20} />
                  ) : (
                    <Clock className="text-orange-600 mr-2" size={20} />
                  )}
                  <span className={`font-semibold text-sm ${cert.status === "Completed" ? "text-green-600" : "text-orange-600"}`}>
                    {cert.status}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-blue-600 font-semibold mb-3 text-sm">{cert.provider}</p>
              <p className="text-gray-600 mb-4 leading-relaxed text-xs">
                {cert.description}
              </p>
              
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors text-sm"
                >
                  View Certificate <ArrowRight size={14} className="ml-2" />
                </a>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 italic text-sm">
            Continuously expanding my skill set through professional development and industry certifications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
