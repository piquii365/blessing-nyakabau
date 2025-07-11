import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CVDownload from "./components/CVDownload";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#F5E6E8]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CVDownload />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
