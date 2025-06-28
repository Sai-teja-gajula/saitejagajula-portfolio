
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Libraries",
      skills: ["Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn)", "SQL (PostgreSQL)", "R"]
    },
    {
      title: "Data Analytics & Visualization",
      skills: ["Power BI", "Tableau", "Excel"]
    },
    {
      title: "Data Engineering & ETL",
      skills: ["Apache Airflow", "Databricks", "Azure Data Factory", "Snowflake", "Redshift"]
    },
    {
      title: "Cloud & Storage",
      skills: ["AWS (S3, EMR, EC2, RDS)", "Azure Data Lake Gen2"]
    },
    {
      title: "Big Data & Streaming",
      skills: ["Apache Kafka", "Apache Spark"]
    },
    {
      title: "Workflow & Version Control",
      skills: ["Git", "JIRA", "Agile/Scrum methodologies"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                    <span className="text-gray-700 text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Business & Domain Knowledge
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Business Requirements Gathering",
              "Agile/Scrum Framework",
              "Functional Specifications",
              "Healthcare Claims Data",
              "ICD/CPT Code Understanding",
              "Stakeholder Communication",
              "Revenue Cycle Analytics",
              "Risk Modeling & Compliance"
            ].map((skill, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg text-center">
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
