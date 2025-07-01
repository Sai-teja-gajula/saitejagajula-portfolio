
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Takyon Transport",
      position: "Data Analyst",
      location: "Hyderabad, Telangana",
      period: "January 2023 – July 2023",
      achievements: [
        "Managed 100K+ rows in Excel/SQL for tracking shipment KPIs, boosting accuracy and improving query performance",
        "Built Power BI dashboards for real-time delivery tracking, improving on-time performance by 12%",
        "Analyzed SQL data to detect operational inefficiencies, reducing manual reporting errors by 30%",
        "Automated tracking reports with Excel/SQL, cutting manual workload by 40%",
        "Optimized collection workflows, reducing Walmart/FedEx reporting delays by 30%"
      ]
    },
    {
      company: "Teamtech Solutions",
      position: "Data Analyst",
      location: "Hyderabad, Telangana",
      period: "January 2021 – December 2022",
      achievements: [
        "Analyzed 5,000+ financial and loan records to detect delinquency patterns and credit risk segments",
        "Developed Power BI dashboards to monitor loan performance and default trends",
        "Used SQL and Python for risk modeling and repayment forecasting",
        "Collaborated with credit, risk, and engineering teams to standardize reporting formats",
        "Automated compliance reporting with Python scripts, reducing manual effort by 35%",
        "Led requirements gathering and user story documentation in Agile sprints using JIRA"
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-1">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end space-y-1">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin size={14} className="mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
