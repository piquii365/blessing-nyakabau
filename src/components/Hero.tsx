import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5E6E8] via-[#D5C6E0] to-[#AAA1C8">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-[#192A51] mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#967AA1] to-[#AAA1C8] bg-clip-text text-transparent">
                Blessing
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#967AA1] mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-[#192A51]/80 mb-8 leading-relaxed">
              Passionate developer specializing in modern web technologies and
              scalable solutions. I create robust applications using MERN stack,
              .NET, Java, Python, and various database technologies. Always
              ready to adapt to customer needs and deliver exceptional results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#192A51] text-white hover:bg-opacity-90 focus:ring-[#192A51]"
              >
                Get In Touch
              </a>
              <a
                href="#about"
                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent border-2 border-[#192A51] text-[#192A51] hover:bg-[#192A51] hover:text-white focus:ring-[#192A51]"
              >
                Learn More
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                href="https://github.com/piquii365"
                className="w-12 h-12 bg-[#192A51]/10 hover:bg-[#192A51] hover:text-white text-[#192A51] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                title="linkedin"
                href="https://www.linkedin.com/in/blessing-nyakabau"
                className="w-12 h-12 bg-[#192A51]/10 hover:bg-[#192A51] hover:text-white text-[#192A51] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="email"
                href="mailto:piquiienock@gmail.com"
                className="w-12 h-12 bg-[#192A51]/10 hover:bg-[#192A51] hover:text-white text-[#192A51] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-up">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                <div className="w-32 h-32 bg-gradient-to-br from-[#192A51] to-[#967AA1] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">BN</span>
                </div>
                <h3 className="text-xl font-semibold text-[#192A51] text-center mb-2">
                  Blessing Nyakabau
                </h3>
                <p className="text-[#967AA1] text-center">
                  Full Stack Developer
                </p>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#967AA1] to-accent rounded-lg flex items-center justify-center shadow-lg animate-float">
                <span className="text-white font-bold text-sm">JS</span>
              </div>
              <div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#192A51] to-[#967AA1] rounded-lg flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-white font-bold text-sm">C#</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#AAA1C8] to-#F5E6E8 rounded-lg flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-[#192A51] font-bold text-sm">PY</span>
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#967AA1] to-[#192A51] rounded-lg flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "3s" }}
              >
                <span className="text-white font-bold text-sm">SQL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-[#192A51]/60" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
