import React from "react";
import { Code, Database, Server, Smartphone } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "React, JavaScript, responsive design with modern UI/UX principles",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description:
        ".NET MVC, Node.js, RESTful APIs, and scalable server architecture",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description:
        "MySQL, SQL Server, Redis for efficient data storage and retrieval",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Full Stack Solutions",
      description: "End-to-end development from concept to deployment",
    },
  ];

  return (
    <section
      id="about"
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#192A51] mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#967AA1] to-[#AAA1C8] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-[#192A51] mb-6">
              Passionate Developer with Diverse Technical Expertise
            </h3>
            <p className="text-lg text-[#192A51]/80 mb-6 leading-relaxed">
              I'm a dedicated full-stack developer with a strong foundation in
              multiple programming languages and frameworks. My journey in
              software development has equipped me with the skills to build
              robust, scalable applications that meet diverse client needs.
            </p>
            <p className="text-lg text-[#192A51]/80 mb-8 leading-relaxed">
              From crafting responsive user interfaces with React to developing
              powerful backend systems with .NET and managing complex databases,
              I bring a comprehensive approach to every project. My adaptability
              and commitment to continuous learning ensure that I can adjust to
              any customer requirements and deliver exceptional results.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Continuous Learning",
                "Client-Focused",
              ].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-gradient-to-r from-[#D5C6E0] to-[#AAA1C8] text-[#192A51] rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F5E6E8] to-[#D5C6E0] p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-[#967AA1] mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-[#192A51] mb-3">
                  {item.title}
                </h4>
                <p className="text-[#192A51]/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
