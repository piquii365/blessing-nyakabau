import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#F5E6E8]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
