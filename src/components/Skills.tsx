import React from "react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "JavaScript (MERN)", level: 90 },
        { name: "React.js", level: 88 },
        { name: "TanStack Query", level: 85 },
        { name: "HTML/CSS", level: 92 },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "C# .NET (MVC)", level: 87 },
        { name: "Node.js", level: 85 },
        { name: "Java Programming", level: 82 },
        { name: "Python Programming", level: 80 },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "SQL Server", level: 86 },
        { name: "Redis", level: 78 },
        { name: "Git", level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-br from-[#F5E6E8] to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#192A51] mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#967AA1] to-[#D5C6E0] mx-auto mb-8"></div>
          <p className="text-lg text-[#192A51]/80 max-w-2xl mx-auto">
            A comprehensive skill set spanning multiple programming languages,
            frameworks, and technologies. Always ready to adapt and learn new
            technologies based on project requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#192A51] mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#192A51] font-medium">
                        {skill.name}
                      </span>
                      <span className="text-[#967AA1] text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-[#D5C6E0]/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#967AA1] to-[#D5C6E0] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-[#192A51] mb-8">
            Additional Capabilities
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "RESTful APIs",
              "Responsive Design",
              "Version Control",
              "Database Design",
              "Performance Optimization",
              "Testing & Debugging",
              "Agile Development",
              "Code Review",
              "Technical Documentation",
              "Client Communication",
            ].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-[#192A51] to-[#967AA1] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
