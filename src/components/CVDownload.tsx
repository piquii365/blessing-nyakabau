import React from "react";
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react";

const CVDownload: React.FC = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv/Blessing_Nyakabau_CV.pdf'; // You'll need to add your actual CV file to the public folder
    link.download = 'Blessing_Nyakabau_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cvHighlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Experience",
      description: "Detailed work history and project contributions"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education & Certifications",
      description: "Academic background and professional certifications"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Technical Skills",
      description: "Comprehensive list of programming languages and tools"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Project Portfolio",
      description: "Key projects with technologies and achievements"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-br from-[#D5C6E0] to-[#F5E6E8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#192A51] mb-6">
            Download My CV
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#967AA1] to-[#AAA1C8] mx-auto mb-8"></div>
          <p className="text-lg text-[#192A51]/80 max-w-2xl mx-auto">
            Get a comprehensive overview of my professional background, skills, and experience. 
            Perfect for HR departments and potential collaborators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CV Preview Card */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#192A51] to-[#967AA1] rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#192A51]">
                    Blessing Nyakabau
                  </h3>
                  <p className="text-[#967AA1] font-medium">
                    Full Stack Developer CV
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-[#192A51]/80">
                  <div className="w-2 h-2 bg-[#967AA1] rounded-full mr-3"></div>
                  <span>5+ years of development experience</span>
                </div>
                <div className="flex items-center text-[#192A51]/80">
                  <div className="w-2 h-2 bg-[#967AA1] rounded-full mr-3"></div>
                  <span>Multiple programming languages & frameworks</span>
                </div>
                <div className="flex items-center text-[#192A51]/80">
                  <div className="w-2 h-2 bg-[#967AA1] rounded-full mr-3"></div>
                  <span>Full-stack project portfolio</span>
                </div>
                <div className="flex items-center text-[#192A51]/80">
                  <div className="w-2 h-2 bg-[#967AA1] rounded-full mr-3"></div>
                  <span>Professional references available</span>
                </div>
              </div>

              <button
                onClick={handleDownloadCV}
                className="w-full bg-gradient-to-r from-[#192A51] to-[#967AA1] text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <Download size={24} />
                <span>Download CV (PDF)</span>
              </button>

              <p className="text-center text-[#192A51]/60 text-sm mt-4">
                Last updated: January 2025 • File size: ~2MB
              </p>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#967AA1] to-[#AAA1C8] rounded-full flex items-center justify-center shadow-lg animate-float">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#AAA1C8] to-[#D5C6E0] rounded-full flex items-center justify-center shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <GraduationCap className="w-6 h-6 text-[#192A51]" />
            </div>
          </div>

          {/* CV Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#192A51] mb-8">
              What's Included in My CV
            </h3>
            
            {cvHighlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#967AA1] to-[#AAA1C8] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {highlight.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#192A51] mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-[#192A51]/80 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 bg-gradient-to-r from-[#192A51]/10 to-[#967AA1]/10 rounded-xl border border-[#967AA1]/20">
              <h4 className="text-lg font-semibold text-[#192A51] mb-3">
                💡 Quick Tip
              </h4>
              <p className="text-[#192A51]/80 leading-relaxed">
                My CV is regularly updated with the latest projects and skills. 
                It's formatted for both digital viewing and printing, making it 
                perfect for any hiring process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVDownload;