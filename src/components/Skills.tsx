
import React from 'react';
import { Database, BarChart3, Cloud, GitBranch, Zap, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Libraries",
      icon: <GitBranch className="text-blue-600" size={24} />,
      skills: ["Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn)", "SQL (PostgreSQL)", "R"],
      color: "from-blue-50 to-blue-100"
    },
    {
      title: "Data Analytics & Visualization",
      icon: <BarChart3 className="text-purple-600" size={24} />,
      skills: ["Power BI", "Tableau", "Excel"],
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "Data Engineering & ETL",
      icon: <Settings className="text-green-600" size={24} />,
      skills: ["Apache Airflow", "Databricks", "Azure Data Factory", "Snowflake", "Redshift"],
      color: "from-green-50 to-green-100"
    },
    {
      title: "Cloud & Storage",
      icon: <Cloud className="text-cyan-600" size={24} />,
      skills: ["AWS (S3, EMR, EC2, RDS)", "Azure Data Lake Gen2"],
      color: "from-cyan-50 to-cyan-100"
    },
    {
      title: "Big Data & Streaming",
      icon: <Zap className="text-orange-600" size={24} />,
      skills: ["Apache Kafka", "Apache Spark"],
      color: "from-orange-50 to-orange-100"
    },
    {
      title: "Workflow & Version Control",
      icon: <Database className="text-indigo-600" size={24} />,
      skills: ["Git", "JIRA", "Agile/Scrum methodologies"],
      color: "from-indigo-50 to-indigo-100"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive expertise in modern data technologies and methodologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/50`}>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white rounded-full p-3 shadow-lg">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-white/70 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-white/50">
                    <span className="text-gray-700 text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-full p-3">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Business & Domain Knowledge
              </h3>
            </div>
          </div>
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
              <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg text-center border border-green-100 hover:shadow-md transition-shadow">
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Pipeline Visualization */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Data Pipeline Expertise</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">Data Collection</div>
            <div className="text-gray-400">→</div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold">Data Processing</div>
            <div className="text-gray-400">→</div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">Data Analysis</div>
            <div className="text-gray-400">→</div>
            <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">Visualization</div>
            <div className="text-gray-400">→</div>
            <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-semibold">Insights</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
