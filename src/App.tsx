import { Toaster } from "sonner";
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
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#192A51",
            color: "#F5E6E8",
            border: "1px solid #967AA1",
          },
        }}
      />
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
