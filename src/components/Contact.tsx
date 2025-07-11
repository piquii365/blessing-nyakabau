import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
  MessageCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "piquiienock@gmail.com",
      link: "mailto:piquiienock@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+263780308290",
      link: "tel:+263780308290",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Whatsapp",
      value: "078 030 8290",
      link: "https://wa.me/263780308290",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Available Worldwide",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-br from-[#192A51] to-[#967AA1]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D5C6E0] to-[#F5E6E8] mx-auto mb-8"></div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always open to discussing new
            opportunities and exciting projects. Let's create something amazing
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Whether you're a company looking to hire, or
                you're a fellow developer wanting to collaborate, I'd love to
                hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D5C6E0] hover:text-[#F5E6E8] transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-white/80">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/piquii365"
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linked.in/blessing_nyakabau"
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://facebook.com/piquii_nyakabau"
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D5C6E0] focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D5C6E0] focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D5C6E0] focus:border-transparent transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D5C6E0] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="point-contact"
                  className="block text-white font-medium mb-2"
                >
                  Preferred Communication
                </label>
                <select
                  id="point-contact"
                  name="contact"
                  defaultValue={"email"}
                  required
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D5C6E0] focus:border-transparent transition-all duration-300"
                >
                  <option value={"call"}>Call</option>
                  <option value={"whatsapp"}>Whatsapp</option>
                  <option value={"email"}>Email</option>
                  <option value={"facebook"}>Facebook</option>
                  <option value={"linkedin"}>LinkedIn</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D5C6E0] to-[#F5E6E8] text-primary font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
