import React, { useState, useRef } from "react";
import {
  FileText,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const CVDownload: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendCV = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm("service_abm4kuj", "template_uqw3he3", formRef.current, {
          publicKey: "nPjdPQJ6UM-vfXOpy",
        })
        .then(
          () => {
            toast.success("Message sent successfully!");
          },
          (error) => {
            console.error("EmailJS error:", error);
            toast.error("Failed to send message.");
          }
        );
      formRef.current.reset();
    } else {
      toast.error("Form reference is not available.");
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitted(true);
      toast.success("CV sent successfully! Please check your email.");
    } catch (error) {
      console.error("Error sending CV:", error);
      toast.error("Failed to send CV. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const cvHighlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Experience",
      description: "Detailed work history and project contributions",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education & Certifications",
      description: "Academic background and professional certifications",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Technical Skills",
      description: "Comprehensive list of programming languages and tools",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Project Portfolio",
      description: "Key projects with technologies and achievements",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-br from-[#D5C6E0] to-[#F5E6E8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#192A51] mb-6">
            Get My CV
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#967AA1] to-[#AAA1C8] mx-auto mb-8"></div>
          <p className="text-lg text-[#192A51]/80 max-w-2xl mx-auto">
            Enter your email address to receive my comprehensive CV with
            detailed information about my professional background, skills, and
            experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CV Request Form */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#192A51] to-[#967AA1] rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#192A51]">
                    Request CV via Email
                  </h3>
                  <p className="text-[#967AA1] font-medium">
                    Professional PDF Document
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-[#192A51]/80">
                  <div className="w-2 h-2 bg-[#967AA1] rounded-full mr-3"></div>
                  <span>Comprehensive professional overview</span>
                </div>
                <div className="flex items-center text-[#192A51]/80">
                  <div className="w-2 h-2 bg-[#967AA1] rounded-full mr-3"></div>
                  <span>Detailed project portfolio</span>
                </div>
                <div className="flex items-center text-[#192A51]/80">
                  <div className="w-2 h-2 bg-[#967AA1] rounded-full mr-3"></div>
                  <span>Technical skills breakdown</span>
                </div>
                <div className="flex items-center text-[#192A51]/80">
                  <div className="w-2 h-2 bg-[#967AA1] rounded-full mr-3"></div>
                  <span>Contact information included</span>
                </div>
              </div>

              {!isSubmitted ? (
                <form
                  onSubmit={handleSendCV}
                  ref={formRef}
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#192A51] font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 border border-[#D5C6E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#967AA1] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#192A51] to-[#967AA1] text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending CV...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send CV to Email</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#192A51] mb-2">
                    CV Sent Successfully!
                  </h4>
                  <p className="text-[#192A51]/80 mb-4">
                    Please check your email inbox (and spam folder) for my CV.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                    }}
                    className="text-[#967AA1] hover:text-[#192A51] font-medium transition-colors duration-300"
                  >
                    Send to another email
                  </button>
                </div>
              )}

              <p className="text-center text-[#192A51]/60 text-sm mt-4">
                Your email will only be used to send the CV • No spam guaranteed
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
                🔒 Privacy Notice
              </h4>
              <p className="text-[#192A51]/80 leading-relaxed">
                Your email address is used solely for sending the CV and will
                not be stored, shared, or used for any other purpose. I respect
                your privacy and follow best practices for data protection.
              </p>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
              <h4 className="text-lg font-semibold text-[#192A51] mb-3">
                📧 What to Expect
              </h4>
              <ul className="text-[#192A51]/80 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>CV delivered within minutes</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Professional PDF format</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Optimized for ATS systems</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Print-friendly layout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVDownload;
