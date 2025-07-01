
import React from 'react';
import { Github, ArrowRight, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Spotify Data Pipeline Project",
      technologies: "Python, Apache Kafka, PostgreSQL, Power BI",
      date: "January 2025",
      description: "Real-time data pipeline processing 50,000+ user activity logs with cloud storage and analytics.",
      highlights: [
        "Designed real-time data pipeline using Kafka, Python, and AWS S3",
        "Created ETL workflows using Apache Airflow with AWS RDS (PostgreSQL)",
        "Built interactive Power BI dashboards improving insights by 35%",
        "Delivered real-time analytics for playlist recommendations"
      ],
      github: "https://github.com/Sai-teja-gajula"
    },
    {
      title: "Disease Prediction & Analytics Web App",
      technologies: "Python, Pandas, Scikit-learn, SQL, Power BI, Streamlit",
      date: "August 2024",
      description: "End-to-end ML pipeline predicting heart disease, diabetes, and Parkinson's with 85-90% accuracy.",
      highlights: [
        "Cleaned and transformed 10K+ clinical records using Python and SQL",
        "Built ML models (Logistic Regression, Random Forest) with 85-90% accuracy",
        "Deployed interactive Streamlit web app for user-friendly predictions",
        "Created Power BI dashboards for disease distribution analysis"
      ],
      github: "https://github.com/Sai-teja-gajula"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar size={14} className="mr-2" />
                  {project.date}
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-3">
                {project.technologies}
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              
              <div className="space-y-2 mb-4">
                {project.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-start">
                    <ArrowRight size={14} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-xs leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
              
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors text-sm"
              >
                View Project <ArrowRight size={14} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
